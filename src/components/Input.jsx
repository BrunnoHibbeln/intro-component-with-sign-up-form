export default function Input({ placeholder }) {
  return (
    <input
      className="w-full rounded-md border border-grayish-blue p-5 font-semibold lg:px-8 lg:py-3"
      placeholder={placeholder}
      type="text"
    ></input>
  );
}
