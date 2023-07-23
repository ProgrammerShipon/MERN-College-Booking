import { Link } from "react-router-dom";
import useThreeClg from "../../../hooks/useThreeClg";

const ThreeClg = () => {
	const { threeCLg, threeClgLoading, threeClgRefetch } = useThreeClg();

	console.log("threeCLg -> ", threeCLg);

	return (
		<>
			<section className="text-gray-600 body-font">
				<div className="container px-5 py-16 mx-auto">
					<div className="flex flex-col text-center w-full mb-20">
						<h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
							Top Colleges
						</h1>
						<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
							Explore our list of top colleges known for their exceptional
							educational standards
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
						{threeCLg &&
							threeCLg?.map((clg, i) => {
								return (
									<div key={i} className="border flex flex-col justify-between">
										<div className="h-full flex flex-col items-center bg-slate-100">
											<img
												alt="team"
												className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
												src={clg?.image}
											/>
											<div className="w-full px-4">
												<h2 className="title-font font-medium text-lg text-gray-900">
													{clg?.name}
												</h2>
												<h3 className="text-gray-500 mb-3">
													<span> Admission Date : </span> {clg?.admissionDates}
												</h3>

												<div className="">
													<h2 className="font-bold mb-2 mt-3"> Events: </h2>
													{clg?.events &&
														clg?.events.map((event, j) => (
															<span
																key={j}
																className="py-1 text-sm inline-block"
															>
																<h3 className="font-medium bg-slate-200  p-1 mr-2">
																	{" "}
																	{event?.name},
																</h3>
															</span>
														))}
												</div>

												<div className="">
													<h2 className="font-bold mb-2 mt-3">
														{" "}
														Research History:{" "}
													</h2>
													<div className="flex gap-1 flex-wrap">
														{clg?.researchHistory &&
															clg?.researchHistory.map((rh, z) => (
																<span
																	key={z}
																	className="font-medium bg-slate-200  p-1 mr-2"
																>
																	{rh?.title}
																</span>
															))}
													</div>
												</div>

												<div className="">
													<h2 className="font-bold mb-2 mt-3"> Sports: </h2>
													{clg?.sports &&
														clg?.sports.map((sp) => (
															<>
																<span className="font-medium bg-slate-200  p-1 mr-2">
																	{sp?.name}
																</span>
															</>
														))}
												</div>
											</div>
										</div>
										<Link
											to={`/three-college/${clg?._id}`}
											className="w-full bg-blue-400 transition duration-300 py-2 text-center text-gray-800 hover:bg-blue-600 hover:text-gray-200 mt-6"
										>
											{" "}
											Details{" "}
										</Link>
									</div>
								);
							})}
					</div>
				</div>
			</section>
		</>
	);
};

export default ThreeClg;
