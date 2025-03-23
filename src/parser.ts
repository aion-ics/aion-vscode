import { ANTLRErrorListener, CharStreams, CommonTokenStream, RecognitionException, Recognizer } from 'antlr4ts';
import { AionLexer } from './antlr/generated/AionLexer';
import { AionParser } from './antlr/generated/AionParser';

// Custom error listener to collect syntax errors
class SyntaxErrorListener implements ANTLRErrorListener<any> {
  private errors: { line: number; column: number; message: string }[] = [];

  syntaxError(
    recognizer: Recognizer<any, any>,
    offendingSymbol: any,
    line: number,
    charPositionInLine: number,
    msg: string,
    e: RecognitionException | undefined
  ) {
    this.errors.push({ line, column: charPositionInLine, message: msg });
  }

  getErrors(): { line: number; column: number; message: string }[] {
    return this.errors;
  }
}

export function parseInput(text: string): { errors: { line: number; column: number; message: string }[] } {
  // Create input stream from text
  const inputStream = CharStreams.fromString(text);
  
  // Create lexer and token stream
  const lexer = new AionLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  
  // Create parser
  const parser = new AionParser(tokenStream);

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