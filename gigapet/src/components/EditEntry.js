import React from 'react';
import { FormFood } from '../styles';





export default function EditEntry(props){
    //console.log(props);

    return(
        <div>
            <FormFood type="small">
                <p>Date: {props.date}</p> 
                <p>Catagory: {props.catagory}</p>
                <p>Food: {props.food}</p>
                <p>Servings: {props.serving}</p>
                <div>
                    <button onClick={()=>props.fn(props.itemId)}>Edit</button>
                </div>
                <div>
                    <button>Delete</button> 
                </div>
                
            </FormFood>

        </div>
        
    );
}