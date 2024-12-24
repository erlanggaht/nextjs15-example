import axios from "axios";

const createAxiosInstance = (baseURL: string) => axios.create({baseURL})

const axiosBJ = createAxiosInstance(process.env.NEXT_PUBLIC_API_BJ || '');

export { axiosBJ };
