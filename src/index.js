const fastify = require('fastify')({
	logger: true
});

// bring in routes
const routes  = require('./routes');

// db connection
const mongoose = require('mongoose');

// Connection string to your MongoDB database
const connectionString = 'mongodb+srv://yashj8682:yashjain@cluster0.du2h0ii.mongodb.net/';

// Establish the MongoDB connection
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected!'))
  .catch(err => console.error('Error connecting to MongoDB:', err));


routes.forEach((route) => {
	fastify.route(route);
});

// starting server
const start = async () => {
	try {
		await fastify.listen(3030);
		fastify.log.info('Server is running at 3030');
	} catch (error) {
		fastify.log.error('Error running fastify server');
	}
};
start();
