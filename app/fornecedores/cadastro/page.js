import { redirect } from 'next/navigation';
import { Fornecedor } from "../../../database/tabelas";
import "../../css/cadastro.css";
async function saveFornecedor(formData) {
    'use server';
    const dados = {
        nome: formData.get('nome'),
        tipo_fornecimento: formData.get('tipo_fornecimento'),
        Telefone: formData.get('telefone'),
        cnpj: formData.get('cnpj')
    }
    await Fornecedor.create(dados);
    redirect('/fornecedores');
}

async function TelaNovoFornecedor() {
    const id = searchParams.id;
        const fornecedor = await Fornecedor.findByPk(id);
    return (
        <div>
            <form action={saveFornecedor}>
              
                <label htmlFor="nome">Nome</label><br/>
                <input type="text" name="nome"/><br/>
                <label htmlFor="tipo_fornecimento">Tipo do Fornecimento</label><br/>
                <input type="text" name="tipo_fornecimento"/><br/>
                <label htmlFor="Telefone">Telefone</label><br/>
                <input type="text" name="Telefone"/><br/>
                <label htmlFor="cnpj">CNPJ</label><br/>
                <input type="text" name="cnpj"/><br/>
                <hr/>
                <button>Cadastrar</button>
            </form>
            </div>
    );
}

export default TelaNovoFornecedor;