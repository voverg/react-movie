export class Api {
  constructor() {
    this.baseURL = 'http://www.omdbapi.com/';
    this.apiKey = 'faadd693';
  }

  async getMovies (name) {
    const url = `${this.baseURL}?apikey=${this.apiKey}&s=${name}`;

    const data = await fetch(url)
      .then((response) => response.json())
      .then((data) => data.Search);

    return data;
  }

}