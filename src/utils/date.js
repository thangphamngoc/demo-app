export const customDate = () => {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  return {
    start: moment(date).format("YYYY-MM-DD"),
    end: moment(fromDate).add(7, "days").format("YYYY-MM-DD")
  };
};
export const dateValue = (v) => {
  return moment(v).get("date");
};
export const getNumberKey = (date) => {
  const dateCustom = new Date();
  return dateValue(date) - dateValue(dateCustom);
};
