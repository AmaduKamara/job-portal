import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "100px auto",
  borderColor: "#33cdde",
};

const LoadingSpinner = ({ loading }) => {
  return (
    <ClipLoader
      color='#33cdde'
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};

export default LoadingSpinner;
