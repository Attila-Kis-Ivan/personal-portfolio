import { useRouteError } from "react-router-dom";
import { Error } from "./ErrorPage.styles";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <Error>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </Error>
  );
};

export default ErrorPage;