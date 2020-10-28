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
        return formatResponse(res, 400, { error: "Something went wrong" });
      }

      formatResponse(res, 200, { success: "Post successfully stored" });
    });
  },
  read: (req, res) => {
    Post.find((err, posts) => {
      if (err) {
        return formatResponse(res, 400, { error: "Something went wrong" });
      }

      formatResponse(res, 200, posts);
    }).sort({ createdAt: -1 });
  },
  update: (req, res) => {
    const { id } = req.params;

    Post.findByIdAndUpdate(id, req.body, { new: true }, (err, post) => {
      if (err) {
        return formatResponse(res, 400, { error: "Something went wrong" });
      }

      formatResponse(res, 200, post);
    });
  },
  remove: (req, res) => {
    const { id } = req.body;

    Post.findByIdAndRemove(id, (err, post) => {
      if (err) {
        return formatResponse(res, 400, { error: "Something went wrong" });
      }

      formatResponse(res, 200, { success: "Post successfully deleted" });
    });
  },
};

module.exports = postController;
