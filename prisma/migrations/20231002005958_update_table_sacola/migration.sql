-- DropForeignKey
ALTER TABLE `Acai` DROP FOREIGN KEY `Acai_sacolaId_fkey`;

-- AlterTable
ALTER TABLE `Acai` MODIFY `sacolaId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Acai` ADD CONSTRAINT `Acai_sacolaId_fkey` FOREIGN KEY (`sacolaId`) REFERENCES `Sacola`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
