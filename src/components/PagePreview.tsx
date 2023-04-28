import styled from "styled-components";
import Image from "next/image";
import preview from '@images/screenshots/blog.png'

const PreviewContainer = styled.div`
  background-color: pink;
  width: 200px;
  height: 200px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  align-self: flex-end;
  overflow: hidden;
`;

const PagePreview = () => {
  return (
    <PreviewContainer>
      <Image src={preview} alt='page' width={200} height={200}/>
    </PreviewContainer>
  );
};

export default PagePreview;
