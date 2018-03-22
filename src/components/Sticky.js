import React from 'react';

const Sticky = (props) => {
    return (
        <div style={{ position: 'sticky', zIndex: 1, top: '10px' }}>
            {props.children}
        </div>
    );
}

export default Sticky;