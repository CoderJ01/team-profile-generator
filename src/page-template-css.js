const mainCSS = () => {

    return `* {
        margin: 0;
        font-family: Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif;
    }
    header {
        height: 100px;
        background-color: rgb(227, 45, 83);
    }
    header h1 {
        color: rgb(255, 255, 255);
        position: absolute;
        margin-left: 623px;
        margin-top: 30px; 
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
        text-align: center;
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
        margin-left: 20px;
    }
    .id text, .email text, .wild-card text {
        margin-top: 5px;
        font-weight: bold;
        word-wrap: break-word;
    }
    .inputs {
        font-size: 10px; 
    }
    .inputs, .input-num {
        font-weight: normal;
    }`;
}

module.exports = mainCSS;