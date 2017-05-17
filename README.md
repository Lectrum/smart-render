# SmartRender

[![Status Maintained](https://img.shields.io/badge/status-maintained-brightgreen.svg?style=flat)](https://github.com/Lectrum/smart-render/pulse)
[![npm version](https://badge.fury.io/js/smart-render.svg)](https://badge.fury.io/js/smart-render)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/Lectrum/smart-render/pulls)
[![Join the chat at https://gitter.im/lectrum/smart-render](https://badges.gitter.im/lectrum/smart-render.svg)](https://gitter.im/lectrum/smart-render?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Twitter URL](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/lectrumhq)

> Welcome to the new better world without `display:none;`!

SmartRender is a wrapper for your components that should be visible on certain breakpoints and not visible on others.

This approach is better than writing `display: none;` in CSS. If you use this package, HTML element that shouldn't be rendered - will not be in the DOM, in contrast to CSS `display: none;` rule (in this case HTML element will be presented in the DOM, but just not show).

## Installation

You can install `SmartRender` using npm:

`npm install smart-render --production -D`

We use `-D` flag which is the same as `--save-dev`. In this case, the package will appear in your devDependencies. It is a right way because you only need to use it during local development.

This package depends on [breakpoints-json](https://www.npmjs.com/package/breakpoints-json). It is a JSON formatted breakpoints, which correspond to popular modern devices.

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

## Afterwords

We hope this package is helpful for you. If you enjoy it, fell free to star it. For anything else create a new [issue](https://github.com/Lectrum/smart-render/issues). Contributions are welcome and we will be grateful for any corrections or questions you can send us.

We love supporting our open-source projects. You can be sure that we will help you in our [gitter](https://gitter.im/lectrum/smart-render) and [twitter](https://twitter.com/lectrumhq) within 24 hours!

## License

This project is licensed under the terms of the [MIT license](https://github.com/Lectrum/smart-render/blob/master/LICENSE).
