import { useField } from "formik";
import IconError from "../assets/icon-error.svg";

export default function Input({ inputProps, placeholder, ...props }) {
  const [field, meta] = useField(props);

  return (
    <section className="relative w-full">
      <input
        className={`w-full rounded-md ${inputProps} p-5 font-semibold lg:px-8 lg:py-3`}
        {...field}
        {...props}
      ></input>

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
