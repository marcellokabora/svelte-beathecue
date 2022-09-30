import { error } from '@sveltejs/kit';
import { getAuth } from "firebase/auth";
import { doc, collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

export async function load({ params }: any) {
    const docSnap = await getDoc(doc(db, "event", params.id));
    if (docSnap) {
        return {
            event: docSnap.data()
        }
    }
    throw error(404, 'Not found');
}