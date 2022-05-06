const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '', id, email = '') {
        super(name, id, email);

        this.officeNumber = 1;
    }

    getRole() {
        return 'Manager';
    }
};

module.exports = Manager;