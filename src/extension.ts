import * as vscode from 'vscode';
import { parseInput } from './parser';

// Create a diagnostic collection for our language
const diagnosticCollection = vscode.languages.createDiagnosticCollection('aion');

export function activate(context: vscode.ExtensionContext) {
  console.log('Aion is now active!');

  // Register a listener for text changes
  context.subscriptions.push(
    vscode.workspace.onDidChangeTextDocument((event) => {
      const document = event.document;
      if (document.languageId === 'aion') {
        updateDiagnostics(document);
      }
    })
  );

  // Initial check for open documents
  vscode.workspace.textDocuments.forEach((document) => {
    if (document.languageId === 'aion') {
      updateDiagnostics(document);
    }
  });

  // Clear diagnostics when the extension is deactivated
  context.subscriptions.push(diagnosticCollection);
}

function updateDiagnostics(document: vscode.TextDocument) {
  console.log('Updating diagnostics for:', document.uri.fsPath);
  const text = document.getText();
  console.log('Text:', text);
  const { errors } = parseInput(text);
  console.log('Errors:', errors);
  const diagnostics: vscode.Diagnostic[] = errors.map((error) => {
    const range = new vscode.Range(
      error.line - 1, error.column,
      error.line - 1, error.column + 1
    );
    console.log('Diagnostic:', { range, message: error.message });
    return new vscode.Diagnostic(range, error.message, vscode.DiagnosticSeverity.Error);
  });
  diagnosticCollection.set(document.uri, diagnostics);
}

export function deactivate() {
  diagnosticCollection.clear();
}