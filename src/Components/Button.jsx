import React from 'react';
import Button from 'react-bootstrap/Button';

function Btn({ variant, type, value ,buttonhandler}) {
  
  // console.log(variant, type, value);
  
  return (
    <>
      <Button onClick={buttonhandler} variant={variant} type={type} className="custom-button">
        {value}
      </Button>
    </>
  );
}

export default Btn;
