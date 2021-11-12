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
        let userFirstName = req.body['userFirstName'];
        let userLastName = req.body['userLastName'];
        let userName = req.body['userName'];
        let userPassword = req.body['userPassword'];
        let userBirthday = req.body['userBirthday'];
        let userGender = req.body['userGender'];
    // if there is no issue obtaining a connection, execute query
        connection.query(
          "INSERT INTO users(userFirstName, userLastName, userName, userPassword, userBirthday, userGender) VALUES(?,?,?,?,?,?)",
          [userFirstName, userLastName, userName, userPassword, userBirthday, userGender],
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
  
  module.exports = router;
