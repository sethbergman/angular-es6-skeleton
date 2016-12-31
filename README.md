# Angular ES6 App Skeleton

This repo gives you a basic Angular 1.5 app skeleton following best practices outlined by [Todd Motto](https://github.com/toddmotto/angular-styleguide/blob/master/README.md), as well as Javascript code style recommended by [Airbnb](https://github.com/airbnb/javascript). It uses ES6 syntax and Webpack for bundling and development tools.

The skeleton has the basic page structure for a single page web application, including a header, nav, main content area, and footer. There are a couple mock app modules to get you started. They also contain tests and a starter karma and protractor configuration.

** Application Structure:**
```
/modules/   <-- application pages / screens grouped topically
/common/    <-- common, reusable code (components, directives, styles, etc)
app.js      <-- entry point
index.html
```

## Installation

```
git clone https://github.com/sethbergman/angular-es6-skeleton.git && cd angular-es6-skeleton
```

## Running The App For Development

```
npm install
npm start
```

`npm start` will start up the webpack dev server on port 5000. This gives you [Auto Refresh](https://webpack.github.io/docs/webpack-dev-server.html), which drastically speeds up development and debugging. Let me know if you have any problems running it. [Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement.html) coming soon.

## Bundling For Production

```
npm run build:prod
```

## Running The Unit Tests

```
npm run test:unit

OR

npm run test:unit-watch
```

## Running The End-To-End Tests

```
npm run test:e2e-server
npm run test:e2e
```

## Linting

```
npm run lint
```

@TODO:
* Fix issue with common base path resolves
