# Frontend Auth 

In this section we've attempted to set up the redux cycle in a way that is familiar to you from the full stack project. Because of this, we will move pretty quickly through some sections and not focus on the minute details of redux.

## Setting Axios Headers

Let's start out by ensuring that we send our authorization token with every request. In the last section, you installed axios so that you could make requests to your server from the frontend. We will be using axios to make our requests instead of AJAX like you did in the full stack project. You may wish to review the [documentation](https://www.npmjs.com/package/axios) for axios before proceeding with this tutorial.

Conveniently, axios allows us to set a common header for requests. We only have to do this once upon login (or when the user refreshes the page when we check to make sure the token has not expired). Let's create a new file in our `util` directory called `session_api_util.js`. We'll create a `setAuthToken` method to either set or delete the common header dependent on whether the token is passed into our method:

```JavaScript
// frontend/src/util/session_api_util.js

import axios from 'axios';

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};
```

We can pass in a falsey value to our function to ensure that the token will be removed from memory once our user is logged out or when the token has expired.

## User Logout

We will store a boolean value in our state to indicate that the user is authenticated. We can map this slice of state to our components to selectively render information depending on whether our user is logged in. It may seem a bit counterintuitive to set up logout before login, but we want to start building our app from the entry file and will need to handle logout there. In this example, we've attempted to make the redux pattern as similar as possible to the one you are familiar with from the full stack project examples. Delete the preconfigured component files from `create-react-app` and create a new file in `src` called `index.js`. Let's configure that file now:

```JavaScript
// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';

// We will create this component shortly
import Root from './components/root';

// We set this up in the last section
import configureStore from './store/store';

// We will use this to parse the user's session token
import jwt_decode from 'jwt-decode';

// The session utility we just created
import { setAuthToken } from './util/session_api_util';

// We have not created this action yet, but will do so in the next step
import { logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  // If a returning user has a session token stored in localStorage
  if (localStorage.jwtToken) {

    // Set the token as a common header for all axios requests
    setAuthToken(localStorage.jwtToken);

    // Decode the token to obtain the user's information
    const decodedUser = jwt_decode(localStorage.jwtToken);

    // Create a preconfigured state we can immediately add to our store
    const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    // If the user's token has expired
    if (decodedUser.exp < currentTime) {
      // Logout the user and redirect to the login page
      store.dispatch(logout());
      window.location.href = '/login';
    }
  } else {
    // If this is a first time user, start with an empty store
    store = configureStore({});
  }
  // Render our root component and pass in the store as a prop
  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store} />, root);
});
```

This is a pretty good start. However, there are a few missing pieces of the puzzle. In the next step, let's begin to set up our redux cycle so that we can logout our user.

### Logout Action

Create a new file in your `actions` folder called `session_actions.js`. Let's create our logout action:

```JavaScript
// src/actions/session_actions.js

// Although there's only one function here so far, let's import the whole file since we will be adding more later
import * as APIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';

// This pattern should be familiar to you from the full stack project

export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";

export const logoutUser = () => ({
    type: RECEIVE_USER_LOGOUT
});

export const logout = () => dispatch => {
    // Remove the token from local storage
    localStorage.removeItem('jwtToken')
    // Remove the token from the common axios header
    APIUtil.setAuthToken(false)
    // Dispatch a logout action
    dispatch(logoutUser())
};
```

### Session Reducer

We know we will be adding tweets and errors later, so we might as well set up our root reducer:

```JavaScript
// src/reducers/root_reducer.js

import { combineReducers } from 'redux';
import session from './session_reducer';

const RootReducer = combineReducers({
  session
});

export default RootReducer;
```

Now we can create our session reducer:

```JavaScript
import { RECEIVE_USER_LOGOUT } from '../actions/session_actions';

export default function(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined
      };
    default:
      return state;
  }
}
```

## Configuring the Root Component

Now that we're set up to log out our user, we can proceed to configure our root component with the hash router and provide the store to each sub-component:

```JavaScript
// src/components/root.js

import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
// We'll create this soon
import App from './app';

const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

export default Root;
```

