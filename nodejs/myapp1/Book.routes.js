module.exports = (app) => {
	const books = require('./Book.controller');

	app.post('/createbook',  books.create);

	app.get('/getbooks',  books.findall);
}	