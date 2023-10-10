/*
  Warnings:

  - You are about to drop the column `sacolaId` on the `Acai` table. All the data in the column will be lost.
  - You are about to drop the column `sacolaId` on the `Pedido` table. All the data in the column will be lost.
  - You are about to drop the `Sacola` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `clientId` to the `Acai` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Acai` DROP FOREIGN KEY `Acai_sacolaId_fkey`;

-- DropForeignKey
ALTER TABLE `Pedido` DROP FOREIGN KEY `Pedido_sacolaId_fkey`;

-- DropForeignKey
ALTER TABLE `Sacola` DROP FOREIGN KEY `Sacola_clientId_fkey`;

-- AlterTable
ALTER TABLE `Acai` DROP COLUMN `sacolaId`,
    ADD COLUMN `clientId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Pedido` DROP COLUMN `sacolaId`;

-- DropTable
DROP TABLE `Sacola`;

-- AddForeignKey
ALTER TABLE `Acai` ADD CONSTRAINT `Acai_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `Client`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
