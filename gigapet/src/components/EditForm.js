import React from "react";
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { FormFood, FormError, FoodFormLable  } from "../styles"



const EditForm = ({ fn, userid, itemid, errors, touched})=>{
    //console.log(userid, itemid);
    return(
        <div>
            <Form>
                <FormFood type="small">
                    <FoodFormLable >Edit food entry</FoodFormLable >
                    <Field type="hidden" name="userid" value={userid}/>
                    <Field type="hidden" name="itemid" value={itemid}/>
                    <div>
                        <Field type="date" name="date" />
                        {touched.date && errors.date && <FormError>{errors.date}</FormError>}
                    </div>
                    <div>
                        <Field as="select" name="category" >
                            <option value="none">Select a Category</option>
                            <option value="fruit">Fruits</option>
                            <option value="vegetable">Vegetables</option>
                            <option value="grain">Whole Grains</option>
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
                    <div>
                    <button onClick={fn}>x</button> 
                    </div>
                    
                </FormFood>
            </Form>
            
        </div>
    );
}

const FormikEditForm = withFormik({
    mapPropsToValues({userid, itemid, date, category, food, portions}){
        return{
            userid: userid || "",
            id: itemid || "",
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
        console.log("submit from editform", values);
        

    }

})(EditForm);

export default FormikEditForm;