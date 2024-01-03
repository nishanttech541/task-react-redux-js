### Question

> Describe the process, in a react-redux project, to fetch a set of data from a remote API endpoint, then to store that data into redux and then to present it on the screen.

### Solution

- Set redux store.
- Define action creators.
- Creating reducers.
- Integrating redux with application.
- Creating component to show in UI.

### 1. Set redux store

- First you need to setup a redux store to implement redux funcationality throughout the application.

- For creating redux store you need to use redux and react-redux packages.

- Then you need to define `actions`, ` action types`, `reducers`, and `initial state` related to fetching and storing this specific set of data.

### 2. Define action creators

- Define `action creators` which will fetch data from the API.

- This action creators will make API requests using tools like `'axios'` or `'fetch'`.

- After receiving the data, dispatch actions with the fetched data as payload.

### 3. Creating reducers

- The actions you have dispatched using action creators now will be handled by the reducers based on the action type.

- Create a reducer function that will listen to the actions dispatched related to fetching data.

- Now update the redux store state with the data fetched.

### 4. Integrating redux with application

- Using the `'react-redux'` `'Provider'` at the top level of your app connect redux store with your application.

- To access redux store in your react components you can use `connect() function` or `'useSelector' hook`.

### 5. Creating component

- Now create a react component where you want to display the fetched data.

- You can use `useEffect` if using functional component or `componentDidMount` incase you are using class component, to dispatch action creator to fetch the data when component mounts for `inital loading` of data or calling the api.

- Now to access the data form the redux store you can use `mapStateToProps` if using class component and `useSelector` hook if using functional component.

- The data you will get now can be displayed by rendering it to the components JSX.

> Example:

```javascript
// Actions

const DATA_FETCH_SUCCESSFUL = "DATA_FETCH_SUCCESSFUL";

const dataFetchSuccessfully = (data) => ({
  type: DATA_FETCH_SUCCESSFULLY,
  payload: data,
});
```

```javascript
// Reducers

const initialState = {
  Data: [],
};

const dataFetchReducer = (state = initalState, action) => {
  switch (action.type) {
    case "DATA_FETCH_SUCCESSFULLY":
      return {
        ...state,
        Data: action.payload,
      };
    default:
      return state;
  }
};
```

```javascript
// Action Creator to fetch data from API

const dataFetch = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://api.xyz.com/data");
      const data = await response.json();
      dispatch(dataFetchSuccessfully(data));
    } catch (error) {
      console.log(error);
    }
  };
};
```

```javascript
// React Component to display fetched data

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const SomeComponent = ({ Data }) => {
  const Data = useSelector((state) => state.dataFetchReducer.Data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dataFetch());
  }, [dispatch]);

  return (
    <div>
      <h1>Data to be Displayed</h1>
      <ul>{Data && Data.map((item) => <li key={item.id}>{item.title}</li>)}</ul>
    </div>
  );
};

export default SomeComponent;
```
