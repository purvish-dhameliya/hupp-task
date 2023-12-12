import {
  createPost,
  deletePostById,
  getPosts,
  updatePostById,
} from "../services/postServices.js";

export const createAddPost = async (req, res) => {
  try {
    const image = req.file ? req.file.filename : null;
    console.log(req.file);
    const savedPost = await createPost({ ...req.body, image });
    console.log({ ...req.body, image });
    return res.status(201).json(savedPost);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const listpost = async (req, res) => {
  try {
    const listPost = await getPosts();
    return res.status(200).json(listPost);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const updatePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const image = req.file ? req.file.filename : req.body.image;
    const updatedPost = await updatePostById(postId,{ ...req.body, image });
    return res.status(200).json(updatedPost);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const result = await deletePostById(postId);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
