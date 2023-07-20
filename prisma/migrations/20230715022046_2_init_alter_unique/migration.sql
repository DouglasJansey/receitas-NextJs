/*
  Warnings:

  - You are about to drop the column `recipeId` on the `ingredients` table. All the data in the column will be lost.
  - Added the required column `recipeIngredients` to the `Ingredients` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `ingredients` DROP FOREIGN KEY `Ingredients_recipeId_fkey`;

-- AlterTable
ALTER TABLE `ingredients` DROP COLUMN `recipeId`,
    ADD COLUMN `recipeIngredients` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Ingredients` ADD CONSTRAINT `Ingredients_recipeIngredients_fkey` FOREIGN KEY (`recipeIngredients`) REFERENCES `Recipe`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
