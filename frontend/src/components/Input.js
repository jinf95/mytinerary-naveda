import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

const Input = () => {
    return (
        <div className="input-contenedor ">
            <InputGroup size="sm">
                <FormControl  placeholder="FIND YOUR FAVORITE DESTINATION" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
        </div>
       
      )
}

export default Input