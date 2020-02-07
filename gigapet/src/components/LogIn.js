import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { AxiosWithAuth as axios } from '../utils/AxiosWithAuth';
import { connect } from 'react-redux';
import {FormContainer, FormItem, FormError} from "../styles";
import { Link } from 'react-router-dom';
import { login } from '../store/actions/action';

const LogIn = ({errors, touched, login}) =>{
    
    
    return(
        <FormContainer className="boarding">
            <Form>
                <h1>Log In</h1>
                <FormItem>
                    <Field type="text" name="username" placeholder="User Name" />
                    {touched.username && errors.username && <FormError>{errors.name}</FormError>}
                </FormItem>
                <FormItem>
                    <Field type="password" name="password" placeholder="Password" />
                    {touched.password && errors.password && <FormError>{errors.password}</FormError>}
                </FormItem>
                <div>
                     <button type="submit" onClick={login}>Log In</button> 
                </div>
                
                <p>Don't have an account?</p>
                <Link to={"/signup/"}>
                    <button>Sign Up</button>
                </Link>
                
            </Form>
            
            
        </FormContainer>
    );
}

//

const mapStateToProps = (state) =>{
    return {...state.auth};
}

const mapDispatchToProps = {login};

export default connect(mapStateToProps, mapDispatchToProps)(withFormik({
    mapPropsToValues({username, password}){
        return{
            username: username,
            password: password,
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

    handleSubmit({username, password, history}){
        console.log("values from submit", {username, password, login});

        login({username, password}, history);

        
    }

})(LogIn));
