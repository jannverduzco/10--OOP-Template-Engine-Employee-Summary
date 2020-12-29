// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

// Defining manager class which extends employee class with its properties and methods
class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }
    
    getofficeNumber() {
        return this.officeNumber
    }
    getRole() {
        return "Manager";
    }
}
