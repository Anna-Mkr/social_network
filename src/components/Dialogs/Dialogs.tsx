import React, {ChangeEvent} from 'react'
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";





const Dialogs = (props: any) => {
    debugger;

    let state = props.dialogsPage;
    

    let dialogsElements = state.dialogs.map ( (d: { name: string; id: number; }) => <DialogItem name={d.name} key={d.id} id={d.id}/> )
    let messagesElements = state.messages.map ( (m: {
        id: number;
        message: string; }) => <Message message={m.message} key={m.id} /> )
    let newMessagesBody = state.newMessageBody;

let onSendMessageClick = () => {
    props.sendMessage();
}

let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {

let body = e.target.value;
    props.updateNewMessageBody(body)
}
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div>{ messagesElements }</div>
                <div>
                    <div><textarea value={ newMessagesBody }
                                   onChange={ onNewMessageChange }
                                   placeholder="Enter your message" ></textarea> </div>
                    <div><button onClick={ onSendMessageClick }>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;