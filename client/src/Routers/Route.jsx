import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

const Route = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{
				path: "/",
			},
		],
	},
]);

export default Route;
