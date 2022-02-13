import {PostType} from "./store";
import {usersAPI} from "../api/api";


const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

// type profileActionType = {
//     type: "ADD-POST" | "UPDATE-NEW-POST-TEXT"
// }

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 15},
        {id: 2, message: 'Its my first post', likesCount: 11},
        {id: 3, message: 'BlaBla', likesCount: 23},
        {id: 4, message: 'Dada', likesCount: 17},
        {id: 5, message: 'Yooo', likesCount: 3},
    ],
    newPostText: "",
     profile: null,
}

const profileReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
            case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (e: string) => ({
    type: UPDATE_NEW_POST_TEXT, newText: e
})
export const setUserProfile = (profile: any) => ({type: SET_USER_PROFILE, profile})

export const getUserProfile = (userId: any) => (dispatch: any) => {
    usersAPI.getProfile(userId)
        .then(response => {

            dispatch(setUserProfile(response.data));
        });
}



export default profileReducer;