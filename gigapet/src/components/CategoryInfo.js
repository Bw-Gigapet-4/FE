import React from 'react';
import { DisplayFlex, DisplayBox } from '../styles';

export default function CategoryInfo(props){
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