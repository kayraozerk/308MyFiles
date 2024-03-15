const faker = require("faker");

//Datas for Plane class
var PlaneID =
  faker.random.alpha({ count: 2 }).toUpperCase() +
  faker.random.number({ min: 1000, max: 9999 });

console.log(PlaneID);

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

CREATE TABLE SeatPlan{
    PassengerID CHAR(8) NOT NULL,  SK1111
    SeatID CHAR(3) NOT NULL,    01A
    FlightID CHAR(6) NOT NULL,   AA1111

    PRIMARY KEY(PassengerID,SeatID,FlightID)
    FOREIGN KEY PassengerID REFERENCES passengers(id)
    FOREIGN KEY FlightID  REFERENCES Flights(id)
    

}


*/
