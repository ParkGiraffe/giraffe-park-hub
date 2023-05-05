import styled from "styled-components";
import Image from "next/image";
import tistoryLogo from "@images/logos/tistory.svg";
import githubLogo from "@images/logos/github.svg";
import giraffeLogo from "@images/logos/giraffe.png";
import dummy from '@images/logos/dummy.png'

const IconContainer = styled.div`
  /* background-color: white; */
  width: 45px;
  height: 45px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Icon = (props: { park: string }) => {
  let logo;

  if (props.park === "Blog") {
    logo = <Image src={tistoryLogo} alt="blog" width={60} height={60} />;
  } else if (props.park === "GitHub") {
    logo = <Image src={githubLogo} alt="github" width={45} height={45} />;
  } else if (props.park === "Portfolio") {
    logo = <Image src={giraffeLogo} alt="giraffe" width={45} height={45} />;
  } else {
    logo = <Image src={dummy} alt="dummy" width={45} height={45} />;
  }

  
  return <IconContainer>{logo}</IconContainer>;
};

export default Icon;
