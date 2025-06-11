-- AlterTable
ALTER TABLE "User" ADD COLUMN     "Authenticator" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "Notification" BOOLEAN NOT NULL DEFAULT false;
