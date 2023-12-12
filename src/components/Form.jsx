import  { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

const Form = ({ onSubmit, defaultValues, buttonText }) => {
  const [picture, setPicture] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    if (defaultValues) {
      Object.keys(defaultValues).forEach((key) => {
        setValue(key, defaultValues[key]);
      });
    }
  }, [defaultValues, setValue]);

  const onChangePicture = (e) => {
    setPicture(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4 ">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-600"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          {...register("title", { required: "Title is required" })}
          className="block w-[100%] mt-1 p-2 border border-gray-300 rounded-md"
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
      </div>

      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-600"
        >
          Description
        </label>
        <textarea
          id="description"
          {...register("description", { required: "Description is required" })}
          rows="3"
          className="mt-1 w-[100%] p-2 border border-gray-300 rounded-md"
        />
        {errors.description && (
          <p className="text-red-500">{errors.description.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="image"
          className="block text-sm font-medium text-gray-600"
        >
          Image
        </label>
        <input
          type="file"
          id="image"
          {...register("image", { required: "Image is required" })}
          className="mt-1 w-[100%] p-2 border border-gray-300 rounded-md"
          accept="image/*"
          onChange={onChangePicture}
        />
        <img
          className="image w-24 m-3 flex justify-end"
          src={picture && picture}
          alt=""
        />
        {errors.image && <p className="text-red-500">{errors.image.message}</p>}
      </div>

      <div className="mb-4">
        <label
          htmlFor="type"
          className="block text-sm font-medium text-gray-600"
        >
          Type
        </label>
        <input
          type="text"
          id="type"
          {...register("type", { required: "Type is required" })}
          className="mt-1 p-2 w-[100%] border border-gray-300 rounded-md"
        />
        {errors.type && <p className="text-red-500">{errors.type.message}</p>}
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-grey-300"
        >
          Email
        </label>
        <input
          type="text"
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          })}
          className="mt-1 p-2 w-[100%] border border-grey-300 rounded-md"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-blue-500 text-white w-full p-2 rounded-md hover:bg-blue-600"
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  defaultValues: PropTypes.object,
  buttonText: PropTypes.string.isRequired,
};

export default Form;
