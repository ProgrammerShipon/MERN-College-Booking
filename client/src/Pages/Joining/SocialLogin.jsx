import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { toast } from "react-hot-toast";
import useUserAuth from "../../hooks/useUserAuth";
import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
	const [isError, setError] = useState("");
	const { user, authLoading, googleLogin, githubLogin } = useUserAuth();

	const googleHandle = () => {
		googleLogin()
			.then((result) => {
				toast("Google Login Success");
				navigate(from, { replace: true });
			})
			.catch((error) => {
				setError(error.message);
			});
	};

	const githubHandle = () => {
		githubLogin()
			.then((result) => {
				toast("Github Login Success");
				navigate(from, { replace: true });
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
