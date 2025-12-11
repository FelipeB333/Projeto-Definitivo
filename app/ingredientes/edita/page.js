import { Ingrediente } from "../../../database/tabelas";
import { redirect } from 'next/navigation';
import "../../css/cadastro.css";

async function editarIngrediente(formData) {
    'use server';

    const id = formData.get('id');
    const nome = formData.get('nome');
    const unidade_media = formData.get('unidade_media');
    const estoque = formData.get('estoque');
    const preco_unitario = formData.get('preco_unitario');

    const ingrediente = await Ingrediente.findByPk(id);
    ingrediente.nome = nome;
    ingrediente.unidade_media = unidade_media;
    ingrediente.estoque = estoque;
    ingrediente.preco_unitario = preco_unitario;

    await ingrediente.save();

    redirect('/ingredientes');
    }
    async function TelaEditaIngredientes({ searchParams }) {
        const id = searchParams.id;
        const ingrediente = await Ingrediente.findByPk(id);
        return (
            <div>
                 <h1>Editando o ingrediente</h1>
    
                <form action={editarIngrediente}>
                <input type="hidden" name="id" defaultValue={ingrediente.id}/>
                <label htmlFor="nome">Nome</label> <br/>
                <input type="text" name="nome" defaultValue={ingrediente.nome}/><br/>
                <label htmlFor="unidade_media">Unidade_Media</label><br/>
                <input type="text" name="unidade_media" defaultValue={ingrediente.unidade_media}/><br/>
                <label htmlFor="estoque">Estoque</label><br/>
                <input type="text" name="estoque" defaultValue={ingrediente.estoque}/><br/>
                <label htmlFor="preco_unitario">Preço_Unitario</label><br/>
                <input type="text" name="preco_unitario" defaultValue={ingrediente.preco_unitario}/><br/>
                <hr/>
                <button>Salvar</button>
            </form>
            </div>
        );
    } export default TelaEditaIngredientes;