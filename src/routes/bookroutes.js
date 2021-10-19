const express = require("express");
const booksRouter = express.Router();


const Bookdata = require('../model/mybookdata');
function applier(nav) {
    // var books = [
    //     {
    //         title: "tom and jerry",
    //         author: "joseph barbara",
    //         genre: "cartoon",
    //         img: "tomandjerry.jpg"
    //     },
    //     {
    //         title: "Charlotte’s Web",
    //         author: "E.B. White",
    //         genre: "Children's Literature",
    //         img: "acharlottesweb.webp"
    //     },
    //     {
    //         title: "The Hitchhiker’s Guide to the Galaxy",
    //         author: "Douglas Adams",
    //         genre: "science fiction",
    //         img: "The Hitchhiker’s Guide to the Galaxy.jpg"
    //     },
    //     {
    //         title: "Winnie-the-Pooh",
    //         author: "A.A. Milne, Ernest H. Shepard",
    //         genre: "cartoon",
    //         img: "Winnie-the-Pooh.jpg"
    //     },
    //     {
    //         title: "The Kite Runner",
    //         author: "Khaled Hosseini",
    //         genre: "Literary realism",
    //         img: "The Kite Runner by Khaled Hosseini.jpg"
    //     }
    // ]
    booksRouter.get("/", function (req, res) {
        
        Bookdata.find()
            .then(function (books) {
               
                res.render("books", {
                    // nav: [{
                    //     link: "/books", name: "books"
                    // },
                    // {
                    //     link: "/authors", name: "authors"
                    // }],
                    nav,
                    title: "library",
                    books
                });
            })
        // res.render("books", {
        //     // nav: [{
        //     //     link: "/books", name: "books"
        //     // },
        //     // {
        //     //     link: "/authors", name: "authors"
        //     // }],
        //     nav,
        //     title: "library",
        //     books
        // });
    });
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
        // res.render("book", {
        //     // nav: [{
        //     //     link: "/books", name: "books"
        //     // },
        //     // {
        //     //     link: "/authors", name: "authors"
        //     // }],
        //     nav,
        //     title: "library",
        //     book: books[i]
        // });
    });
    booksRouter.delete('/delete/:id', function (req, res) {
        const i = req.params.id;

        Bookdata.findOneAndRemove({ _id: i }, function (err, foundObject) {
            if (err) {
                console.log(err);
                return res.status(500).send();
            }
            return res.status(200).send();
        });
    booksRouter.put('/update/:id', function (req, res) {
        const i = req.params.id;

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
            return res.status(200).send();
        });
        
        
    })
    return booksRouter;
}
// module.exports = booksRouter;
module.exports = applier;
