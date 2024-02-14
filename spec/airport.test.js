  import { assertEquals } from "./testing-framework/test-framework.js";
  import Airport from "../src/airport.js";
  import AirTrafficController from "../src/airtrafficcontroller.js";
  import Plane from "../src/plane.js";

  //The Airport test file runs all the test for the airport and imports all the classes needed to run the tests.

  // Tests for User Story 1: 
  //Test 1 - Test that an air traffic controller can instruct a plane to land when the airport is not full

  // Arrange  
  let airport = new Airport(1);
  let plane = new Plane(1242, "Unknown");
  let airtrafficcontroller = new AirTrafficController();
  let expectedOutput, actualOutput, testResult;
  expectedOutput = "This plane can land";
  // Act
  airport.addPlane(plane);
  actualOutput = airtrafficcontroller.landPlane(plane);

  // Assert 
  testResult = assertEquals(expectedOutput, actualOutput);
  console.log("Tests for User Story 1");
  console.log("Test 1 - Test that an air traffic controller can instruct a plane to land when airport is not full");
  console.log(`Test 1 result - Passes: ${testResult}; Actual output: ${actualOutput}; Expected output: ${expectedOutput} \n`);

  //Test 2 - Test that an air traffic controller can instruct a plane not to land when airport is full.

  // Arrange
  airport = new Airport(2);
  plane = new Plane(1242);
  let plane1 = new Plane(1564);
  let plane2 = new Plane(2567);

  airtrafficcontroller = new AirTrafficController();
  expectedOutput, actualOutput, testResult;
  expectedOutput = "This plane cannot land";;

  // Act
  airport.addPlane(plane);
  airport.addPlane(plane1);
  airport.addPlane(plane2);
  
  airport.addPlane(plane);
  actualOutput = airtrafficcontroller.landPlane(plane);

  // Assert 
  testResult = assertEquals(expectedOutput, actualOutput);
  console.log("Test 2 - Test that an air traffic controller can instruct a plane not to land when airport is full");
  console.log(`Test 2 result - Passes: ${testResult}; Actual output: ${actualOutput}; Expected output: ${expectedOutput} \n`);


