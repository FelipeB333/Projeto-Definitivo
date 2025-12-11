import "../css/menu.css";
function Menu() {
    return(
        <nav>
            <div>
                <h1> Mastre em Panificadora</h1>
            </div>
        <div>
        <a href="/">Home</a>&nbsp;
        <br/>
        <a href="/produtos">Produtos</a>&nbsp;
        <a href="/clientes">Clientes</a>&nbsp;
        <a href="/fornecedores">Fornecedores</a>&nbsp;
        <a href="/ingredientes">Ingredientes</a>&nbsp;
        <a href="/funcionarios">Funcionarios</a>&nbsp;
        <a href="/pedidos">Pedidos</a>&nbsp;
        </div>
        </nav>
    )
}

export default Menu;