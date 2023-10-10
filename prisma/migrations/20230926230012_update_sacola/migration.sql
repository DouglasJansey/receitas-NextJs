/*
  Warnings:

  - A unique constraint covering the columns `[acaiId]` on the table `Sacola` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Sacola_acaiId_key` ON `Sacola`(`acaiId`);
