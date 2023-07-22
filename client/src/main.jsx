import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Route from "./Routers/Route.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Provider/AuthProvider";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={Route} />
			<Toaster />
		</AuthProvider>
	</React.StrictMode>
);
