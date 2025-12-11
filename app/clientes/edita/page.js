import { Cliente } from "../../../database/tabelas";
import { redirect } from 'next/navigation';
import "../../css/cadastro.css";
async function editarCliente(formData) {
    'use server';

    const id = formData.get('id');
    const nome = formData.get('nome');
    const email = formData.get('email');
    const nascimento = formData.get('nascimento');
    const cpf = formData.get('cpf');

    const cliente = await Cliente.findByPk(id);
    cliente.nome = nome;
    cliente.email = email;
    cliente.nascimento = nascimento;
    cliente.cpf = cpf;

    await cliente.save();

    redirect('/clientes');
    }
    async function TelaEditaCliente({ searchParams }) {
        const id = searchParams.id;
        const cliente = await Cliente.findByPk(id);
        return (
            <div>
                 <h1>Editando o cliente</h1>
    
                <form action={editarCliente}>
                <input type="hidden" name="id" defaultValue={cliente.id}/>
                <label htmlFor="nome">Nome</label> <br/>
                <input type="text" name="nome" defaultValue={cliente.nome}/><br/>
                <label htmlFor="email">E-mail</label><br/>
                <input type="text" name="email" defaultValue={cliente.email}/><br/>
                <label htmlFor="nascimento">Nascimento</label><br/>
                <input type="text" name="nascimento" defaultValue={cliente.nascimento}/><br/>
                <label htmlFor="cpf">cpf</label><br/>
                <input type="text" name="cpf" defaultValue={cliente.cpf}/><br/>
                <hr/>
                <button>Salvar</button>
            </form>
            </div>
        );
    } export default TelaEditaCliente;