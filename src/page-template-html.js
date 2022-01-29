const managerHTML = (managerData) => {
    
    var managerDisplay = [];

    for (var i = 0; i < managerData.length; i++) {
        managerDisplay[i]= `<!-- Manager -->
        <div class="role">
            <div class="role-display">
                <div class="basic">
                    <h2>${managerData[i].name}</h2>
                    <h3>${managerData[i].role}</h3>
                </div>
                <div class="specific">
                    <div class="specific-wrapper">
                        <div class="id">
                            <text>ID: <span class="input-num">${managerData[i].id}</span></text></text>
                        </div>
                        <div class="email">
                            <text>Email: <span class="inputs"><a href="mailto: ${managerData[i].email}">${managerData[i].email}</a></span></text>
                        </div>
                        <div class="wild-card">
                            <text>Office Number: <span class="input-num">${managerData[i].officeNum}</span></text>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    }

    return managerDisplay;
}

const engineerHTML = (engineerData) => {
    
    var engineerDisplay = [];

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
                            <text>GitHub: <span class="inputs"><a href="https://github.com/${engineerData[i].gitHub}">${engineerData[i].gitHub}<a></span></text>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    }

    return engineerDisplay;
}

const internHTML = (internData) => {
    
    var internDisplay = [];

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