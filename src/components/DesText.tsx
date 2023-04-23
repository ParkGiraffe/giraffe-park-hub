import styled from "styled-components";

const Desciption = styled.p`
  font-size: 15;
`;

const Container = styled.div`
  padding: 5px;
`;

const DesText = () => {
  return (
    <Container>
      <Desciption>Description 1</Desciption>
      <Desciption>Description 2</Desciption>
      <Desciption>Description 3</Desciption>
    </Container>
  );
};

export default DesText;
