// template for team roster

// creates manager information display box
const managerHTML = (managerData) => {
    
    var managerDisplay = [];

    managerDisplay = `<!-- Manager -->
        <div class="role">
            <div class="role-display">
                <div class="basic">
                    <h2>${managerData[0].name}</h2>
                    <h3>${managerData[0].role}</h3>
                </div>
                <div class="specific">
                    <div class="specific-wrapper">
                        <div class="id">
                            <text>ID: <span class="input-num">${managerData[0].id}</span></text></text>
                        </div>
                        <div class="email">
                            <text>Email: <span class="inputs"><a href="mailto: ${managerData[0].email}">${managerData[0].email}</a></span></text>
                        </div>
                        <div class="wild-card">
                            <text>Office Number: <span class="input-num">${managerData[0].officeNum}</span></text>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;

    return managerDisplay;
}

// creates enginneer information display box(es)
const engineerHTML = (engineerData) => {

    if (engineerData) {
        var engineerDisplay = [];

        // allows manager to display more than one engineer
        for (var i = 0; i < engineerData.length; i++) {
            engineerDisplay[i]= `<!-- Engineer -->
            <div class="role">
                <div class="role-display">
                    <div class="basic">
                        <h2>${engineerData[i].name}</h2>
                        <h3>${engineerData[i].role}</h3>
                    </div>
                    <div class="specific">
                        <div class="specific-wrapper">
                            <div class="id">
                                <text>ID: <span class="input-num">${engineerData[i].id}</span></text></text>
                            </div>
                            <div class="email">
                                <text>Email: <span class="inputs"><a href="mailto: ${engineerData[i].email}">${engineerData[i].email}</a></span></text>
                            </div>
                            <div class="wild-card">
                                <text>GitHub: <span class="inputs"><a href="https://github.com/${engineerData[i].gitHub}" target="_blank" rel="noopener noreferrer">${engineerData[i].gitHub}<a></span></text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
        }
        return engineerDisplay;
    }
    else {
        return ''; // prevents undefined from being display on HTML
    }   
}

// creates intern information display box(es)
const internHTML = (internData) => {

    if(internData) {
        var internDisplay = [];

         // // allows manager to display more than one intern
        for (var i = 0; i < internData.length; i++) {
            internDisplay[i]= ` <!-- Intern -->
            <div class="role">
                <div class="role-display">
                    <div class="basic">
                        <h2>${internData[i].name}</h2>
                        <h3>${internData[i].role}</h3>
                    </div>
                    <div class="specific">
                        <div class="specific-wrapper">
                            <div class="id">
                                <text>ID: <span class="input-num">${internData[i].id}</span></text></text>
                            </div>
                            <div class="email">
                                <text>Email: <span class="inputs"><a href="mailto: ${internData[i].email}">${internData[i].email}</a></span></text>
                            </div>
                            <div class="wild-card">
                                <text>School: <span class="inputs">${internData[i].school}</span></text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
        }
        return internDisplay;
    }
    else {
        return '';
    }
}

const mainHTML = (managerData, engineerData, internData) => {

    return `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <title>Team Profile</title>
            <link rel="stylesheet" href="./assets/css/style.css">
        </head>
        <body>
            <header>
                <h1>My Team</h1>
            </header>
            <main>
                <div class="wrapper">
                ${managerHTML(managerData)}
                ${engineerHTML(engineerData)}
                ${internHTML(internData)}
                </div>
            </main>
        </body>
    </html>`;
}

module.exports = mainHTML;

// NOTE: Being static, the CSS does not need a template. A static style.css file
// is provided to be linked to the html once the manager creatstes the page
// ./dist/assets/css/style.css