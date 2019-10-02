import React from 'react';
import { Link } from 'react-router-dom';
import './Starship.css';

const Starship = (props) => {
    
    const starship = props.getStarship(props.match.params.idx);

    return (
        <div className='Starship'>
        {starship ?
            <div className='Starship-starship'>
                <span>Starship Name:</span>
                <span>{starship.name}</span>
                <span>Starship Model:</span>
                <span>{starship.model}</span>
                <Link to='/'>RETURN</Link>
            </div>
        :
            <h4>Loading...</h4>
        }
        </div>
    )
}

export default Starship;