import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import Modal from './Modal/Modal';

export class App extends Component {
  state = {
    isOpenModal: false,
    modalData: null,
  };
  // const BASE_URL = 'https://pixabay.com/api/';
  // const API_KEY = '39344710-74bbb124ce1c1439ca3e67f9f';

  //modalWimdow
  openModal = someDataToModal => {
    this.setState({ isOpenModal: true, modalData: someDataToModal });
  };
  closeModal = () => {
    this.state({ isOpenModal: false, modalData: null });
  };

  render() {
    return (
      <div>
        <Searchbar />
        {/* <Modal /> */}
      </div>
    );
  }
}
