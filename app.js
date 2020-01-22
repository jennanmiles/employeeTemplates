// install packages
const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./templates/generateHTML.js');

// pull in constuctor functions
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

// templates
const managerCard = require('./templates/manager');
const internCard = require('./templates/intern');
const engineerCard = require('./templates/engineer');

// test package
const jest = require('jest');
// empty arrays
let answers = {
    managers: [],
    engineers: [],
    interns: []
}

// prompt for employee info
function promptUser() {
    return inquirer.prompt([
        {
            type: "checkbox",
            name: "role",
            message: "What is your role in the company?",
            choices: [
                "manager",
                "engineer",
                "intern"
            ]
        }
    ]).then(function (data) {
        console.log(data);
        // allow multiple entries
        if (data.role == 'engineer') {
            returnEngineer();
        } else if (data.role == 'intern') {
            returnIntern();
        } else if (data.role == 'manager') {
            returnManager();
        }
    });
}

// questions for manager
function returnManager() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your id?"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email"
        },
        {
            type: "input",
            name: "officenum",
            message: "What is your office number?"
        },
        {
            type: "list",
            name: "continue",
            message: "Would you like to enter another employee?",
            choices: [
                "yes",
                "no"
            ]
        }
    ]).then(data => {
        // declare new constructor function
        let managerEntry = new Manager(data.name,data.id,data.email,data.officeNumber);
        // push into array here
        answers.managers.push(data);
        if (data.continue == "yes") {
            promptUser();
        } else {
            generate();
        }
    });
}

// questions for engineer
function returnEngineer() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your id?"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email"
        },
        {
            type: "input",
            name: "github",
            message: "What is your GitHub username?"
        },
        {
            type: "list",
            name: "continue",
            message: "Would you like to enter another employee?",
            choices: [
                "yes",
                "no"
            ]
        }
    ]).then(data => {
        // declare new constructor function
        let newEngineer = new Engineer(data.name,data.id,data.email,data.github);
        // push to empty array
        answers.engineers.push(data);
        if (data.continue == "yes") {
            promptUser();
        } else {
            generate();
        }
    });
}

// questions for student
function returnIntern() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your id?"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email"
        },
        {
            type: "input",
            name: "school",
            message: "What school do you go to?"
        },
        {
            type: "list",
            name: "continue",
            message: "Would you like to enter another employee?",
            choices: [
                "yes",
                "no"
            ]
        }
    ]).then(data => {
        // declare new constructor function
        let newIntern = new Intern(data.name,data.id,data.email,data.school);
        // push to empty array
        answers.interns.push(data);
        if (data.continue == "yes") {
            promptUser();
        } else {
            generate();
        }
    });
}

// populate & generate html 
function generate() {
    let cards = '';
    // loop through data and populate html - foreach
    answers.managers.forEach(data => 
        cards += managerCard(data)
    );
    answers.engineers.forEach( data =>
        cards += engineerCard(data)
    );
    answers.interns.forEach( data =>
        cards += internCard(data)
    );

    //create html
    let html = generateHTML(cards);
    writeToFile(html);

    function writeToFile(html) {
        fs.writeFile('./output/team.html', html, function(err) {
            if (err) {
                return console.log(err);
            }
            console.log("success!");
        });
    }
}


// call prompt user and pass data 
promptUser();
