import {Funcionario} from "../../database/tabelas";
import { redirect } from "next/navigation";
import "../css/listagem.css";

async function deletaFuncionario(formData){
     'use server';
     const id = formData.get('id');
     const funcionario = await Funcionario.findByPk(id);
     await funcionario.destroy();
     redirect('/funcionarios');
    }

async function Funcionarios() {
    const funcionarios = await Funcionario.findAll();
    return(
        <div>
          <h1>Lista de Funcionarios</h1>
          <a href="/funcionarios/cadastro">Cadastrar funcionario</a>
          <table border = "1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>EMAIL</th>
                    <th>TURNO</th>
                    <th>SALARIO</th>
                    <th colSpan={2}>AÇÕES</th>
                </tr>
            </thead>
          <tbody>
            {
                funcionarios.map(function(fun){
                    return (
                        <tr key={fun.id}>
                            <td>{fun.id}</td>
                            <td>{fun.nome}</td>                                     
                            <td>{fun.email}</td>
                            <td>{fun.turno}</td>
                            <td>{fun.salario}</td>
                            <td>
                                <form action={'/funcionarios/edita'}>
                                    <input type="hidden" name="id" defaultValue={fun.id}/>
                                    <button>Editar</button>
                                </form>
                            </td>
                            <td>
                                <form action={deletaFuncionario}>
                                    <input type="hidden" name="id" defaultValue={fun.id}/>
                                    <button>Excluir</button>
                                </form>
                            </td>
                        </tr>
                    );
                })
            }
          </tbody>
          </table>
        </div>
    );
}

export default Funcionarios;