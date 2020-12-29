// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

// Defining engineer class which extends employee class with its properties and methods
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return github;
    }
    getRole() {
        return "Engineer";
    }
}
module.exports = Engineer;