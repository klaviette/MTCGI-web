import { getDatabase, ref, get, child } from "firebase/database";

async function fetchVal() {
  const db = getDatabase();
  const dbRef = ref(db);

  console.log("test");
  try {
    const snapshot = await get(child(dbRef, "pkmn_index_raw/9-20/val"));
    if (snapshot.exists()) {
      console.log("Value:", snapshot.val()); // should log 1
      return snapshot.val();
    } else {
      console.log("No data available");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchVal();
