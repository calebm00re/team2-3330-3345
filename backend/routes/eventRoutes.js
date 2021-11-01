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

  //Edit event route 
  router.put("/editEvent", async (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
        console.log(connection);
        // if there is an issue obtaining a connection, release the connection instance and log the error
        logger.error("Problem obtaining MySQL connection", err);
        res.status(400).send("Problem obtaining MySQL connection");
      } else {
        let eventNameOld = req.body['Event_Name_Old'];
        let eventLocationOld = req.body['Event_Location_Old'];
        let eventGenreOld = req.body['Event_Genre_Old'];
        let eventDescriptionOld = req.body['Event_Description_Old'];
        let eventDateOld = req.body['Event_Date_Old'];
        let eventTimeOld = req.body['Event_Time_Old'];
        let eventNameNew = req.body['Event_Name_New'];
        let eventLocationNew = req.body['Event_Location_New'];
        let eventGenreNew = req.body['Event_Genre_New'];
        let eventDescriptionNew = req.body['Event_Description_New'];
        let eventDateNew = req.body['Event_Date_New'];
        let eventTimeNew = req.body['Event_Time_New'];
        
    // if there is no issue obtaining a connection, execute query
        connection.query(
          "UPDATE events SET Event_Name = ?,Event_Location = ?,Event_Genre = ?,Event_Description = ?,Event_Date = ?,Event_Time = ? WHERE Event_Name = ? && Event_Location = ? && Event_Genre = ? && Event_Description = ? && Event_Date = ? && Event_Time = ?",
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

