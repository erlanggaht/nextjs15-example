import { axiosBJ } from ".";

type TypeParams<T> = {
    [name:string]: T
}

const UsersAPI = {
  getAll: async (params?: TypeParams<string|number>) => {
    try {
      const response = await axiosBJ.get("/users", {
        params: {
          ...params,
        },
      });
      return response;
    } catch (error) {
      throw new Error(error)
    }
  },
  getById: async ( id: number, params?: TypeParams<string|number>) => {
    try {
      const response = await axiosBJ.get(`/users/${id}`, {
        params: {
          ...params,
        },
      });
      return response;
    } catch (error) {
      throw new Error(error)
    }
  },
};

export default UsersAPI;
