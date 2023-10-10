/*
  Warnings:

  - You are about to drop the column `acaiId` on the `Sacola` table. All the data in the column will be lost.
  - Added the required column `sacolaId` to the `Acai` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Sacola` DROP FOREIGN KEY `Sacola_acaiId_fkey`;

-- AlterTable
ALTER TABLE `Acai` ADD COLUMN `sacolaId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Sacola` DROP COLUMN `acaiId`;

-- AddForeignKey
ALTER TABLE `Acai` ADD CONSTRAINT `Acai_sacolaId_fkey` FOREIGN KEY (`sacolaId`) REFERENCES `Sacola`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
