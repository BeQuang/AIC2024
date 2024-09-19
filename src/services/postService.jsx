import axios from "../utils/axiosCustomize.jsx";
import { checkUrl } from "../components/Validate/Validate.jsx";

const postSearchQuery = (data, day = false, month = false, year = false) => {
  const link = checkUrl(day, month, year);
  return axios.post(`search${link}`, data);
};

const postSearchFilterObj = (
  data,
  day = false,
  month = false,
  year = false,
  top = false,
  operator = false,
  value = false,
  object_as_filter = false
) => {
  const link = checkUrl(
    day,
    month,
    year,
    top,
    operator,
    value,
    object_as_filter
  );
  return axios.post(`search${link}`, data);
};

const postSimilarImage = (data) => {
  return axios.post(
    `search-image-similar?image_path=${encodeURIComponent(data)}`
  );
};

export { postSearchQuery, postSearchFilterObj, postSimilarImage };
