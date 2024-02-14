class Airport {
    /**
    * The Airport class manages the capacity of the airport and is responsible of adding planes 
    * and taking off planes from the airport.
    */
    #capacity;
    #planes;
    constructor(capacity)
    {
        this.#capacity = capacity; 
        this.#planes = [];
    }

    /**
    * Returns the capacity of the airport
    * @returns capacity
    */
    getCapacity()
    {
        return this.#capacity;
    }

    /**
    * Returns the number of planes in the airport
    * @returns #planes.length
    */
    getNumberOfPlanes()
    {
        return this.#planes.length;
    }

    /**
     * Adds the plane into the planes array when the airport is not full
     * @param plane Refers to a plane object
     */

    addPlane(plane)
    {
        if(this.#capacity > this.#planes.length)
        {
            this.#planes.push(plane);
            return true;
        }
        else {
              return false;
        }
    }

    /**
    * Removes the plane from the array when the location of the plane is unknown
    * when the plane is not at the airport, the location becomes unknown.
    * @plane Refers to a plane object
    */
    removePlane(plane)
    {
        if(plane.location == "Unknown")
        {
             this.#planes.pop(plane);
             return true;
        }
        else {
            return false;
        }

    }
    
    /**
    * Returns true when the plane is at the airport else it returns false.
    * @param plane Refers to a plane object
    */
    isPlaneAtAirport(plane)
    {
        for(let i=0; i<this.#planes.length; i++)
        {
            if(this.#planes[i].location == "Airport")
            {
                return true;
            }
            else {
                return false;
            }  
        }
    }

  
}
export default Airport;