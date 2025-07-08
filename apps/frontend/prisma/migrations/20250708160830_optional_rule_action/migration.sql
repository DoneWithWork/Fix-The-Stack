-- DropForeignKey
ALTER TABLE "Action" DROP CONSTRAINT "Action_ruleId_fkey";

-- AlterTable
ALTER TABLE "Action" ALTER COLUMN "ruleId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Action" ADD CONSTRAINT "Action_ruleId_fkey" FOREIGN KEY ("ruleId") REFERENCES "Rule"("id") ON DELETE SET NULL ON UPDATE CASCADE;
