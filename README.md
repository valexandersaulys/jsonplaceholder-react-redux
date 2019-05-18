# README

A little fake blog to show off what I've learned with my react django
redux tutorial, this time applied to [JSON
Placeholder](https://jsonplaceholder.typicode.com/) with a little bit
of [Bulma React Components](https://kulakowka.github.io/react-bulma/).

This is _just for React JS + Redux_ and will not use a backend. That's
the point of the JSON placeholder.


## Take 1

I'll be going super slow here so we'll start with creating the
rudiments of everything.

```shell
npm init -y
```

Then I'll install all the dependencies I'll be needing:

```shell
npm i -D @babel/core \
    babel-loader \
    @babel/preset-env \
    @babel/preset-react \
    babel-plugin-transform-class-properties \
    react \
    react-dom \
    prop-types \
    redux \
    react-redux \
    redux-thunk \
    redux-devtools-extension \
    axios \
    webpack \
    webpack-cli
```

Then the file directory layout. This will be a `src` folder followed
by a `build` folder, with the latter actually holding our finished
code.

```
vincent@vincent-xps-13:src$ tree
.
├── actions
├── components
├── index.js
├── reducers
└── store.js

3 directories, 2 files
```

Then the `.babelrc` and `webpack.config.js` files are created.

To confirm everything works, we drop in a console log and then run the
file!

(Right after I remember to put back the `index.html` file lol)


## Take 2

First, we'll create a few components to run and load those into the
template.

Install `reactbulma` and `css-loader` (latter is a dependency). Add in
extra details within webpack.config.js so it knows to parse css.

Then play around with bulma css designs and conventions. 

Now, put in place the basics of the router. Install
`react-router-dom`, create two different links.

After playing around a bit, add in a proper couple of components:

  - FrontPage => hold all posts
  - Post/:id => hold a particular post

Then reducers, actions, etc.

Got it working as a basic concept! woo
