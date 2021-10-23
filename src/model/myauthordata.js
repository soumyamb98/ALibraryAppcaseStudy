const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://authenticatingmongodbatlas:authenticatingmongodbatlas@myappclustera.e2ppr.mongodb.net/MYLIBRARY?retryWrites=true&w=majority', {useNewUrlParser: true}).then(()=> console.log('mongo connected')).catch(err=>console.log(err));

const schema = mongoose.Schema;
const authorSchema = new schema({
    title: String,
    author: String,
    genre: String,
    image: String
});

const authorsRoutes=require('../routes/authorroutes')

var modelauthordataexport = mongoose.model('My_Authors', authorSchema);
module.exports = modelauthordataexport;


// authorsRoutes.get('/addauthorsupdating/:id', function (req, res, next) {
//     const i = req.params.id;
//     Authordata.findById(i, function (err) {
//         if (err) throw err;
//         res.render("addauthorsupdating", {
//             nav,
//             title: "library",
//         });
//     });
// });
   
// authorsRoutes.get('/atupdate', function (req, res, next) {
//     var atupdate = Authordata.findByIdAndUpdate(req.body.id, {
//         title: String,
//         author: String,
//         genre: String,
//         image: String
//     });
//     atupdate (function (err) {
//         if (err) throw err;
//         res.render("/authors/addauthorsupdating", {
//             nav,
//             title: "library",
//         });
//     })
// });
