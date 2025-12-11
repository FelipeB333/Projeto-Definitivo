import { redirect } from 'next/navigation';
import { Produto } from "../../../database/tabelas";
import "../../css/cadastro.css";
async function saveProduto(formData) {
    'use server';
    const dados = {
        nome: formData.get('nome'),
        descricao: formData.get('descricao'),
        tipo: formData.get('tipo'),
        preco_unitario: formData.get('preco_unitario')
    }
    await Produto.create(dados);
    redirect('/produtos');
}

function TelaNovoProduto() {
    return (
        <div>
            <form action={saveProduto}>
                <label htmlFor="nome">Nome</label><br/>
                <input type="text" name="nome"/><br/>
                <label htmlFor="descricao">Descrição</label><br/>
                <input type="text" name="descricao"/><br/>
                <label htmlFor="tipo">Tipo</label><br/>
                <input type="text" name="tipo"/><br/>
                <label htmlFor="preco_unitario">Preço_Unitario</label><br/>
                <input type="text" name="preco_unitario"/><br/>
                <hr/>
                <button>Cadastrar</button>
            </form>
        </div>
    );
}

export default TelaNovoProduto;