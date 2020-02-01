import React from "react";
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from "axios";

const FoodFields = ({ errors, touched} )=>{
    return(
        <div>
            <Form>
                <h2>What are we eating?</h2>

                <Field type="date" name="date" />
                {touched.date && errors.date && <p>{errors.date}</p>}

                <Field as="select" name="food" >
                    <option value="none">Choose an Option</option>
                    <option value="fruits">Fruits</option>
                    <option value="vegetables">Vegetables</option>
                    <option value="grains">Whole Grains</option>
                    <option value="meat">Meat</option>
                    <option value="dairy">Dairy</option>
                    <option value="fats">Fats and Oils</option>
                    <option value="treats">Treats</option>
                </Field>
                {touched.food && errors.food && <p>{errors.food}</p>}

                <Field type="text" name="portions" placeholder="Portions/Servings"/>
                {touched.portions && errors.portions && <p>{errors.portions}</p>}

                <button type="submit">Add an Entry</button>

            </Form>
        </div>
    );
}

const FoodEntry = withFormik({
    mapPropsToValues({date, food, portions}){
        return{
            date: date || "",
            food: food || "",
            portions: portions || "",
        };
    },

    validationSchema: Yup.object().shape({
        date: Yup
        .date()
        .required("Please select a date."),

        food: Yup
        .string()
        .notOneOf(["none"])
        .required("You must choose a food item."),
        

        portions: Yup
        .number("Entry must be a number.")
        .required("Portion/Servings is required"),
    }),

    handleSubmit(values){
        console.log("submit from FoodEntry", values);

        // axios
        //     .post("", values)
        //     .then(result => {
        //         console.log("Post success", result);
                
        //     })
        //     .catch(error =>{
        //         console.log("Post Error", error.response);
        //     });

    }

})(FoodFields);

export default FoodEntry;