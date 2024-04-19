import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <section id="error-page"  className="h-[100vh] flex flex-col gap-12  justify-center">
      <h1 className="text-5xl font-semibold text-center">Oops!</h1>
      <p className="text-2xl text-center">Sorry, an unexpected error has occurred.</p>
      <p className="font-bold text-2xl text-center" >
        <i>{error.statusText || error.message}</i>
      </p>
    </section>
  );
}