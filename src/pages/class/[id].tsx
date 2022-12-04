import { doc, onSnapshot } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../../components/layout/page";
import { db } from "../../lib/firebase";

const Student = styled("div")<{ done: boolean }>`
  display: flex;
  flex-direction: row;
  padding: 1rem 2rem 1rem 2rem;
  background: #d9d9d9;
  color: ${(props) => (props.done ? "#358847" : "#3d3d3d")};
  font-weight: 600;
  border-radius: 0.4rem;
  border: 2px solid #3d3d3d;
`;

function Class() {
  const [name, setName] = useState("");
  const [students, setStudents] = useState([]);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const unsub = onSnapshot(doc(db, "class", id as string), (doc) => {
        console.log(doc.data()?.students);
        setName(doc.data()?.name);
        setStudents(doc.data()?.students);
      });
      return () => unsub();
    }
  }, [id]);

  return (
    <Layout title={name}>
      <div className="max-w-2xl">
        <div className="w-full">
          <h1 className="p-2 text-2xl font-bold">{name}</h1>

          {students && (
            <div className="grid grid-cols-2 gap-2 bg-kleren sm:grid-cols-3 md:grid-cols-4">
              {students.map(
                (student: { id: string; name: string; done: boolean }) => (
                  <Student done={student.done} key={student.id}>
                    <h1 className="w-full text-center text-2xl">
                      {student.name}
                    </h1>
                  </Student>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Class;
