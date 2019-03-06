import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import Sticky from '../components/Sticky';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';

import {setSearchField, requestRobots} from '../actions';

// declare what pieces of state you want to have access to:
const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

// declare which action creators you need to be able to dispatch:
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {

    componentDidMount() {
       this.props.onRequestRobots();
    }

   render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
        return robot.name
                .toLowerCase()
                .includes(searchField.toLowerCase());
    });

    return isPending ?
        <h1 className='tc ma5'>Loading...</h1>
        : (
            <div className='tc'>
                <h1 className='f1'>RoboLove</h1>
                <Sticky>
                    <SearchBox searchChange={onSearchChange} />
                </Sticky>   
                <ErrorBoundary>
                    <CardList className='flex justify-center' robots={filteredRobots} />                
                </ErrorBoundary>                 
            </div>
        )
    }
}

// use connect to connect React to Redux:
export default connect(mapStateToProps, mapDispatchToProps)(App);
