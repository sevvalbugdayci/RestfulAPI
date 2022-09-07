const express = require("express");
const mongoose = require("mongoose");



const app = express();
mongoose.connect('mongodb://localhost/restful_api')
    .then(() => console.log("veri tabanına bağlandı"))
    .catch(hata => console.log("db bağlantı hatası"));
app.listen(3002, () => {
    console.log("Hİ");
})