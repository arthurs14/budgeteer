import moment from 'moment';

const getTodaysDate = () => {
  const todaysDate = moment().format('LL');
  return todaysDate;
};

const daysLeft = () => {
  const daysOfMonthLeft = moment().daysInMonth();
  const today = moment().format('DD') * 1;
  const daysLeft = daysOfMonthLeft - today;
  return daysLeft;
};

export {
  getTodaysDate,
  daysLeft
};
