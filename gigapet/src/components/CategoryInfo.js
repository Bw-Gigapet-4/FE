import React from 'react';
import { DisplayFlex, DisplayBox, DisplayBox2 } from '../styles';

export default function CategoryInfo(props){
   
    //filter by category
    let filteredByCat = props.data.filter(item => item.category === props.category);
    

    //filter by todays date
    let today = new Date();

    let formattedDate = `${today.getFullYear()}-${(today.getMonth()+ 1)}-${today.getDate()}`;
                        
    let todayDate = new Date(formattedDate).toJSON();
    let todaysEntries = filteredByCat.filter(item => item.date === todayDate);
    

    //filter by month
    let theFirst = `${today.getFullYear()}-${(today.getMonth()+ 1)}-01`;
                    
    let theFirstDate = new Date(theFirst).toJSON();
                    
    let thisMonthsEntries = filteredByCat.filter(item => item.date<= todayDate && item.date >= theFirstDate );
    

    //filter by year
    let newYear = `${today.getFullYear()}-01-01`
                    
    let newYearDate = new Date(newYear).toJSON();

    let thisYearsEntries = filteredByCat.filter(item => item.date <= todayDate && item.date >= newYearDate);
    
    

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