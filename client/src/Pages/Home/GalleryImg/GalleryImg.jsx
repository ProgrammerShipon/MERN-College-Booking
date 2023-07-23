import React from "react";
import useGalleryImg from "../../../hooks/useGalleryImg";

const GalleryImg = () => {
	const { galleryImgData, galleryImgLoading, galleryImgRefetch } =
		useGalleryImg();

	return (
		<>
			<div className="mc px-5 py-4 md:py-16 lg:px-32 lg:pt-16 ">
				<div className="flex flex-col text-center w-full mb-20">
					<h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
						{" "}
						Colleges Gallery{" "}
					</h1>
					<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
						{" "}
						Welcome to our Colleges Gallery, a curated collection of diverse
						educational institutions from around the world
					</p>
				</div>

				<div className="-m-1 flex flex-wrap md:-m-2">
					<div className="flex w-1/2 flex-wrap">
						<div className="w-1/2 p-1 md:p-2">
							<img
								alt="gallery"
								className="block h-full w-full rounded-lg object-cover object-center"
								src={galleryImgData[0]?.image}
							/>
						</div>
						<div className="w-1/2 p-1 md:p-2">
							<img
								alt="gallery"
								className="block h-full w-full rounded-lg object-cover object-center"
								src={galleryImgData[1]?.image}
							/>
						</div>
						<div className="w-full p-1 md:p-2">
							<img
								alt="gallery"
								className="block h-full w-full rounded-lg object-cover object-center"
								src={galleryImgData[3]?.image}
							/>
						</div>
					</div>
					<div className="flex w-1/2 flex-wrap">
						<div className="w-full p-1 md:p-2">
							<img
								alt="gallery"
								className="block h-full w-full rounded-lg object-cover object-center"
								src={galleryImgData[4]?.image}
							/>
						</div>
						<div className="w-1/2 p-1 md:p-2">
							<img
								alt="gallery"
								className="block h-full w-full rounded-lg object-cover object-center"
								src={galleryImgData[5]?.image}
							/>
						</div>
						<div className="w-1/2 p-1 md:p-2">
							<img
								alt="gallery"
								className="block h-full w-full rounded-lg object-cover object-center"
								src={galleryImgData[2]?.image}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default GalleryImg;
