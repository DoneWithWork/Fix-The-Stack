from contextlib import asynccontextmanager
from typing import Union

from database.db import db
from fastapi import FastAPI
from pydantic import BaseModel


@asynccontextmanager
async def lifespan(app: FastAPI):
    await db.connect()
    yield
    await db.disconnect()


app = FastAPI(lifespan=lifespan)


class DataStreamBody(BaseModel):
    apiKey: str
    deviceAuthToken: str
    data: dict[str, Union[int, float, str]]


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/api/data-stream")
async def data_stream(dataStreamBody: DataStreamBody):
    body = dataStreamBody
    apiKey = await db.apikey.find_first(where={"key": body.apiKey})
    if not apiKey:
        return {"message": "Invalid Api Key", "success": False}
    if apiKey.type == "READ":
        return {"message": "Invalid Api Key scope", "success": False}
    device = await db.device.find_first(
        where={"deviceAuthToken": body.deviceAuthToken}, include={"dataStreams": True}
    )

    if not device:
        return {
            "message": "Device not found or invalid deviceAuthToken",
            "success": False,
        }
    if not device.dataStreams:
        return {
            "message": "You do not have any data streams created!!",
            "success": False,
        }

    # Create a map of all titles with the ids as values
    streamTitles = {ds.title: ds.id for ds in device.dataStreams}
    data = []
    notCreatedKeys = []

    # Ensure title is present in dataStream then only create a dataPoint
    # titles with no dataStreams are added to notCreatedKeys to send to user as warning
    for key, value in body.data.items():
        streamId = streamTitles.get(key)
        if streamId:
            data.append(
                {
                    "dataStreamId": streamId,
                    "value": value,
                    "type": type(value).__name__,
                }
            )
        else:
            notCreatedKeys.append(key)

    # Data points creation with valid titles
    dataPoints = await db.datapoint.create_many(data=data)

    if not dataPoints:
        return {
            "message": "Failed to create data points",
            "success": False,
        }
    response = {"message": "Successfully created data points", "success": True}

    if notCreatedKeys:
        response["warning"] = (
            "The following titles were detected but do not match any data stream: "
            + ", ".join(notCreatedKeys)
        )

    return response


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
