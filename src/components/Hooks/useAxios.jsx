import axios from "axios";

export const AxiosSecure = axios.create({
    baseURL : "http://localhost:3000"
}) 
const useAxios = () => {
    return AxiosSecure
};

export default useAxios;