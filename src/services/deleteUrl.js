import axios from "axios";

const deleteUrl = async (id) => {
  var axios = require("axios");
  var data = JSON.stringify({
    _id: id,
  });

  var config = {
    method: "delete",
    url: "http://localhost:3003/urlchopper/url/delete",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config);
};
export default { deleteUrl };
