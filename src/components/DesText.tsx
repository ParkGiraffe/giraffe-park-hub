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
  height: 60px;
`;

const DesText = (props: { park: string }) => {
  let description;

  if (props.park === "Blog") {
    description = (
      <Desciption>
        박기린의 취미, 공부, 제작물 등 여러 발자취가 한곳에 모여있습니다.
      </Desciption>
    );
  } else if (props.park === "GitHub") {
    description = (
      <Desciption>박기린의 코딩 작업물이 한곳에 모여있습니다.</Desciption>
    );
  } else if (props.park === "Portfolio") {
    description = <Desciption>박기린을 소개합니다.</Desciption>;
  } else if (props.park === "Gaming") {
    description = (
      <Desciption>게임을 정말 많이 사랑하는 박기린을 위해 만든 공원입니다.</Desciption>
    );
  } else {
    description = <text>준비 중</text>;
  }

  return <Container>{description}</Container>;
};

export default DesText;
