import axios from 'axios';
import React, { useState } from 'react';

import {axiosWithAuth} from '../Utils/axiosWithAuth';


const NewFriend = (props) => {
    const { friends, setFriends } = props

    const initialFormValues = {
        name: '',
        age: '',
        email: '',
    }

    const [ formValues, setFormValues ] = useState(initialFormValues);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({...formValues, [name]:value})
    }

    const addFriend = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('http://localhost:5000/api/friends', formValues)
            .then(res => {
                axiosWithAuth()
                    .get('http://localhost:5000/api/friends')
                    .then(res => {
                        setFriends(res.data);
                        setFormValues(initialFormValues);

                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
            .catch(err => {
                console.log(err);
            })
    }


    return(
        <div>
            <form onSubmit={addFriend}>
                <label>
                    <input 
                        type='text'
                        name='name'
                        value={formValues.name}
                        onChange={handleChange}
                        placeholder='Name'
                    />
                </label>

                <label>
                    <input 
                        type='number'
                        name='age'
                        value={formValues.age}
                        onChange={handleChange}
                        placeholder='Age'
                    />
                </label>

                <label>
                    <input 
                        type='email'
                        name='email'
                        value={formValues.email}
                        onChange={handleChange}
                        placeholder='Email'
                    />
                </label>
                <button>Add Friend</button>
            </form>

        </div>
    )
}

export default NewFriend;