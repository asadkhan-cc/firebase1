import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { Button, notification, Space } from "antd";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [signInFormData, setSignInFormData] = useState({});
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        signInFormData.Email,
        signInFormData.Password
      );
      user.then((eve) => {
        console.log(eve);
      });

      openNotificationWithIcon("sucess");
      navigate("Home");
    } catch (error) {
      openNotificationWithIcon("error", error.message);
      console.log(error);
    }
  };
  const formChange = (e) => {
    // console.log(e);
    setSignInFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const FormSubmit = (event) => {
    event.preventDefault();
    console.log(signInFormData);
    register();
  };
  const openNotificationWithIcon = (type, message = "SignUp Sucessfull") => {
    notification[type]({
      message: message,
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
    });
  };
  return (
    <div>
      <div id="modal-signup" className="w-[300px] mx-auto">
        <div className="modal-content">
          <br />
          <h4 className=" mt-3 text-xl text-center">Sign up</h4>
          <br />
          <form onChange={formChange} onSubmit={FormSubmit}>
            <div className="flex justify-between gap-2 m-3 ">
              <label htmlFor="Email">Email</label>
              <input name="Email" type="text" className="p-0 bg-blue-50" />
            </div>
            <div className="flex justify-between gap-2 m-3">
              <label htmlFor="Password">Password</label>
              <input name="Password" type="text" className="p-0 bg-blue-50" />
            </div>
            <div className="flex justify-center">
              <button className="center p-2 bg-blue-200">Signup</button>
            </div>{" "}
            <br />
            <p className="text-center">
              Already have an account{" "}
              <Link className="text-blue-500 hover:text-blue-700" to={"/"}>
                Login here...
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
