import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./signup.css";
import { Form, Input, Button, Checkbox, Select, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import RwandaApisService from "../services/rwandaBookingApis";

const { Option } = Select;

const SignupUser = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    RwandaApisService.createAccount(values).then((res) => {
      if (!res) {
        return notification.error({ message: "Server is down" });
      }
      if (res.status === 200) {
        return notification.success({
          message: "Your Account has been created successfully",
        });
      } else {
        return notification.error({
          message: !res.data.error ? res.data.message : res.data.error,
        });
      }
    });
  };

  return (
    <div style={{ background: "#c4c4c4", width: "100%", padding: "5% 30%" }}>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        style={{ background: "#fff", padding: "30px", width: "500px" }}
        width="500"
      >
        <h1>SIGNUP Form</h1>
        <Form.Item
          name="firstName"
          rules={[
            {
              required: false,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="First Name"
          />
        </Form.Item>
        <Form.Item
          name="lastName"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Last name"
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="email@gmail.com"
          />
        </Form.Item>
        <Form.Item name="address">
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="address"
          />
        </Form.Item>
        <Form.Item
          name="phone"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="+250 575 234 234"
          />
        </Form.Item>

        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
              message: "Please select gender!",
            },
          ]}
        >
          <Select placeholder="select your gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Signup
          </Button>
          Or <a href="#">Login form!</a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignupUser;
