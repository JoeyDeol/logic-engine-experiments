# Logic Engine Experiments

## Requirements
- Each implementation should satisfy the following requirements:
  - It MUST include a 'core' entity.
  - It MUST include one or more 'data source' plugins.
  - It MUST include one or more 'events' plugins.
  - It MUST include one or more dummy components.
  - Each component should:
    - Have an initial/default state.
    - Expose a mechanism for updating its initial state (eg. via attributes and/or properties).
    - Handle one or more user actions (eg. 'click' events).
    - Request data from the Logic layer (eg. by emitting an event, or some other mechanism),
    - Receive and display data from the Logic Layer (eg. by listening to an events, or some other mechanism).
  - It MUST include a demo page or application that:
    - Instantiates the Logic layer.
    - Mounts and instantiates the 'dummy' components.
    - Allows users to interact with the 'dummy' components.
    - Allows users to interact directly with the Logic layer.

## First Application Constraints
- The core entity MUST accept an unlimited number of plugins.
- The core entity MUST be environment agnostic.
- Every plugin MUST be of a known type.
  - Types are specified by the plugin authors and they MUST conform to a one of the known types.
- The core entity MUST not know about any of the other portions of the application.
- Plugins MAY depend on each other.
- Exactly 1 events type plugin MUST be provided.
- The Logic Layer MUST support 'Data Transformation' plugins.
- The Logic Layer MUST support 'caching' type plugins.
