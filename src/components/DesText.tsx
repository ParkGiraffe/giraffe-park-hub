import styled from "styled-components";

const Desciption = styled.p`
  font-size: 18pt;
  font-weight: 400;
`;

const Container = styled.div`
  /* padding: 5px; */
  /* background-color: white; */
`;

const DesText = () => {
  return (
    <Container>
      <Desciption>박기린의 취미, 공부, 제작물 등 여러 발자취가 한곳에 모여있습니다.</Desciption>
    </Container>
  );
};

export default DesText;
