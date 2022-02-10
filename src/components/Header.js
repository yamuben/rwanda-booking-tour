import React, { useState } from "react";
import "./header.css";
import logo from "../assets/img/logo.png";
import { Modal, Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import  SignupUser  from "./SignupUser";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSignupVisible, setIsSignupVisible] = useState(false);
  const onFinish = (values) => {
    // console.log(values);

    localStorage.setItem("userLogedIn", true);
    navigate("/dash/newtour");
  };

  const navigate = useNavigate();

  return (
    <>
      <Modal
        visible={isSignupVisible}
        // width="40%"
        onOk={() => setIsSignupVisible(false)}
        onCancel={() => setIsSignupVisible(false)}
      >
        <SignupUser />
      </Modal>

      <Modal
        visible={isVisible}
        width="40%"
        onOk={() => setIsVisible(false)}
        onCancel={() => setIsVisible(false)}
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
            <a href="#" onClick={() => setIsVisible(true)}>
              {" "}
              Signin
            </a>
            <a href="#" onClick={() => setIsSignupVisible(true)}>
              {" "}
              Signup
            </a>
            <a href="/"> Home</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
