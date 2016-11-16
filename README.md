This is a template [React](https://facebook.github.io/react/) application that also includes [Bootstrap](http://getbootstrap.com) and [FontAwesome](http://fontawesome.io/icons/).

# Setup

### Install nvm

Install [nvm](https://github.com/creationix/nvm), which lets you switch between different versions of Node.

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash
```

### Install Node

Install Node (this will also install [npm](https://docs.npmjs.com/getting-started/what-is-npm)):

```
nvm install node
```

### Download Atom

Download [Atom](https://atom.io/) if you need a "hackable text editor" for editing code.

# Create your application

### Clone the repository

Clone this repository, replacing `my-app` with the name of your application.

```
git clone git@github.geo.apple.com:neutron-edu/fx-app.git my-app
cd my-app/
```

### Remove origin

In git, the origin is an alias for the remote repository from which we cloned. Remove the origin, since we don't want to update the `fx-app` repository!

```
git remote rm origin
```

To check that the origin was removed:

```
git remote -v
```

### Rename the application

Update `package.json` with the name of your application. This should be what you used instead of `my-app`.

```
npm init
```

Update `<title>` in [./public/index.html](./public/index.html) to be something like "My App".

# Install dependencies

Install dependencies (e.g., React) since their sources are not saved with your application in source control.

```
npm install
```

This installs the dependencies specified in [./package.json](./package.json). If you peek in `./node_modules`, you'll see a whole lot of stuff. That's because your dependencies have dependencies, and so on.

# Run your application

```
npm run start
```

The application should now be running in your browser at [http://localhost:3000/](http://localhost:3000/). It'll automatically be refreshed when you make code changes. Change something in [App.js](./src/App.js) to see this in action.
