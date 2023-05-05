import Section from "@/components/Section";
import Title from "@/components/Title";
import styled from "styled-components";
import { useEffect, useState } from "react";

const FirstLine = styled.div`
  display: flex;
  justify-content: center;
  /* background-color: pink; */
  /* padding-left: 7%; */
  /* padding-right: 7%; */
  /* margin-top: 25px; */
`;

const FirstLineBlock = styled.div`
  width: 20px;
`;

const SecondLine = styled.div`
  display: flex;
  justify-content: center;
  /* background-color: cyan; */
  /* padding-left: 22%;
  padding-right: 22%; */
  /* margin-top: 20px; */
`;

const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: white; */
  align-items: center;
`;

const HomePage = () => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  })

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      // cleanup
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const handleResize = () => {
    setWidth(window.innerWidth);
    console.log(width);
  };


  if (width > 884) {
    return (
      <>
        <Title />
        <FirstLine>
          <Section park={"Blog"} />
          <FirstLineBlock />
          <Section park={"Portfolio"} />
          <FirstLineBlock />
          <Section park={"GitHub"} />
        </FirstLine>
        <SecondLine>
          <Section park={"Gaming"} />
          <FirstLineBlock />
          <Section park={"Character"} />
        </SecondLine>
      </>
    );
  } else {
    return (
      <MobileContainer>
        <Title />
        <Section park={"Blog"} />
        <FirstLineBlock />
        <Section park={"Portfolio"} />
        <FirstLineBlock />
        <Section park={"GitHub"} />
        <Section park={"Gaming"} />
        <FirstLineBlock />
        <Section park={"Character"} />
      </MobileContainer>
    );
  }
};

export default HomePage;
