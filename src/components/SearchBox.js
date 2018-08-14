import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className='mb2'>
            <input
             className='w-25 pa3 b ba bw2 bg-navy lightest-blue roboto' 
             type='search'
             style={{ borderColor: '#13ffa8' }}
              placeholder='Search for your perfect robolove...' 
              onChange={searchChange}
            />        
        </div>
    );
}

export default SearchBox;