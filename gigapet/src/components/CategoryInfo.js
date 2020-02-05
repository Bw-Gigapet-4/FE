import React from 'react';
import { DisplayFlex, DisplayBox } from '../styles';

export default function CategoryInfo(props){
    //loop, map, and/or filter through prop.data per prop.category 
    //and then display totals for each time period day, weekly, monthly
    //add averages as data to display if time.
    // use new Date(), getDay(), getMonth() as needed to set the range of dates.
    
    return(
        <DisplayFlex>
            <DisplayBox>
                <h3>Todays total {props.title} intake.</h3>
            </DisplayBox>

            <DisplayBox>
                <h3>This weeks total {props.title} intake.</h3>
            </DisplayBox>

            <DisplayBox>
                <h3>This months total {props.title} intake</h3>
            </DisplayBox>

        </DisplayFlex>
    )
}