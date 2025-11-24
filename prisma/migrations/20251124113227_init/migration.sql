-- CreateTable
CREATE TABLE "biblioteca" (
    "id" SERIAL NOT NULL,
    "autor" TEXT NOT NULL,
    "titulo" TEXT,
    "isnb" DOUBLE PRECISION NOT NULL,
    "categoria" TEXT NOT NULL,
    "anoPublicacao" DOUBLE PRECISION NOT NULL,
    "disponivel" TEXT NOT NULL,
    "editora" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "biblioteca_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "biblioteca_autor_key" ON "biblioteca"("autor");
