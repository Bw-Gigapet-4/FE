import React, {useState, useEffect} from 'react';
import EditEntry from './EditEntry';
import EditForm from './EditForm';
import FoodEntry from './FoodEntry';
import NavBar from './NavBar';
import  {AxiosWithAuth as axios} from '../utils/AxiosWithAuth';




export default function History(props){
    const [formShow, setFormShow] = useState(false);
    const [itemId, setItemId] = useState('');
    const [history, setHistory] = useState([]);

    let id = props.match.params.id;
    
    const showEditForm = (x) =>{
        formShow === false && setFormShow(true);
        setItemId(x);
    };

    const removeForm = ()=>{
        setFormShow(false);
    };

    useEffect(()=>{
        //axios call here passing in id as user id
        axios()
        .get(`/food/${id}`)     
        .then(result =>{
            console.log("api result",result)
            setHistory(result.data)
        })
        .catch(error =>{
            console.log(error.response);
        })
    },[]);

    

    return(
        <div>
            <NavBar />
            <h2>History</h2>
            {formShow === true ? <EditForm userid={id} itemid={itemId} fn={removeForm}/> : null}
            
            {history.map((x,i)=>(
               <EditEntry
                    key={i} 
                    userId={x.user_id} 
                    itemId={x.id} 
                    fn={showEditForm}
                    date={""}
                    catagory={x.category}
                    food={x.food}
                    serving={x.serving_size}
                /> 
                
            ))}
            

        </div>
    );
}