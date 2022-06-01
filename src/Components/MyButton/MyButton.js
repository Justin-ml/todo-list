import React from "react";

import { Button } from "semantic-ui-react";

const MyButton = ({ title, onClick }) => {
  return (
    <Button color="blue" onClick={onClick}>
      {title}
    </Button>
  );
};

export default MyButton;
