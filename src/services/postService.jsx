import axios from "../../utils/axiosCustomize.jsx";

const postSearchQuery = (data) => {
  return axios.post("", data);
};

const postSearchFilterObj = (data, operator, value) => {
  console.log(operator, value);
  return axios.post(`?operator=${operator}&value=${value}`, data);
};

export { postSearchQuery, postSearchFilterObj };
