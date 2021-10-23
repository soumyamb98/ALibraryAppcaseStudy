const express = require("express");
const adminRouter = express.Router();


const multer = require('multer');
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
    adminRouter.post("/single",imageupload.single('image'), (req, res) => {
        
        console.log(req.file);
        res.send("single file upload success");
    });
    adminRouter.post("/addbook", imageupload.single('image'),function (req, res) {
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
            image: req.file.filename
            // image: req.body.image
        };
        // console.log(req.file);
        var savebookdata = bookdata(bodyItems);
        //saving bookdata to database this after executing codes to check structure/schema and converting it into model and exporting it into adminRouter.js
        savebookdata.save();
        res.redirect('/books');

        adminRouter.post('/edit/:id',imageupload.single('image'),(req,res)=>{
    
            const id = req.params.id
          console.log(id)
        
            bookdata.findByIdAndUpdate(id, {
                title: req.body.title,
                author: req.body.author,
                genre: req.body.genre,
                image: req.file.filename
            }, (err, result) => {
                res.redirect('/books');
            });
        
           });
    });
    
    return adminRouter;
}
// module.exports = booksRouter;
module.exports = applier;
