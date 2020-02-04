import React from "react";
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import {FormContainer, FormItem, FormError} from "../styles";


const SignUpFields =({ errors, touched })=>{

    
    return(
        <FormContainer className="boarding">
            <Form>
                <h1>Sign Up</h1>

                <FormItem>
                    <Field type="text" name="username" placeholder="User Name" />
                    {touched.username && errors.username && <FormError>{errors.username}</FormError>}
                </FormItem>
                <FormItem>
                    <Field type="password" name="password" placeholder="Create a Password" />
                    {touched.password && errors.password && <FormError>{errors.password}</FormError>}
                </FormItem>
                <FormItem>
                    <Field type="password" name="ckPassword" placeholder="Re-Enter Password" />          
                    {touched.ckPassword && errors.ckPassword && <FormError>{errors.ckPassword}</FormError>}
                </FormItem>
      
                <button type="submit">Submit</button>

            </Form>
            
        </FormContainer>
    );
}

const SignUp = withFormik({
    mapPropsToValues({username, password, ckPassword,}){
        return{
            username: username || "",
            password: password || "",
            ckPassword: ckPassword || "", 
        };
    },

    validationSchema: Yup.object().shape({
        username: Yup
        .string()
        .required("User Name is required"),
        
        password: Yup
        .string()
        .min(8, "Password must be at least 8 characters long")
        .required("Password is required"),
        
        ckPassword: Yup
        .string()
        .required("You must re-enter your password")
        .oneOf([Yup.ref("password"),null], "Passwords must match."),
        
    }),

    handleSubmit(values){
        //removes ckPassword field so only values needed get sent.
        delete values.ckPassword;
        console.log("submit from signUp", values);

        // axios
        //     .post("", values)
        //     .then(result => {
        //         console.log("Post success", result);
                
        //     })
        //     .catch(error =>{
        //         console.log("Post Error", error.response);
        //     });

    
    

    }

})(SignUpFields);

export default SignUp;