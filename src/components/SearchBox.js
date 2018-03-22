import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className='mb2'>
            <input
             className='pa3 b b--green bg-navy lightest-blue roboto' 
             type='search'
              placeholder='Search robots' 
              onChange={searchChange}
            />        
        </div>
    );
}

export default SearchBox;