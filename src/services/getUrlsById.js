import axios from "axios";

const getUrlsById = async (id) => {
  const baseUrl = `http://localhost:3003/urlchopper/url/id/${id}`;
  const { data } = await axios.get(baseUrl);
  return data;
};
export default { getUrlsById };
