import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from '../Utils/axiosWithAuth';
import Friend from '../components/Friend';
import NewFriend from './NewFriend';

const FriendsList = (props) => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('http://localhost:5000/api/friends')
            .then(res => {
                setFriends(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
            
    return(
        <div className='friend-list'>
            <h2>Friends</h2>
            <NewFriend friends={friends} setFriends={setFriends} />
            {
                friends.map(friend => {
                    return <Friend key={friend.id} friend={friend} />
                })
            }
        </div>
    )
}

export default FriendsList;