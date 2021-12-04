import { date } from "quasar";

const timeStamp = Date.now();

const formattedFullDateSTimeString = () => {
  return {
    date   : date.formatDate( timeStamp, "DD MMM YYYY" ),
    dayWeek: date.formatDate( timeStamp, "dddd" )
  };
};

export {
  formattedFullDateSTimeString
};
