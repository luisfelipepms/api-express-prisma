/*
  Warnings:

  - You are about to drop the column `lider_id` on the `Limpeza` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Limpeza` DROP FOREIGN KEY `Limpeza_lider_id_fkey`;

-- AlterTable
ALTER TABLE `Limpeza` DROP COLUMN `lider_id`;
