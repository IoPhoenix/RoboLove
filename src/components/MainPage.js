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

    filterRobots = () => {
        return this.props.robots.filter(robot => {
            return robot.name
                    .toLowerCase()
                    .includes(this.props.searchField.toLowerCase());
        });
    }


   render() {
    const { onSearchChange, isPending } = this.props;

    return isPending ?
        <h1 className='tc ma5'>Loading...</h1>
        : (
            <div className='tc'>
                <h1 className='f1'>RoboLove</h1>
                <Sticky>
                    <SearchBox searchChange={onSearchChange} />
                </Sticky>   
                <ErrorBoundary>
                    <CardList className='flex justify-center' robots={this.filterRobots()} />                
                </ErrorBoundary>                 
            </div>
        )
    }
}

// use connect to connect React to Redux:
export default MainPage;
