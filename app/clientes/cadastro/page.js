import { redirect } from 'next/navigation';
import { Cliente } from "../../../database/tabelas";
import "../../css/cadastro.css";
async function saveCliente(formData) {
    'use server';
    const dados = {
        nome: formData.get('nome'),
        email: formData.get('email'),
        nascimento: formData.get('nascimento'),
        cpf: formData.get('cpf')
    }
    await Cliente.create(dados);
    redirect('/clientes');
}

function TelaNovoCliente() {
    return (
        <div>
            <form action={saveCliente}>
                <label htmlFor="nome">Nome</label><br/>
                <input type="text" name="nome"/><br/>
                <label htmlFor="email">E-mail</label><br/>
                <input type="text" name="email"/><br/>
                <label htmlFor="nascimento">Nascimento</label><br/>
                <input type="text" name="nascimento"/><br/>
                <label htmlFor="cpf">cpf</label><br/>
                <input type="text" name="cpf"/><br/>
                <hr/>
                <button className='bt-classico'>Cadastrar</button>
            </form>
        </div>
    );
}

export default TelaNovoCliente;