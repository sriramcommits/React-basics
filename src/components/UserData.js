import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import APIService from '../utilities/service'
import Information from './Information'
import TestContext from './TestContext';
const contexPro = React.createContext();

export default function UserData() {

    const [users, setUsers] = useState([])
    const [error, setError] = useState({});

    const navStyle = {
        color: '#0000ee',
        textDecoration: 'none'
    }

    const errorLog = {
        color: 'red'
    }

    useEffect(() => {
        APIService.FetchData('users')
            .then(res => {
                console.log(res)
                setUsers(res.data)
                setError({})
            })
            .catch(err => {
                console.log('error message', err);
                setError(err)
            })

        return (() => {
            // unmounting
        })

    }, [])


    return (
        <contexPro.Provider value={users}>
            <div className='App'>
                <h1>Users List</h1>
                {users.map(user =>
                    <h3 key={user.id}>
                        <Link style={navStyle} to={`/users/${user.id}`}>
                            {user.name}
                        </Link>
                    </h3>

                )}
                {error.message}
                <h3 style={errorLog} key={error.message}>
                </h3>
                <Information values={users} />
                <TestContext />
            </div>
        </contexPro.Provider>
    )
}
