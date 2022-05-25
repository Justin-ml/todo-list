import React, { useState } from "react";
import "./add.css";
import DateSelector from "../../Components/DateSelector/DateSelector";


const Add = () => {





  return (
    <form className="form"  >
      <input type="text" placeholder="Enter Task...." className="input" />
      <button type="submit" id="addButton">
        Add
      </button>
      <DateSelector />
    </form>
  );
};

export default Add;
