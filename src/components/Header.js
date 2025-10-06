import { useState, useEffect } from "react";

export function Header() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header">
      <div className="today-date">
        <div className="date">{time.toDateString()}</div>
        <div className="time">
          {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}
        </div>
      </div>
      <h2 className="title">To-do List</h2>
    </header>
  );
}
