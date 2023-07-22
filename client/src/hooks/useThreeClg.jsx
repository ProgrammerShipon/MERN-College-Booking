import { useQuery } from "@tanstack/react-query";
import useAxiosCall from "./useAxiosCall";
import useUserAuth from "./useUserAuth";

const useThreeClg = () => {
	const { axiosCall } = useAxiosCall();
	const { authLoading } = useUserAuth();

	const {
		data: threeCLg = [],
		isLoading: threeClgLoading,
		refetch: threeClgRefetch,
	} = useQuery({
		queryKey: ["threeClg"],
		enabled: !authLoading,
		queryFn: async () => {
			const res = await axiosCall("/three-college");
			console.log("three clg res -> ", res);
			return res.data;
		},
	});

	return { threeCLg, threeClgLoading, threeClgRefetch };
};

export default useThreeClg;
