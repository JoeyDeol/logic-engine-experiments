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

## Successes and Failures
### Successes
- Creating a core entity that instantiates all plugins that are provided to it.
- Creating primitive data-source plugins that returned some form of data.
- Creating an events plugin that is assumed to be present by all the pieces of this POC.
  - Enabling this events plugin to handle communication between plugins and components.

### Failures
- Creating stateful components proved to be difficult.
  - Having an update fire for Web Components is not a straightforward task, and creating work-arounds in vanilla JavaScript implementations to allow for components to update in a similar way to other component based frameworks seems odd.

## Insights and Findings
- While working through these experiments one of the more interesting patterns I discovered was trying to implement a point in time within my events plugin to allow for events or the data they are carrying to be modified or interacted with.
  - This pattern exposes the opportunity to do more with an event-driven architecture and allows for flexibility to shape and transform data before it is consumed by elements that are listening for particular events.
  - This has led me to believe that we should consider defining the 'lifecycle' for any given plugin in order to allow for easier points in time to have our plugin interactions occur.
- This implementation relied on the assumption that an events plugin was present within the environment, which allowed me to link all component communication and plugin communication through the events plugin. This architecture made communicate easy and allowed for the flow of information to move throughout my POC in a predictable manner.
- Within my POC there was a pattern I found where I had data-source plugins defining what events they 'wanted' and providing callbacks that should fire in response to those events.
  - This choice made it so that plugin authors have to know about and consider the events that they want to interact with while they are creating the structure of their plugin.
- Another pattern that I liked was that my core entity separated the plugins by 'type'.
  - This separation allowed for plugins to be grouped and have them go through particular functionality based around what type of plugin they were.
  - Being able to differentiate/group plugins could be useful when creating functionality that is to be shared between similar plugins but is not appropriate to share across all plugins.
