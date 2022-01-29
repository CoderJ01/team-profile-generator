const managerHTML = (managerDisplay) => {
    
    managerDisplay = [];

    for (var i = 0; i < managerData.length; i ++) {
        managerDisplay[i]= `<!-- Manager -->
        <div class="role">
            <div class="role-display">
                <div class="basic">
                    <h2>Name</h2>
                    <h3>Manager</h3>
                </div>
                <div class="specific">
                    <div class="specific-wrapper">
                        <div class="id">
                            <text>ID: <span class="input-num">1</span></text></text>
                        </div>
                        <div class="email">
                            <text>Email: <span class="inputs"><a href="mailto: buildingguy@sbcglobal.net">buildingguy@sbcglobal.net</a></span></text>
                        </div>
                        <div class="wild-card">
                            <text>Office Number: <span class="input-num">1</span></text>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    }

    console.log(managerDisplay);

    return managerDisplay;
}

const engineerHTML = (engineerDisplay) => {
    
    engineerDisplay = [];

    for (var i = 0; i < engineerData.length; i ++) {
        engineerDisplay[i]= `<!-- Engineer -->
        <div class="role">
            <div class="role-display">
                <div class="basic">
                    <h2>Name</h2>
                    <h3>Engineer</h3>
                </div>
                <div class="specific">
                    <div class="specific-wrapper">
                        <div class="id">
                            <text>ID: <span class="input-num">2</span></text></text>
                        </div>
                        <div class="email">
                            <text>Email: <span class="inputs"><a href="mailto: buildingguy@sbcglobal.net">buildingguy@sbcglobal.net</a></span></text>
                        </div>
                        <div class="wild-card">
                            <text>GitHub: <span class="inputs">coderJ01</span></text>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    }

    return engineerDisplay;
}

const internHTML = (internDisplay) => {
    
    internDisplay = [];

    for (var i = 0; i < internData.length; i ++) {
        internDisplay[i]= ` <!-- Intern -->
        <div class="role">
            <div class="role-display">
                <div class="basic">
                    <h2>Name</h2>
                    <h3>Intern</h3>
                </div>
                <div class="specific">
                    <div class="specific-wrapper">
                        <div class="id">
                            <text>ID: <span class="input-num">3</span></text></text>
                        </div>
                        <div class="email">
                            <text>Email: <span class="inputs"><a href="mailto: buildingguy@sbcglobal.net">buildingguy@sbcglobal.net</a></span></text>
                        </div>
                        <div class="wild-card">
                            <text>School: <span class="inputs">University of Irvine</span></text>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    }

    return internDisplay;
}

const mainHTML = () => {

    return `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <title>Team Profile</title>
            <style>
                * {
                    margin: 0;
                    font-family: Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif;
                }
                header {
                    height: 100px;
                    background-color: rgb(227, 45, 83);
                }
                header h1 {
                    color: rgb(255, 255, 255);
                    text-align: center;
                    margin-bottom: -200px;
                }
                main {
                    height: 530px;
                }
                .wrapper {
                    height: 478px;
                    margin-top: 26px;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                }
                .role {
                    height: 238px;
                    width: 220px;
                }
                .role-display {
                    height: 216px;
                    width: 200px;
                    margin-left: 10px;
                    margin-top: 11px;
                    box-shadow: 8px 8px 4px  rgb(174, 182, 191);
                }
                .basic {
                    background-color: rgb(33, 116, 251);
                    height: 69px;
                    border-top-left-radius: 5px;
                    border-top-right-radius: 5px;
                }
                .basic h2, .basic h3 {
                    color: rgb(255, 255, 255);
                }
                .basic h3 {
                    margin-top: 5px;
                }
                .specific {
                    background-color: rgb(235, 237, 239);
                    height: 146px;
                    border-bottom-left-radius: 5px;
                    border-bottom-right-radius: 5px;
                }
                .role-display, .basic, .specific {
                    width: 200px;
                }
                .specific-wrapper {
                    margin-top: 21px;
                    position: absolute;
                }
                .id, .email, .wild-card {
                    background-color: rgb(253, 254, 254);
                    border: 1px solid rgb(0, 0, 0);
                    width: 160px;
                    height: 30px;
                    margin-left: 20px;
                }
                .id text, .email text, .wild-card text {
                    position: absolute;
                    margin-top: 5px;
                    font-weight: bold;
                }
                .inputs {
                    font-size: 10px; 
                }
                .inputs, .input-num {
                    font-weight: normal;
                }
            </style>
        </head>
        <body>
            <header>
                <h1>My Team</h1>
            </header>
            <main>
                <div class="wrapper">
    
                </div>
            </main>
        </body>
    </html>`;
}

module.exports = mainHTML;