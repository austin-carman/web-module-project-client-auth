import React from 'react';

const Friend = (props) => {
    const { friend } = props

    return(
        <div>
            <p>{friend.name}</p>
            <p>{friend.age}</p>
        </div>
    )
}

export default Friend;