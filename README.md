# typescript-node-playground

example app showing how to setup and develop a typescript based node app using the [typings TypeScript Definition Manager](https://github.com/typings/typings)

### Initial Setup

```sh
$ npm init --force

$ typings install --ambient node

$ npm install request --save
$ typings install --ambient request

// tsc was complaining about `form-data`
$ typings install --ambient form-data

// for `Promise`, `Object.assign`, etc.
$ typings install --ambient es6-shim

// compile from .ts to .js
$ tsc
```

### Developing

```sh
// live re-compile and re-run on changes via nodemon
$ npm run dev

// NOTE: app will be ran 2xs on every change when editing in Atom since atom-typescript will re-compile also in addition to `tsc -w` in the `dev` npm script
```
