import React from 'react';
import ExteriorHandler from '../components/exteriorHandler/ExteriorHandler';

const Exterior = () => {
    return (
        <div style={{ position: 'fixed', marginTop: 300, width: 1000, height: 1000 }}>
            <ExteriorHandler />
        </div>
    )
}

export default Exterior
