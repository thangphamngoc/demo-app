
export const customDate = () => {
    const curentDate = new Date();
    curentDate.setDate(curentDate.getDate() + 1);
    const fromDate = moment(curentDate).format("YYYY-MM-DD");
    const toDate = moment(fromDate).add(7, "days").format("YYYY-MM-DD");
    return { start: fromDate, end: toDate };
  };
  
  export const dateByVal = (val) => {
    return moment(val).get("date");
  };
  
  export const getNumberKey = (date) => {
    const d = new Date();
    const currentDate = dateByVal(d);
    const dateByChoose = dateByVal(date);
    return dateByChoose - currentDate;
  };