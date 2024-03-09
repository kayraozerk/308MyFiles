class SeatPlan {
  constructor(passengerID, seatID, flightID) {
    this.passengerID = passengerID;
    this.seatID = seatID;
    this.flightID = flightID;
  }

  displayInfo() {
    console.log(`Passenger ID: ${this.passengerID}`);
    console.log(`Seat ID: ${this.seatID}`);
    console.log(`Flight ID: ${this.flightID}`);
  }
}

module.exports = { SeatPlan, displayInfo };

/*

CREATE TABLE SeatPlan{
    PassengerID CHAR(8) NOT NULL,
    SeatID CHAR(3) NOT NULL,
    FlightID CHAR(6) NOT NULL,

    PRIMARY KEY(PassengerID,SeatID,FlightID)
    FOREIGN KEY PassengerID REFERENCES passengers(id)
    FOREIGN KEY FlightID  REFERENCES Flights(id)
    

}


*/
