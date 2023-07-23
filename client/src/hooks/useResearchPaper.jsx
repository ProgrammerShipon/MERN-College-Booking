import { useQuery } from "@tanstack/react-query";
import useAxiosCall from "./useAxiosCall";
import useUserAuth from "./useUserAuth";

const useResearchPaper = () => {
	const { axiosCall } = useAxiosCall();
	const { authLoading } = useUserAuth();

	const {
		data: researchPaperData = [],
		isLoading: researchPaperLoading,
		refetch: researchPaperRefetch,
	} = useQuery({
		queryKey: ["researchPaper"],
		enabled: !authLoading,
		queryFn: async () => {
			const res = await axiosCall("research-papers");
			return res.data;
		},
	});

	return { researchPaperData, researchPaperLoading, researchPaperRefetch };
};

export default useResearchPaper;
