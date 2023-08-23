const posts = require('../../cloud/posts');

const getPostsHandler = (req, reply) => {
    reply.send(posts);
};
const getPostHandler =(req, reply) => {
    const { id } = req.params;

    const post = posts.filter((post) =>{
        return post.id === id;
    })[0];

    if(!post) {
        return reply.status(404).send(new Error('Post not found'));
    }

    return reply.send(post);
};

const addPostHandler = (req, reply) => {
    const { title, body } = req.body;
    const { id } = posts.length + 1;
    posts.push({id,title, body });
    reply.send('Post added');

};

const updatePostHandler = (req, reply) => {
    const { title, body } = req.body;
    const { id } = req.params;
    
    const foundPost = posts.filter((post) => post.id === id)[0];

    if (!foundPost) {
        return reply.status(404).send(new Error("Post doesn't exist"));
    }

    // Update the post's title and body
    foundPost.title = title;
    foundPost.body = body;

    return reply.send('Post updated');
};


const deletePostHandler = (req, reply) => {
    const { id } =  req.params;
    const postIndex = posts.findIndex((post) => {
        return post.id === id;
    });

    if (postIndex === -1) {
        return reply.status(404).send(new Error("Post doesn't exixt"));
    }
    posts.splice(postIndex, 1);

    reply.send({ message: "Post deleted successfully"});
};

module.exports = {
    getPostsHandler,
    getPostHandler,
    addPostHandler,
    updatePostHandler,
    deletePostHandler,
};