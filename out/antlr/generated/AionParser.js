"use strict";
// Generated from src/Aion.g4 by ANTLR 4.9.0-SNAPSHOT
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
exports.ValueContext = exports.Time_unitContext = exports.DurationContext = exports.Time_rangeContext = exports.Time_atContext = exports.TimeContext = exports.WeekdayContext = exports.Weekday_listContext = exports.Date_specifierContext = exports.DateContext = exports.Function_callContext = exports.Value_exprContext = exports.StrategyContext = exports.Comparison_opContext = exports.ConditionContext = exports.Export_stmtContext = exports.Include_stmtContext = exports.Identifier_listContext = exports.Merge_stmtContext = exports.Filter_stmtContext = exports.Conditional_stmtContext = exports.Loop_unitContext = exports.Loop_endContext = exports.Loop_startContext = exports.Loop_stmtContext = exports.Pomodoro_declContext = exports.Task_time_specContext = exports.Task_declContext = exports.Structured_event_fieldContext = exports.Structured_event_stmtContext = exports.Recurrence_exprContext = exports.Event_time_specContext = exports.Event_declContext = exports.DeclarationContext = exports.Default_declarationContext = exports.Value_assignment_stmtContext = exports.Assignment_stmtContext = exports.Import_stmtContext = exports.StatementContext = exports.ProgramContext = exports.AionParser = void 0;
const ATN_1 = require("antlr4ts/atn/ATN");
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const Token_1 = require("antlr4ts/Token");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = __importStar(require("antlr4ts/misc/Utils"));
class AionParser extends Parser_1.Parser {
    // @Override
    // @NotNull
    get vocabulary() {
        return AionParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "Aion.g4"; }
    // @Override
    get ruleNames() { return AionParser.ruleNames; }
    // @Override
    get serializedATN() { return AionParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(AionParser._ATN, this);
    }
    // @RuleVersion(0)
    program() {
        let _localctx = new ProgramContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, AionParser.RULE_program);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 83;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__0) | (1 << AionParser.T__4) | (1 << AionParser.T__5) | (1 << AionParser.T__17))) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (AionParser.T__45 - 46)) | (1 << (AionParser.T__49 - 46)) | (1 << (AionParser.T__52 - 46)) | (1 << (AionParser.T__53 - 46)) | (1 << (AionParser.T__55 - 46)))) !== 0) || _la === AionParser.IDENTIFIER) {
                    {
                        {
                            this.state = 80;
                            this.statement();
                        }
                    }
                    this.state = 85;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 86;
                this.match(AionParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    statement() {
        let _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, AionParser.RULE_statement);
        try {
            this.state = 99;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 88;
                        this.import_stmt();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 89;
                        this.assignment_stmt();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 90;
                        this.value_assignment_stmt();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 91;
                        this.loop_stmt();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 92;
                        this.export_stmt();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 93;
                        this.merge_stmt();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 94;
                        this.filter_stmt();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 95;
                        this.include_stmt();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 96;
                        this.conditional_stmt();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 97;
                        this.structured_event_stmt();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 98;
                        this.default_declaration();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    import_stmt() {
        let _localctx = new Import_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, AionParser.RULE_import_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 101;
                this.match(AionParser.T__0);
                this.state = 102;
                this.match(AionParser.STRING);
                this.state = 103;
                this.match(AionParser.T__1);
                this.state = 104;
                this.match(AionParser.IDENTIFIER);
                this.state = 105;
                this.match(AionParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    assignment_stmt() {
        let _localctx = new Assignment_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, AionParser.RULE_assignment_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 107;
                this.match(AionParser.IDENTIFIER);
                this.state = 108;
                this.match(AionParser.T__3);
                this.state = 109;
                this.declaration();
                this.state = 110;
                this.match(AionParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    value_assignment_stmt() {
        let _localctx = new Value_assignment_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, AionParser.RULE_value_assignment_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 112;
                this.match(AionParser.IDENTIFIER);
                this.state = 113;
                this.match(AionParser.T__3);
                this.state = 114;
                this.value_expr();
                this.state = 115;
                this.match(AionParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    default_declaration() {
        let _localctx = new Default_declarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, AionParser.RULE_default_declaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 117;
                this.match(AionParser.T__4);
                this.state = 121;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case AionParser.T__5:
                        {
                            this.state = 118;
                            this.event_decl();
                        }
                        break;
                    case AionParser.T__27:
                        {
                            this.state = 119;
                            this.task_decl();
                        }
                        break;
                    case AionParser.T__30:
                        {
                            this.state = 120;
                            this.pomodoro_decl();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 123;
                this.match(AionParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    declaration() {
        let _localctx = new DeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, AionParser.RULE_declaration);
        try {
            this.state = 128;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AionParser.T__5:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 125;
                        this.event_decl();
                    }
                    break;
                case AionParser.T__27:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 126;
                        this.task_decl();
                    }
                    break;
                case AionParser.T__30:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 127;
                        this.pomodoro_decl();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    event_decl() {
        let _localctx = new Event_declContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, AionParser.RULE_event_decl);
        try {
            this.state = 141;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 130;
                        this.match(AionParser.T__5);
                        this.state = 131;
                        this.match(AionParser.STRING);
                        this.state = 132;
                        this.recurrence_expr();
                        this.state = 133;
                        this.event_time_spec();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 135;
                        this.match(AionParser.T__5);
                        this.state = 136;
                        this.match(AionParser.STRING);
                        this.state = 137;
                        this.match(AionParser.T__6);
                        this.state = 138;
                        this.date();
                        this.state = 139;
                        this.event_time_spec();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    event_time_spec() {
        let _localctx = new Event_time_specContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, AionParser.RULE_event_time_spec);
        try {
            this.state = 161;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AionParser.T__7:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 143;
                        this.match(AionParser.T__7);
                        this.state = 144;
                        this.time();
                        this.state = 145;
                        this.match(AionParser.T__8);
                        this.state = 146;
                        this.duration();
                    }
                    break;
                case AionParser.T__9:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 148;
                        this.match(AionParser.T__9);
                        this.state = 149;
                        this.time();
                        this.state = 150;
                        this.match(AionParser.T__10);
                        this.state = 151;
                        this.time();
                    }
                    break;
                case AionParser.T__8:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 153;
                        this.match(AionParser.T__8);
                        this.state = 154;
                        this.duration();
                        this.state = 155;
                        this.match(AionParser.T__11);
                        this.state = 156;
                        this.match(AionParser.T__12);
                        this.state = 157;
                        this.time();
                        this.state = 158;
                        this.match(AionParser.T__10);
                        this.state = 159;
                        this.time();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    recurrence_expr() {
        let _localctx = new Recurrence_exprContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, AionParser.RULE_recurrence_expr);
        try {
            this.state = 196;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AionParser.T__13:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 163;
                        this.match(AionParser.T__13);
                        this.state = 166;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                            case 1:
                                {
                                    this.state = 164;
                                    this.match(AionParser.T__7);
                                    this.state = 165;
                                    this.time();
                                }
                                break;
                        }
                    }
                    break;
                case AionParser.T__14:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 168;
                        this.match(AionParser.T__14);
                        this.state = 169;
                        this.match(AionParser.T__6);
                        this.state = 170;
                        this.weekday_list();
                        this.state = 173;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
                            case 1:
                                {
                                    this.state = 171;
                                    this.time_range();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 172;
                                    this.time_at();
                                }
                                break;
                        }
                    }
                    break;
                case AionParser.T__15:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 175;
                        this.match(AionParser.T__15);
                        this.state = 176;
                        this.match(AionParser.T__6);
                        this.state = 177;
                        this.match(AionParser.NUMBER);
                        this.state = 180;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 8, this._ctx)) {
                            case 1:
                                {
                                    this.state = 178;
                                    this.time_range();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 179;
                                    this.time_at();
                                }
                                break;
                        }
                    }
                    break;
                case AionParser.T__16:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 182;
                        this.match(AionParser.T__16);
                        this.state = 183;
                        this.match(AionParser.T__6);
                        this.state = 184;
                        this.date();
                        this.state = 187;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
                            case 1:
                                {
                                    this.state = 185;
                                    this.time_range();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 186;
                                    this.time_at();
                                }
                                break;
                        }
                    }
                    break;
                case AionParser.T__17:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 189;
                        this.match(AionParser.T__17);
                        this.state = 190;
                        this.match(AionParser.NUMBER);
                        this.state = 191;
                        this.loop_unit();
                        this.state = 194;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
                            case 1:
                                {
                                    this.state = 192;
                                    this.time_range();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 193;
                                    this.time_at();
                                }
                                break;
                        }
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    structured_event_stmt() {
        let _localctx = new Structured_event_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, AionParser.RULE_structured_event_stmt);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 198;
                this.match(AionParser.T__5);
                this.state = 199;
                this.match(AionParser.IDENTIFIER);
                this.state = 200;
                this.match(AionParser.T__18);
                this.state = 204;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__20) | (1 << AionParser.T__23) | (1 << AionParser.T__24) | (1 << AionParser.T__25) | (1 << AionParser.T__26))) !== 0)) {
                    {
                        {
                            this.state = 201;
                            this.structured_event_field();
                        }
                    }
                    this.state = 206;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 207;
                this.match(AionParser.T__19);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    structured_event_field() {
        let _localctx = new Structured_event_fieldContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, AionParser.RULE_structured_event_field);
        let _la;
        try {
            this.state = 239;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AionParser.T__20:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 209;
                        this.match(AionParser.T__20);
                        this.state = 210;
                        this.match(AionParser.T__21);
                        this.state = 211;
                        this.match(AionParser.STRING);
                        this.state = 213;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === AionParser.T__22) {
                            {
                                this.state = 212;
                                this.match(AionParser.T__22);
                            }
                        }
                    }
                    break;
                case AionParser.T__23:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 215;
                        this.match(AionParser.T__23);
                        this.state = 216;
                        this.match(AionParser.T__21);
                        this.state = 217;
                        this.time();
                        this.state = 219;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === AionParser.T__22) {
                            {
                                this.state = 218;
                                this.match(AionParser.T__22);
                            }
                        }
                    }
                    break;
                case AionParser.T__24:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 221;
                        this.match(AionParser.T__24);
                        this.state = 222;
                        this.match(AionParser.T__21);
                        this.state = 223;
                        this.duration();
                        this.state = 225;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === AionParser.T__22) {
                            {
                                this.state = 224;
                                this.match(AionParser.T__22);
                            }
                        }
                    }
                    break;
                case AionParser.T__25:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 227;
                        this.match(AionParser.T__25);
                        this.state = 228;
                        this.match(AionParser.T__21);
                        this.state = 229;
                        this.match(AionParser.STRING);
                        this.state = 231;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === AionParser.T__22) {
                            {
                                this.state = 230;
                                this.match(AionParser.T__22);
                            }
                        }
                    }
                    break;
                case AionParser.T__26:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 233;
                        this.match(AionParser.T__26);
                        this.state = 234;
                        this.match(AionParser.T__21);
                        this.state = 235;
                        this.match(AionParser.STRING);
                        this.state = 237;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === AionParser.T__22) {
                            {
                                this.state = 236;
                                this.match(AionParser.T__22);
                            }
                        }
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    task_decl() {
        let _localctx = new Task_declContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, AionParser.RULE_task_decl);
        try {
            this.state = 252;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 19, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 241;
                        this.match(AionParser.T__27);
                        this.state = 242;
                        this.match(AionParser.STRING);
                        this.state = 243;
                        this.match(AionParser.T__6);
                        this.state = 244;
                        this.date();
                        this.state = 245;
                        this.task_time_spec();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 247;
                        this.match(AionParser.T__27);
                        this.state = 248;
                        this.match(AionParser.STRING);
                        this.state = 249;
                        this.recurrence_expr();
                        this.state = 250;
                        this.task_time_spec();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    task_time_spec() {
        let _localctx = new Task_time_specContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, AionParser.RULE_task_time_spec);
        let _la;
        try {
            this.state = 265;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AionParser.T__7:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 254;
                        this.match(AionParser.T__7);
                        this.state = 255;
                        this.time();
                    }
                    break;
                case AionParser.T__11:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 256;
                        this.match(AionParser.T__11);
                        this.state = 257;
                        this.match(AionParser.T__12);
                        this.state = 258;
                        this.time();
                        this.state = 259;
                        this.match(AionParser.T__28);
                        this.state = 260;
                        this.time();
                        this.state = 263;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === AionParser.T__29) {
                            {
                                this.state = 261;
                                this.match(AionParser.T__29);
                                this.state = 262;
                                this.strategy();
                            }
                        }
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    pomodoro_decl() {
        let _localctx = new Pomodoro_declContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, AionParser.RULE_pomodoro_decl);
        let _la;
        try {
            this.state = 304;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 26, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 267;
                        this.match(AionParser.T__30);
                        this.state = 268;
                        this.match(AionParser.STRING);
                        this.state = 269;
                        this.match(AionParser.T__6);
                        this.state = 270;
                        this.date();
                        this.state = 271;
                        this.match(AionParser.T__7);
                        this.state = 272;
                        this.time();
                        this.state = 273;
                        this.match(AionParser.T__31);
                        this.state = 274;
                        this.match(AionParser.NUMBER);
                        this.state = 275;
                        this.match(AionParser.T__32);
                        this.state = 278;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === AionParser.T__33) {
                            {
                                this.state = 276;
                                this.match(AionParser.T__33);
                                this.state = 277;
                                this.duration();
                            }
                        }
                        this.state = 284;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === AionParser.T__34) {
                            {
                                this.state = 280;
                                this.match(AionParser.T__34);
                                this.state = 281;
                                this.duration();
                                this.state = 282;
                                this.match(AionParser.T__35);
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 286;
                        this.match(AionParser.T__30);
                        this.state = 287;
                        this.match(AionParser.STRING);
                        this.state = 288;
                        this.recurrence_expr();
                        this.state = 289;
                        this.match(AionParser.T__7);
                        this.state = 290;
                        this.time();
                        this.state = 291;
                        this.match(AionParser.T__31);
                        this.state = 292;
                        this.match(AionParser.NUMBER);
                        this.state = 293;
                        this.match(AionParser.T__32);
                        this.state = 296;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === AionParser.T__33) {
                            {
                                this.state = 294;
                                this.match(AionParser.T__33);
                                this.state = 295;
                                this.duration();
                            }
                        }
                        this.state = 302;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === AionParser.T__34) {
                            {
                                this.state = 298;
                                this.match(AionParser.T__34);
                                this.state = 299;
                                this.duration();
                                this.state = 300;
                                this.match(AionParser.T__35);
                            }
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    loop_stmt() {
        let _localctx = new Loop_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, AionParser.RULE_loop_stmt);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 306;
                this.match(AionParser.T__17);
                this.state = 307;
                this.loop_unit();
                this.state = 308;
                this.match(AionParser.T__9);
                this.state = 309;
                this.loop_start();
                this.state = 310;
                this.match(AionParser.T__10);
                this.state = 311;
                this.loop_end();
                this.state = 314;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === AionParser.T__36) {
                    {
                        this.state = 312;
                        this.match(AionParser.T__36);
                        this.state = 313;
                        this.match(AionParser.NUMBER);
                    }
                }
                this.state = 316;
                this.match(AionParser.T__18);
                this.state = 320;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__0) | (1 << AionParser.T__4) | (1 << AionParser.T__5) | (1 << AionParser.T__17))) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (AionParser.T__45 - 46)) | (1 << (AionParser.T__49 - 46)) | (1 << (AionParser.T__52 - 46)) | (1 << (AionParser.T__53 - 46)) | (1 << (AionParser.T__55 - 46)))) !== 0) || _la === AionParser.IDENTIFIER) {
                    {
                        {
                            this.state = 317;
                            this.statement();
                        }
                    }
                    this.state = 322;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 323;
                this.match(AionParser.T__19);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    loop_start() {
        let _localctx = new Loop_startContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, AionParser.RULE_loop_start);
        try {
            this.state = 328;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AionParser.NUMBER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 325;
                        this.date();
                    }
                    break;
                case AionParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 326;
                        this.match(AionParser.IDENTIFIER);
                    }
                    break;
                case AionParser.T__37:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 327;
                        this.match(AionParser.T__37);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    loop_end() {
        let _localctx = new Loop_endContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, AionParser.RULE_loop_end);
        try {
            this.state = 336;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 30, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 330;
                        this.date();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 331;
                        this.match(AionParser.IDENTIFIER);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 332;
                        this.loop_start();
                        this.state = 333;
                        this.match(AionParser.T__38);
                        this.state = 334;
                        this.match(AionParser.NUMBER);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    loop_unit() {
        let _localctx = new Loop_unitContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, AionParser.RULE_loop_unit);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 338;
                _la = this._input.LA(1);
                if (!(((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (AionParser.T__39 - 40)) | (1 << (AionParser.T__40 - 40)) | (1 << (AionParser.T__41 - 40)) | (1 << (AionParser.T__42 - 40)) | (1 << (AionParser.T__43 - 40)) | (1 << (AionParser.T__44 - 40)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    conditional_stmt() {
        let _localctx = new Conditional_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, AionParser.RULE_conditional_stmt);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 340;
                this.match(AionParser.T__45);
                this.state = 341;
                this.match(AionParser.T__46);
                this.state = 342;
                this.condition();
                this.state = 343;
                this.match(AionParser.T__47);
                this.state = 344;
                this.match(AionParser.T__18);
                this.state = 348;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__0) | (1 << AionParser.T__4) | (1 << AionParser.T__5) | (1 << AionParser.T__17))) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (AionParser.T__45 - 46)) | (1 << (AionParser.T__49 - 46)) | (1 << (AionParser.T__52 - 46)) | (1 << (AionParser.T__53 - 46)) | (1 << (AionParser.T__55 - 46)))) !== 0) || _la === AionParser.IDENTIFIER) {
                    {
                        {
                            this.state = 345;
                            this.statement();
                        }
                    }
                    this.state = 350;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 351;
                this.match(AionParser.T__19);
                this.state = 368;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 352;
                                this.match(AionParser.T__48);
                                this.state = 353;
                                this.match(AionParser.T__45);
                                this.state = 354;
                                this.match(AionParser.T__46);
                                this.state = 355;
                                this.condition();
                                this.state = 356;
                                this.match(AionParser.T__47);
                                this.state = 357;
                                this.match(AionParser.T__18);
                                this.state = 361;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__0) | (1 << AionParser.T__4) | (1 << AionParser.T__5) | (1 << AionParser.T__17))) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (AionParser.T__45 - 46)) | (1 << (AionParser.T__49 - 46)) | (1 << (AionParser.T__52 - 46)) | (1 << (AionParser.T__53 - 46)) | (1 << (AionParser.T__55 - 46)))) !== 0) || _la === AionParser.IDENTIFIER) {
                                    {
                                        {
                                            this.state = 358;
                                            this.statement();
                                        }
                                    }
                                    this.state = 363;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 364;
                                this.match(AionParser.T__19);
                            }
                        }
                    }
                    this.state = 370;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
                }
                this.state = 380;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === AionParser.T__48) {
                    {
                        this.state = 371;
                        this.match(AionParser.T__48);
                        this.state = 372;
                        this.match(AionParser.T__18);
                        this.state = 376;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__0) | (1 << AionParser.T__4) | (1 << AionParser.T__5) | (1 << AionParser.T__17))) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (AionParser.T__45 - 46)) | (1 << (AionParser.T__49 - 46)) | (1 << (AionParser.T__52 - 46)) | (1 << (AionParser.T__53 - 46)) | (1 << (AionParser.T__55 - 46)))) !== 0) || _la === AionParser.IDENTIFIER) {
                            {
                                {
                                    this.state = 373;
                                    this.statement();
                                }
                            }
                            this.state = 378;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 379;
                        this.match(AionParser.T__19);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    filter_stmt() {
        let _localctx = new Filter_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, AionParser.RULE_filter_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 382;
                this.match(AionParser.T__49);
                this.state = 383;
                this.match(AionParser.IDENTIFIER);
                this.state = 384;
                this.match(AionParser.T__50);
                this.state = 385;
                this.condition();
                this.state = 386;
                this.match(AionParser.T__51);
                this.state = 387;
                this.match(AionParser.IDENTIFIER);
                this.state = 388;
                this.match(AionParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    merge_stmt() {
        let _localctx = new Merge_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, AionParser.RULE_merge_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 390;
                this.match(AionParser.T__52);
                this.state = 391;
                this.identifier_list();
                this.state = 392;
                this.match(AionParser.T__51);
                this.state = 393;
                this.match(AionParser.IDENTIFIER);
                this.state = 394;
                this.match(AionParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    identifier_list() {
        let _localctx = new Identifier_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, AionParser.RULE_identifier_list);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 396;
                this.match(AionParser.IDENTIFIER);
                this.state = 401;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === AionParser.T__22) {
                    {
                        {
                            this.state = 397;
                            this.match(AionParser.T__22);
                            this.state = 398;
                            this.match(AionParser.IDENTIFIER);
                        }
                    }
                    this.state = 403;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    include_stmt() {
        let _localctx = new Include_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, AionParser.RULE_include_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 404;
                this.match(AionParser.T__53);
                this.state = 405;
                this.match(AionParser.IDENTIFIER);
                this.state = 406;
                this.match(AionParser.T__54);
                this.state = 407;
                this.match(AionParser.IDENTIFIER);
                this.state = 408;
                this.match(AionParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    export_stmt() {
        let _localctx = new Export_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, AionParser.RULE_export_stmt);
        let _la;
        try {
            this.state = 425;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 38, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 410;
                        this.match(AionParser.T__55);
                        this.state = 411;
                        this.match(AionParser.IDENTIFIER);
                        this.state = 414;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === AionParser.T__1) {
                            {
                                this.state = 412;
                                this.match(AionParser.T__1);
                                this.state = 413;
                                this.match(AionParser.STRING);
                            }
                        }
                        this.state = 416;
                        this.match(AionParser.T__2);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 417;
                        this.match(AionParser.T__55);
                        this.state = 418;
                        this.match(AionParser.T__56);
                        this.state = 419;
                        this.match(AionParser.T__1);
                        this.state = 420;
                        this.match(AionParser.STRING);
                        this.state = 421;
                        this.match(AionParser.T__2);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 422;
                        this.match(AionParser.T__55);
                        this.state = 423;
                        this.match(AionParser.T__57);
                        this.state = 424;
                        this.match(AionParser.T__2);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    condition() {
        let _localctx = new ConditionContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, AionParser.RULE_condition);
        try {
            this.state = 444;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AionParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 427;
                        this.match(AionParser.IDENTIFIER);
                        this.state = 428;
                        this.comparison_op();
                        this.state = 429;
                        this.value();
                    }
                    break;
                case AionParser.T__58:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 431;
                        this.match(AionParser.T__58);
                        this.state = 432;
                        this.match(AionParser.T__46);
                        this.state = 433;
                        this.weekday();
                        this.state = 434;
                        this.match(AionParser.T__47);
                        this.state = 435;
                        this.match(AionParser.T__54);
                        this.state = 436;
                        this.match(AionParser.T__43);
                        this.state = 437;
                        this.comparison_op();
                        this.state = 438;
                        this.match(AionParser.NUMBER);
                    }
                    break;
                case AionParser.T__26:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 440;
                        this.match(AionParser.T__26);
                        this.state = 441;
                        this.comparison_op();
                        this.state = 442;
                        this.match(AionParser.STRING);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    comparison_op() {
        let _localctx = new Comparison_opContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, AionParser.RULE_comparison_op);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 446;
                _la = this._input.LA(1);
                if (!(((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (AionParser.T__59 - 60)) | (1 << (AionParser.T__60 - 60)) | (1 << (AionParser.T__61 - 60)) | (1 << (AionParser.T__62 - 60)) | (1 << (AionParser.T__63 - 60)) | (1 << (AionParser.T__64 - 60)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    strategy() {
        let _localctx = new StrategyContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, AionParser.RULE_strategy);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 448;
                _la = this._input.LA(1);
                if (!(((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (AionParser.T__65 - 66)) | (1 << (AionParser.T__66 - 66)) | (1 << (AionParser.T__67 - 66)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    value_expr() {
        let _localctx = new Value_exprContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, AionParser.RULE_value_expr);
        try {
            this.state = 458;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 40, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 450;
                        this.date();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 451;
                        this.time();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 452;
                        this.duration();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 453;
                        this.match(AionParser.STRING);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 454;
                        this.match(AionParser.NUMBER);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 455;
                        this.match(AionParser.IDENTIFIER);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 456;
                        this.function_call();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 457;
                        this.declaration();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    function_call() {
        let _localctx = new Function_callContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, AionParser.RULE_function_call);
        try {
            this.state = 472;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AionParser.T__58:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 460;
                        this.match(AionParser.T__58);
                        this.state = 461;
                        this.match(AionParser.T__46);
                        this.state = 462;
                        this.weekday();
                        this.state = 463;
                        this.match(AionParser.T__47);
                        this.state = 464;
                        this.match(AionParser.T__54);
                        this.state = 465;
                        this.match(AionParser.T__43);
                    }
                    break;
                case AionParser.T__68:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 467;
                        this.match(AionParser.T__68);
                        this.state = 468;
                        this.match(AionParser.T__46);
                        this.state = 469;
                        this.date();
                        this.state = 470;
                        this.match(AionParser.T__47);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    date() {
        let _localctx = new DateContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, AionParser.RULE_date);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 474;
                this.match(AionParser.NUMBER);
                this.state = 475;
                this.match(AionParser.T__69);
                this.state = 476;
                this.match(AionParser.NUMBER);
                this.state = 479;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === AionParser.T__69) {
                    {
                        this.state = 477;
                        this.match(AionParser.T__69);
                        this.state = 478;
                        this.match(AionParser.NUMBER);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    date_specifier() {
        let _localctx = new Date_specifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, AionParser.RULE_date_specifier);
        try {
            this.state = 483;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AionParser.NUMBER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 481;
                        this.date();
                    }
                    break;
                case AionParser.T__70:
                case AionParser.T__71:
                case AionParser.T__72:
                case AionParser.T__73:
                case AionParser.T__74:
                case AionParser.T__75:
                case AionParser.T__76:
                case AionParser.T__77:
                case AionParser.T__78:
                case AionParser.T__79:
                case AionParser.T__80:
                case AionParser.T__81:
                case AionParser.T__82:
                case AionParser.T__83:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 482;
                        this.weekday();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    weekday_list() {
        let _localctx = new Weekday_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, AionParser.RULE_weekday_list);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 485;
                this.weekday();
                this.state = 490;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === AionParser.T__22) {
                    {
                        {
                            this.state = 486;
                            this.match(AionParser.T__22);
                            this.state = 487;
                            this.weekday();
                        }
                    }
                    this.state = 492;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    weekday() {
        let _localctx = new WeekdayContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, AionParser.RULE_weekday);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 493;
                _la = this._input.LA(1);
                if (!(((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (AionParser.T__70 - 71)) | (1 << (AionParser.T__71 - 71)) | (1 << (AionParser.T__72 - 71)) | (1 << (AionParser.T__73 - 71)) | (1 << (AionParser.T__74 - 71)) | (1 << (AionParser.T__75 - 71)) | (1 << (AionParser.T__76 - 71)) | (1 << (AionParser.T__77 - 71)) | (1 << (AionParser.T__78 - 71)) | (1 << (AionParser.T__79 - 71)) | (1 << (AionParser.T__80 - 71)) | (1 << (AionParser.T__81 - 71)) | (1 << (AionParser.T__82 - 71)) | (1 << (AionParser.T__83 - 71)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    time() {
        let _localctx = new TimeContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, AionParser.RULE_time);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 495;
                this.match(AionParser.NUMBER);
                this.state = 496;
                this.match(AionParser.T__21);
                this.state = 497;
                this.match(AionParser.NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    time_at() {
        let _localctx = new Time_atContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, AionParser.RULE_time_at);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 499;
                this.match(AionParser.T__7);
                this.state = 500;
                this.time();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    time_range() {
        let _localctx = new Time_rangeContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, AionParser.RULE_time_range);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 502;
                this.match(AionParser.T__9);
                this.state = 503;
                this.time();
                this.state = 504;
                this.match(AionParser.T__10);
                this.state = 505;
                this.time();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    duration() {
        let _localctx = new DurationContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, AionParser.RULE_duration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 507;
                this.match(AionParser.NUMBER);
                this.state = 508;
                this.time_unit();
                this.state = 513;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === AionParser.NUMBER) {
                    {
                        {
                            this.state = 509;
                            this.match(AionParser.NUMBER);
                            this.state = 510;
                            this.time_unit();
                        }
                    }
                    this.state = 515;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    time_unit() {
        let _localctx = new Time_unitContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, AionParser.RULE_time_unit);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 516;
                _la = this._input.LA(1);
                if (!(_la === AionParser.T__84 || _la === AionParser.T__85)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    value() {
        let _localctx = new ValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, AionParser.RULE_value);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 518;
                _la = this._input.LA(1);
                if (!(((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (AionParser.IDENTIFIER - 87)) | (1 << (AionParser.STRING - 87)) | (1 << (AionParser.NUMBER - 87)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    static get _ATN() {
        if (!AionParser.__ATN) {
            AionParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(AionParser._serializedATN));
        }
        return AionParser.__ATN;
    }
}
exports.AionParser = AionParser;
AionParser.T__0 = 1;
AionParser.T__1 = 2;
AionParser.T__2 = 3;
AionParser.T__3 = 4;
AionParser.T__4 = 5;
AionParser.T__5 = 6;
AionParser.T__6 = 7;
AionParser.T__7 = 8;
AionParser.T__8 = 9;
AionParser.T__9 = 10;
AionParser.T__10 = 11;
AionParser.T__11 = 12;
AionParser.T__12 = 13;
AionParser.T__13 = 14;
AionParser.T__14 = 15;
AionParser.T__15 = 16;
AionParser.T__16 = 17;
AionParser.T__17 = 18;
AionParser.T__18 = 19;
AionParser.T__19 = 20;
AionParser.T__20 = 21;
AionParser.T__21 = 22;
AionParser.T__22 = 23;
AionParser.T__23 = 24;
AionParser.T__24 = 25;
AionParser.T__25 = 26;
AionParser.T__26 = 27;
AionParser.T__27 = 28;
AionParser.T__28 = 29;
AionParser.T__29 = 30;
AionParser.T__30 = 31;
AionParser.T__31 = 32;
AionParser.T__32 = 33;
AionParser.T__33 = 34;
AionParser.T__34 = 35;
AionParser.T__35 = 36;
AionParser.T__36 = 37;
AionParser.T__37 = 38;
AionParser.T__38 = 39;
AionParser.T__39 = 40;
AionParser.T__40 = 41;
AionParser.T__41 = 42;
AionParser.T__42 = 43;
AionParser.T__43 = 44;
AionParser.T__44 = 45;
AionParser.T__45 = 46;
AionParser.T__46 = 47;
AionParser.T__47 = 48;
AionParser.T__48 = 49;
AionParser.T__49 = 50;
AionParser.T__50 = 51;
AionParser.T__51 = 52;
AionParser.T__52 = 53;
AionParser.T__53 = 54;
AionParser.T__54 = 55;
AionParser.T__55 = 56;
AionParser.T__56 = 57;
AionParser.T__57 = 58;
AionParser.T__58 = 59;
AionParser.T__59 = 60;
AionParser.T__60 = 61;
AionParser.T__61 = 62;
AionParser.T__62 = 63;
AionParser.T__63 = 64;
AionParser.T__64 = 65;
AionParser.T__65 = 66;
AionParser.T__66 = 67;
AionParser.T__67 = 68;
AionParser.T__68 = 69;
AionParser.T__69 = 70;
AionParser.T__70 = 71;
AionParser.T__71 = 72;
AionParser.T__72 = 73;
AionParser.T__73 = 74;
AionParser.T__74 = 75;
AionParser.T__75 = 76;
AionParser.T__76 = 77;
AionParser.T__77 = 78;
AionParser.T__78 = 79;
AionParser.T__79 = 80;
AionParser.T__80 = 81;
AionParser.T__81 = 82;
AionParser.T__82 = 83;
AionParser.T__83 = 84;
AionParser.T__84 = 85;
AionParser.T__85 = 86;
AionParser.IDENTIFIER = 87;
AionParser.STRING = 88;
AionParser.NUMBER = 89;
AionParser.WS = 90;
AionParser.COMMENT = 91;
AionParser.MONTH_NAME = 92;
AionParser.RULE_program = 0;
AionParser.RULE_statement = 1;
AionParser.RULE_import_stmt = 2;
AionParser.RULE_assignment_stmt = 3;
AionParser.RULE_value_assignment_stmt = 4;
AionParser.RULE_default_declaration = 5;
AionParser.RULE_declaration = 6;
AionParser.RULE_event_decl = 7;
AionParser.RULE_event_time_spec = 8;
AionParser.RULE_recurrence_expr = 9;
AionParser.RULE_structured_event_stmt = 10;
AionParser.RULE_structured_event_field = 11;
AionParser.RULE_task_decl = 12;
AionParser.RULE_task_time_spec = 13;
AionParser.RULE_pomodoro_decl = 14;
AionParser.RULE_loop_stmt = 15;
AionParser.RULE_loop_start = 16;
AionParser.RULE_loop_end = 17;
AionParser.RULE_loop_unit = 18;
AionParser.RULE_conditional_stmt = 19;
AionParser.RULE_filter_stmt = 20;
AionParser.RULE_merge_stmt = 21;
AionParser.RULE_identifier_list = 22;
AionParser.RULE_include_stmt = 23;
AionParser.RULE_export_stmt = 24;
AionParser.RULE_condition = 25;
AionParser.RULE_comparison_op = 26;
AionParser.RULE_strategy = 27;
AionParser.RULE_value_expr = 28;
AionParser.RULE_function_call = 29;
AionParser.RULE_date = 30;
AionParser.RULE_date_specifier = 31;
AionParser.RULE_weekday_list = 32;
AionParser.RULE_weekday = 33;
AionParser.RULE_time = 34;
AionParser.RULE_time_at = 35;
AionParser.RULE_time_range = 36;
AionParser.RULE_duration = 37;
AionParser.RULE_time_unit = 38;
AionParser.RULE_value = 39;
// tslint:disable:no-trailing-whitespace
AionParser.ruleNames = [
    "program", "statement", "import_stmt", "assignment_stmt", "value_assignment_stmt",
    "default_declaration", "declaration", "event_decl", "event_time_spec",
    "recurrence_expr", "structured_event_stmt", "structured_event_field",
    "task_decl", "task_time_spec", "pomodoro_decl", "loop_stmt", "loop_start",
    "loop_end", "loop_unit", "conditional_stmt", "filter_stmt", "merge_stmt",
    "identifier_list", "include_stmt", "export_stmt", "condition", "comparison_op",
    "strategy", "value_expr", "function_call", "date", "date_specifier", "weekday_list",
    "weekday", "time", "time_at", "time_range", "duration", "time_unit", "value",
];
AionParser._LITERAL_NAMES = [
    undefined, "'import'", "'as'", "';'", "'='", "'new'", "'event'", "'on'",
    "'at'", "'for'", "'from'", "'to'", "'find'", "'between'", "'daily'", "'weekly'",
    "'monthly'", "'yearly'", "'each'", "'{'", "'}'", "'name'", "':'", "','",
    "'start'", "'duration'", "'location'", "'category'", "'task'", "'and'",
    "'using'", "'pomodoro'", "'repeat'", "'times'", "'every'", "'with'", "'pause'",
    "'step'", "'today'", "'+'", "'day'", "'days'", "'week'", "'weeks'", "'month'",
    "'months'", "'if'", "'('", "')'", "'else'", "'filter'", "'where'", "'into'",
    "'merge'", "'include'", "'in'", "'export'", "'default'", "'all'", "'count'",
    "'=='", "'!='", "'<'", "'<='", "'>'", "'>='", "'random'", "'earliest'",
    "'latest'", "'weeknumber'", "'.'", "'Monday'", "'Tuesday'", "'Wednesday'",
    "'Thursday'", "'Friday'", "'Saturday'", "'Sunday'", "'Mon'", "'Tue'",
    "'Wed'", "'Thu'", "'Fri'", "'Sat'", "'Sun'", "'h'", "'m'",
];
AionParser._SYMBOLIC_NAMES = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, "IDENTIFIER", "STRING", "NUMBER", "WS",
    "COMMENT", "MONTH_NAME",
];
AionParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(AionParser._LITERAL_NAMES, AionParser._SYMBOLIC_NAMES, []);
AionParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03^\u020B\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
    "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
    "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
    "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
    "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
    "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x03\x02\x07\x02" +
    "T\n\x02\f\x02\x0E\x02W\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03f" +
    "\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05" +
    "\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07" +
    "\x03\x07\x03\x07\x03\x07\x05\x07|\n\x07\x03\x07\x03\x07\x03\b\x03\b\x03" +
    "\b\x05\b\x83\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t" +
    "\x03\t\x03\t\x05\t\x90\n\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
    "\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\xA4" +
    "\n\n\x03\v\x03\v\x03\v\x05\v\xA9\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05" +
    "\v\xB0\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\xB7\n\v\x03\v\x03\v\x03" +
    "\v\x03\v\x03\v\x05\v\xBE\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\xC5\n" +
    "\v\x05\v\xC7\n\v\x03\f\x03\f\x03\f\x03\f\x07\f\xCD\n\f\f\f\x0E\f\xD0\v" +
    "\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x05\r\xD8\n\r\x03\r\x03\r\x03\r" +
    "\x03\r\x05\r\xDE\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\xE4\n\r\x03\r\x03\r" +
    "\x03\r\x03\r\x05\r\xEA\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\xF0\n\r\x05\r" +
    "\xF2\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
    "\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xFF\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03" +
    "\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u010A\n\x0F\x05\x0F" +
    "\u010C\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
    "\x10\x03\x10\x03\x10\x03\x10\x05\x10\u0119\n\x10\x03\x10\x03\x10\x03\x10" +
    "\x03\x10\x05\x10\u011F\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
    "\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u012B\n\x10\x03\x10\x03\x10" +
    "\x03\x10\x03\x10\x05\x10\u0131\n\x10\x05\x10\u0133\n\x10\x03\x11\x03\x11" +
    "\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u013D\n\x11\x03" +
    "\x11\x03\x11\x07\x11\u0141\n\x11\f\x11\x0E\x11\u0144\v\x11\x03\x11\x03" +
    "\x11\x03\x12\x03\x12\x03\x12\x05\x12\u014B\n\x12\x03\x13\x03\x13\x03\x13" +
    "\x03\x13\x03\x13\x03\x13\x05\x13\u0153\n\x13\x03\x14\x03\x14\x03\x15\x03" +
    "\x15\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15\u015D\n\x15\f\x15\x0E\x15" +
    "\u0160\v\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
    "\x15\x07\x15\u016A\n\x15\f\x15\x0E\x15\u016D\v\x15\x03\x15\x03\x15\x07" +
    "\x15\u0171\n\x15\f\x15\x0E\x15\u0174\v\x15\x03\x15\x03\x15\x03\x15\x07" +
    "\x15\u0179\n\x15\f\x15\x0E\x15\u017C\v\x15\x03\x15\x05\x15\u017F\n\x15" +
    "\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17" +
    "\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x07\x18" +
    "\u0192\n\x18\f\x18\x0E\x18\u0195\v\x18\x03\x19\x03\x19\x03\x19\x03\x19" +
    "\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u01A1\n\x1A\x03" +
    "\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05" +
    "\x1A\u01AC\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
    "\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
    "\x03\x1B\x05\x1B\u01BF\n\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03" +
    "\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u01CD\n\x1E" +
    "\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
    "\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u01DB\n\x1F\x03 \x03 \x03 \x03 \x03 " +
    "\x05 \u01E2\n \x03!\x03!\x05!\u01E6\n!\x03\"\x03\"\x03\"\x07\"\u01EB\n" +
    "\"\f\"\x0E\"\u01EE\v\"\x03#\x03#\x03$\x03$\x03$\x03$\x03%\x03%\x03%\x03" +
    "&\x03&\x03&\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x07\'\u0202\n\'\f\'\x0E" +
    "\'\u0205\v\'\x03(\x03(\x03)\x03)\x03)\x02\x02\x02*\x02\x02\x04\x02\x06" +
    "\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
    "\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x02" +
    "2\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02" +
    "N\x02P\x02\x02\b\x03\x02*/\x03\x02>C\x03\x02DF\x03\x02IV\x03\x02WX\x03" +
    "\x02Y[\x02\u0230\x02U\x03\x02\x02\x02\x04e\x03\x02\x02\x02\x06g\x03\x02" +
    "\x02\x02\bm\x03\x02\x02\x02\nr\x03\x02\x02\x02\fw\x03\x02\x02\x02\x0E" +
    "\x82\x03\x02\x02\x02\x10\x8F\x03\x02\x02\x02\x12\xA3\x03\x02\x02\x02\x14" +
    "\xC6\x03\x02\x02\x02\x16\xC8\x03\x02\x02\x02\x18\xF1\x03\x02\x02\x02\x1A" +
    "\xFE\x03\x02\x02\x02\x1C\u010B\x03\x02\x02\x02\x1E\u0132\x03\x02\x02\x02" +
    " \u0134\x03\x02\x02\x02\"\u014A\x03\x02\x02\x02$\u0152\x03\x02\x02\x02" +
    "&\u0154\x03\x02\x02\x02(\u0156\x03\x02\x02\x02*\u0180\x03\x02\x02\x02" +
    ",\u0188\x03\x02\x02\x02.\u018E\x03\x02\x02\x020\u0196\x03\x02\x02\x02" +
    "2\u01AB\x03\x02\x02\x024\u01BE\x03\x02\x02\x026\u01C0\x03\x02\x02\x02" +
    "8\u01C2\x03\x02\x02\x02:\u01CC\x03\x02\x02\x02<\u01DA\x03\x02\x02\x02" +
    ">\u01DC\x03\x02\x02\x02@\u01E5\x03\x02\x02\x02B\u01E7\x03\x02\x02\x02" +
    "D\u01EF\x03\x02\x02\x02F\u01F1\x03\x02\x02\x02H\u01F5\x03\x02\x02\x02" +
    "J\u01F8\x03\x02\x02\x02L\u01FD\x03\x02\x02\x02N\u0206\x03\x02\x02\x02" +
    "P\u0208\x03\x02\x02\x02RT\x05\x04\x03\x02SR\x03\x02\x02\x02TW\x03\x02" +
    "\x02\x02US\x03\x02\x02\x02UV\x03\x02\x02\x02VX\x03\x02\x02\x02WU\x03\x02" +
    "\x02\x02XY\x07\x02\x02\x03Y\x03\x03\x02\x02\x02Zf\x05\x06\x04\x02[f\x05" +
    "\b\x05\x02\\f\x05\n\x06\x02]f\x05 \x11\x02^f\x052\x1A\x02_f\x05,\x17\x02" +
    "`f\x05*\x16\x02af\x050\x19\x02bf\x05(\x15\x02cf\x05\x16\f\x02df\x05\f" +
    "\x07\x02eZ\x03\x02\x02\x02e[\x03\x02\x02\x02e\\\x03\x02\x02\x02e]\x03" +
    "\x02\x02\x02e^\x03\x02\x02\x02e_\x03\x02\x02\x02e`\x03\x02\x02\x02ea\x03" +
    "\x02\x02\x02eb\x03\x02\x02\x02ec\x03\x02\x02\x02ed\x03\x02\x02\x02f\x05" +
    "\x03\x02\x02\x02gh\x07\x03\x02\x02hi\x07Z\x02\x02ij\x07\x04\x02\x02jk" +
    "\x07Y\x02\x02kl\x07\x05\x02\x02l\x07\x03\x02\x02\x02mn\x07Y\x02\x02no" +
    "\x07\x06\x02\x02op\x05\x0E\b\x02pq\x07\x05\x02\x02q\t\x03\x02\x02\x02" +
    "rs\x07Y\x02\x02st\x07\x06\x02\x02tu\x05:\x1E\x02uv\x07\x05\x02\x02v\v" +
    "\x03\x02\x02\x02w{\x07\x07\x02\x02x|\x05\x10\t\x02y|\x05\x1A\x0E\x02z" +
    "|\x05\x1E\x10\x02{x\x03\x02\x02\x02{y\x03\x02\x02\x02{z\x03\x02\x02\x02" +
    "|}\x03\x02\x02\x02}~\x07\x05\x02\x02~\r\x03\x02\x02\x02\x7F\x83\x05\x10" +
    "\t\x02\x80\x83\x05\x1A\x0E\x02\x81\x83\x05\x1E\x10\x02\x82\x7F\x03\x02" +
    "\x02\x02\x82\x80\x03\x02\x02\x02\x82\x81\x03\x02\x02\x02\x83\x0F\x03\x02" +
    "\x02\x02\x84\x85\x07\b\x02\x02\x85\x86\x07Z\x02\x02\x86\x87\x05\x14\v" +
    "\x02\x87\x88\x05\x12\n\x02\x88\x90\x03\x02\x02\x02\x89\x8A\x07\b\x02\x02" +
    "\x8A\x8B\x07Z\x02\x02\x8B\x8C\x07\t\x02\x02\x8C\x8D\x05> \x02\x8D\x8E" +
    "\x05\x12\n\x02\x8E\x90\x03\x02\x02\x02\x8F\x84\x03\x02\x02\x02\x8F\x89" +
    "\x03\x02\x02\x02\x90\x11\x03\x02\x02\x02\x91\x92\x07\n\x02\x02\x92\x93" +
    "\x05F$\x02\x93\x94\x07\v\x02\x02\x94\x95\x05L\'\x02\x95\xA4\x03\x02\x02" +
    "\x02\x96\x97\x07\f\x02\x02\x97\x98\x05F$\x02\x98\x99\x07\r\x02\x02\x99" +
    "\x9A\x05F$\x02\x9A\xA4\x03\x02\x02\x02\x9B\x9C\x07\v\x02\x02\x9C\x9D\x05" +
    "L\'\x02\x9D\x9E\x07\x0E\x02\x02\x9E\x9F\x07\x0F\x02\x02\x9F\xA0\x05F$" +
    "\x02\xA0\xA1\x07\r\x02\x02\xA1\xA2\x05F$\x02\xA2\xA4\x03\x02\x02\x02\xA3" +
    "\x91\x03\x02\x02\x02\xA3\x96\x03\x02\x02\x02\xA3\x9B\x03\x02\x02\x02\xA4" +
    "\x13\x03\x02\x02\x02\xA5\xA8\x07\x10\x02\x02\xA6\xA7\x07\n\x02\x02\xA7" +
    "\xA9\x05F$\x02\xA8\xA6\x03\x02\x02\x02\xA8\xA9\x03\x02\x02\x02\xA9\xC7" +
    "\x03\x02\x02\x02\xAA\xAB\x07\x11\x02\x02\xAB\xAC\x07\t\x02\x02\xAC\xAF" +
    "\x05B\"\x02\xAD\xB0\x05J&\x02\xAE\xB0\x05H%\x02\xAF\xAD\x03\x02\x02\x02" +
    "\xAF\xAE\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\xC7\x03\x02\x02\x02" +
    "\xB1\xB2\x07\x12\x02\x02\xB2\xB3\x07\t\x02\x02\xB3\xB6\x07[\x02\x02\xB4" +
    "\xB7\x05J&\x02\xB5\xB7\x05H%\x02\xB6\xB4\x03\x02\x02\x02\xB6\xB5\x03\x02" +
    "\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xC7\x03\x02\x02\x02\xB8\xB9\x07\x13" +
    "\x02\x02\xB9\xBA\x07\t\x02\x02\xBA\xBD\x05> \x02\xBB\xBE\x05J&\x02\xBC" +
    "\xBE\x05H%\x02\xBD\xBB\x03\x02\x02\x02\xBD\xBC\x03\x02\x02\x02\xBD\xBE" +
    "\x03\x02\x02\x02\xBE\xC7\x03\x02\x02\x02\xBF\xC0\x07\x14\x02\x02\xC0\xC1" +
    "\x07[\x02\x02\xC1\xC4\x05&\x14\x02\xC2\xC5\x05J&\x02\xC3\xC5\x05H%\x02" +
    "\xC4\xC2\x03\x02\x02\x02\xC4\xC3\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02" +
    "\xC5\xC7\x03\x02\x02\x02\xC6\xA5\x03\x02\x02\x02\xC6\xAA\x03\x02\x02\x02" +
    "\xC6\xB1\x03\x02\x02\x02\xC6\xB8\x03\x02\x02\x02\xC6\xBF\x03\x02\x02\x02" +
    "\xC7\x15\x03\x02\x02\x02\xC8\xC9\x07\b\x02\x02\xC9\xCA\x07Y\x02\x02\xCA" +
    "\xCE\x07\x15\x02\x02\xCB\xCD\x05\x18\r\x02\xCC\xCB\x03\x02\x02\x02\xCD" +
    "\xD0\x03\x02\x02\x02\xCE\xCC\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF" +
    "\xD1\x03\x02\x02\x02\xD0\xCE\x03\x02\x02\x02\xD1\xD2\x07\x16\x02\x02\xD2" +
    "\x17\x03\x02\x02\x02\xD3\xD4\x07\x17\x02\x02\xD4\xD5\x07\x18\x02\x02\xD5" +
    "\xD7\x07Z\x02\x02\xD6\xD8\x07\x19\x02\x02\xD7\xD6\x03\x02\x02\x02\xD7" +
    "\xD8\x03\x02\x02\x02\xD8\xF2\x03\x02\x02\x02\xD9\xDA\x07\x1A\x02\x02\xDA" +
    "\xDB\x07\x18\x02\x02\xDB\xDD\x05F$\x02\xDC\xDE\x07\x19\x02\x02\xDD\xDC" +
    "\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\xF2\x03\x02\x02\x02\xDF\xE0" +
    "\x07\x1B\x02\x02\xE0\xE1\x07\x18\x02\x02\xE1\xE3\x05L\'\x02\xE2\xE4\x07" +
    "\x19\x02\x02\xE3\xE2\x03\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\xF2\x03" +
    "\x02\x02\x02\xE5\xE6\x07\x1C\x02\x02\xE6\xE7\x07\x18\x02\x02\xE7\xE9\x07" +
    "Z\x02\x02\xE8\xEA\x07\x19\x02\x02\xE9\xE8\x03\x02\x02\x02\xE9\xEA\x03" +
    "\x02\x02\x02\xEA\xF2\x03\x02\x02\x02\xEB\xEC\x07\x1D\x02\x02\xEC\xED\x07" +
    "\x18\x02\x02\xED\xEF\x07Z\x02\x02\xEE\xF0\x07\x19\x02\x02\xEF\xEE\x03" +
    "\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\xF2\x03\x02\x02\x02\xF1\xD3\x03" +
    "\x02\x02\x02\xF1\xD9\x03\x02\x02\x02\xF1\xDF\x03\x02\x02\x02\xF1\xE5\x03" +
    "\x02\x02\x02\xF1\xEB\x03\x02\x02\x02\xF2\x19\x03\x02\x02\x02\xF3\xF4\x07" +
    "\x1E\x02\x02\xF4\xF5\x07Z\x02\x02\xF5\xF6\x07\t\x02\x02\xF6\xF7\x05> " +
    "\x02\xF7\xF8\x05\x1C\x0F\x02\xF8\xFF\x03\x02\x02\x02\xF9\xFA\x07\x1E\x02" +
    "\x02\xFA\xFB\x07Z\x02\x02\xFB\xFC\x05\x14\v\x02\xFC\xFD\x05\x1C\x0F\x02" +
    "\xFD\xFF\x03\x02\x02\x02\xFE\xF3\x03\x02\x02\x02\xFE\xF9\x03\x02\x02\x02" +
    "\xFF\x1B\x03\x02\x02\x02\u0100\u0101\x07\n\x02\x02\u0101\u010C\x05F$\x02" +
    "\u0102\u0103\x07\x0E\x02\x02\u0103\u0104\x07\x0F\x02\x02\u0104\u0105\x05" +
    "F$\x02\u0105\u0106\x07\x1F\x02\x02\u0106\u0109\x05F$\x02\u0107\u0108\x07" +
    " \x02\x02\u0108\u010A\x058\x1D\x02\u0109\u0107\x03\x02\x02\x02\u0109\u010A" +
    "\x03\x02\x02\x02\u010A\u010C\x03\x02\x02\x02\u010B\u0100\x03\x02\x02\x02" +
    "\u010B\u0102\x03\x02\x02\x02\u010C\x1D\x03\x02\x02\x02\u010D\u010E\x07" +
    "!\x02\x02\u010E\u010F\x07Z\x02\x02\u010F\u0110\x07\t\x02\x02\u0110\u0111" +
    "\x05> \x02\u0111\u0112\x07\n\x02\x02\u0112\u0113\x05F$\x02\u0113\u0114" +
    "\x07\"\x02\x02\u0114\u0115\x07[\x02\x02\u0115\u0118\x07#\x02\x02\u0116" +
    "\u0117\x07$\x02\x02\u0117\u0119\x05L\'\x02\u0118\u0116\x03\x02\x02\x02" +
    "\u0118\u0119\x03\x02\x02\x02\u0119\u011E\x03\x02\x02\x02\u011A\u011B\x07" +
    "%\x02\x02\u011B\u011C\x05L\'\x02\u011C\u011D\x07&\x02\x02\u011D\u011F" +
    "\x03\x02\x02\x02\u011E\u011A\x03\x02\x02\x02\u011E\u011F\x03\x02\x02\x02" +
    "\u011F\u0133\x03\x02\x02\x02\u0120\u0121\x07!\x02\x02\u0121\u0122\x07" +
    "Z\x02\x02\u0122\u0123\x05\x14\v\x02\u0123\u0124\x07\n\x02\x02\u0124\u0125" +
    "\x05F$\x02\u0125\u0126\x07\"\x02\x02\u0126\u0127\x07[\x02\x02\u0127\u012A" +
    "\x07#\x02\x02\u0128\u0129\x07$\x02\x02\u0129\u012B\x05L\'\x02\u012A\u0128" +
    "\x03\x02\x02\x02\u012A\u012B\x03\x02\x02\x02\u012B\u0130\x03\x02\x02\x02" +
    "\u012C\u012D\x07%\x02\x02\u012D\u012E\x05L\'\x02\u012E\u012F\x07&\x02" +
    "\x02\u012F\u0131\x03\x02\x02\x02\u0130\u012C\x03\x02\x02\x02\u0130\u0131" +
    "\x03\x02\x02\x02\u0131\u0133\x03\x02\x02\x02\u0132\u010D\x03\x02\x02\x02" +
    "\u0132\u0120\x03\x02\x02\x02\u0133\x1F\x03\x02\x02\x02\u0134\u0135\x07" +
    "\x14\x02\x02\u0135\u0136\x05&\x14\x02\u0136\u0137\x07\f\x02\x02\u0137" +
    "\u0138\x05\"\x12\x02\u0138\u0139\x07\r\x02\x02\u0139\u013C\x05$\x13\x02" +
    "\u013A\u013B\x07\'\x02\x02\u013B\u013D\x07[\x02\x02\u013C\u013A\x03\x02" +
    "\x02\x02\u013C\u013D\x03\x02\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E" +
    "\u0142\x07\x15\x02\x02\u013F\u0141\x05\x04\x03\x02\u0140\u013F\x03\x02" +
    "\x02\x02\u0141\u0144\x03\x02\x02\x02\u0142\u0140\x03\x02\x02\x02\u0142" +
    "\u0143\x03\x02\x02\x02\u0143\u0145\x03\x02\x02\x02\u0144\u0142\x03\x02" +
    "\x02\x02\u0145\u0146\x07\x16\x02\x02\u0146!\x03\x02\x02\x02\u0147\u014B" +
    "\x05> \x02\u0148\u014B\x07Y\x02\x02\u0149\u014B\x07(\x02\x02\u014A\u0147" +
    "\x03\x02\x02\x02\u014A\u0148\x03\x02\x02\x02\u014A\u0149\x03\x02\x02\x02" +
    "\u014B#\x03\x02\x02\x02\u014C\u0153\x05> \x02\u014D\u0153\x07Y\x02\x02" +
    "\u014E\u014F\x05\"\x12\x02\u014F\u0150\x07)\x02\x02\u0150\u0151\x07[\x02" +
    "\x02\u0151\u0153\x03\x02\x02\x02\u0152\u014C\x03\x02\x02\x02\u0152\u014D" +
    "\x03\x02\x02\x02\u0152\u014E\x03\x02\x02\x02\u0153%\x03\x02\x02\x02\u0154" +
    "\u0155\t\x02\x02\x02\u0155\'\x03\x02\x02\x02\u0156\u0157\x070\x02\x02" +
    "\u0157\u0158\x071\x02\x02\u0158\u0159\x054\x1B\x02\u0159\u015A\x072\x02" +
    "\x02\u015A\u015E\x07\x15\x02\x02\u015B\u015D\x05\x04\x03\x02\u015C\u015B" +
    "\x03\x02\x02\x02\u015D\u0160\x03\x02\x02\x02\u015E\u015C\x03\x02\x02\x02" +
    "\u015E\u015F\x03\x02\x02\x02\u015F\u0161\x03\x02\x02\x02\u0160\u015E\x03" +
    "\x02\x02\x02\u0161\u0172\x07\x16\x02\x02\u0162\u0163\x073\x02\x02\u0163" +
    "\u0164\x070\x02\x02\u0164\u0165\x071\x02\x02\u0165\u0166\x054\x1B\x02" +
    "\u0166\u0167\x072\x02\x02\u0167\u016B\x07\x15\x02\x02\u0168\u016A\x05" +
    "\x04\x03\x02\u0169\u0168\x03\x02\x02\x02\u016A\u016D\x03\x02\x02\x02\u016B" +
    "\u0169\x03\x02\x02\x02\u016B\u016C\x03\x02\x02\x02\u016C\u016E\x03\x02" +
    "\x02\x02\u016D\u016B\x03\x02\x02\x02\u016E\u016F\x07\x16\x02\x02\u016F" +
    "\u0171\x03\x02\x02\x02\u0170\u0162\x03\x02\x02\x02\u0171\u0174\x03\x02" +
    "\x02\x02\u0172\u0170\x03\x02\x02\x02\u0172\u0173\x03\x02\x02\x02\u0173" +
    "\u017E\x03\x02\x02\x02\u0174\u0172\x03\x02\x02\x02\u0175\u0176\x073\x02" +
    "\x02\u0176\u017A\x07\x15\x02\x02\u0177\u0179\x05\x04\x03\x02\u0178\u0177" +
    "\x03\x02\x02\x02\u0179\u017C\x03\x02\x02\x02\u017A\u0178\x03\x02\x02\x02" +
    "\u017A\u017B\x03\x02\x02\x02\u017B\u017D\x03\x02\x02\x02\u017C\u017A\x03" +
    "\x02\x02\x02\u017D\u017F\x07\x16\x02\x02\u017E\u0175\x03\x02\x02\x02\u017E" +
    "\u017F\x03\x02\x02\x02\u017F)\x03\x02\x02\x02\u0180\u0181\x074\x02\x02" +
    "\u0181\u0182\x07Y\x02\x02\u0182\u0183\x075\x02\x02\u0183\u0184\x054\x1B" +
    "\x02\u0184\u0185\x076\x02\x02\u0185\u0186\x07Y\x02\x02\u0186\u0187\x07" +
    "\x05\x02\x02\u0187+\x03\x02\x02\x02\u0188\u0189\x077\x02\x02\u0189\u018A" +
    "\x05.\x18\x02\u018A\u018B\x076\x02\x02\u018B\u018C\x07Y\x02\x02\u018C" +
    "\u018D\x07\x05\x02\x02\u018D-\x03\x02\x02\x02\u018E\u0193\x07Y\x02\x02" +
    "\u018F\u0190\x07\x19\x02\x02\u0190\u0192\x07Y\x02\x02\u0191\u018F\x03" +
    "\x02\x02\x02\u0192\u0195\x03\x02\x02\x02\u0193\u0191\x03\x02\x02\x02\u0193" +
    "\u0194\x03\x02\x02\x02\u0194/\x03\x02\x02\x02\u0195\u0193\x03\x02\x02" +
    "\x02\u0196\u0197\x078\x02\x02\u0197\u0198\x07Y\x02\x02\u0198\u0199\x07" +
    "9\x02\x02\u0199\u019A\x07Y\x02\x02\u019A\u019B\x07\x05\x02\x02\u019B1" +
    "\x03\x02\x02\x02\u019C\u019D\x07:\x02\x02\u019D\u01A0\x07Y\x02\x02\u019E" +
    "\u019F\x07\x04\x02\x02\u019F\u01A1\x07Z\x02\x02\u01A0\u019E\x03\x02\x02" +
    "\x02\u01A0\u01A1\x03\x02\x02\x02\u01A1\u01A2\x03\x02\x02\x02\u01A2\u01AC" +
    "\x07\x05\x02\x02\u01A3\u01A4\x07:\x02\x02\u01A4\u01A5\x07;\x02\x02\u01A5" +
    "\u01A6\x07\x04\x02\x02\u01A6\u01A7\x07Z\x02\x02\u01A7\u01AC\x07\x05\x02" +
    "\x02\u01A8\u01A9\x07:\x02\x02\u01A9\u01AA\x07<\x02\x02\u01AA\u01AC\x07" +
    "\x05\x02\x02\u01AB\u019C\x03\x02\x02\x02\u01AB\u01A3\x03\x02\x02\x02\u01AB" +
    "\u01A8\x03\x02\x02\x02\u01AC3\x03\x02\x02\x02\u01AD\u01AE\x07Y\x02\x02" +
    "\u01AE\u01AF\x056\x1C\x02\u01AF\u01B0\x05P)\x02\u01B0\u01BF\x03\x02\x02" +
    "\x02\u01B1\u01B2\x07=\x02\x02\u01B2\u01B3\x071\x02\x02\u01B3\u01B4\x05" +
    "D#\x02\u01B4\u01B5\x072\x02\x02\u01B5\u01B6\x079\x02\x02\u01B6\u01B7\x07" +
    ".\x02\x02\u01B7\u01B8\x056\x1C\x02\u01B8\u01B9\x07[\x02\x02\u01B9\u01BF" +
    "\x03\x02\x02\x02\u01BA\u01BB\x07\x1D\x02\x02\u01BB\u01BC\x056\x1C\x02" +
    "\u01BC\u01BD\x07Z\x02\x02\u01BD\u01BF\x03\x02\x02\x02\u01BE\u01AD\x03" +
    "\x02\x02\x02\u01BE\u01B1\x03\x02\x02\x02\u01BE\u01BA\x03\x02\x02\x02\u01BF" +
    "5\x03\x02\x02\x02\u01C0\u01C1\t\x03\x02\x02\u01C17\x03\x02\x02\x02\u01C2" +
    "\u01C3\t\x04\x02\x02\u01C39\x03\x02\x02\x02\u01C4\u01CD\x05> \x02\u01C5" +
    "\u01CD\x05F$\x02\u01C6\u01CD\x05L\'\x02\u01C7\u01CD\x07Z\x02\x02\u01C8" +
    "\u01CD\x07[\x02\x02\u01C9\u01CD\x07Y\x02\x02\u01CA\u01CD\x05<\x1F\x02" +
    "\u01CB\u01CD\x05\x0E\b\x02\u01CC\u01C4\x03\x02\x02\x02\u01CC\u01C5\x03" +
    "\x02\x02\x02\u01CC\u01C6\x03\x02\x02\x02\u01CC\u01C7\x03\x02\x02\x02\u01CC" +
    "\u01C8\x03\x02\x02\x02\u01CC\u01C9\x03\x02\x02\x02\u01CC\u01CA\x03\x02" +
    "\x02\x02\u01CC\u01CB\x03\x02\x02\x02\u01CD;\x03\x02\x02\x02\u01CE\u01CF" +
    "\x07=\x02\x02\u01CF\u01D0\x071\x02\x02\u01D0\u01D1\x05D#\x02\u01D1\u01D2" +
    "\x072\x02\x02\u01D2\u01D3\x079\x02\x02\u01D3\u01D4\x07.\x02\x02\u01D4" +
    "\u01DB\x03\x02\x02\x02\u01D5\u01D6\x07G\x02\x02\u01D6\u01D7\x071\x02\x02" +
    "\u01D7\u01D8\x05> \x02\u01D8\u01D9\x072\x02\x02\u01D9\u01DB\x03\x02\x02" +
    "\x02\u01DA\u01CE\x03\x02\x02\x02\u01DA\u01D5\x03\x02\x02\x02\u01DB=\x03" +
    "\x02\x02\x02\u01DC\u01DD\x07[\x02\x02\u01DD\u01DE\x07H\x02\x02\u01DE\u01E1" +
    "\x07[\x02\x02\u01DF\u01E0\x07H\x02\x02\u01E0\u01E2\x07[\x02\x02\u01E1" +
    "\u01DF\x03\x02\x02\x02\u01E1\u01E2\x03\x02\x02\x02\u01E2?\x03\x02\x02" +
    "\x02\u01E3\u01E6\x05> \x02\u01E4\u01E6\x05D#\x02\u01E5\u01E3\x03\x02\x02" +
    "\x02\u01E5\u01E4\x03\x02\x02\x02\u01E6A\x03\x02\x02\x02\u01E7\u01EC\x05" +
    "D#\x02\u01E8\u01E9\x07\x19\x02\x02\u01E9\u01EB\x05D#\x02\u01EA\u01E8\x03" +
    "\x02\x02\x02\u01EB\u01EE\x03\x02\x02\x02\u01EC\u01EA\x03\x02\x02\x02\u01EC" +
    "\u01ED\x03\x02\x02\x02\u01EDC\x03\x02\x02\x02\u01EE\u01EC\x03\x02\x02" +
    "\x02\u01EF\u01F0\t\x05\x02\x02\u01F0E\x03\x02\x02\x02\u01F1\u01F2\x07" +
    "[\x02\x02\u01F2\u01F3\x07\x18\x02\x02\u01F3\u01F4\x07[\x02\x02\u01F4G" +
    "\x03\x02\x02\x02\u01F5\u01F6\x07\n\x02\x02\u01F6\u01F7\x05F$\x02\u01F7" +
    "I\x03\x02\x02\x02\u01F8\u01F9\x07\f\x02\x02\u01F9\u01FA\x05F$\x02\u01FA" +
    "\u01FB\x07\r\x02\x02\u01FB\u01FC\x05F$\x02\u01FCK\x03\x02\x02\x02\u01FD" +
    "\u01FE\x07[\x02\x02\u01FE\u0203\x05N(\x02\u01FF\u0200\x07[\x02\x02\u0200" +
    "\u0202\x05N(\x02\u0201\u01FF\x03\x02\x02\x02\u0202\u0205\x03\x02\x02\x02" +
    "\u0203\u0201\x03\x02\x02\x02\u0203\u0204\x03\x02\x02\x02\u0204M\x03\x02" +
    "\x02\x02\u0205\u0203\x03\x02\x02\x02\u0206\u0207\t\x06\x02\x02\u0207O" +
    "\x03\x02\x02\x02\u0208\u0209\t\x07\x02\x02\u0209Q\x03\x02\x02\x020Ue{" +
    "\x82\x8F\xA3\xA8\xAF\xB6\xBD\xC4\xC6\xCE\xD7\xDD\xE3\xE9\xEF\xF1\xFE\u0109" +
    "\u010B\u0118\u011E\u012A\u0130\u0132\u013C\u0142\u014A\u0152\u015E\u016B" +
    "\u0172\u017A\u017E\u0193\u01A0\u01AB\u01BE\u01CC\u01DA\u01E1\u01E5\u01EC" +
    "\u0203";
class ProgramContext extends ParserRuleContext_1.ParserRuleContext {
    EOF() { return this.getToken(AionParser.EOF, 0); }
    statement(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_program; }
    // @Override
    enterRule(listener) {
        if (listener.enterProgram) {
            listener.enterProgram(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitProgram) {
            listener.exitProgram(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitProgram) {
            return visitor.visitProgram(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ProgramContext = ProgramContext;
class StatementContext extends ParserRuleContext_1.ParserRuleContext {
    import_stmt() {
        return this.tryGetRuleContext(0, Import_stmtContext);
    }
    assignment_stmt() {
        return this.tryGetRuleContext(0, Assignment_stmtContext);
    }
    value_assignment_stmt() {
        return this.tryGetRuleContext(0, Value_assignment_stmtContext);
    }
    loop_stmt() {
        return this.tryGetRuleContext(0, Loop_stmtContext);
    }
    export_stmt() {
        return this.tryGetRuleContext(0, Export_stmtContext);
    }
    merge_stmt() {
        return this.tryGetRuleContext(0, Merge_stmtContext);
    }
    filter_stmt() {
        return this.tryGetRuleContext(0, Filter_stmtContext);
    }
    include_stmt() {
        return this.tryGetRuleContext(0, Include_stmtContext);
    }
    conditional_stmt() {
        return this.tryGetRuleContext(0, Conditional_stmtContext);
    }
    structured_event_stmt() {
        return this.tryGetRuleContext(0, Structured_event_stmtContext);
    }
    default_declaration() {
        return this.tryGetRuleContext(0, Default_declarationContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_statement; }
    // @Override
    enterRule(listener) {
        if (listener.enterStatement) {
            listener.enterStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStatement) {
            listener.exitStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StatementContext = StatementContext;
class Import_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    STRING() { return this.getToken(AionParser.STRING, 0); }
    IDENTIFIER() { return this.getToken(AionParser.IDENTIFIER, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_import_stmt; }
    // @Override
    enterRule(listener) {
        if (listener.enterImport_stmt) {
            listener.enterImport_stmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitImport_stmt) {
            listener.exitImport_stmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitImport_stmt) {
            return visitor.visitImport_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Import_stmtContext = Import_stmtContext;
class Assignment_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.getToken(AionParser.IDENTIFIER, 0); }
    declaration() {
        return this.getRuleContext(0, DeclarationContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_assignment_stmt; }
    // @Override
    enterRule(listener) {
        if (listener.enterAssignment_stmt) {
            listener.enterAssignment_stmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAssignment_stmt) {
            listener.exitAssignment_stmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAssignment_stmt) {
            return visitor.visitAssignment_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Assignment_stmtContext = Assignment_stmtContext;
class Value_assignment_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.getToken(AionParser.IDENTIFIER, 0); }
    value_expr() {
        return this.getRuleContext(0, Value_exprContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_value_assignment_stmt; }
    // @Override
    enterRule(listener) {
        if (listener.enterValue_assignment_stmt) {
            listener.enterValue_assignment_stmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitValue_assignment_stmt) {
            listener.exitValue_assignment_stmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitValue_assignment_stmt) {
            return visitor.visitValue_assignment_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Value_assignment_stmtContext = Value_assignment_stmtContext;
class Default_declarationContext extends ParserRuleContext_1.ParserRuleContext {
    event_decl() {
        return this.tryGetRuleContext(0, Event_declContext);
    }
    task_decl() {
        return this.tryGetRuleContext(0, Task_declContext);
    }
    pomodoro_decl() {
        return this.tryGetRuleContext(0, Pomodoro_declContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_default_declaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterDefault_declaration) {
            listener.enterDefault_declaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDefault_declaration) {
            listener.exitDefault_declaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDefault_declaration) {
            return visitor.visitDefault_declaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Default_declarationContext = Default_declarationContext;
class DeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    event_decl() {
        return this.tryGetRuleContext(0, Event_declContext);
    }
    task_decl() {
        return this.tryGetRuleContext(0, Task_declContext);
    }
    pomodoro_decl() {
        return this.tryGetRuleContext(0, Pomodoro_declContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_declaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterDeclaration) {
            listener.enterDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDeclaration) {
            listener.exitDeclaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDeclaration) {
            return visitor.visitDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DeclarationContext = DeclarationContext;
class Event_declContext extends ParserRuleContext_1.ParserRuleContext {
    STRING() { return this.getToken(AionParser.STRING, 0); }
    recurrence_expr() {
        return this.tryGetRuleContext(0, Recurrence_exprContext);
    }
    event_time_spec() {
        return this.getRuleContext(0, Event_time_specContext);
    }
    date() {
        return this.tryGetRuleContext(0, DateContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_event_decl; }
    // @Override
    enterRule(listener) {
        if (listener.enterEvent_decl) {
            listener.enterEvent_decl(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEvent_decl) {
            listener.exitEvent_decl(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEvent_decl) {
            return visitor.visitEvent_decl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Event_declContext = Event_declContext;
class Event_time_specContext extends ParserRuleContext_1.ParserRuleContext {
    time(i) {
        if (i === undefined) {
            return this.getRuleContexts(TimeContext);
        }
        else {
            return this.getRuleContext(i, TimeContext);
        }
    }
    duration() {
        return this.tryGetRuleContext(0, DurationContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_event_time_spec; }
    // @Override
    enterRule(listener) {
        if (listener.enterEvent_time_spec) {
            listener.enterEvent_time_spec(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEvent_time_spec) {
            listener.exitEvent_time_spec(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEvent_time_spec) {
            return visitor.visitEvent_time_spec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Event_time_specContext = Event_time_specContext;
class Recurrence_exprContext extends ParserRuleContext_1.ParserRuleContext {
    time() {
        return this.tryGetRuleContext(0, TimeContext);
    }
    weekday_list() {
        return this.tryGetRuleContext(0, Weekday_listContext);
    }
    time_range() {
        return this.tryGetRuleContext(0, Time_rangeContext);
    }
    time_at() {
        return this.tryGetRuleContext(0, Time_atContext);
    }
    NUMBER() { return this.tryGetToken(AionParser.NUMBER, 0); }
    date() {
        return this.tryGetRuleContext(0, DateContext);
    }
    loop_unit() {
        return this.tryGetRuleContext(0, Loop_unitContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_recurrence_expr; }
    // @Override
    enterRule(listener) {
        if (listener.enterRecurrence_expr) {
            listener.enterRecurrence_expr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRecurrence_expr) {
            listener.exitRecurrence_expr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRecurrence_expr) {
            return visitor.visitRecurrence_expr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Recurrence_exprContext = Recurrence_exprContext;
class Structured_event_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.getToken(AionParser.IDENTIFIER, 0); }
    structured_event_field(i) {
        if (i === undefined) {
            return this.getRuleContexts(Structured_event_fieldContext);
        }
        else {
            return this.getRuleContext(i, Structured_event_fieldContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_structured_event_stmt; }
    // @Override
    enterRule(listener) {
        if (listener.enterStructured_event_stmt) {
            listener.enterStructured_event_stmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStructured_event_stmt) {
            listener.exitStructured_event_stmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStructured_event_stmt) {
            return visitor.visitStructured_event_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Structured_event_stmtContext = Structured_event_stmtContext;
class Structured_event_fieldContext extends ParserRuleContext_1.ParserRuleContext {
    STRING() { return this.tryGetToken(AionParser.STRING, 0); }
    time() {
        return this.tryGetRuleContext(0, TimeContext);
    }
    duration() {
        return this.tryGetRuleContext(0, DurationContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_structured_event_field; }
    // @Override
    enterRule(listener) {
        if (listener.enterStructured_event_field) {
            listener.enterStructured_event_field(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStructured_event_field) {
            listener.exitStructured_event_field(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStructured_event_field) {
            return visitor.visitStructured_event_field(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Structured_event_fieldContext = Structured_event_fieldContext;
class Task_declContext extends ParserRuleContext_1.ParserRuleContext {
    STRING() { return this.getToken(AionParser.STRING, 0); }
    date() {
        return this.tryGetRuleContext(0, DateContext);
    }
    task_time_spec() {
        return this.getRuleContext(0, Task_time_specContext);
    }
    recurrence_expr() {
        return this.tryGetRuleContext(0, Recurrence_exprContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_task_decl; }
    // @Override
    enterRule(listener) {
        if (listener.enterTask_decl) {
            listener.enterTask_decl(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTask_decl) {
            listener.exitTask_decl(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTask_decl) {
            return visitor.visitTask_decl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Task_declContext = Task_declContext;
class Task_time_specContext extends ParserRuleContext_1.ParserRuleContext {
    time(i) {
        if (i === undefined) {
            return this.getRuleContexts(TimeContext);
        }
        else {
            return this.getRuleContext(i, TimeContext);
        }
    }
    strategy() {
        return this.tryGetRuleContext(0, StrategyContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_task_time_spec; }
    // @Override
    enterRule(listener) {
        if (listener.enterTask_time_spec) {
            listener.enterTask_time_spec(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTask_time_spec) {
            listener.exitTask_time_spec(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTask_time_spec) {
            return visitor.visitTask_time_spec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Task_time_specContext = Task_time_specContext;
class Pomodoro_declContext extends ParserRuleContext_1.ParserRuleContext {
    STRING() { return this.getToken(AionParser.STRING, 0); }
    date() {
        return this.tryGetRuleContext(0, DateContext);
    }
    time() {
        return this.getRuleContext(0, TimeContext);
    }
    NUMBER() { return this.getToken(AionParser.NUMBER, 0); }
    duration(i) {
        if (i === undefined) {
            return this.getRuleContexts(DurationContext);
        }
        else {
            return this.getRuleContext(i, DurationContext);
        }
    }
    recurrence_expr() {
        return this.tryGetRuleContext(0, Recurrence_exprContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_pomodoro_decl; }
    // @Override
    enterRule(listener) {
        if (listener.enterPomodoro_decl) {
            listener.enterPomodoro_decl(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPomodoro_decl) {
            listener.exitPomodoro_decl(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPomodoro_decl) {
            return visitor.visitPomodoro_decl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Pomodoro_declContext = Pomodoro_declContext;
class Loop_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    loop_unit() {
        return this.getRuleContext(0, Loop_unitContext);
    }
    loop_start() {
        return this.getRuleContext(0, Loop_startContext);
    }
    loop_end() {
        return this.getRuleContext(0, Loop_endContext);
    }
    NUMBER() { return this.tryGetToken(AionParser.NUMBER, 0); }
    statement(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_loop_stmt; }
    // @Override
    enterRule(listener) {
        if (listener.enterLoop_stmt) {
            listener.enterLoop_stmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLoop_stmt) {
            listener.exitLoop_stmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLoop_stmt) {
            return visitor.visitLoop_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Loop_stmtContext = Loop_stmtContext;
class Loop_startContext extends ParserRuleContext_1.ParserRuleContext {
    date() {
        return this.tryGetRuleContext(0, DateContext);
    }
    IDENTIFIER() { return this.tryGetToken(AionParser.IDENTIFIER, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_loop_start; }
    // @Override
    enterRule(listener) {
        if (listener.enterLoop_start) {
            listener.enterLoop_start(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLoop_start) {
            listener.exitLoop_start(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLoop_start) {
            return visitor.visitLoop_start(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Loop_startContext = Loop_startContext;
class Loop_endContext extends ParserRuleContext_1.ParserRuleContext {
    date() {
        return this.tryGetRuleContext(0, DateContext);
    }
    IDENTIFIER() { return this.tryGetToken(AionParser.IDENTIFIER, 0); }
    loop_start() {
        return this.tryGetRuleContext(0, Loop_startContext);
    }
    NUMBER() { return this.tryGetToken(AionParser.NUMBER, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_loop_end; }
    // @Override
    enterRule(listener) {
        if (listener.enterLoop_end) {
            listener.enterLoop_end(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLoop_end) {
            listener.exitLoop_end(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLoop_end) {
            return visitor.visitLoop_end(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Loop_endContext = Loop_endContext;
class Loop_unitContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_loop_unit; }
    // @Override
    enterRule(listener) {
        if (listener.enterLoop_unit) {
            listener.enterLoop_unit(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLoop_unit) {
            listener.exitLoop_unit(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLoop_unit) {
            return visitor.visitLoop_unit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Loop_unitContext = Loop_unitContext;
class Conditional_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    condition(i) {
        if (i === undefined) {
            return this.getRuleContexts(ConditionContext);
        }
        else {
            return this.getRuleContext(i, ConditionContext);
        }
    }
    statement(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_conditional_stmt; }
    // @Override
    enterRule(listener) {
        if (listener.enterConditional_stmt) {
            listener.enterConditional_stmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConditional_stmt) {
            listener.exitConditional_stmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitConditional_stmt) {
            return visitor.visitConditional_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Conditional_stmtContext = Conditional_stmtContext;
class Filter_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER(i) {
        if (i === undefined) {
            return this.getTokens(AionParser.IDENTIFIER);
        }
        else {
            return this.getToken(AionParser.IDENTIFIER, i);
        }
    }
    condition() {
        return this.getRuleContext(0, ConditionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_filter_stmt; }
    // @Override
    enterRule(listener) {
        if (listener.enterFilter_stmt) {
            listener.enterFilter_stmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFilter_stmt) {
            listener.exitFilter_stmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFilter_stmt) {
            return visitor.visitFilter_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Filter_stmtContext = Filter_stmtContext;
class Merge_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    identifier_list() {
        return this.getRuleContext(0, Identifier_listContext);
    }
    IDENTIFIER() { return this.getToken(AionParser.IDENTIFIER, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_merge_stmt; }
    // @Override
    enterRule(listener) {
        if (listener.enterMerge_stmt) {
            listener.enterMerge_stmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMerge_stmt) {
            listener.exitMerge_stmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMerge_stmt) {
            return visitor.visitMerge_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Merge_stmtContext = Merge_stmtContext;
class Identifier_listContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER(i) {
        if (i === undefined) {
            return this.getTokens(AionParser.IDENTIFIER);
        }
        else {
            return this.getToken(AionParser.IDENTIFIER, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_identifier_list; }
    // @Override
    enterRule(listener) {
        if (listener.enterIdentifier_list) {
            listener.enterIdentifier_list(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIdentifier_list) {
            listener.exitIdentifier_list(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIdentifier_list) {
            return visitor.visitIdentifier_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Identifier_listContext = Identifier_listContext;
class Include_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER(i) {
        if (i === undefined) {
            return this.getTokens(AionParser.IDENTIFIER);
        }
        else {
            return this.getToken(AionParser.IDENTIFIER, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_include_stmt; }
    // @Override
    enterRule(listener) {
        if (listener.enterInclude_stmt) {
            listener.enterInclude_stmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInclude_stmt) {
            listener.exitInclude_stmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInclude_stmt) {
            return visitor.visitInclude_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Include_stmtContext = Include_stmtContext;
class Export_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.tryGetToken(AionParser.IDENTIFIER, 0); }
    STRING() { return this.tryGetToken(AionParser.STRING, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_export_stmt; }
    // @Override
    enterRule(listener) {
        if (listener.enterExport_stmt) {
            listener.enterExport_stmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExport_stmt) {
            listener.exitExport_stmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExport_stmt) {
            return visitor.visitExport_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Export_stmtContext = Export_stmtContext;
class ConditionContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.tryGetToken(AionParser.IDENTIFIER, 0); }
    comparison_op() {
        return this.getRuleContext(0, Comparison_opContext);
    }
    value() {
        return this.tryGetRuleContext(0, ValueContext);
    }
    weekday() {
        return this.tryGetRuleContext(0, WeekdayContext);
    }
    NUMBER() { return this.tryGetToken(AionParser.NUMBER, 0); }
    STRING() { return this.tryGetToken(AionParser.STRING, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_condition; }
    // @Override
    enterRule(listener) {
        if (listener.enterCondition) {
            listener.enterCondition(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCondition) {
            listener.exitCondition(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCondition) {
            return visitor.visitCondition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ConditionContext = ConditionContext;
class Comparison_opContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_comparison_op; }
    // @Override
    enterRule(listener) {
        if (listener.enterComparison_op) {
            listener.enterComparison_op(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitComparison_op) {
            listener.exitComparison_op(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitComparison_op) {
            return visitor.visitComparison_op(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Comparison_opContext = Comparison_opContext;
class StrategyContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_strategy; }
    // @Override
    enterRule(listener) {
        if (listener.enterStrategy) {
            listener.enterStrategy(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStrategy) {
            listener.exitStrategy(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStrategy) {
            return visitor.visitStrategy(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StrategyContext = StrategyContext;
class Value_exprContext extends ParserRuleContext_1.ParserRuleContext {
    date() {
        return this.tryGetRuleContext(0, DateContext);
    }
    time() {
        return this.tryGetRuleContext(0, TimeContext);
    }
    duration() {
        return this.tryGetRuleContext(0, DurationContext);
    }
    STRING() { return this.tryGetToken(AionParser.STRING, 0); }
    NUMBER() { return this.tryGetToken(AionParser.NUMBER, 0); }
    IDENTIFIER() { return this.tryGetToken(AionParser.IDENTIFIER, 0); }
    function_call() {
        return this.tryGetRuleContext(0, Function_callContext);
    }
    declaration() {
        return this.tryGetRuleContext(0, DeclarationContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_value_expr; }
    // @Override
    enterRule(listener) {
        if (listener.enterValue_expr) {
            listener.enterValue_expr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitValue_expr) {
            listener.exitValue_expr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitValue_expr) {
            return visitor.visitValue_expr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Value_exprContext = Value_exprContext;
class Function_callContext extends ParserRuleContext_1.ParserRuleContext {
    weekday() {
        return this.tryGetRuleContext(0, WeekdayContext);
    }
    date() {
        return this.tryGetRuleContext(0, DateContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_function_call; }
    // @Override
    enterRule(listener) {
        if (listener.enterFunction_call) {
            listener.enterFunction_call(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunction_call) {
            listener.exitFunction_call(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunction_call) {
            return visitor.visitFunction_call(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Function_callContext = Function_callContext;
class DateContext extends ParserRuleContext_1.ParserRuleContext {
    NUMBER(i) {
        if (i === undefined) {
            return this.getTokens(AionParser.NUMBER);
        }
        else {
            return this.getToken(AionParser.NUMBER, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_date; }
    // @Override
    enterRule(listener) {
        if (listener.enterDate) {
            listener.enterDate(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDate) {
            listener.exitDate(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDate) {
            return visitor.visitDate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DateContext = DateContext;
class Date_specifierContext extends ParserRuleContext_1.ParserRuleContext {
    date() {
        return this.tryGetRuleContext(0, DateContext);
    }
    weekday() {
        return this.tryGetRuleContext(0, WeekdayContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_date_specifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterDate_specifier) {
            listener.enterDate_specifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDate_specifier) {
            listener.exitDate_specifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDate_specifier) {
            return visitor.visitDate_specifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Date_specifierContext = Date_specifierContext;
class Weekday_listContext extends ParserRuleContext_1.ParserRuleContext {
    weekday(i) {
        if (i === undefined) {
            return this.getRuleContexts(WeekdayContext);
        }
        else {
            return this.getRuleContext(i, WeekdayContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_weekday_list; }
    // @Override
    enterRule(listener) {
        if (listener.enterWeekday_list) {
            listener.enterWeekday_list(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitWeekday_list) {
            listener.exitWeekday_list(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitWeekday_list) {
            return visitor.visitWeekday_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Weekday_listContext = Weekday_listContext;
class WeekdayContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_weekday; }
    // @Override
    enterRule(listener) {
        if (listener.enterWeekday) {
            listener.enterWeekday(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitWeekday) {
            listener.exitWeekday(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitWeekday) {
            return visitor.visitWeekday(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.WeekdayContext = WeekdayContext;
class TimeContext extends ParserRuleContext_1.ParserRuleContext {
    NUMBER(i) {
        if (i === undefined) {
            return this.getTokens(AionParser.NUMBER);
        }
        else {
            return this.getToken(AionParser.NUMBER, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_time; }
    // @Override
    enterRule(listener) {
        if (listener.enterTime) {
            listener.enterTime(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTime) {
            listener.exitTime(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTime) {
            return visitor.visitTime(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TimeContext = TimeContext;
class Time_atContext extends ParserRuleContext_1.ParserRuleContext {
    time() {
        return this.getRuleContext(0, TimeContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_time_at; }
    // @Override
    enterRule(listener) {
        if (listener.enterTime_at) {
            listener.enterTime_at(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTime_at) {
            listener.exitTime_at(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTime_at) {
            return visitor.visitTime_at(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Time_atContext = Time_atContext;
class Time_rangeContext extends ParserRuleContext_1.ParserRuleContext {
    time(i) {
        if (i === undefined) {
            return this.getRuleContexts(TimeContext);
        }
        else {
            return this.getRuleContext(i, TimeContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_time_range; }
    // @Override
    enterRule(listener) {
        if (listener.enterTime_range) {
            listener.enterTime_range(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTime_range) {
            listener.exitTime_range(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTime_range) {
            return visitor.visitTime_range(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Time_rangeContext = Time_rangeContext;
class DurationContext extends ParserRuleContext_1.ParserRuleContext {
    NUMBER(i) {
        if (i === undefined) {
            return this.getTokens(AionParser.NUMBER);
        }
        else {
            return this.getToken(AionParser.NUMBER, i);
        }
    }
    time_unit(i) {
        if (i === undefined) {
            return this.getRuleContexts(Time_unitContext);
        }
        else {
            return this.getRuleContext(i, Time_unitContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_duration; }
    // @Override
    enterRule(listener) {
        if (listener.enterDuration) {
            listener.enterDuration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDuration) {
            listener.exitDuration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDuration) {
            return visitor.visitDuration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DurationContext = DurationContext;
class Time_unitContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_time_unit; }
    // @Override
    enterRule(listener) {
        if (listener.enterTime_unit) {
            listener.enterTime_unit(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTime_unit) {
            listener.exitTime_unit(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTime_unit) {
            return visitor.visitTime_unit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Time_unitContext = Time_unitContext;
class ValueContext extends ParserRuleContext_1.ParserRuleContext {
    STRING() { return this.tryGetToken(AionParser.STRING, 0); }
    NUMBER() { return this.tryGetToken(AionParser.NUMBER, 0); }
    IDENTIFIER() { return this.tryGetToken(AionParser.IDENTIFIER, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_value; }
    // @Override
    enterRule(listener) {
        if (listener.enterValue) {
            listener.enterValue(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitValue) {
            listener.exitValue(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitValue) {
            return visitor.visitValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ValueContext = ValueContext;
