import { app } from '../Firebase.jsx';
import { getDatabase, ref, update } from 'firebase/database';


export const updateValue = async (path, newValue) => {
  const database = getDatabase(app);
  const dbRef = ref(database, path);

  try {
    await update(dbRef, newValue);
    console.log("Value updated successfully");
  } catch (error) {
    console.error("Error updating value: ", error);
  }
};


