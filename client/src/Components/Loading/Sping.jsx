import React from "react";

const Sping = () => {
	const spin = (
		<div
			className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-purple-600 rounded-full"
			role="status"
			aria-label="loading"
		>
			<span className="sr-only">Loading...</span>
		</div>
	);
	return { spin };
};

export default Sping;
