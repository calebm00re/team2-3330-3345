const express = require("express");
const router = express.Router();
const pool = require("../db");

router.get("/ticketsEvents", async (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
        console.log(connection);
        // if there is an issue obtaining a connection, release the connection instance and log the error
        logger.error("Problem obtaining MySQL connection", err);
        res.status(400).send("Problem obtaining MySQL connection");
      } else {
        let mine = req.body['userFK'];
        connection.query(
          "SELECT eventFK FROM events WHERE userFK = ?",mine,
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

  router.get("/ticketsUsers", async (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
        console.log(connection);
        // if there is an issue obtaining a connection, release the connection instance and log the error
        logger.error("Problem obtaining MySQL connection", err);
        res.status(400).send("Problem obtaining MySQL connection");
      } else {
        let eventid = req.body['eventFK'];
        connection.query(
          "SELECT userFK FROM events WHERE eventFK = ?",eventid,
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

  router.post("/createTicket", async (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
        console.log(connection);
        // if there is an issue obtaining a connection, release the connection instance and log the error
        logger.error("Problem obtaining MySQL connection", err);
        res.status(400).send("Problem obtaining MySQL connection");
      } else {
        let user = req.body['userFK'];
        let event = req.body['eventFK'];
    // if there is no issue obtaining a connection, execute query
        connection.query(
          "INSERT INTO tickets(userFK, eventFK) VALUES(?,?)",
          [user, event],
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

  router.delete("/deleteTicket", async (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
        console.log(connection);
        // if there is an issue obtaining a connection, release the connection instance and log the error
        logger.error("Problem obtaining MySQL connection", err);
        res.status(400).send("Problem obtaining MySQL connection");
      } else {
        let userNum = req.body['userFK'];
    // if there is no issue obtaining a connection, execute query
        connection.query(
          "DELETE FROM tickets WHERE userFK = ?",
          [userNum],
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