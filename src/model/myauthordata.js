const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://authenticatingmongodbatlas:authenticatingmongodbatlas@myappclustera.e2ppr.mongodb.net/MYLIBRARY?retryWrites=true&w=majority');

const schema = mongoose.Schema;
const authorSchema = new schema({
    title: String,
    author: String,
    genre: String,
    image: String
});



var modelauthordataexport = mongoose.model('My_Authors', authorSchema);
module.exports = modelauthordataexport;



