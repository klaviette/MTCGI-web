import { get, ref, child } from "firebase/database";
import { db } from '../firebase.js';

export default async function fetchDataset(path) {
  const dbRef = ref(db);
  try {
    const snapshot = await get(child(dbRef, path));
    if (!snapshot.exists()) return [];

    const raw = snapshot.val(); // object with push keys

    // Convert to array
    return Object.values(raw)
      .map(obj => ({ date: obj.date, value: obj.val }))
      .sort((a, b) => new Date(a.date) - new Date(b.date));
  } catch (error) {
    console.error("Error fetching dataset:", error);
    return [];
  }
}
