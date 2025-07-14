/*
  Warnings:

  - Changed the type of `before` on the `Audit` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `after` on the `Audit` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Audit" DROP COLUMN "before",
ADD COLUMN     "before" JSONB NOT NULL,
DROP COLUMN "after",
ADD COLUMN     "after" JSONB NOT NULL;
