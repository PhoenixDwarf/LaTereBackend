const mysql = require('mysql');

/*const mysqlConnection = mysql.createConnection({
    host: 'us-cdbr-east-05.cleardb.net',
    user: 'b23d01428accd4',
    password: '3370f343',
    database: 'heroku_ce53df1a5b9003a'
})*/

/*
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'lateredb'
})
*/

const mysqlConnection = mysql.createConnection({
    host: process.env.host ,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
})

var connection;

function handleDisconnect() {
    connection = mysql.createConnection(mysqlConnection);       // Recreate the connection, since
                                                                // the old one cannot be reused.
    
    connection.connect(function(err) {                          // The server is either down
      if(err) {                                                 // or restarting (takes a while sometimes).
        console.log('error when connecting to db:', err);
        setTimeout(handleDisconnect, 2000);                     // We introduce a delay before attempting to reconnect,
      }                                                         // to avoid a hot loop, and to allow our node script to
    });                                                         // process asynchronous requests in the meantime.
                                                                // If you're also serving http, display a 503 error.
    connection.on('error', function(err) {
      console.log('db error', err);
      if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
        handleDisconnect();                         // lost due to either server restart, or a
      } else {                                      // connnection idle timeout (the wait_timeout
        throw err;                                  // server variable configures this)
      }
    });
  }



/*
mysqlConnection.connect(function (err){
    if(err){
        console.log(err);
        return;
    } 
    else{
        console.log('DB is connected');
    }
} );

module.exports = mysqlConnection;
*/

handleDisconnect();