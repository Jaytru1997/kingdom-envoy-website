const express = require("express");
const router = express.Router();
const Templates = require("../services/templates");

const templates = new Templates();
// STATIC ROUTES

router.route("/").get(templates.home);

router.route("/index").get((req, res) => {
  res.redirect(302, "/");
});

router.route("/about").get(templates.about);

router.route("/contact").get(templates.contact);

router.route("/login").get(templates.login);

router.route("/register").get(templates.register);


//USER ROUTES

// router
//   .route("/user/index")
//   .get(protect, restrictTo("admin", "user"), (req, res) => {
//     res.render("user/index", {
//       user: req.user,
//     });
//   });


//ADMIN ROUTES

module.exports = router;
