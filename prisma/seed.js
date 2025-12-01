import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.biblioteca.createMany({
    data: [
      {
        autor: "George Orwell",
        titulo: "1984",
        isnb: 1234567890,
        categoria: "Ficção",
        anoPublicacao: 1949,
        disponivel: true,
        editora: "Secker & Warburg"
      },
      {
        autor: "J.K. Rowling",
        titulo: "Harry Potter e a Pedra Filosofal",
        isnb: 987654321,
        categoria: "Fantasia",
        anoPublicacao: 1997,
        disponivel: false,
        editora: "Bloomsbury"
      },
      {
        autor: "Machado de Assis",
        titulo: "Dom Casmurro",
        isnb: 112233445,
        categoria: "Romance",
        anoPublicacao: 1899,
        disponivel: true,
        editora: "Tipografia Nacional"
      },
      {
        autor: "J.R.R. Tolkien",
        titulo: "O Hobbit",
        isnb: 564738291,
        categoria: "Fantasia",
        anoPublicacao: 1937,
        disponivel: true,
        editora: "Allen & Unwin"
      },
      {
        autor: "Arthur Conan Doyle",
        titulo: "O Cão dos Baskervilles",
        isnb: 998877665,
        categoria: "Mistério",
        anoPublicacao: 1902,
        disponivel: false,
        editora: "George Newnes"
      }
    ]
  })

  console.log("Seed feito com sucesso!")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })