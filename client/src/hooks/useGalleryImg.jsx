import { useQuery } from "@tanstack/react-query";
import useAxiosCall from "./useAxiosCall";
import useUserAuth from "./useUserAuth";

const useGalleryImg = () => {
	const { axiosCall } = useAxiosCall();
	const { authLoading } = useUserAuth();

	const {
		data: galleryImgData = [],
		isLoading: galleryImgLoading,
		refetch: galleryImgRefetch,
	} = useQuery({
		queryKey: ["galleryImg"],
		enabled: !authLoading,
		queryFn: async () => {
			const res = await axiosCall("/gallery-image");
			return res.data;
		},
	});

	return { galleryImgData, galleryImgLoading, galleryImgRefetch };
};

export default useGalleryImg;
