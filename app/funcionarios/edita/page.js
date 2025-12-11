import { Funcionario } from "../../../database/tabelas";
import { redirect } from 'next/navigation';
import "../../css/cadastro.css";
async function editarFuncionario(formData) {
    'use server';

    const id = formData.get('id');
    const nome = formData.get('nome');
    const email = formData.get('email');
    const turno = formData.get('turno');
    const salario = formData.get('salario');

    const funcionario = await Funcionario.findByPk(id);
    funcionario.nome = nome;
    funcionario.email = email;
    funcionario.turno = turno;
    funcionario.salario = salario;

    await funcionario.save();

    redirect('/funcionarios');
    }
    async function TelaEditaFuncionarios({ searchParams }) {
        const id = searchParams.id;
        const funcionario = await Funcionario.findByPk(id);
        return (
            <div>
                 <h1>Editando o Funcionario</h1>
    
                <form action={editarFuncionario}>
                <input type="hidden" name="id" defaultValue={funcionario.id}/>
                <label htmlFor="nome">Nome</label> <br/>
                <input type="text" name="nome" defaultValue={funcionario.nome}/><br/>
                <label htmlFor="email">E-mail</label><br/>
                <input type="text" name="email" defaultValue={funcionario.email}/><br/>
                <label htmlFor="turno">Turno</label><br/>
                <input type="text" name="turno" defaultValue={funcionario.turno}/><br/>
                <label htmlFor="salario">Salario</label><br/>
                <input type="text" name="salario" defaultValue={funcionario.salario}/><br/>
                <hr/>
                <button>Salvar</button>
            </form>
            </div>
        );
    } export default TelaEditaFuncionarios;