const express = require("express");
// const booksRouter = express.Router();
const loginformrouter = express.Router();
loginformrouter.get("/loginform", function (req, res) {
    res.render("loginform", {
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
module.exports = loginformrouter;