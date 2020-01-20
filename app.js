// install packages
const fs = require('fs');
const axios = require('axios');
const inquirer = require('inquirer');
const generateHTML = require("./templates/generateHTML.js");
// test package
const jest = require('jest');

let answers = {
    Manager: [],
    Engineer: [],
    Intern: []
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

        // call functions with inquirer
        if (data.role == 'engineer') {
            returnEngineer();
        } else if (data.role == 'intern') {
            returnIntern();
        } else if (data.role == 'manager') {
            returnManger();
        }
    });
}

// questions for manager
function returnManger() {
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
            type: "checkbox",
            name: "continue",
            message: "Would you like to enter another employee?",
            choices: [
                "yes",
                "no"
            ]
        }
    ]).then(data => {
        // declare new constructor function

        // push into array here
        answers.Manager.push(data);
        if (data.continue == "yes") {
            promptUser();
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
            type: "checkbox",
            name: "continue",
            message: "Would you like to enter another employee?",
            choices: [
                "yes",
                "no"
            ]
        }
    ]).then(data => {
        // declare new constructor function

        answers.Engineer.push(data);
        if (data.continue == "yes") {
            promptUser();
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
            type: "checkbox",
            name: "continue",
            message: "Would you like to enter another employee?",
            choices: [
                "yes",
                "no"
            ]
        }
    ]).then(data => {
        // declare new constructor function

        answers.Intern.push(data);
        if (data.continue == "yes") {
            promptUser();
        } else {
            console.log(answers);
        }
    });
}

// call prompt user and pass data 
promptUser();



    //create html
    // let html = generateHTML(data);
    // writeToFile(html);

    // function writeToFile(html) {
    //     fs.writeFile('./output/team.html', html, function(err) {
    //         if (err) {
    //             return console.log(err);
    //         }
    //         console.log("success!");
    //     });
    // }

