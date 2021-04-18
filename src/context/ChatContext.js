import React from 'react';
import { ContactContext } from 'context/ContactContext';

const ChatContext = React.createContext('chat');

const TIMEOUT_TO_REPLY = 1000;

class ChatContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chats: new Map(),
        };
        this.funcs = {
            setChats: this.setChats,
            sendMessage: this.sendMessage,
        };
    }

    setChats = (chats) => {
        this.setState({ chats });
    }

    sendMessage = ({ sendTo, message }) => {
        const { chats } = this.state;
        const foundChat = chats.get(sendTo);
        if (foundChat) {
            foundChat.push(
                this.createMessage(message, true),
            );
            chats.set(sendTo, foundChat);
        } else {
            chats.set(sendTo,
                [this.createMessage(message, true)]);
        }

        this.setState({ chats });

        setTimeout(() => {
            const chat = chats.get(sendTo);
            chat.push(this.createMessage(message, false));
            this.setState({ chats });
        }, TIMEOUT_TO_REPLY);
    }

    createMessage = (message, own = false) => ({ own, message })

    render() {
        const { children } = this.props;
        return (
            <ChatContext.Provider value={{ ...this.state, ...this.funcs }}>
                { children }
            </ChatContext.Provider>
        );
    }
}

export default function Container(props) {
    return (
        <ContactContext.Consumer>
            {(value) => <ChatContainer contactValue={value} {...props} />}
        </ContactContext.Consumer>
    );
}

export { ChatContext };
