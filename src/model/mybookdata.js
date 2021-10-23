const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://authenticatingmongodbatlas:authenticatingmongodbatlas@myappclustera.e2ppr.mongodb.net/MYLIBRARY?retryWrites=true&w=majority', {useNewUrlParser: true}).then(()=> console.log('mongo connected')).catch(err=>console.log(err));

const schema = mongoose.Schema;
const bookSchema = new schema({
    title: String,
    author: String,
    genre: String,
    image: String
});



var modelbookdataexport = mongoose.model('My_books', bookSchema);
module.exports = modelbookdataexport;

// modelbookdataexport.findByIdAndRemove({ _id: i }, function (err, deletedRecord) {
//     if (!err) {
//         console.log(deletedRecord);
//         // return res.status(500).send();
//     }
    
// });

