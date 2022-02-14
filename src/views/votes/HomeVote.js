import React, { useState, useEffect } from "react";
import { Button, Input, Form, notification } from "antd";
import { useNavigate } from "react-router-dom";
import getAllVoteUsers from "../../services/rwandaBookingApis";
import store from "store";
const HomeVote = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const onFinish = (values) => {
    console.log("Success:", values);

    getAllVoteUsers.loginVoteUser(values).then((res) => {
      if (!res) {
        return notification.error({ message: "failed to login" });
      }

      if (res.status === 200) {
        console.log(res);
        store.set("x-auth-token", res.data.token);
        store.set("user", res.data.data);
        return navigate("/votepage");
      } else {
        return notification.error({ message: "Code Not Found" });
      }
    });
  };

  useEffect(() => {
    getAllVoteUsers.getAllVoteUsers().then((res) => {
      setUsers(res.data.data);
    });
  }, []);

  return (
    <div style={{display: 'flex'}}>
    <div
      style={{
        top: "0",
        width: "60%",
        background: "rgba(0, 0, 0, 0.75)",
        bottom: "0",
        padding: "25% 5%",
        minHeight: "100vh",
      }}
    >
        <Form onFinish={onFinish} autoComplete="off">
          <Form.Item
            name="code"
            rules={[
              {
                required: true,
                message: "Please input your Code!",
              },
            ]}
          >
            <Input
              style={{
                width: "100%",
                padding: "50px",
                height: "60px",
                fontSize: "25px",
                textAlign: "center",
              }}
              placeholder="0001"
            />
          </Form.Item>
          <Button
            style={{
              width: "100%",
              padding: "15px",
              height: "60px",
              color: "black",
              background: "#c4c4c4",
              borderColor: "#c1c1c1",
            }}
            type="primary"
            htmlType="submit"
          >
            <b> Login </b>
          </Button>
        </Form>
  
    </div>
      <div
        style={{
          background: "#c4c4c4",
          padding:"20px 50px",
          minHeight: "110vh",
          width: "40%",
          float: "right",
        }}
      >
        {users.map((user) => (
          <><h3>{user.amazina} :Code <b>{user.code}</b></h3> </>
        ))}
      </div>
      </div>
  );
};

export default HomeVote;
