import Input from "./Input";

export default function Form() {
  return (
    <section className="flex flex-col gap-6 lg:w-2/5">
      <section className="rounded-lg bg-blue px-14 py-4 text-center text-white shadow-2xl">
        <p>
          <strong>Try it free 7 days</strong> then $20/mo. thereafter
        </p>
      </section>
      <form className="lg:2/4 flex flex-col items-center justify-start gap-4 rounded-lg bg-white px-5 py-7 lg:px-8 lg:py-9">
        <Input placeholder="First Name" />
        <Input placeholder="Last Name" />
        <Input placeholder="Email Address" />
        <Input placeholder="Password" />
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
      </form>
    </section>
  );
}
