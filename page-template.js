const fs = require('fs');
const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.resolve( OUTPUT_DIR, "index.html" );

function getEmployeeInfo( employee ) {
    switch ( employee.getRole() ) {
        case "Manager":
            return `Office: ${ employee.getOfficeNumber() }`;
        case "Engineer":
            return `GitHub: <a href="https://github.com/${ employee.getGithub() }" target="_blank" class="card-link">${ employee.getGithub() }</a>`;
        case "Intern":
            return `School: ${ employee.getSchool() }`;
    }
}

function mapEmployees( employees ) {
    return employees
        .map( employee => (
            `<section class="card">
                <div class="card-body">
                    <h4 class="card-title">${ employee.getName() }</h4>
                    <h5 class="card-title">${ employee.getRole() }</h5>
                </div>
                <div>
                    <ul>
                        <li class="list-group-item">Employee ID: ${ employee.getId() }</li>
                        <li class="list-group-item">Email: <a href="mailto:${ employee.getEmail() }" class="card-link">${ employee.getEmail() }</a></li>
                        <li class="list-group-item">${ getEmployeeInfo( employee ) }</li>
                    </ul> 
                </div>
            </section>`
        ) )
        .join( "" );
}

function renderHTML( team ) {
    return `<!DOCTYPE html>
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
                ${ mapEmployees( team ) }
            </main>
        </body>
    </html>`;
}

function generateHTML( team ) {
    const HTML = renderHTML( team );

    if ( !fs.existsSync( OUTPUT_DIR ) ) {
        fs.mkdirSync( OUTPUT_DIR );
    }

    fs.writeFileSync( outputPath, HTML, "utf-8" );
}

module.exports = { generateHTML };