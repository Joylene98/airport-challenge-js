# Domain Models and Test Plan

User Story 1: As an air traffic controller, I want to instruct a plane to land when the airport is not full so that I can ensure that the space of the airport is being used.

Domain Model for User Story 1

| Objects              | Properties                 | Messages              | Outputs    |
| -------------------- | -------------------------- | ----------------------| ---------- |
| AirTrafficController | instruction @String        | landPlane(@Plane)     |  @String   |
| Airport              | capacity @Int              | getCapacity()         |  @Int      |
|                      | planes @Array[@Plane]      | addPlane(@Plane)      |  @Int      |
| Plane                | plane_number @Int          | getPlaneNumber()      |  @Int      |  
                                                 

User Story 2: As an air traffic controller, I want to instruct a plane to land when it is not currently at the airport so that the plane can land at the airport.

Domain Model for User Story 2

| Objects              | Properties                 | Messages                | Outputs    |
| -------------------- | -------------------------- | ------------------------| ---------- |
| AirTrafficController | instruction @String        | landPlane(@Plane)       |  @String   |
| Airport              | planes @Array[@Plane]      | isPlaneAtAirport(@Plane)|  @Boolean  |
| Plane                | location @String           | getLocation()           |  @String   |
|                      | plane_number @Int          | getPlaneNumber()        |  @Int      |


User Story 3: As an air traffic controller, I want to instruct a plane to take off when it is currently at the airport so that the plane can head to its destination.

Domain Model for User Story 3

| Objects              | Properties                 | Messages                | Outputs    |
| -------------------- | -------------------------- | ------------------------| ---------- |
| AirTrafficController | instruction @String        | takeOff(@Plane)         |  @String   |
| Airport              | planes @Array[@Plane]      | isPlaneAtAirport(@Plane)|  @Boolean  | 
| Plane                | location @String           | getLocation(@Plane)     |  @String   |
|                      | plane_number @Int          | getPlaneNumber()        |  @Int      |         

**Test Plan for User Story 1**

- Test 1 - Test that an air traffic controller can instruct a plane to land when airport is not full.
- Test 2 - Test that an air traffic controller can instruct a plane not to land when airport is full.
- Test 3 - Test that an air traffic controller can instruct a plane not to land when airport capacity is 0.
- Test 4 - Test that the size of Planes array increases by 1 when a plane is instructed to land at the airport.

**Test Plan for User Story 2**

- Test 1 - Test that an air traffic controller can instruct a plane to land when it is not currently at airport.
- Test 2 - Test that an air traffic controller can instruct a plane not to land when it is at the airport.
- Test 3 - Test that the method isPlaneAtAirport returns false when plane is not at the airport.
- Test 4 - Test that the getLocation method returns the location of a plane.
- Test 5 - Test that the method isPlaneAtAirport returns true when plane is at the airport.

**Test Plan for User Story 3**

- Test 1 - Test that an air traffic controller can instruct a plane to take off when the plane is currently at the airport.
- Test 2 - Test that an air traffic controller can instruct a plane not to take off when the plane is not currently at the airport. 
- Test 3 - Test that the number of planes in the airport decreases by 1 when a plane is instructed to take off.

**Trello Board**

**Screenshot of user stories created from the client's requirements**

![backlog-screenshot](https://github.com/digital-futures-academy-se-challenges/challenge-1-airport-Joylene98/assets/58665450/f7f3a2ae-36f2-49cd-ad5b-798423058556)

I placed the user story cards in order because it helped me to know which requirements I needed to implement first. The user story cards are useful because it gave me a constant reminder on the client requirements.


**Screenshot of to do list**

![todolist-screenshot](https://github.com/digital-futures-academy-se-challenges/challenge-1-airport-Joylene98/assets/58665450/f96f5c0b-98cc-4380-8131-70dbf844f891)

The screenshot shows the list of user stories that are ready for testing. It also includes the deadline dates for each user story and when it should be completed by. By doing this, this helped me to ensure I completed the task before the due date.


**Screenshot of test cases for user story 1**

![testcases-screenshot](https://github.com/digital-futures-academy-se-challenges/challenge-1-airport-Joylene98/assets/58665450/be3d9ac4-6cac-4ec5-90aa-51a9293175f6)

Under the test cases checklist, it represents the test cases for user story 1. I created functional test cases because I wanted to ensure that the tests are working and also meets the requirements of the software. Once I passed each of the test case, I ticked the checklist relating to the test case to indicate that the test has passed. This helped me to know which test cases I passed and allowed me to avoid writing duplicate tests.

**Screenshot of code review:**

![code-review-screenshot1](https://github.com/digital-futures-academy-se-challenges/challenge-1-airport-Joylene98/assets/58665450/da03ec58-7f11-4044-b7da-4c59033819c6)

I conducted the code review by checking to make sure that each test fulfilled the requirement. Also, making sure the code reflects on the user story and I removed any code that was not related to the user story.


**Screenshot of testing**

![testing-screenshot](https://github.com/digital-futures-academy-se-challenges/challenge-1-airport-Joylene98/assets/58665450/bb363178-eb8e-43b8-bdbb-a92793916dc6)

This screenshot shows the user story I was currently working on. Also, it shows that I am at the testing stage. Once I finished passing all the tests and checked the done checklist then I moved the user story on the done section.

**Screenshot of done section**

![done-screenshot](https://github.com/digital-futures-academy-se-challenges/challenge-1-airport-Joylene98/assets/58665450/d8727421-8d2f-477c-8cca-fcfd0c2d73f3)

This screenshot shows all the user stories that are completed. For each user story, I went through the done checklist that are within the cards to ensure that I have completed all the task relating to the user story before it gets moved to the done section. It also shows that I have completed all the tasks relating to the user story before the deadline. 

This is the link to the Trello Board: https://trello.com/b/vnGnvcmq/airport-software-board

