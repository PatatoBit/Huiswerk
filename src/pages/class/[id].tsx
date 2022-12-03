import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Class() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <div>ID: {id}</div>
      <Link href="/">Home</Link>
    </>
  );
}

export default Class;
