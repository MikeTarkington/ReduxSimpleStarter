functional component
- can contain class components

class component
- use when state tracking is required from render pass to render pass
- use when need to instantiate the component

always use setState() to change state once it has been initialized in the constructor of the class component
- changes of state in a render function causes a rerender
