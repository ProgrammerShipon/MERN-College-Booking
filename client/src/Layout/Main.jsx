import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const Main = ({ children }) => {
	return (
		<>
			<Header />

			<main> {children} </main>

			<Footer />
		</>
	);
};

export default Main;
