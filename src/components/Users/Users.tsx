import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import React from "react";

type UsersType = {
    onPageChanged: (p: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: []
    unfollow: any
    follow: any

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
                                    <img alt={"User's"} src={u.photos.small != null ? u.photos.small : userPhoto}
                                         className={styles.userPhoto}/>
                                </div>
                                <div>
                                        {u.followed ? <button onClick={() => {
                                                props.unfollow(u.id)
                                            }}>Unfollow </button>
                                            : <button onClick={() => {
                                                props.follow(u.id)
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