const mysql = require('mysql');

/*
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'lateredb'
})
*/

/*
const mysqlConnection = mysql.createConnection({
    host: process.env.host ,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
})
*/

/*

var db_config = {
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
};


var connection;

function handleDisconnect() {

    connection = mysql.createConnection(db_config);


    connection.connect(function (err) {
        if (err) {
            console.log('error when connecting to db:', err);
            setTimeout(handleDisconnect, 2000);
        }
    });

    connection.on('error', function (err) {
        console.log('db error', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleDisconnect();
        } else {
            throw err;
        }
    });
}

handleDisconnect();
*/

/*

mysqlConnection.connect(function (err){
    if(err){
        console.log(err);
        setTimeout(mysqlConnection, 2000);
    } 
    else{
        console.log('DB is connected');
    }
} );


module.exports = mysqlConnection;
*/
