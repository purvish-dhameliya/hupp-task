import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  deletePost,
  listPosts,
  setSelectedPost,
} from "../app/features/postSlice";
import { useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const PostList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  const handleEdit = (post) => {
    dispatch(setSelectedPost(post));
    navigate(`/addpost`);
  };

  const handleDelete = (post) => {
    dispatch(deletePost({ _id: post }));
    dispatch(listPosts());
  };

  useEffect(() => {
    dispatch(listPosts());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4 border border-spacing-x-10 m-10">
      <div className="flex justify-center gap-4 items-center mb-4 ">
        <h1 className="text-2xl font-bold ">POST LISTING</h1>
        <Link
          to="/addpost"
          className="bg-green-800 text-white p-2 rounded-md hover:bg-blue-600"
        >
          New post
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-48">
        {posts.map((post, index) => (
          <div key={post.id || index} className="border p-4 rounded-md ">
            <div className="border bg-black p-2 rounded-lg m-3">
            <img
              src={`http://localhost:8080/${post.image}`}
              alt={post.title}
              className="mt-2 mb-2 max-w-full rounded-md"
            />
            </div>
            <p className="text-lg font-semibold">Title: {post.title}</p>
            <p className="text-amber-500 text-lg">Description: {post.description}</p>

            <p className="text-lg text-amber-500">Type: {post.type}</p>
            <p className="text-lg text-amber-500">Email: {post.email}</p>

            <div className="mt-4 flex space-x-2 justify-between">
              <button
                className="bg-red-500 w-[55px] flex justify-center text-white p-2 rounded-md hover:bg-red-600"
                onClick={() => handleDelete(post?._id)}
              >
                <RiDeleteBin6Line size={24} />
              </button>
              <button
                onClick={() => handleEdit(post)}
                className="bg-yellow-500 w-[55px] flex justify-center text-white p-2 rounded-md hover:bg-yellow-600"
              >
                <FaRegEdit size={24} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
