const Sequelize = require('sequelize');

const sequelize = new Sequelize("critica_filme", "root", "",{
    host: 'localhost',
    dialect: 'mysql'
});

//teste de conexão com o banco abaixo, retirar antes de mostrar pro prof hercola kkk
sequelize.authenticate()
.then(function(){
    console.log("Conexão com o banco de dados ok!");
}).catch(function(){
    console.log("Erro: conexão com o banco não realizada!");
});

module.exports = sequelize;