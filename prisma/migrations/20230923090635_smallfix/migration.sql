/*
  Warnings:

  - You are about to drop the column `hash` on the `password` table. All the data in the column will be lost.
  - Added the required column `hashedPassword` to the `Password` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `password` DROP COLUMN `hash`,
    ADD COLUMN `hashedPassword` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `product` ALTER COLUMN `mainPicture` DROP DEFAULT,
    MODIFY `isActive` BOOLEAN NOT NULL DEFAULT false;
