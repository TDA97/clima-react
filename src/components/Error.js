import React from 'react';
import ProptTypes from 'prop-types';


const Error = ({mensaje}) => {
        return (  
                <p className="red darken-4 error">{mensaje}</p>
        );
}

Error.propTypes = {
        mensaje: ProptTypes.string.isRequired
}
 
export default Error;