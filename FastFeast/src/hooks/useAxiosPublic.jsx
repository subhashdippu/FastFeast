import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://backend-for-food-app.onrender.com",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;