class Plane {
    /**
    The plane class holds informaton about the plane such as the plane number and 
    the location of the plane.
     */
    plane_number; 
    location;
    /**
    Sets the value of the plane number and location for each plane object
    * @param plane_number This is the plane number of the plane.
    * @param location This is location of the plane.
    */
    constructor(plane_number, location)
    {
        this.plane_number = plane_number;
        this.location = location;
    }

    /**
     * Returns the plane number
     * @returns plane_number
     */
    getPlaneNumber()
    {
        return this.plane_number;
    }

    /**
     * Returns the location of a plane
     * @returns location
     */
    getLocation()
    {
        return this.location;
    }

}
export default Plane;