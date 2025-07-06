from typing import Union

from fastapi import FastAPI
from contextlib import asynccontextmanager

from database.db import db

app = FastAPI()


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Load the ML model
    await db.connect()
    yield
    # Clean up the ML models and release the resources
    await db.disconnect()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
