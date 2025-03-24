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
exports.Month_nameContext = exports.WeekdayContext = exports.NumberContext = exports.StringContext = exports.IdentifierContext = exports.ValueContext = exports.Time_unitContext = exports.DurationContext = exports.TimeContext = exports.DateContext = exports.Function_callContext = exports.Value_exprContext = exports.StrategyContext = exports.Comparison_opContext = exports.ConditionContext = exports.Week_start_stmtContext = exports.Export_stmtContext = exports.Include_stmtContext = exports.Identifier_listContext = exports.Merge_stmtContext = exports.Filter_stmtContext = exports.Conditional_stmtContext = exports.Loop_unitContext = exports.Loop_endContext = exports.Loop_startContext = exports.Loop_stmtContext = exports.Structured_event_fieldContext = exports.Structured_event_stmtContext = exports.Pomodoro_declContext = exports.Rep_periodContext = exports.Event_time_exprContext = exports.Event_time_strictContext = exports.Task_time_strictContext = exports.Repetition_in_declContext = exports.Task_declContext = exports.Event_declContext = exports.DeclarationContext = exports.Default_declarationContext = exports.Value_assignment_stmtContext = exports.Assignment_stmtContext = exports.Import_stmtContext = exports.StatementContext = exports.ProgramContext = exports.AionParser = void 0;
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
                this.state = 89;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__0) | (1 << AionParser.T__4) | (1 << AionParser.T__5) | (1 << AionParser.T__6) | (1 << AionParser.T__7) | (1 << AionParser.T__19))) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (AionParser.T__43 - 44)) | (1 << (AionParser.T__47 - 44)) | (1 << (AionParser.T__50 - 44)) | (1 << (AionParser.T__51 - 44)) | (1 << (AionParser.T__53 - 44)))) !== 0) || _la === AionParser.Identifier) {
                    {
                        {
                            this.state = 86;
                            this.statement();
                        }
                    }
                    this.state = 91;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 92;
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
            this.state = 106;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 94;
                        this.import_stmt();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 95;
                        this.assignment_stmt();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 96;
                        this.value_assignment_stmt();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 97;
                        this.loop_stmt();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 98;
                        this.export_stmt();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 99;
                        this.merge_stmt();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 100;
                        this.filter_stmt();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 101;
                        this.include_stmt();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 102;
                        this.conditional_stmt();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 103;
                        this.structured_event_stmt();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 104;
                        this.week_start_stmt();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 105;
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
                this.state = 108;
                this.match(AionParser.T__0);
                this.state = 109;
                this.string();
                this.state = 110;
                this.match(AionParser.T__1);
                this.state = 111;
                this.identifier();
                this.state = 112;
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
                this.state = 114;
                this.identifier();
                this.state = 115;
                this.match(AionParser.T__3);
                this.state = 116;
                this.declaration();
                this.state = 117;
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
                this.state = 119;
                this.identifier();
                this.state = 120;
                this.match(AionParser.T__3);
                this.state = 121;
                this.value_expr();
                this.state = 122;
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
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 125;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === AionParser.T__4) {
                    {
                        this.state = 124;
                        this.match(AionParser.T__4);
                    }
                }
                this.state = 130;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case AionParser.T__5:
                        {
                            this.state = 127;
                            this.event_decl();
                        }
                        break;
                    case AionParser.T__6:
                        {
                            this.state = 128;
                            this.task_decl();
                        }
                        break;
                    case AionParser.T__19:
                        {
                            this.state = 129;
                            this.pomodoro_decl();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 132;
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
            this.state = 137;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AionParser.T__5:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 134;
                        this.event_decl();
                    }
                    break;
                case AionParser.T__6:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 135;
                        this.task_decl();
                    }
                    break;
                case AionParser.T__19:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 136;
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
            this.state = 149;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 139;
                        this.match(AionParser.T__5);
                        this.state = 140;
                        this.string();
                        this.state = 141;
                        this.event_time_expr();
                        this.state = 142;
                        this.event_time_strict();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 144;
                        this.match(AionParser.T__5);
                        this.state = 145;
                        this.string();
                        this.state = 146;
                        this.repetition_in_decl();
                        this.state = 147;
                        this.event_time_strict();
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
    task_decl() {
        let _localctx = new Task_declContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, AionParser.RULE_task_decl);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 151;
                this.match(AionParser.T__6);
                this.state = 152;
                this.string();
                this.state = 153;
                this.event_time_expr();
                this.state = 155;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__16) | (1 << AionParser.T__17) | (1 << AionParser.T__18))) !== 0)) {
                    {
                        this.state = 154;
                        this.rep_period();
                    }
                }
                this.state = 157;
                this.task_time_strict();
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
    repetition_in_decl() {
        let _localctx = new Repetition_in_declContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, AionParser.RULE_repetition_in_decl);
        try {
            this.state = 162;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AionParser.T__7:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 159;
                        this.match(AionParser.T__7);
                        this.state = 160;
                        this.weekday();
                    }
                    break;
                case AionParser.T__16:
                case AionParser.T__17:
                case AionParser.T__18:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 161;
                        this.rep_period();
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
    task_time_strict() {
        let _localctx = new Task_time_strictContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, AionParser.RULE_task_time_strict);
        let _la;
        try {
            this.state = 174;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AionParser.T__8:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        {
                            this.state = 164;
                            this.match(AionParser.T__8);
                        }
                        this.state = 165;
                        this.time();
                    }
                    break;
                case AionParser.T__9:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 166;
                        this.match(AionParser.T__9);
                        this.state = 167;
                        this.time();
                        this.state = 168;
                        this.match(AionParser.T__10);
                        this.state = 169;
                        this.time();
                        this.state = 172;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === AionParser.T__11) {
                            {
                                this.state = 170;
                                this.match(AionParser.T__11);
                                this.state = 171;
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
    event_time_strict() {
        let _localctx = new Event_time_strictContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, AionParser.RULE_event_time_strict);
        let _la;
        try {
            this.state = 192;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AionParser.T__8:
                case AionParser.T__12:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 176;
                        _la = this._input.LA(1);
                        if (!(_la === AionParser.T__8 || _la === AionParser.T__12)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 177;
                        this.time();
                        this.state = 182;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case AionParser.T__13:
                                {
                                    {
                                        this.state = 178;
                                        this.match(AionParser.T__13);
                                        this.state = 179;
                                        this.duration();
                                    }
                                }
                                break;
                            case AionParser.T__14:
                                {
                                    {
                                        this.state = 180;
                                        this.match(AionParser.T__14);
                                        this.state = 181;
                                        this.time();
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    break;
                case AionParser.T__9:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 184;
                        this.match(AionParser.T__9);
                        this.state = 185;
                        this.time();
                        this.state = 186;
                        this.match(AionParser.T__10);
                        this.state = 187;
                        this.time();
                        this.state = 190;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === AionParser.T__11) {
                            {
                                this.state = 188;
                                this.match(AionParser.T__11);
                                this.state = 189;
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
    event_time_expr() {
        let _localctx = new Event_time_exprContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, AionParser.RULE_event_time_expr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 194;
                this.match(AionParser.T__15);
                this.state = 195;
                this.date();
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
    rep_period() {
        let _localctx = new Rep_periodContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, AionParser.RULE_rep_period);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 197;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__16) | (1 << AionParser.T__17) | (1 << AionParser.T__18))) !== 0))) {
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
    pomodoro_decl() {
        let _localctx = new Pomodoro_declContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, AionParser.RULE_pomodoro_decl);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 199;
                this.match(AionParser.T__19);
                this.state = 200;
                this.string();
                this.state = 201;
                this.match(AionParser.T__8);
                this.state = 202;
                this.time();
                this.state = 203;
                this.match(AionParser.T__20);
                this.state = 204;
                this.number();
                this.state = 205;
                this.match(AionParser.T__21);
                this.state = 208;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === AionParser.T__22) {
                    {
                        this.state = 206;
                        this.match(AionParser.T__22);
                        this.state = 207;
                        this.duration();
                    }
                }
                this.state = 214;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === AionParser.T__23) {
                    {
                        this.state = 210;
                        this.match(AionParser.T__23);
                        this.state = 211;
                        this.duration();
                        this.state = 212;
                        this.match(AionParser.T__24);
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
    structured_event_stmt() {
        let _localctx = new Structured_event_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, AionParser.RULE_structured_event_stmt);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 216;
                this.match(AionParser.T__5);
                this.state = 217;
                this.identifier();
                this.state = 218;
                this.match(AionParser.T__25);
                this.state = 222;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & ((1 << (AionParser.T__27 - 28)) | (1 << (AionParser.T__30 - 28)) | (1 << (AionParser.T__31 - 28)) | (1 << (AionParser.T__32 - 28)) | (1 << (AionParser.T__33 - 28)))) !== 0)) {
                    {
                        {
                            this.state = 219;
                            this.structured_event_field();
                        }
                    }
                    this.state = 224;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 225;
                this.match(AionParser.T__26);
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
        this.enterRule(_localctx, 32, AionParser.RULE_structured_event_field);
        try {
            this.state = 252;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AionParser.T__27:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 227;
                        this.match(AionParser.T__27);
                        this.state = 228;
                        this.match(AionParser.T__28);
                        this.state = 229;
                        this.string();
                        this.state = 230;
                        this.match(AionParser.T__29);
                    }
                    break;
                case AionParser.T__30:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 232;
                        this.match(AionParser.T__30);
                        this.state = 233;
                        this.match(AionParser.T__28);
                        this.state = 234;
                        this.time();
                        this.state = 235;
                        this.match(AionParser.T__29);
                    }
                    break;
                case AionParser.T__31:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 237;
                        this.match(AionParser.T__31);
                        this.state = 238;
                        this.match(AionParser.T__28);
                        this.state = 239;
                        this.duration();
                        this.state = 240;
                        this.match(AionParser.T__29);
                    }
                    break;
                case AionParser.T__32:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 242;
                        this.match(AionParser.T__32);
                        this.state = 243;
                        this.match(AionParser.T__28);
                        this.state = 244;
                        this.string();
                        this.state = 245;
                        this.match(AionParser.T__29);
                    }
                    break;
                case AionParser.T__33:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 247;
                        this.match(AionParser.T__33);
                        this.state = 248;
                        this.match(AionParser.T__28);
                        this.state = 249;
                        this.string();
                        this.state = 250;
                        this.match(AionParser.T__29);
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
    loop_stmt() {
        let _localctx = new Loop_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, AionParser.RULE_loop_stmt);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 254;
                this.match(AionParser.T__7);
                this.state = 255;
                this.loop_unit();
                this.state = 256;
                this.match(AionParser.T__12);
                this.state = 257;
                this.loop_start();
                this.state = 258;
                this.match(AionParser.T__14);
                this.state = 259;
                this.loop_end();
                this.state = 262;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === AionParser.T__34) {
                    {
                        this.state = 260;
                        this.match(AionParser.T__34);
                        this.state = 261;
                        this.number();
                    }
                }
                this.state = 264;
                this.match(AionParser.T__25);
                this.state = 268;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__0) | (1 << AionParser.T__4) | (1 << AionParser.T__5) | (1 << AionParser.T__6) | (1 << AionParser.T__7) | (1 << AionParser.T__19))) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (AionParser.T__43 - 44)) | (1 << (AionParser.T__47 - 44)) | (1 << (AionParser.T__50 - 44)) | (1 << (AionParser.T__51 - 44)) | (1 << (AionParser.T__53 - 44)))) !== 0) || _la === AionParser.Identifier) {
                    {
                        {
                            this.state = 265;
                            this.statement();
                        }
                    }
                    this.state = 270;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 271;
                this.match(AionParser.T__26);
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
        this.enterRule(_localctx, 36, AionParser.RULE_loop_start);
        try {
            this.state = 276;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AionParser.Number:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 273;
                        this.date();
                    }
                    break;
                case AionParser.Identifier:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 274;
                        this.identifier();
                    }
                    break;
                case AionParser.T__35:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 275;
                        this.match(AionParser.T__35);
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
        this.enterRule(_localctx, 38, AionParser.RULE_loop_end);
        try {
            this.state = 284;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 20, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 278;
                        this.date();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 279;
                        this.identifier();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 280;
                        this.loop_start();
                        this.state = 281;
                        this.match(AionParser.T__36);
                        this.state = 282;
                        this.number();
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
        this.enterRule(_localctx, 40, AionParser.RULE_loop_unit);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 286;
                _la = this._input.LA(1);
                if (!(((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (AionParser.T__37 - 38)) | (1 << (AionParser.T__38 - 38)) | (1 << (AionParser.T__39 - 38)) | (1 << (AionParser.T__40 - 38)) | (1 << (AionParser.T__41 - 38)) | (1 << (AionParser.T__42 - 38)))) !== 0))) {
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
        this.enterRule(_localctx, 42, AionParser.RULE_conditional_stmt);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 288;
                this.match(AionParser.T__43);
                this.state = 289;
                this.match(AionParser.T__44);
                this.state = 290;
                this.condition();
                this.state = 291;
                this.match(AionParser.T__45);
                this.state = 292;
                this.match(AionParser.T__25);
                this.state = 296;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__0) | (1 << AionParser.T__4) | (1 << AionParser.T__5) | (1 << AionParser.T__6) | (1 << AionParser.T__7) | (1 << AionParser.T__19))) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (AionParser.T__43 - 44)) | (1 << (AionParser.T__47 - 44)) | (1 << (AionParser.T__50 - 44)) | (1 << (AionParser.T__51 - 44)) | (1 << (AionParser.T__53 - 44)))) !== 0) || _la === AionParser.Identifier) {
                    {
                        {
                            this.state = 293;
                            this.statement();
                        }
                    }
                    this.state = 298;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 299;
                this.match(AionParser.T__26);
                this.state = 316;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 300;
                                this.match(AionParser.T__46);
                                this.state = 301;
                                this.match(AionParser.T__43);
                                this.state = 302;
                                this.match(AionParser.T__44);
                                this.state = 303;
                                this.condition();
                                this.state = 304;
                                this.match(AionParser.T__45);
                                this.state = 305;
                                this.match(AionParser.T__25);
                                this.state = 309;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__0) | (1 << AionParser.T__4) | (1 << AionParser.T__5) | (1 << AionParser.T__6) | (1 << AionParser.T__7) | (1 << AionParser.T__19))) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (AionParser.T__43 - 44)) | (1 << (AionParser.T__47 - 44)) | (1 << (AionParser.T__50 - 44)) | (1 << (AionParser.T__51 - 44)) | (1 << (AionParser.T__53 - 44)))) !== 0) || _la === AionParser.Identifier) {
                                    {
                                        {
                                            this.state = 306;
                                            this.statement();
                                        }
                                    }
                                    this.state = 311;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 312;
                                this.match(AionParser.T__26);
                            }
                        }
                    }
                    this.state = 318;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
                }
                this.state = 328;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === AionParser.T__46) {
                    {
                        this.state = 319;
                        this.match(AionParser.T__46);
                        this.state = 320;
                        this.match(AionParser.T__25);
                        this.state = 324;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__0) | (1 << AionParser.T__4) | (1 << AionParser.T__5) | (1 << AionParser.T__6) | (1 << AionParser.T__7) | (1 << AionParser.T__19))) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (AionParser.T__43 - 44)) | (1 << (AionParser.T__47 - 44)) | (1 << (AionParser.T__50 - 44)) | (1 << (AionParser.T__51 - 44)) | (1 << (AionParser.T__53 - 44)))) !== 0) || _la === AionParser.Identifier) {
                            {
                                {
                                    this.state = 321;
                                    this.statement();
                                }
                            }
                            this.state = 326;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 327;
                        this.match(AionParser.T__26);
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
        this.enterRule(_localctx, 44, AionParser.RULE_filter_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 330;
                this.match(AionParser.T__47);
                this.state = 331;
                this.identifier();
                this.state = 332;
                this.match(AionParser.T__48);
                this.state = 333;
                this.condition();
                this.state = 334;
                this.match(AionParser.T__49);
                this.state = 335;
                this.identifier();
                this.state = 336;
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
        this.enterRule(_localctx, 46, AionParser.RULE_merge_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 338;
                this.match(AionParser.T__50);
                this.state = 339;
                this.identifier_list();
                this.state = 340;
                this.match(AionParser.T__49);
                this.state = 341;
                this.identifier();
                this.state = 342;
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
        this.enterRule(_localctx, 48, AionParser.RULE_identifier_list);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 344;
                this.identifier();
                this.state = 349;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === AionParser.T__29) {
                    {
                        {
                            this.state = 345;
                            this.match(AionParser.T__29);
                            this.state = 346;
                            this.identifier();
                        }
                    }
                    this.state = 351;
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
        this.enterRule(_localctx, 50, AionParser.RULE_include_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 352;
                this.match(AionParser.T__51);
                this.state = 353;
                this.identifier();
                this.state = 354;
                this.match(AionParser.T__52);
                this.state = 355;
                this.identifier();
                this.state = 356;
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
        this.enterRule(_localctx, 52, AionParser.RULE_export_stmt);
        let _la;
        try {
            this.state = 375;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 28, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 358;
                        this.match(AionParser.T__53);
                        this.state = 359;
                        this.identifier();
                        this.state = 362;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === AionParser.T__1) {
                            {
                                this.state = 360;
                                this.match(AionParser.T__1);
                                this.state = 361;
                                this.string();
                            }
                        }
                        this.state = 364;
                        this.match(AionParser.T__2);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 366;
                        this.match(AionParser.T__53);
                        this.state = 367;
                        this.match(AionParser.T__54);
                        this.state = 368;
                        this.match(AionParser.T__1);
                        this.state = 369;
                        this.string();
                        this.state = 370;
                        this.match(AionParser.T__2);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 372;
                        this.match(AionParser.T__53);
                        this.state = 373;
                        this.match(AionParser.T__55);
                        this.state = 374;
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
    week_start_stmt() {
        let _localctx = new Week_start_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, AionParser.RULE_week_start_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 377;
                this.identifier();
                this.state = 378;
                this.match(AionParser.T__3);
                this.state = 379;
                this.match(AionParser.T__56);
                this.state = 380;
                this.match(AionParser.T__44);
                this.state = 381;
                this.date();
                this.state = 382;
                this.match(AionParser.T__45);
                this.state = 383;
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
    condition() {
        let _localctx = new ConditionContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, AionParser.RULE_condition);
        try {
            this.state = 402;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AionParser.Identifier:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 385;
                        this.identifier();
                        this.state = 386;
                        this.comparison_op();
                        this.state = 387;
                        this.value();
                    }
                    break;
                case AionParser.T__57:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 389;
                        this.match(AionParser.T__57);
                        this.state = 390;
                        this.match(AionParser.T__44);
                        this.state = 391;
                        this.weekday();
                        this.state = 392;
                        this.match(AionParser.T__45);
                        this.state = 393;
                        this.match(AionParser.T__52);
                        this.state = 394;
                        this.match(AionParser.T__41);
                        this.state = 395;
                        this.comparison_op();
                        this.state = 396;
                        this.number();
                    }
                    break;
                case AionParser.T__33:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 398;
                        this.match(AionParser.T__33);
                        this.state = 399;
                        this.comparison_op();
                        this.state = 400;
                        this.string();
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
        this.enterRule(_localctx, 58, AionParser.RULE_comparison_op);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 404;
                _la = this._input.LA(1);
                if (!(((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (AionParser.T__58 - 59)) | (1 << (AionParser.T__59 - 59)) | (1 << (AionParser.T__60 - 59)) | (1 << (AionParser.T__61 - 59)) | (1 << (AionParser.T__62 - 59)) | (1 << (AionParser.T__63 - 59)))) !== 0))) {
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
        this.enterRule(_localctx, 60, AionParser.RULE_strategy);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 406;
                _la = this._input.LA(1);
                if (!(((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (AionParser.T__64 - 65)) | (1 << (AionParser.T__65 - 65)) | (1 << (AionParser.T__66 - 65)))) !== 0))) {
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
        this.enterRule(_localctx, 62, AionParser.RULE_value_expr);
        try {
            this.state = 415;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 30, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 408;
                        this.date();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 409;
                        this.time();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 410;
                        this.duration();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 411;
                        this.string();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 412;
                        this.number();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 413;
                        this.identifier();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 414;
                        this.function_call();
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
        this.enterRule(_localctx, 64, AionParser.RULE_function_call);
        try {
            this.state = 429;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AionParser.T__57:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 417;
                        this.match(AionParser.T__57);
                        this.state = 418;
                        this.match(AionParser.T__44);
                        this.state = 419;
                        this.weekday();
                        this.state = 420;
                        this.match(AionParser.T__45);
                        this.state = 421;
                        this.match(AionParser.T__52);
                        this.state = 422;
                        this.match(AionParser.T__41);
                    }
                    break;
                case AionParser.T__56:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 424;
                        this.match(AionParser.T__56);
                        this.state = 425;
                        this.match(AionParser.T__44);
                        this.state = 426;
                        this.date();
                        this.state = 427;
                        this.match(AionParser.T__45);
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
        this.enterRule(_localctx, 66, AionParser.RULE_date);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 431;
                this.number();
                this.state = 432;
                this.match(AionParser.T__67);
                this.state = 433;
                this.number();
                this.state = 436;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === AionParser.T__67) {
                    {
                        this.state = 434;
                        this.match(AionParser.T__67);
                        this.state = 435;
                        this.number();
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
    time() {
        let _localctx = new TimeContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, AionParser.RULE_time);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 438;
                this.number();
                this.state = 439;
                this.match(AionParser.T__28);
                this.state = 440;
                this.number();
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
        this.enterRule(_localctx, 70, AionParser.RULE_duration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 442;
                this.number();
                this.state = 443;
                this.time_unit();
                this.state = 449;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === AionParser.Number) {
                    {
                        {
                            this.state = 444;
                            this.number();
                            this.state = 445;
                            this.time_unit();
                        }
                    }
                    this.state = 451;
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
        this.enterRule(_localctx, 72, AionParser.RULE_time_unit);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 452;
                _la = this._input.LA(1);
                if (!(_la === AionParser.T__68 || _la === AionParser.T__69)) {
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
        this.enterRule(_localctx, 74, AionParser.RULE_value);
        try {
            this.state = 457;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AionParser.String:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 454;
                        this.string();
                    }
                    break;
                case AionParser.Number:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 455;
                        this.number();
                    }
                    break;
                case AionParser.Identifier:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 456;
                        this.identifier();
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
    identifier() {
        let _localctx = new IdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, AionParser.RULE_identifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 459;
                this.match(AionParser.Identifier);
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
    string() {
        let _localctx = new StringContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, AionParser.RULE_string);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 461;
                this.match(AionParser.String);
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
    number() {
        let _localctx = new NumberContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, AionParser.RULE_number);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 463;
                this.match(AionParser.Number);
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
        this.enterRule(_localctx, 82, AionParser.RULE_weekday);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 465;
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
    month_name() {
        let _localctx = new Month_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, AionParser.RULE_month_name);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 467;
                _la = this._input.LA(1);
                if (!(((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & ((1 << (AionParser.T__84 - 85)) | (1 << (AionParser.T__85 - 85)) | (1 << (AionParser.T__86 - 85)) | (1 << (AionParser.T__87 - 85)) | (1 << (AionParser.T__88 - 85)) | (1 << (AionParser.T__89 - 85)) | (1 << (AionParser.T__90 - 85)) | (1 << (AionParser.T__91 - 85)) | (1 << (AionParser.T__92 - 85)) | (1 << (AionParser.T__93 - 85)) | (1 << (AionParser.T__94 - 85)) | (1 << (AionParser.T__95 - 85)) | (1 << (AionParser.T__96 - 85)) | (1 << (AionParser.T__97 - 85)) | (1 << (AionParser.T__98 - 85)) | (1 << (AionParser.T__99 - 85)) | (1 << (AionParser.T__100 - 85)) | (1 << (AionParser.T__101 - 85)) | (1 << (AionParser.T__102 - 85)) | (1 << (AionParser.T__103 - 85)) | (1 << (AionParser.T__104 - 85)) | (1 << (AionParser.T__105 - 85)) | (1 << (AionParser.T__106 - 85)))) !== 0))) {
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
AionParser.T__86 = 87;
AionParser.T__87 = 88;
AionParser.T__88 = 89;
AionParser.T__89 = 90;
AionParser.T__90 = 91;
AionParser.T__91 = 92;
AionParser.T__92 = 93;
AionParser.T__93 = 94;
AionParser.T__94 = 95;
AionParser.T__95 = 96;
AionParser.T__96 = 97;
AionParser.T__97 = 98;
AionParser.T__98 = 99;
AionParser.T__99 = 100;
AionParser.T__100 = 101;
AionParser.T__101 = 102;
AionParser.T__102 = 103;
AionParser.T__103 = 104;
AionParser.T__104 = 105;
AionParser.T__105 = 106;
AionParser.T__106 = 107;
AionParser.Identifier = 108;
AionParser.String = 109;
AionParser.Number = 110;
AionParser.WS = 111;
AionParser.LINE_COMMENT = 112;
AionParser.RULE_program = 0;
AionParser.RULE_statement = 1;
AionParser.RULE_import_stmt = 2;
AionParser.RULE_assignment_stmt = 3;
AionParser.RULE_value_assignment_stmt = 4;
AionParser.RULE_default_declaration = 5;
AionParser.RULE_declaration = 6;
AionParser.RULE_event_decl = 7;
AionParser.RULE_task_decl = 8;
AionParser.RULE_repetition_in_decl = 9;
AionParser.RULE_task_time_strict = 10;
AionParser.RULE_event_time_strict = 11;
AionParser.RULE_event_time_expr = 12;
AionParser.RULE_rep_period = 13;
AionParser.RULE_pomodoro_decl = 14;
AionParser.RULE_structured_event_stmt = 15;
AionParser.RULE_structured_event_field = 16;
AionParser.RULE_loop_stmt = 17;
AionParser.RULE_loop_start = 18;
AionParser.RULE_loop_end = 19;
AionParser.RULE_loop_unit = 20;
AionParser.RULE_conditional_stmt = 21;
AionParser.RULE_filter_stmt = 22;
AionParser.RULE_merge_stmt = 23;
AionParser.RULE_identifier_list = 24;
AionParser.RULE_include_stmt = 25;
AionParser.RULE_export_stmt = 26;
AionParser.RULE_week_start_stmt = 27;
AionParser.RULE_condition = 28;
AionParser.RULE_comparison_op = 29;
AionParser.RULE_strategy = 30;
AionParser.RULE_value_expr = 31;
AionParser.RULE_function_call = 32;
AionParser.RULE_date = 33;
AionParser.RULE_time = 34;
AionParser.RULE_duration = 35;
AionParser.RULE_time_unit = 36;
AionParser.RULE_value = 37;
AionParser.RULE_identifier = 38;
AionParser.RULE_string = 39;
AionParser.RULE_number = 40;
AionParser.RULE_weekday = 41;
AionParser.RULE_month_name = 42;
// tslint:disable:no-trailing-whitespace
AionParser.ruleNames = [
    "program", "statement", "import_stmt", "assignment_stmt", "value_assignment_stmt",
    "default_declaration", "declaration", "event_decl", "task_decl", "repetition_in_decl",
    "task_time_strict", "event_time_strict", "event_time_expr", "rep_period",
    "pomodoro_decl", "structured_event_stmt", "structured_event_field", "loop_stmt",
    "loop_start", "loop_end", "loop_unit", "conditional_stmt", "filter_stmt",
    "merge_stmt", "identifier_list", "include_stmt", "export_stmt", "week_start_stmt",
    "condition", "comparison_op", "strategy", "value_expr", "function_call",
    "date", "time", "duration", "time_unit", "value", "identifier", "string",
    "number", "weekday", "month_name",
];
AionParser._LITERAL_NAMES = [
    undefined, "'import'", "'as'", "';'", "'='", "'new'", "'event'", "'task'",
    "'each'", "'at'", "'find between'", "'and'", "'using'", "'from'", "'for'",
    "'to'", "'on'", "'daily'", "'weekly'", "'yearly'", "'pomodoro'", "'repeat'",
    "'times'", "'every'", "'with'", "'pause'", "'{'", "'}'", "'name'", "':'",
    "','", "'start'", "'duration'", "'location'", "'category'", "'step'",
    "'today'", "'+'", "'day'", "'days'", "'week'", "'weeks'", "'month'", "'months'",
    "'if'", "'('", "')'", "'else'", "'filter'", "'where'", "'into'", "'merge'",
    "'include'", "'in'", "'export'", "'default'", "'all'", "'weeknumber'",
    "'count'", "'=='", "'!='", "'<'", "'<='", "'>'", "'>='", "'random'", "'earliest'",
    "'latest'", "'.'", "'h'", "'m'", "'Monday'", "'Tuesday'", "'Wednesday'",
    "'Thursday'", "'Friday'", "'Saturday'", "'Sunday'", "'Mon'", "'Tue'",
    "'Wed'", "'Thu'", "'Fri'", "'Sat'", "'Sun'", "'January'", "'February'",
    "'March'", "'April'", "'May'", "'June'", "'July'", "'August'", "'September'",
    "'October'", "'November'", "'December'", "'Jan'", "'Feb'", "'Mar'", "'Apr'",
    "'Jun'", "'Jul'", "'Aug'", "'Sep'", "'Oct'", "'Nov'", "'Dec'",
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
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, "Identifier", "String", "Number", "WS",
    "LINE_COMMENT",
];
AionParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(AionParser._LITERAL_NAMES, AionParser._SYMBOLIC_NAMES, []);
AionParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03r\u01D8\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
    "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
    "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
    "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
    "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
    "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
    "\x04,\t,\x03\x02\x07\x02Z\n\x02\f\x02\x0E\x02]\v\x02\x03\x02\x03\x02\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x05\x03m\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
    "\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03" +
    "\x06\x03\x06\x03\x06\x03\x07\x05\x07\x80\n\x07\x03\x07\x03\x07\x03\x07" +
    "\x05\x07\x85\n\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x05\b\x8C\n\b\x03" +
    "\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\x98\n\t" +
    "\x03\n\x03\n\x03\n\x03\n\x05\n\x9E\n\n\x03\n\x03\n\x03\v\x03\v\x03\v\x05" +
    "\v\xA5\n\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\xAF\n" +
    "\f\x05\f\xB1\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\xB9\n\r\x03" +
    "\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\xC1\n\r\x05\r\xC3\n\r\x03\x0E\x03" +
    "\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
    "\x10\x03\x10\x03\x10\x03\x10\x05\x10\xD3\n\x10\x03\x10\x03\x10\x03\x10" +
    "\x03\x10\x05\x10\xD9\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\xDF" +
    "\n\x11\f\x11\x0E\x11\xE2\v\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12" +
    "\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
    "\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
    "\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\xFF\n\x12\x03\x13\x03\x13\x03" +
    "\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u0109\n\x13\x03\x13" +
    "\x03\x13\x07\x13\u010D\n\x13\f\x13\x0E\x13\u0110\v\x13\x03\x13\x03\x13" +
    "\x03\x14\x03\x14\x03\x14\x05\x14\u0117\n\x14\x03\x15\x03\x15\x03\x15\x03" +
    "\x15\x03\x15\x03\x15\x05\x15\u011F\n\x15\x03\x16\x03\x16\x03\x17\x03\x17" +
    "\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\u0129\n\x17\f\x17\x0E\x17\u012C" +
    "\v\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17" +
    "\x07\x17\u0136\n\x17\f\x17\x0E\x17\u0139\v\x17\x03\x17\x03\x17\x07\x17" +
    "\u013D\n\x17\f\x17\x0E\x17\u0140\v\x17\x03\x17\x03\x17\x03\x17\x07\x17" +
    "\u0145\n\x17\f\x17\x0E\x17\u0148\v\x17\x03\x17\x05\x17\u014B\n\x17\x03" +
    "\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03" +
    "\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u015E" +
    "\n\x1A\f\x1A\x0E\x1A\u0161\v\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
    "\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u016D\n\x1C\x03\x1C\x03" +
    "\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
    "\x1C\x05\x1C\u017A\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
    "\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
    "\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
    "\x03\x1E\x05\x1E\u0195\n\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03!" +
    "\x03!\x03!\x03!\x03!\x05!\u01A2\n!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"" +
    "\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x05\"\u01B0\n\"\x03#\x03#\x03#\x03" +
    "#\x03#\x05#\u01B7\n#\x03$\x03$\x03$\x03$\x03%\x03%\x03%\x03%\x03%\x07" +
    "%\u01C2\n%\f%\x0E%\u01C5\v%\x03&\x03&\x03\'\x03\'\x03\'\x05\'\u01CC\n" +
    "\'\x03(\x03(\x03)\x03)\x03*\x03*\x03+\x03+\x03,\x03,\x03,\x02\x02\x02" +
    "-\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
    "\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" +
    "*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02" +
    "F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02\x02\n\x04\x02\v\v\x0F\x0F" +
    "\x03\x02\x13\x15\x03\x02(-\x03\x02=B\x03\x02CE\x03\x02GH\x03\x02IV\x03" +
    "\x02Wm\x02\u01E8\x02[\x03\x02\x02\x02\x04l\x03\x02\x02\x02\x06n\x03\x02" +
    "\x02\x02\bt\x03\x02\x02\x02\ny\x03\x02\x02\x02\f\x7F\x03\x02\x02\x02\x0E" +
    "\x8B\x03\x02\x02\x02\x10\x97\x03\x02\x02\x02\x12\x99\x03\x02\x02\x02\x14" +
    "\xA4\x03\x02\x02\x02\x16\xB0\x03\x02\x02\x02\x18\xC2\x03\x02\x02\x02\x1A" +
    "\xC4\x03\x02\x02\x02\x1C\xC7\x03\x02\x02\x02\x1E\xC9\x03\x02\x02\x02 " +
    "\xDA\x03\x02\x02\x02\"\xFE\x03\x02\x02\x02$\u0100\x03\x02\x02\x02&\u0116" +
    "\x03\x02\x02\x02(\u011E\x03\x02\x02\x02*\u0120\x03\x02\x02\x02,\u0122" +
    "\x03\x02\x02\x02.\u014C\x03\x02\x02\x020\u0154\x03\x02\x02\x022\u015A" +
    "\x03\x02\x02\x024\u0162\x03\x02\x02\x026\u0179\x03\x02\x02\x028\u017B" +
    "\x03\x02\x02\x02:\u0194\x03\x02\x02\x02<\u0196\x03\x02\x02\x02>\u0198" +
    "\x03\x02\x02\x02@\u01A1\x03\x02\x02\x02B\u01AF\x03\x02\x02\x02D\u01B1" +
    "\x03\x02\x02\x02F\u01B8\x03\x02\x02\x02H\u01BC\x03\x02\x02\x02J\u01C6" +
    "\x03\x02\x02\x02L\u01CB\x03\x02\x02\x02N\u01CD\x03\x02\x02\x02P\u01CF" +
    "\x03\x02\x02\x02R\u01D1\x03\x02\x02\x02T\u01D3\x03\x02\x02\x02V\u01D5" +
    "\x03\x02\x02\x02XZ\x05\x04\x03\x02YX\x03\x02\x02\x02Z]\x03\x02\x02\x02" +
    "[Y\x03\x02\x02\x02[\\\x03\x02\x02\x02\\^\x03\x02\x02\x02][\x03\x02\x02" +
    "\x02^_\x07\x02\x02\x03_\x03\x03\x02\x02\x02`m\x05\x06\x04\x02am\x05\b" +
    "\x05\x02bm\x05\n\x06\x02cm\x05$\x13\x02dm\x056\x1C\x02em\x050\x19\x02" +
    "fm\x05.\x18\x02gm\x054\x1B\x02hm\x05,\x17\x02im\x05 \x11\x02jm\x058\x1D" +
    "\x02km\x05\f\x07\x02l`\x03\x02\x02\x02la\x03\x02\x02\x02lb\x03\x02\x02" +
    "\x02lc\x03\x02\x02\x02ld\x03\x02\x02\x02le\x03\x02\x02\x02lf\x03\x02\x02" +
    "\x02lg\x03\x02\x02\x02lh\x03\x02\x02\x02li\x03\x02\x02\x02lj\x03\x02\x02" +
    "\x02lk\x03\x02\x02\x02m\x05\x03\x02\x02\x02no\x07\x03\x02\x02op\x05P)" +
    "\x02pq\x07\x04\x02\x02qr\x05N(\x02rs\x07\x05\x02\x02s\x07\x03\x02\x02" +
    "\x02tu\x05N(\x02uv\x07\x06\x02\x02vw\x05\x0E\b\x02wx\x07\x05\x02\x02x" +
    "\t\x03\x02\x02\x02yz\x05N(\x02z{\x07\x06\x02\x02{|\x05@!\x02|}\x07\x05" +
    "\x02\x02}\v\x03\x02\x02\x02~\x80\x07\x07\x02\x02\x7F~\x03\x02\x02\x02" +
    "\x7F\x80\x03\x02\x02\x02\x80\x84\x03\x02\x02\x02\x81\x85\x05\x10\t\x02" +
    "\x82\x85\x05\x12\n\x02\x83\x85\x05\x1E\x10\x02\x84\x81\x03\x02\x02\x02" +
    "\x84\x82\x03\x02\x02\x02\x84\x83\x03\x02\x02\x02\x85\x86\x03\x02\x02\x02" +
    "\x86\x87\x07\x05\x02\x02\x87\r\x03\x02\x02\x02\x88\x8C\x05\x10\t\x02\x89" +
    "\x8C\x05\x12\n\x02\x8A\x8C\x05\x1E\x10\x02\x8B\x88\x03\x02\x02\x02\x8B" +
    "\x89\x03\x02\x02\x02\x8B\x8A\x03\x02\x02\x02\x8C\x0F\x03\x02\x02\x02\x8D" +
    "\x8E\x07\b\x02\x02\x8E\x8F\x05P)\x02\x8F\x90\x05\x1A\x0E\x02\x90\x91\x05" +
    "\x18\r\x02\x91\x98\x03\x02\x02\x02\x92\x93\x07\b\x02\x02\x93\x94\x05P" +
    ")\x02\x94\x95\x05\x14\v\x02\x95\x96\x05\x18\r\x02\x96\x98\x03\x02\x02" +
    "\x02\x97\x8D\x03\x02\x02\x02\x97\x92\x03\x02\x02\x02\x98\x11\x03\x02\x02" +
    "\x02\x99\x9A\x07\t\x02\x02\x9A\x9B\x05P)\x02\x9B\x9D\x05\x1A\x0E\x02\x9C" +
    "\x9E\x05\x1C\x0F\x02\x9D\x9C\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E" +
    "\x9F\x03\x02\x02\x02\x9F\xA0\x05\x16\f\x02\xA0\x13\x03\x02\x02\x02\xA1" +
    "\xA2\x07\n\x02\x02\xA2\xA5\x05T+\x02\xA3\xA5\x05\x1C\x0F\x02\xA4\xA1\x03" +
    "\x02\x02\x02\xA4\xA3\x03\x02\x02\x02\xA5\x15\x03\x02\x02\x02\xA6\xA7\x07" +
    "\v\x02\x02\xA7\xB1\x05F$\x02\xA8\xA9\x07\f\x02\x02\xA9\xAA\x05F$\x02\xAA" +
    "\xAB\x07\r\x02\x02\xAB\xAE\x05F$\x02\xAC\xAD\x07\x0E\x02\x02\xAD\xAF\x05" +
    "> \x02\xAE\xAC\x03\x02\x02\x02\xAE\xAF\x03\x02\x02\x02\xAF\xB1\x03\x02" +
    "\x02\x02\xB0\xA6\x03\x02\x02\x02\xB0\xA8\x03\x02\x02\x02\xB1\x17\x03\x02" +
    "\x02\x02\xB2\xB3\t\x02\x02\x02\xB3\xB8\x05F$\x02\xB4\xB5\x07\x10\x02\x02" +
    "\xB5\xB9\x05H%\x02\xB6\xB7\x07\x11\x02\x02\xB7\xB9\x05F$\x02\xB8\xB4\x03" +
    "\x02\x02\x02\xB8\xB6\x03\x02\x02\x02\xB9\xC3\x03\x02\x02\x02\xBA\xBB\x07" +
    "\f\x02\x02\xBB\xBC\x05F$\x02\xBC\xBD\x07\r\x02\x02\xBD\xC0\x05F$\x02\xBE" +
    "\xBF\x07\x0E\x02\x02\xBF\xC1\x05> \x02\xC0\xBE\x03\x02\x02\x02\xC0\xC1" +
    "\x03\x02\x02\x02\xC1\xC3\x03\x02\x02\x02\xC2\xB2\x03\x02\x02\x02\xC2\xBA" +
    "\x03\x02\x02\x02\xC3\x19\x03\x02\x02\x02\xC4\xC5\x07\x12\x02\x02\xC5\xC6" +
    "\x05D#\x02\xC6\x1B\x03\x02\x02\x02\xC7\xC8\t\x03\x02\x02\xC8\x1D\x03\x02" +
    "\x02\x02\xC9\xCA\x07\x16\x02\x02\xCA\xCB\x05P)\x02\xCB\xCC\x07\v\x02\x02" +
    "\xCC\xCD\x05F$\x02\xCD\xCE\x07\x17\x02\x02\xCE\xCF\x05R*\x02\xCF\xD2\x07" +
    "\x18\x02\x02\xD0\xD1\x07\x19\x02\x02\xD1\xD3\x05H%\x02\xD2\xD0\x03\x02" +
    "\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3\xD8\x03\x02\x02\x02\xD4\xD5\x07\x1A" +
    "\x02\x02\xD5\xD6\x05H%\x02\xD6\xD7\x07\x1B\x02\x02\xD7\xD9\x03\x02\x02" +
    "\x02\xD8\xD4\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\x1F\x03\x02\x02" +
    "\x02\xDA\xDB\x07\b\x02\x02\xDB\xDC\x05N(\x02\xDC\xE0\x07\x1C\x02\x02\xDD" +
    "\xDF\x05\"\x12\x02\xDE\xDD\x03\x02\x02\x02\xDF\xE2\x03\x02\x02\x02\xE0" +
    "\xDE\x03\x02\x02\x02\xE0\xE1\x03\x02\x02\x02\xE1\xE3\x03\x02\x02\x02\xE2" +
    "\xE0\x03\x02\x02\x02\xE3\xE4\x07\x1D\x02\x02\xE4!\x03\x02\x02\x02\xE5" +
    "\xE6\x07\x1E\x02\x02\xE6\xE7\x07\x1F\x02\x02\xE7\xE8\x05P)\x02\xE8\xE9" +
    "\x07 \x02\x02\xE9\xFF\x03\x02\x02\x02\xEA\xEB\x07!\x02\x02\xEB\xEC\x07" +
    "\x1F\x02\x02\xEC\xED\x05F$\x02\xED\xEE\x07 \x02\x02\xEE\xFF\x03\x02\x02" +
    "\x02\xEF\xF0\x07\"\x02\x02\xF0\xF1\x07\x1F\x02\x02\xF1\xF2\x05H%\x02\xF2" +
    "\xF3\x07 \x02\x02\xF3\xFF\x03\x02\x02\x02\xF4\xF5\x07#\x02\x02\xF5\xF6" +
    "\x07\x1F\x02\x02\xF6\xF7\x05P)\x02\xF7\xF8\x07 \x02\x02\xF8\xFF\x03\x02" +
    "\x02\x02\xF9\xFA\x07$\x02\x02\xFA\xFB\x07\x1F\x02\x02\xFB\xFC\x05P)\x02" +
    "\xFC\xFD\x07 \x02\x02\xFD\xFF\x03\x02\x02\x02\xFE\xE5\x03\x02\x02\x02" +
    "\xFE\xEA\x03\x02\x02\x02\xFE\xEF\x03\x02\x02\x02\xFE\xF4\x03\x02\x02\x02" +
    "\xFE\xF9\x03\x02\x02\x02\xFF#\x03\x02\x02\x02\u0100\u0101\x07\n\x02\x02" +
    "\u0101\u0102\x05*\x16\x02\u0102\u0103\x07\x0F\x02\x02\u0103\u0104\x05" +
    "&\x14\x02\u0104\u0105\x07\x11\x02\x02\u0105\u0108\x05(\x15\x02\u0106\u0107" +
    "\x07%\x02\x02\u0107\u0109\x05R*\x02\u0108\u0106\x03\x02\x02\x02\u0108" +
    "\u0109\x03\x02\x02\x02\u0109\u010A\x03\x02\x02\x02\u010A\u010E\x07\x1C" +
    "\x02\x02\u010B\u010D\x05\x04\x03\x02\u010C\u010B\x03\x02\x02\x02\u010D" +
    "\u0110\x03\x02\x02\x02\u010E\u010C\x03\x02\x02\x02\u010E\u010F\x03\x02" +
    "\x02\x02\u010F\u0111\x03\x02\x02\x02\u0110\u010E\x03\x02\x02\x02\u0111" +
    "\u0112\x07\x1D\x02\x02\u0112%\x03\x02\x02\x02\u0113\u0117\x05D#\x02\u0114" +
    "\u0117\x05N(\x02\u0115\u0117\x07&\x02\x02\u0116\u0113\x03\x02\x02\x02" +
    "\u0116\u0114\x03\x02\x02\x02\u0116\u0115\x03\x02\x02\x02\u0117\'\x03\x02" +
    "\x02\x02\u0118\u011F\x05D#\x02\u0119\u011F\x05N(\x02\u011A\u011B\x05&" +
    "\x14\x02\u011B\u011C\x07\'\x02\x02\u011C\u011D\x05R*\x02\u011D\u011F\x03" +
    "\x02\x02\x02\u011E\u0118\x03\x02\x02\x02\u011E\u0119\x03\x02\x02\x02\u011E" +
    "\u011A\x03\x02\x02\x02\u011F)\x03\x02\x02\x02\u0120\u0121\t\x04\x02\x02" +
    "\u0121+\x03\x02\x02\x02\u0122\u0123\x07.\x02\x02\u0123\u0124\x07/\x02" +
    "\x02\u0124\u0125\x05:\x1E\x02\u0125\u0126\x070\x02\x02\u0126\u012A\x07" +
    "\x1C\x02\x02\u0127\u0129\x05\x04\x03\x02\u0128\u0127\x03\x02\x02\x02\u0129" +
    "\u012C\x03\x02\x02\x02\u012A\u0128\x03\x02\x02\x02\u012A\u012B\x03\x02" +
    "\x02\x02\u012B\u012D\x03\x02\x02\x02\u012C\u012A\x03\x02\x02\x02\u012D" +
    "\u013E\x07\x1D\x02\x02\u012E\u012F\x071\x02\x02\u012F\u0130\x07.\x02\x02" +
    "\u0130\u0131\x07/\x02\x02\u0131\u0132\x05:\x1E\x02\u0132\u0133\x070\x02" +
    "\x02\u0133\u0137\x07\x1C\x02\x02\u0134\u0136\x05\x04\x03\x02\u0135\u0134" +
    "\x03\x02\x02\x02\u0136\u0139\x03\x02\x02\x02\u0137\u0135\x03\x02\x02\x02" +
    "\u0137\u0138\x03\x02\x02\x02\u0138\u013A\x03\x02\x02\x02\u0139\u0137\x03" +
    "\x02\x02\x02\u013A\u013B\x07\x1D\x02\x02\u013B\u013D\x03\x02\x02\x02\u013C" +
    "\u012E\x03\x02\x02\x02\u013D\u0140\x03\x02\x02\x02\u013E\u013C\x03\x02" +
    "\x02\x02\u013E\u013F\x03\x02\x02\x02\u013F\u014A\x03\x02\x02\x02\u0140" +
    "\u013E\x03\x02\x02\x02\u0141\u0142\x071\x02\x02\u0142\u0146\x07\x1C\x02" +
    "\x02\u0143\u0145\x05\x04\x03\x02\u0144\u0143\x03\x02\x02\x02\u0145\u0148" +
    "\x03\x02\x02\x02\u0146\u0144\x03\x02\x02\x02\u0146\u0147\x03\x02\x02\x02" +
    "\u0147\u0149\x03\x02\x02\x02\u0148\u0146\x03\x02\x02\x02\u0149\u014B\x07" +
    "\x1D\x02\x02\u014A\u0141\x03\x02\x02\x02\u014A\u014B\x03\x02\x02\x02\u014B" +
    "-\x03\x02\x02\x02\u014C\u014D\x072\x02\x02\u014D\u014E\x05N(\x02\u014E" +
    "\u014F\x073\x02\x02\u014F\u0150\x05:\x1E\x02\u0150\u0151\x074\x02\x02" +
    "\u0151\u0152\x05N(\x02\u0152\u0153\x07\x05\x02\x02\u0153/\x03\x02\x02" +
    "\x02\u0154\u0155\x075\x02\x02\u0155\u0156\x052\x1A\x02\u0156\u0157\x07" +
    "4\x02\x02\u0157\u0158\x05N(\x02\u0158\u0159\x07\x05\x02\x02\u01591\x03" +
    "\x02\x02\x02\u015A\u015F\x05N(\x02\u015B\u015C\x07 \x02\x02\u015C\u015E" +
    "\x05N(\x02\u015D\u015B\x03\x02\x02\x02\u015E\u0161\x03\x02\x02\x02\u015F" +
    "\u015D\x03\x02\x02\x02\u015F\u0160\x03\x02\x02\x02\u01603\x03\x02\x02" +
    "\x02\u0161\u015F\x03\x02\x02\x02\u0162\u0163\x076\x02\x02\u0163\u0164" +
    "\x05N(\x02\u0164\u0165\x077\x02\x02\u0165\u0166\x05N(\x02\u0166\u0167" +
    "\x07\x05\x02\x02\u01675\x03\x02\x02\x02\u0168\u0169\x078\x02\x02\u0169" +
    "\u016C\x05N(\x02\u016A\u016B\x07\x04\x02\x02\u016B\u016D\x05P)\x02\u016C" +
    "\u016A\x03\x02\x02\x02\u016C\u016D\x03\x02\x02\x02\u016D\u016E\x03\x02" +
    "\x02\x02\u016E\u016F\x07\x05\x02\x02\u016F\u017A\x03\x02\x02\x02\u0170" +
    "\u0171\x078\x02\x02\u0171\u0172\x079\x02\x02\u0172\u0173\x07\x04\x02\x02" +
    "\u0173\u0174\x05P)\x02\u0174\u0175\x07\x05\x02\x02\u0175\u017A\x03\x02" +
    "\x02\x02\u0176\u0177\x078\x02\x02\u0177\u0178\x07:\x02\x02\u0178\u017A" +
    "\x07\x05\x02\x02\u0179\u0168\x03\x02\x02\x02\u0179\u0170\x03\x02\x02\x02" +
    "\u0179\u0176\x03\x02\x02\x02\u017A7\x03\x02\x02\x02\u017B\u017C\x05N(" +
    "\x02\u017C\u017D\x07\x06\x02\x02\u017D\u017E\x07;\x02\x02\u017E\u017F" +
    "\x07/\x02\x02\u017F\u0180\x05D#\x02\u0180\u0181\x070\x02\x02\u0181\u0182" +
    "\x07\x05\x02\x02\u01829\x03\x02\x02\x02\u0183\u0184\x05N(\x02\u0184\u0185" +
    "\x05<\x1F\x02\u0185\u0186\x05L\'\x02\u0186\u0195\x03\x02\x02\x02\u0187" +
    "\u0188\x07<\x02\x02\u0188\u0189\x07/\x02\x02\u0189\u018A\x05T+\x02\u018A" +
    "\u018B\x070\x02\x02\u018B\u018C\x077\x02\x02\u018C\u018D\x07,\x02\x02" +
    "\u018D\u018E\x05<\x1F\x02\u018E\u018F\x05R*\x02\u018F\u0195\x03\x02\x02" +
    "\x02\u0190\u0191\x07$\x02\x02\u0191\u0192\x05<\x1F\x02\u0192\u0193\x05" +
    "P)\x02\u0193\u0195\x03\x02\x02\x02\u0194\u0183\x03\x02\x02\x02\u0194\u0187" +
    "\x03\x02\x02\x02\u0194\u0190\x03\x02\x02\x02\u0195;\x03\x02\x02\x02\u0196" +
    "\u0197\t\x05\x02\x02\u0197=\x03\x02\x02\x02\u0198\u0199\t\x06\x02\x02" +
    "\u0199?\x03\x02\x02\x02\u019A\u01A2\x05D#\x02\u019B\u01A2\x05F$\x02\u019C" +
    "\u01A2\x05H%\x02\u019D\u01A2\x05P)\x02\u019E\u01A2\x05R*\x02\u019F\u01A2" +
    "\x05N(\x02\u01A0\u01A2\x05B\"\x02\u01A1\u019A\x03\x02\x02\x02\u01A1\u019B" +
    "\x03\x02\x02\x02\u01A1\u019C\x03\x02\x02\x02\u01A1\u019D\x03\x02\x02\x02" +
    "\u01A1\u019E\x03\x02\x02\x02\u01A1\u019F\x03\x02\x02\x02\u01A1\u01A0\x03" +
    "\x02\x02\x02\u01A2A\x03\x02\x02\x02\u01A3\u01A4\x07<\x02\x02\u01A4\u01A5" +
    "\x07/\x02\x02\u01A5\u01A6\x05T+\x02\u01A6\u01A7\x070\x02\x02\u01A7\u01A8" +
    "\x077\x02\x02\u01A8\u01A9\x07,\x02\x02\u01A9\u01B0\x03\x02\x02\x02\u01AA" +
    "\u01AB\x07;\x02\x02\u01AB\u01AC\x07/\x02\x02\u01AC\u01AD\x05D#\x02\u01AD" +
    "\u01AE\x070\x02\x02\u01AE\u01B0\x03\x02\x02\x02\u01AF\u01A3\x03\x02\x02" +
    "\x02\u01AF\u01AA\x03\x02\x02\x02\u01B0C\x03\x02\x02\x02\u01B1\u01B2\x05" +
    "R*\x02\u01B2\u01B3\x07F\x02\x02\u01B3\u01B6\x05R*\x02\u01B4\u01B5\x07" +
    "F\x02\x02\u01B5\u01B7\x05R*\x02\u01B6\u01B4\x03\x02\x02\x02\u01B6\u01B7" +
    "\x03\x02\x02\x02\u01B7E\x03\x02\x02\x02\u01B8\u01B9\x05R*\x02\u01B9\u01BA" +
    "\x07\x1F\x02\x02\u01BA\u01BB\x05R*\x02\u01BBG\x03\x02\x02\x02\u01BC\u01BD" +
    "\x05R*\x02\u01BD\u01C3\x05J&\x02\u01BE\u01BF\x05R*\x02\u01BF\u01C0\x05" +
    "J&\x02\u01C0\u01C2\x03\x02\x02\x02\u01C1\u01BE\x03\x02\x02\x02\u01C2\u01C5" +
    "\x03\x02\x02\x02\u01C3\u01C1\x03\x02\x02\x02\u01C3\u01C4\x03\x02\x02\x02" +
    "\u01C4I\x03\x02\x02\x02\u01C5\u01C3\x03\x02\x02\x02\u01C6\u01C7\t\x07" +
    "\x02\x02\u01C7K\x03\x02\x02\x02\u01C8\u01CC\x05P)\x02\u01C9\u01CC\x05" +
    "R*\x02\u01CA\u01CC\x05N(\x02\u01CB\u01C8\x03\x02\x02\x02\u01CB\u01C9\x03" +
    "\x02\x02\x02\u01CB\u01CA\x03\x02\x02\x02\u01CCM\x03\x02\x02\x02\u01CD" +
    "\u01CE\x07n\x02\x02\u01CEO\x03\x02\x02\x02\u01CF\u01D0\x07o\x02\x02\u01D0" +
    "Q\x03\x02\x02\x02\u01D1\u01D2\x07p\x02\x02\u01D2S\x03\x02\x02\x02\u01D3" +
    "\u01D4\t\b\x02\x02\u01D4U\x03\x02\x02\x02\u01D5\u01D6\t\t\x02\x02\u01D6" +
    "W\x03\x02\x02\x02%[l\x7F\x84\x8B\x97\x9D\xA4\xAE\xB0\xB8\xC0\xC2\xD2\xD8" +
    "\xE0\xFE\u0108\u010E\u0116\u011E\u012A\u0137\u013E\u0146\u014A\u015F\u016C" +
    "\u0179\u0194\u01A1\u01AF\u01B6\u01C3\u01CB";
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
    week_start_stmt() {
        return this.tryGetRuleContext(0, Week_start_stmtContext);
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
    string() {
        return this.getRuleContext(0, StringContext);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
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
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
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
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
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
    string() {
        return this.getRuleContext(0, StringContext);
    }
    event_time_expr() {
        return this.tryGetRuleContext(0, Event_time_exprContext);
    }
    event_time_strict() {
        return this.getRuleContext(0, Event_time_strictContext);
    }
    repetition_in_decl() {
        return this.tryGetRuleContext(0, Repetition_in_declContext);
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
class Task_declContext extends ParserRuleContext_1.ParserRuleContext {
    string() {
        return this.getRuleContext(0, StringContext);
    }
    event_time_expr() {
        return this.getRuleContext(0, Event_time_exprContext);
    }
    task_time_strict() {
        return this.getRuleContext(0, Task_time_strictContext);
    }
    rep_period() {
        return this.tryGetRuleContext(0, Rep_periodContext);
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
class Repetition_in_declContext extends ParserRuleContext_1.ParserRuleContext {
    weekday() {
        return this.tryGetRuleContext(0, WeekdayContext);
    }
    rep_period() {
        return this.tryGetRuleContext(0, Rep_periodContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_repetition_in_decl; }
    // @Override
    enterRule(listener) {
        if (listener.enterRepetition_in_decl) {
            listener.enterRepetition_in_decl(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRepetition_in_decl) {
            listener.exitRepetition_in_decl(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRepetition_in_decl) {
            return visitor.visitRepetition_in_decl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Repetition_in_declContext = Repetition_in_declContext;
class Task_time_strictContext extends ParserRuleContext_1.ParserRuleContext {
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
    get ruleIndex() { return AionParser.RULE_task_time_strict; }
    // @Override
    enterRule(listener) {
        if (listener.enterTask_time_strict) {
            listener.enterTask_time_strict(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTask_time_strict) {
            listener.exitTask_time_strict(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTask_time_strict) {
            return visitor.visitTask_time_strict(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Task_time_strictContext = Task_time_strictContext;
class Event_time_strictContext extends ParserRuleContext_1.ParserRuleContext {
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
    strategy() {
        return this.tryGetRuleContext(0, StrategyContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_event_time_strict; }
    // @Override
    enterRule(listener) {
        if (listener.enterEvent_time_strict) {
            listener.enterEvent_time_strict(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEvent_time_strict) {
            listener.exitEvent_time_strict(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEvent_time_strict) {
            return visitor.visitEvent_time_strict(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Event_time_strictContext = Event_time_strictContext;
class Event_time_exprContext extends ParserRuleContext_1.ParserRuleContext {
    date() {
        return this.getRuleContext(0, DateContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_event_time_expr; }
    // @Override
    enterRule(listener) {
        if (listener.enterEvent_time_expr) {
            listener.enterEvent_time_expr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEvent_time_expr) {
            listener.exitEvent_time_expr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEvent_time_expr) {
            return visitor.visitEvent_time_expr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Event_time_exprContext = Event_time_exprContext;
class Rep_periodContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_rep_period; }
    // @Override
    enterRule(listener) {
        if (listener.enterRep_period) {
            listener.enterRep_period(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRep_period) {
            listener.exitRep_period(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRep_period) {
            return visitor.visitRep_period(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Rep_periodContext = Rep_periodContext;
class Pomodoro_declContext extends ParserRuleContext_1.ParserRuleContext {
    string() {
        return this.getRuleContext(0, StringContext);
    }
    time() {
        return this.getRuleContext(0, TimeContext);
    }
    number() {
        return this.getRuleContext(0, NumberContext);
    }
    duration(i) {
        if (i === undefined) {
            return this.getRuleContexts(DurationContext);
        }
        else {
            return this.getRuleContext(i, DurationContext);
        }
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
class Structured_event_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
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
    string() {
        return this.tryGetRuleContext(0, StringContext);
    }
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
    number() {
        return this.tryGetRuleContext(0, NumberContext);
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
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
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
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    loop_start() {
        return this.tryGetRuleContext(0, Loop_startContext);
    }
    number() {
        return this.tryGetRuleContext(0, NumberContext);
    }
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
    identifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
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
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
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
    identifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
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
    identifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
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
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    string() {
        return this.tryGetRuleContext(0, StringContext);
    }
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
class Week_start_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    date() {
        return this.getRuleContext(0, DateContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_week_start_stmt; }
    // @Override
    enterRule(listener) {
        if (listener.enterWeek_start_stmt) {
            listener.enterWeek_start_stmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitWeek_start_stmt) {
            listener.exitWeek_start_stmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitWeek_start_stmt) {
            return visitor.visitWeek_start_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Week_start_stmtContext = Week_start_stmtContext;
class ConditionContext extends ParserRuleContext_1.ParserRuleContext {
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    comparison_op() {
        return this.getRuleContext(0, Comparison_opContext);
    }
    value() {
        return this.tryGetRuleContext(0, ValueContext);
    }
    weekday() {
        return this.tryGetRuleContext(0, WeekdayContext);
    }
    number() {
        return this.tryGetRuleContext(0, NumberContext);
    }
    string() {
        return this.tryGetRuleContext(0, StringContext);
    }
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
    string() {
        return this.tryGetRuleContext(0, StringContext);
    }
    number() {
        return this.tryGetRuleContext(0, NumberContext);
    }
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    function_call() {
        return this.tryGetRuleContext(0, Function_callContext);
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
    number(i) {
        if (i === undefined) {
            return this.getRuleContexts(NumberContext);
        }
        else {
            return this.getRuleContext(i, NumberContext);
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
class TimeContext extends ParserRuleContext_1.ParserRuleContext {
    number(i) {
        if (i === undefined) {
            return this.getRuleContexts(NumberContext);
        }
        else {
            return this.getRuleContext(i, NumberContext);
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
class DurationContext extends ParserRuleContext_1.ParserRuleContext {
    number(i) {
        if (i === undefined) {
            return this.getRuleContexts(NumberContext);
        }
        else {
            return this.getRuleContext(i, NumberContext);
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
    string() {
        return this.tryGetRuleContext(0, StringContext);
    }
    number() {
        return this.tryGetRuleContext(0, NumberContext);
    }
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
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
class IdentifierContext extends ParserRuleContext_1.ParserRuleContext {
    Identifier() { return this.getToken(AionParser.Identifier, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_identifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterIdentifier) {
            listener.enterIdentifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIdentifier) {
            listener.exitIdentifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIdentifier) {
            return visitor.visitIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IdentifierContext = IdentifierContext;
class StringContext extends ParserRuleContext_1.ParserRuleContext {
    String() { return this.getToken(AionParser.String, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_string; }
    // @Override
    enterRule(listener) {
        if (listener.enterString) {
            listener.enterString(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitString) {
            listener.exitString(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitString) {
            return visitor.visitString(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StringContext = StringContext;
class NumberContext extends ParserRuleContext_1.ParserRuleContext {
    Number() { return this.getToken(AionParser.Number, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_number; }
    // @Override
    enterRule(listener) {
        if (listener.enterNumber) {
            listener.enterNumber(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNumber) {
            listener.exitNumber(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNumber) {
            return visitor.visitNumber(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NumberContext = NumberContext;
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
class Month_nameContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return AionParser.RULE_month_name; }
    // @Override
    enterRule(listener) {
        if (listener.enterMonth_name) {
            listener.enterMonth_name(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMonth_name) {
            listener.exitMonth_name(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMonth_name) {
            return visitor.visitMonth_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Month_nameContext = Month_nameContext;
