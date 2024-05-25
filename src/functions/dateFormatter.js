// format date with moment
import moment from "moment";

const formatDate = (date) => {
  const formattedDate = moment(date).format("MMMM Do, YYYY ");
  return formattedDate;
};

export default formatDate;
