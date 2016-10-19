'use strict';

const PORT = process.env.PORT || 8080;

let express = require('express');
let path = require('path');
let app = express();

let https = require('https');
let fs = require('fs');

let options = {
    cert: fs.readFileSync('/home/erik/Documents/cert.crt'),
    key: fs.readFileSync('/home/erik/Documents/key.pem'),
    ca: fs.readFileSync('/home/erik/Documents/bundle.crt')
};

app.use(express.static('./'));

app.get('/', ( req, res ) => {
    res.sendFile( path.resolve( __dirname, 'static/index.html' ) );
});

var server = https.createServer(options, app);
server.listen(PORT, function(){
    console.log(`server running on port: ${PORT}`);
});
