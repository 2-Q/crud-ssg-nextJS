import React, { useState } from "react"
import Router from 'next/router';
import { authPage } from "../../midlewares/authorizationPage"

export async function getServerSideProps(ctx) {
    const { token } = await authPage(ctx)
    return { props: { token: token } }
}



export default function CreatePost(props) {
    const [fields, setField] = useState({
        title: '',
        content: ''
    })

    const [status, setStatus] = useState('normal')

    function fieldHandler(e) {
        const name = e.target.getAttribute('name');
        setField({
            ...fields,
            [name]: e.target.value
        })
    }

    async function createHandler(e) {
        e.preventDefault()
        setStatus('loading')
        const Res = await fetch('/api/post/create', {
            method: "POST",
            body: JSON.stringify(fields),
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + props.token
            }
        })

        if (!Res.ok) return setStatus('error' + Res.status)

        const loginRes = await Res.json()

        setStatus('succes')
        Router.push('/posts')

    }


    return (
        <div>
            <h3>Create Post</h3>
            <form onSubmit={createHandler.bind(this)}>
                <input onChange={fieldHandler.bind(this)} type="text" placeholder="title" name="title" /><br />
                <textarea onChange={fieldHandler.bind(this)} placeholder="content" name="content"></textarea><br />
                <button type="submit">Submit</button>
            </form>

            <div>Output: {status}</div>
        </div>
    )
}