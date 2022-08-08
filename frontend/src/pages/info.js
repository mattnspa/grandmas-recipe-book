export const InfoPage = ({ darkTheme }) => {
  return (
    <div className={(darkTheme ? "bg-dark text-light" : "bg-light").concat(" ","vh-100")} >
      <p>Info page</p>
    </div>
  );
}