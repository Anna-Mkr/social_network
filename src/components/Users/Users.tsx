import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import React from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersType = {
    onPageChanged: (p: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: []
    unfollow: any
    follow: any
    toggleFollowingProgress: (p: boolean, id: any) => void
    followingInProgress: Array<any>

}


const Users = (props: UsersType) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages: number[] = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (<div>
            <div>
                {
                    pages.map(p => {
                        return <span className={p === props.currentPage ? styles.selectedPage : ""}
                                     onClick={() => {
                                         props.onPageChanged(p)
                                     }}>{p}</span>
                    })}
            </div>
            {
                props.users.map((u: any) => <div key={u.id}>
                            <span>
                                <div>
                                    <NavLink to={'/profile/' + u.id}>
                                    <img alt={"User"} src={u.photos.small != null ? u.photos.small : userPhoto}
                                         className={styles.userPhoto}/>
                                         </NavLink>
                                </div>
                                <div>
                                        {u.followed
                                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}  onClick={() => {
                                            props.toggleFollowingProgress(true, u.id);
                                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                                    withCredentials: true,
                                                    headers: {
                                                        "API-KEY" : "2bfbf4c6-d33b-454a-936c-f384eccc05de"
                                                    }
                                                })
                                                    .then(response => {
                                                        if (response.data.resultCode === 0) {
                                                            props.unfollow(u.id)
                                                        }
                                                        props.toggleFollowingProgress(false, u.id);
                                                    });

                                            }}>Unfollow </button>
                                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                                props.toggleFollowingProgress(true, u.id);
                                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                                    withCredentials: true,
                                                    headers: {
                                                        "API-KEY" : "2bfbf4c6-d33b-454a-936c-f384eccc05de"
                                                    }
                                                })
                                                    .then(response => {
                                                        if (response.data.resultCode === 0) {
                                                            props.follow(u.id)
                                                        }
                                                        props.toggleFollowingProgress(false, u.id);
                                                    });
                                            }}>Follow</button>}
                                </div>

    <span>
        <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
        </span>
        <span>
            <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>
        </span>
    </span>

                            </span>

                    </div>
                )
            }
        </div>
    )

}

export default Users