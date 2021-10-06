// const express = require("express");
// const morgan = require("morgan");
//
// const PORT = 3000;
//
// const app = express();
//
// function getRandomInt(request, response) {
//
//     return Math.floor(Math.random() * (max - min + 1) + min);
//
// }
// response.end(`number=${request.params.number}`);
//
// app.use(morgan("dev"));
// app.get("/random/:min/:max", getRandomInt);
// app.listen(PORT, () => console.log("Listening on port:", PORT));

// // Import the library
// const server = require('server');
//
// // Answers to any request
// server(ctx => 'Hello, potz!');

const rn = require('random-number');
var gen = rn.generator({
    min:  -1000
    , max:  1000
    , integer: true
});
gen();