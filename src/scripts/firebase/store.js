import {
  addDoc,
  collection,
  doc,
  getDoc,
  getFirestore,
  setDoc,
  updateDoc,
 } from 'https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js';
import { app } from './app.js';
import { getErrorMessage } from './errors.js';

const db = getFirestore(app);

export const FireStore = {
  add: async (id, coll, data) => {
    try {
      if (!id) {
        const ref = await addDoc(collection(db, coll), data);
        return { success: true, id: ref.id };
      }

      const ref = doc(db, coll, id);
      const snapshot = await getDoc(ref);

      if (snapshot.exists()) {
        await updateDoc(ref, data);
      } else {
        await setDoc(ref, data);
      }
      return { success: true };
    } catch (error) {
      console.error(error);
      return { success: false, error: getErrorMessage(error.code) };
    }
  },
  getDocById: async (id, coll) => {
    try {
      const ref = doc(db, coll, id);
      const snapshot = await getDoc(ref);

      if (snapshot.exists()) {
        return { success: true, data: {id: snapshot.id, ...snapshot.data()} };
      } else {
        return { success: false, error: "Usuário não encontrado." };
      }
    } catch (error) {
      console.error(error);
      return { success: false, error: getErrorMessage(error.code) };
    }
  },
}