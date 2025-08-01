'use client';

import { useEffect, useState } from 'react';

const Clock = () => {
  const [time, setTime] = useState<string | null>(null);
  const [date, setDate] = useState<string | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
      setDate(now.toLocaleDateString(undefined, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }));
    };

    updateTime(); // initialize immediately
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!time || !date) return null; 

  return (
    <div className="flex flex-col items-start lg:items-center text-center text-sm sm:text-base text-primary font-medium mt-2 space-y-2">
      <p className='text-xl'>{date}</p>
      <p className='text-2xl'>{time}</p>
    </div>
  );
};

export default Clock;
