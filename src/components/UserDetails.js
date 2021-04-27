import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import APIService from '../utilities/service'

export default function UserDetails({ match }) {
    const [user, setUser] = useState([])
    const [error, setError] = useState({})
    const history = useHistory();
    const userdata = {
        textAlign: 'center'
    }

    const errorLog = {
        color: 'red'
    }

    useEffect(() => {
        APIService.FetchData('users')
            .then(res => {
                console.log(res)
                setUser(setdata(res.data));
                setError({})
            })
            .catch(err => {
                console.log('error message', err);
                setError({message: 'Something Went Wrong'})
            })

    }, [])

    const setdata = (list) => {
        console.log("id", match.params.id);
        return list.filter(data => data.id == match.params.id)
    }

    return (
        <div className='App'>
                        <h1 >Users Detailss</h1>

            {
            
            user.map(item =>
                <div style={userdata}> 
                    <p key={item.name}>{item.name}</p>                    
                    <p key={item.email}>{item.email}</p>                    
                    <p key={item.username}>{item.username}</p>
                </div>)
        }
        <h3 style={errorLog} key={error.message}>
                {error.message}
            </h3>
            <button onClick={()=> history.push('/users')}>Go Back</button>
        </div>
    )
}
