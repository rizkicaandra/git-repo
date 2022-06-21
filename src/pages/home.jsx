import { Button, Form, Input, message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = ({ setRepos, setLoading, setTotal }) => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      if (!values?.username) {
        message.warning("Please input your git username");
      } else {
        setLoading(true);
        const { data } = await axios({
          method: "GET",
          url: `${process.env.REACT_APP_GIT_API_URL}/users/${values?.username}/repos?per_page=3&page=1`,
        });

        const response = await axios({
          method: "GET",
          url: `${process.env.REACT_APP_GIT_API_URL}/users/${values?.username}/repos`,
        });

        if (!data.length) {
          message.warning("Your Git Repositories is not found");
          setLoading(false);
        } else {
          setTotal(response?.data?.length ? response?.data?.length : 10);
          setRepos(data);
          setLoading(true);
          message.success("Success fetch git repositories");
          localStorage.setItem("user", values?.username);
          navigate("/repos");
        }
      }
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  };

  return (
    <div className="home cointainer">
      <div className="home__title">
        <h1> GIT REPO</h1>
      </div>
      <div>
        <Form name="basic" onFinish={onFinish} className="home__action">
          <Form.Item name="username">
            <Input
              size="large"
              placeholder="Example: rizkicaandra"
              className="home__input"
            />
          </Form.Item>

          <Form.Item name="success">
            <Button type="primary" htmlType="submit" className="home__button">
              Get Started
            </Button>
          </Form.Item>
        </Form>
        <p className="home__description">
          Input your git account to access GIT REPO App
        </p>
      </div>
    </div>
  );
};

export default Home;
