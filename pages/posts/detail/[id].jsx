import React,{ useState } from "react"
import Router from 'next/router';
import { authPage } from "../../../midlewares/authorizationPage"

export async function getServerSideProps(ctx){
    const {token} = await authPage(ctx)
    const {id} = ctx.query

    const postReq = await fetch('http://localhost:3000/api/post/detail/'+id, {
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + token
        }
    })
    const posts = await postReq.json();
    return {props: {
        token,
        posts: posts.data
    }}
}

export default function detailPost(props){
    return (
        <div>
            <h3>Detail Post</h3>
            
            <div>{props.posts.title}</div>
            <div>{props.posts.content}</div>
        </div>
    )
}