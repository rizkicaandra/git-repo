import { Row, Col, Spin } from "antd";
import Navbar from "components/navbar";
import Account from "components/account";
import RepoItem from "components/repo-items";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Repo = ({ setRepos, repos, setLoading, loading, setTotal, total }) => {
  const navigate = useNavigate();

  const fetchRepos = async () => {
    try {
      const textFromStorage = localStorage.getItem("user");

      if (textFromStorage) {
        setLoading(true);
        const { data } = await axios({
          method: "GET",
          url: `${process.env.REACT_APP_GIT_API_URL}/users/${textFromStorage}/repos?per_page=3&page=1`,
        });
        const response = await axios({
          method: "GET",
          url: `${process.env.REACT_APP_GIT_API_URL}/users/${textFromStorage}/repos`,
        });
        if (!data.length) {
          navigate("/");
          setLoading(false);
        } else {
          setTotal(response?.data?.length ? response?.data?.length : 10);
          setRepos(data);
          setLoading(false);
        }
      } else {
        navigate("/");
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      navigate("/");
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <>
      <Navbar />
      <Row
        // gutter={{ xs: 8, sm: 16, md: 22, lg: 30 }}
        className="repos"
        align="center"
        justify="center"
      >
        <Col span={12} align="center" justify="center">
          <Account user={repos[0]?.owner?.login} />
        </Col>
        <Col span={12}>
          <Spin spinning={loading} delay={100}>
            <RepoItem
              repos={repos}
              setRepos={setRepos}
              setLoading={setLoading}
              total={total}
            />
          </Spin>
        </Col>
      </Row>
    </>
  );
};

export default Repo;
