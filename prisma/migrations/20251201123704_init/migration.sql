/*
  Warnings:

  - You are about to alter the column `isnb` on the `biblioteca` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `anoPublicacao` on the `biblioteca` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - Changed the type of `disponivel` on the `biblioteca` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "biblioteca" ALTER COLUMN "isnb" SET DATA TYPE INTEGER,
ALTER COLUMN "anoPublicacao" SET DATA TYPE INTEGER,
DROP COLUMN "disponivel",
ADD COLUMN     "disponivel" BOOLEAN NOT NULL;
