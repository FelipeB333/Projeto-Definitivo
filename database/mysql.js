import { Sequelize } from "sequelize";
import pg from 'pg';
const mysql = new Sequelize({
    dialect: 'postgres', 
    dialectModule: pg,
    host: 'dpg-d4tahg3uibrs73cegr6g-a',
    port: '5432',
    database: 'projeto_final_oo9m',
    username: 'use_database_i3a',
    password: 'dcFz8u3eJ0cI6TcvhVFjfdD7YTmN8X8'
});
/*
import mysql2 from 'mysql2';

const mysql = new Sequelize({
    dialect: 'mysql', 
    dialectModule: mysql2,
    host: 'localhost',
    port: '3306',
    database: 'Padaria2',
    username: 'root',
    password: 'root'
});
*/
export default mysql;