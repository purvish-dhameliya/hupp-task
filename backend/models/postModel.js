import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default:
        "https://winaero.com/blog/wp-content/uploads/2018/08/Windows-10-user-icon-big.png",
    },
    type: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
