"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
const parser_1 = require("./parser");
// Create a diagnostic collection for our language
const diagnosticCollection = vscode.languages.createDiagnosticCollection('aion');
function activate(context) {
    console.log('Aion is now active!');
    // Register a listener for text changes
    context.subscriptions.push(vscode.workspace.onDidChangeTextDocument((event) => {
        const document = event.document;
        if (document.languageId === 'aion') {
            updateDiagnostics(document);
        }
    }));
    // Initial check for open documents
    vscode.workspace.textDocuments.forEach((document) => {
        if (document.languageId === 'aion') {
            updateDiagnostics(document);
        }
    });
    // Clear diagnostics when the extension is deactivated
    context.subscriptions.push(diagnosticCollection);
}
function updateDiagnostics(document) {
    console.log('Updating diagnostics for:', document.uri.fsPath);
    const text = document.getText();
    console.log('Text:', text);
    const { errors } = (0, parser_1.parseInput)(text);
    console.log('Errors:', errors);
    const diagnostics = errors.map((error) => {
        const range = new vscode.Range(error.line - 1, error.column, error.line - 1, error.column + 1);
        console.log('Diagnostic:', { range, message: error.message });
        return new vscode.Diagnostic(range, error.message, vscode.DiagnosticSeverity.Error);
    });
    diagnosticCollection.set(document.uri, diagnostics);
}
function deactivate() {
    diagnosticCollection.clear();
}
