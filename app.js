'use strict';

const PORT = process.env.PORT || 8080;

let express = require('express');
let path = require('path');
let app = express();

app.use(express.static('./'));

app.get('/', ( req, res ) => {
    res.sendFile( path.resolve( __dirname, 'static/index.html' ) );
});

app.listen(PORT, () => {
    console.log('Example app listening on port ' + PORT + '!');
});
