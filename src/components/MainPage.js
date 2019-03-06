import React, {Component} from 'react';
import './MainPage.css';
import Sticky from '../components/Sticky';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';


class MainPage extends Component {

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
export default MainPage;
