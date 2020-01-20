function generateHTML(data) {
    return `<!DOCTYPE html>
  <html lang="en">
     <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
        <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
        <title>Profile Generator</title>
        <style>
            @page {
              margin: 0;
            }
           *,
           *::after,
           *::before {
           box-sizing: border-box;
           }
           html, body {
           padding: 0;
           margin: 0;
           }
           html, body, .wrapper {
           height: 100%;
           }
           .wrapper {
           background-color: #000;
           padding-top: 100px;
           overflow: auto;
           display: flex;
           flex-wrap: wrap;
           justify-content: space-around;
           }
           body {
           background-color: white;
           -webkit-print-color-adjust: exact !important;
           font-family: 'Cabin', sans-serif;
           }
           main {
           background-color: #E9EDEE;
           height: auto;
           padding-top: 30px;
           }
           h1, h2, h3, h4, h5, h6 {
           font-family: 'BioRhyme', serif;
           margin: 0;
           }
           h1 {
           font-size: 3em;
           }
           h2 {
           font-size: 2.5em;
           display: block;
           }
           h3 {
           font-size: 2em;
           display: block;
           text-align: center;
           width: 100%;
           line-height: 1em;
           }
           h4 {
           font-size: 1.5em;
           text-align: center;
           }
           .container {
           padding: 50px;
           padding-left: 100px;
           padding-right: 100px;
           }
  
           .card {
             padding: 20px;
             border-radius: 6px;
             background-color: #fff;
             color: #000;
             margin: 20px;
             width: calc(25% - 40px);
             box-sizing: border-box;
             text-align: center;
             font-size: 1.5em;
           }
           
           .col {
           flex: 1;
           text-align: center;
           }
  
           a, a:hover {
           text-decoration: none;
           color: inherit;
           font-weight: bold;
           }
  
           @media print { 
            body { 
              zoom: .75; 
            } 
           }
        </style>
        </head>
        <body>
        <div class="wrapper">
          <div class="card">
            <h1>${data.name}</h1>
          </div> 
        </div>        
        </body>`
          }
          module.exports = generateHTML;