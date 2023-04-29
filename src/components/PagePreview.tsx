import styled from "styled-components";
import Image from "next/image";
import blogPage from "@images/screenshots/blog.png";
import githubPage from "@images/screenshots/github.png";

const PreviewContainer = styled.div`
  /* background-color: pink; */
  width: 200px;
  height: 200px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border: 1px solid #d2d2d2;
`;

const ReadyText = styled.text`
  font-size: 20pt;
  font-weight: 600;
  margin-top: 15px;
`;

const PagePreview = (props: { park: string }) => {
  let page;

  if (props.park === "Blog") {
    page = <Image src={blogPage} alt="blog" width={200} height={200} />;
  } else if (props.park === "GitHub") {
    page = <Image src={githubPage} alt="github" width={200} height={200} />;
  } else {
    page = <ReadyText>입점 준비 중</ReadyText>;
  }

  return (
    <PreviewContainer>
      {page}
    </PreviewContainer>
  );
};

export default PagePreview;
