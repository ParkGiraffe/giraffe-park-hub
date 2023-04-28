import styled from "styled-components";
import Image from "next/image";
import blogPage from "@images/screenshots/blog.png";
import githubPage from "@images/screenshots/github.png";

const PreviewContainer = styled.div`
  background-color: pink;
  width: 200px;
  height: 200px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  align-self: flex-end;
  overflow: hidden;
  border: 1px solid #d2d2d2;
`;

const PagePreview = (props: { park: string }) => {
  return (
    <PreviewContainer>
      {props.park === "Blog" && (
        <Image src={blogPage} alt="blog" width={200} height={200} />
      )}
      {props.park === "GitHub" && (
        <Image src={githubPage} alt="github" width={200} height={200} />
      )}
    </PreviewContainer>
  );
};

export default PagePreview;
