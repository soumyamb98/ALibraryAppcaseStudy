const express = require("express");
const adminAuthorsRouter = express.Router();


const Authordata = require('../model/myauthordata');
function applier(nav) {
   
    adminAuthorsRouter.get("/", function (req, res) {
        res.render("addauthors", {
           
            nav,
            title: "library",
            
        });
    });
    adminAuthorsRouter.get("/single", function (req, res) {
        res.send("Im that book");
    })
    adminAuthorsRouter.post("/addauthor", function (req, res) {
        

        var bodyItems = {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            image: req.body.image
        };
        var saveauthordata = Authordata(bodyItems);
        //saving authordata to database this after executing codes to check structure/schema and converting it into model and exporting it into adminRouter.js
        saveauthordata.save();
        res.redirect('/authors');
    });
    
    return adminAuthorsRouter;
}
// module.exports = booksRouter;
module.exports = applier;
