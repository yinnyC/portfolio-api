require('dotenv').config();
const express = require('express');
const cors = require('cors');

const router = express.Router();

// Import Routes
const indexRouter = require('./routes/index');

// Set App Variable
const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Routes
app.use('/', indexRouter);

/// //////////////////////////////////////////////////////////////////////////////////////
// Error page for error handling
/// //////////////////////////////////////////////////////////////////////////////////////
router.use((error, req, res, next) =>
	res.status(error.statusCode || 500).json({
		message: error.message || 'Internal Server Error',
		data: error.data || null,
	})
);

/// //////////////////////////////////////////////////////////////////////////////////////
// If no explicit error and route requested not found
/// //////////////////////////////////////////////////////////////////////////////////////
router.use((req, res, next) =>
	res.status(404).json({ message: 'API endpoint not found.' })
);

// Set db
const run = async () => {
	await app.listen(process.env.PORT);
	console.log(`App listening on port ${process.env.PORT}!`);
};

run();

module.exports = app;
