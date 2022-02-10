import React, { useState, useEffect } from "react";
import { Table, Space, Tag, Drawer, Card, Skeleton, notification } from "antd";
import RwandaApis from "../services/rwandaBookingApis";

const AllUsers = () => {
  const [allUsersData, setAllUsersData] = useState([]);

  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [user, setUser] = useState({});
  useEffect(() => {
    RwandaApis.getAllUsers().then((res) => {
      console.log(">>>>>>", res);
      if (!res) {
        return notification.error({
          message: "Server is not running!",
        });
      }
      if (res.status == 200) {
        setAllUsersData(res?.data.data);
      } else {
        return notification.error({
          message: "failed to get data from backend",
        });
      }
    });
  }, []);

  const userCollumns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Gender ",
      key: "gender",
      render: (record) => (
        <Tag color={record.gender === "male" ? "geekblue" : "pink"}>
          {record?.gender.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: "Adress Location",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Actions",
      key: "action",
      render: (text, record) => (
        <Space>
          <a
            href="#"
            onClick={() => {
              setUser(record);
              setIsDrawerVisible(true);
            }}
          >
            View
          </a>
          <a href="#">Edit</a>
          <a href="#" style={{ color: "red" }}>
            Delete
          </a>
        </Space>
      ),
    },
  ];

  return (
    <>
      <div
        style={{
          width: "100%",
          minHeight: "80vh",
          background: "#D8DAE5",
          padding: "50px",
        }}
      >
        <h1>All users:</h1>
        {allUsersData.length == 0 ? (
          <Skeleton active></Skeleton>
        ) : (
          <Table columns={userCollumns} dataSource={allUsersData} />
        )}
      </div>
      <Drawer
        placement="left"
        onClose={() => setIsDrawerVisible(false)}
        visible={isDrawerVisible}
        width="50%"
      >
        <Card>
          <Space>
            <h4>
              Names: {user?.firstName} {user?.lastName}{" "}
            </h4>
          </Space>
        </Card>
      </Drawer>
    </>
  );
};

export default AllUsers;
