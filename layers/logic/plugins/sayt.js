const Sayt = (() => {
  class Sayt {
    constructor() {
      this.name = 'sayt';
      this.type = 'data-source';
      console.log('Sayt plugin has been instantiated');
    }

    fetch() {
      console.log('THIS IS A METHOD THAT FETCHES SAYT DATA!');
    }
  }

  return Sayt;
})();
