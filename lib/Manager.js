const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '') {
        super(name);

        this.officeNumber = officeNumber;
    }

    getRole() {

    }
};

module.exports = Manager;