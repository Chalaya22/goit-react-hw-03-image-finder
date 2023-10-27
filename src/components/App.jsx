import React, { Component } from 'react';
import Notiflix from 'notiflix';
import axios from 'axios';
import css from './App.module.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import Button from './Button/Button';

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
    showLoadMoreBtn: false,
  };
  async componentDidUpdate(prevProps, prevState) {
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
        this.setState({ error: error.massage });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }
  //imageGallary
  handleGelleryList = event => {
    if (event.target.nodeName === 'IMG') {
      this.setState({ actionID: event.target.id, isOpenModal: true });
    }
  };

  //modalWimdow
  openModal = someDataToModal => {
    this.setState({ isOpenModal: true, modalData: someDataToModal });
  };
  closeModal = () => {
    this.state({ isOpenModal: false, modalData: null });
  };
  //serchbar
  handelSearch = query => {
    this.setState({ query: query, page: 1, images: [] });
  };
  // button Load More
  onButtonLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <div className={css.app}>
        {this.state.error !== null && (
          <p> Ooops...Error massage: {this.state.error}</p>
        )}
        <Searchbar handelSearch={this.handelSearch} />

        <ImageGallery handleGelleryList={this.handleGelleryList}>
          {this.state.images.map(image => (
            <ImageGalleryItem image={image} key={image.id} />
          ))}
        </ImageGallery>

        {this.state.isLoading && <Loader />}

        {this.state.images.length > 0 && (
          <Button onButtonLoadMore={this.onButtonLoadMore} />
        )}

        {/* <Modal /> */}
      </div>
    );
  }
}
