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
        let eventName = req.body['eventName'];
        let eventLocation = req.body['eventLocation'];
        let eventGenre = req.body['eventGenre'];
        let eventDescription = req.body['eventDescription'];
        let eventDate = req.body['eventDate'];
        let eventTime = req.body['eventTime'];
    // if there is no issue obtaining a connection, execute query
        connection.query(
          "INSERT INTO events(eventName, eventLocation, eventGenre, eventDescription, eventDate, eventTime) VALUES(?,?,?,?,?,?)",
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
        let eventName = req.body['eventName'];
    // if there is no issue obtaining a connection, execute query
        connection.query(
          "DELETE FROM events WHERE eventName = ?",
          [eventName],
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

  //Edit event route 
  router.put("/editEvent", async (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
        console.log(connection);
        // if there is an issue obtaining a connection, release the connection instance and log the error
        logger.error("Problem obtaining MySQL connection", err);
        res.status(400).send("Problem obtaining MySQL connection");
      } else {
        let eventNameOld = req.body['eventNameOld'];
        let eventLocationOld = req.body['eventLocationOld'];
        let eventGenreOld = req.body['eventGenreOld'];
        let eventDescriptionOld = req.body['eventDescriptionOld'];
        let eventDateOld = req.body['eventDateOld'];
        let eventTimeOld = req.body['eventTimeOld'];
        let eventNameNew = req.body['eventNameNew'];
        let eventLocationNew = req.body['eventLocationNew'];
        let eventGenreNew = req.body['eventGenreNew'];
        let eventDescriptionNew = req.body['eventDescriptionNew'];
        let eventDateNew = req.body['eventDateNew'];
        let eventTimeNew = req.body['eventTimeNew'];
        
    // if there is no issue obtaining a connection, execute query
        connection.query(
          "UPDATE events SET eventName = ?,eventLocation = ?,eventGenre = ?,eventDescription = ?,eventDate = ?,eventTime = ? WHERE eventName = ? && eventLocation = ? && eventGenre = ? && eventDescription = ? && eventDate = ? && eventTime = ?",
          [eventNameNew,eventLocationNew,eventGenreNew,eventDescriptionNew,eventDateNew,eventTimeNew, eventNameOld,eventLocationOld,eventGenreOld,eventDescriptionOld,eventDateOld,eventTimeOld],
          (err, rows, fields) => {
            if (err) {
              logger.error("Error while editing event\n", err);
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

