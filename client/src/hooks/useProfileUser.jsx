import { useQuery } from "@tanstack/react-query";
import useAxiosCall from "./useAxiosCall";
import useUserAuth from "./useUserAuth";

const useProfileUser = () => {
	const { axiosCall } = useAxiosCall();
	const { user, authLoading } = useUserAuth();
	const {
		data: profileUserData = [],
		isLoading: profileUserLoading,
		refetch: profileUserRefetch,
	} = useQuery({
		queryKey: ["profileUser"],
		enabled: user?.email && !authLoading,
		queryFn: async () => {
			const res = await axiosCall(`/profile-users/${user?.email}`);
			return res.data;
		},
	});

	return { profileUserData, profileUserLoading, profileUserRefetch };
};

export default useProfileUser;
