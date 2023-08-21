import React, { useState } from 'react'

function Authenticate({token}) {

const [successMessage, setSucessMessage] = useState(null)
const [error, setError] = useState(null)

async function handleClick() {
    try {
        const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate', {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${token}`
            }
        })

        const result = await response.json()
        console.log(result)
        result.success ? setSucessMessage(result.message) : setSucessMessage('Authentication Failed!')
    } catch (err) {
        setError(err.message)
    }
}

  return (
    <>
        <h2>Authenticate</h2>
        {error && <p>{error}</p>}
        <button onClick={handleClick}>Authenticate Request</button>
        {successMessage && <p>{successMessage}</p>}
    </>
  )
}

export default Authenticate