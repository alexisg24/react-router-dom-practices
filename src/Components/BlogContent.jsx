import React from "react";
import { useParams } from 'react-router-dom'
import { blogData } from "../data/blogData";

const BlogContent = () =>{
    const { path } = useParams();
    const post = blogData.find(post => post.path === path)
    return (
        <>
            <h2>{ post.title }</h2>
            <p>{ post.content }</p>
            <span>{ post.author }</span>
        </>
    )
}

export { BlogContent }