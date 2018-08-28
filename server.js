import express from 'express';
const server = express();

server.get('/graphql', (req,res) => {
	res.send('<html> <head> </head> <body> <h1> Hello Fatma </h1> </body> </html>')
});


server.listen(4000, () => {
	console.log('Listening');
});