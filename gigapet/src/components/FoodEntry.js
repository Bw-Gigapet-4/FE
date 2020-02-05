import React from "react";
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
//import axios from "axios";
import { FormFood, FormError, FoodFormLable  } from "../styles"

const FoodFields = ({ id, errors, touched})=>{
    return(
        <div>
            <Form>
                <FormFood>
                    <FoodFormLable >Add a food entry</FoodFormLable >
                    <Field type="hidden" name="id" value={id}/>
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
                       <button type="submit">Add an Entry</button> 
                    </div>
                    
                </FormFood>
            </Form>
            
        </div>
    );
}

const FoodEntry = withFormik({
    mapPropsToValues({id, date, category, food, portions}){
        return{
            id: id || "",
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

    // insert resetForm  when axios call is completed
    handleSubmit(values){
        console.log("submit from FoodEntry", values);


    }

})(FoodFields);

export default FoodEntry;