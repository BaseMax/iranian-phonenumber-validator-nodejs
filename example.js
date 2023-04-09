const iranian_phonenumber_validator = require("./iranian-phonenumber-validator");

// Test match function
console.log(iranian_phonenumber_validator.match("09124561010 sdfsdfsdfsdfsd xxxxx 09134445588 09108886666 +989131615645 9108886666"));

// Test has function
console.log(iranian_phonenumber_validator.has("1 09124561010 2"));

// Test exact function
console.log(iranian_phonenumber_validator.exact("!!!!"));
console.log(iranian_phonenumber_validator.exact("09124561010"));

// Test includes function
console.log(iranian_phonenumber_validator.includes("first 09124561010 second google.com sallam.org bye.net", "09124561010"));
console.log(iranian_phonenumber_validator.includes("first https://google.com/first/second/third second google.com sallam.org bye.net", "09124561010"));
