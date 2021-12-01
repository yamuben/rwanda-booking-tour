import React from "react";
import { Table, Space } from "antd";
import allAvailableTours from "../../assets/constants/tours.json";
import allUsers from "../../assets/constants/users.json";
import { EyeOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";

const Column = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Date Scheduled",
    dataIndex: "dateScheduled",
    key: "dateScheduled",
  },
  {
    title: "Seats",
    dataIndex: "seats",
    key: "seats",
  },
  {
    title: "Price (Rfw)",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Actions",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <a>
          <EyeOutlined />
        </a>
        <a>
          <EditOutlined />{" "}
        </a>
        <a>
          <DeleteOutlined style={{ color: "red" }} />
        </a>
      </Space>
    ),
  },
];
const collumnUsers = [
  {
    title: "Names",
    dataIndex: "firstName",
    key: "firstName",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Phone",
    dataIndex: "phoneNumber",
    key: "phoneNumber",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Actions",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <a>Accept</a>
        <a style={{ color: "red" }}>Decline </a>
      </Space>
    ),
  },
];
const AllTours = () => {
  return (
    <>
      <h1> All Tours:</h1>
      <Table columns={Column} dataSource={allAvailableTours} />

      <h1> Users Booked:</h1>
      <Table columns={collumnUsers} dataSource={allUsers} />
    </>
  );
};

export default AllTours;
