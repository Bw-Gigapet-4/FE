import React from "react";
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

export default function SignUp(){
    return(
        <div>
            <Form>
                <h1>Sign Up</h1>
                <Field type="text" name="fname" placeholder="First Name" />

                <Field type="text" name="lname" placeholder="Last Name" />

                <Field type="text" name="uname" placeholder="User Name" />

                <Field type="email" name="email" placeholder="Email" />

                <Field type="password" name="password" placeholder="Password" />

                <Field type="password" name="ckpassword" placeholder="Re-Enter Password" />          
            
            </Form>
            
        </div>
    )
}