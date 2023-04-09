# iranian-phonenumber-validator-nodejs

This is a simple library for validating iranian phone numbers in nodejs that can help you to extract all phone numbers from a text, check if a text has a phone number, check if a text is excatly a phone number, check if a text includes a special phone number.

## Features

- Extract all phone numbers from a text
- Check if a text has a phone number
- Check if a text is excatly a phone number
- Check if a text includes a special phone number

## Using

Import the library in your project:

```javascript
const iranian_phonenumber_validator = require("./iranian-phonenumber-validator");
```

Then you can extract all phone numbers from a text:

```javascript
console.log(iranian_phonenumber_validator.match("09124561010 sdfsdfsdfsdfsd xxxxx 09134445588 09108886666 +989131615645 9108886666"));
```

Or you can check if a text has a phone number:

```javascript
console.log(iranian_phonenumber_validator.has("1 09124561010 2"));
```

Or you can check if a text is excatly a phone number:

```javascript
console.log(iranian_phonenumber_validator.exact("!!!!"));
console.log(iranian_phonenumber_validator.exact("09124561010"));
```

Or you can check if a text includes a special phone number:

```javascript
console.log(iranian_phonenumber_validator.includes("first 09124561010 second google.com sallam.org bye.net", "09124561010"));
console.log(iranian_phonenumber_validator.includes("first https://google.com/first/second/third second google.com sallam.org bye.net", "09124561010"));
```

Copyright 2023, Max Base
