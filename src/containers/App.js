import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import Sticky from '../components/Sticky';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';

import {setSearchField} from '../actions';

const mapStateToProps = (state) => {
    return {
        searchField: state.searchField
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}))
        .catch(err => console.log('Could not fetch robots: ', err));
    }

    // redux replaces this with action and reducer:
    // onSearchChange = (e) => {
    //     this.setState({ searchfield: e.target.value });
    // }

   render() {
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredRobots = robots.filter(robot => {
        return robot.name
                .toLowerCase()
                .includes(searchField.toLowerCase());
    });

    return !robots.length
        ? <h1 className='tc ma5'>Loading...</h1>
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

// subscribe app to any state changes in redux store:
export default connect(mapStateToProps, mapDispatchToProps)(App);
