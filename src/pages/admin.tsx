import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import In from "../components/admin/In";
import Out from "../components/admin/Out";
import Layout from "../components/layout/page";
import { auth } from "../lib/firebase";

function Admin() {
  const [user] = useAuthState(auth);

  return (
    <Layout title="Admin">
      <>
        <h1 className="text-center text-7xl font-bold">Huiswerk</h1>

        {user ? <In /> : <Out />}
      </>
    </Layout>
  );
}

export default Admin;
