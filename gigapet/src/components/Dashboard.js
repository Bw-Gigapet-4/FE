import React, { useState, useEffect } from 'react';
import FoodEntry from './FoodEntry';
import { DashContainer, DashNav } from '../styles'
import {Link, Route} from 'react-router-dom'; 
import  {AxiosWithAuth as axios} from '../utils/AxiosWithAuth';
import CategoryInfo from './CategoryInfo';
import NavBar from './NavBar';



function Dashboard(props){

    // get food data and set to state
    const [foodData, setFoodData] = useState([]);
    // const [update, setUpdate] = useState(false)

    let user = localStorage.getItem("username");
    let id = props.match.params.id;
    

    useEffect(()=>{
        //axios call here passing in id as user id
        axios()
        .get(`/food/${id}`)     
        .then(result =>{
            console.log("api result",result)
            setFoodData(result.data)
        })
        .catch(error =>{
            console.log(error.response);
        })
    },[]);

    return (
        <div>
            
            <NavBar page="dash" id={id}/>

            <h1>Welcome { user }</h1>
            <FoodEntry id={id}/>
            
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
                render={props => <CategoryInfo {...props} category="fruit" title ="fruit" data={foodData}/>}
                />

                <Route 
                exact path ="/dashboard/vegetables/" 
                render={props => <CategoryInfo {...props} category="vegtable" title="vegtable" data={foodData}/>}
                />

                <Route 
                exact path ="/dashboard/grains" 
                render={props => <CategoryInfo {...props} category="grain" title="whole grain" data={foodData}/>}
                />

                <Route 
                exact path ="/dashboard/meat" 
                render={props => <CategoryInfo {...props} category="meat" title="meat" data={foodData}/>}
                />

                <Route 
                exact path ="/dashboard/dairy" 
                render={props => <CategoryInfo {...props} category="dairy" title="dairy" data={foodData}/>}
                />

                <Route 
                exact path ="/dashboard/fats" 
                render={props => <CategoryInfo {...props} category="fats" title="fats and oils" data={foodData}/>}
                />

                <Route 
                exact path ="/dashboard/treats" 
                render={props => <CategoryInfo {...props} category="treats" title="treat" data={foodData}/>}
                />


            </DashContainer>
            
        </div>
    );
}


export default Dashboard;