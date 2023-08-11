-- CreateTable
CREATE TABLE `Limpeza` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `local` VARCHAR(191) NULL,
    `inicio` VARCHAR(191) NULL,
    `fim` VARCHAR(191) NULL,
    `lider_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Limpeza` ADD CONSTRAINT `Limpeza_lider_id_fkey` FOREIGN KEY (`lider_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
