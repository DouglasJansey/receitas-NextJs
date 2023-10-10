/*
  Warnings:

  - Added the required column `acaiId` to the `Sacola` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Sacola` ADD COLUMN `acaiId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Sacola` ADD CONSTRAINT `Sacola_acaiId_fkey` FOREIGN KEY (`acaiId`) REFERENCES `Acai`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
