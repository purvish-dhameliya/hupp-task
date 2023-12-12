import Posts from "../models/postModel.js";

export const createPost = async (postDetails) => {
  const { title, description, type, email, image } = postDetails;

  const post = new Posts({ title, description, type, email, image });

  if (!post) throw new Error("Failed to create post");

  if (!title || !description || !type || !email) {
    throw new Error("All fields are required");
  }

  const savedPost = await post.save();
  return savedPost;
};

export const getPosts = async () => {
  const listPost = await Posts.find({});
  return listPost;
};

export const updatePostById = async (postId, postDetails) => {
  const { title, description, type, email, image } = postDetails;

  if (!title && !description && !type && !email && !image) {
    throw new Error("Insert valid data for update");
  }

  const updatePost = await Posts.findOneAndUpdate(
    { _id: postId },
    { title, description, type, email, image },
    { new: true }
  );

  if (!updatePost) throw new Error("Post not found");

  return updatePost;
};

export const deletePostById = async (postId) => {
  const deletePost = await Posts.findByIdAndDelete(postId);

  if (!deletePost) throw new Error("Post not found");

  return { msg: "Post deleted successfully" };
};
