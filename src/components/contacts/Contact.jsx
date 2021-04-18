import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ContactContext } from 'context/ContactContext';
import Avatar from 'components/common/Avatar';
import styles from './Contact.module.scss';

export default function Contact(props) {
    const { contact, messages } = props;
    const { setActiveContact } = useContext(ContactContext);

    const { name, firstLetters, color } = contact;

    let lastMessage = '';
    if (messages && messages.length) {
        const { message } = messages[messages.length - 1];
        lastMessage = message;
    }

    const onHandleClickContact = () => {
        setActiveContact(contact);
    };

    return (
        <div
            aria-hidden
            className={styles.container}
            onClick={onHandleClickContact}
        >
            <div className={styles.contact}>
                <Avatar
                    firstLetters={firstLetters}
                    color={color}
                />
                <div className={styles.contactInfo}>
                    <div className={styles.name}>
                        {name}
                    </div>
                    <div className={styles.lastMessage}>
                        {lastMessage}
                    </div>
                </div>
            </div>
        </div>
    );
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    messages: PropTypes.array,
};

Contact.defaultProps = {
    messages: [],
};
