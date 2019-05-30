class Core {
  constructor(plugins) {
    this.plugins = plugins.map((plugin) => new plugin());
    this.eventsPlugin = this.plugins.filter((plugin) => plugin.type === 'event')[0];
    this.dataSourcePlugins = this.plugins.filter((plugin) => plugin.type === 'data-source');
    this.dataSourcePlugins.forEach((plugin) => {
      Object.keys(plugin.wantedEvents).forEach((key) => this.eventsPlugin.registerWantedEvents(key, plugin.wantedEvents[key]));
    });
  }

  /* 
    The fetchData core method expects to receive the type of data they you are trying to fetch.
    The type of data refers to which one of your plugins you want to pull data from.
  */
  fetchData(dataType) {
    this.plugins.filter((plugin) => plugin.name === dataType)[0].fetch();
  }

  collectEvent(event) {
    this.plugins.filter((plugin) => plugin.name === 'events')[0].collect(event);
  }
}
