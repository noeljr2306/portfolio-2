import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const getWATTime = () =>
  new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Lagos",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date());

const TimeLocation = ({ className = "" }) => {
  const [time, setTime] = useState(getWATTime);

  useEffect(() => {
    const id = setInterval(() => setTime(getWATTime()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={`flex-col font-sora select-none ${className}`}>
      <span className="text-[10px] text-zinc-400 tracking-widest uppercase leading-tight">
        Abuja, NG
      </span>
      <span className="text-[11px] text-zinc-500 tabular-nums leading-tight">
        {time} WAT
      </span>
    </div>
  );
};

TimeLocation.propTypes = {
  className: PropTypes.string,
};

export default TimeLocation;
