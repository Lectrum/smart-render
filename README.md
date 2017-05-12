# SmartRender

## Installation

You can install `SmartRender` using npm:

`npm install -D smart-render`

We use `-D` flag which is the same as `--save-dev`. In this case, the package will appear in your devDependencies. It is a right way because you only need to use it during local development.

This package depends on 'breakpoints-json' and 'react' packages.

## Usage

SmartRender is a wrapper for your components that should be visible on certain breakpoints and not visible on another.
You should write breakpoints name to `breakpoints` props to render component only on necessary devices.
In example below `Avatar` component should be rendered only on mobile devices.

```JSX
import SmartRender from 'smart-render';

const AppBar = () => {
    <SmartRender breakpoints = 'phonePortrait phoneLandscape' >
        <Avatar icon = 'person' />
    </SmartRender>
};
```



