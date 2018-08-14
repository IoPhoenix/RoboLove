import React from 'react';

const Sticky = (props) => {
    return (
        <div style={{ position: 'sticky', zIndex: 1, top: '0' }}>
            {props.children}
        </div>
    );
}

export default Sticky;