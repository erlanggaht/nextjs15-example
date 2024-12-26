import axios from "axios";
import { axiosBJ } from ".";

type TParams<T> = {
  [name: string]: T;
};

type TBody<T> = {
  [name: string]: T;
};

const UsersAPI = {
  getAll: async (params?: TParams<string | number>) => {
    try {
      const response = await axiosBJ.get("/users", {
        params: {
          ...params,
        },
      });
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw error;
      }
    }
  },
  getById: async (id: number, params?: TBody<string | number>) => {
    try {
      const response = await axiosBJ.get(`/users/${id}`, {
        params: {
          ...params,
        },
      });
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw error;
      }
    }
  },
  create: async (
    body: TBody<string | number>,
    params?: TBody<string | number>
  ) => {
    try {
      const response = await axiosBJ.post("/users/add", body, {
        params: {
          ...params,
        },
      });
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw error;
      }
    }
  },
  update: async (
    id: number | string,
    body: TBody<string | number>,
    params?: TBody<string | number>
  ) => {
    try {
      const response = await axiosBJ.put(`/users/${id}`, body, {
        params: {
          ...params,
        },
      });
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw error;
      }
    }
  },
};

export default UsersAPI;
