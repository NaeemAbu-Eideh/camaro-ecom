import { app } from '../Firebase';
import { getDatabase, ref, remove } from 'firebase/database';


export const deleteCartProduct = async(id)=>{
    const db = getDatabase(app);
    const dbRef = ref(db, id);
    await remove(dbRef);
}