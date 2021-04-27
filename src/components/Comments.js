import React, { useState, useEffect } from 'react'
import APIService from '../utilities/service'

export default function Comments() {

    const [comments, setComments] = useState([])
    const [error, setError] = useState({});


    const errorLog = {
        color: 'red'
    }

    useEffect(() => {
        APIService.FetchData('comments')
            .then(res => {
                console.log(res)
                setComments(res.data)
                setError({})
            })
            .catch(err => {
                console.log('error message', err);
                setError(err)
            })

    }, [])

    return (
        <div className='App'>
            <h1>E-Mail Id's</h1>

            {comments.map(user =>
                <h4 key={user.id}>
                    {user.email}
                </h4>

            )}
            <h3 style={errorLog} key={error.message}>
                {error.message}
            </h3>
        </div>
    )
}
