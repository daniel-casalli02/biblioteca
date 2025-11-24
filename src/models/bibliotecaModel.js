import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const encontreTodos = async () => {
    return await prisma.biblioteca.findMany({
        orderBy: { id: 'asc' }
    });
}

export const encontreUm = async (id) => {
    return await prisma.biblioteca.findUnique({
        where: { id: Number(id) }
    })
}

export const criar = async (dado) => {
    return await prisma.biblioteca.create({
        data: {
            id: dado.id,
            titulo: dado.titulo,
            autor: dado.autor,
            isbn: dado.isbn,
            categoria: dado.categoria,
            anoPublicacao: dado.anoPublicacao,
            disponivel: dado.disponivel,
            editora: dado.editora
        }
    })
}

export const deletar = async (id) => {
    return await prisma.biblioteca.delete({
        where: { id: Number(id) }
    })
}

export const atualizar = async (id, dado) => {
    return await prisma.biblioteca.update({
        where: { id: Number(id) },
        data: {
            ...(dado.id && { id: dado.id }),
            ...(dado.titulo && { titulo: dado.titulo }),
            ...(dado.autor && { autor: dado.autor }),
            ...(dado.isbn && { isbn: dado.isbn }),
            ...(dado.categoria && { categoria: dado.categoria }),
            ...(dado.anoPublicacao && { anoPublicacao: dado.anoPublicacao }),
            ...(dado.disponivel && { disponivel: dado.disponivel }),
            ...(dado.editora && { editora: dado.editora })
        }
    })
}