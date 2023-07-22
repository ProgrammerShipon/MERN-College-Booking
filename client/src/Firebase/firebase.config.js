// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyC_I1rN0ZK4w-XOnHh2FNv67kVDsjeHWio",
	authDomain: "mern-college-booking.firebaseapp.com",
	projectId: "mern-college-booking",
	storageBucket: "mern-college-booking.appspot.com",
	messagingSenderId: "801217605087",
	appId: "1:801217605087:web:e04e23b27e1dfa364d686a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
