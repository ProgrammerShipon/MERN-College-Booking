import { useQuery } from "@tanstack/react-query";
import useAxiosCall from "./useAxiosCall";
import useUserAuth from "./useUserAuth";

const useColleges = () => {
	const { axiosCall } = useAxiosCall();
	const { authLoading } = useUserAuth();

	const {
		data: collegesData = [],
		isLoading: collegeLoading,
		refetch: collegeRefetch,
	} = useQuery({
		queryKey: ["colleges"],
		enabled: !authLoading,
		queryFn: async () => {
			const res = await axiosCall("/colleges");
			return res.data;
		},
	});

	return { collegesData, collegeLoading, collegeRefetch };
};

export default useColleges;
