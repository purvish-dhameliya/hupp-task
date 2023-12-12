// import  { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { setSelectedPost, updatePost } from "../app/features/postSlice";
// import Form from "../components/Form";

// const UpdatePost = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { selectedpost } = useSelector((state) => state.post);

//   useEffect(() => {
//     return () => {
//       dispatch(setSelectedPost(null));
//     };
//   }, [dispatch]);

//   const onSubmit = async (data) => {
//     const formData = new FormData();
//     formData.append("title", data.title);
//     formData.append("description", data.description);
//     formData.append("type", data.type);
//     formData.append("email", data.email);
//     formData.append("image", data.image);

//     dispatch(updatePost({ data: formData, _id: selectedpost._id }));
//     dispatch(setSelectedPost(null));
//     navigate("/listpost");
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-gray-300 p-4 rounded-md shadow-md w-[30em]">
//         <h1 className="text-2xl font-bold text-center text-black">UPDATE POST</h1>
//         <p className="border mt-2 mb-3"></p>
//         <Form
//           defaultValues={{
//             title: selectedpost.title,
//             description: selectedpost.description,
//             type: selectedpost.type,
//             email: selectedpost.email,
//           }}
//           onSubmit={onSubmit}
//           buttonText="Update Post"
//           fileInput
//         />
//       </div>
//     </div>
//   );
// };

// export default UpdatePost;
