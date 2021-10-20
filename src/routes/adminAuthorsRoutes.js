const express = require("express");
const adminAuthorsRouter = express.Router();

const multer = require('multer');
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
    });

    var fileStorageEngine = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './public/images/')
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + '--' + file.originalname);
        },
    });
    var imageupload = multer({ storage: fileStorageEngine });
    // adminAuthorsRouter.post("/single",imageupload.single('image'), (req, res) => {
        
    //     console.log(req.file);
    //     res.send("single file upload success");
    // });
    adminAuthorsRouter.post("/addauthor", imageupload.single('image'),function (req, res) {
        

        var bodyItems = {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            image: req.file.filename
            // image: req.body.image
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
