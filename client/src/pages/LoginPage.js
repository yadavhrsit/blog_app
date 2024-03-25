import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ShowAlert from "../utils/ShowAlert";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [status, setStatus] = useState(null);

  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        email: email,
        password: password,
      })
      console.log("Login successful:", response.data);
      setStatus("success");
      setMessage("Login successful:");
      localStorage.setItem("BlogAppToken", response.data.token);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Login error:", error.response.data.message);
      setStatus("error");
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content glass bg-base-300 p-4 lg:p-10 flex-col lg:flex-row-reverse rounded-lg">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl lg:text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          {<ShowAlert status={status} message={message} />}
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
              <label className="label">
                <Link href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
              <label className="label">
                <Link to={"/signup"} className="link-hover">
                  Not a Registered User? Register now
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
