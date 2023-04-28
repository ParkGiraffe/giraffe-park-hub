import styled from "styled-components";
import Image from 'next/image'
import logo from '@images/logos/tistory.png'

const IconContainer = styled.div`
  background-color: black;
  width: 45px;
  height: 45px;
  border-radius: 25px;
`;

const Icon = () => {
  return (
    <IconContainer>
      <Image src={logo} alt='logo' width={45} height={45} />
    </IconContainer>
  );
};

export default Icon;
