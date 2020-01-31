import React from "react";
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignUpFields =({ errors, touched })=>{
    return(
        <div>
            <Form>
                <h1>Sign Up</h1>

                <Field type="text" name="name" placeholder="User Name" />
                {touched.name && errors.name && <p>{errors.name}</p>}

                <Field type="password" name="password" placeholder="Create a Password" />
                {touched.password && errors.password && <p>{errors.password}</p>}

                <Field type="password" name="ckPassword" placeholder="Re-Enter Password" />          
                {touched.ckPassword && errors.ckPassword && <p>{errors.ckPassword}</p>}

                <p>What is your childs name?</p>

                <Field type="text" name="childName" placeholder="Child's Name" />
                {touched.childName && errors.childName && <p>{errors.childName}</p>}

                <button type="submit">Submit</button>

            </Form>
            
        </div>
    );
}

const SignUp = withFormik({
    mapPropsToValues({name, password, childName}){
        return{
            name: name || "",
            password: password || "",
            childName: childName || "",
        };
    },

    validationSchema: Yup.object().shape({
        name: Yup
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
        // .test("Passwords match.", "Passwords must match.", function(value){
        //     return this.parent.password === value;
        // }),

        childName: Yup
        .string()
        .required("Child Name is required"),
    }),

    handleSubmit(values){
        console.log("submit from signUp", values);
    }

})(SignUpFields);

export default SignUp;