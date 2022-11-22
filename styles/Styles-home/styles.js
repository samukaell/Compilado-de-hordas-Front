import styled from "styled-components";

const ContainerHome = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .Icon {
    font-size: 80px;
    color: white;
  }
`;

const BoxTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleApp = styled.h1`
  font-family: "Reem Kufi", sans-serif;
  
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;

  p{
    margin-top: 2px;
    margin-bottom: 2px;
    font-size: 28px;
    font-weight: 700;
  }
  .d{
    font-size: 18px;
  }
`;

const BoxButton = styled.div`
    margin-top: 4vh;
    font-family: 'Lato', sans-serif;
    button{
        width: 40vw;
        height: 40px;
        border-radius: 5px;
        border: none;
        background-color: white;
        color: #525252;
    }
`;

export { ContainerHome, BoxTitle, TitleApp, BoxButton };
