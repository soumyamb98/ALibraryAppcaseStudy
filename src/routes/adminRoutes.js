const express = require("express");
const adminRouter = express.Router();



const bookdata = require("../model/mybookdata");

function applier(nav) {
   
    adminRouter.get("/", function (req, res) {
        res.render("addbooks", {
           
            nav,
            title: "library",
            
        });
    });
    adminRouter.get("/single", function (req, res) {
        res.send("Im that book");
    })
    adminRouter.post("/addbook", function (req, res) {
        // res.send("hey I'm added");
        // var queryItems = {
        //     title: req.query.title,
        //     author: req.query.author,
        //     genre: req.query.genre,
        //     image: req.query.image
        // };
        // var savebookdata = bookdata(queryItems);
        // //saving bookdata to database this after executing codes to check structure/schema and converting it into model and exporting it into adminRouter.js
        // savebookdata.save();
        // res.redirect('/books');

        var bodyItems = {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            image: req.body.image
        };
        var savebookdata = bookdata(bodyItems);
        //saving bookdata to database this after executing codes to check structure/schema and converting it into model and exporting it into adminRouter.js
        savebookdata.save();
        res.redirect('/books');
    });
    
    return adminRouter;
}
// module.exports = booksRouter;
module.exports = applier;
