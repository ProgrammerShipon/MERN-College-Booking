import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Joining/Login";
import UserProfile from "../Pages/User/UserProfile/UserProfile";

const Route = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/profile",
				element: <UserProfile />,
			},
		],
	},
]);

export default Route;
