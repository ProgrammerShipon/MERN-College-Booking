import { createBrowserRouter } from "react-router-dom";

const Route = createBrowserRouter([
	{
		path: "/",
		element: <div className="text-red-600">Hello world!</div>,
	},
]);

export default Route;
