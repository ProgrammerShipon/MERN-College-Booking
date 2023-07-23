import { useQuery } from "@tanstack/react-query";
import useAxiosCall from "./useAxiosCall";
import useUserAuth from "./useUserAuth";

const useClgFeedback = () => {
	const { axiosCall } = useAxiosCall();
	const { authLoading } = useUserAuth();

	const {
		data: feedbackClgData = [],
		isLoading: feedbackClgLoading,
		refetch: feedbackClgRefetch,
	} = useQuery({
		queryKey: ["feedbackClg"],
		enabled: !authLoading,
		queryFn: async () => {
			const res = await axiosCall("college-feedback");
			return res.data;
		},
	});

	return { feedbackClgData, feedbackClgLoading, feedbackClgRefetch };
};

export default useClgFeedback;
