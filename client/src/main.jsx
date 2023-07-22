import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Route from "./Routers/Route.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Provider/AuthProvider";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={Route} />
				<Toaster />
			</QueryClientProvider>
		</AuthProvider>
	</React.StrictMode>
);
