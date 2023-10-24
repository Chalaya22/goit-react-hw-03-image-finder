import React, { Component, component } from 'react';
import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    name: ' ',
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  //   reset = () => {
  //     this.setState({ name: ' ' });
  //   };
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    // this.reset();
  };

  render() {
    return (
      <header className={css.searchBar}>
        <form onSubmit={this.handleInputChange} className={css.searchForm}>
          <button type="submit" className={css.searchFormBtn}>
            <span className={css.searchBtnLabel}>Search</span>
          </button>

          <input
            className={css.searchformImput}
            name="name"
            type="text"
            onChange={this.handleInputChange}
            value={this.state.name}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
