import React from "react";
import styled from "styled-components";
import { FaPhoneAlt } from "react-icons/fa";

export default function FullButtonCustom({ title, action, border }) {
  return (
    <Wrapper
      className="animate pointer radius8"
      onClick={action ? () => action() : null}
      border={border}
    >
      <div style={{float:'left'}}> 
        <FaPhoneAlt/> 
      </div>
      <div style={{float:'right'}}> 
        {title}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: 1px solid ${(props) => (props.border ? "#707070" : "#7620ff")};
  background-color: ${(props) => (props.border ? "transparent" : "#7620ff")};
  width: 100%;
  max-width: 190px;
  padding: 15px;
  outline: none;
  letter-spacing: 3px;
  font-size: 1.1rem;
  color: ${(props) => (props.border ? "#707070" : "#fff")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "#580cd2")};
    border: 1px solid #7620ff;
    color: ${(props) => (props.border ? "#7620ff" : "#fff")};
  }
`;

