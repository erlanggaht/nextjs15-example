import * as Yup from "yup";

const initialValues = () => {
  return {
    firstName: "",
    lastName: "",
    age: "",
  }
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

export const UsersFormikCreate = {
  initialValues,
  validationSchema,
};