## Route Util

You may recall from the full stack project that we created our own custom components to set up Auth and Protected routes. We will do something similar for this project. Start by creating a file in your `util` folder called `route_util.js`. We'll configure our routing components here:

```JavaScript
// src/util/route_util.js

import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

// Passed in from parent component or from mapStateToProps
const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
        // Redirect to the tweets page if the user is authenticated
      <Redirect to="/tweets" />
    )
  )} />
);

const Protected = ({ component: Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      loggedIn ? (
        <Component {...props} />
      ) : (
        // Redirect to the login page if the user is already authenticated
        <Redirect to="/login" />
      )
    }
  />
);

// Use the isAuthenitcated slice of state to determine whether a user is logged in

const mapStateToProps = state => (
  {loggedIn: state.session.isAuthenticated}
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
```

We'll use our custom Protected component to ensure users can only access certain information if they are logged in. If the user visits a login or signup page, the Auth component will redirect them to tweets page if they are already logged in.

## Route Setup

We're ready to begin configuring our routes. When we set up our root component, we wrapped a yet-to-be-created component called App in `Provider` and `HashRouter`. Let's create this component now in a file called `app.js`:

```JavaScript
// src/components/app.js

import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

import MainPage from './main/main_page';

const App = () => (
    <Switch>
        <AuthRoute exact path="/" component={MainPage} />
    </Switch>
);

export default App;
```

We'll come back to this in few minutes and add more routes. At this point, you should be thinking about your own project and which kinds of routes are required for the unique needs of your app.

Let's make a main page component that users will see when they land on the home page:

```JavaScript
// src/components/main/main_page.js

import React from 'react';

class MainPage extends React.Component {

  render() {
    return (
      <div>
        <h1>A Twitter Clone</h1>
        <footer>
          Copyright &copy; 2019 Chirper
        </footer>
      </div>
    );
  }
}

export default MainPage;
```

Returning to `app.js`, let's think about the remaining Auth routes and components we'll need to complete our application. It may be useful to have a navigation bar that appears on every page. We will also need to render components with forms that allow our users to sign up or login. 

Considering these needs, let's keep building out `app.js`:

```JavaScript
// src/components/app.js

import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
        <AuthRoute exact path="/" component={MainPage} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;
```

## Navigation Bar

Our navigation bar appears on every page, and will contain either navigation links or session links depending on whether the user is logged in. We'll use the `isAuthenticated` boolean in our state to determine which set of links to render, so we'll need to map state to props. We also want to map our logout action to this component so that our user always has the option to end their session. Let's start by building a container for our navigation component:

```JavaScript
// src/components/nav/navbar_container.js

import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import NavBar from './navbar';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated
});

export default connect(
  mapStateToProps,
  { logout }
)(NavBar);
```

And now we create the NavBar component:

```JavaScript
// src/components/nav/navbar.js

import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div>
                <Link to={'/tweets'}>All Tweets</Link>
                <Link to={'/profile'}>Profile</Link>
                <Link to={'/new_tweet'}>Write a Tweet</Link>
                <button onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return (
            <div>
                <Link to={'/signup'}>Signup</Link>
                <Link to={'/login'}>Login</Link>
            </div>
        );
      }
  }

  render() {
      return (
        <div>
            <h1>Chirper</h1>
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;
```

## Login and Signup

Let's start setting up the redux cycle for user authentication. We'll start by handling session errors, then get down to the business of making API calls, dispatching actions, and creating the login/signup forms.

### Session Errors

More likely than not, we will need to handle errors for other forms in our application in addition to the session errors. Since this is the case, let's make an errors reducer to handle all of our errors:

```JavaScript
// src/reducers/errors_reducer.js

import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';

export default combineReducers({
  session: SessionErrorsReducer
});
```

Don't forget to add this errors reducer to the root reducer.

Now, let's create the session errors reducer. When we receieve a new set session errors, we want to replace the old errors in the state. If we successfully log the user in, we want to clear the session errors. Let's get started.

