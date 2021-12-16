import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";



export type PostType = {

    message: string
    likesCount: number
}

export type MyPostsType = {
    posts: Array<PostType>
    newPostText: string
    updateNewPostText:(e:string) => void
    addPost: () => void
}



const MyPosts = (props: MyPostsType) => {


    let postsElements =
        props.posts.map( (p: { message: string; likesCount: number; }) => <Post message={p.message} likesCount={p.likesCount}/>)


    const onAddPost = () => {
        props.addPost();
    }

    const changeNewTextCallback = (e: ChangeEvent<HTMLTextAreaElement>)=>{
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={s.postsBlock}>
            <h3>
                My posts
            </h3>
            <div>
                <textarea onChange={changeNewTextCallback} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={ onAddPost }>Add post</button>
            </div>
            <div className={s.posts}>
                { postsElements  }
            </div>
        </div>

    )

}

export default MyPosts;