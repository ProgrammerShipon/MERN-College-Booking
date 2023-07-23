import React from "react";
import ThreeClg from "./ThreeClg/ThreeClg";
import Banner from "./Banner/Banner";
import GalleryImg from "./GalleryImg/GalleryImg";
import ResearchPaper from "./ResearchPaper/ResearchPaper";

const Home = () => {
	return (
		<>
			<Banner />

			<hr />

			<ThreeClg />

			<hr />

			<GalleryImg />

			<hr />

			<ResearchPaper />
		</>
	);
};

export default Home;
