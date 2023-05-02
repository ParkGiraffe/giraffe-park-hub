import Section from "@/components/Section";
import Title from "@/components/Title";
import styled from "styled-components";

const FirstLine = styled.div`
  display: flex;
  justify-content: center;
  /* background-color: pink; */
  /* padding-left: 7%; */
  /* padding-right: 7%; */
  margin-top: 25px;
`;

const FirstLineBlock = styled.div`
  width: 20px;
`

const SecondLine = styled.div`
  display: flex;
  justify-content: center;
  /* background-color: cyan; */
  /* padding-left: 22%;
  padding-right: 22%; */
  margin-top: 20px;
`;

const HomePage = () => {
  return (
    <>
      <Title />
      <FirstLine>
        <Section park={"Blog"} />
        <FirstLineBlock/>
        <Section park={"Portfolio"} />
        <FirstLineBlock/>
        <Section park={"GitHub"} />
      </FirstLine>
      <SecondLine>
        <Section park={"Gaming"} />
        <FirstLineBlock />
        <Section park={"Character"} />
      </SecondLine>
    </>
  );
};

export default HomePage;
