import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Joining/Login";
import UserProfile from "../Pages/User/UserProfile/UserProfile";
import Colleges from "../Pages/Colleges/Colleges";
import Admission from "../Pages/Admission/Admission";
import MyCollege from "../Pages/MyCollege/MyCollege";
import NotFoundPage from "../Pages/ErrorPage/404";

const Route = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		errorElement: <NotFoundPage />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/colleges",
				element: <Colleges />,
			},
			{
				path: "/admission",
				element: <Admission />,
			},
			{
				path: "/my-college",
				element: <MyCollege />,
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
