import axios from "axios";

const mainUrl = axios.create({
  baseURL: "https://66458531b8925626f89218aa.mockapi.io/api/v1",
});

export default mainUrl;
