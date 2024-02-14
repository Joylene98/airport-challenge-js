class AirTrafficController {

    /**
    The Air Traffic Controller class defines the set of instructions that an air traffic 
    controller can give such as land plane and take off
    */
    instruction;

    // Sets the instruction
    constructor(instruction)
    {
        this.instruction = instruction;
    }

    /**
    * Checks the location of the plane and gives instruction for a plane to land  
      when the plane is not currently at the airport.
    * @param plane The plane object
    */
    landPlane(plane)
    {
        if(plane.location == "Unknown")
        {
            this.instruction = "This plane can land";
            plane.location = "Airport";
            return this.instruction;
        }
        else {
            this.instruction = "This plane cannot land";
            plane.location = "Unknown";
            return this.instruction;
        }
    }

    /**
    * Checks the location of the plane and gives instruction for a plane to take off  
      when the plane is currently at the airport.   
    * @param plane The plane object
    */
    takeOff(plane)
    {
        if(plane.location == "Airport")
        {
            this.instruction = "This plane can take off";
            plane.location = "Unknown";
            return this.instruction;
        }

        else {
                this.instruction = "This plane cannot take off";
                plane.location = "Airport";
                return this.instruction;
        }
       
    }



}
export default AirTrafficController;