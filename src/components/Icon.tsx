import styled from "styled-components";
import Image from "next/image";
import logo from "@images/logos/tistory.svg";

const IconContainer = styled.div`
  background-color: black;
  width: 45px;
  height: 45px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Icon = () => {
  return (
    <IconContainer>
      <Image src={logo} alt="logo" width={60} height={60} />
    </IconContainer>
  );
};

export default Icon;
