// create manager section
function generateManager(manager) {
    return manager.map(({ name, id, email, officeNumber }) => {
        return `
            <div class="card-div m-2 mb-3 col-xl-3">
                <div class="name-role-div bg-primary">
                    <h1 class="name">${name}</h1>
                    <h1 class="role"><i class="fa-solid fa-mug-hot"></i>Manager</h1>
                </div>
                <div class="card">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${id}</id>
                        <li class="list-group-item">Email: <a href="mailto: ${email}">${email}</a></li>
                        <li class="list-group-item">Office Number: ${officeNumber}</li>
                    </ul>
                </div>
            </div>
        `;
    })
        .join(' ');
}

// create engineer section
function generateEngineer(engineer) {
    return engineer.map(({ name, id, email, github }) => {
        return `
            <div class="card-div m-2 mb-3 col-xl-3">
                <div class="name-role-div bg-primary">
                    <h1 class="name">${name}</h1>
                    <h1 class="role"><i class="fa-solid fa-glasses"></i>Engineer</h1>
                </div>
                <div class="card">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${id}</id>
                        <li class="list-group-item">Email: <a href="mailto: ${email}">${email}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${github}">${github}</a></li>
                    </ul>
                </div>
            </div>
        `;
    })
        .join(' ');
}

// create intern section
function generateIntern(intern) {
    return intern.map(({ name, id, email, school }) => {
        return `
            <div class="card-div m-2 mb-3 col-xl-3">
                <div class="name-role-div bg-primary">
                    <h1 class="name">${name}</h1>
                    <h1 class="role"><i class="fa-solid fa-user-graduate"></i>Intern</h1>
                </div>
                <div class="card">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${id}</id>
                        <li class="list-group-item">Email: <a href="mailto: ${email}">${email}</a></li>
                        <li class="list-group-item">School: ${school}</li>
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
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <header>
            <div class="bg-danger">
                <h1 class="header-title">My Team</h1>
            </div>
        </header>
        <main class="main d-flex flex-wrap justify-content-center">
            ${generateManager(manager)}
            ${generateEngineer(engineer)}
            ${generateIntern(intern)}
        </main>
        <script src="https://kit.fontawesome.com/99c3e730b0.js" crossorigin="anonymous"></script>
    </body>
    </html>
    `;
};