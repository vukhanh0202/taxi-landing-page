import * as React from "react";
import Car4 from "../../img/svg/car4slot.svg"
import styled from "styled-components";

function SvgComponent(props) {
  return (
    <ImgStyle src={Car4} alt="Time Check" />
  );
}

const ImgStyle = styled.img`
  width: 50%;
  height: 50%;
  padding: 10%;
`;
export default SvgComponent;
