import { useState } from 'react';
import dayjs from 'dayjs';
import useInterval from '../hooks/useinterval';

const TimeAndDate = () => {
  const [currentDate, setCurrentDate] = useState(dayjs().format('ddd DD MMM HH:mm A'));

  useInterval(() => {
    setCurrentDate(dayjs().format('ddd DD MMM HH:mm A'));
  }, 6000);

  return currentDate;
};

export default TimeAndDate;
