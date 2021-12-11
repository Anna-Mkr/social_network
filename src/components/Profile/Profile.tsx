import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {StoreType} from "../../redux/store";


const Profile = (props: any) => {

    return (
        <div >
            <ProfileInfo />
            <MyPostsContainer
                // @ts-ignore
                store={props.store}/>
        </div>
    )
}

export default Profile;
