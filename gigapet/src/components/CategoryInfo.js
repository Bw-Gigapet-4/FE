import React from 'react';
import { DisplayFlex, DisplayBox, DisplayBox2 } from '../styles';

export default function CategoryInfo(props){
   
    //filter by category
    let filteredByCat = props.data.filter(item => item.category === props.category);
    

    //filter by todays date
    let today = new Date();
    let formattedDate = `${(today.getMonth()+ 1)}/${today.getDate()}/${today.getFullYear()}`

    //let todaysEntries = filteredByCat.filter(item => item.date === formattedDate);
    let todaysEntries = filteredByCat.filter(item => item.date === formattedDate);
    

    //filter by month
    let theFirst = `${(today.getMonth()+ 1)}/1/${today.getFullYear()}`
    let thisMonthsEntries = filteredByCat.filter(item => item.date <= formattedDate && item.date >= theFirst );
    

    //filter by year
    let newYear = `1/1/${today.getFullYear}`
    let thisYearsEntries = filteredByCat.filter(item => item.date <= formattedDate && item.date >= newYear);
    
    

    return(
        <DisplayFlex>
            <DisplayBox>
                <h3>Todays {props.title} intake.</h3>
                
                {todaysEntries.map((x,i)=>(
                    <DisplayBox2 key={i}>
                        <h4>{x.date}</h4>
                        <h4>{x.food}</h4>
                        <h4>Servings: {x.serving_size}</h4>

                    </DisplayBox2>
                ))}
            </DisplayBox>

            <DisplayBox>
                <h3>This weeks {props.title} intake.</h3>
                
                {thisMonthsEntries.map((x,i)=>(
                    <DisplayBox2 key={i}>
                        <h4>{x.date}</h4>
                        <h4>{x.food}</h4>
                        <h4>Servings: {x.serving_size}</h4>

                    </DisplayBox2>
                ))}
            </DisplayBox>

            <DisplayBox>
                <h3>This months {props.title} intake</h3>
                {thisYearsEntries.map((x,i)=>(
                    <DisplayBox2 key={i}>
                        <h4>{x.date}</h4>
                        <h4>{x.food}</h4>
                        <h4>Servings: {x.serving_size}</h4>

                    </DisplayBox2>
                ))}

            </DisplayBox>

        </DisplayFlex>
    )
}