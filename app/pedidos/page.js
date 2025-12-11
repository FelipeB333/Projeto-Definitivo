import { Pedido } from "../../database/tabelas";
import { redirect } from "next/navigation";
import "../css/listagem.css";

async function deletaPedido(formData){
     'use server';
     const id = formData.get('id');
     const pedido = await Pedido.findByPk(id);
     await pedido.destroy();
     redirect('/pedidos');
    }

async function Pedidos() {
    const pedidos = await Pedido.findAll();
    return(
        <div>
          <h1>Lista de Pedidos</h1>
          <a href="/pedidos/cadastro">Cadastrar pedido</a>
          <table border = "1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>TIPO_PEDIDO</th>
                    <th>DATA</th>
                    <th>STATUS_PEDIDO</th>
                    <th>VALOR_TOTAL</th>
                    <th colSpan={2}>AÇÕES</th>
                </tr>
            </thead>
          <tbody>
            {
                pedidos.map(function(ped){
                    return (
                        <tr key={ped.id}>
                            <td>{ped.id}</td>
                            <td>{ped.tipo_pedido}</td>                                     
                            <td>{ped.data}</td>
                            <td>{ped.status_pedido}</td>
                            <td>{ped.valor_total}</td>
                            <td>
                                <form action={'/pedidos/edita'}>
                                    <input type="hidden" name="id" defaultValue={ped.id}/>
                                    <button>Editar</button>
                                </form>
                            </td>
                            <td>
                                <form action={deletaPedido}>
                                    <input type="hidden" name="id" defaultValue={ped.id}/>
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

export default Pedidos;