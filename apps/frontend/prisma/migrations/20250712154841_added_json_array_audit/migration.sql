/*
  Warnings:

  - The `before` column on the `Audit` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `after` column on the `Audit` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Audit" DROP COLUMN "before",
ADD COLUMN     "before" JSONB[],
DROP COLUMN "after",
ADD COLUMN     "after" JSONB[];
