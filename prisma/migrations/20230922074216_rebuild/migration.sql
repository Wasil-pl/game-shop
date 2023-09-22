/*
  Warnings:

  - You are about to drop the `picture` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `picture` DROP FOREIGN KEY `Picture_productId_fkey`;

-- AlterTable
ALTER TABLE `product` ADD COLUMN `pictureFive` VARCHAR(191) NULL,
    ADD COLUMN `pictureFour` VARCHAR(191) NULL,
    ADD COLUMN `pictureOne` VARCHAR(191) NULL,
    ADD COLUMN `pictureThree` VARCHAR(191) NULL,
    ADD COLUMN `pictureTwo` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `picture`;
