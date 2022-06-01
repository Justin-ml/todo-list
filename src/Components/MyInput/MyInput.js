import React from "react";
import { Input } from "semantic-ui-react";

const MyInput = ({placeholder,value,onChange}) =>{
    return(
        <Input placeholder={placeholder} value={value} onChange={onChange}  />
    )
}

export default MyInput;