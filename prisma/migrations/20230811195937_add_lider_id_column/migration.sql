/*
  Warnings:

  - Added the required column `lider_id` to the `Limpeza` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Limpeza` ADD COLUMN `lider_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Limpeza` ADD CONSTRAINT `Limpeza_lider_id_fkey` FOREIGN KEY (`lider_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
