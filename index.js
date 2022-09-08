const express = require("express");
require('./db/dbConnection')


//ROUTES

const userRouter = require('./router/userRouter')
const userModel = require('./models/userModel');

const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended : true }))

app.use('/api/users',userRouter);

app.get('/',(req, res) => {
    res.status(200).json({'mesaj':'hosgeldiniz'})
});



app.listen(8080,() => {
  console.log("8080 portu")
});