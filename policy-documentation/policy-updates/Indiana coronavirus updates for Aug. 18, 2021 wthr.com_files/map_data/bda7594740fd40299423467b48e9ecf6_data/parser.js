// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ./assert ./error-handler ./messages ./nodes ./scanner ./syntax ./token".split(" "),function(r,q,u,g,f,v,m,w){let z=function(){function t(a,b={},c){this.config={range:"boolean"===typeof b.range&&b.range,loc:"boolean"===typeof b.loc&&b.loc,source:null,tokens:"boolean"===typeof b.tokens&&b.tokens,comment:"boolean"===typeof b.comment&&b.comment,tolerant:"boolean"===typeof b.tolerant&&b.tolerant};this.config.loc&&b.source&&null!==b.source&&(this.config.source=String(b.source));this.delegate=
c;this.errorHandler=new u.ErrorHandler;this.errorHandler.tolerant=this.config.tolerant;this.scanner=new v.Scanner(a,this.errorHandler);this.scanner.trackComment=this.config.comment;this.operatorPrecedence={")":0,";":0,",":0,"\x3d":0,"]":0,"||":1,"\x26\x26":2,"|":3,"^":4,"\x26":5,"\x3d\x3d":6,"!\x3d":6,"\x3d\x3d\x3d":6,"!\x3d\x3d":6,"\x3c":7,"\x3e":7,"\x3c\x3d":7,"\x3e\x3d":7,"\x3c\x3c":8,"\x3e\x3e":8,"\x3e\x3e\x3e":8,"+":9,"-":9,"*":11,"/":11,"%":11};this.lookahead={type:2,value:"",lineNumber:this.scanner.lineNumber,
lineStart:0,start:0,end:0};this.hasLineTerminator=!1;this.context={isModule:!1,allowIn:!0,allowStrictDirective:!0,firstCoverInitializedNameError:null,isAssignmentTarget:!1,isBindingElement:!1,inFunctionBody:!1,inIteration:!1,inSwitch:!1,labelSet:{},strict:!1};this.tokens=[];this.startMarker={index:0,line:this.scanner.lineNumber,column:0};this.lastMarker={index:0,line:this.scanner.lineNumber,column:0};this.nextToken();this.lastMarker={index:this.scanner.index,line:this.scanner.lineNumber,column:this.scanner.index-
this.scanner.lineStart}}var e=t.prototype;e.throwError=function(a,...b){const c=b.slice();a=a.replace(/%(\d)/g,(d,k)=>{q.assert(k<c.length,"Message reference must be in range");return c[k]});throw this.errorHandler.createError(this.lastMarker.index,this.lastMarker.line,this.lastMarker.column+1,a);};e.tolerateError=function(a,...b){const c=b.slice();a=a.replace(/%(\d)/g,(d,k)=>{q.assert(k<c.length,"Message reference must be in range");return c[k]});this.errorHandler.tolerateError(this.lastMarker.index,
this.scanner.lineNumber,this.lastMarker.column+1,a)};e.unexpectedTokenError=function(a,b){let c=b||g.Messages.UnexpectedToken;a?(b||(c=2===a.type?g.Messages.UnexpectedEOS:3===a.type?g.Messages.UnexpectedIdentifier:6===a.type?g.Messages.UnexpectedNumber:8===a.type?g.Messages.UnexpectedString:10===a.type?g.Messages.UnexpectedTemplate:g.Messages.UnexpectedToken,4===a.type&&(this.scanner.isFutureReservedWord(a.value)?c=g.Messages.UnexpectedReserved:this.context.strict&&this.scanner.isStrictModeReservedWord(a.value)&&
(c=g.Messages.StrictReservedWord))),b=a.value):b="ILLEGAL";c=c.replace("%0",b);return a&&"number"===typeof a.lineNumber?this.errorHandler.createError(a.start,a.lineNumber,a.start-(this.lastMarker.index-this.lastMarker.column)+1,c):this.errorHandler.createError(this.lastMarker.index,this.lastMarker.line,this.lastMarker.column+1,c)};e.throwUnexpectedToken=function(a,b){throw this.unexpectedTokenError(a,b);};e.tolerateUnexpectedToken=function(a,b){this.errorHandler.tolerate(this.unexpectedTokenError(a,
b))};e.collectComments=function(){if(this.config.comment){const a=this.scanner.scanComments();if(0<a.length&&this.delegate)for(let b=0;b<a.length;++b){const c=a[b],d={type:c.multiLine?"BlockComment":"LineComment",value:this.scanner.source.slice(c.slice[0],c.slice[1])};this.config.range&&(d.range=c.range);this.config.loc&&(d.loc=c.loc);this.delegate(d,{start:{line:c.loc.start.line,column:c.loc.start.column,offset:c.range[0]},end:{line:c.loc.end.line,column:c.loc.end.column,offset:c.range[1]}})}}else this.scanner.scanComments()};
e.getTokenRaw=function(a){return this.scanner.source.slice(a.start,a.end)};e.convertToken=function(a){const b={type:w.TokenName[a.type],value:this.getTokenRaw(a)};this.config.range&&(b.range=[a.start,a.end]);this.config.loc&&(b.loc={start:{line:this.startMarker.line,column:this.startMarker.column},end:{line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart}});9===a.type&&(b.regex={pattern:a.pattern,flags:a.flags});return b};e.nextToken=function(){const a=this.lookahead;this.lastMarker.index=
this.scanner.index;this.lastMarker.line=this.scanner.lineNumber;this.lastMarker.column=this.scanner.index-this.scanner.lineStart;this.collectComments();this.scanner.index!==this.startMarker.index&&(this.startMarker.index=this.scanner.index,this.startMarker.line=this.scanner.lineNumber,this.startMarker.column=this.scanner.index-this.scanner.lineStart);const b=this.scanner.lex();this.hasLineTerminator=a.lineNumber!==b.lineNumber;b&&this.context.strict&&3===b.type&&this.scanner.isStrictModeReservedWord(b.value)&&
(b.type=4);this.lookahead=b;this.config.tokens&&2!==b.type&&this.tokens.push(this.convertToken(b));return a};e.nextRegexToken=function(){this.collectComments();const a=this.scanner.scanRegExp();this.config.tokens&&(this.tokens.pop(),this.tokens.push(this.convertToken(a)));this.lookahead=a;this.nextToken();return a};e.createNode=function(){return{index:this.startMarker.index,line:this.startMarker.line,column:this.startMarker.column}};e.startNode=function(a,b=0){let c=a.start-a.lineStart,d=a.lineNumber;
0>c&&(c+=b,d--);return{index:a.start,line:d,column:c}};e.finalize=function(a,b){this.config.range&&(b.range=[a.index,this.lastMarker.index]);this.config.loc&&(b.loc={start:{line:a.line,column:a.column},end:{line:this.lastMarker.line,column:this.lastMarker.column}},this.config.source&&(b.loc.source=this.config.source));this.delegate&&this.delegate(b,{start:{line:a.line,column:a.column,offset:a.index},end:{line:this.lastMarker.line,column:this.lastMarker.column,offset:this.lastMarker.index}});return b};
e.expect=function(a){const b=this.nextToken();7===b.type&&b.value===a||this.throwUnexpectedToken(b)};e.expectCommaSeparator=function(){if(this.config.tolerant){const a=this.lookahead;7===a.type&&","===a.value?this.nextToken():7===a.type&&";"===a.value?(this.nextToken(),this.tolerateUnexpectedToken(a)):this.tolerateUnexpectedToken(a,g.Messages.UnexpectedToken)}else this.expect(",")};e.expectKeyword=function(a){const b=this.nextToken();4===b.type&&b.value.toLowerCase()===a.toLowerCase()||this.throwUnexpectedToken(b)};
e.match=function(a){return 7===this.lookahead.type&&this.lookahead.value===a};e.matchKeyword=function(a){return 4===this.lookahead.type&&this.lookahead.value.toLowerCase()===a.toLowerCase()};e.matchContextualKeyword=function(a){return 3===this.lookahead.type&&this.lookahead.value===a};e.matchAssign=function(){if(7!==this.lookahead.type)return!1;const a=this.lookahead.value;return"\x3d"===a||"*\x3d"===a||"**\x3d"===a||"/\x3d"===a||"%\x3d"===a||"+\x3d"===a||"-\x3d"===a||"\x3c\x3c\x3d"===a||"\x3e\x3e\x3d"===
a||"\x3e\x3e\x3e\x3d"===a||"\x26\x3d"===a||"^\x3d"===a||"|\x3d"===a};e.isolateCoverGrammar=function(a){const b=this.context.isBindingElement,c=this.context.isAssignmentTarget,d=this.context.firstCoverInitializedNameError;this.context.isBindingElement=!0;this.context.isAssignmentTarget=!0;this.context.firstCoverInitializedNameError=null;a=a.call(this);null!==this.context.firstCoverInitializedNameError&&this.throwUnexpectedToken(this.context.firstCoverInitializedNameError);this.context.isBindingElement=
b;this.context.isAssignmentTarget=c;this.context.firstCoverInitializedNameError=d;return a};e.inheritCoverGrammar=function(a){const b=this.context.isBindingElement,c=this.context.isAssignmentTarget,d=this.context.firstCoverInitializedNameError;this.context.isBindingElement=!0;this.context.isAssignmentTarget=!0;this.context.firstCoverInitializedNameError=null;a=a.call(this);this.context.isBindingElement=this.context.isBindingElement&&b;this.context.isAssignmentTarget=this.context.isAssignmentTarget&&
c;this.context.firstCoverInitializedNameError=d||this.context.firstCoverInitializedNameError;return a};e.consumeSemicolon=function(){this.match(";")?this.nextToken():this.hasLineTerminator||(2===this.lookahead.type||this.match("}")||this.throwUnexpectedToken(this.lookahead),this.lastMarker.index=this.startMarker.index,this.lastMarker.line=this.startMarker.line,this.lastMarker.column=this.startMarker.column)};e.parsePrimaryExpression=function(){var a=this.createNode();let b,c;switch(this.lookahead.type){case 3:a=
this.finalize(a,new f.Identifier(this.nextToken().value));break;case 6:case 8:this.context.strict&&this.lookahead.octal&&this.tolerateUnexpectedToken(this.lookahead,g.Messages.StrictOctalLiteral);this.context.isAssignmentTarget=!1;this.context.isBindingElement=!1;b=this.nextToken();c=this.getTokenRaw(b);a=this.finalize(a,new f.Literal(b.value,c));break;case 1:this.context.isAssignmentTarget=!1;this.context.isBindingElement=!1;b=this.nextToken();c=this.getTokenRaw(b);a=this.finalize(a,new f.Literal("true"===
b.value.toLowerCase(),c));break;case 5:this.context.isAssignmentTarget=!1;this.context.isBindingElement=!1;b=this.nextToken();c=this.getTokenRaw(b);a=this.finalize(a,new f.Literal(null,c));break;case 10:a=this.parseTemplateLiteral();break;case 7:switch(this.lookahead.value){case "(":this.context.isBindingElement=!1;a=this.inheritCoverGrammar(this.parseGroupExpression);break;case "[":a=this.inheritCoverGrammar(this.parseArrayInitializer);break;case "{":a=this.inheritCoverGrammar(this.parseObjectInitializer);
break;default:a=this.throwUnexpectedToken(this.nextToken())}break;case 4:this.context.isAssignmentTarget=!1;this.context.isBindingElement=!1;a=this.matchKeyword("function")?this.parseFunctionExpression():this.throwUnexpectedToken(this.nextToken());break;default:a=this.throwUnexpectedToken(this.nextToken())}return a};e.parseArrayInitializer=function(){const a=this.createNode(),b=[];for(this.expect("[");!this.match("]");)this.match(",")?(this.nextToken(),b.push(null)):(b.push(this.inheritCoverGrammar(this.parseAssignmentExpression)),
this.match("]")||this.expect(","));this.expect("]");return this.finalize(a,new f.ArrayExpression(b))};e.parsePropertyMethod=function(a){this.context.isAssignmentTarget=!1;this.context.isBindingElement=!1;const b=this.context.strict,c=this.context.allowStrictDirective;this.context.allowStrictDirective=a.simple;const d=this.isolateCoverGrammar(this.parseFunctionSourceElements);this.context.strict&&a.firstRestricted&&this.tolerateUnexpectedToken(a.firstRestricted,a.message);this.context.strict&&a.stricted&&
this.tolerateUnexpectedToken(a.stricted,a.message);this.context.strict=b;this.context.allowStrictDirective=c;return d};e.parsePropertyMethodFunction=function(){const a=this.createNode(),b=this.parseFormalParameters(),c=this.parsePropertyMethod(b);return this.finalize(a,new f.FunctionExpression(null,b.params,c,!1))};e.parseObjectPropertyKey=function(){var a=this.createNode();const b=this.nextToken();switch(b.type){case 8:case 6:{this.context.strict&&b.octal&&this.tolerateUnexpectedToken(b,g.Messages.StrictOctalLiteral);
const c=this.getTokenRaw(b);a=this.finalize(a,new f.Literal(b.value,c));break}case 3:case 1:case 5:case 4:a=this.finalize(a,new f.Identifier(b.value));break;case 7:"["===b.value?(a=this.isolateCoverGrammar(this.parseAssignmentExpression),this.expect("]")):a=this.throwUnexpectedToken(b);break;default:a=this.throwUnexpectedToken(b)}return a};e.isPropertyKey=function(a,b){return a.type===m.Syntax.Identifier&&a.name===b||a.type===m.Syntax.Literal&&a.value===b};e.parseObjectProperty=function(a){const b=
this.createNode();var c=this.lookahead,d=null;let k=null,h=!1,l=!1,n=!1,p=!1;3===c.type?(d=c.value,this.nextToken(),h=this.match("["),d=(p=!this.hasLineTerminator&&"async"===d&&!this.match(":")&&!this.match("(")&&!this.match("*")&&!this.match(","))?this.parseObjectPropertyKey():this.finalize(b,new f.Identifier(d))):this.match("*")?this.nextToken():(h=this.match("["),d=this.parseObjectPropertyKey());d||this.throwUnexpectedToken(this.lookahead);this.match(":")&&!p?(!h&&this.isPropertyKey(d,"__proto__")&&
(a.value&&this.tolerateError(g.Messages.DuplicateProtoProperty),a.value=!0),this.nextToken(),k=this.inheritCoverGrammar(this.parseAssignmentExpression)):this.match("(")?(k=this.parsePropertyMethodFunction(),l=!0):3===c.type?(a=this.finalize(b,new f.Identifier(c.value)),this.match("\x3d")?(this.context.firstCoverInitializedNameError=this.lookahead,this.nextToken(),n=!0,c=this.isolateCoverGrammar(this.parseAssignmentExpression),k=this.finalize(b,new f.AssignmentPattern(a,c))):(n=!0,k=a)):this.throwUnexpectedToken(this.nextToken());
return this.finalize(b,new f.Property("init",d,h,k,l,n))};e.parseObjectInitializer=function(){const a=this.createNode();this.expect("{");const b=[],c={value:!1};for(;!this.match("}");)b.push(this.parseObjectProperty(c)),this.match("}")||this.expectCommaSeparator();this.expect("}");return this.finalize(a,new f.ObjectExpression(b))};e.parseTemplateHead=function(){q.assert(this.lookahead.head,"Template literal must start with a template head");const a=this.createNode(),b=this.nextToken();return this.finalize(a,
new f.TemplateElement({raw:b.value,cooked:b.cooked},b.tail))};e.parseTemplateElement=function(){10!==this.lookahead.type&&this.throwUnexpectedToken();const a=this.createNode(),b=this.nextToken();return this.finalize(a,new f.TemplateElement({raw:b.value,cooked:b.cooked},b.tail))};e.parseTemplateLiteral=function(){const a=this.createNode(),b=[],c=[];let d=this.parseTemplateHead();for(c.push(d);!d.tail;)b.push(this.parseExpression()),d=this.parseTemplateElement(),c.push(d);return this.finalize(a,new f.TemplateLiteral(c,
b))};e.reinterpretExpressionAsPattern=function(a){switch(a.type){case m.Syntax.ArrayExpression:a.type=m.Syntax.ArrayPattern;for(var b=0;b<a.elements.length;b++)null!==a.elements[b]&&this.reinterpretExpressionAsPattern(a.elements[b]);break;case m.Syntax.ObjectExpression:a.type=m.Syntax.ObjectPattern;for(b=0;b<a.properties.length;b++)this.reinterpretExpressionAsPattern(a.properties[b].value);break;case m.Syntax.AssignmentExpression:a.type=m.Syntax.AssignmentPattern,delete a.operator,this.reinterpretExpressionAsPattern(a.left)}};
e.parseGroupExpression=function(){this.expect("(");if(this.match(")")){this.nextToken();this.match("\x3d\x3e")||this.expect("\x3d\x3e");var a={type:"ArrowParameterPlaceHolder",params:[],async:!1}}else{var b=this.lookahead;let c=!1;this.context.isBindingElement=!0;a=this.inheritCoverGrammar(this.parseAssignmentExpression);if(this.match(",")){const d=[];this.context.isAssignmentTarget=!1;for(d.push(a);2!==this.lookahead.type&&this.match(",");){this.nextToken();if(this.match(")")){this.nextToken();for(a=
0;a<d.length;a++)this.reinterpretExpressionAsPattern(d[a]);c=!0;a={type:"ArrowParameterPlaceHolder",params:d,async:!1}}else d.push(this.inheritCoverGrammar(this.parseAssignmentExpression));if(c)break}c||(a=this.finalize(this.startNode(b),new f.SequenceExpression(d)))}if(!c){this.expect(")");if(this.match("\x3d\x3e")&&(a.type===m.Syntax.Identifier&&"yield"===a.name&&(c=!0,a={type:"ArrowParameterPlaceHolder",params:[a],async:!1}),!c)){this.context.isBindingElement||this.throwUnexpectedToken(this.lookahead);
if(a.type===m.Syntax.SequenceExpression)for(b=0;b<a.expressions.length;b++)this.reinterpretExpressionAsPattern(a.expressions[b]);else this.reinterpretExpressionAsPattern(a);a={type:"ArrowParameterPlaceHolder",params:a.type===m.Syntax.SequenceExpression?a.expressions:[a],async:!1}}this.context.isBindingElement=!1}}return a};e.parseArguments=function(){this.expect("(");const a=[];if(!this.match(")"))for(;;){const b=this.isolateCoverGrammar(this.parseAssignmentExpression);a.push(b);if(this.match(")"))break;
this.expectCommaSeparator();if(this.match(")"))break}this.expect(")");return a};e.isIdentifierName=function(a){return 3===a.type||4===a.type||1===a.type||5===a.type};e.parseIdentifierName=function(){const a=this.createNode(),b=this.nextToken();this.isIdentifierName(b)||this.throwUnexpectedToken(b);return this.finalize(a,new f.Identifier(b.value))};e.parseLeftHandSideExpressionAllowCall=function(){const a=this.lookahead,b=this.context.allowIn;this.context.allowIn=!0;let c;for(c=this.inheritCoverGrammar(this.parsePrimaryExpression);;)if(this.match(".")){this.context.isBindingElement=
!1;this.context.isAssignmentTarget=!0;this.expect(".");var d=this.parseIdentifierName();c=this.finalize(this.startNode(a),new f.StaticMemberExpression(c,d))}else if(this.match("("))this.context.isBindingElement=!1,this.context.isAssignmentTarget=!1,d=this.parseArguments(),c=this.finalize(this.startNode(a),new f.CallExpression(c,d));else if(this.match("["))this.context.isBindingElement=!1,this.context.isAssignmentTarget=!0,this.expect("["),d=this.isolateCoverGrammar(this.parseExpression),this.expect("]"),
c=this.finalize(this.startNode(a),new f.ComputedMemberExpression(c,d));else break;this.context.allowIn=b;return c};e.parseLeftHandSideExpression=function(){q.assert(this.context.allowIn,"callee of new expression always allow in keyword.");const a=this.startNode(this.lookahead);let b=this.inheritCoverGrammar(this.parsePrimaryExpression);for(;;)if(this.match("[")){this.context.isBindingElement=!1;this.context.isAssignmentTarget=!0;this.expect("[");var c=this.isolateCoverGrammar(this.parseExpression);
this.expect("]");b=this.finalize(a,new f.ComputedMemberExpression(b,c))}else if(this.match("."))this.context.isBindingElement=!1,this.context.isAssignmentTarget=!0,this.expect("."),c=this.parseIdentifierName(),b=this.finalize(a,new f.StaticMemberExpression(b,c));else break;return b};e.parseUpdateExpression=function(){let a;var b=this.lookahead;if(this.match("++")||this.match("--")){b=this.startNode(b);var c=this.nextToken();a=this.inheritCoverGrammar(this.parseUnaryExpression);this.context.strict&&
a.type===m.Syntax.Identifier&&this.scanner.isRestrictedWord(a.name)&&this.tolerateError(g.Messages.StrictLHSPrefix);this.context.isAssignmentTarget||this.tolerateError(g.Messages.InvalidLHSInAssignment);a=this.finalize(b,new f.UpdateExpression(c.value,a,!0));this.context.isAssignmentTarget=!1;this.context.isBindingElement=!1}else a=this.inheritCoverGrammar(this.parseLeftHandSideExpressionAllowCall),this.hasLineTerminator||7!==this.lookahead.type||!this.match("++")&&!this.match("--")||(this.context.strict&&
a.type===m.Syntax.Identifier&&this.scanner.isRestrictedWord(a.name)&&this.tolerateError(g.Messages.StrictLHSPostfix),this.context.isAssignmentTarget||this.tolerateError(g.Messages.InvalidLHSInAssignment),this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1,c=this.nextToken().value,a=this.finalize(this.startNode(b),new f.UpdateExpression(c,a,!1)));return a};e.parseUnaryExpression=function(){let a;if(this.match("+")||this.match("-")||this.match("~")||this.match("!")||this.matchKeyword("delete")||
this.matchKeyword("void")||this.matchKeyword("typeof")){const b=this.startNode(this.lookahead),c=this.nextToken();a=this.inheritCoverGrammar(this.parseUnaryExpression);a=this.finalize(b,new f.UnaryExpression(c.value,a));this.context.strict&&"delete"===a.operator&&a.argument.type===m.Syntax.Identifier&&this.tolerateError(g.Messages.StrictDelete);this.context.isAssignmentTarget=!1;this.context.isBindingElement=!1}else a=this.parseUpdateExpression();return a};e.parseExponentiationExpression=function(){const a=
this.lookahead;var b=this.inheritCoverGrammar(this.parseUnaryExpression);if(b.type!==m.Syntax.UnaryExpression&&this.match("**")){this.nextToken();this.context.isAssignmentTarget=!1;this.context.isBindingElement=!1;const c=this.isolateCoverGrammar(this.parseExponentiationExpression);b=this.finalize(this.startNode(a),new f.BinaryExpression("**",b,c))}return b};e.binaryPrecedence=function(a){const b=a.value;return 7===a.type?this.operatorPrecedence[b]||0:4===a.type?"instanceof"===b||this.context.allowIn&&
"in"===b?7:0:0};e.parseBinaryExpression=function(){var a=this.lookahead,b=this.inheritCoverGrammar(this.parseExponentiationExpression),c=this.lookahead,d=this.binaryPrecedence(c);if(0<d){this.nextToken();this.context.isAssignmentTarget=!1;this.context.isBindingElement=!1;a=[a,this.lookahead];var k=this.isolateCoverGrammar(this.parseExponentiationExpression);c=[b,c.value,k];for(var h=[d];;){d=this.binaryPrecedence(this.lookahead);if(0>=d)break;for(;2<c.length&&d<=h[h.length-1];){k=c.pop();const n=
c.pop();h.pop();b=c.pop();a.pop();var l=a[a.length-1];l=this.startNode(l,l.lineStart);c.push(this.finalize(l,new f.BinaryExpression(n,b,k)))}c.push(this.nextToken().value);h.push(d);a.push(this.lookahead);c.push(this.isolateCoverGrammar(this.parseExponentiationExpression))}d=c.length-1;b=c[d];for(h=a.pop();1<d;)k=a.pop(),h=this.startNode(k,h&&h.lineStart),b=this.finalize(h,new f.BinaryExpression(c[d-1],c[d-2],b)),d-=2,h=k}return b};e.parseConditionalExpression=function(){const a=this.lookahead;let b=
this.inheritCoverGrammar(this.parseBinaryExpression);if(this.match("?")){this.nextToken();var c=this.context.allowIn;this.context.allowIn=!0;const d=this.isolateCoverGrammar(this.parseAssignmentExpression);this.context.allowIn=c;this.expect(":");c=this.isolateCoverGrammar(this.parseAssignmentExpression);b=this.finalize(this.startNode(a),new f.ConditionalExpression(b,d,c));this.context.isAssignmentTarget=!1;this.context.isBindingElement=!1}return b};e.checkPatternParam=function(a,b){switch(b.type){case m.Syntax.Identifier:this.validateParam(a,
b,b.name);break;case m.Syntax.AssignmentPattern:this.checkPatternParam(a,b.left);break;case m.Syntax.ArrayPattern:for(var c=0;c<b.elements.length;c++)null!==b.elements[c]&&this.checkPatternParam(a,b.elements[c]);break;case m.Syntax.ObjectPattern:for(c=0;c<b.properties.length;c++)this.checkPatternParam(a,b.properties[c].value)}a.simple=a.simple&&b instanceof f.Identifier};e.reinterpretAsCoverFormalsList=function(a){const b=[a],c={simple:!0,paramSet:{}};switch(a.type){case m.Syntax.Identifier:break;
default:return null}for(a=0;a<b.length;++a){const d=b[a];this.checkPatternParam(c,d);b[a]=d}c.message===g.Messages.StrictParamDupe&&this.throwUnexpectedToken(this.context.strict?c.stricted:c.firstRestricted,c.message);return{simple:c.simple,params:b,stricted:c.stricted,firstRestricted:c.firstRestricted,message:c.message}};e.parseAssignmentExpression=function(){let a;const b=this.lookahead;var c=b;a=this.parseConditionalExpression();if(this.matchAssign()){this.context.isAssignmentTarget||this.tolerateError(g.Messages.InvalidLHSInAssignment);
if(this.context.strict&&a.type===m.Syntax.Identifier){var d=a;this.scanner.isRestrictedWord(d.name)&&this.tolerateUnexpectedToken(c,g.Messages.StrictLHSAssignment);this.scanner.isStrictModeReservedWord(d.name)&&this.tolerateUnexpectedToken(c,g.Messages.StrictReservedWord)}this.match("\x3d")?this.reinterpretExpressionAsPattern(a):(this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1);c=this.nextToken();c=c.value;d=this.isolateCoverGrammar(this.parseAssignmentExpression);a=this.finalize(this.startNode(b),
new f.AssignmentExpression(c,a,d));this.context.firstCoverInitializedNameError=null}return a};e.parseExpression=function(){const a=this.lookahead;let b=this.isolateCoverGrammar(this.parseAssignmentExpression);if(this.match(",")){const c=[];for(c.push(b);2!==this.lookahead.type&&this.match(",");)this.nextToken(),c.push(this.isolateCoverGrammar(this.parseAssignmentExpression));b=this.finalize(this.startNode(a),new f.SequenceExpression(c))}return b};e.parseStatementListItem=function(){let a;this.context.isAssignmentTarget=
!0;this.context.isBindingElement=!0;if(4===this.lookahead.type)switch(this.lookahead.value){case "function":a=this.parseFunctionDeclaration();break;default:a=this.parseStatement()}else a=this.parseStatement();return a};e.parseBlock=function(){const a=this.createNode();this.expect("{");const b=[];for(;!this.match("}");)b.push(this.parseStatementListItem());this.expect("}");return this.finalize(a,new f.BlockStatement(b))};e.parseBlockOrObjectInitialiser=function(){const a=this.createNode();this.expect("{");
if(3===this.lookahead.type||8===this.lookahead.type){var b=this.scanner.saveState();this.scanner.scanComments();var c=this.scanner.lex();this.scanner.restoreState(b);if(7===c.type&&":"===c.value){b=[];for(c={value:!1};!this.match("}");)b.push(this.parseObjectProperty(c)),this.match("}")||this.expectCommaSeparator();this.expect("}");return this.finalize(a,new f.ObjectExpression(b))}}for(b=[];!this.match("}");)b.push(this.parseStatementListItem());this.expect("}");return this.finalize(a,new f.BlockStatement(b))};
e.parseLexicalBinding=function(a,b){const c=this.createNode();a=this.parsePattern([],a);this.context.strict&&a.type===m.Syntax.Identifier&&this.scanner.isRestrictedWord(a.name)&&this.tolerateError(g.Messages.StrictVarName);let d=null;if(!b.inFor&&a.type!==m.Syntax.Identifier||this.match("\x3d"))this.expect("\x3d"),d=this.isolateCoverGrammar(this.parseAssignmentExpression);return this.finalize(c,new f.VariableDeclarator(a,d))};e.parseBindingList=function(a,b){const c=[this.parseLexicalBinding(a,b)];
for(;this.match(",");)this.nextToken(),c.push(this.parseLexicalBinding(a,b));return c};e.parseArrayPattern=function(a,b){const c=this.createNode();this.expect("[");const d=[];for(;!this.match("]");)this.match(",")?(this.nextToken(),d.push(null)):(d.push(this.parsePatternWithDefault(a,b)),this.match("]")||this.expect(","));this.expect("]");return this.finalize(c,new f.ArrayPattern(d))};e.parsePropertyPattern=function(a,b){const c=this.createNode();let d=!1,k=!1,h;if(3===this.lookahead.type){var l=
this.lookahead;h=this.parseVariableIdentifier();const n=this.finalize(c,new f.Identifier(l.value));this.match("\x3d")?(a.push(l),k=!0,this.nextToken(),a=this.parseAssignmentExpression(),l=this.finalize(this.startNode(l),new f.AssignmentPattern(n,a))):this.match(":")?(this.expect(":"),l=this.parsePatternWithDefault(a,b)):(a.push(l),k=!0,l=n)}else d=this.match("["),h=this.parseObjectPropertyKey(),this.expect(":"),l=this.parsePatternWithDefault(a,b);return this.finalize(c,new f.Property("init",h,d,l,
!1,k))};e.parseObjectPattern=function(a,b){const c=this.createNode(),d=[];for(this.expect("{");!this.match("}");)d.push(this.parsePropertyPattern(a,b)),this.match("}")||this.expect(",");this.expect("}");return this.finalize(c,new f.ObjectPattern(d))};e.parsePattern=function(a,b){this.match("[")?a=this.parseArrayPattern(a,b):this.match("{")?a=this.parseObjectPattern(a,b):(!this.matchKeyword("let")||"const"!==b&&"let"!==b||this.tolerateUnexpectedToken(this.lookahead,g.Messages.LetInLexicalBinding),
a.push(this.lookahead),a=this.parseVariableIdentifier(b));return a};e.parsePatternWithDefault=function(a,b){const c=this.lookahead;a=this.parsePattern(a,b);this.match("\x3d")&&(this.nextToken(),b=this.isolateCoverGrammar(this.parseAssignmentExpression),a=this.finalize(this.startNode(c),new f.AssignmentPattern(a,b)));return a};e.parseVariableIdentifier=function(a){const b=this.createNode(),c=this.nextToken();3!==c.type&&(this.context.strict&&4===c.type&&this.scanner.isStrictModeReservedWord(c.value)?
this.tolerateUnexpectedToken(c,g.Messages.StrictReservedWord):(this.context.strict||"let"!==c.value||"var"!==a)&&this.throwUnexpectedToken(c));return this.finalize(b,new f.Identifier(c.value))};e.parseVariableDeclaration=function(a){const b=this.createNode(),c=this.parsePattern([],"var");this.context.strict&&c.type===m.Syntax.Identifier&&this.scanner.isRestrictedWord(c.name)&&this.tolerateError(g.Messages.StrictVarName);let d=null;this.match("\x3d")?(this.nextToken(),d=this.isolateCoverGrammar(this.parseAssignmentExpression)):
c.type===m.Syntax.Identifier||a.inFor||this.expect("\x3d");return this.finalize(b,new f.VariableDeclarator(c,d))};e.parseVariableDeclarationList=function(a){a={inFor:a.inFor};const b=[];for(b.push(this.parseVariableDeclaration(a));this.match(",");)this.nextToken(),b.push(this.parseVariableDeclaration(a));return b};e.parseVariableStatement=function(){const a=this.createNode();this.expectKeyword("var");const b=this.parseVariableDeclarationList({inFor:!1});this.consumeSemicolon();return this.finalize(a,
new f.VariableDeclaration(b,"var"))};e.parseEmptyStatement=function(){const a=this.createNode();this.expect(";");return this.finalize(a,new f.EmptyStatement)};e.parseExpressionStatement=function(){const a=this.createNode(),b=this.parseExpression();this.consumeSemicolon();return this.finalize(a,new f.ExpressionStatement(b))};e.parseIfClause=function(){this.context.strict&&this.matchKeyword("function")&&this.tolerateError(g.Messages.StrictFunction);return this.parseStatement(!0)};e.parseIfStatement=
function(){const a=this.createNode();let b,c=null;this.expectKeyword("if");this.expect("(");const d=this.parseExpression();!this.match(")")&&this.config.tolerant?(this.tolerateUnexpectedToken(this.nextToken()),b=this.finalize(this.createNode(),new f.EmptyStatement)):(this.expect(")"),b=this.parseIfClause(),this.matchKeyword("else")&&(this.nextToken(),c=this.parseIfClause()));return this.finalize(a,new f.IfStatement(d,b,c))};e.parseForStatement=function(){var a=null;let b=null,c=null;let d;const k=
this.createNode();this.expectKeyword("for");this.expect("(");if(this.match(";"))this.nextToken();else if(this.matchKeyword("var")){a=this.createNode();this.nextToken();var h=this.context.allowIn;this.context.allowIn=!1;var l=this.parseVariableDeclarationList({inFor:!0});this.context.allowIn=h;if(1===l.length&&this.matchKeyword("in")){var n=l[0];n.init&&(n.id.type===m.Syntax.ArrayPattern||n.id.type===m.Syntax.ObjectPattern||this.context.strict)&&this.tolerateError(g.Messages.ForInOfLoopInitializer,
"for-in");a=this.finalize(a,new f.VariableDeclaration(l,"var"));this.nextToken();n=a;d=this.parseExpression();a=null}else 1===l.length&&null===l[0].init&&this.matchContextualKeyword("of")?(a=this.finalize(a,new f.VariableDeclaration(l,"var")),this.nextToken(),n=a,d=this.parseAssignmentExpression(),a=null):(a=this.finalize(a,new f.VariableDeclaration(l,"var")),this.expect(";"))}else{l=this.lookahead;h=this.context.isBindingElement;const p=this.context.isAssignmentTarget,x=this.context.firstCoverInitializedNameError,
y=this.context.allowIn;this.context.allowIn=!1;a=this.inheritCoverGrammar(this.parseAssignmentExpression);this.context.allowIn=y;if(this.matchKeyword("in"))this.context.isAssignmentTarget&&a.type!==m.Syntax.AssignmentExpression||this.tolerateError(g.Messages.InvalidLHSInForIn),this.nextToken(),this.reinterpretExpressionAsPattern(a),n=a,d=this.parseExpression(),a=null;else{this.context.isBindingElement=h;this.context.isAssignmentTarget=p;this.context.firstCoverInitializedNameError=x;if(this.match(",")){for(a=
[a];this.match(",");)this.nextToken(),a.push(this.isolateCoverGrammar(this.parseAssignmentExpression));a=this.finalize(this.startNode(l),new f.SequenceExpression(a))}this.expect(";")}}"undefined"===typeof n&&(this.match(";")||(b=this.isolateCoverGrammar(this.parseExpression)),this.expect(";"),this.match(")")||(c=this.isolateCoverGrammar(this.parseExpression)));!this.match(")")&&this.config.tolerant?(this.tolerateUnexpectedToken(this.nextToken()),l=this.finalize(this.createNode(),new f.EmptyStatement)):
(this.expect(")"),h=this.context.inIteration,this.context.inIteration=!0,l=this.isolateCoverGrammar(this.parseStatementBlockAllowed),this.context.inIteration=h);return"undefined"===typeof n?this.finalize(k,new f.ForStatement(a,b,c,l)):this.finalize(k,new f.ForInStatement(n,d,l))};e.parseContinueStatement=function(){const a=this.createNode();this.expectKeyword("continue");let b=null;if(3===this.lookahead.type&&!this.hasLineTerminator){const c=this.parseVariableIdentifier();b=c;Object.prototype.hasOwnProperty.call(this.context.labelSet,
"$"+c.name)||this.throwError(g.Messages.UnknownLabel,c.name)}this.consumeSemicolon();null!==b||this.context.inIteration||this.throwError(g.Messages.IllegalContinue);return this.finalize(a,new f.ContinueStatement(b))};e.parseBreakStatement=function(){const a=this.createNode();this.expectKeyword("break");var b=null;3!==this.lookahead.type||this.hasLineTerminator||(b=this.parseVariableIdentifier(),Object.prototype.hasOwnProperty.call(this.context.labelSet,"$"+b.name)||this.throwError(g.Messages.UnknownLabel,
b.name));this.consumeSemicolon();null!==b||this.context.inIteration||this.context.inSwitch||this.throwError(g.Messages.IllegalBreak);return this.finalize(a,new f.BreakStatement(b))};e.parseReturnStatement=function(){this.context.inFunctionBody||this.tolerateError(g.Messages.IllegalReturn);const a=this.createNode();this.expectKeyword("return");const b=(this.match(";")||this.match("}")||this.hasLineTerminator||2===this.lookahead.type)&&8!==this.lookahead.type&&10!==this.lookahead.type?null:this.parseExpression();
this.consumeSemicolon();return this.finalize(a,new f.ReturnStatement(b))};e.parseLabelledStatement=function(){const a=this.createNode();var b=this.parseExpression();this.consumeSemicolon();b=new f.ExpressionStatement(b);return this.finalize(a,b)};e.parseStatementBlockAllowed=function(){return this.parseStatement(!0)};e.parseStatement=function(a=!1){switch(this.lookahead.type){case 1:case 5:case 6:case 8:case 10:case 9:a=this.parseExpressionStatement();break;case 7:{const b=this.lookahead.value;a=
"{"===b?a?this.parseBlockOrObjectInitialiser():this.parseObjectInitializer():"("===b?this.parseExpressionStatement():";"===b?this.parseEmptyStatement():this.parseExpressionStatement();break}case 3:a=this.parseLabelledStatement();break;case 4:switch(this.lookahead.value.toLowerCase()){case "break":a=this.parseBreakStatement();break;case "continue":a=this.parseContinueStatement();break;case "for":a=this.parseForStatement();break;case "function":a=this.parseFunctionDeclaration();break;case "if":a=this.parseIfStatement();
break;case "return":a=this.parseReturnStatement();break;case "var":a=this.parseVariableStatement();break;default:a=this.parseExpressionStatement()}break;default:a=this.throwUnexpectedToken(this.lookahead)}return a};e.parseFunctionSourceElements=function(){const a=this.createNode();this.expect("{");const b=[],c=this.context.labelSet,d=this.context.inIteration,k=this.context.inSwitch,h=this.context.inFunctionBody;this.context.labelSet={};this.context.inIteration=!1;this.context.inSwitch=!1;for(this.context.inFunctionBody=
!0;2!==this.lookahead.type&&!this.match("}");)b.push(this.parseStatementListItem());this.expect("}");this.context.labelSet=c;this.context.inIteration=d;this.context.inSwitch=k;this.context.inFunctionBody=h;return this.finalize(a,new f.BlockStatement(b))};e.validateParam=function(a,b,c){const d="$"+c;this.context.strict?(this.scanner.isRestrictedWord(c)&&(a.stricted=b,a.message=g.Messages.StrictParamName),Object.prototype.hasOwnProperty.call(a.paramSet,d)&&(a.stricted=b,a.message=g.Messages.StrictParamDupe)):
a.firstRestricted||(this.scanner.isRestrictedWord(c)?(a.firstRestricted=b,a.message=g.Messages.StrictParamName):this.scanner.isStrictModeReservedWord(c)?(a.firstRestricted=b,a.message=g.Messages.StrictReservedWord):Object.prototype.hasOwnProperty.call(a.paramSet,d)&&(a.stricted=b,a.message=g.Messages.StrictParamDupe));"function"===typeof Object.defineProperty?Object.defineProperty(a.paramSet,d,{value:!0,enumerable:!0,writable:!0,configurable:!0}):a.paramSet[d]=!0};e.parseFormalParameter=function(a){const b=
[],c=this.parsePatternWithDefault(b);for(let d=0;d<b.length;d++)this.validateParam(a,b[d],b[d].value);a.simple=a.simple&&c instanceof f.Identifier;a.params.push(c)};e.parseFormalParameters=function(a){a={simple:!0,params:[],firstRestricted:a};this.expect("(");if(!this.match(")"))for(a.paramSet={};2!==this.lookahead.type;){this.parseFormalParameter(a);if(this.match(")"))break;this.expect(",");if(this.match(")"))break}this.expect(")");return{simple:a.simple,params:a.params,stricted:a.stricted,firstRestricted:a.firstRestricted,
message:a.message}};e.parseFunctionDeclaration=function(a){const b=this.createNode();this.expectKeyword("function");let c,d=null,k=null;a&&this.match("(")||(a=this.lookahead,d=this.parseVariableIdentifier(),this.context.strict?this.scanner.isRestrictedWord(a.value)&&this.tolerateUnexpectedToken(a,g.Messages.StrictFunctionName):this.scanner.isRestrictedWord(a.value)?(k=a,c=g.Messages.StrictFunctionName):this.scanner.isStrictModeReservedWord(a.value)&&(k=a,c=g.Messages.StrictReservedWord));var h=this.parseFormalParameters(k);
a=h.params;const l=h.stricted;k=h.firstRestricted;h.message&&(c=h.message);const n=this.context.strict,p=this.context.allowStrictDirective;this.context.allowStrictDirective=h.simple;h=this.parseFunctionSourceElements();this.context.strict&&k&&this.throwUnexpectedToken(k,c);this.context.strict&&l&&this.tolerateUnexpectedToken(l,c);this.context.strict=n;this.context.allowStrictDirective=p;return this.finalize(b,new f.FunctionDeclaration(d,a,h,!1))};e.parseFunctionExpression=function(){const a=this.createNode();
this.expectKeyword("function");let b,c=null,d;if(!this.match("(")){var k=this.lookahead;c=this.parseVariableIdentifier();this.context.strict?this.scanner.isRestrictedWord(k.value)&&this.tolerateUnexpectedToken(k,g.Messages.StrictFunctionName):this.scanner.isRestrictedWord(k.value)?(d=k,b=g.Messages.StrictFunctionName):this.scanner.isStrictModeReservedWord(k.value)&&(d=k,b=g.Messages.StrictReservedWord)}var h=this.parseFormalParameters(d);k=h.params;const l=h.stricted;d=h.firstRestricted;h.message&&
(b=h.message);const n=this.context.strict,p=this.context.allowStrictDirective;this.context.allowStrictDirective=h.simple;h=this.parseFunctionSourceElements();this.context.strict&&d&&this.throwUnexpectedToken(d,b);this.context.strict&&l&&this.tolerateUnexpectedToken(l,b);this.context.strict=n;this.context.allowStrictDirective=p;return this.finalize(a,new f.FunctionExpression(c,k,h,!1))};e.qualifiedPropertyName=function(a){switch(a.type){case 3:case 8:case 1:case 5:case 6:case 4:return!0;case 7:return"["===
a.value}return!1};e.isStartOfExpression=function(){let a=!0;const b=this.lookahead.value;switch(this.lookahead.type){case 7:a="["===b||"("===b||"{"===b||"+"===b||"-"===b||"!"===b||"~"===b||"++"===b||"--"===b||"/"===b||"/\x3d"===b;break;case 4:a="class"===b||"delete"===b||"function"===b||"let"===b||"new"===b||"super"===b||"this"===b||"typeof"===b||"void"===b||"yield"===b}return a};e.parseScript=function(){const a=this.createNode(),b=[];for(;2!==this.lookahead.type;)b.push(this.parseStatementListItem());
return this.finalize(a,new f.Script(b))};return t}();r.Parser=z;Object.defineProperty(r,"__esModule",{value:!0})});