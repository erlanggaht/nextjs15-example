export type TypeDataUsers = {
  users: {
    id: number;
    firstName: string;
    lastName: string;
    address: {
      city: string;
      country: string;
    };
    age: number;
  }[];
};

export type TypeDataUserById = {
  id: number | string;
  firstName: string;
  lastName: string;
  address: {
    city: string;
    country: string;
  };
  age: number;
  phone: string;
  email: string;
};
