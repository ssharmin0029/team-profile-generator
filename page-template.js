const fs = require('fs');
const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

function renderHTML(team) {
    let HTML = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="./style.css"/>
            <title>Team Profile Generator</title>
        </head>
        <body>
            <header>
                <h1>Team Profile</h1>
            </header>
            <main>
    `;

    team.forEach(employee => {
        HTML += `
        <section class="card">
            <div class="card-body">
                <h4 class="card-title">${employee.name}</h4>
                <h5 class="card-title">${getRole(employee)}</h5>
            </div>
            <div>
                <ul>
                    <li class="list-group-item">Employee ID: ${employee.id}</li>
                    <li class="list-group-item">Email: 
                        <a href="mailto:${employee.email}" class="card-link">${employee.email}</a>
                    </li>
                </ul> 
            </div>
            <div class="card-title">
                <div class="card-text">${getRestOfTheEmployee(employee)}</div>
            <div>
        </section>
        `;
    });

    HTML += `
            </main>
        </body>
    </html>
    `;

    // Calls generateHTML() function 
    generateHTML(HTML);
}

function getRole(employee) {
    switch (employee.role) {
        case "Manager":
            return `<h3>${employee.role}</h3>`;
        case "Engineer":
            return `<h3>${employee.role}</h3>`;
        case "Intern":
            return `<h3>${employee.role}</h3>`;
    }
}

function getRestOfTheEmployee(employee) {
    switch (employee.role) {
        case "Manager":
            return `<li class="list-group-item>Offcie# ${employee.officeNumber}</li>`;
        case "Engineer":
            return `<li class="list-group-item"><a href="https://github.com/${employee.github}" target="_blank" class="card-link">Github: ${employee.github}</a></li>`;
        case "Intern":
            return `<li class="list-group-item>${employee.school}</li>`;
    }
}

function generateHTML(HTML) {
    fs.mkdir(OUTPUT_DIR, {recursive: true}, (err) => {
        err ? console.error(err) : process.chdir(OUTPUT_DIR);
        fs.writeFileSync("team.html", HTML);
    });
}

module.exports.renderHTML = renderHTML;