function checkDay(str) {
  const day = parseInt(str, 10); // Chuyển chuỗi thành số nguyên

  if (!isNaN(day) && day >= 1 && day <= 31) {
    return true;
  }

  return false;
}

function checkMonth(str) {
  const month = parseInt(str, 10); // Chuyển chuỗi thành số nguyên

  if (!isNaN(month) && month >= 1 && month <= 12) {
    return true;
  }

  return false;
}

function checkYear(str) {
  const year = parseInt(str, 10); // Chuyển chuỗi thành số nguyên

  if (!isNaN(year) && year >= 1800 && year <= 2030) {
    return true;
  }

  return false;
}

// Hàm kiểm tra top và value là số nguyên lớn hơn 0
function checkPositiveInteger(value) {
  const num = parseInt(value, 10);
  return !isNaN(num) && num > 0;
}

// Hàm kiểm tra operator là một trong những chuỗi hợp lệ
function checkOperator(operator) {
  const validOperators = ["gte", "lte", "eq", "ne", "gt", "lt"];
  return validOperators.includes(operator);
}

function checkUrl(
  day,
  month,
  year,
  // top = null,
  operator = null,
  value = null,
  object_as_filter = null
) {
  let link = "";
  const params = [];

  if (checkDay(day)) {
    params.push(`publish_day=${day}`);
  }

  if (checkMonth(month)) {
    params.push(`publish_month=${month}`);
  }

  if (checkYear(year)) {
    params.push(`publish_year=${year}`);
  }

  // if (checkPositiveInteger(top)) {
  //   params.push(`top=${top}`);
  // }

  if (checkOperator(operator)) {
    params.push(`operator=${operator}`);
  }

  if (checkPositiveInteger(value)) {
    params.push(`value=${value}`);
  }

  if (object_as_filter === "true" || object_as_filter === "false") {
    params.push(`object_as_filter=${object_as_filter}`);
  }

  if (params.length > 0) {
    link = "?" + params.join("&");
  }

  return link;
}

export { checkUrl };
