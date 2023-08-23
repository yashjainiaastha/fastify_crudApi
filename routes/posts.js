const {
    getPostsSchema,
    getPostSchema,
    addPostSchema,
    updatePostSchema,
    deletePostSchema,
} = require ('../controllers/schemas/posts');

const {
    getPostsHandler,
    getPostHandler,
    addPostHandler,
    updatePostHandler,
    deletePostHandler,
} = require('../controllers/handlers/posts');

const getPostsOpts = {
    schema: getPostsSchema,
    handler: getPostsHandler,
};

const getPostOpts = {
    schema: getPostSchema,
    handler: getPostHandler,
};

const addPostOpts = {
    schema: addPostSchema,
    handler: addPostHandler,
};

const updatePostOpts = {
    schema:updatePostSchema,
    handler: updatePostHandler,
};

const deletePostOpts = {
    schema: deletePostSchema,
    handler: deletePostHandler,
};

const postRoutes = (fastify, opts, done) => {
    fastify.get('/api/posts', getPostsOpts);
    fastify.get('/api/posts/:id', getPostOpts);
    fastify.post('/api/posts/new', addPostOpts);
    fastify.put('/api/posts/edit/:id', updatePostOpts);
    fastify.delete('/api/posts/:id', deletePostOpts);
    done();
};

module.exports = postRoutes;