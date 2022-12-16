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
  border: 1px solid ${(props) => (props.border ? "#707070" : "#41cac0")};
  background-color: ${(props) => (props.border ? "transparent" : "#41cac0")};
  width: 100%;
  max-width: 200px;
  padding: 15px;
  outline: none;
  letter-spacing: 3px;
  font-size: 1.1rem;
  color: ${(props) => (props.border ? "#707070" : "#fff")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "#39b2a9")};
    border: 1px solid #41cac0;
    color: ${(props) => (props.border ? "#41cac0" : "#fff")};
  }
`;

