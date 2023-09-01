import { Component } from 'react';

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      type: '',
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.search, this.state.type);
    // this.setState({search: ''});
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
      <div className="search">
        <form
          className="search__form"
          onSubmit={this.onSubmit}
        >
          <div className="search__top">
            <input
              type="search"
              name="search"
              className="search__input"
              value={this.state.search}
              placeholder="search..."
              // onChange={(event) => this.setState({search: event.target.value})}
              onChange={this.handleChange}
            />
            <button type="submit" className="search__btn">Search</button>
          </div>
          <div className="search__bottom">
            <label>
              <input
                type="radio"
                name="type"
                value=""
                checked={this.state.type === ''}
                onChange={this.handleChange}
              /> All
            </label>
            <label>
              <input
                type="radio"
                name="type"
                value="movie"
                checked={this.state.type === 'movie'}
                onChange={this.handleChange}
              /> Movies
            </label>
            <label>
              <input
                type="radio"
                name="type"
                value="series"
                checked={this.state.type === 'series'}
                onChange={this.handleChange}
              /> Series
            </label>
          </div>
        </form>
      </div>
    );
  }
}