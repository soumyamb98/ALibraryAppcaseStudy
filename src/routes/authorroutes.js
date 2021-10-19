const express = require("express");
const authorsRoutes = express.Router();


const Authordata = require('../model/myauthordata');
function authorApplier(nav) {
    // var authors = [
    //     {
    //         title: "joseph barbara",
    //         author: "Author Born: 9 August 1905, Castellammare del Golfo, Italy",
    //         genre: "Joseph Roland Barbera was an American animator, film director, and television producer. He was the co-founder of the company Hanna-Barbera, with his longtime partner William Hanna. In 1937, he left Terrytoons to work for the then-recently established Metro-Goldwyn-Mayer cartoon studio (1937-1957). MGM offered its animators higher salaries than what Terrytoons could offer. His first few years at the studio were not particularly notable. In 1939, he and co-worker William Hanna started working on the idea of a cat-and-mouse duo of characters. They were allowed to co-direct \"Puss Gets the Boot\" (1940), introducing the new duo of Tom and Jerry. It was critically and commercially successful, but studio head Fred Quimby was initially uninterested in producing a full series of Tom and Jerry films. The lack of success of other products of the studio convinced Quimby, and Barbera and Hanna became the head of their own production unit to work on the new series.",
    //         img: "josephbarbara.jpg"
    //     },
    //     {
    //         title: "E.B. White",
    //         author: "Author Born: 11 July 1899, Mount Vernon, New York, United States",
    //         genre: "E.B. White, was the author of beloved children's books as well as poems, essays, and books for adults. His classics include Charlotte's Web, Stuart Little, and The Trumpet of the Swan. White is also famous for his co-authorship of The Elements of Style, also known as \"Strunk and White.\" Born in Mount Vernon, New York in 1899, White graduated from Cornell University where he was editor of the student newspaper. In the next few years, he worked for an advertising agency and as a reporter for several news services and The Seattle Times. White published his first article in The New Yorker magazine in 1925, joined the staff in 1927, and contributed articles and sketches for the next sixty years. He won many awards, including the National Medal for Literature, a special Pulitzer Prize, and the Laura Ingalls Wilder Medal.",
    //         img: "E.B.White.jpg"
    //     },
    //     {
    //         title: "douglas Adams",
    //         author: "Author Born: 11 March 1952, Cambridge, United Kingdom",
    //         genre: "Douglas Noël Adams was an English author, comic radio dramatist, and musician. He is best known as the author of the Hitchhiker's Guide to the Galaxy series. Hitchhiker's began on radio, and developed into a \"trilogy\" of five books (which sold more than fifteen million copies during his lifetime) as well as a television series, a comic book series, a computer game, and a feature film that was completed after Adams' death. The series has also been adapted for live theatre using various scripts; the earliest such productions used material newly written by Adams. He was known to some fans as Bop Ad (after his illegible signature), or by his initials \"DNA\". In addition to The Hitchhiker's Guide to the Galaxy, Douglas Adams wrote or co-wrote three stories of the science fiction television series Doctor Who and served as Script Editor during the seventeenth season. His other written works include the Dirk Gently novels, and he co-wrote two Liff books and Last Chance to See, itself based on a radio series. Adams also originated the idea for the computer game Starship Titanic, which was produced by a company that Adams co-founded, and adapted into a novel by Terry Jones.",
    //         img: "douglasAdams.jpg"
    //     },
    //     {
    //         title: "A.A. Milne",
    //         author: "Author Born: 18 January 1882, Hampstead, London, United Kingdom",
    //         genre: "Poet, writer, playwright, and journalist Alan Alexander Milne was born in London. His father was the headmaster at Henley House School, and Milne studied there under H.G. Wells. He earned a BA in mathematics at Cambridge University before moving to London, where he worked as the assistant editor of the humor magazine Punch for eight years (1906–1914). Milne served as an officer in the British army in World War I, after which he devoted his career to writing. Milne’s voice often incorporates humor and wordplay, but though his subjects are fanciful, they are often grounded in a serious emotional reality. After his only child, Christopher Robin, was born, Milne began to write the children’s books for which he is best known: two poetry collections, When We Were Very Young (1924) and Now We Are Six (1927), and the story books Winnie-the-Pooh (1926) and The House at Pooh Corner (1928). His Toad of Toad Hall (1930) is an adaptation of Kenneth Grahame’s The Wind in the Willows. Milne published prolifically in many genres, including numerous plays—most notably Mr. Pim Passes By (1919)—and a novel, The Red House Mystery (1922).",
    //         img: "A.A.Milne.jpg"
    //     },
    //     {
    //         title: " Khaled Hosseini ",
    //         author: "Author Born: 4 March 1965 (age 56 years), Kabul, Afghanistan",
    //         genre: "Khaled Hosseini was born in Kabul, Afghanistan, and moved to the United States in 1980. He is the author of the New York Times bestsellers The Kite Runner, A Thousand Splendid Suns, and And the Mountains Echoed. Hosseini is also a U.S. Goodwill Envoy to the UNHCR, the UN Refugee Agency, and the founder of The Khaled Hosseini Foundation, a nonprofit that provides humanitarian assistance to the people of Afghanistan.",
    //         img: "Khaled Hosseini.jpg"
    //     }
    // ]
    authorsRoutes.get("/", function (req, res) {
        Authordata.find()
            .then(function (authors) {
                res.render("authors", {
                    // nav: [{
                    //     link: "/books", name: "books"
                    // },
                    // {
                    //     link: "/authors", name: "authors"
                    // }],
                    nav,
                    title: "library",
                    authors
                });
        })
        
    });
    authorsRoutes.get("/single", function (req, res) {
        res.send("Im that book");
    })
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
