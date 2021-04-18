import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SendIcon } from 'icons';
import styles from './InputField.module.scss';

const EMPTY_INPUT = '';
const ENTER_KEY_CODE = 13;

export default function InputField(props) {
    const { onSendMessage, hidden } = props;

    const [localInput, setLocalInput] = useState(EMPTY_INPUT);

    const onChangeLocalInput = (event) => {
        const { value } = event.target;
        setLocalInput(value);
    };

    const isEmptyMessage = (message) => !message.trim();

    const handleEnterPressed = (event) => {
        if (
            event.keyCode === ENTER_KEY_CODE &&
            !isEmptyMessage(localInput)
        ) {
            onSendMessage(localInput);
            setLocalInput(EMPTY_INPUT);
            event.preventDefault();
        }
    };

    const handleOnClickButton = (event) => {
        if (!isEmptyMessage(localInput)) {
            onSendMessage(localInput);
            setLocalInput(EMPTY_INPUT);
            event.preventDefault();
        }
    };

    return (
        <div className={styles.inputContainer}>
            <input
                className={styles.input}
                disabled={hidden}
                value={localInput}
                onChange={onChangeLocalInput}
                onKeyUp={handleEnterPressed}
                placeholder={!hidden && 'Reply...'}
            />
            <div
                aria-hidden
                className={hidden ? styles.hiddenButton : styles.button}
                onClick={handleOnClickButton}
            >
                <SendIcon />
            </div>
        </div>
    );
}

InputField.propTypes = {
    onSendMessage: PropTypes.func,
    hidden: PropTypes.bool.isRequired,
};

InputField.defaultProps = {
    onSendMessage: () => {},
};
