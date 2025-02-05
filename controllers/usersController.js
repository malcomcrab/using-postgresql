const db = require('../db/queries')
var url = require('url');
const bodyParser = require('body-parser');
const querystring = require('querystring');


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

  async function getUsernamesBySearchTerm(req, res) {
    
    const searchTerm = req.query.searchTerm
    console.log(searchTerm)
    const usernames = await db.searchUsernames(searchTerm);
    console.log("Usernames: ", usernames);
    res.render("index", {
      title: `Usernames match ${searchTerm}`,
      usernames: usernames
    })
  }

  async function deleteAllUsers(req,res) {
    await db.deleteAll();
    console.log('deleted test')
    res.redirect("/");
  }

  module.exports = {
    getUsernames,
    createUsernameGet,
    createUsernamePost,
    getAllSups,
    getUsernamesBySearchTerm,
    deleteAllUsers
  };

