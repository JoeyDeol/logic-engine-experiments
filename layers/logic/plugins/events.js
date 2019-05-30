const Events = (() => {
  class Events {
    constructor() {
      this.name = 'events';
      this.type = 'event';

      // The below collectEvents property is expected to contain event objects. Example: [{ ...eventData... }, {...eventData...}];
      this.collectedEvents = [];
    }

    registerWantedEvents(eventName, callback) {
      console.log('logging out wanted events #registerWantedEvents', eventName);
      window.addEventListener(eventName, callback);
    }

    collect(event) {
      this.collectedEvents.push(event);
      console.log('logging out collected events', this.collectedEvents);
      this.process();
    }

    process() {
      let currentEvent = this.collectedEvents.shift();
      if (currentEvent.type === "fetchProducts") {
        //TODO fetch product data and send back product data via new Event.
      }
    }

    emitUpdate() {
      // Use this to send data back out after process() has fired in response to an event to indicate the application has processed the wantedEvents.
    }
  }
  
  return Events;
})();
