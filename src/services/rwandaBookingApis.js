import axios from "axios";

const RWANDA_BOOKING_APIS_URL = "http://localhost:3030";

var config = {
  headers: {
    "Content-Type": "application/json",
  },
};

class Application {
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
}

export default new Application();
