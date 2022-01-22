import { authPage } from "../../midlewares/authorizationPage"
import React, { useState } from "react"

export async function getServerSideProps(ctx) {
    const { token } = await authPage(ctx)
    const postReq = await fetch('http://localhost:3000/api/post', {
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + token
        }
    })
    const posts = await postReq.json();

    return {
        props: {
            token: token,
            posts: posts.data
        }
    }
}

export default function PostIndex(props) {
    const [posts, setPosts] = useState(props.posts)

    async function deleteHandler(id, e) {
        if (confirm('Apakah anda benar-benar ingin menghapus data ini?')) {
            const resDelete =  await fetch('/api/post/delete/'+id,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": "Bearer "+props.token
                }
            })

            if(!resDelete.ok) return setStatus('error' + resDelete.status)

            const res = await resDelete.json()

            const postFiltered = posts.filter(post => {
                return post.id !== id && post
            })
            setPosts(postFiltered);


        }
    }
    return (
        <div>
            <h1>hello</h1>
            {posts.map(post => {
                return (
                    <div key={post.id}>
                        <div>{post.title}</div>
                        <div>{post.content}</div>
                        <br />
                        <button>edit</button>
                        <button onClick={deleteHandler.bind(this, post.id)}>delete</button>
                        <br /><hr />
                    </div>
                )
            })}
        </div>
    )
}