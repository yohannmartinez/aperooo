import styled from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  align-items: center;
`;

const Content = styled.div`
  background-color: white;
`;

const Modal = ({ children }) => {
  return (
    <ModalContainer>
      <Content>{children}</Content>
    </ModalContainer>
  );
};

export default Modal;
