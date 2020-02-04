import React from 'react';
import { FormFood } from '../styles';

export default function EditEntry(props){
    return(
        <FormFood>
            <p>Date: {props.date}</p> 
            <p>Catagory: {props.catagory}</p>
            <p>Food: {props.food}</p>
            <p>Serving: {props.serving}</p>
            <div>
               <button>Edit</button> 
            </div>
            <div>
                <button>Delete</button> 
            </div>
           
        </FormFood>
    );
}