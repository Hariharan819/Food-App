import { useRouteError } from "react-router-dom"; // hooks provide by react-router-dom
const Error = () => {
  const err = useRouteError();
  // console.log(err);
  return (
    <div className="flex flex-col justify-between items-center m-64 ">
      <h2>Oops❗❗❗</h2>
      <h2>Something Wrong❗❗❗</h2>
      <h2>
        {err.status}: {err.statusText} - {err.data}
      </h2>
    </div>
  );
};
export default Error;
