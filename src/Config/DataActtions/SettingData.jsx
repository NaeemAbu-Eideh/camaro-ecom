import { app } from '../Firebase.jsx';
import { getDatabase, ref, set, push } from 'firebase/database';

export const setCart = async(newData)=>{
    const db = getDatabase(app);
    const dbRef = push(ref(db, 'cart/'));
    set(dbRef, newData).then(()=>{}).catch((error)=>{console.log('error sending data')});
};