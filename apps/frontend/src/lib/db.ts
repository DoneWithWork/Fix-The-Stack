import { Prisma, PrismaClient } from "@prisma/client";
import { mapping } from "./types";

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient
}

type modelType = Uncapitalize<Prisma.ModelName>

const prisma = globalForPrisma.prisma ?? new PrismaClient();

function uncapitalise(word: string) {
    return word.charAt(0).toLowerCase() + word.slice(1)
}
export function createDBClient(userId?: string) {
    return prisma.$extends({
        query: {
            async $allOperations({ operation, model, args, query }) {
                const before = Date.now();
                const after = Date.now();
                const result = await query(args);
                console.log(`Query ${model}.${operation} took ${after - before}ms`);
                const hasBeforeData = ["delete", "update", 'updateMany']
                const hasAfterData = ["create", "createMany", "update", "updateMany"];

                if (model && model !== "Audit") {
                    const modelDelegate = (prisma)[uncapitalise(model) as modelType] as {
                        findFirst: (args: unknown) => Promise<object>;
                    };
                    const beforeQuery = await modelDelegate.findFirst({
                        where: args.where,
                    })
                    const beforeResult = hasBeforeData.includes(operation) ? beforeQuery : {};
                    const afterResult = hasAfterData.includes(operation) ? result : {};
                    await prisma.audit.create({
                        data: {
                            after: afterResult,
                            before: beforeResult,
                            model: model,
                            action: mapping[operation],
                            userId: userId || 'system'
                        }
                    });
                }


                return result;
            }
        }
    });
}

export const db = (userId: string | undefined) => createDBClient(userId);

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;