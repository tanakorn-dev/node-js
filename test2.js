const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("Middleware 1")
    next();
});

app.use((req, res, next) => {
    console.log("Middleware 2")
    next();
})

app.use('/users', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>The "User" page"</h1>');
});

app.use('/', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);