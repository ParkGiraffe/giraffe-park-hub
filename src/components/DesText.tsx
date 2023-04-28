import styled from "styled-components";

const Desciption = styled.text`
  font-size: 17pt;
  font-weight: 350;
`;

const Container = styled.div`
  padding-right: 20px;
  /* background-color: white; */
  margin-bottom: 15px;
  margin-top: 5px;
`;

const DesText = () => {
  return (
    <Container>
      <Desciption>박기린의 취미, 공부, 제작물 등 여러 발자취가 한곳에 모여있습니다.</Desciption>
    </Container>
  );
};

export default DesText;
