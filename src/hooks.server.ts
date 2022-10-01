import { getAuth } from "firebase/auth";

export async function handle({ event, resolve }: any) {
    event.locals.user = await getAuth().currentUser;
    const response = await resolve(event);
    return response;
}
