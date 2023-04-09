// Regex to validate iranian phone-number
const REGEX = /(\+98|0)?9\d{9}/;
const EXACT_REGEX = /^(\+98|0)?9\d{9}$/;

// Return an array from all iranian phone-number inside the input text
const match = (text) => {
    return text.match(REGEX);
};

// Return true if the input text has at least one iranian phone-number
const has = (text) => {
    return REGEX.test(text);
};

// Return true if the input text includes the iranian phone-number
const includes = (text, email) => {
    const matches = match(text);

    if (!matches) return false;
    return match(text).includes(email);
};

// Return true if the input text match only one iranian phone-number without any other characters or whitespaces
const exact = (text) => {
    return EXACT_REGEX.test(text);
};

// Export the functions
module.exports = {
    match,
    includes,
    has,
    exact
};
