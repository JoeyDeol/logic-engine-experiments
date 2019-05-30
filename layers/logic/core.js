class Core {
  constructor(plugins) {
    this.plugins = plugins.map((plugin) => new plugin());

    console.log('Core Plugins', this.plugins);
  }
}
