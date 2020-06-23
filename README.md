[![npm version](https://badgen.net/npm/v/react-notifications-component)](https://www.npmjs.com/package/react-notifications-component) [![npm](https://img.shields.io/npm/dm/react-notifications-component.svg)](https://www.npmjs.com/package/react-notifications-component) [![Minified & Gzipped size](https://badgen.net/bundlephobia/minzip/react-notifications-component)](https://bundlephobia.com/result?p=react-notifications-component)

# fake-notifications

A easy to use and highly configured component to show notifications of fake payments.

# Demo

##Features

## Getting Started

```
npm install fake-notifications
```

## Usage

###

Import <code>fake-notifications</code>
```js
import FakeNotifications from 'fake-notifications'
```

Render <code>fake-notifications</code> at the top of your application so that it does not conflict with other absolutely positioned DOM elements.

```jsx
const App = () => {
  return (
    <div className="app-container">
      <FakeNotifications />
      <Application />
    </div>
  )
};
```