import React from "react";
import ThreeClg from "./ThreeClg/ThreeClg";
import Banner from "./Banner/Banner";
import GalleryImg from "./GalleryImg/GalleryImg";
import ResearchPaper from "./ResearchPaper/ResearchPaper";
import FeedbackClg from "./FeedbackClg/FeedbackClg";

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

			<hr />

			<FeedbackClg />
		</>
	);
};

export default Home;
