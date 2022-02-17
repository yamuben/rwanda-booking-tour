import axios from "axios";
import store from "store";
import { notification } from "antd";

// const RWANDA_BOOKING_APIS_URL = "http://localhost:3030";
const RWANDA_BOOKING_APIS_URL = "https://rwandaapitour.herokuapp.com";

var config = {
  headers: {
    "Content-Type": "application/json",
    "x-auth-token": `${store.get("x-auth-token")}`,
  },
};

class Application {
  async signinAccount(data) {
    try {
      const response = await axios.post(
        RWANDA_BOOKING_APIS_URL + "/user/login",
        data,
        config
      );
      store.set("x-auth-token",response.data.token);
      return response;
    } catch (error) {
      // console.log(error.response);
      return error.response;
    }
  }

  async createAccount(data) {
    try {
      const response = await axios.post(
        RWANDA_BOOKING_APIS_URL + "/user/register",
        data,
        config
      );
      return response;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  }

  async getAllTours() {
    try {
      const response = await axios.get(
        RWANDA_BOOKING_APIS_URL + "/tour/all",
        config
      );

      //   console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async getAllUsers() {
    try {
      const response = await axios.get(
        RWANDA_BOOKING_APIS_URL + "/user/all",
        config
      );

      return response;
    } catch (error) {}
  }

  async getAllVoteUsers() {
    try {
      const response = await axios.get(
        RWANDA_BOOKING_APIS_URL + "/vote/all/users",
        config
      );

      return response;
    } catch (error) {}
  }
  async loginVoteUser(data) {
    try {
      const response = await axios.post(
        RWANDA_BOOKING_APIS_URL + "/vote/login/user",
        data,
        config
      );

      return response;
    } catch (error) {}
  }
  async VoteUser(data) {
    try {
      const response = await axios.post(
        RWANDA_BOOKING_APIS_URL + "/vote/create/vote",
        data,
        config
      );

      return response;
    } catch (error) {
      if (error.response.status === 400)
        notification.error({ message: "You have arleady voted" });
      window.location.reload();
    }
  }
}

export default new Application();
