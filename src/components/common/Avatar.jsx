import React from 'react';
import PropTypes from 'prop-types';
import styles from './Avatar.module.scss';

export default function Avatar(props) {
    const { color, firstLetters } = props;

    const avatarStyle = {
        'background-color': color,
        border: `1px solid ${color}`,
    };

    return (
        <div
            className={styles.avatar}
            style={avatarStyle}
        >
            <div className={styles.contactLetters}>
                {firstLetters}
            </div>
        </div>
    );
}

Avatar.propTypes = {
    color: PropTypes.string,
    firstLetters: PropTypes.string.isRequired,
};

Avatar.defaultProps = {
    color: '#F08080FF',
};
