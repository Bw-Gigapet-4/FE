import React from 'react';
import EditEntry from './EditEntry';
import EditForm from './EditForm';
import { Route } from 'react-router-dom';
import NavBar from './NavBar';

export default function History(props){

    let id = props.match.params.id;
    //console.log('id', id);
    
    //axios call here passing in id as user id

    return(
        <div>
            <NavBar />
            <h2>History</h2>
            <Route exact path="/history/:uid/:iid" component={EditForm}/>
            {/* map through items with EditEntry and set up props accordingly*/}
            <EditEntry userId={id} itemId={"1"}/>

        </div>
    );
}