var linter = require("eslint").linter;

var messages = linter.verify("var foo", {
    rules: {
        semi: 1
    }
});

console.info(messages);
