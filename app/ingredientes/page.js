import {Ingrediente} from "../../database/tabelas";
import { redirect } from "next/navigation";
import "../css/listagem.css";

async function deletaIngrediente(formData){
    'use server';
    const id = formData.get('id');
    const ingrediente = await Ingrediente.findByPk(id);
    await ingrediente.destroy();
    redirect('/ingredientes');
   }
async function Ingredientes() {
    const ingredientes = await Ingrediente.findAll();
    return(
        <div>
          <h1>Lista de Fornecedores</h1>
          <a href="/ingredientes/cadastro">Cadastrar ingredientes</a>
          <table border = "1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>UNIDADE_MEDIA</th>
                    <th>ESTOQUE</th>
                    <th>PRECO_UNITARIO</th>
                    <th colSpan={2}>AÇÕES</th>
                </tr>
            </thead>
          <tbody>
            {
                ingredientes.map(function(ing){
                    return (
                        <tr key={ing.id}>
                            <td>{ing.id}</td>
                            <td>{ing.nome}</td>                                     
                            <td>{ing.unidade_media}</td>
                            <td>{ing.estoque}</td>
                            <td>{ing.preco_unitario}</td>
                            <td>
                                <form action={'/ingredientes/edita'}>
                                    <input type="hidden" name="id" defaultValue={ing.id}/>
                                    <button>Editar</button>
                                </form>
                            </td>
                            <td>
                                <form action={deletaIngrediente}>
                                    <input type="hidden" name="id" defaultValue={ing.id}/>
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

export default Ingredientes;