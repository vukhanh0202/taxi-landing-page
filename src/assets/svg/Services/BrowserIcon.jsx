import * as React from "react";
import Security from "../../img/svg/security.svg"
import styled from "styled-components";

function SvgComponent(props) {
  return (
    <ImgStyle src={Security} alt="Time Check" />
  );
}

const ImgStyle = styled.img`
  width: 50%;
  height: 50%;
  padding: 10%;
`;
export default SvgComponent;
