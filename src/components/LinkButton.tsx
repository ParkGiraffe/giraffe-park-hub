import styled from "styled-components";

const ButtonContainer = styled.div`
  background-color: #FB413A;
  width: 260px;
  height: 57px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  padding-left: 8px;
`;

const ImgContainer = styled.div`
  background-color: gray;
  width: 45px;
  height: 45px;
  border-radius: 25px;
`;

const TextContainer = styled.div`
  /* background-color: greenyellow; */
  width: 200px;
  display: flex;
  /* align-items: center; */
  justify-content: center;
`;
const ButtonText = styled.text`
  font-weight: bold;
  font-size: 25px;
  color: white;
`;

const LinkButton = () => {
  return (
    <ButtonContainer>
      <ImgContainer />
      <TextContainer>
        <ButtonText>Go To Blog</ButtonText>
      </TextContainer>
    </ButtonContainer>
  );
};

export default LinkButton;
