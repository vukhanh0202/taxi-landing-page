import * as React from "react";
import Logo from "../img/logo.jpg";
import styled from "styled-components";

function SvgComponent(props) {
  return (
    // <svg xmlns="http://www.w3.org/2000/svg" width={27} height={40} viewBox="0 0 27 40" {...props}>
    //   <g data-name="Group 101" transform="translate(-375 -21)">
    //     <rect data-name="Rectangle 16" width={13} height={8} rx={4} transform="translate(375 53)" fill="#f40051" />
    //     <rect data-name="Rectangle 11" width={20} height={8} rx={4} transform="translate(382 21)" fill="#f2b300" />
    //     <rect data-name="Rectangle 15" width={20} height={8} rx={4} transform="translate(382 37)" fill="#41cac0" />
    //     <rect data-name="Rectangle 12" width={8} height={8} rx={4} transform="translate(375 29)" fill="#4cd5c5" />
    //   </g>
    // </svg>
    <img src={Logo} style={{width: '85px'}}/>
  );
}

const Img = styled.img`
@media (max-width: 560px) {
  // width: 80%;
  height: auto;
}
`;

export default SvgComponent;
