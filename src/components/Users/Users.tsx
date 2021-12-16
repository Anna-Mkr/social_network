import React from "react";
import styles from "./users.module.css"

let Users = (props: any) => {
    if (props.users.length === 0 ) {
        props.setUsers([{
            id: 1,
            photoUrl: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg',
            followed: false,
            fullName: 'Dmitry',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
            {
                id: 2,
                photoUrl: 'https://www.meme-arsenal.com/memes/a80862e524bb69b162383509b1edef0b.jpg',
                followed: true,
                fullName: 'Sasha',
                status: 'I am a boss too',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                followed: false,
                photoUrl: 'https://avatanplus.com/files/resources/mid/567e8e507ce05151de5bea80.jpg',
                fullName: 'Andrew',
                status: 'I am a boss too',
                location: {city: 'Kiev', country: 'Ukraine'}
            }])
    }


    return(<div>
            {
                props.users.map( (u: any) => <div key={u.id}>
                        <span>
                            <div>
                                <img alt={"User's"} src={u.photoUrl} className={styles.userPhoto}/>
                            </div>
                            <div>
                                    {u.followed ? <button onClick={ () => {props.unfollow(u.id)} }>Unfollow </button>
                                        : <button onClick={ () => {props.follow(u.id)} }>Follow</button>}
                            </div>

<span>
    <span>
        <div>{u.fullName}</div>
        <div>{u.status}</div>
    </span>
    <span>
        <div>{u.location.country}</div>
        <div>{u.location.city}</div>
    </span>
</span>

                        </span>

                    </div>
                )
            }
        </div>
    )
}

export default Users;