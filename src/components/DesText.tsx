import styled from "styled-components";

const Desciption = styled.text`
  font-size: 16pt;
  font-weight: 350;
`;

const Container = styled.div`
  padding-right: 20px;
  /* background-color: white; */
  margin-bottom: 15px;
  margin-top: 5px;
`;

const DesText = (props: { park: string }) => {
  return (
    <Container>
      {props.park === "Blog" && (
        <Desciption>
          박기린의 취미, 공부, 제작물 등 여러 발자취가 한곳에 모여있습니다.
        </Desciption>
      )}
      {props.park === "GitHub" && (
        <Desciption>
          박기린의 코딩 작업물이 한곳에 모여있습니다.
        </Desciption>
      )}
    </Container>
  );
};

export default DesText;
