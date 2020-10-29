const Post = require("../model/postModel");
const { formatResponse } = require("../utils/Utils");

const postController = {
  create: (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
      return formatResponse(res, 400, { error: "Title and content required" });
    }

    const post = new Post({
      title: title,
      content: content,
    });

    post.save((err) => {
      if (err) {
        return formatResponse(res, 400, { error: "Bad Request" });
      }

      formatResponse(res, 200, { success: "Post successfully stored" });
    });
  },
  read: (req, res) => {
    Post.find((err, posts) => {
      if (err) {
        return formatResponse(res, 400, { error: "Bad Request" });
      }

      formatResponse(res, 200, posts);
    }).sort({ createdAt: -1 });
  },
  readOne: (req, res) => {
    const { id } = req.params;
    Post.findById(id, (err, post) => {
      if (err) {
        return formatResponse(res, 400, { error: "Bad Request" });
      }

      formatResponse(res, 200, post);
    });
  },
  update: (req, res) => {
    const { id } = req.body;

    Post.findByIdAndUpdate(id, req.body, { new: true }, (err, post) => {
      if (err) {
        return formatResponse(res, 400, { error: "Bad Request" });
      }

      formatResponse(res, 200, post);
    });
  },
  remove: (req, res) => {
    const { id } = req.body;

    Post.findByIdAndRemove(id, (err, post) => {
      if (err) {
        return formatResponse(res, 400, { error: "Bad Request" });
      }

      formatResponse(res, 200, { success: "Post successfully deleted" });
    });
  },
};

module.exports = postController;
