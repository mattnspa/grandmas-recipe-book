import BarLoader from "react-spinners/BarLoader";

export const Loading = () => {
  return (
    <div data-testid={'barloader-container'} className="d-flex justify-content-center align-items-center vh-100" >
      <BarLoader data-testid={'barLoader'} color="teal" />
    </div>
  );
}