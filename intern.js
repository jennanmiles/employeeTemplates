const Employee = require("./employee");

class Intern extends Employee {
    constructor(name,id,title, school) {    
        this.school = school;
    }
    getSchool(){};
    getRole(){};
}