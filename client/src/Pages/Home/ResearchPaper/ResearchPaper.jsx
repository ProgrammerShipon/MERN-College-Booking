import React from "react";
import useResearchPaper from "../../../hooks/useResearchPaper";

const ResearchPaper = () => {
	const RP = useResearchPaper();

	console.log("RP -> ", RP);

	return (
		<div>
			<h1> ResearchPaper </h1>
		</div>
	);
};

export default ResearchPaper;
