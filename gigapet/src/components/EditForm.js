import React from "react";
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
//import axios from "axios";
import { FormFood, FormError, FoodFormLable  } from "../styles"
import { Link } from 'react-router-dom';

const EditForm = ({ match, errors, touched})=>{
    let userid = match.params.uid;
    let id = match.params.iid;

    return(
        <div>
            <Form>
                <FormFood type="small">
                    <FoodFormLable >Edit food entry</FoodFormLable >
                    <Field type="hidden" name="id" value={userid}/>
                    <Field type="hidden" name="item" value={id}/>
                    <div>
                        <Field type="date" name="date" />
                        {touched.date && errors.date && <FormError>{errors.date}</FormError>}
                    </div>
                    <div>
                        <Field as="select" name="category" >
                            <option value="none">Select a Category</option>
                            <option value="fruits">Fruits</option>
                            <option value="vegetables">Vegetables</option>
                            <option value="grains">Whole Grains</option>
                            <option value="meat">Meat</option>
                            <option value="dairy">Dairy</option>
                            <option value="fats">Fat's and Oil's</option>
                            <option value="treats">Treats</option>
                        </Field>
                        {touched.food && errors.food && <FormError>{errors.food}</FormError>}
                    </div>
                    <div>
                        <Field type="text" name="food" placeholder="Food"/>
                        {touched.food && errors.food && <FormError>{errors.food}</FormError>}
                    </div>
                    <div>
                        <Field type="text" name="portions" placeholder="Portions/Servings"/>
                        {touched.portions && errors.portions && <FormError>{errors.portions}</FormError>}
                    </div>
                    <div>
                       <button type="submit">Edit Entry</button> 
                    </div>
                    <div>
                        <Link to={`/history/${id}`} >
                            <button >x</button> 
                        </Link>
                       
                    </div>
                    
                </FormFood>
            </Form>
            
        </div>
    );
}

const EditForms = withFormik({
    mapPropsToValues({userid, id, date, category, food, portions}){
        return{
            userid: userid || "", 
            id: id || "", // item id 
            date: date || "",
            category: category || "",
            portions: portions || "",
            food: food || "",
        };
    },

    validationSchema: Yup.object().shape({
        date: Yup
        .date()
        .required("Please select a date."),

        category: Yup
        .string()
        .notOneOf(["none"])
        .required("You must choose a food item."),
        
        portions: Yup
        .number("Entry must be a number.")
        .required("Portion/Servings is required"),

        food: Yup
        .string()
        .required("Food is required"),
    }),

    
    handleSubmit(values){
        console.log("submit from FoodEntry", values);


    }

})(EditForm);

export default EditForms;