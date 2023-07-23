import React from "react";

const CollegeDetailsModal = ({ college, closeModal }) => {
	return (
		<div
			className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-75 bg-gray-900"
			onClick={closeModal}
		>
			<div className="max-w-md p-8 bg-white rounded-lg shadow-lg">
				<img
					src={college.image}
					alt={college.name}
					className="w-full h-48 object-cover mb-4"
				/>
				<div className="font-bold text-xl mb-2">{college.name}</div>
				<p className="text-gray-700 text-base">Rating: {college.rating}</p>
				<p className="text-gray-700 text-base">
					Admission Date: {college.admissionDate}
				</p>
				<p className="text-gray-700 text-base">
					Research Count: {college.researchNumber}
				</p>
				<h3 className="font-bold mt-4">Events</h3>
				<ul className="list-disc ml-6">
					{college.events.map((event, index) => (
						<li key={index}>{event}</li>
					))}
				</ul>
				<h3 className="font-bold mt-4">Sports Facilities</h3>
				<ul className="list-disc ml-6">
					{college.sportsFacilities.map((facility, index) => (
						<li key={index}>{facility}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default CollegeDetailsModal;
