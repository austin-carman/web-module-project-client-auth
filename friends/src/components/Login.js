import React, { useState } from 'react';
import axios from 'axios';


const Login = (props) => {
    const initialFormValues = {
        username: 'Lambda School',
        password: 'i<3Lambd4',
    }
    const [formValues, setFormValues] = useState(initialFormValues);
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({...formValues, [name]:value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
            axios
            .post('http://localhost:5000/api/login', formValues)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                setIsLoading(false);
                props.history.push('/friendslist')

            })
            .catch(err => {
                console.log(err);
            })
            setFormValues(initialFormValues);
    };


    return (
        <div className='login-container'>
            <form onSubmit={handleSubmit}>
                <label>
                    <input 
                        type='text'
                        name='username'
                        value={formValues.username}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <input 
                        type='text'
                        name='password'
                        value={formValues.password}
                        onChange={handleChange}
                    />
                </label>
                <button>Login</button>
            </form>
            {
                formValues.isLoading && <div>Loading...</div>
            }
        </div>
    );
}

export default Login;
