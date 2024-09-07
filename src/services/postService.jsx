import axios from "../../utils/axiosCustomize.jsx";
import { checkUrl } from "../components/Validate/Validate.jsx";

const postSearchQuery = (data, day = false, month = false, year = false) => {
  const link = checkUrl(day, month, year);
  return axios.post(link, data);
};

const postSearchFilterObj = (data, operator, value) => {
  console.log(operator, value);
  return axios.post(`?operator=${operator}&value=${value}`, data);
};

export { postSearchQuery, postSearchFilterObj };
