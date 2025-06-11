-- AlterTable
ALTER TABLE "User" ADD COLUMN     "authSecret" TEXT,
ADD COLUMN     "is2FAVerified" BOOLEAN NOT NULL DEFAULT false;
