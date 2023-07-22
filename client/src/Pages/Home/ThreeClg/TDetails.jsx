import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import useAxiosCall from "../../../hooks/useAxiosCall";

const TDetails = () => {
	const params = useParams();
	const loaderData = useLoaderData();

	console.log("params -> ", params);
	console.log("Loader Date -> ", loaderData);

	return (
		<>
			<section className="text-gray-600 body-font">
				<div className="container px-5 py-24 mx-auto flex flex-wrap">
					<div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
						<img
							alt="feature"
							className="object-cover object-center h-full w-full"
							src="https://dummyimage.com/460x500"
						/>
					</div>
					<div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
						<div className="flex flex-col mb-10 lg:items-start items-center">
							<div>
								<h1 className="text-2xl font-bold">
									{" "}
									<span className="font-semibold"> College Name: </span>
									{loaderData?.name}{" "}
								</h1>
								<p>
									{" "}
									<span className="font-semibold">
										{" "}
										Admission Dates :{" "}
									</span>{" "}
									{loaderData?.admissionDates}{" "}
								</p>
							</div>
						</div>
						<div className="flex flex-col mb-10 lg:items-start items-center">
							<div>
								<div className="border bg-slate-50 px-3 py-1 mb-4">
									<h2 className="font-bold mb-2"> Events: </h2>
									{loaderData?.events &&
										loaderData?.events.map((event) => (
											<div
												key={event?.id}
												className="text-sm bg-slate-100 mb-3 shadow-md border px-3 py-2"
											>
												<h3>
													{" "}
													<span className="font-medium">Event Name:</span>{" "}
													{event?.name}{" "}
												</h3>

												<p>
													{" "}
													<span className="font-medium">Location:</span>{" "}
													{event?.location}{" "}
												</p>

												<p>
													{" "}
													<span className="font-medium">Date:</span>{" "}
													{event?.date}{" "}
												</p>

												<p>
													{" "}
													<span className="font-medium">Description:</span>{" "}
													{event?.description}{" "}
												</p>
											</div>
										))}
								</div>

								<div className="border bg-slate-50 px-3 py-1 mb-4">
									<h2 className="font-bold mb-2"> Research History : </h2>
									{loaderData?.researchHistory &&
										loaderData?.researchHistory.map((rh) => (
											<div
												key={rh?.id}
												className="text-sm bg-slate-100 mb-3 shadow-md border px-3 py-2"
											>
												<h3>
													{" "}
													<span className="font-medium">Title:</span>{" "}
													{rh?.title}{" "}
												</h3>

												<p>
													<span className="font-medium">Publication Data:</span>{" "}
													{rh?.publicationData}
												</p>

												<p>
													<span className="font-medium">Description:</span>{" "}
													{rh?.description}
												</p>

												<p>
													<span className="font-medium">Authors :</span>
													{rh?.authors.map((at) => (
														<span key={at}> {at} , </span>
													))}
												</p>
											</div>
										))}
								</div>

								<div className="border bg-slate-50 px-3 py-1 mb-4">
									<h2 className="font-bold mb-2"> Sports: </h2>
									{loaderData?.sports &&
										loaderData?.sports.map((sp) => (
											<div
												key={sp?.id}
												className="text-sm bg-slate-100 mb-3 shadow-md border px-3 py-2"
											>
												<h3>
													<span className="font-medium">Name: </span>
													{sp?.name}
												</h3>

												<p>
													<span className="font-medium">Coach:</span>{" "}
													{sp?.coach}
												</p>

												<p>
													<span className="font-medium">Description:</span>{" "}
													{sp?.description}
												</p>
											</div>
										))}
								</div>
							</div>
						</div>
						<div className="flex flex-col mb-10 lg:items-start items-center">
							<div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									className="w-6 h-6"
									viewBox="0 0 24 24"
								>
									<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
									<circle cx={12} cy={7} r={4} />
								</svg>
							</div>
							<div className="flex-grow">
								<h2 className="text-gray-900 text-lg title-font font-medium mb-3">
									Neptune
								</h2>
								<p className="leading-relaxed text-base">
									Blue bottle crucifix vinyl post-ironic four dollar toast vegan
									taxidermy. Gastropub indxgo juice poutine.
								</p>
								<a className="mt-3 text-indigo-500 inline-flex items-center">
									Learn More
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										className="w-4 h-4 ml-2"
										viewBox="0 0 24 24"
									>
										<path d="M5 12h14M12 5l7 7-7 7" />
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default TDetails;
