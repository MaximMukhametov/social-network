import React, {useEffect, useState} from "react";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {
    deleteMessageThunk, editMessageThunk,
    getMessagesWithUserThunk,
    sendMessageThunk, setMessagesWithUser
} from "../../../redux/messages_reducer";
import {connect} from "react-redux";
import MessageDetail from "./MessageDetail";
import MessageSendForm from "./MessageSendForm";
import {animated, useTransition} from "react-spring";
import WithAuthRedirect from "../../../hoc/WithAuthRedirect";
import {getUserProfile} from "../../../redux/profile_reducer";
import userPhoto from "../../../media/userPhoto.jpg";
import classes from "./MessageDetail.module.css"


const MessageDetailContainer = (props) => {
    let [messageCounter, setMessageCounter] = useState(10);
    let [isLoadProfile, setIsLoadProfile] = useState(false)
    const loadMoreMessagesCount = 10;

    useEffect(() => {
            props.getUserProfile(props.match.params.userId, true);
            props.getMessagesWithUserThunk(props.match.params.userId)
                .then(r=> setIsLoadProfile(true))
        }, [props.match.params.userId]
    );
    useEffect(() => () => props.setMessagesWithUser([]), []);

    const transitions = useTransition(props.messages, item => item.id, {
        config: {mass: 10, tension: 2000, friction: 60},
        from: {transform: 'rotateX(90deg)', opacity: 1},
        enter: {transform: 'rotateX(0deg)', opacity: 1},
        leave: {transform: 'rotateX(90deg)', opacity: 1},
    });

    const isMyMessage = (message) => (
        message.written_by.id === props.authUserId
    );


    const onSubmit = (messageText) => {
        props.sendMessageThunk(props.match.params.userId, messageText.message)
    };
    const loadMoreMessages = () => {
        setMessageCounter(messageCounter + loadMoreMessagesCount);
        props.getMessagesWithUserThunk(props.match.params.userId,
            messageCounter + loadMoreMessagesCount)
    };


    const messages = !!props.messages && transitions.reverse().map(
        m => <animated.div style={m.props}
                           key={m.item.id}>

            <MessageDetail key={m.item.id}
                           message={{
                               id: m.item.id,
                               message: m.item.message,
                               data: m.item.created_at
                           }}
                           writer={m.item.written_by}
                           isMyMessage={isMyMessage(m.item)}
                           addressee={m.item.written_for}
                           sendMessage={props.sendMessageThunk}
                           editMessage={props.editMessageThunk}
                           deleteMessage={props.deleteMessageThunk}
                           routing={{
                               history: props.history,
                               location: props.location,
                               match: props.match
                           }}
            /></animated.div>
    );

    return <div>
        {!!props.profile && isLoadProfile && <div className={classes.profile_info}>
            <img src={(props.profile.photos && (props.profile.photos.small_img
                || props.profile.photos.small)) || userPhoto}/>
            <div>{props.profile.name}</div>
        </div>}
        {props.messageCount > messageCounter &&
        <div onClick={loadMoreMessages}>Загрузить ещё...</div>}

        <div>
            <div>{messages}</div>
            <MessageSendForm onSubmit={onSubmit}/>
        </div>
    </div>
};


let mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    return ({
        messages: state.messagesPage.messagesWithUser,
        authUserId: state.auth.userId,
        messageCount: state.messagesPage.messageCount,
        profile: state.profilePage.profile,

    })
};

export default compose(
    withRouter,
    WithAuthRedirect,
    connect(mapStateToProps, {
        setMessagesWithUser, getUserProfile,
        getMessagesWithUserThunk, sendMessageThunk,
        editMessageThunk, deleteMessageThunk
    })
)(MessageDetailContainer)
