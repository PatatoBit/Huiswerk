import { doc, onSnapshot } from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { db } from "../../lib/firebase";

function Class() {
  const [students, setStudents] = useState([]);

  const router = useRouter();
  const { id } = router.query;

  onSnapshot(doc(db, "class", "ZXVC"), (doc) => {
    console.log(doc.data()?.students);
    setStudents(doc.data()?.students);
  });

  return (
    <>
      <div>ID: {id}</div>
      <Link href="/">Home</Link>

      {students.map((student: any) => (
        <div key={student.id}>
          <h1>{student.name}</h1>
          <h2>{student.done.toString()}</h2>
        </div>
      ))}
    </>
  );
}

export default Class;
