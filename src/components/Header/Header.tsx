import React from 'react';
import s from'./Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props: any) => {
    return (
        <header className={s.header}>
            <img alt={"minion"}
                src='https://avatanplus.com/files/resources/mid/57385b784eab4154b4254e02.png'/>

                <div className={s.loginBlock}>
                    {props.isAuth ? props.login :
                        <NavLink to={"/login"}>Login</NavLink>}

                </div>
        </header>
    )
}

export default Header;