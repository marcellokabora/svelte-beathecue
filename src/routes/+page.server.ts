import { error } from '@sveltejs/kit';
import { getAuth } from "firebase/auth";
import { doc, collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export async function load({ params }: any) {
    const querySnapshot = await getDocs(collection(db, "event"));
    // const docRef = doc(db, "event", params.id);
    // const docSnap = await getDoc(docRef);

    if (querySnapshot) {
        querySnapshot.forEach((doc) => {
            // console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
            // console.log(JSON.stringify(doc.data()));

        });
        return {
            user: getAuth().currentUser,
            events: querySnapshot.docs.map(doc => doc.data())
        }
    }
    throw error(404, 'Not found');
}