var mode = "kayra"
var bool_query = true

const faker = require("faker")
const h = require('./helper_functions')

const mysql = require('mysql');


if (mode == "goktug"){

    var bool_query = true;



    const nationalities = ["English", "German", "French", "Turkish", "Spanish", "Indian", "Chinese", "Japanese", "Czech", "Hungarian", "Russian", "Italian", "American", "Mexican", "Japanese", "Ukrainian", "Mongolian", "Australian", "Austrian", "Belgian", "Nigerian", "South Korean", "Irish", "Greek", "Canadian", "Brazilian", "Bulgarian", "Egyptian"];

    var passenger_id = h.generateID("passenger");
    var firstName = faker.name.firstName();
    var lastName = faker.name.lastName();
    var name = firstName + " " + lastName;
    var email = ${firstName.toLowerCase()}_${lastName.toLowerCase()}@gmail.com;
    var gender = ["Male", "Female"].at(h.getRandomInt(0, 2));
    var age = h.getRandomInt(0, 80);
    var nationality = nationalities.at(h.getRandomInt(0, nationalities.length));

    var budget = age >= 18 ? h.getRandomInt(0, 1000) : null;
    var seat_type = age >= 2 ? ["B", "E"].at(h.getRandomInt(0, 2)) : null;
    var parentID1 = age >= 2 ? null : 1;
    var parentID2 = age >= 2 ? null : 2;

    var seat_number = age >= 2 ? h.getSeatNumber(17) : null;
    var flight_id = h.generateID("flight");

    // console.log("\n")
    // // console.log(Flight ID: ${tempFlightID})
    // console.log(Passenger ID: ${passenger_id})
    // console.log(First Name: ${firstName})
    // console.log(Last Name: ${lastName})
    // console.log(Email: ${email})
    // console.log(Gender: ${gender})
    // console.log(Age: ${age})
    // console.log(Budget: ${budget}$)
    // console.log(Seat Type: ${seat_type})
    // console.log(ParentID1: ${parentID1})
    // console.log(ParentID2: ${parentID2})
    // console.log(Nationality: ${nationality})
    // console.log(Seat Number: ${seat_number})
    // console.log("\n")

    if (bool_query) {
        const mysql = require('mysql');

        const connection = mysql.createConnection({
            host: 'aws-cs308.c5gk4os06v5f.eu-north-1.rds.amazonaws.com',
            user: 'admin',
            password: 'cs308project',
            database: 'CS308_MAIN_SQL_DATABASE'
        });

        connection.connect();

        const query = 'INSERT INTO Passengers (passenger_id, flight_id, name, age, gender, nationality, seat_type, seat_number, parentID1, parentID2, email, budget) VALUES (passenger_id, flight_id, name, age, gender, nationality, seat_type, seat_number, parentID1, parentID2, email, budget)';

        connection.query(query, (err, results) => {
            if (err) throw err;

            // Verileri konsola yazdırma
            console.log(results);
        });

        connection.end();

    }

    else if (mode == "kayra") {
        var plane_id =
            faker.random.alpha({ count: 2 }).toUpperCase() +
            faker.random.number({ min: 1000, max: 9999 });

        var type = ["Boeing 767", "Boeing 777", "Airbus A380", "Airbus A350"].at(
            faker.random.number({ min: 0, max: 3 })
        );

        var CrewLimit;
        var PassengerLimit;

        var level;

        if (type == "Boeing 767") {
            crewCapacity = 5;
            passengerCapacity = 50;
            level = 1;
        } else if (type == "Boeing 777") {
            crewCapacity = 10;
            passengerCapacity = 100;
            level = 2;
        } else if (type == "Airbus A380") {
            crewCapacity = 15;
            passengerCapacity = 150;
            level = 3;
        } else if (type == "Airbus A350") {
            crewCapacity = 20;
            passengerCapacity = 200;
            level = 4;
        }
        var seatCapacity = crewCapacity + passengerCapacity;

        // console.log(plane_id);
        // console.log(type);
        // console.log(level);
        // console.log(crewCapacity);
        // console.log(passengerCapacity);
        // console.log(seatCapacity);

        if (bool_query) {

            const connection = mysql.createConnection({
                host: 'aws-cs308.c5gk4os06v5f.eu-north-1.rds.amazonaws.com',
                user: 'admin',
                password: 'cs308project',
                database: 'CS308_MAIN_SQL_DATABASE'
            });

            connection.connect();


            const query = "INSERT INTO Planes (plane_id, type, level, passengerCapacity, crewCapacity, seatCapacity) VALUES (?, ?, ?, ?, ?, ?)";
            // // const query = "SELECT * FROM Planes";
            // const query = "DELETE FROM Planes;";

            // Execute the query with parameters
            connection.query(query, [plane_id, type, level, passengerCapacity, crewCapacity, seatCapacity], (error, results, fields) => {
                if (error) {
                    console.error('Error executing query:', error);
                    return;
                }
                console.log('Rows affected:', results.affectedRows);
            });

            // connection.query(query, (error, results, fields) => {
            //     if (error) {
            //         console.error('Error executing query:', error);
            //         return;
            //     }
            //     console.log('Rows affected:', results.affectedRows);
            // });


            connection.end();

        }


    }










/*
const faker = require("faker");

//Datas for Plane class
var PlaneID =
  faker.random.alpha({ count: 2 }).toUpperCase() +
  faker.random.number({ min: 1000, max: 9999 });

var PlaneType = ["Boeing 767", "Boeing 777", "Airbus A380", "Airbus A350"].at(
  faker.random.number({ min: 0, max: 3 })
);

var CrewLimit;
var PassengerLimit;

var seniorityRestiriction;

if (PlaneType == "Boeing 767") {
  CrewLimit = 5;
  PassengerLimit = 50;
  seniorityRestiriction = 1;
} else if (PlaneType == "Boeing 777") {
  CrewLimit = 10;
  PassengerLimit = 100;
  seniorityRestiriction = 2;
} else if (PlaneType == "Airbus A380") {
  CrewLimit = 15;
  PassengerLimit = 150;
  seniorityRestiriction = 3;
} else if (PlaneType == "Airbus A350") {
  CrewLimit = 20;
  PassengerLimit = 200;
  seniorityRestiriction = 4;
}
var SeatCapacity = CrewLimit + PassengerLimit;

console.log(PlaneID);
console.log(PlaneType);
console.log(CrewLimit);
console.log(PassengerLimit);
console.log(SeatCapacity);
console.log(seniorityRestiriction);

//Data generation for SeatInfoTuple Class

var PassengerID = "SK" + faker.random.number({ min: 1000, max: 9999 });
var SeatID =
  faker.random.number({ min: 1, max: SeatCapacity / 6 + 1 }) +
  ["A", "B", "C", "D", "E", "F"].at(faker.random.number({ min: 0, max: 5 }));

var FlightID =
  faker.random.alpha({ count: 2 }).toUpperCase() +
  faker.random.number({ min: 1000, max: 9999 });

console.log(PassengerID);
console.log(SeatID);
console.log(FlightID);

/*
PlaneID CHAR(6) NOT NULL,   AA1111
planeType CHAR(20) NOT NULL, 
CrewLimit INTEGER NOT NULL,
PassengerLimit INTEGER NOT NULL,
SeatCapacity INTEGER NOT NULL,
seniorityRestiriction INTEGER NOT NULL, // 1-2-3-4 gibi tek haneli bir sayı olacak

PRIMARY KEY(PlaneID)

*/

/*

CREATE TABLE seatInfoTuple{
    PassengerID CHAR(8) NOT NULL,  SK1111
    SeatID CHAR(3) NOT NULL,    01A
    FlightID CHAR(6) NOT NULL,   AA1111

    PRIMARY KEY(PassengerID,SeatID,FlightID)
    FOREIGN KEY PassengerID REFERENCES passengers(id)
    FOREIGN KEY FlightID  REFERENCES Flights(id)
    

}


*/



