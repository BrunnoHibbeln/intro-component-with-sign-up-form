import * as Yup from "yup";
import { Formik, Form as FormikForm, useField } from "formik";
import Input from "./Input";
import { useState } from "react";

export default function Form() {
  const [field, meta] = useField();
  const [inputProps, setInputProps] = useState("border");

  const handleInputError = () => {
    if (meta.touched && meta.error) {
      setInputProps("border-2 border-red");
    } else null;
  };

  return (
    <section className="flex flex-col gap-6 lg:w-2/5">
      <section className="rounded-lg bg-blue px-14 py-4 text-center text-white shadow-2xl">
        <p>
          <strong>Try it free 7 days</strong> then $20/mo. thereafter
        </p>
      </section>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required("First Name cannot be empty"),
          lastName: Yup.string().required("Last Name cannot be empty"),
          email: Yup.string()
            .email("Looks like this is not an email")
            .required("Email cannot be empty"),
          password: Yup.string().required("Password cannot be empty"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise((r) => setTimeout(r, 500));
          setSubmitting(false);
        }}
      >
        <FormikForm className="relative flex flex-col items-center justify-start gap-4 rounded-lg bg-white px-5 py-7 lg:px-8 lg:py-9">
          <Input
            inputProps={inputProps}
            name="firstName"
            type="text"
            placeholder="First Name"
          />
          <Input name="lastName" type="text" placeholder="Last Name" />
          <Input name="email" type="email" placeholder="Email Address" />
          <Input name="password" type="password" placeholder="Password" />

          <button
            className="w-full rounded-md bg-green p-5 text-center font-medium text-white shadow-2xl duration-300 hover:brightness-110 lg:p-3"
            type="submit"
          >
            CLAIM YOUR FREE TRIAL
          </button>
          <small className="font-xs px-5 text-center text-grayish-blue">
            By clicking the button, you are agreeing to our
            <strong className="text-red"> Terms and Services</strong>
          </small>
        </FormikForm>
      </Formik>
    </section>
  );
}
