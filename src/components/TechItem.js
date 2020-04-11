import React from 'react';
import PropTypes from 'prop-types';

function TechItem({tech, onDelete}){
    return (
            <li>
                {tech}
                <button onClick={onDelete} type="button">remover</button>
            </li>
    );    
}

// Propriedades default
TechItem.defaultProps = {
    tech: 'Oculto'
}

TechItem.PropTypes = {
    tech : PropTypes.string,   
    onDelete : PropTypes.func.isRequired
}

export default TechItem;