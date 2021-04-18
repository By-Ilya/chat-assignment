import React, { useContext } from 'react';
import Contact from 'components/contacts/Contact';
import { ContactContext } from 'context/ContactContext';
import { ChatContext } from 'context/ChatContext';
import styles from './ContactsContainer.module.scss';

export default function ContactsContainer() {
    const { contacts } = useContext(ContactContext);
    const { chats } = useContext(ChatContext);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                Messages
            </div>
            <div className={styles.contactsList}>
                {contacts.map((contact) => (
                    <Contact
                        contact={contact}
                        messages={chats.get(contact)}
                    />
                ))}
            </div>
        </div>
    );
}
