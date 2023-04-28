import styled from "styled-components";
import Image from "next/image";
import tistoryLogo from "@images/logos/tistory.svg";
import githubLogo from "@images/logos/github.svg";
import giraffeLogo from "@images/logos/giraffe.png";

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
  return (
    <IconContainer>
      {props.park === 'Blog' && <Image src={tistoryLogo} alt="blog" width={60} height={60} />}
      {props.park === 'GitHub' && <Image src={githubLogo} alt="github" width={45} height={45} />}
      {props.park === 'Portfolio' && <Image src={giraffeLogo} alt="giraffe" width={45} height={45} />}
    </IconContainer>
  );
};

export default Icon;
