import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./dateSelector.css";
import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const DateSelector = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      placeholderText="select Date"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      isClearable
    />
  );
};

export default DateSelector;
