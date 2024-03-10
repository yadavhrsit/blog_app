import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateBlogPage() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const token = localStorage.getItem("BlogAppToken");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/blogs",
        {
          title,
          content,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSuccessMessage(response.data.message);
      setTitle("");
      setContent("");
      navigate(`/${response.data.blog}`)

    } catch (error) {
      setErrorMessage(error.response.data.error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Create a New Blog</h1>
      <form onSubmit={handleSubmit} className="max-w-lg">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-300 p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-gray-700 font-bold mb-2"
          >
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border-2 border-gray-300 p-2 w-full"
            rows="6"
            required
          ></textarea>
        </div>
        {successMessage && (
          <p className="text-green-600 mb-4">{successMessage}</p>
        )}
        {errorMessage && <p className="text-red-600 mb-4">{errorMessage}</p>}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create Blog
        </button>
      </form>
    </div>
  );
}

export default CreateBlogPage;
