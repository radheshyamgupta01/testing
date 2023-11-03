import React from "react";
import "./Sign.css";
function Sign() {
  return (
    <div className="sign-in">
      <div></div>
      <form>
        <label className="font-serif  text-red-600">user name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="email"></input>
        <label>Password</label>
        <button>Ragister</button>
      </form>
    </div>
  );
}

export default Sign;
