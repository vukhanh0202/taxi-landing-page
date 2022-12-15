import * as React from "react";
import Check from "../../img/svg/check.svg"
import styled from "styled-components";

function SvgComponent(props) {
  return (
    <ImgStyle src={Check} alt="Time Check" />
  );
}

const ImgStyle = styled.img`
  width: 50%;
  height: 50%;
  padding: 10%;
`;
export default SvgComponent;
