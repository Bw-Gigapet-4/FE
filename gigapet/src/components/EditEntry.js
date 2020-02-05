import React, { useState }  from 'react';
import { FormFood } from '../styles';
import { Link, Route} from 'react-router-dom';
import EditForms from './EditForm';

export default function EditEntry(props){
    

    return(
        <div>
            <FormFood type="small">
                <p>Date: {props.date}</p> 
                <p>Catagory: {props.catagory}</p>
                <p>Food: {props.food}</p>
                <p>Serving: {props.serving}</p>
                <div>
                    <Link to={`/history/${props.userId}/${props.itemId}`}>
                        <button>Edit</button>
                    </Link> 
                </div>
                <div>
                    <button>Delete</button> 
                </div>
                
            </FormFood>

            {/* <Route exact path="/history/:uid/:iid" component={EditForms}/> */}
        </div>
        
    );
}