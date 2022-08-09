import BarLoader from "react-spinners/BarLoader";

export const Loading = () => {
  return (
    <div class="d-flex justify-content-center align-items-center vh-100" >
      <BarLoader color="teal" />
    </div>
  );
}