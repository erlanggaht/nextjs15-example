import axios from "axios";
import { axiosBJ } from ".";

type TypeParams<T> = {
  [name: string]: T;
};

type TypeBody<T> = {
  [name: string]: T;
};

const UsersAPI = {
  getAll: async (params?: TypeParams<string | number>) => {
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
  getById: async (id: number, params?: TypeParams<string | number>) => {
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
  update: async (
    id: number | string,
    body: TypeBody<string | number>,
    params?: TypeBody<string | number>
  ) => {
    try {
      const response = await axiosBJ.put(`/userssads/${id}`, body, {
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
