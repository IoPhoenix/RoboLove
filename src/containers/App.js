import React, {Component} from 'react';
import './App.css';
import Sticky from '../components/Sticky';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}) );
    }

    onSearchChange = (e) => {
        this.setState({ searchfield: e.target.value });
    }

   render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
        return robot.name
                .toLowerCase()
                .includes(searchfield.toLowerCase());
    });

    return !robots.length
        ? <h1 className='tc ma5'>Loading...</h1>
        : (
            <div className='tc'>
                <h1 className='f1'>RoboLove</h1>
                <Sticky>
                    <SearchBox searchChange={this.onSearchChange} />
                </Sticky>                    
                <CardList className='flex justify-center' robots={filteredRobots} />                
            </div>
        )
    }
}

export default App;