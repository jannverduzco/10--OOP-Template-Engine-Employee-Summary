const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// array that holds all team members added
const teamMembers = [];

////// Write code to use inquirer to gather information about the development team members,
////// and to create objects for each team member (using the correct classes as blueprints!)
// function that prompts user questions pertaining to engineer employee being added
function createEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "EngineerName",
            message: "What is the Engineer's name?",
        },
        {
            type: "input",
            name: "EngineerId",
            message: "What is the Engineer's ID?",
        },
        {
            type: "input",
            name: "EngineerEmail",
            message: "What is the Engineer's email?",
        },
        {
            type: "input",
            name: "EngineerOfficeNum",
            message: "What is the Engineer's office number?",
        }
    ]).then(answers => {
        const engineer = new engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerOfficeNum);
        // pushes engineer const (with all save infomation about engineer) to teamMembers array
        teamMembers.push(engineer);
        //calling what to do next function
        whatToDoNext();
    });
};

// function that prompts user questions pertaining to manager employee being added
function createManager () {
    inquirer.prompt([
        {
            type:"input",
            name: "managerName",
            message: "What is the manager's name?",
        },
        {
            type:"input",
            name: "managerId",
            message: "What is the manager's ID?",
        },
        {
            type:"input",
            name: "managerEmail",
            message: "What is the manager's email?",
        },
        {
            type:"input",
            name: "managerOfficeNum",
            message: "What is the manager's office number?",
        }
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNum);
        // pushes manager const (with all save infomation about manager) to teamMembers array
        teamMembers.push(manager);
    //calling what to do next function
        whatToDoNext();
    });
};


// what to do next
// what employye to add next (intern, engineer)
// type list
// name 
// message
// choice (intern, engineer, none)
// answer, (do if or switch)
// if answer is engineer  call engineer
// if it is none call built team function





////// After the user has input all employees desired, call the `render` function (required
//////above) and pass in an array containing all employee objects; the `render` function will
//////generate and return a block of HTML including templated divs for each employee!

//////After you have your html, you're now ready to create an HTML file using the HTML
//////returned from the `render` function. Now write it to a file named `team.html` in the
//////`output` folder. You can use the variable `outputPath` above target this location.
//////Hint: you may need to check if the `output` folder exists and create it if it
//////does not.

//////HINT: each employee type (manager, engineer, or intern) has slightly different
//////information; write your code to ask different questions via inquirer depending on
//////employee type.

//////HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
//////and Intern classes should all extend from a class named Employee; see the directions
//////for further information. Be sure to test out each class and verify it generates an
//////object with the correct structure and methods. This structure will be crucial in order
//////for the provided `render` function to work! ```




createManager();
// this will go in the funtion (once all employees are called)
// fs.writeFile(outputPath, render(teamMembers));