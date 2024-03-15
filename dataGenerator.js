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

var seniorityRestiriction = [1, 2, 3, 4].at(
  faker.random.number({ min: 0, max: 3 })
);

if (PlaneType == "Boeing 767") {
  CrewLimit = 5;
  PassengerLimit = 50;
} else if (PlaneType == "Boeing 777") {
  CrewLimit = 10;
  PassengerLimit = 100;
} else if (PlaneType == "Airbus A380") {
  CrewLimit = 15;
  PassengerLimit = 150;
} else if (PlaneType == "Airbus A350") {
  CrewLimit = 20;
  PassengerLimit = 200;
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
