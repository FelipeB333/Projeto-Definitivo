import { Pedido } from "../../../database/tabelas";
import { redirect } from 'next/navigation';
import "../../css/cadastro.css";
async function editarPedido(formData) {
    'use server';

    const id = formData.get('id');
    const tipo_pedido = formData.get('tipo_pedido');
    const data = formData.get('data');
    const status_pedido = formData.get('status_pedido');
    const valor_total = formData.get('valor_total');

    const pedido = await Pedido.findByPk(id);
    pedido.tipo_pedido = tipo_pedido;
    pedido.data = data;
    pedido.status_pedido = status_pedido;
    pedido.valor_total = valor_total;

    await pedido.save();

    redirect('/pedidos');
    }
    async function TelaEditaPedido({ searchParams }) {
        const id = searchParams.id;
        const pedido = await Pedido.findByPk(id);
        return (
            <div>
                 <h1>Editando o pedido</h1>
    
                <form action={editarPedido}>
                <input type="hidden" name="id" defaultValue={pedido.id}/>
                <label htmlFor="tipo_pedido">Tipo_Pedido</label> <br/>
                <input type="text" name="tipo_pedido" defaultValue={pedido.tipo_pedido}/><br/>
                <label htmlFor="data">Data</label><br/>
                <input type="text" name="data" defaultValue={pedido.data}/><br/>
                <label htmlFor="status_pedido">Status_Pedido</label><br/>
                <input type="text" name="status_pedido" defaultValue={pedido.status_pedido}/><br/>
                <label htmlFor="valor_total">Valor_Total</label><br/>
                <input type="text" name="valor_total" defaultValue={pedido.valor_total}/><br/>
                <hr/>
                <button>Salvar</button>
            </form>
            </div>
        );
    } export default TelaEditaPedido;