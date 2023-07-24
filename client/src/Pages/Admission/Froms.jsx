import { useForm } from "react-hook-form";
import useUserAuth from "../../hooks/useUserAuth";

const Froms = ({ clg }) => {
	const { user } = useUserAuth();
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(clg);
		const candidate = {
			...data,
		};
		console.log("candidate -> ", candidate);
		console.log("user -> ", user);
	};

	return (
		<>
			<form
				className="max-w-md mx-auto bg-white p-5 rounded-lg shadow-md"
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className="mb-4">
					<label
						className="block text-gray-700 font-bold mb-2"
						htmlFor="candidateName"
					>
						Candidate Name
					</label>
					<input
						{...register("CandidateName", { required: true })}
						defaultValue={user?.displayName}
						className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="candidateName"
						type="text"
						placeholder="John Doe"
						required
					/>
				</div>
				<div className="mb-4">
					<label
						className="block text-gray-700 font-bold mb-2"
						htmlFor="candidateEmail"
					>
						Candidate Email
					</label>
					<input
						{...register("CandidateEmail", { required: false })}
						defaultValue={user?.email}
						className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="candidateEmail"
						type="email"
						placeholder="john.doe@example.com"
						required
					/>
				</div>

				<div className="mb-4">
					<label
						className="block text-gray-700 font-bold mb-2"
						htmlFor="subject"
					>
						Subject
					</label>
					<input
						{...register("CandidateSubject", { required: true })}
						className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="subject"
						type="text"
						placeholder="Computer Science"
						required
					/>
				</div>
				<div className="mb-4">
					<label
						className="block text-gray-700 font-bold mb-2"
						htmlFor="candidatePhone"
					>
						Candidate Phone Number
					</label>
					<input
						{...register("CandidateNumber", { required: true })}
						className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="candidatePhone"
						type="tel"
						placeholder="123-456-7890"
						required
					/>
				</div>
				<div className="mb-4">
					<label
						className="block text-gray-700 font-bold mb-2"
						htmlFor="address"
					>
						Address
					</label>
					<input
						{...register("CandidateAddress", { required: true })}
						className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="address"
						type="text"
						placeholder="123 Main St"
						required
					/>
				</div>
				<div className="mb-4">
					<label
						className="block text-gray-700 font-bold mb-2"
						htmlFor="dateOfBirth"
					>
						Date of Birth
					</label>
					<input
						{...register("CandidateDateOfBirth", { required: true })}
						className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="dateOfBirth"
						type="date"
						required
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 font-bold mb-2" htmlFor="image">
						Image
					</label>
					<input
						{...register("CandidateImage", { required: true })}
						className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="image"
						type="url"
						required
					/>
				</div>
				<button
					type="submit"
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				>
					Submit
				</button>
			</form>
		</>
	);
};

export default Froms;
