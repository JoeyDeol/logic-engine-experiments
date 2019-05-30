const Search = (() => {
  class Search {
    constructor() {
      this.name = 'search';
      this.type = 'data-source';
      this.wantedEvents = {
        fetchProducts: this.fetch,
      };
      console.log('Search plugin has been instantiated');
    }

    fetch() {
      console.log('THIS IS A METHOD THAT FETCHES SEARCH DATA!');
    }
  }
  
  return Search;
})();
