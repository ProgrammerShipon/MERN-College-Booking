import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Froms from "./Froms";

const AdmissionFrom = () => {
	const { id } = useParams();
	const ClgLoad = useLoaderData();

	console.log("ClgLoad -> ", ClgLoad);

	return (
		<div>
			<div className="relative flex flex-col-reverse py-16 lg:py-0 lg:flex-col">
				<div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-20 lg:max-w-screen-xl">
					<div className="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
						<Froms clg={ClgLoad} />
					</div>
				</div>
				<div className="inset-y-0 top-0 right-0 w-full max-w-xl px-4 mx-auto mb-6 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
					<img
						className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
						src={ClgLoad?.image}
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default AdmissionFrom;
