import { redirect } from 'next/navigation';
import { Funcionario } from "../../../database/tabelas";
import "../../css/cadastro.css";
async function saveFuncionario(formData) {
    'use server';
    const dados = {
        nome: formData.get('nome'),
        email: formData.get('email'),
        turno: formData.get('turno'),
        salario: formData.get('salario')
    }
    await Funcionario.create(dados);
    redirect('/funcionarios');
}

function TelaNovoFuncionario() {
    return (
        <div>
            <form action={saveFuncionario}>
                <label htmlFor="nome">Nome</label><br/>
                <input type="text" name="nome"/><br/>
                <label htmlFor="email">E-mail</label><br/>
                <input type="text" name="email"/><br/>
                <label htmlFor="turno">Turno</label><br/>
                <input type="text" name="turno"/><br/>
                <label htmlFor="salario">Salario</label><br/>
                <input type="text" name="salario"/><br/>
                <hr/>
                <button className='bt-classico'>Cadastrar</button>
            </form>
        </div>
    );
}

export default TelaNovoFuncionario;