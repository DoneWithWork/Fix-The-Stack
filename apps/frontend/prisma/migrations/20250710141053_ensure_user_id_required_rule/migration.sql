/*
  Warnings:

  - Made the column `userId` on table `Rule` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Rule" ALTER COLUMN "userId" SET NOT NULL;
