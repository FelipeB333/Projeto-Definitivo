import { Produto } from "../../../database/tabelas";
import { redirect } from 'next/navigation';
import "../../css/cadastro.css";
async function editarProduto(formData) {
    'use server';

    const id = formData.get('id');
    const nome = formData.get('nome');
    const descricao = formData.get('descricao');
    const tipo = formData.get('tipo');
    const preco_unitario= formData.get('preco_unitario');

    const produto = await Produto.findByPk(id);
    produto.nome = nome;
    produto.descricao = descricao;
    produto.tipo = tipo;
    produto.preco_unitario = preco_unitario;

    await produto.save();

    redirect('/produtos');
    }
    async function TelaEditaProdutos({ searchParams }) {
        const id = searchParams.id;
        const produto = await Produto.findByPk(id);
        return (
            <div>
                 <h1>Editando o produto</h1>
    
                <form action={editarProduto}>
                <input type="hidden" name="id" defaultValue={produto.id}/>
                <label htmlFor="nome">Nome</label> <br/>
                <input type="text" name="nome" defaultValue={produto.nome}/><br/>
                <label htmlFor="descricao">Descrição</label><br/>
                <input type="text" name="descricao" defaultValue={produto.descricao}/><br/>
                <label htmlFor="tipo">Tipo</label><br/>
                <input type="text" name="tipo" defaultValue={produto.tipo}/><br/>
                <label htmlFor="preco_unitario">Preço_Unitario</label><br/>
                <input type="text" name="preco_unitario" defaultValue={produto.preco_unitario}/><br/>
                <hr/>
                <button>Salvar</button>
            </form>
            </div>
        );
    } export default TelaEditaProdutos;