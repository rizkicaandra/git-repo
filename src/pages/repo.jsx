import { Row, Col } from "antd";
import Navbar from "components/navbar";
import Account from "components/account";
import RepoItem from "components/repo-items";

const Repo = ({ repos }) => {
  return (
    <>
      <Navbar />
      <Row
        gutter={{ xs: 8, sm: 16, md: 22, lg: 30 }}
        // span={24}
        className="repos "
        align="center"
        justify="center"
      >
        <Col span={12} align="center" justify="center">
          <Account user={repos[0]?.owner?.login} />
        </Col>
        <Col span={12}>
          <RepoItem />
        </Col>
      </Row>
    </>
  );
};

export default Repo;
