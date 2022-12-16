import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

export default function Pricing() {
  return (
    <Wrapper id="pricing">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">BẢNG GIÁ</h1>
            {/* <p className="font15">
             Giá cả phù hợp, phải chăng, càng đi càng giảm
              <br />
              Liên hệ để biết thêm thông tin chi tiết
            </p> */}
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <PricingTable
                icon="car4"
                price="$29,99/mo"
                title="Bảng giá xe 4 chỗ"
                // text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                offers={[
                  { name: "Dưới 15km - Giá 14.600đ/1km", cheked: true },
                  { name: "Dưới 100km - Giá 10.000đ/1km", cheked: true },
                  { name: "Dưới 13km trở lên- Giá 9.000đ/1km", cheked: true },
                  { name: "Đi khứ hồi lượt về giảm 70% ( tùy quãng đường và thời gian chờ)", cheked: true },
                  { name: "Phí đường bộ khách thanh toán ( nếu có)", cheked: true },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="car7"
                price="$49,99/mo"
                title="Bảng giá xe 7 chỗ"
                // text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                offers={[
                  { name: "Dưới 15km - Giá 17.900đ/1km", cheked: true },
                  { name: "Dưới 100km - Giá 14.000đ/1km", cheked: true },
                  { name: "Dưới 13km trở lên- Giá 13.000đ/1km", cheked: true },
                  { name: "Đi khứ hồi lượt về giảm 70% ( tùy quãng đường và thời gian chờ)", cheked: true },
                  { name: "Phí đường bộ khách thanh toán ( nếu có)", cheked: true },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
            {/* <TableBox>
              <PricingTable
                icon="browser"
                price="$59,99/mo"
                title="Golden"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                offers={[
                  { name: "Product Offer", cheked: true },
                  { name: "Offer", cheked: true },
                  { name: "Product Offer #2", cheked: true },
                  { name: "Product", cheked: true },
                  { name: "Product Offer", cheked: true },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox> */}
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 50%%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;




