import axios from "axios";

const getUrlsById = async (id) => {
  const baseUrl = `http://localhost:3003/urlchopper/url/${id}`;
  const { data } = await axios.get(baseUrl, id);
  return data;
};
export default { getUrlsById };
