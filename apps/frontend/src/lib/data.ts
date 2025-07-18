

import { DataStream } from "@prisma/index";
import { unstable_cache } from "next/cache";
import { db } from "./prisma";
import { ActionWithRelations, ApiKeyExtend, CachedDeviceType, DevicesByProjectType, ProjectTypeData } from "./types";




export async function getCachedDevice({ deviceId, userId }: CachedDeviceType) {
    return unstable_cache(async () => GetDevice({ userId, deviceId }), ["device", deviceId], {
        revalidate: false,
        tags: [`device:${deviceId}`]
    }
    )()
}
export async function getCachedDevicesByProject({ userId, projectId }: DevicesByProjectType) {
    return unstable_cache(async () => GetDevicesByProject({ userId, projectId }), ["project_devices", projectId], {
        revalidate: false,
        tags: [`project_devices:${userId}:${projectId}`]
    }
    )()
}

export async function GetDevice({ userId, deviceId }: CachedDeviceType) {
    const device = await db(userId).device.findFirst({
        where: {
            id: deviceId,
            Project: {
                userId: userId
            }
        },
        include: {
            Project: {
                select: {
                    id: true,
                    title: true
                }
            }
        }
    },)
    return device
}
export async function GetDevices(userId: string) {
    const device = await db(userId).device.findMany({
        where: {
            Project: {
                userId: userId
            }
        },
        include: {
            Project: {
                select: {
                    id: true,
                    title: true
                }
            }
        }
    })
    return device
}
export async function GetDevicesWithDataStream(userId: string) {
    const device = await db(userId).device.findMany({
        where: {
            Project: {
                userId: userId
            }
        },
        include: {
            dataStreams: true


        }
    })
    return device
}
export async function getCachedDevices(userId: string) {
    return unstable_cache(async () => GetDevices(userId), ["devices", userId], {
        revalidate: false,
        tags: [`devices:${userId}`]
    }
    )()
}
export async function getCachedDevicesIncludeDataStream(userId: string) {
    return unstable_cache(async () => GetDevicesWithDataStream(userId), ["devices_with_datastream", userId], {
        revalidate: false,
        tags: [`devices_with_datastream:${userId}`]
    }
    )()
}

export async function GetDevicesByProject({ userId, projectId }: DevicesByProjectType) {
    const devices = await db(userId).device.findMany({
        where: {
            Project: {
                id: projectId,
                userId: userId
            }
        },
        include: {
            Project: {
                select: {
                    id: true,
                    title: true
                }
            }
        }
    })

    return devices
}
export async function GetRules(userId: string) {
    return await db(userId).rule.findMany({
        where: {
            userId
        }
    })
}
export async function getCachedRules(userId: string) {
    return unstable_cache(async () => GetRules(userId), ["rules", userId], {
        revalidate: false,
        tags: [`rules:${userId}`]
    }
    )()
}

export async function GetProject({ userId, projectId }: ProjectTypeData) {
    const project = await db(userId).project.findFirst({
        where: {
            id: projectId,
            userId: userId
        }
    })
    return project
}
export async function GetProjects(userId: string) {
    const projects = await db(userId).project.findMany({
        where: {
            userId: userId
        }
    })
    return projects
}
export async function getCachedProjects(userId: string) {
    return unstable_cache(async () => GetProjects(userId), ["projects", userId], {
        revalidate: false,
        tags: [`projects:${userId}`]
    }
    )()
}

export async function getCachedProject({ userId, projectId }: ProjectTypeData) {
    return unstable_cache(async () => GetProject({ userId, projectId }), ["project", userId, projectId], {
        revalidate: false,
        tags: [`project:${userId}:${projectId}`]
    }
    )()
}
export async function GetApiKeys(userId: string) {
    const apiKeys = await db(userId).apiKey.findMany({
        where: {
            userId: userId
        },
        select: {
            id: true,
            name: true,
            createdAt: true,
            initial: true,
            type: true
        }

    })
    return apiKeys as ApiKeyExtend[];
}

export async function getCachedApiKeys(userId: string) {
    return unstable_cache(async () => GetApiKeys(userId), ["api_keys", userId], {
        revalidate: false,
        tags: [`api_keys:${userId}`]
    }
    )()
}
export async function GetDataStreams({ userId, projectId }: ProjectTypeData) {
    const project = await db(userId).project.findFirst({
        where: {
            userId,
            id: projectId
        }
    })
    if (!project) return []
    const devices = await db(userId).device.findMany({
        where: {
            projectId,
        },
        select: {
            dataStreams: true
        }
    })
    if (!devices) return []
    const dataStreams: DataStream[] = devices.flatMap((device) => device.dataStreams)

    return dataStreams
}
export async function getCachedDataStreamsProject({ userId, projectId }: ProjectTypeData) {
    return unstable_cache(async () => GetDataStreams({ userId, projectId }), ["dataStreams", userId, projectId], {
        revalidate: false,
        tags: [`data_stream:${userId}:${projectId}`]
    }
    )()
}
export async function GetAllUsers(userId: string) {
    const users = await db(userId).user.findMany({

    })
    return users;
}
export async function getCachedUsers(userId: string) {
    return unstable_cache(async () => GetAllUsers(userId), ["users"], {
        revalidate: false,
        tags: [`admin:users`]
    }
    )()
}
export async function GetUserAdmin(userId: string) {
    const user = await db(userId).user.findFirst({
        where: {
            id: userId

        },

        include: {
            projects: {
                include: {
                    devices: {
                        include: {
                            dataStreams: true
                        }
                    }
                }
            }
        }
    })
    return user
}
export async function GetActionsForUser(userId: string): Promise<ActionWithRelations[]> {
    return await db(userId).action.findMany({
        where: {
            userId
        },
        include: {
            emailAction: true,
            telegramAction: true,
            webhookAction: true
        }
    })



}
export async function getCachedActions(userId: string) {
    return unstable_cache(async () => GetActionsForUser(userId), ['actions', userId], {
        revalidate: false,
        tags: [`actions:${userId}`]
    })()
}
export async function getCachedUser(userId: string) {
    return unstable_cache(async () => GetUserAdmin(userId), ["user", userId], {
        revalidate: false,
        tags: [`admin:user:${userId}`]
    }
    )()
}
export async function getCachedAudits(userId: string) {
    return unstable_cache(async () => getAudits(userId), ['audits', userId], {
        revalidate: 60,
        tags: [`audits`]
    })()
}
export async function getCachedDataLogs(userId: string) {
    return unstable_cache(async () => getDataLogs(userId), ['datalogs', userId], {
        revalidate: 60,
        tags: [`datalogs:${userId}`]
    })()
}
export async function getAudits(userId: string) {
    return await db(userId).audit.findMany({
        where: {
            userId
        },
        include: {
            User: {
                select: {
                    username: true
                }
            }
        }
    })
}
export async function getDataLogs(userId: string) {
    const dataLogs = await db(userId).dataPoint.findMany({
        where: {
            dataStream: {
                Device: {
                    Project: {
                        userId
                    }
                }
            }
        },
        include: {
            dataStream: true
        }
    })


    return dataLogs || []

}
