const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const router = express.Router();
const mysql = require('mysql');

// Contection to the dataase //

var mysqlConnection;
var db_config = {
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
};

function handleDisconnect() {

    mysqlConnection = mysql.createConnection(db_config);


    mysqlConnection.connect(function (err) {
        if (err) {
            console.log('error when connecting to db:', err);
            setTimeout(handleDisconnect, 2000);
        }
    });

    mysqlConnection.on('error', function (err) {
        console.log('db error', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleDisconnect();
        } else {
            throw err;
        }
    });
}

handleDisconnect();


// end conection to the data base //
// const mysqlConnection = require('../database');

router.get('/', (req,res) => {
    res.send('Welcome to my API');
});

router.get('/asd6a5Adasd3SDG2FGER56sd2ds62/users', (req, res) => {
    mysqlConnection.query('SELECT * FROM users', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        }
        else {
            console.log(err);
        }
    })
})

router.get('/asd6a5Adasd3SDG2FGER56sd2ds62/searchID:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM users WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        }
        else {
            console.log(err);
        }
    })
})

router.post('/asd6a5Adasd3SDG2FGER56sd2ds62/addUser', (req, res) => {
    const { name, lastname, address, neighborhood, phone, email, password } = req.body;
    const query = `
        CALL UserAddOrEdit(0,?,?,?,?,?,?,?,0)
    `;
    mysqlConnection.query(query, [name, lastname, address, neighborhood, phone, email, password], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'User Saved' });
        }
        else {
            res.status(400).json(err);
        }
    })
})

router.put('/asd6a5Adasd3SDG2FGER56sd2ds62/updateUser:id', (req, res) => {
    const { name, lastname, address, neighborhood, phone, email, password } = req.body;
    const { id } = req.params;
    const query = `
        CALL UserAddOrEdit (?,?,?,?,?,?,?,?,0)
    `;
    mysqlConnection.query(query, [id, name, lastname, address, neighborhood, phone, email, password], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'User Updated' });
        }
        else {
            console.log(err);
        }
    })

})

router.put('/asd6a5Adasd3SDG2FGER56sd2ds62/updateSecurityQuestion:id', (req, res) => {
    const { securityAnswer, securityNumber } = req.body;
    const { id } = req.params;
    const query = `
        CALL UpdateSecurityQuestion (?,?,?)
    `;
    mysqlConnection.query(query, [id, securityAnswer, securityNumber], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Security Question Updated' });
        }
        else {
            console.log(err);
        }
    })

})

router.put('/asd6a5Adasd3SDG2FGER56sd2ds62/changePass:id', (req, res) => {
    const { newpass } = req.body;
    const { id } = req.params;
    const query = `
        CALL UpdateSecurityQuestion (?,?)
    `;
    mysqlConnection.query(query, [id, newpass], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Password Updated' });
        }
        else {
            console.log(err);
        }
    })

})

router.delete('/asd6a5Adasd3SDG2FGER56sd2ds62/deleteUser:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM users WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'User Deleted' })
        }
        else {
            console.log(err);
        }
    })
})

router.get('/asd6a5Adasd3SDG2FGER56sd2ds62/logUserByEmail/:email/:password', (req, res) => {
    const { email, password } = req.params;

    const query = ` SELECT * FROM users WHERE email = ? and password = ? `;

    mysqlConnection.query(query, [email, password], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        }
        else {
            res.json(400).json(err);
        }
    })
})

router.get('/asd6a5Adasd3SDG2FGER56sd2ds62/logUserByPhone/:phone/:password', (req, res) => {
    const { phone, password } = req.params;

    const query = ` SELECT * FROM users WHERE phone = ? and password = ? `;

    mysqlConnection.query(query, [phone, password], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        }
        else {
            res.json(400).json(err);
        }
    })
})




module.exports = router;