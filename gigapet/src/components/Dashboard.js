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
    const [update, setUpdate] = useState(false)

    let user = localStorage.getItem("username");
    let id = props.match.params.id;
    
    const updateOnEntry = () => {
        update ? setUpdate(false) : setUpdate(true)
    };
    console.log("update",update)

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
    },[update]);

    return (
        <div>
            
            <NavBar page="dash" id={id}/>

            <h1>Welcome { user }</h1>
            <FoodEntry user_id={id} fn={updateOnEntry}/>
            
            <DashContainer>
                <DashNav>
                    <Link to={`/dashboard/${id}`}>Fruits</Link>
                    <Link to={`/dashboard/${id}/vegetables/`}>Vegetables</Link>
                    <Link to={`/dashboard/${id}/grains/`}>Whole Grains</Link>
                    <Link to={`/dashboard/${id}/meat/`}>Meats</Link>
                    <Link to={`/dashboard/${id}/dairy/`}>Dairy</Link>
                    <Link to={`/dashboard/${id}/fats/`}>Fat's and Oil's</Link>
                    <Link to={`/dashboard/${id}/treats/`}>Treats</Link>    
                </DashNav>
                
                <Route 
                exact path ="/dashboard/:id" 
                render={props => <CategoryInfo {...props} category="fruit" title ="fruit" data={foodData}/>}
                />

                <Route 
                exact path ="/dashboard/:id/vegetables/" 
                render={props => <CategoryInfo {...props} category="vegetable" title="vegetable" data={foodData}/>}
                />

                <Route 
                exact path ="/dashboard/:id/grains" 
                render={props => <CategoryInfo {...props} category="grain" title="whole grain" data={foodData}/>}
                />

                <Route 
                exact path ="/dashboard/:id/meat" 
                render={props => <CategoryInfo {...props} category="meat" title="meat" data={foodData}/>}
                />

                <Route 
                exact path ="/dashboard/:id/dairy" 
                render={props => <CategoryInfo {...props} category="dairy" title="dairy" data={foodData}/>}
                />

                <Route 
                exact path ="/dashboard/:id/fats" 
                render={props => <CategoryInfo {...props} category="fats" title="fats and oils" data={foodData}/>}
                />

                <Route 
                exact path ="/dashboard/:id/treats" 
                render={props => <CategoryInfo {...props} category="treats" title="treat" data={foodData}/>}
                />


            </DashContainer>
            
        </div>
    );
}


export default Dashboard;