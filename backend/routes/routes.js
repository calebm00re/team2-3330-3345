const pool = require('../db')
const crypto = require('crypto');
const secret = 'dbgui3330';
const cookieName = 'AmateurHubDt';
const events = require('./eventRoutes');
const user = require('./userRoutes');

module.exports = function routes(app, logger) {
  // GET /
  app.get('/', (req, res) => {
    res.status(200).send('Go to 0.0.0.0:3000.');
  });
  
    // GET /api/login
  //authentification route, returns 0 if successful login, 1 if user doesn't exist, and 2 if incorrect password
  app.post('/api/login', async (req, res) => {
    console.log(req.cookies);

    // obtain a connection from our pool of connections
    pool.getConnection(async function (err, connection) {
      if (err) {
        // if there is an issue obtaining a connection, release the connection instance and log the error
        logger.error('Problem obtaining MySQL connection', err);
        res.status(400).send('Problem obtaining MySQL connection');
      } else {
        let userName = req.body['userName'];
        let psw = req.body['psw'];
        let sql1 = "SELECT userID, firstName, lastName FROM users WHERE userName ='" + userName + "'";

        connection.query(sql1, function (err, rows, fields) {
          if (err) {
            logger.error('Error while fetching values: \n', err);
            res.status(400).json({
              data: [],
              error: 'Error obtaining values'
            });
          } else {
            console.log("rows length: " + rows.length);
            //if the user exists
            if (rows.length > 0) {
              const hash = crypto.createHmac('sha256', secret).update(psw).digest('hex');
              // Do not print hashes
              // console.log(hash);
              let sql2 =
                "SELECT userID, firstName, lastName FROM users WHERE userName ='" +
                userName +
                "' AND " +
                "psw = '" +
                hash +
                "'";
              connection.query(sql2, function (err, rows, fields) {
                connection.release();
                if (err) {
                  logger.error('Error while fetching values: \n', err);
                  res.status(400).json({
                    data: [],
                    error: 'Error obtaining values'
                  });
                } else {
                  //returns 2 if the password is wrong
                  const response =
                    rows.length > 0
                      ? {
                          status: 0,
                          userID: rows[0].userID,
                          firstName: rows[0].firstName,
                          lastName: rows[0].lastName,
                        }
                      : { status: 2 };
                  let users = {
                    name: userName,
                    pxcd: hash
                  };
                  res.status(200).json(response);
                }
              });
            }
            //if the user doesn't exist
            else {
              res.status(200).json({ status: 1 });
            }
          }
        });
      }
    });
  });
  app.use('/api', events, user);

}