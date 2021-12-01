const express = require("express");
const router = express.Router();
const pool = require("../db");
const secret = 'dbgui3330';
const crypto = require('crypto');

router.post("/createUser", async (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
        console.log(connection);
        // if there is an issue obtaining a connection, release the connection instance and log the error
        logger.error("Problem obtaining MySQL connection", err);
        res.status(400).send("Problem obtaining MySQL connection");
      } else {
        let userFirstName = req.body['firstName'];
        let userLastName = req.body['lastName'];
        let userName = req.body['userName'];
        let userPassword = req.body['psw'];
        let userBirthday = req.body['dob'];
        const hash = crypto.createHmac('sha256', secret).update(userPassword).digest('hex');
        // if there is no issue obtaining a connection, execute query
        connection.query(
          "INSERT INTO users(firstName, lastName, userName, psw, dob) VALUES(?,?,?,?,?)",
          [userFirstName, userLastName, userName, hash, userBirthday],
          (err, rows, fields) => {
            if (err) {
              logger.error("Error while posting user\n", err);
              res.status(400).json({
                data: [],
                error: "Error obtaining values",
              });
            } else {
              res.status(200).json({
                data: rows,
              });
            }
          }
        );
      }
      connection.release();
    });
  });

  //get user based on userID
  router.post("/getUser", async (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
        console.log(connection);
        // if there is an issue obtaining a connection, release the connection instance and log the error
        logger.error("Problem obtaining MySQL connection", err);
        res.status(400).send("Problem obtaining MySQL connection");
      } else {
        let userID = req.body['userID'];
        
    // if there is no issue obtaining a connection, execute query
        connection.query(
          "SELECT * FROM users WHERE userID = ?",
          [userID],
          (err, rows, fields) => {
            if (err) {
              logger.error("Error while getting user\n", err);
              res.status(400).json({
                data: [],
                error: "Error obtaining values",
              });
            } else {
              res.status(200).json({
                data: rows,
              });
            }
          }
        );
      }
      connection.release();
    });
  });

  //Delete user route using username
  router.delete("/deleteUser", async (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
        console.log(connection);
        // if there is an issue obtaining a connection, release the connection instance and log the error
        logger.error("Problem obtaining MySQL connection", err);
        res.status(400).send("Problem obtaining MySQL connection");
      } else {
        let userName = req.body['userName'];
    // if there is no issue obtaining a connection, execute query
        connection.query(
          "DELETE FROM users WHERE userName = ?",
          [userName],
          (err, rows, fields) => {
            if (err) {
              logger.error("Error while deleting user\n", err);
              res.status(400).json({
                data: [],
                error: "Error deleting values",
              });
            } else {
              res.status(200).json({
                data: rows,
              });
            }
          }
        );
      }
      connection.release();
    });
  });

  //Edit user route 
  router.put("/editUser", async (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
        console.log(connection);
        // if there is an issue obtaining a connection, release the connection instance and log the error
        logger.error("Problem obtaining MySQL connection", err);
        res.status(400).send("Problem obtaining MySQL connection");
      } else {
        let userID = req.body['userID'];
        let userFirstNameNew = req.body['firstName'];
        let userLastNameNew = req.body['lastName'];
        let userBirthdayNew = req.body['dob'];
        let userBioNew = req.body['bio'];
        
    // if there is no issue obtaining a connection, execute query
        connection.query(
          "UPDATE users SET firstName = ?, lastName = ?, dob = ?, bio = ? WHERE userID = ?",
          [userFirstNameNew,userLastNameNew,userBirthdayNew,userBioNew, userID],
          (err, rows, fields) => {
            if (err) {
              logger.error("Error while editing user\n", err);
              res.status(400).json({
                data: [],
                error: "Error editing values",
              });
            } else {
              res.status(200).json({
                data: rows,
              });
            }
          }
        );
      }
      connection.release();
    });
  });
  
  router.put("/setBio", async (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
        console.log(connection);
        // if there is an issue obtaining a connection, release the connection instance and log the error
        logger.error("Problem obtaining MySQL connection", err);
        res.status(400).send("Problem obtaining MySQL connection");
      } else {
        let bio = req.body['bio'];
        let userID = req.body['userID'];
        
    // if there is no issue obtaining a connection, execute query
        connection.query(
          "UPDATE users SET bio = ? WHERE userID = ?",
          [bio,userID],
          (err, rows, fields) => {
            if (err) {
              logger.error("Error while editing user\n", err);
              res.status(400).json({
                data: [],
                error: "Error editing values",
              });
            } else {
              res.status(200).json({
                data: rows,
              });
            }
          }
        );
      }
      connection.release();
    });
  });


  module.exports = router;
