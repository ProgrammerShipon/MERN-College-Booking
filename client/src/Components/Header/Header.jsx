import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useEffect, useRef, useState } from "react";
import useUserAuth from "../../hooks/useUserAuth";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef(null);
	const { authLoading, user, logOut } = useUserAuth();
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

	const logOutHandle = () => {
		logOut().then((result) => console.log("logout Success", result));
	};

	const userItemStyle =
		"text-lg p-1 transition duration-300 hover:bg-slate-50 w-full text-left";
	const profileMenu = (
		<>
			<Link className={userItemStyle} to="/profile">
				{" "}
				Profile{" "}
			</Link>
			<button className={userItemStyle} onClick={() => logOutHandle()}>
				Logout
			</button>
		</>
	);

	const menuToggle = () => {
		setIsOpen(!isOpen);
	};

	console.log("User -> ", user);
	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};

		window.addEventListener("click", handleOutsideClick);

		return () => {
			window.removeEventListener("click", handleOutsideClick);
		};
	}, []);

	return (
		<>
			<header className="text-gray-600 bg-slate-50 shadow body-font">
				<div className="mc relative flex flex-wrap py-4 flex-col md:flex-row items-center">
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

					<div>
						{user ? (
							<div>
								<button
									onClick={() => menuToggle()}
									className="md:ml-3 w-12 h-12 transition duration-300 bg-slate-200 hover:bg-slate-300 shadow-md rounded-full overflow-hidden hover:shadow-xl flex justify-center items-center"
								>
									<LazyLoadImage
										src={user?.photoURL}
										className="w-full h-full"
									/>
								</button>

								<div
									className={`z-10 absolute right-0 top-[calc(100%)] bg-slate-200 p-1 rounded shadow-lg transition duration-300 transform origin-top ${
										isOpen ? "opacity-1 scale-y-100 " : "opacity-0 scale-y-0"
									}`}
								>
									<nav className="flex flex-col items-start text-base justify-start min-w-[150px]">
										{profileMenu}
									</nav>
								</div>
							</div>
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
