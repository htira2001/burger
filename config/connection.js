// Dependencies //



var mysql = require("mysql");

var connection; 

// Connecting Node to MySQL //

// let connection = mysql.createConnection({

//     host: "localhost",

//     port: 3306,

//     user: "root",

//     password: "Password1!",

//     database: "burger_db"

// });

// connection.connect(function(err) {

//     if (err) {

//         console.error("There seems to be an error in connecting: " + err.stack);

//         return; 

//     }

//     console.log("You are connected to the burger database at id " + connection.threadId + "!");

// });

// For Heroku Deployment vs. Local MySQL Database //

if(process.env.JAWSDB_URL){

    connection = mysql.createConnection(process.env.JAWSDB_URL);

    console.log("My Heroku connection is started!");

}

else{

    connection = mysql.createConnection({

        host     : 'localhost',

        user     : 'root',

        password : "", // Add your password

        database : 'burger_db', // Add your database

    });

}
// Exporting the config connection for ORM use // 

 module.exports = connection;