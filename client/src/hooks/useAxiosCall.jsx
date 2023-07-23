import axios from "axios";

const axiosCall = axios.create({
	baseURL: "https://college-booking.vercel.app/",
});

const useAxiosCall = () => {
	return { axiosCall };
};

export default useAxiosCall;
