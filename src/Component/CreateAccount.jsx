import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase-config";

const CreateAccount = () => {
  const [guideData, setGuideData] = useState({});
  const addGuide = async () => {
    try {
      const docRef = await addDoc(collection(db, "Guides"), guideData);
      console.log(
        "Document written with ID: ",
        docRef.id,
        "Document written :",
        docRef
      );
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const formChange = (e) => {
    // console.log(e);
    setGuideData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const FormSubmit = (event) => {
    event.preventDefault();
    console.log(guideData);
    addGuide();
  };
  return (
    <div>
      <div className="w-[400px] mx-auto">
        <br />
        <h4 className=" mt-3 text-xl text-center">Create Guide</h4>
        <br />
        <form
          id="create-form "
          className=""
          onChange={formChange}
          onSubmit={FormSubmit}
        >
          <div className="flex justify-between  ">
            <label htmlFor="title">Guide Title</label>
            <input
              type="text"
              name="title"
              required
              className="p-0 bg-slate-300"
            />
          </div>
          <div className="flex justify-between mt-2 ">
            <label htmlFor="content">Guide Content</label>
            <textarea
              name="content"
              className=" bg-slate-300"
              required
            ></textarea>
          </div>
          <div className="flex justify-center mt-2">
            <button className="center p-2 bg-blue-200">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
