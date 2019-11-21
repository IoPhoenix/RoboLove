import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { setSearchField, requestRobots } from "../actions";
import MainPage from "../components/MainPage";

// declare what pieces of state you want to have access to:
const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    };
};

// declare which action creators you need to be able to dispatch:
const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: event => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    };
};

class App extends Component {
    render() {
        return <MainPage {...this.props} />;
    }
}

// use connect to connect React to Redux:
export default connect(mapStateToProps, mapDispatchToProps)(App);
