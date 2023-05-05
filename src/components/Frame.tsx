import styled from "styled-components";

const Frame = styled.div`
  background-color: #f8be57;
  width: 330px;
  height: 380px;
  border-radius: 20px;
  /* border: 2px solid #2e2e2e; */
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  /* padding-right: 20px; */
  padding-top: 20px;
  justify-content: space-between;
  margin-top: 20px;

  :hover {
    background-color: #ffcf79;
  }

  cursor: pointer;
`;

export default Frame;
