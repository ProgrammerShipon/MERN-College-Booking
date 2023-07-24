import axios from "axios";

const axiosCall = axios.create({
	baseURL: "http://localhost:6060/",
});

const useAxiosCall = () => {
	return { axiosCall };
};

export default useAxiosCall;
