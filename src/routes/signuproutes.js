const express = require("express");
const signUpRouter = express.Router();

   
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
   
 
module.exports = signUpRouter;

