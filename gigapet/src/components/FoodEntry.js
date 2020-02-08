import React from "react";
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { addNewEntry } from '../store/actions/action';
import { connect } from 'react-redux';
//import axios from "axios";
import { FormFood, FormError, FoodFormLable  } from "../styles"

const FoodFields = ({ id, errors, touched })=>{
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
                        <Field type="text" name="serving_size" placeholder="Portions/Servings"/>
                        {touched.serving_size && errors.serving_size && <FormError>{errors.serving_size}</FormError>}
                    </div>
                    <div>
                       <button type="submit">Add an Entry</button> 
                    </div>
                    
                </FormFood>
            </Form>
            
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const FoodEntry = withFormik({
    mapPropsToValues({id, date, category, food, serving_size}){
        return{
            user_id: id || "",
            date: date || "",
            category: category || "",
            serving_size: serving_size || "",
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
        
        serving_size: Yup
        .number("Entry must be a number.")
        .required("Portion/Servings is required"),

        food: Yup
        .string()
        .required("Food is required"),
    }),

    // insert resetForm  when axios call is completed
    handleSubmit(values, formikBag){
        console.log("submit from FoodEntry", values);

        formikBag.props.addNewEntry(values)

    }

})(FoodFields);

export default connect(mapStateToProps, {addNewEntry})(FoodEntry);