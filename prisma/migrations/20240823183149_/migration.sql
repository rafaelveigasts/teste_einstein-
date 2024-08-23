-- CreateEnum
CREATE TYPE "Target_audience" AS ENUM ('geeks', 'nerds', 'minimalistas', 'atletas', 'esportistas');

-- CreateTable
CREATE TABLE "surveys" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "target_audience" "Target_audience" NOT NULL,
    "star_quantity" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "surveys_pkey" PRIMARY KEY ("id")
);
