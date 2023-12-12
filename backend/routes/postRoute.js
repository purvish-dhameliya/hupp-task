import express from "express";
import {
  createAddPost,
  deletePost,
  updatePost,
  listpost,
} from "../controllers/postController.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.get("/listPosts", listpost);
// router.post("/addpost", createAddPost);

router.post("/addpost", upload.single("image"), createAddPost);
router.put("/updatepost/:postId", upload.single("image"),updatePost);
router.delete("/deletepost/:postId", deletePost);

export default router;
