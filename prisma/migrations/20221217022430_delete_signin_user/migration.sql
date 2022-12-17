/*
  Warnings:

  - You are about to drop the `signin_user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "signin_user" DROP CONSTRAINT "signin_user_user_id_fkey";

-- DropTable
DROP TABLE "signin_user";
