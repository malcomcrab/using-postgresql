const db = require('../db/queries')

async function getUsernames(req, res) {
    const usernames = await db.getAllUsernames();
    console.log("Usernames: ", usernames);
    res.render("index", {
      title: "Usernames", 
      usernames: usernames
    });
  }
    

  async function createUsernameGet(req, res) {
    res.render("new", {
        title: "Add User"
    })
  }

  async function createUsernamePost(req, res) {
    const { username } = req.body;
    await db.insertUsername(username);
    res.redirect("/");
  }

  async function getAllSups(req, res){
    const usernames = await db.getUsernameSups()
    console.log("Usernames: ", usernames)
    res.render("index", {
      title: "sups",
      usernames: usernames
    })
  }
  async function getUsernames(req, res) {
    const usernames = await db.getAllUsernames();
    console.log("Usernames: ", usernames);
    res.render("index", {
      title: "Usernames", 
      usernames: usernames
    });
  }

  module.exports = {
    getUsernames,
    createUsernameGet,
    createUsernamePost,
    getAllSups
  };

