import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css'

export type DialogItemType = {
    id: number
    name: string
}

const DialogItem: React.FC <DialogItemType> = (props) => {

    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;