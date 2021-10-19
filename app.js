const express = require("express");
const app = new express();


const port = process.env.PORT || 5000;
const nav = [{
    link: "/books", name: "books"
    },
    {
    link: "/authors", name: "authors"
    },
    {
        link: "/admin", name: "addbooks"
    },
    {
        link: "/adminAuthors", name: "addauthors"
    },
    {
        link: "/", name: "sign out"
    }
];
const indexRouter = express.Router();
const booksRouter = require("./src/routes/bookroutes")(nav);
// const booksRouter= require("./src/routes/bookroutes")
const authorsRoutes = require("./src/routes/authorroutes")(nav);

const adminRouter = require("./src/routes/adminRoutes")(nav);


const adminAuthorsRouter = require("./src/routes/adminAuthorsRoutes")(nav);

// const booksRouter = express.Router(); // moved to bookroutes.js
// const signUpRouter = express.Router();


// const loginformrouter = express.Router();
// const loginformrouter = require("./src/routes/loginroutes");

const signUpRouter = require("./src/routes/signuproutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/src/views");






app.use("/books", booksRouter);
app.use("/authors", authorsRoutes);

app.use("/signup", signUpRouter);
// app.use("/loginform", loginformrouter);

app.use("/index", indexRouter);
app.use("/admin", adminRouter);
app.use("/adminAuthors", adminAuthorsRouter);



// or app.set("views","./src/views")
// app.get("/", function (req, res) {
//     res.sendFile(__dirname + "/src/views/index.html");
// });
// app.get("/", function (req, res) {
//     res.render("index");
// });
// app.get("/", function (req, res) {
//     res.render("index", { books: ["book1", "book2"], title: "library" });
// })




// app.get("/", function (req, res) {
//     res.render("index",
//         {
//             // nav: [{
//             //     link: "/books", name: "books"
//             // },
//             // {
//             //     link: "/authors", name: "authors"
//             // }],
//             nav,
//             title: "library"
//         });
// });
app.get("/", function (req, res) {
    res.render("loginform",
        {
            // nav: [{
            //     link: "/books", name: "books"
            // },
            // {
            //     link: "/authors", name: "authors"
            // }],
            nav,
            title: "library"
        });
});

// app.get("/books", function (req, res) {
//     res.render("books", {
//         nav: [{
//             link: "/books", name: "books"
//         },
//         {
//             link: "/authors", name: "authors"
//         }],
//         title: "library"
//     });
// });
// var books = [   // moved to bookroutes.js
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


signUpRouter.get("/", function (req, res) {
    res.render("signup")
});
indexRouter.get("/", function (req, res) {
    res.render("index",
    {
        // nav: [{
        //     link: "/books", name: "books"
        // },
        // {
        //     link: "/authors", name: "authors"
        // }],
        nav,
        title: "library"
    });
});
// loginformrouter.get("/", function (req, res) {
//     res.render("loginform")
// });

// booksRouter.get("/", function (req, res) {   // moved to bookroutes.js
//     res.render("books", {
//         nav: [{
//             link: "/books", name: "books"
//         },
//         {
//             link: "/authors", name: "authors"
//         }],
//         title: "library",
//         books
//     });
// });
// booksRouter.get("/single", function (req, res) {  // moved to bookroutes.js
//     res.send("Im that book");
// })
// booksRouter.get("/:id", function (req, res) {    // moved to bookroutes.js
//     const i = req.params.id;
//     res.render("book", {
//         nav: [{
//             link: "/books", name: "books"
//         },
//         {
//             link: "/authors", name: "authors"
//         }],
//         title: "library",
//         book: books[i]
//     });
// })


app.listen(port, ()=>{console.log("server is ready at " + port)});