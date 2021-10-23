const express = require("express");
const signUpRouter = express.Router();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://authenticatingmongodbatlas:authenticatingmongodbatlas@myappclustera.e2ppr.mongodb.net/MYLIBRARY?retryWrites=true&w=majority', { useNewUrlParser: true })
    .then(() => console.log('mongo connected')).catch(err => console.log(err));
signUpRouter.use(express.json());
signUpRouter.get("/", function (req, res) {
        res.render("signup", {
            // nav: [{
            //     link: "/books", name: "books"
            // },
            // {
            //     link: "/authors", name: "authors"
            // }],
            // nav,
            // title: "library",
            // books
        });
    });
    // booksRouter.get("/single", function (req, res) {
    //     res.send("Im that book");
    // })
// signUpRouter.post('/', (req, res) => {
//     const { urme, mnumber, email, pwd, ppwd } = req.body;
//     if (!urme || !mnumber || !email || !pwd || !ppwd) {
//         errors.push({ msg: "Please fill in all fields" });
//     }
//     if (pwd !== ppwd) {
//         errors.push({ msg: "Passwords not matching" })
//     }
//     if (pwd.length < 9) {
//         errors.push({ msg: "Passwords should be atleast 9 char" })
//     }
//     if (errors.length < 0) {
//         res.render('/', {
//             errors,
//             urme,
//             mnumber,
//             email,
//             pwd,
//             ppwd
//         })
//     } else {
//         res.send('pass');
//     }
// })



// signupRouter.post('/adduser',(req,res)=>{
//     var item = {
//         uname:req.body.urme,
//         pwd:req.body.pwd,

//     }
//     var user = userdata(item);
//     user.save();
//     res.redirect('/');
// })


signUpRouter.post("api/register", async (req, res) => {
    console.log(req.body)
   res.json({status: 'ok'}) 
})
 
module.exports = signUpRouter;

