import React, { useState, useEffect } from 'react';
import FoodEntry from './FoodEntry';
import EditEntry from './EditEntry';
import { DashContainer, DashNav } from '../styles'
import {Link, Route} from 'react-router-dom'; 
import  axios from 'axios';
import CatagoryInfo from './CatagoryInfo';


export default function Dashboard(){

    // get food data and set to state
    const {foodData, setFoodData} = useState([]);

    useEffect(()=>{
        // axios
        // .get('')
        // .then(result =>{
        //     console.log("api result",result)
        //     setFoodData("path to data")
        // })
        // .catch(error =>{
        //     console.log(error.response);
        // })    
    },[])

    return (
        <div>
            <h1>Welcome 'usernamehere'</h1>
            <FoodEntry id={"user id here"}/> 

            <DashContainer>
                <DashNav>
                    <Link to="/dashboard/">Fruits</Link>
                    <Link to="/dashboard/vegetables/">Vegetables</Link>
                    <Link to="/dashboard/grains/">Whole Grains</Link>
                    <Link to="/dashboard/meat/">Meats</Link>
                    <Link to="/dashboard/dairy/">Dairy</Link>
                    <Link to="/dashboard/fats/">Fat's and Oil's</Link>
                    <Link to="/dashboard/treats/">Treats</Link>
                    
                    
                </DashNav>
                
                <Route 
                exact path ="/dashboard/" 
                render={props => <CatagoryInfo {...props} catagory="fruits" title ="fruit" data={foodData}/>}
                />

                <Route 
                exact path ="/dashboard/vegetables/" 
                render={props => <CatagoryInfo {...props} catagory="vegtables" title="vegtable" data={foodData}/>}
                />

                <Route 
                exact path ="/dashboard/grains" 
                render={props => <CatagoryInfo {...props} catagory="grains" title="whole grain" data={foodData}/>}
                />

                <Route 
                exact path ="/dashboard/meat" 
                render={props => <CatagoryInfo {...props} catagory="meat" title="meat" data={foodData}/>}
                />

                <Route 
                exact path ="/dashboard/dairy" 
                render={props => <CatagoryInfo {...props} catagory="dairy" title="dairy" data={foodData}/>}
                />

                <Route 
                exact path ="/dashboard/fats" 
                render={props => <CatagoryInfo {...props} catagory="fats" title="fats and oils" data={foodData}/>}
                />

                <Route 
                exact path ="/dashboard/treats" 
                render={props => <CatagoryInfo {...props} catagory="treats" title="treat" data={foodData}/>}
                />


            </DashContainer>

            <h4>History</h4>
            {/* map through items with EditEntry */}
            <EditEntry/>
        </div>
    );
}