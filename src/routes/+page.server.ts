import { error } from '@sveltejs/kit';
import { getAuth } from "firebase/auth";
import { doc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export async function load({ }: any) {
    const querySnapshot = await getDocs(collection(db, "event"));
    if (querySnapshot) {
        return {
            user: await getAuth().currentUser,
            events: querySnapshot.docs.map(doc => doc.data())
        }
    }
    throw error(404, 'Not found');
}