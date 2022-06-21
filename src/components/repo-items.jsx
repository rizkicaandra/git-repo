import { Pagination, Descriptions, Row, Col } from "antd";
import { useState } from "react";
import axios from "axios";

const RepoItem = ({ setRepos, repos, setLoading, total }) => {
  const [current, setCurrent] = useState(1);
  const onChange = async (page) => {
    try {
      setCurrent(page);
      const textFromStorage = localStorage.getItem("user");
      setLoading(true);
      const { data } = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_GIT_API_URL}/users/${textFromStorage}/repos?per_page=3&page=${page}`,
      });
      setRepos(data);
      setLoading(false);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };
  return (
    <Row
      gutter={{ xs: 8, sm: 16, md: 22, lg: 30 }}
      align="center"
      justify="center"
      className="repo__items"
    >
      <Col
        span={16}
        align="center"
        justify="center"
        className="repo__items-data"
      >
        {repos.map((repo, index) => (
          <Descriptions
            title={repo?.name}
            layout="vertical"
            className="repo__items-description"
            key={index}
          >
            <Descriptions.Item label="Language">
              {repo?.language}
            </Descriptions.Item>
            <Descriptions.Item label="Size">{repo?.size}</Descriptions.Item>
            <Descriptions.Item label="Visibility">
              {repo?.visibility}
            </Descriptions.Item>
          </Descriptions>
        ))}
      </Col>
      <Col span={8} align="center" justify="center">
        <Pagination
          defaultPageSize={3}
          defaultCurrent={1}
          current={current}
          onChange={onChange}
          total={total}
          size="small"
        />
      </Col>
    </Row>
  );
};

export default RepoItem;
