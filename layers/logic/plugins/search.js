const Search = (() => {
  class Search {
    constructor() {
      this.name = 'search';
      this.type = 'data-source';
      console.log('Search plugin has been instantiated');
    }

    fetch() {
      console.log('THIS IS A METHOD THAT FETCHES SEARCH DATA!');
    }
  }
  
  return Search;
})();
