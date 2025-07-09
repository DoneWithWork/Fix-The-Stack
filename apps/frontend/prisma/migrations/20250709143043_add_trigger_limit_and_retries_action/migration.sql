/*
  Warnings:

  - Added the required column `retries` to the `Action` table without a default value. This is not possible if the table is not empty.
  - Added the required column `triggerLimit` to the `Action` table without a default value. This is not possible if the table is not empty.
  - Added the required column `receiverEmail` to the `EmailAction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Action" ADD COLUMN     "retries" INTEGER NOT NULL,
ADD COLUMN     "triggerLimit" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "EmailAction" ADD COLUMN     "receiverEmail" TEXT NOT NULL;
