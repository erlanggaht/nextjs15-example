import { TypeDataUserById } from "../ubah/[userId]/page";
import * as Yup from "yup";

const initialValues = (dataUserById: TypeDataUserById) => {
  return {
    firstName: dataUserById.firstName,
    lastName: dataUserById.lastName,
    age: dataUserById.age,
  };
};

const validationSchema = () => {
  return Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    age: Yup.number().typeError("must be number").required("Required"),
  });
};

export const UsersFormik = {
  initialValues,
  validationSchema,
};
