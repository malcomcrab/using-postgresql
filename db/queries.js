const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function deleteAll() {
  await pool.query("DELETE FROM usernames")
}

async function getUsernameSups(){
  const { rows } = await pool.query("SELECT * FROM usernames WHERE username LIKE '%sup%'")
  return rows;
}

async function searchUsernames(searchTerm){
  const { rows } = await pool.query(`SELECT * FROM usernames WHERE username LIKE '%${searchTerm}%' `)
  return rows;
}

module.exports = {
  getAllUsernames,
  insertUsername,
  getUsernameSups,
  searchUsernames,
  deleteAll
};
