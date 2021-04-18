import React from 'react';
import PropTypes from 'prop-types';
import ChatMessage from 'components/chats/chat/ChatMessage';
import styles from './ChatMessages.module.scss';

export default function ChatMessages(props) {
    const { messages } = props;
    return (
        <div className={styles.messages}>
            {messages && messages.map((msg) => {
                const { own, message } = msg;

                return (
                    <ChatMessage
                        message={message}
                        isLeft={!own}
                    />
                );
            })}
        </div>
    );
}

ChatMessages.propTypes = {
    messages: PropTypes.array,
};

ChatMessages.defaultProps = {
    messages: [],
};
