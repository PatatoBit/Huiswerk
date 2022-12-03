import React from "react";
import { SignOut } from "../../lib/auth";

function In() {
  return (
    <>
      <h1>Logged in! </h1>
      <h1>Show dashboard here</h1>

      <button className="button" onClick={SignOut}>
        <div className="text-[#ffffff]">Log out</div>
      </button>
    </>
  );
}

export default In;
