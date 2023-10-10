/*
  Warnings:

  - You are about to drop the column `sacolaId` on the `Acai` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Acai` DROP FOREIGN KEY `Acai_sacolaId_fkey`;

-- AlterTable
ALTER TABLE `Acai` DROP COLUMN `sacolaId`;
