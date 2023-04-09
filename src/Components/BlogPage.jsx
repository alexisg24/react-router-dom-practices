import React from "react";
import { Link } from 'react-router-dom'
import { blogData } from "../data/blogData";

const BlogPage = () =>{
    return (
        <>
            <h1>BlogPage</h1>
            <ul>
                {blogData.map(post =>(
                    <BlogLink post={post}/>
                ))}
            </ul>
        </>
    )
}

const BlogLink = ({ post }) =>{
    return(
        <li>
            <Link to={`/blog/${post.path}`}>{ post.title }</Link>
        </li>
    )
}

export { BlogPage }