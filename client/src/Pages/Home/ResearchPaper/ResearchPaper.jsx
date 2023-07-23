import React from "react";
import useResearchPaper from "../../../hooks/useResearchPaper";
import { Link } from "react-router-dom";

const ResearchPaper = () => {
	const { researchPaperData, researchPaperLoading, researchPaperRefetch } =
		useResearchPaper();

	console.log("RP -> ", researchPaperData);

	return (
		<>
			<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
				<div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
					<p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
						Research College
					</p>
					<p className="text-base text-gray-700 md:text-lg">
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque laudantium.
					</p>
				</div>
				<div className="grid gap-10 mx-auto lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-4">
					{/* {researchPaperData?.map((rp) => (
						<div key={rp?._id} className="flex flex-col items-center">
							<img
								className="object-cover w-20 h-20 mb-2 rounded-full shadow"
								src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
								alt="Person"
							/>
							<div className="flex flex-col items-center">
								<p className="text-lg font-bold">Oliver Aguilerra</p>
								<p className="text-sm text-gray-800">Product Manager</p>
							</div>
						</div>
					))} */}
				</div>
				<div className="flex flex-wrap -m-4">
					{researchPaperData &&
						researchPaperData.map((RP) => (
							<div className="p-4 md:w-1/3">
								<div className="h-full flex flex-col justify-between border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
									<img
										className="lg:h-60 md:h-36 w-full object-cover object-center"
										src={RP?.authors[0]?.image}
										alt="blog"
									/>
									<div className="p-6">
										<h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
											{RP?.date}
										</h2>

										<h1 className="title-font text-lg font-medium text-gray-900 mb-3">
											{RP?.title}
										</h1>

										<p className="mb-4">
											<span> Abstract: </span>
											{RP?.abstract}{" "}
										</p>

										<div>
											<h3>Author - </h3>
											<h4> Name: {RP?.authors[0]?.name} </h4>
										</div>
									</div>

									<div className="">
										<Link
											to={RP?.link}
											className="bg-blue-500 block text-center py-3 text-white"
										>
											{" "}
											Recommended{" "}
										</Link>
									</div>
								</div>
							</div>
						))}
				</div>
			</div>
		</>
	);
};

export default ResearchPaper;
