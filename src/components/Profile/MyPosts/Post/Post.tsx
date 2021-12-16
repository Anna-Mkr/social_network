import React from "react";
import s from './Post.module.css'
import {PostType} from "../MyPosts";


const Post = (props:PostType) => {
    return (
        <div className={`${s.item} ${s.active}`}>
            <img alt={"avatar"} src='https://i.pinimg.com/originals/9f/8f/cd/9f8fcdc389c0d84cc88e3f7ca81b7c4e.jpg'/>
            {props.message}

            <div>
                <span>like {props.likesCount}</span>
            </div>


        </div>)
}

export default Post;
