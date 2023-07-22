import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";

const SocialLogin = () => {
	const { user, googleLogin, logOut } = useContext(AuthContext);

	const googleHandle = () => {
		console.log("google Handle");
		googleLogin()
			.then((result) => console.log("User Login -> ", result))
			.catch((err) => console.log(err.message));
	};

	return (
		<>
			<button
				onClick={() => googleHandle()}
				type="button"
				className="mx-1 transition duration-300 h-12 w-12 rounded-full bg-slate-100 hover:bg-slate-300 text-white shadow-[0_4px_9px_-4px_#3b71ca]"
			>
				<FcGoogle className="text-3xl w-full" />
			</button>

			<button
				type="button"
				className="mx-1 transition duration-300 h-12 w-12 rounded-full bg-slate-100 hover:bg-slate-300 uppercase leading-normal text-gray-900 shadow-[0_4px_9px_-4px_#3b71ca]"
			>
				<FaGithub className="text-3xl w-full" />
			</button>
		</>
	);
};

export default SocialLogin;
