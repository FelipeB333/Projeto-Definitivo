import { Fornecedor } from "../../../database/tabelas";
import { redirect } from 'next/navigation';

async function editarFornecedor(formData) {
    'use server';

    const id = formData.get('id');
    const nome = formData.get('nome');
    const tipo_fornecimento = formData.get('tipo_fornecimento');
    const Telefone = formData.get('Telefone');
    const cnpj = formData.get('cnpj');

    const fornecedor = await Fornecedor.findByPk(id);
    fornecedor.nome = nome;
    fornecedor.tipo_fornecimento = tipo_fornecimento;
    fornecedor.Telefone = Telefone;
    fornecedor.cnpj = cnpj;

    await fornecedor.save();

    redirect('/fornecedores');
    }
    async function TelaNovoFornecedor({ searchParams }) {
        const id = searchParams.id;
        const fornecedor = await Fornecedor.findByPk(id);
        return (
            <div>
            <h1>Editando o fornecedor</h1>

                    <form action={editarFornecedor}>
                    <input type="hidden" name="id" defaultValue={fornecedor.id}/>
                    <label htmlFor="nome">Nome</label><br/>
                    <input type="text" name="nome" defaultValue={fornecedor.nome}/><br/>
                    <label htmlFor="tipo_fornecimento">Tipo do Fornecimento</label><br/>
                    <input type="text" name="tipo_fornecimento" defaultValue={fornecedor.tipo_fornecimento}/><br/>
                    <label htmlFor="Telefone">Telefone</label><br/>
                    <input type="text" name="Telefone" defaultValue={fornecedor.Telefone}/><br/>
                    <label htmlFor="cnpj">CNPJ</label><br/>
                    <input type="text" name="cnpj" defaultValue={fornecedor.cnpj}/><br/>
                    <hr/>
                    <button>Salvar</button>
                </form>
                </div>
        );
    }
    
    export default TelaNovoFornecedor;