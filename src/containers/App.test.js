import { shallow, mount, render } from "enzyme";
import React from "react";
import App from "./App";
import { Provider } from "react-redux";
// import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { searchRobots, requestRobots } from "../reducers";

const robotReducer = combineReducers({ searchRobots, requestRobots });
const store = createStore(robotReducer, applyMiddleware(thunkMiddleware));

// shallow: test only one component, no child components
// mount: test components that interact with dom, lifecycle methods, full rendering
// render: render React components in static html, uses cheerio, tests child components as well

const shallowWrapper = shallow(
    <Provider store={store}>
        <App />
    </Provider>
);

it("expect to render App component", () => {
    expect(shallowWrapper).toMatchSnapshot();
});
