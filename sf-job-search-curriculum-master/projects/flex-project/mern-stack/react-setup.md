# React Setup

Before starting this section, you will want to review the [Create React App user guide](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md).

Let's start setting up the frontend of our application:

- In your terminal, run `npm install -g create-react-app` - this will install React globally.
  - Update npm if prompted to do so.
- In the root directory of your project, run `create-react-app frontend` - this will install a new React application in a new folder called 'frontend'.
- If you look in the 'frontend' directory, you will notice that it has its own node_modules folder. Make sure to .gitignore this folder.
- When setting up routes for our React app, we don't want to be required to type the full path; we would rather just write something like '/api/users/:id'. To do this we will need to add a key-value pair to the `package.json` **in our frontend folder**: `"proxy": "http://localhost:5000"`
- React runs on its own development server - localhost:3000. While we could write separate commands to run each server, this would quickly become rote. We will use an npm package called 'concurrently' to run both servers at once.
    - ( As a sidenote, making an axios request with a proxy will first run an API request to localhost:300 and then redirect the request to localhost:500. You may get a console error saying that the route, localhost:300/api/users/ does not exist. This error is okay, as axios is making a request to both servers at this point. )
- Navigate to the root directory of your project
- Run `npm install concurrently`
- Add three new scripts to your package.json:
    - "frontend-install": "npm install --prefix frontend"
        - This will allow users who download your project from GitHub to easily install dependencies from both folders
    - "frontend": "npm start --prefix frontend"
    - "dev": "concurrently \"npm run server\" \"npm run frontend\""
- Now, if we type `npm run dev` in the terminal, both of our servers will start running. You can view the frontend on `localhost:3000`
- You may find the Chrome React Developer Tools and Redux DevTools useful for your project.
If you installed the 'ES7 React/Redux/GraphQL/React-Native snippets' extension in VS Code, you can run 'rfc => tab' to create a functional component or 'rcc => tab' to create a class component. (make sure to review the documentation for this extension).

### Axios and jwt-decode

Let's add [axios](https://www.npmjs.com/package/axios) and [jwt-decode](https://www.npmjs.com/package/jwt-decode) to our frontend so that we can fetch information from our server and parse the user's token:

- Navigate to your frontend folder
- Run `npm install axios jwt-decode`

### File Structure

Since you have already covered React earlier in the App Academy curriculum, we will not do a deep dive into React or Redux during this tutorial. However, we will walk through the steps of setting up the Redux cycle so that we can authenticate users, access tweets, and view a single user's tweets.

Start by setting up your file structure in the `src` directory:

```
actions
components
reducers
store
util
```

### Store

Let's configure our Redux store. This step should be familiar to you after your experience with the full stack project earlier in the curriculum.

- Within the `store` directory, create a new file called `store.js`:

```JavaScript
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  )
);

export default configureStore;
```

As you likely recall, applying the middleware allows us to view our state in the console window whenever we dispatch a new action to the store. The ability to configure our store with a preloaded state will come in handy in the next section, allowing us to authenticate users who are already logged in when they revisit our site.