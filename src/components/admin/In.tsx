import React from "react";
import { SignOut } from "../../lib/auth";

function In() {
  return (
    <>
      <h1>Logged in! </h1>
      <h1>Show dashboard here</h1>

      <button
        className="mt-2 rounded-md bg-[#F35B04] px-8 py-3 text-xl font-semibold"
        onClick={SignOut}
      >
        <div className="text-[#ffffff]">Log out</div>
      </button>
    </>
  );
}

export default In;
