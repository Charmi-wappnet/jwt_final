require("dotenv").config();
const express = require('express');
const app = express();
const userRoute = require('./src/routes/userRoute');

app.use(express.json());

app.use('/api', userRoute);

app.listen(process.env.APP_PORT, () => {
    console.log('Server is running on PORT :  ', process.env.APP_PORT);
});