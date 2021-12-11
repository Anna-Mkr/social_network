import {PostType} from "../redux/store";



const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

// type profileActionType = {
//     type: "ADD-POST" | "UPDATE-NEW-POST-TEXT"
// }

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 15},
        {id: 2, message: 'Its my first post', likesCount: 11},
        {id: 3, message: 'BlaBla', likesCount: 23},
        {id: 4, message: 'Dada', likesCount: 17},
    ],
    newPostText: ""
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
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (e: string) => ({
    //type: UPDATE_NEW_POST_TEXT, newText: e.currentTarget.value
    type: UPDATE_NEW_POST_TEXT, newText: e
})


export default profileReducer;