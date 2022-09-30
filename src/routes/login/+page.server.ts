import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
/** @type {import('./$types').Actions} */

export const actions = {
    login: async ({ request }: any) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                window.open('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

        return { success: true };
    },
    register: async (event: any) => {
        // TODO register the user
    }
};
