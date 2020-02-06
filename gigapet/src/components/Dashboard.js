import React, { useState, useEffect } from 'react';
import FoodEntry from './FoodEntry';
import { DashContainer, DashNav } from '../styles'
import {Link, Route} from 'react-router-dom'; 
//import  {AxiosWithAuth as axios} from '../utils/AxiosWithAuth';
import CategoryInfo from './CategoryInfo';
import NavBar from './NavBar';

import { connect } from 'react-redux';

const mapStateToProps = state => ({userid: state.user.id, username: state.user.username});

function Dashboard({userid, username}){

    console.log(userid, username);
   
    // get food data and set to state
    const {foodData, setFoodData} = useState([]);

    useEffect(()=>{
        // axios()
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
            
            <NavBar page="dash" id={userid}/>

            <h1>Welcome { username }</h1>
            <FoodEntry id={userid}/>
            
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
                render={props => <CategoryInfo {...props} category="fruits" title ="fruit" data={foodData}/>}
                />

                <Route 
                exact path ="/dashboard/vegetables/" 
                render={props => <CategoryInfo {...props} category="vegtables" title="vegtable" data={foodData}/>}
                />

                <Route 
                exact path ="/dashboard/grains" 
                render={props => <CategoryInfo {...props} category="grains" title="whole grain" data={foodData}/>}
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

export default connect(mapStateToProps)(Dashboard);