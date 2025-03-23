"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseInput = parseInput;
const antlr4ts_1 = require("antlr4ts");
const AionLexer_1 = require("./antlr/generated/AionLexer");
const AionParser_1 = require("./antlr/generated/AionParser");
// Custom error listener to collect syntax errors
class SyntaxErrorListener {
    constructor() {
        this.errors = [];
    }
    syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
        this.errors.push({ line, column: charPositionInLine, message: msg });
    }
    getErrors() {
        return this.errors;
    }
}
function parseInput(text) {
    // Create input stream from text
    const inputStream = antlr4ts_1.CharStreams.fromString(text);
    // Create lexer and token stream
    const lexer = new AionLexer_1.AionLexer(inputStream);
    const tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
    // Create parser
    const parser = new AionParser_1.AionParser(tokenStream);
    // Remove default console error reporting
    lexer.removeErrorListeners();
    parser.removeErrorListeners();
    // Add custom error listener
    const errorListener = new SyntaxErrorListener();
    lexer.addErrorListener(errorListener);
    parser.addErrorListener(errorListener);
    // Parse the input (using 'program' as the entry rule)
    parser.program();
    return { errors: errorListener.getErrors() };
}
