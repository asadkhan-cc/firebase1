import React from "react";

const Account = (props) => {
  const title = props.data.title;
  const desc = props.data.desc;
  return (
    <div>
      <div className="">
        <div className=" center-align">
          <h4>{title}</h4>
          <br />
          <div className="account-details">{desc}</div>
        </div>
      </div>
    </div>
  );
};

export default Account;
