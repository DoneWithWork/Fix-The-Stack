/*
  Warnings:

  - You are about to drop the column `attempts` on the `Rule` table. All the data in the column will be lost.
  - Added the required column `ruleTree` to the `Rule` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Rule" DROP COLUMN "attempts",
ADD COLUMN     "ruleTree" JSONB NOT NULL,
ADD COLUMN     "triggerLimit" INTEGER NOT NULL DEFAULT 1,
ALTER COLUMN "active" SET DEFAULT true;
