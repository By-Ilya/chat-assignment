const EMPTY_STRING = '';
const MAX_COUNT_SYMBOLS_IN_LINE = 27;

function processLongWordsInMessages(messageText) {
    let countSymbolsInLine = 0;
    let formattedMessageText = EMPTY_STRING;

    messageText.split(EMPTY_STRING).forEach((symbol) => {
        if (countSymbolsInLine > MAX_COUNT_SYMBOLS_IN_LINE) {
            formattedMessageText += ' ';
            countSymbolsInLine = 0;
        }
        formattedMessageText += symbol;
    });

    return formattedMessageText;
}

module.exports = {
    processLongWordsInMessages,
};
