import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ShowAlert from "../utils/ShowAlert";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [generatedPassword, setgeneratedPassword] = useState("");
  const [repeat_password, setRepeatPassword] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const [message, setMessage] = useState(null);
  const [status, setStatus] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      formData.append("profile", profileImage); 

      const response = await axios.post(
        "http://localhost:5000/auth/signup",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", 
          },
        }
      );

      console.log("Signup successful:", response.data);
      setStatus("success");
      setMessage("Signup successful:");
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      console.error("Signup error:", error.response.data.message);
      setStatus("error");
      setMessage(error.response.data.message);
    }
  };


  const generatePassword = () => {
    let generatedPassword = Math.random().toString(36).slice(-8);
    setgeneratedPassword(generatedPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(generatedPassword)
      .then(() => {
        console.log("Password copied to clipboard");
        window.alert("Password copied to clipboard");
      })
      .catch((err) => {
        console.error("Could not copy password: ", err);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col glass bg-base-300 p-4 lg:p-10 lg:flex-row-reverse rounded-lg">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl lg:text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p onClick={copyToClipboard} className=" cursor-pointer">
                {generatedPassword}
              </p>
              <button onClick={generatePassword}>Suggest Password</button>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Repeat Password</span>
              </label>
              <input
                type="password"
                placeholder="Repeat password"
                className="input input-bordered"
                required
                value={repeat_password}
                onChange={(e) => setRepeatPassword(e.target.value)}
              />

              <label className="label">
                <Link to={"/login"} className="link-hover">
                  Already a Registered User? Login now
                </Link>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Profile Image</span>
              </label>
              <input
                type="file"
                name="profile"
                className="input input-bordered"
                required
                onChange={(e) => setProfileImage(e.target.files[0])} 
              />

              <label className="label">
                <Link to={"/login"} className="link-hover">
                  Already a Registered User? Login now
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
