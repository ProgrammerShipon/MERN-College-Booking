import { Link } from "react-router-dom";
import errorImage from "../../assets/Error/404-laptop.png";

const NotFoundPage = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<img src={errorImage} alt="404 Error" className="w-64 mb-4" />
			<div className="text-6xl font-bold text-red-600">404</div>
			<div className="text-2xl text-gray-800">Page not found</div>
			<Link
				to="/"
				className="mt-4 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700"
			>
				Back to Home
			</Link>
		</div>
	);
};

export default NotFoundPage;
