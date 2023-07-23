import React from "react";

const CollegeCard = ({ college, showCollegeDetails }) => {
	return (
		<div className="max-w-xs rounded overflow-hidden shadow-lg bg-white m-4">
			<img
				src={college.image}
				alt={college.name}
				className="w-full h-48 object-cover"
			/>
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">{college.name}</div>
				<p className="text-gray-700 text-base">Rating: {college.rating}</p>
				<p className="text-gray-700 text-base">
					Admission Date: {college.admissionDate}
				</p>
				<p className="text-gray-700 text-base">
					Research Count: {college.researchNumber}
				</p>
				<button
					onClick={() => showCollegeDetails(college)}
					className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				>
					Details
				</button>
			</div>
		</div>
	);
};

export default CollegeCard;
