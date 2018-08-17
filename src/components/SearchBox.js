import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className='mb2'>
            <input
             className='w-80 w-50-ns w-25-l pa3 b ba bw2 bg-navy lightest-blue roboto' 
             type='search'
             style={{ borderColor: '#13ffa8' }}
              placeholder='Search for your perfect robot...' 
              onChange={searchChange}
            />        
        </div>
    );
}

export default SearchBox;