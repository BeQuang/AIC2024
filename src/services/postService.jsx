import axios from "../../utils/axiosCustomize.jsx";

const postSearch = (data, operator = null, value = null) => {
  let url = "";

  if (operator !== null && value === null) {
    url += `?operator=${operator}`;
  } else if (operator === null && value !== null) {
    url += `?value=${value}`;
  } else if (operator !== null && value !== null) {
    url += `?operator=${operator}&value=${value}`;
  }

  console.log(url);

  return axios.post(url, data);
};

export { postSearch };
