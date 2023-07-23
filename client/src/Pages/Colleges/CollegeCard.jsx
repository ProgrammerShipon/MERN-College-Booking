import { Link } from "react-router-dom";

const CollegeCard = ({ college, showCollegeDetails }) => {
	return (
		<div className="max-w-xs flex flex-col justify-between rounded overflow-hidden shadow-lg bg-white m-4">
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
					Research Count: {college?.research?.length}
				</p>
			</div>

			<div className="flex gap-2">
				<button
					onClick={() => showCollegeDetails(college)}
					className="mt-4 transition duration-300 block w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				>
					Details
				</button>
				<Link
					// onClick={() => showCollegeDetails(college)}
					to={`/admission/${college._id}`}
					className="mt-4 transition duration-300 block w-full text-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				>
					Admission
				</Link>
			</div>
		</div>
	);
};

export default CollegeCard;
