import React, { useContext } from 'react';
import { ContactContext } from 'context/ContactContext';
import { ChatContext } from 'context/ChatContext';
import ContactInfo from 'components/chats/header/ContactInfo';
import ChatMessages from 'components/chats/chat/ChatMessages';
import InputField from 'components/chats/inputArea/InputField';
import styles from './ChatContainer.module.scss';

export default function ChatContainer() {
    const { activeContact } = useContext(ContactContext);
    const { chats, sendMessage } = useContext(ChatContext);

    const handleSendMessage = (text) => {
        sendMessage({
            sendTo: activeContact,
            message: text,
        });
    };

    const messages = chats.get(activeContact);

    return (
        <div className={styles.container}>
            <div className={styles.headerBlock}>
                <ContactInfo contact={activeContact} />
            </div>
            <div className={styles.messagesBlock}>
                <ChatMessages messages={messages} />
            </div>
            <div className={styles.inputBlock}>
                <InputField
                    onSendMessage={handleSendMessage}
                    hidden={!activeContact}
                />
            </div>
        </div>
    );
}
