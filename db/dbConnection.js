const mongoose = require("mongoose");



mongoose.connect('mongodb://localhost/restful_api')
    .then(() => console.log("veri tabanına bağlandı"))
    .catch(hata => console.log("db bağlantı hatası"));


