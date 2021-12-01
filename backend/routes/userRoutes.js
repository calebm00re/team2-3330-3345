const express = require("express");
const router = express.Router();
const pool = require("../db");

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
        // let userGender = req.body['userGender'];
    // if there is no issue obtaining a connection, execute query
        connection.query(
          "INSERT INTO users(firstName, lastName, userName, psw, dob) VALUES(?,?,?,?,?)",
          [userFirstName, userLastName, userName, userPassword, userBirthday],
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
  router.get("/getUser", async (req, res) => {
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
        let userFirstNameOld = req.body['userFirstNameOld'];
        let userLastNameOld = req.body['userLastNameOld'];
        let userNameOld = req.body['userNameOld'];
        let userPasswordOld = req.body['userPasswordOld'];
        let userBirthdayOld = req.body['userBirthdayOld'];
        let userGenderOld = req.body['userGenderOld'];
        let userFirstNameNew = req.body['userFirstNameNew'];
        let userLastNameNew = req.body['userLastNameNew'];
        let userNameNew = req.body['userNameNew'];
        let userPasswordNew = req.body['userPasswordNew'];
        let userBirthdayNew = req.body['userBirthdayNew'];
        let userGenderNew = req.body['userGenderNew'];
        
    // if there is no issue obtaining a connection, execute query
        connection.query(
          "UPDATE users SET userFirstName = ?,userLastName = ?,userName = ?,userPassword = ?,userBirthday = ?,userGender = ? WHERE userFirstName = ? && userLastName = ? && userName = ? && userPassword = ? && userBirthday = ? && userGender = ?",
          [userFirstNameNew,userLastNameNew,userNameNew,userPasswordNew,userBirthdayNew,userGenderNew, userFirstNameOld,userLastNameOld,userNameOld,userPasswordOld,userBirthdayOld,userGenderOld],
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
