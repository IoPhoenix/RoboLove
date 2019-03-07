import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants.js';

import * as reducers from './reducers';

describe('search robots', () => {
    const mockInitialStateSearch = {
        searchField: ''
    }
    
    it('should return initial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' });
    });

    it('should handle CHANGE_SEARCH_FIELD action', () => {
        expect(reducers.searchRobots(mockInitialStateSearch, {
            type: CHANGE_SEARCH_FIELD,
            payload: 'abc'
        })).toEqual({
            searchField: 'abc'
        })
    });  
})


describe('requestRobots reducer', () => {
    const mockInitialStateRobots = {
        isPending: false,
        robots: [],
        error: ''
    }

    it('should return initial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(mockInitialStateRobots);
    });

    it('should handle REQUEST_ROBOTS_PENDING action', () => {
        expect(reducers.requestRobots(mockInitialStateRobots, {
            type: REQUEST_ROBOTS_PENDING
        })).toEqual({
            robots: [],
            isPending: true,
            error: ''
        });
    });

    it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
        expect(reducers.requestRobots(mockInitialStateRobots, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{
                id: '123',
                name: 'test',
                email: 'test@mail.com'
            }]
        })).toEqual({
            robots: [
                {
                    id: '123',
                    name: 'test',
                    email: 'test@mail.com'
                }
            ],
            isPending: false,
            error: ''
        });
    });


    it('should handle REQUEST_ROBOTS_FAILED action', () => {
        expect(reducers.requestRobots(mockInitialStateRobots, {
            type: REQUEST_ROBOTS_FAILED,
            payload: 'Error occured!'
        })).toEqual({
            robots: [],
            isPending: false,
            error: 'Error occured!'
        });
    });
});