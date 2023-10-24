import React, { Component } from 'react';
import { StyledModal } from './Styled';
class Modal extends Component {
  render() {
    return (
      <StyledModal>
        <div className="modal">
          <button type="button" className="closeButton">
            &times;
          </button>
          <img src="" alt="" />
        </div>
      </StyledModal>
    );
  }
}
export default Modal;
