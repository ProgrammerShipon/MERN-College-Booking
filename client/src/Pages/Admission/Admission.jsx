import React from "react";
import useColleges from "../../hooks/useColleges";

const Admission = () => {
	const { collegesData, collegeLoading, collegeRefetch } = useColleges();

	console.log("collegesData -> ", collegesData);

	return (
		<div>
			<h1> This is a Admission page {collegesData.length} </h1>
		</div>
	);
};

export default Admission;
