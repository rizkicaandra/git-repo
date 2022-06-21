import { useState } from "react";
import { LogoutOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar__title">
        <h3 className="navbar__title-item"> GIT REPO</h3>
      </div>
      <span className="navbar__logout">
        <Tooltip placement="bottom" title="Logout">
          <LogoutOutlined
            onMouseEnter={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
            onClick={() => {
              navigate("/");
            }}
            style={{
              color: hover ? "#21325e" : "#f0f0f0",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
          />
        </Tooltip>
      </span>
    </div>
  );
};

export default Navbar;
