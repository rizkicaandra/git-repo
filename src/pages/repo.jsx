import { Row } from "antd";
import Navbar from "components/navbar";

const Repo = ({ repos }) => {
  return (
    <>
      <Navbar />
      <Row
        gutter={{ xs: 8, sm: 16, md: 22, lg: 30 }}
        className="repos container"
      >
        <h2>asdasdsa</h2>
      </Row>
    </>
  );
};

export default Repo;
