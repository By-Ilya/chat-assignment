import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'components/common/Avatar';
import styles from './ContactInfo.module.scss';

export default function ContactInfo(props) {
    const { contact } = props;

    return (
        <div className={styles.container}>
            {contact && (
                <div
                    className={styles.contact}
                >
                    <Avatar
                        firstLetters={contact.firstLetters}
                        color={contact.color}
                    />
                    <div className={styles.contactInfo}>
                        <div className={styles.name}>
                            {contact.name}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

ContactInfo.propTypes = {
    contact: PropTypes.object,
};

ContactInfo.defaultProps = {
    contact: null,
};
