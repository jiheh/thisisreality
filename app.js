const Express = require('express');

const app = new Express();

app.set('port', (process.env.PORT || 3000));

app.use('/', Express.static('views'));

app.listen(3000, function() {
	console.log('Listening to port 3000');
});