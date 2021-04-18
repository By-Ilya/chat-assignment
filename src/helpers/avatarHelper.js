const DEFAULT_AVATAR_LETTERS = '??';
const WHITESPACES_REGEXP = /\s+/g;

function calculateFirstNameLetters(name) {
    if (!name) {
        return DEFAULT_AVATAR_LETTERS;
    }

    const nameParts = name
        .trim()
        .split(WHITESPACES_REGEXP);
    if (nameParts.length < 2) {
        return `${nameParts.splice(0, 2)}`;
    }

    const firstLetter = nameParts[0][0];
    const secondLetter = nameParts[1][0];

    return `${firstLetter}${secondLetter}`;
}

module.exports = {
    calculateFirstNameLetters,
};
