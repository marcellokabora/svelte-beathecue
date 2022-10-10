import { getAuth } from "firebase/auth";
import '$db/firebase'
export async function handle({ event, resolve }: any) {
    event.locals.user = await getAuth().currentUser;
    const response = await resolve(event);
    return response;
}
