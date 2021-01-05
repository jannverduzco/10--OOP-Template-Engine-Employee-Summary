// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

// Defining Intern class which extends employee class with its properties and methods
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }    
    getRole() {
        return "Intern";
    }
}
// exporting/ making class Intern class available
module.exports = Intern;