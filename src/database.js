const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'us-cdbr-east-05.cleardb.net',
    user: 'b23d01428accd4',
    password: '3370f343',
    database: 'heroku_ce53df1a5b9003a'
})
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