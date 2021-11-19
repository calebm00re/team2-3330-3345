const express = require("express");
const router = express.Router();
const pool = require("../db");


//make a review
router.post("/createReview", async (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
        console.log(connection);
        // if there is an issue obtaining a connection, release the connection instance and log the error
        logger.error("Problem obtaining MySQL connection", err);
        res.status(400).send("Problem obtaining MySQL connection");
      } else {
        let userKey = req.body['userFK'];
        let eventKey = req.body['eventFK'];
        let revDT = req.body['reviewDateTime'];
        let revStars = req.body['starRating'];
        let revBody = req.body['reviewText'];
    // if there is no issue obtaining a connection, execute query
        connection.query(
          "INSERT INTO reviews(userFK, eventFK, reviewDateTime, starRating, reviewText) VALUES(?,?,?,?,?)",
          [userKey, eventKey, revDT, revStars, revBody],
          (err, rows, fields) => {
            if (err) {
              logger.error("Error while posting review\n", err);
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

//delete a review
router.delete("/deleteReview", async (req, res) => {
  pool.getConnection((err, connection) => {
      if (err) {
      console.log(connection);
      // if there is an issue obtaining a connection, release the connection instance and log the error
      logger.error("Problem obtaining MySQL connection", err);
      res.status(400).send("Problem obtaining MySQL connection");
      } else {
      let userK = req.body['userFK'];
      let eventK = req.body['eventFK'];
      connection.query(
          "DELETE FROM reviews WHERE userFK = ? && eventFK = ?",
          [userK, eventK],
          (err, rows, fields) => {
          if (err) {
              logger.error("Error while deleting review\n", err);
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

//all review info
router.get("/review", async (req, res) => {
  pool.getConnection((err, connection) => {
      if (err) {
      console.log(connection);
      // if there is an issue obtaining a connection, release the connection instance and log the error
      logger.error("Problem obtaining MySQL connection", err);
      res.status(400).send("Problem obtaining MySQL connection");
    } else {
      let eventID = req.body['eventFK'];
      connection.query(
        "SELECT * FROM reviews WHERE userFK = ?",eventID,
        (err, rows, fields) => {
          if (err) {
            logger.error("Error while getting events\n", err);
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

//review stars
router.get("/reviewStars", async (req, res) => {
  pool.getConnection((err, connection) => {
      if (err) {
      console.log(connection);
      // if there is an issue obtaining a connection, release the connection instance and log the error
      logger.error("Problem obtaining MySQL connection", err);
      res.status(400).send("Problem obtaining MySQL connection");
    } else {
      let eventID = req.body['eventFK'];
      connection.query(
        "SELECT starRating FROM reviews WHERE userFK = ?",eventID,
        (err, rows, fields) => {
          if (err) {
            logger.error("Error while getting events\n", err);
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