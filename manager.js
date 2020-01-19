const Employee = require("./employee");

class Manager extends Employee {
    constructor(name,id,title, officeNumber){
        this.officeNumber = officeNumber;
    }
    getRole(){};
}