/*
  Warnings:

  - You are about to drop the column `Authenticator` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Notification` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "Authenticator",
DROP COLUMN "Notification",
ADD COLUMN     "authenticator" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "notification" BOOLEAN NOT NULL DEFAULT false;
