const express = require('express'); // import
const app = express(); // get
const PORT = 4000;

function handleListening() {
    console.log('Listening on http://localhost:${PORT}');
};


function handlehome(req, res) {
    console.log(req);
    res.send('HELLO FROM HOME');
}

function handleProfile(req, res) {
    res.send('HELLO FROM PROFILE');
}

app.get("/", handlehome);
app.get("/profile", handleProfile);


app.listen(PORT, handleListening);
