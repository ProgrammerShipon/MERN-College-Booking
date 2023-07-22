import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Header = () => {
	const { user, logOut } = useContext(AuthContext);

	const navData = [
		{
			path: "/",
			name: "Home",
		},
		{
			path: "/colleges",
			name: "Colleges",
		},
		{
			path: "/admission",
			name: "Admission",
		},
		{
			path: "/my-college",
			name: "My College",
		},
	];
	const navItems = (
		<>
			{navData.map((route, i) => (
				<NavLink key={i} to={route?.path} className="hover:text-gray-900">
					{route?.name}
				</NavLink>
			))}
		</>
	);

	return (
		<>
			<header className="text-gray-600 bg-slate-50 shadow body-font">
				<div className="mc flex flex-wrap py-4 flex-col md:flex-row items-center">
					<div className="flex gap-1 items-center">
						<figure className="w-10 h-10">
							<LazyLoadImage
								className="w-full h-full object-center"
								src={logo}
							/>
						</figure>

						<a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
							<span className="ml-3 text-xl">PS-Admission</span>
						</a>
					</div>
					<nav className="md:ml-auto flex flex-wrap gap-3 items-center text-lg justify-center">
						{navItems}
					</nav>

					<div className="">
						{user ? (
							<button className="md:ml-3 w-12 h-12 transition duration-300 bg-slate-200 hover:bg-slate-300 shadow-md rounded-full flex justify-center items-center">
								@
							</button>
						) : (
							<Link to="/login">
								<button className="md:ml-3 py-3 px-4 transition duration-300 bg-slate-200 hover:bg-slate-300 shadow-md rounded-md  flex justify-center items-center">
									Login
								</button>
							</Link>
						)}
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
