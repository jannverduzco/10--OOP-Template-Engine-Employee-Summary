// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

// Defining manager class which extends employee class with its properties and methods
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getofficeNumber() {
        return this.officeNumber
    }
    getRole() {
        return "Manager";
    }
}
// exporting/ making class Manager class available
module.exports = Manager;
