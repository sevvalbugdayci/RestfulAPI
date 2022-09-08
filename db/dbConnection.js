const mongoose = require("mongoose");



mongoose.connect('mongodb://localhost/restful_api', {useCreateIndex:true,useUnifiedTopology: true,useNewUrlParser : true})
    .then(() => console.log("veri tabanina bağlandi"))
    .catch(hata => console.log("db bağlanti hatasi"));


