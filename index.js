const express = require("express");
const app = express();
const port = 3000; 

app.listen(port, err => {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Server running in port: ' + port);
})