```JavaScript
src/reducers/session_errors_reducer.js

import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
} from '../actions/session_actions';

const _nullErrors = [];

const SessionErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return _nullErrors;
    default:
      return state;
  }
};

export default SessionErrorsReducer;
```

In order for this to work, we'll need to actually create these session actions. While we're at it, let's write their corresponding login and signup methods. 

```JavaScript
// src/actions/session_actions.js

import * as APIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";

// We'll dispatch this when our user signs in
export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

// This will be used to redirect the user to the login page upon signup
export const receiveUserSignIn = () => ({
    type: RECEIVE_USER_SIGN_IN
});
  
// We dispatch this one to show authentication errors on the frontend
export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

// When our user is logged out, we will dispatch this action to set isAuthenticated to false
export const logoutUser = () => ({
    type: RECEIVE_USER_LOGOUT
});

// Upon signup, dispatch the approporiate action depending on which type of response we receieve from the backend
export const signup = user => dispatch => (
    APIUtil.signup(user).then(() => (
        dispatch(receiveUserSignIn())
    ), err => (
        dispatch(receiveErrors(err.response.data))
    ))
);

// Upon login, set the session token and dispatch the current user. Dispatch errors on failure.
export const login = user => dispatch => (
    APIUtil.login(user).then(res => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        APIUtil.setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(receiveCurrentUser(decoded))
    })
    .catch(err => {
        dispatch(receiveErrors(err.response.data));
    })
)

// We wrote this one earlier
export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken')
    APIUtil.setAuthToken(false)
    dispatch(logoutUser())
};
```

Finally, we need to create the actual requests we are making from `APIUtil`. In our `util/session_api_util.js` file, let's add two methods which each take user data return a Promise:

```JavaScript
// src/util/session_api_util.js

import axios from 'axios';

// We've been using this method in previos steps
export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const signup = (userData) => {
  return axios.post('/api/users/register', userData);
};

export const login = (userData) => {
  return axios.post('/api/users/login', userData);
};
```

You might be thinking that keeping these axios requests in their own utility file is a bit useless. In fact, many developers do handle their API calls within the action itself. We followed this convention since it is similar to the format you are already familiar with. 

The final step in setting up the redux cycle is to complete the session reducer:

```JavaScript
// src/reducers/session_api_reducer.js

import { RECEIVE_CURRENT_USER, 
         RECEIVE_USER_LOGOUT, 
         RECEIVE_USER_SIGN_IN } from '../actions/session_actions';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !!action.currentUser,
        user: action.currentUser
      };
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined
      };
    case RECEIVE_USER_SIGN_IN:
      return {
        ...state,
        isSignedIn: true
      }
    default:
      return state;
  }
}
```

## Session Forms

Finally, let's create forms our our users to sign up or login. Both of these forms are similar, so you could mapStateToProps as we did for the `NavBar` component and do some conditional rendering to display the appropriate session form. However, for the sake of complexity, we have separated these into two forms for this tutorial.

```JavaScript
// src/components/session/login_form_container.js

import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
```

```JavaScript
// src/components/session/login_form.js

import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  // Once the user has been authenticated, redirect to the Tweets page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/tweets');
    }

    // Set or clear errors
    this.setState({errors: nextProps.errors})
  }

  // Handle field updates (called in the render method)
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user); 
  }

  // Render the session errors if there are any
  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
            <br/>
            <input type="submit" value="Submit" />
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
```

```JavaScript
// src/components/session/signup_form_container.js

import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = (state) => {
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: user => dispatch(signup(user))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
```

```JavaScript
// src/components/session/signup_form.js

import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      handle: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      handle: this.state.handle,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history); 
  }

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="login-form">
            <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
            <br/>
              <input type="text"
                value={this.state.handle}
                onChange={this.update('handle')}
                placeholder="Handle"
              />
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
            <br/>
              <input type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Confirm Password"
              />
            <br/>
            <input type="submit" value="Submit" />
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
```

We did it! At this point, you should be able to sign up, login, and logout a user. If you provide invalid information on a session form, the errors will be rendered in a bulleted list below the form. 

In the next section, we will conclude by adding the ability for our user to view and compose tweets.