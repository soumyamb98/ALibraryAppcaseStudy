const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://authenticatingmongodbatlas:authenticatingmongodbatlas@myappclustera.e2ppr.mongodb.net/MYLIBRARY?retryWrites=true&w=majority', { useNewUrlParser: true }).then(() => console.log('mongo connected')).catch(err => console.log(err));
const UserSchema = new mongoose.Schema({
    urme: {
        type: String,
        required: true
    },
    mnumber:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    pwd: {
        type: String,
        required: true
    },
    ppwd: {
        type: String,
        required: true
    }
})
const user = mongoose.model("user", UserSchema);
modules.exports = user;
