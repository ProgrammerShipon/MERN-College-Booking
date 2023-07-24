import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { toast } from "react-hot-toast";
import useUserAuth from "../../hooks/useUserAuth";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
	const [isError, setError] = useState("");
	const {
		user,
		authLoading,
		googleLogin,
		githubLogin,
		signUp,
		updateUserProfile,
		logOut,
		signIn,
	} = useUserAuth();
	const navigate = useNavigate();
	const location = useLocation();

	const from = location.state?.from?.pathname || "/profile";

	const saveDatabase = (result) => {
		console.log("saveDatabase -> ", result);
		const { displayName, email, photoURL, phoneNumber } = result;
		const saveDate = {
			displayName,
			email,
			photoURL,
			phoneNumber,
			education: [],
			address: null,
			gender: null,
			about: null,
			dateOfBirth: null,
		};

		console.log("saveDatabase saveDate -> ", saveDate);

		fetch("https://college-booking-programmershipon.vercel.app/users", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(saveDate),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data?.insertedId) {
					toast.success("Sign Up Success");
				} else {
					toast.success("Login Success");
				}

				setError(null);
				navigate(from, { replace: true });
			})
			.catch((err) => console.log(err));
	};

	const googleHandle = () => {
		googleLogin()
			.then((result) => {
				console.log("Google login -> ", result);

				saveDatabase(result?.user);

				// navigate(from, { replace: true });
			})
			.catch((error) => {
				setError(error.message);
			});
	};

	const githubHandle = () => {
		console.log("Github Handle");
		githubLogin()
			.then((result) => {
				console.log("Github login -> ", result);
				// navigate(from, { replace: true });

				saveDatabase(result?.user);
			})
			.catch((error) => {
				setError(error.message);
			});
	};

	return (
		<>
			<div className="bg-white mt-5 py-3 px-4 shadow sm:rounded-lg sm:px-10 max-w-md mx-auto">
				<div className="">
					<div className="my-5">
						<button
							onClick={googleHandle}
							className="flex justify-center items-center gap-4 w-full border border-green-500 p-5 py-3 text-green-500 text-center rounded-md shadow-md hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer"
						>
							<FaGoogle className="w-5 h-5" />
							<span> Continue With Google </span>
						</button>
					</div>
					<div className="my-5">
						<button
							onClick={githubHandle}
							className="w-full  flex justify-center items-center gap-4 border border-gray-500 p-5 py-3 text-gray-500 text-center rounded-md shadow-md hover:shadow-xl hover:scale-105  transition duration-300 cursor-pointer"
						>
							<FaGithub className="w-5 h-5" />
							<span> Continue With Github </span>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default SocialLogin;
