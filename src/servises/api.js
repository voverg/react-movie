export class Api {
  constructor() {
    this.baseURL = 'https://www.omdbapi.com/';
    this.apiKey = import.meta.env.VITE_API_KEY;
    // this.apiKey = 'faadd693';
  }

  getResource = async (url) => {
    const fullUrl = `${this.baseURL}?apikey=${this.apiKey}${url}`;

    try {
      const resource = await fetch(fullUrl).then((response) => response.json())
      return resource;
    } catch(error) {
      console.log(`Error fetch to url ${url}`);
    }

  }

  getMovies = async (name, type = '') => {
    const url = `&s=${name}&type=${type}`;

    const data = this.getResource(url)
      .then((data) => {
        return {
          movieList: data?.Search ? data.Search : [],
          totalResults: data?.totalResults ? data.totalResults : 0,
        };
      });

      return data;
  }

}