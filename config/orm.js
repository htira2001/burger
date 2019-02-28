let connection = require("../config/connection.js");

// Helper function for SQL syntax //

function printQuestionMarks(num) {

    let arr = []; 

 for (let i = 0; i < num; i++) {

        arr.push("?");

    }

    return arr.toString();

}


function objToSql(ob) {

    let arr = [];

    // For loop to loop though keys and push the key/value as a string int arr //     

    for (let key in ob) {

        let value = ob[key];

        // The hasOwnProperty method returns true if object has a property of the specified name, false if it does not //

        if (Object.hasOwnProperty.call(ob, key)) {

        if (typeof value === "string" && value.indexOf(" ") >= 0) {

        value = "'" + value + "'";

      }

            arr.push(key + "=" + value);

        }

    }

    return arr.toString();

}

// Methods for MySQL commands // 

let orm = {

    // selectAll()

    selectAll: function(tableInput, cb) {

        let queryString = "SELECT * FROM " + tableInput + ";";

        connection.query(queryString, function (err, res){

            if (err) {

                throw err; 

            }

            cb(res);

    });

},

    insertOne: function(table, vals, cb) {

        let queryString = "INSERT INTO " + table;

        console.log("this is the table" + table);

        console.log("this is vals!" + vals);

        // console.log('this is col' + cols);

        queryString += " (";

        queryString += "burger_name";

        // queryString += cols.toString();

        queryString += ") ";

        queryString += "VALUE ('";

        // queryString += printQuestionMarks(vals.length);

        queryString += vals;

        queryString += "') ";

        console.log("This is the query string!" + queryString);

        // console.log("This is printQuestionMarks" + printQuestionMarks());

        connection.query(queryString, vals, function(err, res) {

            if (err) {

                throw err;

            }

            cb(res);

        });

    },
// updateOne()

   updateOne: function(table, objColVals, condition, cb) {

        let queryString = "UPDATE " + table;

        queryString += " SET ";

        queryString += objToSql(objColVals);

        queryString += " WHERE ";

        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function(err, res) {

            if (err) {

                throw err;

            }

            cb(res);

        });

    }

};

// Export the orm object for the model burger.js //

module.exports = orm;