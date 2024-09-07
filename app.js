const http = require('http')
const fs = require('fs')

const hostname = '127.0.0.1';
const port = 80;

const index = fs.readFileSync('index.html')
const about = fs.readFileSync('./about.html')
const services =  fs.readFileSync('./services.html')
const contact= fs.readFileSync('./contact.html')
const home = fs.readFileSync('./home.html')

const server = http.createServer((req ,res)=>{
    console.log(req.url)
    url = req.url

    res.statusCode = 200;

    res.setHeader('Content-Type', 'text/html');
    if (url =='/index.html'){
      res.end(index);
  }
   else if (url =='/about.html'){
      res.end(about);
  }
   else if (url =='/services.html'){
      res.end(services);
  }
   else if (url =='/contact.html'){
      res.end(contact);
  }
   else if (url =='/home.html'){
      res.end(home);
  }
  
  
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });