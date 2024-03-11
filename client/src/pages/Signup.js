import React, { useState } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeat_password, setRepeatPassword] = useState("");
  // const [Response, setResponse] = useState(null);

  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/auth/signup", {
        email: email,
        password: password,
      });
      console.log("Signup successful:", response.data);
      // setResponse(response.data.message);
      setTimeout(() => {
        navigate('/login')
      }, 3000);
    } catch (error) {
      console.error("Signup error:", error.response.data.message);
      // setResponse(error.response.data.message);
    }
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
