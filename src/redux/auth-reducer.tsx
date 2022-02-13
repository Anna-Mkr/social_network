import {authAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

type UserDataType = {
    userId: null | number,
    email: null | string,
    login: null | string,
    isAuth: boolean,
}

let initialState: UserDataType = {

    userId: null,
    email: null,
    login: null,
    isAuth: false,

}

const authReducer = (state: UserDataType = initialState, action: any) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true


            }
        default:
            return state;
    }
}


export const setAuthUserData = (userId: number, email: string, login: string) => ({type: SET_USER_DATA, data: {userId: userId, email: email, login: login}})
export const getAuthUserData = () => (dispatch: any) => {
    authAPI.me()
        .then(response => {
            if(response.data.resultCode === 0){
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        });
}

export default authReducer;