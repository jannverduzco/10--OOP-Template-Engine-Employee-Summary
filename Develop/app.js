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
            type: 'input',
            name: 'EngineerName',
            message: "Please provide the Engineer's name.",
        },
        {
            type: 'input',
            name: 'EngineerId',
            message: "Please provide the Engineer's ID.",
        },
        {
            type: 'input',
            name: 'EngineerEmail',
            message: "Please provide the Engineer's email.?",
        },
        {
            type: 'input',
            name: 'EngineerOfficeNum',
            message: "Please provide the Engineer's GitHub username.",
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerOfficeNum);
        // pushes engineer const (with all save infomation about engineer) to teamMembers array
        teamMembers.push(engineer);
        //calling what to do next function
        addNext();
    })
};

// function that prompts user questions pertaining to intern employee being added
function createIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "Please provide the intern's name.",
        },
        {
            type: 'input',
            name: 'internId',
            message: "Please provide the intern's ID.",
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "Please provide the intern's email.",
        },
        {
            type: 'input',
            name: 'internOfficeNum',
            message: "Please provide the intern's current school name.",
        }
    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internOfficeNum);
        // pushes intern const (with all save infomation about intern) to teamMembers array
        teamMembers.push(intern);
        //calling what to do next function
        addNext();
    })
};

// function that prompts user questions pertaining to manager employee being added
function createManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "Please provide the manager's name.",
        },
        {
            type: 'input',
            name: 'managerId',
            message: "Please provide the manager's ID.",
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "Please provide the manager's email.",
        },
        {
            type: 'input',
            name: 'managerOfficeNum',
            message: "Please provide the manager's office number.",
        }
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNum);
        // pushes manager const (with all save infomation about manager) to teamMembers array
        teamMembers.push(manager);
        //calling what to do next function
        addNext();
    })
};

// what to do next is a function that gives the user the option to add an engineer, intern or none next
function addNext() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'addNext',
            choices: ['Engineer', 'Intern', 'None'],
            message: "Plese select which employee you would like to add next. (If you are done adding employee's, please select 'None')"
        }
    ]).then(answers => {
        if (answers.addNext === "Engineer") {
            createEngineer();
        }
        else if (answers.addNext === "Intern") {
            createIntern();
        }
        else
            try {
                buildTeam();
            } catch (error) {
                console.log(error);
            }
    })
};

// function to render html and build team
function buildTeam() {
    fs.writeFileSync(outputPath, render(teamMembers), "utf8");
}

createManager();
