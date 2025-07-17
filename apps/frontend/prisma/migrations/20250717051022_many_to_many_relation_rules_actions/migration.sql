/*
  Warnings:

  - You are about to drop the column `ruleId` on the `Action` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Action" DROP CONSTRAINT "Action_ruleId_fkey";

-- AlterTable
ALTER TABLE "Action" DROP COLUMN "ruleId";

-- CreateTable
CREATE TABLE "_ActionToRule" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ActionToRule_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ActionToRule_B_index" ON "_ActionToRule"("B");

-- AddForeignKey
ALTER TABLE "_ActionToRule" ADD CONSTRAINT "_ActionToRule_A_fkey" FOREIGN KEY ("A") REFERENCES "Action"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ActionToRule" ADD CONSTRAINT "_ActionToRule_B_fkey" FOREIGN KEY ("B") REFERENCES "Rule"("id") ON DELETE CASCADE ON UPDATE CASCADE;
