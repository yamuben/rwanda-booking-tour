import React, { useState } from "react";
import "./header.css";
import logo from "../assets/img/logo.png";
import { Modal, Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const onFinish = (values) => {
    // console.log(values);

    localStorage.setItem("userLogedIn", true);
    navigate("/dash/newtour");
  };

  const navigate = useNavigate();

  return (
    <>
      <Modal
        visible={visible}
        width="40%"
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <h1>Signin Form </h1>
        <Form onFinish={onFinish}>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, type: "email" }]}
          >
            <Input type="email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true }]}
          >
            <Input type="password" />
          </Form.Item>
          <Button htmlType="submit" onClick={() => {}}>
            {" "}
            Login{" "}
          </Button>
        </Form>
      </Modal>

      <div className="header-container">
        <img src={logo} width="15%" />

        <div className="navbar">
          <div className="navbar-fix">
            <a href="/aboutus"> About Us</a>
            <a href="/tours"> Tours</a>
            <a href="#"> Garelly</a>
            <a href="#" onClick={() => setVisible(true)}>
              {" "}
              Signin
            </a>
            <a href="/"> Home</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
