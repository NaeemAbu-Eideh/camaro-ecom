import { app } from '../Firebase';
import { getDatabase, ref, get } from 'firebase/database';

export const fetchData = async (headerData, saveData) => {
  const db = getDatabase(app);
  const dbRef = ref(db, "project/");
  try {
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      let datas = Object(snapshot.val());
      let smartphoneData=[], audioData=[],cameraData=[], like = 0, sections = {};

      for (let i in datas) {
        let entry = { key: [i], value: datas[i] };
        (['smartphones', 'laptops', 'tablets'].includes(datas[i].section)) ? smartphoneData.push(entry) :
        (['Audio', 'Sounds'].includes(datas[i].section)) ? audioData.push(entry) : cameraData.push(entry);
        if (datas[i].liked) like++;
      }

      let newHeader = {
        like: headerData.like + like,
        addCart: headerData.addCart, 
        cartTotalPrice: headerData.cartTotalPrice 
      };
      saveData({header: newHeader});

      sections={ smartphone: smartphoneData, audio: audioData, camera: cameraData };

      return sections;
      
      
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};


  export const fetchCartData = async (headerData,saveData) => {
    const db = getDatabase(app);
    const dbRef = ref(db, "cart/");
    let datas = [];
    try {
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        datas = Object(snapshot.val());
        let cartData = [], numberOfProducts=0, totalPrice=0;

        for (let i in datas) {
          cartData.push({key:[i], value:datas[i]});
          numberOfProducts+= datas[i].number_of_products;
          totalPrice += datas[i].total_price;
        }
          let newHeader = {
            like: headerData.like,
            addCart: headerData.addCart + numberOfProducts, 
            cartTotalPrice: headerData.cartTotalPrice + totalPrice 
          };
          saveData({header: newHeader});
        return cartData;
        
        
      } else {
        return [];
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
