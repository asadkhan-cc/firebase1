import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { auth } from "../firebase-config";
const Layout = () => {
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (Currentusesr) => {
    setUser(Currentusesr);
  });

  const logout = async () => {
    console.log(auth, "BEFORE LOGOUT");
    await signOut(auth);
  };
  return (
    <>
      <nav className="flex justify-evenly   bg-emerald-200 p-4">
        <NavLink to={"HOME"}>HOME</NavLink>
        <NavLink to={"About"}>About</NavLink>
        {/* <NavLink to={"CreateAccount"}>Create Admin Account</NavLink> */}
        {user ? (
          <>
            <button className="bg-emerald-300 rounded px-1" onClick={logout}>
              Logout
            </button>{" "}
            {user.email}
          </>
        ) : (
          <>
            <NavLink to={""}>LogIn</NavLink>
            <NavLink to={"SignUp"}>SignUp</NavLink>
          </>
        )}
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
