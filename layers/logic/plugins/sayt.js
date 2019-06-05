const Sayt = (() => {
  class Sayt {
    constructor() {
      this.name = 'sayt';
      this.type = 'data-source';
      this.wantedEvents = {
        fetchSaytProducts: this.fetch,
      };
    }

    fetch() {
      console.log('THIS IS A METHOD THAT FETCHES SAYT DATA!');
    }
  }

  return Sayt;
})();
