import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import {FormContainer, FormItem, FormError} from "../styles";
import { Link } from 'react-router-dom';

const FormFields = ({errors, touched}) =>{
    
    
    return(
        <FormContainer className="boarding">
            <Form>
                <h1>Log In</h1>
                <FormItem>
                    <Field type="text" name="username" placeholder="User Name" />
                    {touched.name && errors.name && <FormError>{errors.name}</FormError>}
                </FormItem>
                <FormItem>
                    <Field type="password" name="password" placeholder="Password" />
                    {touched.password && errors.password && <FormError>{errors.password}</FormError>}
                </FormItem>
                <div>
                    <button type="submit">Log In</button>
                </div>
                <p>Don't have an account?</p>
                <Link to={"/signup/"}>
                    <button>Sign Up</button>
                </Link>
                
            </Form>

        </FormContainer>
    );
}

const LogIn = withFormik({
    mapPropsToValues({name, password}){
        return{
            username: name || "",
            password: password || "",
        }      
    },

    validationSchema: Yup.object().shape({
        username: Yup
        .string()
        .required("User Name is Required"),
        
        password: Yup
        .string()
        .min(8, "Password must be 8 characters or longer")
        .required("Password is Required"),
    }),

    handleSubmit(values){
        console.log("values from submit", values);

        // axios
        //     .post("", values)
        //     .then(result => {
        //         console.log("Post success", result);
                
        //     })
        //     .catch(error =>{
        //         console.log("Post Error", error.response);
        //     });
    }

})(FormFields);

export default LogIn;