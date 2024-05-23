import { app } from './Firebase.jsx';
import { getDatabase, ref, get } from 'firebase/database';

export const fetchData = async (headerData,setData) => {
    let data = [];
    const db = getDatabase(app);
    const dbRef = ref(db, "project/");
    try {
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        data = Object.values(snapshot.val());
        let smartphonesData = [], audioData = [], cameraData = [];
        
        smartphonesData = data.filter(item => ["smartphones", "laptops", "tablets"].includes(item.section));
        audioData = data.filter(item => ["Audio", "Sounds"].includes(item.section));
        cameraData = data.filter(item => !["smartphones", "laptops", "tablets", "Audio", "Sounds"].includes(item.section));
        let like = 0;
        for(let i = 0; i < data.length; i++){
          if(data[i].liked === true)like++;
        }
        let header = {
          like: like,
          addCart:headerData.addCart,
          cartTotalPrice: headerData.cartTotalPrice
        };
        setData({header: header});

        let fetchedData = {
          smartphone:smartphonesData,
          audio:audioData,
          camera:cameraData
        }

        return fetchedData;

      } else {
        console.error("Data not found");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

export const fetchFromLikeProducts = async ()=>{
    let data = [];
    const db = getDatabase(app);
    const dbRef = ref(db, "like-products/");
    try {
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        data = Object.values(snapshot.val());
        let fetchedData = data;

        return fetchedData;

      } else {
        console.error("Data not found");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }

}
