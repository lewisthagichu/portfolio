import { useState, useEffect } from 'react';

export const useDateTime = () => {
  const [dateTime, setDateTime] = useState({ date: '', time: '' });

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options = { timeZone: 'Africa/Nairobi', hour12: false };

      const dateFormatter = new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        ...options,
      });

      const timeFormatter = new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        ...options,
      });

      const dateParts = dateFormatter.formatToParts(now);
      const timeParts = timeFormatter.formatToParts(now);

      const day = dateParts.find((part) => part.type === 'day').value;
      const month = dateParts
        .find((part) => part.type === 'month')
        .value.toUpperCase();
      const year = dateParts.find((part) => part.type === 'year').value;

      const date = `${day} ${month} ${year}`;
      const time = `${timeParts[0].value}:${timeParts[2].value}:${timeParts[4].value}`;

      setDateTime({ date, time });
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return dateTime;
};
