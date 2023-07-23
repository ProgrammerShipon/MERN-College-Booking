import React, { useState } from "react";
import CollegeCard from "./CollegeCard";
import CollegeDetailsModal from "./CollegeDetailsModal";
import useColleges from "../../hooks/useColleges";

const Colleges = () => {
	const { collegesData, collegeLoading, collegeRefetch } = useColleges();

	const [selectedCollege, setSelectedCollege] = useState(null);

	const showCollegeDetails = (college) => {
		setSelectedCollege(college);
	};

	const closeModal = () => {
		setSelectedCollege(null);
	};

	return (
		<div className="flex flex-wrap justify-center">
			{collegesData.map((college, index) => (
				<CollegeCard
					key={index}
					college={college}
					showCollegeDetails={showCollegeDetails}
				/>
			))}
			{selectedCollege && (
				<CollegeDetailsModal
					college={selectedCollege}
					closeModal={closeModal}
				/>
			)}
		</div>
	);
};

export default Colleges;
