---
sidebar_position: 2
---

Domain Specific Language to execute expressions on the fly. The main objectives:

* Flexibility. Parsing Expression Grammar (PEG) parser is used to expr the expressions
* Multiple variable types.
* Performance.
* Thread safety.

Supported features are:

* Different variable types: boolean, int, long long, float, double, string, datetime
* Arithmetic operations: +, -, *, /
* operations: <, >, <=, >=, == (=), !=
* Condition composition: &&, ||, AND, OR
* Predefined functions: abs, max, min, exp, log, pow, sqrt, sin, cos, etc.
* Predefined constants: pi, e, phi, ln2, ln10, etc.
* Custom functions
* CASE WHEN... THEN... ELSE... END structure

### Case Sensitivity  
***
All comparisons, map lookups both in the library and in the expressions are case sensitive unless the function explicitly says its not. Case insensitive data structures and comparisons are costly for performance which is critical for a library like this.

### Math Operators and Functions
***
**Operators**   
The following are all the supported binary operators: 

|Operator  |lvalue and rvalue  |Description  |Example |
|---       |---                |--------     |---     |
|%	|int, long long, datetime, duration	|Returns the division remainder	|25 % 7|
|*	|int, long long, float, double, datetime, duration	|Multiplication of the lvalue and rvalue	|RADIUS \* RADIUS \* pi|
|+	|int, long long, float, double, datetime, duration	|Addition of the lvalue and rvalue	|AMT_USD + 100.0|
|-	|int, long long, float, double, datetime, duration	|Subtraction of the lvalue and rvalue	|CNT_30D - 5|
|/	|int, long long, float, double, datetime, duration	|Division of the lvalue and rvalue	|(1 / X )+ 100|
