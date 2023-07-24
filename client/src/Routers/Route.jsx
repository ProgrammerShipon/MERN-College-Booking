import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Joining/Login";
import UserProfile from "../Pages/User/UserProfile/UserProfile";
import Colleges from "../Pages/Colleges/Colleges";
import Admission from "../Pages/Admission/Admission";
import MyCollege from "../Pages/MyCollege/MyCollege";
import NotFoundPage from "../Pages/ErrorPage/404";
import TDetails from "../Pages/Home/ThreeClg/TDetails";
import useAxiosCall from "../hooks/useAxiosCall";
import AdmissionFrom from "../Pages/Admission/AdmissionFrom";
import Registration from "../Pages/Joining/Registration";

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
				path: "/registration",
				element: <Registration />,
			},
			{
				path: "/profile",
				element: <UserProfile />,
			},
			{
				path: "/three-college/:id",
				loader: ({ params }) =>
					fetch(`http://localhost:6060/three-college/${params?.id}`),
				element: <TDetails />,
			},
			{
				path: "/admission/:id",
				loader: ({ params }) =>
					fetch(`http://localhost:6060/admission-form/${params?.id}`),
				element: <AdmissionFrom />,
			},
		],
	},
]);

export default Route;
