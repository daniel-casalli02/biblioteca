import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const encontreTodos = async () => {
    return await prisma.biblioteca.findMany({
        orderBy: { id: 'asc' }
    });
}

export const categoria = async (categoria) => {
    return await prisma.biblioteca.findMany({
        where: { categoria: String(categoria) }
    })
}

export const autor = async (autor) => {
    return await prisma.biblioteca.findMany({
        where: { autor: String(autor) }
    })
}

export const anoPublicacao = async (anoPublicacao) =>{
    return await prisma.biblioteca.findMany({
        where: { anoPublicacao: Number(anoPublicacao) }
    })
}

export const disponivel = async (disponivel) => {
    return await prisma.biblioteca.findMany({
        where: { disponivel: true }
    })
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
            isnb: dado.isnb,
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
            ...(dado.isnb && { isbn: dado.isnb }),
            ...(dado.categoria && { categoria: dado.categoria }),
            ...(dado.anoPublicacao && { anoPublicacao: dado.anoPublicacao }),
            ...(dado.disponivel && { disponivel: dado.disponivel }),
            ...(dado.editora && { editora: dado.editora })
        }
    })
}