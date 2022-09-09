import { signInWithEmailAndPassword } from "firebase/auth";
import "antd/dist/antd.css";
import { Button, notification, Space } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";

const Login = () => {
  const [logInFormData, setLogInFormData] = useState({});
  const navigate = useNavigate();

  const openNotificationWithIcon = (type, message = "Login Sucessfull") => {
    notification[type]({
      message: message,
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
    });
  };
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        logInFormData.Email,
        logInFormData.Password
      );
      console.log(user);
      openNotificationWithIcon("success");
      navigate("home");
    } catch (error) {
      console.error(error);
      openNotificationWithIcon("error", error.message);
    }
  };
  const formChange = (e) => {
    setLogInFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const formSubmit = (event) => {
    event.preventDefault();
    // console.log(logInFormData);
    login();
  };
  return (
    <div className="w-[300px] mx-auto">
      {" "}
      <br />
      <h4 className=" mt-3 text-xl text-center">login</h4>
      <br />
      <form onSubmit={formSubmit} onChange={formChange}>
        <div className="flex justify-between gap-2 m-3 ">
          <label htmlFor="Email">Email</label>
          <input name="Email" type="text" className="p-0 bg-blue-50" />
        </div>
        <div className="flex justify-between gap-2 m-3">
          <label htmlFor="Password">Password</label>
          <input name="Password" type="text" className="p-0 bg-blue-50" />
        </div>
        <div className="flex justify-center">
          <button type="submit" className="center p-2 bg-blue-200">
            Login
          </button>
        </div>
        <br />
        <p className="text-center">
          don't have an account | Create one Now{" "}
          <Link className="text-blue-500 hover:text-blue-700" to={"/SignUp"}>
            Signup here...
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
