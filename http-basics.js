const { readFileSync } = require("fs");
const http = require("http");
 

//get all files
const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')




const server = http.createServer((request, response) => {
  const url = request.url;
  console.log(url)
  //home
  if (url === "/") {
    response.writeHead(200, { "content-type": "text/html" });
    response.write(homePage);
    response.end();
  }
  //about
  else if(url === "/about")
  {
    response.writeHead(200, { "content-type": "text/html" });
    response.write("<h1>About Page</h1>");
    response.end();
  }
  else if(url === "/styles.css"){
    
    response.writeHead(200, { "content-type": "text/css" });
    response.write(homeStyles);
    response.end();
  }
  //image logo
  else if(url === "/logo.svg"){
    
    response.writeHead(200, { "content-type": "image/svg" });
    response.write(homeImage);
    response.end();
  }
  //javascript logic
  else if(url === "/browser-app.js"){
    
    response.writeHead(200, { "content-type": "text/javascript" });
    response.write(homeLogic);
    response.end();
  }
  //404
  else{
    response.writeHead(404, { "content-type": "text/html" });
    response.write("<h1>Error 404</h1>");
    response.end();
  }
});

server.listen(5000);
