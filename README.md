[![npm version](https://badgen.net/npm/v/fake-notifications)](https://www.npmjs.com/package/fake-notifications) [![npm](https://badgen.net/npm/license/lodash)](https://www.npmjs.com/package/fake-notifications) [![Minified & Gzipped size](https://badgen.net/bundlephobia/minzip/react-notifications-component)](https://bundlephobia.com/result?p=react-notifications-component)

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