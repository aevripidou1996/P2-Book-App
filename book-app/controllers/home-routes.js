const router = require("express").Router();
const { Book, Genre } = require("../models/");
// const withAuth = require("../utils/auth");

// get all books for homepage
router.get("/", async (req, res) => {
  try {
    res.render("homepage");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/search", async (req, res) => {
  try {
    const searchInput = req.query.search;
    const bookData = await Book.findAll({
      where: {
        title: searchInput,
      },
    });
    const books = bookData.map((book) => book.get({ plain: true }));
    res.render("search", { books });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// // get single post
// router.get('/post/:id', withAuth, async (req, res) => {
//   try {
//     // what should we pass here? we need to get some data passed via the request body (something.something.id?)
//     // change the model below, but not the findByPk method. - DONE!
//     const postData = await Post.findOne({
//       // helping you out with the include here, no changes necessary
//       where: {id: req.params.id},
//       include: [
//         User,
//         {
//           model: Comment,
//           include: [User],
//         },
//       ],
//     });

//     if (postData) {
//       // serialize the data
//       const post = postData.get({ plain: true });
//       // which view should we render for a single-post? - DONE!
//       console.log(post);
//       res.render('single-post', { post, loggedIn: req.session.loggedIn});
//     } else {
//       res.status(404).end();
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// giving you the login and signup route pieces below, no changes needed.
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }
  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }

  res.render("signup");
});

module.exports = router;
