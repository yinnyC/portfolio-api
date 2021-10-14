const { stringify } = require('querystring');
const portfolioModel = require('../models/portfolio');
exports.index = (req, res, next) => {
	try {
		return res.status(200).send({ message: 'Hello From Backend!' });
	} catch (err) {
		return res.status(500).send({ message: 'Error' });
	}
};

exports.getProjects = async (req, res, next) => {
	try {
		const projects = await portfolioModel.getProjects();
		return res.status(200).send(projects);
	} catch (err) {
		console.log(err);
		return res.status(500).send({ message: 'Error' });
	}
};

exports.getPublications = async (req, res, next) => {
	try {
		const publications = await portfolioModel.getPublications();
		return res.status(200).send(publications);
	} catch (err) {
		console.log(err);
		return res.status(500).send({ message: 'Error' });
	}
};
