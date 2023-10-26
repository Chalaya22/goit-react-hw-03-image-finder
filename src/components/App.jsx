import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import axios from 'axios';
import fetchImages from '../services/fetch';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

export class App extends Component {
  state = {
    isOpenModal: false,
    modalData: null,
    isloading: false,
    error: null,
    images: [],
    query: '',
    page: 1,
    actionID: null,
  };
  async componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      this.setState({ isLoading: true });
      try {
        const response = await fetchImages(this.state.query, this.state.page);
        this.setState(prevState => ({
          images: [...prevState.images, ...response],
        }));
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  galleryListHandler = event => {
    if (event.target.nodeName === 'IMG') {
      this.setState({ actionID: event.target.id, modalOpen: true });
    }
  };

  //modalWimdow
  openModal = someDataToModal => {
    this.setState({ isOpenModal: true, modalData: someDataToModal });
  };
  closeModal = () => {
    this.state({ isOpenModal: false, modalData: null });
  };

  handelSearch = query => {
    this.setState({ query: query, page: 1, images: [] });
  };

  render() {
    return (
      <div>
        <Searchbar handelSearch={this.handelSearch} />

        <ImageGallery handleGelleryList={this.galleryListHandler}>
          {this.state.images.map(image => (
            <ImageGalleryItem image={image} key={image.id} />
          ))}
        </ImageGallery>

        {/* <Modal /> */}
      </div>
    );
  }
}
