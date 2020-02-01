import React from "react";
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from "axios";

const FoodFields = ({ errors, touched} )=>{
    return(
        <div>
            <Form>
                <h1>What are we eating?</h1>

                <Field type="date" name="date" />

                <Field as="select" name="food">
                    <option value="fruits">Fruits</option>
                    <option value="vegetables">Vegetables</option>
                    <option value="grains">Whole Grains</option>
                    <option value="meat">Meat</option>
                    <option value="dairy">Dairy</option>
                    <option value="fats">Fats and Oils</option>
                    <option value="treats">Treats</option>
                </Field>

            </Form>
        </div>
    );
}

const FoodEntry = withFormik({

})(FoodFields);

export default FoodEntry;