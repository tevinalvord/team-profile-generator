// create manager section
function generateManager(manager) {
    return manager.map(({ name, id, email, officeNumber }) => {
        return `
            <div class="">
                <div>
                    <h1>${name}</h1>
                    <h1>Manager</h1>
                </div>
                <div>
                    <ul>
                        <li>ID: ${id}</id>
                        <li>Email: ${email}</li>
                        <li>Office Number: ${officeNumber}</li>
                    </ul>
                </div>
            </div>
        `;
    })
        .join(' ');
}

// create engineer section
function generateEngineer(engineer) {
    return manager.map(({ name, id, email, github }) => {
        return `
            <div class="">
                <div>
                    <h1>${name}</h1>
                    <h1>Manager</h1>
                </div>
                <div>
                    <ul>
                        <li>ID: ${id}</id>
                        <li>Email: ${email}</li>
                        <li>GitHub: ${github}</li>
                    </ul>
                </div>
            </div>
        `;
    })
        .join(' ');
}

// create intern section
function generateIntern(intern) {
    return manager.map(({ name, id, email, school }) => {
        return `
            <div class="">
                <div>
                    <h1>${name}</h1>
                    <h1>Manager</h1>
                </div>
                <div>
                    <ul>
                        <li>ID: ${id}</id>
                        <li>Email: ${email}</li>
                        <li>School: ${school}</li>
                    </ul>
                </div>
            </div>
        `;
    })
        .join(' ');
}


// create HTML
module.exports = team => {
    console.log(team);

    const manager = team.filter(({ officeNumber }) => officeNumber);
    const engineer = team.filter(({ github }) => github);
    const intern = team.filter(({ school }) => school);

    return `
    <!DOCTYPE html> 
    <html lang="en"> 

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My Team</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <header>
            <div class="">
                <h1 class="">Team</h1>
            </div>
        </header>
        <main class="">
            ${generateManager(manager)}
            ${generateEngineer(engineer)}
            ${generateIntern(intern)}
        </main>
    </body>
    </html>
    `;
};