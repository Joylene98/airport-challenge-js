// The index class runs the program by using npm start.
// These import statements is used to import the Airport class, AirTrafficController class and the Plane class
import Airport from "../src/airport.js";
import AirTrafficController from "../src/airtrafficcontroller.js";
import Plane from "../src/plane.js";

class Index {

    // The run program method runs the program for the airport which demonstrates
    // the plane being able to land and take off only with the instructions of the air traffic controller.
    runProgram()
    {
        let airport = new Airport(5);
        console.log("An airport with a capacity of " + airport.getCapacity());
        let plane = new Plane(4563, "Unknown");
        console.log("Plane number " + plane.getPlaneNumber() + " wants to land");
        console.log("Plane number " + plane.getPlaneNumber() + " is awaiting instructions");
        let airtrafficcontroller = new AirTrafficController("no instruction");
        console.log("Air Traffic Controller has " + airtrafficcontroller.instruction);
        airport.addPlane(plane);
        console.log("Air Traffic Controller gets confirmation that airport is not full");
        console.log("Air Traffic Controller gives instruction of: " + airtrafficcontroller.landPlane(plane));
        console.log("Plane number " + plane.getPlaneNumber() + " lands at airport");
        console.log("Plane number " + plane.getPlaneNumber() + " is currently at the " + plane.getLocation());
        console.log("The number of plane(s) in the airport is " + airport.getNumberOfPlanes());

        console.log("\n");

        let plane2 = new Plane(3433, "Unknown");
        console.log("Plane number " + plane2.getPlaneNumber() + " wants to land");
        console.log("Plane number " + plane2.getPlaneNumber() + " is awaiting instructions");
        airtrafficcontroller.instruction = "no instructions";
        console.log("Air Traffic Controller has " + airtrafficcontroller.instruction); 
        airport.addPlane(plane2);
        console.log("Air Traffic Controller gets confirmation that airport is not full");
        console.log("Air Traffic Controller is awaiting confirmation on the location of the plane");
        console.log("Air Traffic Controller gets confirmation that the location of the plane is " + plane2.getLocation());
        console.log("Air Traffic Controller gives instruction of: " + airtrafficcontroller.landPlane(plane2));
        console.log("Plane number " + plane2.getPlaneNumber() + " lands at airport");
        console.log("Plane number " + plane2.getPlaneNumber() + " is currently " + plane2.getLocation());
        console.log("The number of plane(s) in the airport is " + airport.getNumberOfPlanes());

        console.log ("\n");
        console.log("Plane number " + plane2.getPlaneNumber() + " wants to take off");
        console.log("Plane number " + plane2.getPlaneNumber() + " is awaiting instructions");
        airtrafficcontroller.instruction = "no instructions";
        console.log("Air Traffic Controller is awaiting confirmation that plane number " + plane2.getPlaneNumber() + " is at the airport");
        console.log("Air Traffic Controller gets confirmation that plane number " + plane2.getPlaneNumber() + " is at the " + plane2.getLocation());
        console.log("Air Traffic Controller gives instruction of: " + airtrafficcontroller.takeOff(plane2));
        console.log("Plane number " + plane2.getPlaneNumber() + " has taken off from the airport");
        airport.removePlane(plane2);
        console.log("The number of plane(s) in the airport is " + airport.getNumberOfPlanes());


    }
}

let i = new Index();
i.runProgram();