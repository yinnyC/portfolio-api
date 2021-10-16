const cors = require('cors');
require('dotenv').config();
const express = require('express');

// Import Routes
const indexRouter = require('./routes/index');

// Set App Variable
const app = express();
// Add cors
// app.use(cors({ origin: '*' }));
app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});
app.use(express.json());

// Routes
app.use('/', indexRouter);

const run = async () => {
	await app.listen(process.env.PORT);
	console.log(`App listening on port ${process.env.PORT}!`);
};

run();

module.exports = app;
