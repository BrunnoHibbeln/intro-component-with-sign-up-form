import { useField } from "formik";
import IconError from "../images/icon-error.svg";
import { useEffect, useState } from "react";

export default function Input({ inputProps, ...props }) {
  const [field, meta] = useField(props);
  const [inputClasses, setInputClasses] = useState("border");

  function handleInputError() {
    useEffect(() => {
      if (meta.touched && meta.error) {
        setInputClasses("border-2 border-red");
      } else {
        setInputClasses("border border-grayish-blue");
      }
    });
  }

  return (
    <section className="relative w-full">
      <input
        className={`w-full rounded-md ${inputClasses} p-5 font-semibold focus:border-2 lg:px-8 lg:py-3`}
        {...field}
        {...props}
      ></input>

      {handleInputError()}

      {meta.touched && meta.error ? (
        <>
          <img
            className="absolute right-8 top-5 lg:top-3.5"
            src={IconError}
          ></img>
          <p className="pt-2 text-right text-xs font-semibold italic text-red">
            {meta.error}
          </p>
        </>
      ) : null}
    </section>
  );
}
