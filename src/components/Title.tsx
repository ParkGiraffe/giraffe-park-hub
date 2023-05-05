import styled from "styled-components";

const TitleConatiner = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const SignatureText = styled.text`
  font-size: 18px;
  text-align: center;
  font-weight: 700;
  /* color: #2C1D1A; */
`;

const TitleText = styled.text`
  font-size: 4.2em;
  text-align: center;
  font-weight: 700;
  color: #2C1D1A;
`;

const Title = () => {
  return (
    <TitleConatiner>
      <SignatureText>기린은 선악과를 먹고 공원을 짓는다.</SignatureText>
      <TitleText>GiraffePark</TitleText>
    </TitleConatiner>
  );
};

export default Title;
