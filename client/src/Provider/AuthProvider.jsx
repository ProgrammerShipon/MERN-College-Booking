import React, { createContext, useEffect, useState } from "react";
import {
	GoogleAuthProvider,
	getAuth,
	onAuthStateChanged,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const [authLoading, setAuthLoading] = useState(true);
	const [user, setUser] = useState(null);
	const auth = getAuth(app);

	const googleProvider = new GoogleAuthProvider();

	const googleLogin = () => {
		return signInWithPopup(auth, googleProvider);
	};

	const logOut = () => {
		return signOut(auth);
	};

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
			console.log("currentUser -> ", currentUser);
			setUser(currentUser);
			setAuthLoading(false);
		});

		return () => {
			console.log("unSubscribe");
			return unSubscribe();
		};
	}, []);

	console.log("user -> ", user);

	const authInfo = {
		user,
		authLoading,
		googleLogin,
		logOut,
	};

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
