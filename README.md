# REACT-FORUM

This project was development for React Developer Nanodegree by UDACITY.

### Summary

1. [Installation](#installation)
2. [Running the Application](#running-the-application)
3. [Internal Architecture](#internal-architecture)
4. [Folder Structure](#folder-structure)
5. [UI](#ui)

## Installation

Install Application dependencies and Sample API dependencies.

```
yarn
```

## Running the Application

To run the application you need to start the application:

```
# Start Application
yarn start
```

## Internal Architecture:

- **Pages**: Each page is responsible for displaying a context, containing a set of modules specific to that route.

- **Modules:** The modules are specific features of the project, always emphasizing the "DRY" and de-tripping.

- **Redux Store:** Keeps the current application state.

- **Styles:** Gives visual styling for UI components. Commonly described using [SaaS language](https://sass-lang.com/) and imported directly by the component JS files.

- **Utils:** It contains specific functions that can be used by the project as a whole.

---

## Folder Structure

The folder structure are divided into modules and other stuff:

```
frontend/
  README.md
  node_modules/
  package.json
  .env
  public/
    index.html
    favicon.ico
    manifest.json
  src/
    App.js
    App.scss
    index.css
    App.css
    index.js
    serviceWorker.js
    modules/
      Feature/
        Feature.js
        Feature.module.scss
        index.js
    Pages/
      Page/
        Page.js
        index.js
    redux/
      actions/
      middleware/
      reducers/
      selectors/
    utils/
      utils.js
      constants.js
      factories.js
      helpers.js
```

## UI

The UI was based on this layout:
http://preview.themeforest.net/item/disputo-wordpress-bbpress-forum-theme/full_screen_preview/21584099

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
