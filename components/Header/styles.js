import styled from "styled-components";

const HeaderComponent = styled.header`
  position:fixed;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 5vh;
  display: flex;
  background-color: #151515;
`;

const BoxIcon = styled.div`
  margin-left: 2vw;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8vh;
  height: 8vh;
  background-color: #151515;
  border-radius: 100%;
  .Icon {
    font-size: 5vh;
    color: white;
    border-color: #151515;
    border-radius: 40px;
  }
`;

export { HeaderComponent, BoxIcon };
