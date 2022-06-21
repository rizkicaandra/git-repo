import { Button, Form, Input, message } from "antd";
import axios from "axios";

const Home = () => {
  const onFinish = async (values) => {
    try {
      if (!values?.username) {
        message.warning("Please input your git username");
      } else {
        const { data } = await axios({
          method: "GET",
          url: `${process.env.REACT_APP_GIT_API_URL}/users/${values?.username}/repos`,
        });

        if (!data.length) {
          message.warning("Data not found");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="home cointainer">
      <div className="home__title">
        <h1> GIT REPO</h1>
      </div>
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
    </div>
  );
};

export default Home;
