const express = require("express");
const authorsRoutes = express.Router();


const Authordata = require('../model/myauthordata');
const fs = require('fs');

var multer = require('multer');
function authorApplier(nav) {
    
    authorsRoutes.get("/", function (req, res) {
        Authordata.find()
            .then(function (authors) {
                res.render("authors", {
                   
                    nav,
                    title: "library",
                    authors
                });
        })
        
    });
    // authorsRoutes.get("/single", function (req, res) {
    //     res.send("Im that book");
    // })
    authorsRoutes.get("/:id", function (req, res) {
        const i = req.params.id;
        Authordata.findOne({ _id: i })
            .then(function (author) {
                res.render("author", {
                
                    nav,
                    title: "library",
                    author
                });
            })
    })
        
        
        authorsRoutes.get('/delete/:id', function (req, res) {
            const i = req.params.id;
            Authordata.findByIdAndDelete(i , function (err) {
                if (err) throw err;
                res.redirect('/authors');
            });
        });

       authorsRoutes.get('/delete/:id', function (req, res) {
            const i = req.params.id;
           Authordata.findByIdAndDelete(i, function (err) {
               if (err) throw err;
               res.redirect('/authors');
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
        Authordata.get("/atupdate/:id", function (req, res) {
            let id = req.params.id;
            Authordata.findById(id), (err, user) => {
                if (err) {
                    res.redirect("/");
                } else {
                    if (user == null) {
                        res.render('/');
                    } else {
                    res.render('addauthorsupdating', {
                            nav,
                        title: "library",
                        })
                    }
                }
            }
        })
    
    
        Authordata.post('/atupdate/:id', imageupload.single('image'), function(req, res, next){
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
            Authordata.findByIdAndUpdate(id, {
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
                        message: "Authors updated successfully"
                    };
                    res.redirect('/authors');
                }
            })
        })
        // authorsRoutes.get('/addauthorsupdating/:id', function (req, res, next) {
        //     const i = req.params.id;
        //     Authordata.findById(i, function (err) {
        //         if (err) throw err;
        //         res.render("addauthorsupdating", {
        //             nav,
        //             title: "library",
        //         });
        //     })
        //    }); 
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
        // res.render("author", {
        //     // nav: [{
        //     //     link: "/books", name: "books"
        //     // },
        //     // {
        //     //     link: "/authors", name: "authors"
        //     // }],
        //     nav,
        //     title: "library",
        //     author: authors[i]
        // });
    });
    return authorsRoutes;
}
// module.exports = booksRouter;
module.exports = authorApplier;
