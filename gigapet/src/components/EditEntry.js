import React from 'react';

export default function EditEntry(props){
    return(
        <div>
            <p>{props.date}</p> 
            <p>{props.catagory}</p>
            <p>{props.food}</p>
            <p>{props.serving}</p>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    );
}