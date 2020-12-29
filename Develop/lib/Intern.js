// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

// Defining Intern class which extends employee class with its properties and methods
class Intern extends Employee {
    constructor(school) {
        this.school = school;
    }

    getSchool() {
        return school;
    }    
    getRole() {
        return "Intern";
    }
}
