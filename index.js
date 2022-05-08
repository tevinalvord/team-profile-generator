const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');

// Team array
const team = [];

// Manager generation
const addManager = [
    {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name? (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the team manager's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the team manager's employee ID? (Required)",
        validate: idInput => {
            if (!isNaN(idInput)) {
                return true;
            } else {
                console.log("Please enter the team manager's ID!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the team manager's email address? (Required)",
        validate: emailAddress => {
            if (emailAddress) {
                return true;
            } else {
                console.log("Please enter the team manager's email address!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the team manager's office number? (Required)",
        validate: officeNumber => {
            if (!isNaN(officeNumber)) {
                return true;
            } else {
                console.log("Please enter the team manager's office number!");
                return false;
            }
        }
    }
];

// Engineer generation
const addEngineer = [
    {
        type: 'input',
        name: 'name',
        message: "What is the engineer's name? (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the engineer's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the engineer's ID? (Required)",
        validate: idInput => {
            if (!isNaN(idInput)) {
                return true;
            } else {
                console.log("Please enter the engineer's ID!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the engineer's email address? (Required)",
        validate: emailAddress => {
            if (emailAddress) {
                return true;
            } else {
                console.log("Please enter the engineer's email address!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's GitHub username? (Required)",
        validate: github => {
            if (github) {
                return true;
            } else {
                console.log("Please enter the engineer's GitHub username!");
                return false;
            }
        }
    }
];

// Intern generation

const addIntern = [
    {
        type: 'input',
        name: 'name',
        message: "What is the intern's name? (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the intern's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the intern's ID? (Required)",
        validate: idInput => {
            if (!isNaN(idInput)) {
                return true;
            } else {
                console.log("Please enter the intern's ID!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the intern's email address? (Required)",
        validate: emailAddress => {
            if (emailAddress) {
                return true;
            } else {
                console.log("Please enter the intern's email address!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "What school is the intern attending? (Required)",
        validate: school => {
            if (school) {
                return true;
            } else {
                console.log("Please enter the school the intern is attending!");
                return false;
            }
        }
    }
];

// add another team member
const addConfirm = [
    {
        type: 'confirm',
        name: 'confirmAddMember',
        message: 'Would you like to add another team member?',
        default: false
    }
];

// role selection

const whatRole = [
    {
        type: 'list',
        message: 'Would you like to add an engineer or intern next?',
        name: 'role',
        choices: ['Engineer', 'Intern']
    }
];

function addTeamMember() {
    inquirer.prompt(addConfirm)
        .then(newMember => {
            if (newMember.confirmAddMember) {
                inquirer.prompt(whatRole)
                    .then(answer => {
                        switch (answer.role) {
                            case 'Engineer':
                                inquirer.prompt(addEngineer)
                                .then(answers => {
                                    team.push(new Engineer(answers.name, answers.id, answers.email, answers.github));
                                    addTeamMember();
                                });
                                break;
                            case 'Intern':
                                inquirer.prompt(addIntern)
                                .then(answers => {
                                    team.push(new Intern(answers.name, answers.id, answers.email, answers.school));
                                    addTeamMember();
                                });
                                break;
                        }
                    })
            } else {
                generatePage(team);
            }
        })
}

function init() {
    inquirer.prompt(addManager)
        .then(answers => {
            team.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber));

            addTeamMember()
        })
};

init();













var addManager2 = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "What is the team manager's name? (Required)",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the team manager's name!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerId',
                message: "What is the team manager's employee ID? (Required)",
                validate: idInput => {
                    if (!isNaN(idInput)) {
                        return true;
                    } else {
                        console.log("Please enter the team manager's ID!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerEmailAddress',
                message: "What is the team manager's email address? (Required)",
                validate: emailAddress => {
                    if (emailAddress) {
                        return true;
                    } else {
                        console.log("Please enter the team manager's email address!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: "What is the team manager's office number? (Required)",
                validate: officeNumber => {
                    if (!isNaN(officeNumber)) {
                        return true;
                    } else {
                        console.log("Please enter the team manager's office number!");
                        return false;
                    }
                }
            },
        ]);
};

var addEngineerIntern2 = teamMemberData => {
    console.log(`
    ===================
    Add new team member
    ===================
        `);

    // if there's no 'team member' array property, create one
    if (!teamMemberData.members) {
        teamMemberData.members = [];
    }

    return inquirer
        .prompt([
            {
                type: 'list',
                message: 'Would you like to add an engineer or intern next?',
                name: 'action',
                choices: ['Engineer', 'Intern']
            }])
            .then(({ action }) => {
                if (action === 'Engineer') {
                    return inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'engineerName',
                                message: "What is the engineer's name? (Required)",
                                validate: nameInput => {
                                    if (nameInput) {
                                        return true;
                                    } else {
                                        console.log("Please enter the engineer's name!");
                                        return false;
                                    }
                                }
                            },
                            {
                                type: 'input',
                                name: 'engineerId',
                                message: "What is the engineer's ID? (Required)",
                                validate: idInput => {
                                    if (!isNaN(idInput)) {
                                        return true;
                                    } else {
                                        console.log("Please enter the engineer's ID!");
                                        return false;
                                    }
                                }
                            },
                            {
                                type: 'input',
                                name: 'engineerEmailAddress',
                                message: "What is the engineer's email address? (Required)",
                                validate: emailAddress => {
                                    if (emailAddress) {
                                        return true;
                                    } else {
                                        console.log("Please enter the engineer's email address!");
                                        return false;
                                    }
                                }
                            },
                            {
                                type: 'input',
                                name: 'engineerGithub',
                                message: "What is the engineer's GitHub username? (Required)",
                                validate: github => {
                                    if (github) {
                                        return true;
                                    } else {
                                        console.log("Please enter the engineer's GitHub username!");
                                        return false;
                                    }
                                }
                            },
                            {
                                type: 'confirm',
                                name: 'confirmAddMember',
                                message: 'Would you like to add another team member?',
                                default: false
                            }
                        ])
                }
                else if (action === 'Intern') {
                    return inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'internName',
                            message: "What is the intern's name? (Required)",
                            validate: nameInput => {
                                if (nameInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the intern's name!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'internId',
                            message: "What is the intern's ID? (Required)",
                            validate: idInput => {
                                if (!isNaN(idInput)) {
                                    return true;
                                } else {
                                    console.log("Please enter the intern's ID!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'internEmailAddress',
                            message: "What is the intern's email address? (Required)",
                            validate: emailAddress => {
                                if (emailAddress) {
                                    return true;
                                } else {
                                    console.log("Please enter the intern's email address!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'internSchool',
                            message: "What school is the intern attending? (Required)",
                            validate: school => {
                                if (school) {
                                    return true;
                                } else {
                                    console.log("Please enter the school the intern is attending!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'confirm',
                            name: 'confirmAddMember',
                            message: 'Would you like to add another team member?',
                            default: false
                        }
                    ])
                }
                // else {
                //     console.log('Your team has been generated!');
                // }
            }).then(teamData => {
                teamMemberData.members.push(teamData);
                if (teamData.confirmAddMember) {
                    return addEngineerIntern(teamMemberData);
                } else {
                    console.log("Your team's profile has been generated!")
                    return teamMemberData;
                }
            });
};

// addManager2()
//     .then(addEngineerIntern2)
//     .then(teamMemberData => {
//         return generatePage(teamMemberData);
//     })
//     .catch(err => {
//         console.log(err);
//     });
