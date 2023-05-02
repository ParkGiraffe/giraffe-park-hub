import Section from "@/components/Section";
import Title from "@/components/Title";
import styled from "styled-components";

const FirstLine = styled.div`
  display: flex;
  justify-content: space-between;
  /* background-color: pink; */
  padding-left: 7%;
  padding-right: 7%;
  margin-top: 3%;
`;
const SecondLine = styled.div`
  display: flex;
  justify-content: space-between;
  /* background-color: cyan; */
  padding-left: 22%;
  padding-right: 22%;
  margin-top: 2%;
`;

const HomePage = () => {
  return (
    <>
      <Title />
      <FirstLine>
        <Section park={"Blog"} />
        <Section park={"Portfolio"} />
        <Section park={"GitHub"} />
      </FirstLine>
      <SecondLine>
        <Section park={"Gaming"} />
        <Section park={"Character"} />
      </SecondLine>
    </>
  );
};

export default HomePage;
