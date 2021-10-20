const express = require("express");
const booksRouter = express.Router();


const Bookdata = require('../model/mybookdata');
const fs = require('fs');

const AddbooksupdatingRouter = require('../routes/addbooksupdating');
var multer = require('multer');


function applier(nav) {




    // AddbooksupdatingRouter.get("/", function (req, res) {
    //     res.render("addbooksupdating", {
           
    //         nav,
    //         title: "library",
            
    //     });
    // });
    
    booksRouter.get("/", function (req, res) {
        
        Bookdata.find()
            .then(function (books) {
               
                res.render("books", {
                    
                    nav,
                    title: "library",
                    books
                });
            });
    });
    // booksRouter.get("/addbooksupdating", function (req, res) {
        
    //     res.render("addbooksupdating", {
    //         nav,
    //         title: "library",
    //     });
    // });
    
    // booksRouter.get("/single", function (req, res) {
    //     res.send("Im that book");
    // })
    booksRouter.get("/:id", function (req, res) {
        const i = req.params.id;

        Bookdata.findOne({ _id: i })
            .then(function (book) {
                res.render("book", {
                
                    nav,
                    title: "library",
                    book
                });
        })
        
    });
    booksRouter.get('/delete/:id', function (req, res) {
        const i = req.params.id;
        Bookdata.findByIdAndDelete(i, function (err) {
            if (err) throw err;
            res.redirect('/books');
        })
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

    // booksRouter.get('/addbooksupdating/:id', function (req, res) {
    //     const i = req.params.id;
    //     Bookdata.findByIdAndUpdate(i, function (err) {
    //         if (err) throw err;
    //         res.redirect('/books');
    //     });
        // booksRouter.get('/addbooksupdating/:id', function (req, res, next) {
        //     var i = req.params.id;
        //     Bookdata.findById(i, function (err) {
        //         if (err) throw err;
        //         res.render("addbooksupdating", {
        //             nav,
        //             title: "library",
        //         });
        //     });
        // });
    
    booksRouter.get("/bkupdate/:id", function (req, res) {
        let id = req.params.id;
        Bookdata.findById(id), (err, user) => {
            if (err) {
                res.redirect("/");
            } else {
                if (user == null) {
                    res.render('/');
                } else {
                    res.render('addbooksupdating', {
                        nav,
                    title: "library",
                    })
                }
            }
        }
    })


    booksRouter.post('/bkupdate/:id', imageupload.single('image'), function(req, res, next){
        let id = req.params.id;
        let new_image = '';
        if (req.file) {
            new_image = req.file.filename;
            try {
                fs.unlinkSync('./images/'+req.body.old_image)
            } catch (err) {
                console.log(err);
            }
        } else {
            new_image = req.body.old_image;
        }
        Bookdata.findByIdAndUpdate(id, {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            image: new_image
        }, (err, result) => {
            if (err) {
                res.json({ message: err.message, type: 'danger' });
            } else {
                req.session.message = {
                    type: 'success',
                    message: "books updated successfully"
                };
                res.redirect('/books');
            };
        })
    })
        // booksRouter.post('/bkupdate', imageupload.single('image'),function (req, res, next) {
        //     var bkupdate = Bookdata.findByIdAndUpdate(req.body.id, {
        //         title: String,
        //         author: String,
        //         genre: String,
        //         image: String
        //     });
        //     bkupdate(function (err) {
        //         if (err) throw err;
        //         res.redirect('/books')
        //     });
        // });


        // Bookdata.findOneAndRemove({ _id: i }, function (err, foundObject) {
        //     if (err) {
        //         console.log(err);
        //         return res.status(500).send();
        //     }
        //     return res.status(200).send();
        // });
    // booksRouter.put('/update/:id', function (req, res) {
    //     const i = req.params.id;

        // Bookdata.findOne({ _id: i }, function (err, foundObject) {
        //     if (err) {
        //         console.log(err);
        //         return res.status(500).send();
        //     } else {
        //         if (!foundObject) {
        //             return res.status(404).send();
        //         } else {
        //             if (req.body.name) {
                        
        //             }
        //         }
        //     }
        //     return res.status(200).send();
        // });
        
        
    // })
    return booksRouter;
}
// module.exports = booksRouter;
module.exports = applier;
