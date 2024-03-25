class Plane {
  constructor(
    planeID,
    planeType,
    crewLimit,
    passengerLimit,
    seatCapacity,
    seniorityRestriction
  ) {
    this.planeID = planeID;
    this.planeType = planeType;
    this.crewLimit = crewLimit;
    this.passengerLimit = passengerLimit;
    this.seatCapacity = seatCapacity;
    this.seniorityRestriction = seniorityRestriction;
  }

  displayInfo() {
    console.log(`Plane ID: ${this.planeID}`);
    console.log(`Plane Type: ${this.planeType}`);
    console.log(`Passenger Limit: ${this.passengerLimit}`);
    console.log(`Crew Limit: ${this.crewLimit}`);
    console.log(`seatCapacity: ${this.seatCapacity}`);
    console.log(`Plane Seniority Level: ${this.seniorityRestriction}`);
  }
}

module.export = Plane;

/*
CREATE TABLE Plane{
  PlaneID CHAR(6) NOT NULL,
  planeType CHAR(20) NOT NULL,
  CrewLimit INTEGER NOT NULL,
  PassengerLimit INTEGER NOT NULL,
  SeatCapacity INTEGER NOT NULL,
  seniorityRestiriction INTEGER NOT NULL, // 1-2-3-4 gibi tek haneli bir sayı olacak

  PRIMARY KEY(PlaneID)
}


*/
