import React, { useContext } from 'react'
import contexPro from './UserData'
export default function Information(props) {

    return (
        <div className='Info'>
            <h2>Info Component</h2>

            {props.values && props.values.map(user =>
                <h3 key={user.id}>
                    {user.name}
                </h3>

            )}
        </div>
    )
}
