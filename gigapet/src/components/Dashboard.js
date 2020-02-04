import React, { useState, useEffect } from 'react';
import FoodEntry from './FoodEntry';
import EditEntry from './EditEntry';
import axios from 'axios';

export default function Dashboard(){

    useEffect(()=>{
        axios
        .get(`food/1/`)
        .then(result =>{
            console.log("api result",result)
        })
        .catch(error =>{
            console.log(error);
        })    
    },[])

    return (
        <div>
            <FoodEntry />
            <div>
                Display daily/weekly/monthly data here
            </div>
            <EditEntry/>
        </div>
    );
}