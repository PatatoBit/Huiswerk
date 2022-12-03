import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <div className="absolute p-2">
      <Link href="/">
        <h1 className="text-3xl font-bold underline">Huiswerk</h1>
      </Link>
    </div>
  );
}

export default Nav;
