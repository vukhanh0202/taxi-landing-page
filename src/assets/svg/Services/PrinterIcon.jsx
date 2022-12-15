import * as React from "react";
import Money from "../../img/svg/money.svg"
import styled from "styled-components";

function SvgComponent(props) {
  return (
    <ImgStyle src={Money} alt="Time Check" />
  );
}

const ImgStyle = styled.img`
  width: 50%;
  height: 50%;
  padding: 10%;
`;
export default SvgComponent;
