import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

import Article from "./components/Article";
import Form from "./components/Form";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col gap-14 bg-red bg-mobile px-5 py-14 font-poppins duration-300 sm:px-28 lg:flex-row lg:items-center lg:justify-center lg:gap-10">
      <Article />
      <Form />
    </main>
  );
}
