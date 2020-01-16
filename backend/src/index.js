const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');


const app = express();

mongoose.connect('mongodb+srv://rodrigo:flvpchrointer@cluster0-nwqxh.mongodb.net/week10?retryWrites=true&w=majority',{
  useNewUrlParser: true, 
  useUnifiedTopology: true,
});


app.use(express.json());
app.use(routes);

//MÉTODOS HTTP : 
//get, post, put, delete
//TIPOS DE PARAMETROS:
//Query Params: request.query(Filtros, ordenação, paginação, ...)
//Route Params: request.params(identificar um recurso na alteracao ou remocao)
//Body: request.body (Dados para a criação ou alteração de um registro)use(routes)

app.listen(3333);