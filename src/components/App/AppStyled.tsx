import styled from "styled-components";

const AppStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  .app-mayuscula {
    &__button-container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 4rem;
      background-color: #060;
      width: 100%;
      height: 300px;
    }
  }
`;

export default AppStyled;
