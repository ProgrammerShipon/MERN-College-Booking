import React, { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import { FaEye } from "react-icons/fa";
import useUserAuth from "../../hooks/useUserAuth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Registration = ({ fm }) => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const [showPw, setShowPw] = useState(true);
	const [disable, setDisable] = useState(true);
	const {} = useUserAuth();

	const registrationHandle = (event) => {
		// event.preventDefault();

		// const form = event.target;
		// const name = form.fullName.value;
		// const email = form.email.value;
		// const photoUrl = form.photoUrl.value;
		// const password = form.M_password.value;

		console.log("events -> ", event);
		console.log("errors -> ", errors);

		// if (password.length < 6) {
		// 	toast(`The Password is less than 6 characters ${password.length} `);
		// 	return;
		// }

		// registrationUser(email, password)
		// 	.then((result) => {
		// 		toast("Account Create Success");

		// 		const logUer = result.user;
		// 		const newUserData = {
		// 			displayName: name,
		// 			photoURL: photoUrl || null,
		// 		};

		// 		updateProfile(logUer, newUserData);

		// 		navigate("/");

		// 		form.reset();
		// 	})
		// 	.catch();
	};

	return (
		<div className="bg-gray-100 min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<h2 className="text-center text-3xl font-extrabold text-gray-900 uppercase">
					create a new account
				</h2>
				<p className="mt-2 text-center text-sm text-gray-600">
					Or &nbsp;
					<a
						href="/login"
						className="font-medium text-indigo-600 hover:underline hover:text-indigo-400"
					>
						Login to your account
					</a>
				</p>
			</div>

			<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
				<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
					<form
						onSubmit={handleSubmit(registrationHandle)}
						className="space-y-6"
					>
						<div>
							<label
								htmlFor="fullName"
								className="block text-sm font-medium text-gray-700"
							>
								Full Name
							</label>
							<div className="mt-1">
								<input
									{...register("fullName", { required: true })}
									id="fullName"
									name="fullName"
									type="text"
									autoComplete="FullName"
									className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
									required
								/>
							</div>
						</div>

						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-700"
							>
								Email address
							</label>
							<div className="mt-1">
								<input
									{...register("email", { required: true })}
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									required
									className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								/>
							</div>
						</div>

						<div>
							<label
								htmlFor="photoUrl"
								className="block text-sm font-medium text-gray-700"
							>
								Photo URL <small>( Optional )</small>
							</label>
							<div className="mt-1">
								<input
									{...register("photoUrl", { required: true })}
									id="photoUrl"
									name="photoUrl"
									type="text"
									autoComplete="current-photoUrl"
									className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								/>
							</div>
						</div>

						<div>
							<label
								htmlFor="password"
								className="block text-sm font-medium text-gray-700"
							>
								Password
							</label>
							<div className="mt-1 relative">
								<input
									{...register("password", { required: true })}
									id="password"
									type={showPw ? "password" : "text"}
									required
									className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								/>
								<FaEye
									onClick={() => setShowPw(!showPw)}
									className="absolute right-3 cursor-pointer top-1/2 -translate-y-1/2"
								/>
							</div>
						</div>

						<div className="flex items-center justify-between">
							<div className="flex items-center">
								<input
									onClick={() => setDisable(!disable)}
									id="remember_me"
									name="remember_me"
									type="checkbox"
									className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
								/>
								<label
									htmlFor="remember_me"
									className="ml-2 block text-sm text-gray-900"
								>
									Remember me
								</label>
							</div>

							<div className="text-sm">
								<a
									href="#"
									className="font-medium text-indigo-600 hover:underline hover:text-indigo-400"
								>
									Forgot your password?
								</a>
							</div>
						</div>

						<div>
							<button
								type="submit"
								disabled={disable ? true : false}
								className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
									disable
										? "bg-indigo-400 hover:bg-indigo-400"
										: "bg-indigo-600 hover:bg-indigo-700"
								} `}
							>
								Registration
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Registration;
