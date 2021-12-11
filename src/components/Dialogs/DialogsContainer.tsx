import React, {ChangeEvent} from 'react'
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dilogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state: any) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessageBody:(body: any) => {

            dispatch(updateNewMessageBodyCreator(body));
        } ,
        sendMessage: () => {
            dispatch(sendMessageCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;