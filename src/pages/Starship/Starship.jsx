import React from 'react';
import { Link } from 'react-router-dom';


const Starship = (props) => {
    
    const starship = props.getStarship(props.match.params.idx);

    return (
        <div>
            Starship Name: {starship.name}<br></br>
            Starship Model: {starship.model}<br></br>
            <Link to='/'>RETURN</Link>
        </div>
        
    )
}

export default Starship;