// Test 3 - Test that the size of Planes array increases by 1 when a plane is instructed to land at the airport

  // Arrange
  airport = new Airport(10);
  plane = new Plane(1242);
  expectedOutput, actualOutput, testResult;
  expectedOutput = 1;

  // Act 
  airport.addPlane(plane);
  actualOutput = airport.getNumberOfPlanes();

  // Assert
  testResult = assertEquals(expectedOutput, actualOutput);
  console.log("Test 3 - Test that the size of Planes array increases by 1 when a plane is instructed to land at the airport");
  console.log(`Test 3 result - Passes: ${testResult}; Actual output: ${actualOutput}; Expected output: ${expectedOutput} \n`);

  // Test 4 - Test that an air traffic controller can instruct a plane not to land when airport capacity is 0.
  
  // Arrange
  airport = new Airport(0);
  plane = new Plane(1362);
  airtrafficcontroller = new AirTrafficController();
  expectedOutput, actualOutput, testResult;
  expectedOutput = "This plane cannot land";

  // Act 
  airport.addPlane(plane);
  actualOutput = airtrafficcontroller.landPlane(plane);
  // Assert 
  testResult = assertEquals(expectedOutput, actualOutput);
  console.log("Test 4 - Test that an air traffic controller can instruct a plane not to land when airport capacity is 0");
  console.log(`Test 4 result - Passes: ${testResult}; Actual output: ${actualOutput}; Expected output: ${expectedOutput} \n`);


  // Tests for User Story 2: 
  // Test 1 - Test that an air traffic controller can instruct a plane to land when it is not currently at airport

  // Arrange
  airport = new Airport(10);
  plane = new Plane(4483, "Unknown");
  airtrafficcontroller = new AirTrafficController();
  expectedOutput, actualOutput, testResult;
  expectedOutput = "This plane can land";

  // Act
  airport.addPlane(plane);
  airport.isPlaneAtAirport(plane);
  actualOutput = airtrafficcontroller.landPlane(plane);

  // Assert
  testResult = assertEquals(expectedOutput, actualOutput);
  console.log("Tests for User Story 2");
  console.log("Test 1 - Test that an air traffic controller can instruct a plane to land when it is not currently at airport");
  console.log(`Test 1 result - Passes: ${testResult}; Actual output: ${actualOutput}; Expected output: ${expectedOutput} \n`);


  // Test 2 - Test that an air traffic controller can instruct a plane not to land when it is at the airport

  // Arrange
  airport = new Airport(10);
  plane = new Plane(4498, "Airport");
  airtrafficcontroller = new AirTrafficController();
  expectedOutput, actualOutput, testResult;
  expectedOutput = "This plane cannot land";

  // Act 
  airport.addPlane(plane);
  airport.isPlaneAtAirport(plane);
  actualOutput = airtrafficcontroller.landPlane(plane);

  // Assert 
  testResult = assertEquals(expectedOutput, actualOutput);
  console.log("Test 2 - Test that an air traffic controller can instruct a plane not to land when it is at the airport");
  console.log(`Test 2 result - Passes: ${testResult}; Actual output: ${actualOutput}; Expected output: ${expectedOutput} \n`);


  // Test 3 - Test that the method isPlaneAtAirport returns false when plane is not at the airport

  // Arrange
    
  airport = new Airport(5);
  plane = new Plane(4498, "Unknown");
  airtrafficcontroller = new AirTrafficController();
  expectedOutput, actualOutput, testResult;
  expectedOutput = false;
    
  // Act 
  airport.addPlane(plane);
  actualOutput = airport.isPlaneAtAirport();

  // Assert 
  testResult = assertEquals(expectedOutput, actualOutput);
  console.log("Test 3 - Test that the method isPlaneAtAirport returns false when plane is not at the airport");
  console.log(`Test 3 result - Passes: ${testResult}; Actual output: ${actualOutput}; Expected output: ${expectedOutput} \n`);
    
    
  // Test 4 - Test that the getLocation method returns the location of a plane.

  // Arrange
  plane = new Plane(9832,"Unknown");
  expectedOutput, actualOutput, testResult;
  expectedOutput = "Unknown";

  // Act
  actualOutput = plane.getLocation();
      
  // Assert 
  testResult = assertEquals(expectedOutput, actualOutput);
  console.log("Test 4 - Test that the getLocation method returns the location of a plane")
  console.log(`Test 4 result - Passes: ${testResult}; Actual output: ${actualOutput}; Expected output: ${expectedOutput} \n`); 
    
  // Test 5 - Test that the method isPlaneAtAirport returns true when plane is at the airport

  // Arrange
    
  airport = new Airport(5);
  plane = new Plane(4498, "Airport");
  airtrafficcontroller = new AirTrafficController();
  expectedOutput, actualOutput, testResult;
  expectedOutput = true;
    
  // Act 
  airport.addPlane(plane);
  actualOutput = airport.isPlaneAtAirport();

  // Assert 
  testResult = assertEquals(expectedOutput, actualOutput);
  console.log("Test 5 - Test that the method isPlaneAtAirport returns true when plane is at the airport");
  console.log(`Test 5 result - Passes: ${testResult}; actual output: ${actualOutput}; expected output: ${expectedOutput} \n`);


  // Tests for User Story 3:
  // Test 1 - Test that an air traffic controller can instruct a plane to take off when the plane is currently at the airport.
  // Arrange
  airport = new Airport(1);
  plane = new Plane(3020, "Airport");
  airtrafficcontroller = new AirTrafficController("Unknown");
  expectedOutput, actualOutput, testResult;
  expectedOutput = "This plane can take off";

  // Act 
  airport.addPlane(plane);  

  actualOutput = airtrafficcontroller.takeOff(plane); 

  // Assert 
  testResult = assertEquals(expectedOutput, actualOutput);
  console.log("Tests for User Story 3");
  console.log("Test 1 - Test that an air traffic controller can instruct a plane to take off when the plane is currently at the airport")
  console.log(`Test 1 result - Passes: ${testResult}; Actual output: ${actualOutput}; Expected output: ${expectedOutput} \n`);



  // Test 2 - Test that an air traffic controller can instruct a plane not to take off when the plane is not currently at the airport. 
    
  // Arrange
  airport = new Airport(1);
  plane = new Plane(3555, "Unknown");
  airtrafficcontroller = new AirTrafficController("Unknown");
  expectedOutput, actualOutput, testResult;
  expectedOutput = "This plane cannot take off";

  // Act
  airport.addPlane(plane);  
  actualOutput = airtrafficcontroller.takeOff(plane); 

  // Assert 
  testResult = assertEquals(expectedOutput, actualOutput);
  console.log("Test 2 - Test that an air traffic controller can instruct a plane not to take off when the plane is not currently at the airport");
  console.log(`Test 2 result - Passes: ${testResult}; Actual output: ${actualOutput}; Expected output: ${expectedOutput} \n`);



  // Test 3 - Test that the number of planes in the airport decreases by 1 when a plane is instructed to take off.
    
  // Arrange
  airport = new Airport(1);
  plane = new Plane(3555, "Airport");
  airtrafficcontroller = new AirTrafficController("Unknown");
  expectedOutput, actualOutput, testResult;
  expectedOutput = true;

  // Act
  airport.addPlane(plane); 
  airtrafficcontroller.takeOff(plane); 
  actualOutput = airport.removePlane(plane);

  // Assert 
  testResult = assertEquals(expectedOutput, actualOutput);
  console.log("Test 3 - Test that the number of planes in the airport decreases by 1 when a plane is instructed to take off.")
  console.log(`Test 3 result - Passes: ${testResult}; actual output: ${actualOutput}; expected output: ${expectedOutput} \n`);


