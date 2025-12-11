import {Cliente} from "../../database/tabelas";
import { redirect } from "next/navigation";
import "../css/listagem.css";

async function deletaCliente(formData){
     'use server';
     const id = formData.get('id');
     const cliente = await Cliente.findByPk(id);
     await cliente.destroy();
     redirect('/clientes');
    }

async function Clientes() {
    const clientes = await Cliente.findAll();
    return(
        <div>
          <h1>Lista de Clientes</h1>
          <a href="/clientes/cadastro">Cadastrar cliente</a>
          <table border = "1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>EMAIL</th>
                    <th>NASCIMENTO</th>
                    <th>CPF</th>
                    <th colSpan={2}>AÇÕES</th>
                </tr>
            </thead>
          <tbody>
            {
                clientes.map(function(cli){
                    return (
                        <tr key={cli.id}>
                            <td>{cli.id}</td>
                            <td>{cli.nome}</td>                                     
                            <td>{cli.email}</td>
                            <td>{cli.nascimento}</td>
                            <td>{cli.cpf}</td>
                            <td>
                                <form action={'/clientes/edita'}>
                                    <input type="hidden" name="id" defaultValue={cli.id}/>
                                    <button>Editar</button>
                                </form>
                            </td>
                            <td>
                                <form action={deletaCliente}>
                                    <input type="hidden" name="id" defaultValue={cli.id}/>
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

export default Clientes;