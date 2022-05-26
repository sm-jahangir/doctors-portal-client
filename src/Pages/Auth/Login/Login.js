import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex justify-center my-10">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-center mx-auto mb-10">Login!</h2>
          <form action="">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
              <span className="label-text-alt">Forget Password?</span>
            </div>
            <input
              type="submit"
              value="Login"
              className="input input-bordered w-full max-w-xs my-5 text-white bg-[#3A4256]"
            />
          </form>
          <p className="mx-auto">
            New to Doctors Portal?{" "}
            <Link className="text-primary" to="/register">
              Create New Account
            </Link>
          </p>
          <div className="flex flex-col w-full border-opacity-50">
            <div className="divider">OR</div>
          </div>
          <button class="btn btn-outline">CONTINUE WITH GOOGLE</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
