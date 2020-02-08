import React from "react";
import { Link } from 'react-router-dom';
import { Nav } from '../styles';

export default function(props){
    return(
        <Nav>
           <div>
                {props.page === "dash" ? 
                <Link to={`/history/${props.id}`} >History</Link> :
                <Link to={`/dashboard/${props.id}`}>Dashboard</Link>
                }
            </div> 
            <div>
                <button>Log Out</button>
            </div>
        </Nav>
        
    );
}