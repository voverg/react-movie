import { Component } from 'react';

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.search);
    this.setState({search: ''});
  }

  render() {
    return (
      <div className="search">
        <form
          className="search__form"
          onSubmit={this.onSubmit}
        >
          <input
            type="search"
            className="search__input"
            value={this.state.search}
            placeholder="search..."
            onChange={(event) => this.setState({search: event.target.value})}
          />
          <button type="submit" className="search__btn">Search</button>
        </form>
      </div>
    );
  }
}