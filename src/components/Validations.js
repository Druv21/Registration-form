import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  studentno: Yup.string().required("Required"),
  branch: Yup.string().required("Required"),
  section: Yup.string().required("Required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone No. is not valid")
    .required("Required"),
  residence: Yup.string().required("Required"),
});
export const emailvalidation = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
});
