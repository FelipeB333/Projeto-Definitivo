import { redirect } from 'next/navigation';
import { Ingrediente } from "../../../database/tabelas";
import "../../css/cadastro.css";
async function saveIngrediente(formData) {
    'use server';
    const dados = {
        nome: formData.get('nome'),
        unidade_media: formData.get('unidade_media'),
        estoque: formData.get('estoque'),
        preco_unitario: formData.get('preco_unitario')
    }
    await Ingrediente.create(dados);
    redirect('/ingredientes');
}

function TelaNovoIngrediente() {
    return (
        <div>
            <form action={saveIngrediente}>
                <label htmlFor="nome">Nome</label><br/>
                <input type="text" name="nome"/><br/>
                <label htmlFor="unidade_media">Unidade Media</label><br/>
                <input type="text" name="unidade_media"/><br/>
                <label htmlFor="estoque">Estoque</label><br/>
                <input type="text" name="estoque"/><br/>
                <label htmlFor="preco_unitario">Preço Unitario</label><br/>
                <input type="text" name="preco_unitario"/><br/>
                <hr/>
                <button>Cadastrar</button>
            </form>
        </div>
    );
}

export default TelaNovoIngrediente;