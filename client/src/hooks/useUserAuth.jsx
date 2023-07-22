import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useUserAuth = () => {
	const auth = useContext(AuthContext);

	return { ...auth };
};

export default useUserAuth;
