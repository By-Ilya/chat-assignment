import React from 'react';

const { calculateFirstNameLetters } = require('helpers/avatarHelper');

const ContactContext = React.createContext('contact');

const EMPTY_STRING = '';
const ZERO_SYMBOL = '0';
const MAX_COLOR_NUMBER = 16777215;
const COLOR_NUM_SYSTEM = 16;
const COLOR_LENGTH = 6;

function generateAvatarColor(contactName) {
    const charCodes = contactName
        .split(EMPTY_STRING)
        .map((char) => char.charCodeAt(0))
        .join(EMPTY_STRING);

    const color = (charCodes % MAX_COLOR_NUMBER)
        .toString(COLOR_NUM_SYSTEM)
        .padStart(COLOR_LENGTH, ZERO_SYMBOL);
    return `#${color}`;
}

const CONTACTS_URL = 'https://jsonplaceholder.typicode.com/users';
const DEFAULT_CONTACTS = [];

export default class ContextContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.state,
            contacts: DEFAULT_CONTACTS,
            activeContact: null,
        };
        this.funcs = {
            setContacts: this.setContacts,
            setActiveContact: this.setActiveContact,
        };

        this.fetchContacts();
    }

    fetchContacts = async () => {
        const result = await fetch(CONTACTS_URL);
        const { ok, status } = result;

        if (ok && status === 200) {
            const jsonContacts = await result.json();
            const formattedContacts = jsonContacts.map((contact) => {
                const { name } = contact;
                return {
                    name,
                    firstLetters: calculateFirstNameLetters(name),
                    color: generateAvatarColor(name),
                };
            });
            this.setState({ contacts: formattedContacts });
        }
    }

    setContacts = (contacts) => {
        this.setState({ contacts });
    };

    setActiveContact = (activeContact) => {
        const { contacts } = this.state;
        const { name } = activeContact;
        const foundContact = contacts.find(
            (contact) => contact.name === name,
        );

        this.setState({ activeContact: foundContact ? activeContact : null });
    }

    render() {
        const { children } = this.props;
        return (
            <ContactContext.Provider value={{ ...this.state, ...this.funcs }}>
                {children}
            </ContactContext.Provider>
        );
    }
}

export { ContactContext };
