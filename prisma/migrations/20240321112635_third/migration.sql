/*
  Warnings:

  - The primary key for the `category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[name]` on the table `category` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "category" DROP CONSTRAINT "category_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "name" DROP DEFAULT,
ALTER COLUMN "name" SET DATA TYPE TEXT,
ADD CONSTRAINT "category_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "category_name_seq";

-- CreateIndex
CREATE UNIQUE INDEX "category_name_key" ON "category"("name");
