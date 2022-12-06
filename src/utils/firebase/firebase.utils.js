import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
    // createAuthUserWithEmailAndPassword
} from 'firebase/auth';
import { 
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCyG0zvSMSPsKeaQU4EDyeJyLRhrzSOA30",
    authDomain: "crwn-clothing-db-6b602.firebaseapp.com",
    projectId: "crwn-clothing-db-6b602",
    storageBucket: "crwn-clothing-db-6b602.appspot.com",
    messagingSenderId: "956905483554",
    appId: "1:956905483554:web:78296652145a4120db897b"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
      prompt: "select_account",
  });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {} ) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        }catch(error) {
            console.log('Error creating user', error.message)
        }
    
        return userDocRef;
     }
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password ) return;

    return await signInWithEmailAndPassword(auth, email, password);
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password ) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};