import React, { useState } from "react";
import Account from "../Component/Account";
import CreateAccount from "../Component/CreateAccount";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

const Home = () => {
  const [guides, setGuides] = useState({});
  const data = {
    title: "GUIDE TItle",
    desc: "GUIDE DESC",
  };
  const getGuide = async () => {
    const collectionOfData = await getDocs(collection(db, "Guides"));
    collectionOfData.docs.forEach((dat) => {
      console.log(dat.data());
      setGuides((prev) => {
        dat.data();
      });
    });
    console.log(guides);
    // const querySnapshot = await getDoc(db, "Guides");

    // console.log(querySnapshot);
  };
  // const buttonhandeler = () => {
  //   getGuide()
  //     .then((res) => {
  //       console.log(res);
  //       setGuides(res);
  //     })
  //     .catch((err) => {
  //       console.log("error getting data", err);
  //     });
  // };

  return (
    <div>
      <button onClick={getGuide}>click</button>
      Home
      <CreateAccount />
      <Account data={data} />
    </div>
  );
};

export default Home;
