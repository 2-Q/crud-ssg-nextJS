import React, { useEffect, useState } from 'react';
import Cookie from 'js-cookie';
import Router from 'next/router';
import { unauthPage } from '../../midlewares/authorizationPage';


export async function getServerSideProps(ctx){
    await unauthPage(ctx)
    return {props: { }}
}

export default function login() {
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

    async function loginHandler(e) {
        e.preventDefault();
        setStatus('loading')
        const loginReq=await fetch('/api/auth/login', {
            method: "POST",
            body: JSON.stringify(fields),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if(!loginReq.ok) return setStatus('error' + loginReq.status)

        const loginRes = await loginReq.json()

        setStatus('succes')
        Cookie.set('token', loginRes.token)
        Router.push('/posts')

    }

    return (
        <div>
            <h1>LOGIN</h1>
            <form onSubmit={loginHandler.bind(this)}>
                <input onChange={fieldHandler.bind(this)} type="text" placeholder="Email" /> <br />
                <input onChange={fieldHandler.bind(this)} type="password" placeholder="Password" />
                <br />
                <button type="submit">submit</button>

                <div>Output: {status}</div>
            </form>
        </div>
    )
}