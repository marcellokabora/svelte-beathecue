import { error } from '@sveltejs/kit';
import { collection, getDocs, limit, query } from "firebase/firestore";
import { db } from "../firebase";
export async function load({ }: any) {
    const querySnapshot = await getDocs(query(collection(db, "event"), limit(3)));
    if (querySnapshot) {
        return {
            events: querySnapshot.docs.map(doc => doc.data())
        }
    }
    throw error(404, 'Not found');
}