import React, { useContext } from 'react'
import contexPro from './UserData'

export default function TestContext() {
    const contextDesc = useContext(contexPro);

    return (
        <div className="Info">
              <h2>Context Component</h2>
            {contextDesc && contextDesc.map(user =>
                <h3 key={user.id}>
                        {user.name}
                </h3>

            )} 
        </div>
    )
}
