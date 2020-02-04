import React from 'react';
import FoodEntry from './FoodEntry'

export default function Dashboard(){
    return (
        <div>
            <FoodEntry />
            <div>
                Display daily/weekly/monthly data here
            </div>
            
        </div>
    );
}