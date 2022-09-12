import {FaSearchDollar} from 'react-icons/fa'
import PropTypes from 'prop-types';
const { Component } = require('react');

class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleChangeValue = event => {
    this.setState({ inputValue: event.target.value });
  };
  handleSubmit = event => {
    const { inputValue } = this.state;
    const { onSubmitForm } = this.props;
    event.preventDefault();
    onSubmitForm(inputValue);
  };

  render() {
    const { inputValue } = this.state;
    const { handleChangeValue } = this;

    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <FaSearchDollar className='svg'/>
          </button>
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={inputValue}
            onChange={handleChangeValue}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  state: PropTypes.shape({
    inputValue: PropTypes.string.isRequired
  }),
  onSubmitForm: PropTypes.func.isRequired,
}
