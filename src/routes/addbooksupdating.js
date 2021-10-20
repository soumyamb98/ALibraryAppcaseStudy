// const express = require("express");
// var AddbooksupdatingRouter = express.Router();


// const multer = require('multer');
// var bookdata = require("../model/mybookdata");

// function applier(nav) {
   
//     AddbooksupdatingRouter.get("/", function (req, res) {
//         res.render("addbooksupdating", {
           
//             nav,
//             title: "library",
            
//         });
//     });
//     AddbooksupdatingRouter.get("/single", function (req, res) {
//         res.send("Im that book");
//     });



//     var fileStorageEngine = multer.diskStorage({
//         destination: (req, file, cb) => {
//             cb(null, './public/images/')
//         },
//         filename: (req, file, cb) => {
//             cb(null, Date.now() + '--' + file.originalname);
//         },
//     });
//     var imageupload = multer({ storage: fileStorageEngine });
//     AddbooksupdatingRouter.post("/single",imageupload.single('image'), (req, res) => {
        
//         console.log(req.file);
//         res.send("single file upload success");
//     });
//     // AddbooksupdatingRouter.get('/bkupdate', function (req, res, next) {
//     //     var bkupdate = Bookdata.findByIdAndUpdate(req.body.id, {
//     //         title: String,
//     //         author: String,
//     //         genre: String,
//     //         image: String
//     //     });
//     //     bkupdate(function (err) {
//     //         if (err) throw err;
//     //         res.redirect('/books')
//     //     });
//     // });

//     AddbooksupdatingRouter.get('/addbooksupdating/:id', function (req, res, next) {
//         var id = req.params.id;
//         Bookdata.findById(id, function (err) {
//             if (err) throw err;
//             res.render("addbooksupdating", {
//                 nav,
//                 title: "library",
//             });
//         });
//     });
//     AddbooksupdatingRouter.post("/bkupdate", imageupload.single('image'),function (req, res) {
        
//         var bodyItems = {
//             title: req.body.title,
//             author: req.body.author,
//             genre: req.body.genre,
//             image: req.file.filename
//             // image: req.body.image
//         };
//         var bkupdate = Bookdata.findByIdAndUpdate(req.body.id, { bodyItems })
//         bkupdate(function (err) {
//             if (err) throw err;
//             res.redirect('/books')
//         });
//         // console.log(req.file);
//         // var savebookupdatedata = bookdata(bodyItems);
//         //saving bookdata to database this after executing codes to check structure/schema and converting it into model and exporting it into adminRouter.js
//         // savebookupdatedata.save();
//         // res.redirect('/books');
//     });
    
//     return AddbooksupdatingRouter;
// }
// // module.exports = booksRouter;
// module.exports = applier;
