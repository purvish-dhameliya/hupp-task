import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addPost,
  setSelectedPost,
  updatePost,
} from "../app/features/postSlice";
import Form from "../components/Form";

const NewPost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { selectedpost } = useSelector((state) => state.post);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("type", data.type);
    formData.append("email", data.email);
    formData.append("image", data.image[0]);

    if (!selectedpost) {
      dispatch(addPost(formData));
    } else {
      dispatch(updatePost({ data: formData, _id: selectedpost._id }));
      dispatch(setSelectedPost(null));
    }

    navigate("/listpost");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 ">
      <div className="bg-gray-300 p-4 rounded-md shadow-md w-[30em]">
        <h1 className="text-2xl font-bold text-center text-black">
          {selectedpost ? "UPDATE POST" : "ADD POST"}
        </h1>
        <p className="border mt-2 mb-3"></p>
        <Form
          onSubmit={onSubmit}
          defaultValues={selectedpost}
          buttonText={selectedpost ? "Update Post" : "Add Post"}
        />
      </div>
    </div>
  );
};

export default NewPost;
