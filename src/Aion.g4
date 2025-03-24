grammar Aion; // Define the grammar name Aion

// Root rule: a program is made of zero or more statements and must end with EOF
program: statement* EOF;

// High-level statement rule, covers all possible top-level instructions
statement
    : import_stmt                 // import external files/modules
    | assignment_stmt             // assign a declaration to an identifier
    | value_assignment_stmt       // assign a value expression to an identifier
    | loop_stmt                   // for-each loop over time units
    | export_stmt                 // export data
    | merge_stmt                  // merge multiple identifiers into one
    | filter_stmt                 // filter data based on a condition
    | include_stmt                // include one set into another
    | conditional_stmt            // if / else-if / else conditional logic
    | structured_event_stmt       // structured event block with fields
    | week_start_stmt             // set the starting week number for an identifier
    | default_declaration         // declare new default events, tasks, or pomodoros
    ;

// Import statement: imports another file and assigns it an alias
import_stmt: 'import' string 'as' identifier ';';

// Assignment of a declaration to a variable
assignment_stmt: identifier '=' declaration ';';

// Assignment of a value (date, time, etc.) to a variable
value_assignment_stmt: identifier '=' value_expr ';';

// Declare an event, task, or pomodoro as default, optionally with 'new'
default_declaration
    : ('new')? (event_decl | task_decl | pomodoro_decl) ';'
    ;

// A declaration could be an event, a task, or a pomodoro
declaration
    : event_decl
    | task_decl
    | pomodoro_decl
    ;

// Basic event declaration with a name and a time expression
event_decl
    : 'event' string event_time_expr event_time_strict
    | 'event' string repetition_in_decl event_time_strict 
    ;

// Task declaration with optional scheduling strategy
task_decl
    : 'task' string event_time_expr rep_period? task_time_strict
    ;

repetition_in_decl
    : 'each' weekday
    | rep_period
    ;

task_time_strict
    : ('at') time
    | 'find between' time 'and' time ('using' strategy)?
    ;

event_time_strict
    : ('at' | 'from') time (('for' duration) | ('to' time))
    | 'find between' time 'and' time ('using' strategy)?
    ;

event_time_expr 
    : 'on' date
    ;

rep_period
    : 'daily' |
    'weekly' |
    'yearly' 
;

// Pomodoro session declaration with repetition and optional pause
pomodoro_decl
    : 'pomodoro' string 'at' time 'repeat' number 'times'
      ('every' duration)?                     // optional interval between sessions
      ('with' duration 'pause')?              // optional pause duration between sessions
    ;

// Structured event statement: allows defining multiple fields in block format
structured_event_stmt
    : 'event' identifier '{' structured_event_field* '}'
    ;

// Define fields of a structured event (name, start time, duration, etc.)
structured_event_field
    : 'name' ':' string ','
    | 'start' ':' time ','
    | 'duration' ':' duration ','
    | 'location' ':' string ','
    | 'category' ':' string ','
    ;

// Loop statement: iterates over a time range or sequence
loop_stmt
    : 'each' loop_unit 'from' loop_start 'to' loop_end ('step' number)? '{' statement* '}'
    ;

// Loop start can be a date, identifier, or "today"
loop_start
    : date
    | identifier
    | 'today'
    ;

// Loop end can be a date, identifier, or an expression involving loop start
loop_end
    : date
    | identifier
    | loop_start '+' number
    ;

// Loop unit specifies the unit of iteration (day, week, month)
loop_unit
    : 'day' | 'days'
    | 'week' | 'weeks'
    | 'month' | 'months'
    ;

// Conditional statement: if-else logic
conditional_stmt
    : 'if' '(' condition ')' '{' statement* '}'
      ('else' 'if' '(' condition ')' '{' statement* '}')*
      ('else' '{' statement* '}')?
    ;

// Filter statement: applies a condition to filter data
filter_stmt
    : 'filter' identifier 'where' condition 'into' identifier ';'
    ;

// Merge statement: merges a list of identifiers into one
merge_stmt
    : 'merge' identifier_list 'into' identifier ';'
    ;

// List of identifiers, separated by commas
identifier_list
    : identifier (',' identifier)*
    ;

// Include statement: includes an identifier within another identifier
include_stmt
    : 'include' identifier 'in' identifier ';'
    ;

// Export statement: exports data to an external source
export_stmt
    : 'export' identifier ('as' string)? ';'
    | 'export' 'default' 'as' string ';'
    | 'export' 'all' ';'
    ;

// Set the starting week number for an identifier
week_start_stmt
    : identifier '=' 'weeknumber' '(' date ')' ';'
    ;

// Condition for comparison (identifier, count, category)
condition
    : identifier comparison_op value
    | 'count' '(' weekday ')' 'in' 'month' comparison_op number
    | 'category' comparison_op string
    ;

// Comparison operators for conditions
comparison_op
    : '==' | '!=' | '<' | '<=' | '>' | '>='
    ;

// Strategy options for scheduling tasks (random, earliest, latest)
strategy
    : 'random' | 'earliest' | 'latest'
    ;

// Value expressions (date, time, string, number, etc.)
value_expr
    : date
    | time
    | duration
    | string
    | number
    | identifier
    | function_call
    ;

// Function calls (count occurrences or get the week number for a date)
function_call
    : 'count' '(' weekday ')' 'in' 'month'
    | 'weeknumber' '(' date ')'
    ;

// Primitives and Terminals

// Date format (e.g., 2024.03 or 2024.03.24)
date
    : number '.' number ('.' number)?   
    ;

// Time format (HH:MM)
time
    : number ':' number                 
    ;

// Duration format (e.g., 2h, 3m, 5h 30m)
duration
    : number time_unit (number time_unit)*
    ;

// Time units (hours or minutes)
time_unit
    : 'h' | 'm'
    ;

// Values can be a string, number, identifier, etc.
value
    : string
    | number
    | identifier
    ;

// Identifier: names for variables, events, tasks, etc.
identifier
    : Identifier
    ;

// String: double-quoted string literals
string
    : String
    ;

// Number: integers
number
    : Number
    ;

// Weekday: days of the week (both full and abbreviated names)
weekday
    : 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'
    | 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun'
    ;

// Month names (both full and abbreviated)
month_name
    : 'January' | 'February' | 'March' | 'April' | 'May' | 'June'
    | 'July' | 'August' | 'September' | 'October' | 'November' | 'December'
    | 'Jan' | 'Feb' | 'Mar' | 'Apr' | 'May' | 'Jun'
    | 'Jul' | 'Aug' | 'Sep' | 'Oct' | 'Nov' | 'Dec'
    ;

// Lexer Rules

// Identifier: starts with a letter or underscore, followed by letters, digits, or underscores
Identifier
    : [a-zA-Z_] [a-zA-Z0-9_]*
    ;

// String: double-quoted string literals
String
    : '"' (~["\\] | '\\' .)* '"'
    ;

// Number: integer numbers
Number
    : [0-9]+
    ;

// Whitespace: skip spaces, tabs, and newlines
WS
    : [ \t\r\n]+ -> skip
    ;

// Single-line comments: skip anything after // until the end of the line
LINE_COMMENT
    : '//' ~[\r\n]* -> skip
    ;
