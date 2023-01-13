import React from "react";
import google from "../images/google.png";
import fb from "../images/fb.png";
import twitter from "../images/twitter.jpeg";

const Login = () => {
  return (
    <div className="w-full mt-9">
      <div className="w-[90%] m-auto">
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-5 rounded-full input-border"
        />
        <input
          type="password"
          placeholder="password"
          className="w-full p-5 mt-4 rounded-full input-border"
        />
        <button
          className="w-full py-4 rounded-full mt-9 text-white font-bold"
          style={{ backgroundColor: "#E70B89", borderRadius: "" }}
        >
          Login
        </button>
        <p
          className="text-sm font-light float-right my-3"
          style={{ color: "#E70B89", opacity: 1, cursor: "pointer" }}
        >
          Forgot Password?
        </p>
      </div>
      <div className="my-3">
        <div className="w-full flex items-center my-6 justify-center">
          <p className="text-sm font-light" style={{ color: "#9D9D9D" }}>
            or login with
          </p>
        </div>
        <div className="w-full my-2 flex items-center justify-evenly">
          <div
            className="rounded-full w-[50px] h-[50px] p-2"
            style={{ border: "1px solid #eeee", cursor: "pointer" }}
          >
            <img src={google} alt="google" />
          </div>
          <div
            className="rounded-full w-[50px] h-[50px] p-2"
            style={{ border: "1px solid #eeee", cursor: "pointer" }}
          >
            <img src={fb} style={{ backgroundColor: "#fff" }} alt="facebook" />
          </div>
          <div
            className="rounded-full w-[50px] h-[50px] p-2"
            style={{ border: "1px solid #eeee", cursor: "pointer" }}
          >
            <img src={twitter} alt="twitter" />
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <p className="text-sm font-light my-5">
            Don’t have an account?
            <span
              style={{ color: "#E70B89", cursor: "pointer", marginLeft: "2px" }}
            >
              Create new now!
            </span>
          </p>
          <p className="text-sm font-light">
            By signing up, you are agree with our
            <span
              style={{
                color: "#E70B89",
                borderBottom: "1px solid #E70B89",
                cursor: "pointer",
                marginLeft: "2px",
              }}
            >
              Terms & Conditions
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
