import styled from 'styled-components';

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 450px;
    min-height: 450px;
    width: 100%;
    background-color: white;
    border-radius: 10px;
  }
  .closeButton {
    position: absolute;
    top: 15px;
    right: 15px;
    border: none;
  }
`;
