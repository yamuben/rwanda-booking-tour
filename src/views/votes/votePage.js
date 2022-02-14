import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import getAllVoteUsersApi from "../../services/rwandaBookingApis";
import store from "store";
import { Button, Input, Space, Modal, notification } from "antd";
import {
  LockOutlined,
  UnlockOutlined,DownCircleOutlined,
  DownSquareOutlined,
} from "@ant-design/icons";
import "./index.css";

const VotePage = () => {
  const navigate = useNavigate();
  const [modalVisible, setModalVisible] = useState(false);
  const [users, setUsers] = useState([]);
  const [userVoted, setUserVoted] = useState({});
  const userVoter = store.get("user");

  const voteUser = async (uwatowe) => {
    const data = { uwatowe: uwatowe };

    const res = await getAllVoteUsersApi.VoteUser(data);
    if (!res) {
      return notification.error({ message: "Failed to vote" });
    }
    if (res.status === 200) {
      //   setUserVoted(res?.data.data);
      setModalVisible(true);
    } else {
      return notification.error({ message: "Failed to vote" });
    }
  };

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  useEffect(() => {
    getAllVoteUsersApi.getAllVoteUsers().then((res) => {
      setUsers(shuffle(res.data.data));
    });
  }, []);
  return (
    <>
      <h1
        style={{
          width: "100%",
          textAlign: "center",
          background: "rgba(0, 0, 0, 0.85)",
          height: "200px",
          padding: "25px",
          color: "white",
          margin:"0px"
        }}
      >
        Ugiye Gutora ni : <b> {userVoter?.amazina}  {userVoter?.yatoye? (<h3 style={{color:"green"}}><DownCircleOutlined /> Watoye.</h3>):(<></>)}</b>
        <Button onClick={()=>{store.remove("user"); store.remove("x-auth-token" ); navigate("/")}}>Logout</Button>
      
      </h1>
     <div
       className="voteCardAll"
      >
        {users.map((user) => (
          <div
            className="voteCard"
            style={
              user.yatowe || userVoter._id === user._id
                ? {
                    background: "#fff",
                    cursor: "no-drop",
                  }
                : { background: "#c4c4c4", cursor: "pointer" }
            }
          >
            {user.yatowe || userVoter._id === user._id ? (
              <>
                <UnlockOutlined style={{ fontSize: "110px" }} />
                <h2>
                  {" "}
                  <b>
                    Voted <DownSquareOutlined style={{ color: "green" }} />
                  </b>{" "}
                </h2>{" "}
              </>
            ) : (
              <>
                <LockOutlined
                  style={{ fontSize: "110px" }}
                  onClick={() => {
                    voteUser(user._id);
                    setUserVoted(user);
                  }}
                />

                <h2>
                  {" "}
                  <b>Vote </b>{" "}
                </h2>
              </>
            )}
          </div>
        ))}
      </div>
      <Modal
        visible={modalVisible}
        title="Voted Successfull"
        onCancel={() => {
          setModalVisible(false);
          window.location.reload();
        }}
        onOk={() => {
          setModalVisible(false);
          window.location.reload();
        }}
      >
        <h1>{userVoted?.amazina}</h1>
      </Modal>
    </>
  );
};

export default VotePage;
