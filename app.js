// install packages
const fs = require('fs');
const axios = require('axios');
const inquirer = require('inquirer');
//const jest = require('jest');


// prompt for employee info
function promptUser () {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            type: "checkbox",
            name: "role",
            message: "What is your role in the company?",
            choices: [
                "manager",
                "engineer",
                "intern"
            ]
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
        }
    ])
}
// call prompt user for function with axios promise
promptUser().then(function({name,role,id,email,github}) {

    axios.get(queryUrl).then(function(res) {

    // create html
    let html = generateHTML();
    writeToFile(html);

    function writeToFile(data) {
        fs.writeFile('team.html', data, function(err) {
            if (err) {
                return console.log(err);
            }
            console.log("success!");
        });
    }

    });

});