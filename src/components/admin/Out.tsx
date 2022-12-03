import React, { useState } from "react";

import { SignIn } from "../../lib/auth";

function Out() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <form className="flex flex-col">
        <input
          type="text"
          className="my-2 mt-4 rounded-md px-6 py-4"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="text"
          className="my-2 rounded-md px-6 py-4"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />

        <button
          className="mt-2 rounded-md bg-[#F35B04] px-8 py-3 text-xl font-semibold"
          onClick={(e) => SignIn(e, email, password)}
        >
          <div className="text-[#ffffff]">Login</div>
        </button>
      </form>
    </>
  );
}

export default Out;
