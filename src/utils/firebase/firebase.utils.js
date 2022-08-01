import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDVC-7pj3hASlcr_Swf2UlUJgTEE8slpTk',
  authDomain: 'brand-clothing-db.firebaseapp.com',
  projectId: 'brand-clothing-db',
  storageBucket: 'brand-clothing-db.appspot.com',
  messagingSenderId: '895230848402',
  appId: '1:895230848402:web:783c5bc55394df6a95e54b',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth();
//create account for user authenticated by Google account
export const signInWithGooglePopup = async () =>
  await signInWithPopup(auth, provider);

export const db = getFirestore();

//create user inside database
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = { displayName: '' }
) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);
  if (!userSnapShot.exists()) {
    const { email, displayName } = userAuth;
    const createAt = Date();
    await setDoc(userDocRef, {
      displayName,
      email,
      createAt,
      ...additionalInformation,
    });
  }
  return userDocRef;
};

//create account for user authenticated by email
export const createUserWithEmail = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
//sign in with email and password
export const signInWithEmail = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
//sign out
export const logOut = async () => await signOut(auth);
//event handler for authState, when state changed (sign in, sign up, log out), trigger the callback.
export const authStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

//
export const addCollectionAndDocument = async (collectionKey, objectToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log('done');
};

export const getCategoriesAndProducts = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
};
