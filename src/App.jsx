import React from 'react';
import ContactContextContainer from 'context/ContactContext';
import ChatContextContainer from 'context/ChatContext';
import ContactsContainer from 'containers/contacts/ContactsContainer';
import ChatContainer from 'containers/chats/ChatContainer';
import styles from './App.module.scss';

function App() {
    return (
        <ContactContextContainer>
            <ChatContextContainer>
                <AppPage />
            </ChatContextContainer>
        </ContactContextContainer>
    );
}

function AppPage() {
    return (
        <div className={styles.App}>
            <div className={styles.contacts}>
                <ContactsContainer />
            </div>
            <div className={styles.messages}>
                <ChatContainer />
            </div>
        </div>
    );
}

export default App;
