import React from "react";
import { useParams, useNavigate } from 'react-router-dom'
import { blogData } from "../data/blogData";

const BlogContent = () =>{
    const navigation = useNavigate()
    const { path } = useParams();
    const post = blogData.find(post => post.path === path)
    const returnToBlog = () =>{
        return navigation(-1)
    }
    return (
        <>
            <h2>{ post.title }</h2>
            <p>{ post.content }</p>
            <span>{ post.author }</span>
            <button onClick={returnToBlog}>Back to Blogs</button>
        </>
    )
}

export { BlogContent }