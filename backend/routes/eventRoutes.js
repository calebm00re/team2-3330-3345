const express = require("express");
const router = express.Router();
const pool = require("../db");

router.post("/createEvent", async (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
        console.log(connection);
        // if there is an issue obtaining a connection, release the connection instance and log the error
        logger.error("Problem obtaining MySQL connection", err);
        res.status(400).send("Problem obtaining MySQL connection");
      } else {
        let eventName = req.body['Event_Name'];
        let eventLocation = req.body['Event_Location'];
        let eventGenre = req.body['Event_Genre'];
        let eventDescription = req.body['Event_Description'];
        let eventDate = req.body['Event_Date'];
        let eventTime = req.body['Event_Time'];
    // if there is no issue obtaining a connection, execute query
        connection.query(
          "INSERT INTO events(Event_Name, Event_Location, Event_Genre, Event_Description, Event_Date, Event_Time) VALUES(?,?,?,?,?,?)",
          [eventName, eventLocation, eventGenre, eventDescription, eventDate, eventTime],
          (err, rows, fields) => {
            if (err) {
              logger.error("Error while posting event\n", err);
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

  //Delete event route using event name and date
  router.delete("/deleteEvent", async (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
        console.log(connection);
        // if there is an issue obtaining a connection, release the connection instance and log the error
        logger.error("Problem obtaining MySQL connection", err);
        res.status(400).send("Problem obtaining MySQL connection");
      } else {
        let eventName = req.body['Event_Name'];
        let eventDate = req.body['Event_Date'];
    // if there is no issue obtaining a connection, execute query
        connection.query(
          "DELETE FROM events WHERE Event_Name = ? &&  Event_Date = ?",
          [eventName, eventDate],
          (err, rows, fields) => {
            if (err) {
              logger.error("Error while deleting event\n", err);
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
  
  module.exports = router;

