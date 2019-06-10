const saytData = [
  {
    productName: 'chocolate bar',
    price: '1.99',
    availability: true,
    rating: 4,
  },
  {
    productName: 'nintendo switch',
    price: '499',
    availability: true,
    rating: 5,
  },
  {
    productName: 'macbook pro',
    price: '2399',
    availability: true,
    rating: 3,
  },
]

const Sayt = (() => {
  class Sayt {
    constructor() {
      this.name = 'sayt';
      this.type = 'data-source';
      this.wantedEvents = {
        fetchSaytProducts: this.fetch,
      };
    }

    // The fetch method should return an object or an array with data-source plugin related data.
    fetch() {
      console.log('THIS IS A METHOD THAT FETCHES SAYT DATA!', saytData);
      return saytData
    }
  }

  return Sayt;
})();
