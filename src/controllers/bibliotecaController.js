import * as bibliotecaModel from '../models/bibliotecaModel.js'

export const listarTodos = async (req, res) => {
    try {
        const Livros = await bibliotecaModel.encontreTodos();

        if(!Livros || Livros.length === 0){
            res.status(404).json({
                total: Livros.length,
                mensagem: 'Não há Livros na lista',
                Livros
            })
        }

        res.status(200).json({
            total: Livros.length,
            mensagem: 'Lista de Livros',
            Livros
        })
    } catch (error) {
        res.status(500).json({
            erro: 'Erro interno de servidor',
            detalhes: error.message,
            status: 500
        });
    }
}

export const listarUm = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const Livros = await bibliotecaModel.encontreUm(id);

        if(!Livros){
            return res.status(404).json({
                erro: "Livro não encontrado",
                mensagem: 'Verifique o id do Livros',
                id: id
            })
        }

        res.status(200).json({
            message: 'Livro encontrado',
            Livros
        })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro interno de servidor',
            detalhes: error.message,
            status: 500
        })
    }
}

export const criar = async (req, res) => {
    try {
        const { id, titulo, autor, isbn, categoria, anoPublicacao, disponivel, editora } = req.body;
        
        const dado = { id, titulo, autor, isbn, categoria, anoPublicacao, disponivel, editora }

    const novoLivro = await bibliotecaModel.criar(req.body)
    
    res.status(201).json({
        mensagem: 'livro criado com sucesso!',
        Livros: novoLivro
    })

    } catch (error) {
        res.status(500).json({
            erro: 'erro o criar livro',
            detalhes: error.message
        })
    }
}

export const deletar = async (req, res) => {
    try {
        const id = parseInt(req.params.id)

        const livroExiste = await bibliotecaModel.encontreUm(id);

        if(!livroExiste){
            return res.status(404).json({
                erro: 'livro com esse id não encontrado',
                id: id
            })
        }

        await bibliotecaModel.deletar(id)

        res.status(200).json({
            message: 'livro apagado com sucesso',
            livroRemovido: livroExiste
        })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao apagar livro',
            detalhes: error.message
        })
        
    }
}

export const atualizar = async (req, res) => {
    try {
    
    const id = parseInt(req.params.id);
    const dados = req.body;

    const livroExiste = await bibliotecaModel.encontreUm(id);

    if(!livroExiste) {
        return res.status(404).json({
            erro: 'Esse livro não existe',
            id: id
        })
    }

    const livroAtualizado = await bibliotecaModel.atualizar(id, dados)

    return res.status(200).json({
        mensagem: 'Comida atualizada com sucesso!',
        livros: livroAtualizado
    })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao atualizar livro',
            detalhes: error.message
        })
    }
}