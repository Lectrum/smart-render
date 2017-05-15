# SmartRender

[![Join the chat at https://gitter.im/lectrum/smart-render](https://badges.gitter.im/lectrum/smart-render.svg)](https://gitter.im/lectrum/smart-render?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

SmartRender is a wrapper for your components that should be visible on certain breakpoints and not visible on another.
This approach is better than writing `display: none;` in CSS. If you use this component HTML element that should be not rendered - will not be in the DOM, in contrast to CSS `display: none;` rule (in this case HTML element will be presented in the DOM, but just not show).

## Installation

You can install `SmartRender` using npm:

`npm install -D smart-render`

We use `-D` flag which is the same as `--save-dev`. In this case, the package will appear in your devDependencies. It is a right way because you only need to use it during local development.

This package depends on [`breakpoints-json`](https://www.npmjs.com/package/breakpoints-json).

## Usage

You should write breakpoints name to `breakpoints` props to render component only on necessary devices.
In example below `Avatar` component should be rendered only on mobile devices.

```js
import SmartRender from 'smart-render';

const AppBar = () => {
    <SmartRender breakpoints = 'phonePortrait phoneLandscape' >
        <Avatar icon = 'person' />
    </SmartRender>
};
```

## License

This project is licensed under the terms of the [MIT license](https://github.com/Lectrum/smart-render/blob/master/LICENSE).
