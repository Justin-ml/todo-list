import React, { useState } from "react";
import "./add.css";
import DateSelector from "../../Components/DateSelector/DateSelector";
import Form from '../../Components/Form'



const Add = () => {

  const [todos,setTodos] = useState([]);

  const additionHandler = (todo)=>{
    setTodos([...todos,todo]);

  }




  return (
    <form className="form">
    <Form  onSubmit={additionHandler}  >
    </Form>
    <DateSelector />
    </form>
    
  );
};

export default Add;
