import Link from "next/link";
import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/page";
import { GetClasses } from "../../lib/data";

function Index() {
  const [classes, setClasses] = useState([
    {
      id: "Loading",
      data: {
        name: "Loading",
        students: [{ name: "Pat", done: true }],
      },
    },
  ]);

  useEffect(() => {
    GetClasses().then((data) => setClasses(data));
  }, []);

  return (
    <Layout title="Dashboard">
      <>
        {classes && (
          <>
            {/* {classes.map((reptile) => (
              <li>{reptile}</li>
            ))} */}

            <div className="grid grid-cols-2 gap-2 bg-kleren sm:grid-cols-3 md:grid-cols-4">
              {classes.map((c) => (
                <Link href={"/class/" + c.id} key={c.id}>
                  <div className="box">
                    <h1 className="font-semi-bold text-3xl">{c.data.name}</h1>
                    <h1>
                      {
                        c.data.students.filter(
                          (student) => student.done == true
                        ).length
                      }
                      {" / "}
                      {c.data.students.length}
                    </h1>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </>
    </Layout>
  );
}

export default Index;
