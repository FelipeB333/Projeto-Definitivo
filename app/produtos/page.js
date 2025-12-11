import {Produto} from "../../database/tabelas";
import { redirect } from "next/navigation";
import "../css/listagem.css";
async function deletaProduto(formData){
    'use server';
    const id = formData.get('id');
    const produto = await Produto.findByPk(id);
    await produto.destroy();
    redirect('/produtos');
   }

async function Produtos() {
    const produtos = await Produto.findAll();
    return(
        <div>
          <h1>Lista de Produtos</h1>
          <a href="/produtos/cadastro">Cadastrar produto</a>
          <table border = "1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>DESCRIÇÃO</th>
                    <th>TIPO</th>
                    <th>PREÇO_UNITARIO</th>
                    <th colSpan={2}>AÇÕES</th>
                </tr>
            </thead>
          <tbody>
            {
                produtos.map(function(pro){
                    return (
                        <tr>
                            <td>{pro.id}</td>
                            <td>{pro.nome}</td>
                            <td>{pro.descricao}</td>
                            <td>{pro.tipo}</td>
                            <td>{pro.preco_unitario}</td>
                            <td>
                            <td>
                                <form action={'/produtos/edita'}>
                                    <input type="hidden" name="id" defaultValue={pro.id}/>
                                    <button>Editar</button>
                                </form>
                            </td>
                                <form action={deletaProduto}>
                                    <input type="hidden" name="id" defaultValue={pro.id}/>
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

export default Produtos;