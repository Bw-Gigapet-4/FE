import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup'

const FormFields = () =>{
    
    
    return(
        <div>
            <Form>
                <h1>Sign In</h1>
                <Field type="text" name="name" placeholder="User Name" />

                <Field type="password" name="password" placeholder="Password" />

                <button type="submit">Log In</button>
            </Form>

        </div>
    );
}

const LogIn = withFormik({
    mapPropsToValues({name, password}){
        return{
            name: name || "",
            password: password || "",
        }      
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required("User Name is Required"),
        password: Yup.string().min(8, "Password must be 8 characters or longer").required("Password is Required"),
    }),

    handleSubmit(values){
        console.log("values from submit", values);
    }

})(FormFields);