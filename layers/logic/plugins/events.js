const Events = (() => {
  class Events {
    constructor() {
      this.name = 'events';
      this.type = 'event';

      // The below collectEvents property is expected to contain event objects. Example: [{ ...eventData... }, {...eventData...}];
      this.collectedEvents = [];
      this.collect = this.collect.bind(this);
      this.process = this.process.bind(this);
    }

    registerWantedEvents(eventName, callback) {
      window.addEventListener(eventName, callback);
      window.addEventListener(eventName, this.collect);
      window.addEventListener(eventName, this.process);
    }

    /*
      The purpose of the collect method is to be able to collect registered events from other plugins and push them into an array within this plugin.
     */
    collect(event) {
      this.collectedEvents.push(event);
    }

      /*
        The purpose of the process method is to respond to registered events and allow for a point in which other portions of the application can interact with events if they choose to. Also the process method is meant to 'clean up' after the collect method and update the collectedEvents array.
       */
    process(event) {
      let currentEvent = this.collectedEvents.filter((item) => {
        return item.type === event.type;
      });

      let remainingEvents = this.collectedEvents.filter((item) => {
        return item.type != event.type;
      });

      this.collectedEvents = remainingEvents;
      
      switch (event.type) {
        case 'fetchProducts':
            console.log('A FETCH PRODUCTS EVENT HAS BEEN PROCESSED!');
            break;
        case 'fetchSaytProducts':
          console.log('A FETCH SAYT PRODUCTS EVENT HAS BEEN PROCESSED!');
          break;
        default:
            console.log('This is an unknown event!');
      }
    }

    /* 
      The purpose of the emitUpdate method is to signal to the greater application that that events plugin has now concluded processing a given event. This is meant to act as a signal for when any given event has reached the end of its journey through the events plugin.
    */
    emitUpdate() {
      // Use this to send data back out after process() has fired in response to an event to indicate the application has processed the wantedEvents.
    }
  }
  
  return Events;
})();
