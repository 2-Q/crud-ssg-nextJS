import React, { useState } from 'react';
export default function Register() {
    const [fields, setField] = useState({
        email: '',
        password: ''
    })

    const [status, setStatus] = useState('normal')

    function fieldHandler(e){
        const name = e.target.getAttribute('name');
        setField({
            ...fields,
            [name]: e.target.value
        })
    }

    async function registerHandler(e) {
        e.preventDefault();
        setStatus('loading')
        const registerReq=await fetch('/api/auth/register', {
            method: "POST",
            body: JSON.stringify(fields),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if(!registerReq.ok) return setStatus('error' + registerReq.status)

        const registerRes = await registerReq.json()

        setStatus('succes')

    }

    return (
        <div>
            <h1>REGISTER</h1>
            <form onSubmit={registerHandler.bind(this)}>
                <input onChange={fieldHandler.bind(this)} type="text" placeholder="Email" /> <br />
                <input onChange={fieldHandler.bind(this)} type="password" placeholder="Password" />
                <br />
                <button type="submit">submit</button>

                <div>Output: {status}</div>
            </form>
        </div>
    )
}