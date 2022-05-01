const express = require('express');
const app = express();

// Settings
//app.set('port', process.env.PORT || 3000);
let port = process.env.PORT || 3000;

// Middlewares
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});



//Routes
app.use(require('./routes/users'));

//Starting the server
app.listen(port, () => {
    console.log(`Server on port ${port}`);
});



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
/*
const mysqlConnection = mysql.createConnection({
    host: process.env.host ,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
})
*/
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