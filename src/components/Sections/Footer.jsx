import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import LogoImg from "../../assets/svg/Logo";

export default function Contact() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <Wrapper>
      <div className="darkBg" style={{ backgroundColor: "#41cac0" }}>
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
            {/* <Link className="flexCenter animate pointer" to="home" smooth={true} offset={-80}>
              <LogoImg />
            </Link> */}
            <StyleP className="whiteColor font13">
              © {getCurrentYear()} - All Right Reserved
            </StyleP>

            <Link className="whiteColor animate pointer font13" to="home" smooth={true} offset={-80}>
              Lên Đầu Trang
            </Link>
          </InnerWrapper>
        </div>
      </div>
      <div class="hotline-phone-ring-wrap">
        <div class="hotline-phone-ring">
          <div class="hotline-phone-ring-circle"></div>
          <div class="hotline-phone-ring-circle-fill"></div>
          <div class="hotline-phone-ring-img-circle">
          <a href="tel:0935767151" class="pps-btn-img">
            <img src="https://nguyenhung.net/wp-content/uploads/2019/05/icon-call-nh.png" alt="Gọi điện thoại" width="50"/>
          </a>
          </div>
        </div>
        <div class="hotline-bar">
          <a href="tel:0935767151">
            <span class="text-hotline">0935.767.151</span>
          </a>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;