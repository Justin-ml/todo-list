import React, { useState } from "react";

import MyButton from "./MyButton/MyButton";
import MyInput from "./MyInput/MyInput";

const Form = (onSubmit) => {
  const [tasks, setTasks] = useState("");

  const inputHandler = (e) => {
    setTasks(e.target.value);
    //console.log(tasks)
  };

  const additionHandler = () => {
    onSubmit(tasks);
    setTasks("");
  };

  return (
    <>
      <MyInput
        placeholder={"Enter task"}
        value={tasks}
        onChange={inputHandler}
      />
      <MyButton onClick={additionHandler} title={"Add"} />
    </>
  );
};

export default Form;
