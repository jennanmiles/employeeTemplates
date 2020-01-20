const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name,id,title,github) {
        this.github = github;
    }
    getGithub(){
        return this.github;
    };
    getRole(){
        return "Engineer";
    };
}