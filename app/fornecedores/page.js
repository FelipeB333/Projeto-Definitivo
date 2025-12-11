import {Fornecedor} from "../../database/tabelas";
import { redirect } from "next/navigation";
import "../css/listagem.css";

async function deletaFornecedor(formData){
    'use server';
    const id = formData.get('id');
    const fornecedor = await Fornecedor.findByPk(id);
    await fornecedor.destroy();
    redirect('/fornecedores');
   }

async function Fornecedores() {
    const fornecedores = await Fornecedor.findAll();
    return(
        <div>
          <h1>Lista de Fornecedores</h1>
          <a href="/fornecedores/cadastro">Cadastrar fornecedor</a>
          <table border = "1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>TIPO DE FORNECIMENTO</th>
                    <th>TELEFONE</th>
                    <th>CNPJ</th>
                    <th colSpan={2}>AÇÕES</th>
                </tr>
            </thead>
          <tbody>
            {
                fornecedores.map(function(forn){
                    return (
                        <tr key={forn.id}>
                            <td>{forn.id}</td>
                            <td>{forn.nome}</td>                                     
                            <td>{forn.tipo_fornecimento}</td>
                            <td>{forn.Telefone}</td>
                            <td>{forn.cnpj}</td>
                            <td>
                                <form action={'/fornecedores/edita'}>
                                    <input type="hidden" name="id" defaultValue={forn.id}/>
                                    <button>Editar</button>
                                </form>
                            </td>
                            <td>
                                <form action={deletaFornecedor}>
                                    <input type="hidden" name="id" defaultValue={forn.id}/>
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

export default Fornecedores;