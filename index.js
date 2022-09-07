const express = require("express");
require('./db/dbConnection')


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended : true }))



app.get('/',(req, res) => {
    res.status(200).json({'mesaj':'hosgeldiniz'})
});


app.get('/:id',(req, res) => {
    console.log(req,res)
    res.status(200).json({'id':req.params.id})
});
app.post('/',(req,res) => {
    res.status(200).json(req.body)
});