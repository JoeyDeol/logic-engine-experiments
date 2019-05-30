# Logic Engine Experiments

## Requirements
- Each implementation should satisfy the following requirements:
  - It must include a 'core' entity.
  - It must include one or more 'data source' plugins.
  - It must include one or more 'events' plugins.
  - It must include one or more dummy components.
  - Each component should:
    - Have an initial/default state.
    - Expose a mechanism for updating its initial state (eg. via attributes and/or properties).
    - Handle one or more user actions (eg. 'click' events).
    - Request data from the Logic layer (eg. by emitting an event, or some other mechanism),
    - Receive and display data from the Logic Layer (eg. by listening to an events, or some other mechanism).
  - It must include a demo page or application that:
    - Instantiates the Logic layer.
    - Mounts and instantiates the 'dummy' components.
    - Allows users to interact with the 'dummy' components.
    - Allows users to interact directly with teh Logic layer.
