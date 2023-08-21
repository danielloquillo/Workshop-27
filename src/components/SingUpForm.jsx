import React, { useState } from 'react'

function SignUpForm({setToken}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)

    async function handleSubmit(e) {
        e.preventDefault()
        
        try {
            const newUser = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', {
                method: 'POST',
                body: JSON.stringify({username}, {password})
            })
            const response = await newUser.json()
            setToken(response.token)
            setSuccessMessage(response.message)
        } catch (err) {
            setError(err.message)
        }
        
    }

  return (
    <>
        <h2>Sign up</h2>
        {error && <p>{error}</p>}
        <form action="" onSubmit={handleSubmit}>
            <label>
                Username: <input type="text" value={username} onChange={ (e) => setUsername(e.target.value)}/>
            </label>
            <label>
                Password: <input type="password" value={password} onChange={ (e) => setPassword(e.target.value)}/>
            </label>
            {successMessage && <p>{successMessage}</p>}
            <button>Submit</button>
        </form>
    </>
  )
}

export default SignUpForm