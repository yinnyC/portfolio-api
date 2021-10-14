// This file contains code to make operations on the DB
const notion = require('../services/notion');
const projectDatabaseId = process.env.NOTION_PROJECTS_DATABASE_ID;
const publicationsDatabaseId = process.env.NOTION_PUBLICATIONS_DATABASE_ID;

const portfolioModel = {
	getProjects: async () => {
		try {
			const { results } = await notion.databases.query({
				database_id: projectDatabaseId,
			});
			console.log(results);
			const res = results.map((page) => {
				return {
					Name: page.properties.Name.title[0].plain_text,
					Tags: page.properties.Tags.multi_select.map((tag) => tag.name),
					Thumbnail: page.properties.Thumbnail.files[0].file.url,
					Description: page.properties.Description.rich_text[0].plain_text,
					LiveSite: page.properties.LiveSite.url,
					Repo: page.properties.Repo.url,
				};
			});
			return res;
		} catch (error) {
			console.error(error);
		}
	},
	getPublications: async () => {
		try {
			const { results } = await notion.databases.query({
				database_id: publicationsDatabaseId,
			});
			console.log(results);
			const res = results.map((page) => {
				return {
					Name: page.properties.Name.title[0].plain_text,
					Subheading: page.properties.Subheading.rich_text[0].plain_text,
					Link: page.properties.Link.url,
					Thumbnail: page.properties.Thumbnail.files[0].file.url,
				};
			});
			return res;
		} catch (error) {
			console.error(error);
		}
	},
};
module.exports = portfolioModel;
