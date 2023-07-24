import React, { createContext, useEffect, useState } from "react";
import {
	GithubAuthProvider,
	GoogleAuthProvider,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
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

	const githubProvider = new GithubAuthProvider();
	const githubLogin = () => {
		console.log('Github login click')
		return signInWithPopup(auth, githubProvider);
	};

	const signIn = (email, password) => {
		setAuthLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const updateUserProfile = (namePhoto) => {
		return updateProfile(auth.currentUser, namePhoto);
	};

	const signUp = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
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
		githubLogin,
		signUp,
		updateUserProfile,
		logOut,
		signIn,
	};

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
