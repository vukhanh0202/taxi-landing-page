import * as React from "react";
import TimeCheck from "../../img/svg/timecheck.svg"
import styled from "styled-components";

function SvgComponent(props) {
  return (
    <ImgStyle src={TimeCheck} alt="Time Check" />
  );
}

const ImgStyle = styled.img`
  width: 50%;
  height: 50%;
  padding: 10%;
`;
export default SvgComponent;
