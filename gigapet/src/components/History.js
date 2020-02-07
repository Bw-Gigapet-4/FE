import React, {useState, useEffect} from 'react';
import EditEntry from './EditEntry';
import EditForm from './EditForm';
import NavBar from './NavBar';
import  {AxiosWithAuth as axios} from '../utils/AxiosWithAuth';




export default function History(props){
    const [formShow, setFormShow] = useState(false);
    const [itemId, setItemId] = useState('');
    const [history, setHistory] = useState([]);

    let id = props.match.params.id;
    
    const showEditForm = (x) =>{
        formShow === false ? setFormShow(true) : setFormShow(false);
        setItemId(x);
    };

    const removeForm = ()=>{
        setFormShow(false);
    };

    useEffect(()=>{
        //axios call here passing in id as user id
        axios()
        .get('/food/:id')
        .then(result =>{
            console.log("api result",result)
            //setHistory(result.pathtodata)
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
            
            {/* map through items with EditEntry and set up props accordingly*/}
            <EditEntry 
                userId={id} 
                itemId={"1"} 
                fn={showEditForm}
                date={""}
                catagory={""}
                food={""}
                serving={""}
            />

        </div>
    );
}