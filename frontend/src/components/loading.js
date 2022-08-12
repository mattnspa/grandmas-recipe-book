import BarLoader from "react-spinners/BarLoader";

export const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100" >
      <BarLoader color="teal" />
    </div>
  );
}