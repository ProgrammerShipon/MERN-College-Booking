import image2 from "../../../assets/SliderImg/slider-2.jpg";

const Banner = () => {
	return (
		<>
			<div className="relative">
				<img
					src={image2}
					className="absolute inset-0 object-cover w-full h-full"
					alt=""
				/>
				<div className="relative bg-gray-900 bg-opacity-50">
					<div className="px-4 py-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
						<div className="flex flex-col items-center justify-between xl:flex-row">
							<div className="text-center mx-auto space-y-6">
								<h1 className="md:text-4xl lg:text-5xl font-bold text-slate-100 ">
									{" "}
									PS-Admission is A College Booking Platform{" "}
								</h1>
								<p className="text-gray-200">
									{" "}
									Campus Connect is a cutting-edge college booking platform
									designed to simplify the process of finding the best college
									for students.{" "}
								</p>

								<a
									href="#_"
									class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group"
								>
									<span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
									<span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
									<span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
										Find College
									</span>
									<span class="absolute inset-0 border-2 border-white rounded-full"></span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Banner;
