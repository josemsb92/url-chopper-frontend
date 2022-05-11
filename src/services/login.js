import axios from "axios";

const baseUrl = "http://localhost:3003/login";

const login = async (credentials) => {
  const { data } = await axios.post(baseUrl, credentials);
  return data;
};
export default { login };
