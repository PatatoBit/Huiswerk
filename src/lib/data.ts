import { getDocs, query, collection } from "firebase/firestore";
import { db } from "./firebase";

interface ClassData {
  id: string;
  data: {
    name: string;
    students: Array<{
      name: string;
      done: boolean;
    }>;
  };
}

export async function GetClasses() {
  const q = query(collection(db, "class"));
  const querySnapshot = await getDocs(q);

  const data: ClassData[] = [];

  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, data: doc.data() as ClassData["data"] });
  });

  return await [...data];
}

export function ToggleStudent(collection: string, name: string) {
  return collection + name;
}
