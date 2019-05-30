class Core {
  constructor(plugins) {
    this.plugins = plugins.map((plugin) => new plugin());
  }

  /* 
    The fetchData core method expects to receive the type of data they you are trying to fetch.
    The type of data refers to which one of your plugins you want to pull data from.
  */
  fetchData(dataType) {
    this.plugins.filter((plugin) => plugin.name === dataType)[0].fetch();
  }
}
