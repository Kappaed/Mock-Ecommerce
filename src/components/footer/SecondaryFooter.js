import styled from "styled-components";
import { SiVisa, SiMastercard } from "react-icons/si";
import { GrAmex } from "react-icons/gr";
import { FaPaypal } from "react-icons/fa";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

const StyledText = styled.p`
  font-size: 0.8rem;
  color: gray;
`;

const CreditCards = styled.div`
  display: flex;
  align-items: center;
  font-size: 2.5rem;
  svg {
    margin-right: 10px;
  }
  svg:last-child {
    margin-right: 0;
  }
`;
const SecondaryFooter = () => {
  return (
    <Wrapper>
      <StyledText>Copyright &copy; 2021</StyledText>
      <CreditCards>
        <SiVisa />
        <SiMastercard />
        <FaPaypal />
        <GrAmex />
      </CreditCards>
    </Wrapper>
  );
};

export default SecondaryFooter;
