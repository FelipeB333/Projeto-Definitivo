import { redirect } from 'next/navigation';
import { Pedido } from "../../../database/tabelas";
import "../../css/cadastro.css";
async function savePedido(formData) {
    'use server';
    const dados = {
        tipo_pedido: formData.get('tipo_pedido'),
        data: formData.get('data'),
        status_pedido: formData.get('status_pedido'),
        valor_total: formData.get('valor_total')
    }
    await Pedido.create(dados);
    redirect('/pedidos');
}

function TelaNovoPedido() {
    return (
        <div>
            <form action={savePedido}>
                <label htmlFor="tipo_pedido">Tipo_Pedido</label><br/>
                <input type="text" name="tipo_pedido"/><br/>
                <label htmlFor="data">Data</label><br/>
                <input type="text" name="data"/><br/>
                <label htmlFor="status_pedido">Status_Pedido</label><br/>
                <input type="text" name="status_pedido"/><br/>
                <label htmlFor="valor_total">valor_total</label><br/>
                <input type="text" name="valor_total"/><br/>
                <hr/>
                <button className='bt-classico'>Cadastrar</button>
            </form>
        </div>
    );
}

export default TelaNovoPedido;