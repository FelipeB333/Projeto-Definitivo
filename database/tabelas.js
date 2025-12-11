import { DataTypes } from "sequelize";
import mysql from "./mysql.js";

const Cliente = mysql.define('Cliente', {
    nome: DataTypes.STRING,
    email: DataTypes.TEXT,
    nascimento: DataTypes.DATEONLY,
    cpf: DataTypes.TEXT
});

const Funcionario = mysql.define('Funcionario', {
    nome: DataTypes.STRING,
    email: DataTypes.TEXT,
    turno: DataTypes.TEXT,
    salario: DataTypes.DECIMAL
});

const Pedido = mysql.define('Pedido', {
    tipo_pedido: DataTypes.TEXT,
    data: DataTypes.DATEONLY,
    status_pedido: DataTypes.TEXT,
    valor_total: DataTypes.DECIMAL
});

const Produto = mysql.define('Produto', {
    nome: DataTypes.STRING,
    descricao: DataTypes.TEXT,
    tipo: DataTypes.STRING,
    data_cadastro: DataTypes.DATEONLY,
    preco_unitario: DataTypes.DECIMAL
});

const Fornecedor = mysql.define('Fornecedor', {
    nome: DataTypes.STRING,
    tipo_fornecimento: DataTypes.TEXT,
    Telefone: DataTypes.TEXT,
    cnpj: DataTypes.TEXT
});

const Ingrediente = mysql.define('Ingrediente', {
    nome: DataTypes.STRING,
    unidade_media: DataTypes.TEXT,
    estoque: DataTypes.DECIMAL,
    preco_unitario: DataTypes.DECIMAL
});

Pedido.belongsTo(Cliente);
Cliente.hasMany(Pedido);

Pedido.belongsTo(Funcionario);
Funcionario.hasMany(Pedido);

Pedido.belongsToMany(Produto, {through: 'Item_Pedido'});
Produto.belongsToMany(Pedido, {through: 'Item_Pedido'});

Ingrediente.belongsToMany(Produto, {through: 'Producao'});
Produto.belongsToMany(Ingrediente, {through: 'Producao'});

Produto.belongsTo(Fornecedor);
Fornecedor.hasMany(Produto);

Ingrediente.belongsTo(Fornecedor);
Fornecedor.hasMany(Ingrediente);

//mysql.sync({force: true})
mysql.sync();

export { Cliente, Funcionario, Pedido, Produto, Fornecedor, Ingrediente };