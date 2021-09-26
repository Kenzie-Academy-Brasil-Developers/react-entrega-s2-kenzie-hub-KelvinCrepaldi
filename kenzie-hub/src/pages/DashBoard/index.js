import { useHistory } from "react-router-dom";

const DashBoard = ({ autenticated }) => {
  const history = useHistory();
  
  if (!autenticated) {
    history.push("/");
  }

  return (
    <>
      <div>
        <h1>sadasd</h1>
      </div>
    </>
  );
};

export default DashBoard;
