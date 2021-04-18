import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './ChatMessage.module.scss';

const { processLongWordsInMessages } = require('helpers/chatHelper');

export default function ChatMessage(props) {
    const { message, isLeft } = props;

    return (
        <div
            className={classNames(
                styles.message,
                isLeft ? styles.leftContainer : styles.rightContainer,
            )}
        >
            <div
                className={isLeft ? styles.left : styles.right}
            >
                {processLongWordsInMessages(message)}
            </div>
        </div>
    );
}

ChatMessage.propTypes = {
    message: PropTypes.string,
    isLeft: PropTypes.bool,
};

ChatMessage.defaultProps = {
    message: '',
    isLeft: false,
};
