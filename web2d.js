{Array.prototype.removeAt=function(e){this.splice(e,1);return this};Array.prototype.remove=function(e){for(var t=0;t<this.length;t++){if(this[t]==e){this.splice(t,1);break}}return this};Array.prototype.clear=function(){this.length=0};Array.prototype.insertAt=function(e,t){var n=this.slice(0,t);var r=this.slice(t);this.clear();for(var i=0;i<n.length;i++)this.push(n[i]);this.push(e);for(var s=0;s<r.length;s++)this.push(r[s]);return this};Array.prototype.contains=function(e){for(var t=0;t<this.length;t++)if(this[t]==e)return true;return false};Array.prototype.occurs=function(e){var t=0;for(var n=0;n<this.length;n++){if(this[n]==e)t++}return t}}
var $Event=function(e){this.events=new Array;this.Register=function(e,t){this.events.push(new Array(e,t==null?window:t))};this.Remove=function(e){for(var t=0;t<this.events.length;t++){if(this.events[t][0]==e){this.events.removeAt(t);break}}};this.Fire=function(e){for(var t=0;t<this.events.length;t++)this.events[t][0].apply(this.events[t][1],e)}}
var $Window=function(){this.GetLeft=function(e){var t=e.offsetLeft;while(e=e.offsetParent)t+=e.offsetLeft;t-=window.pageXOffset;return t};this.GetTop=function(e){var t=e.offsetTop;while(e=e.offsetParent)t+=e.offsetTop;t-=window.pageYOffset;return t}};$Window.onafterprint=new $Event;$Window.onbeforeprint=new $Event;$Window.onbeforeunload=new $Event;$Window.onerror=new $Event;$Window.onhaschange=new $Event;$Window.onload=new $Event;$Window.onmessage=new $Event;$Window.onoffline=new $Event;$Window.ononline=new $Event;$Window.onpagehide=new $Event;$Window.onpageshow=new $Event;$Window.onpopstate=new $Event;$Window.onredo=new $Event;$Window.onresize=new $Event;$Window.onstorage=new $Event;$Window.onunload=new $Event;window.onresize=function(){$Window.Fire([window.innerWidth,window.innerHeight])};window.onafterprint=function(){$Window.onafterprint.Fire()};window.onbeforeprint=function(){$Window.onbeforeprint.Fire()};window.onbeforeunload=function(){$Window.onbeforeunload.Fire()};window.onerror=function(){$Window.onerror.Fire()};window.onhaschange=function(){$Window.onhaschange.Fire()};window.onload=function(){$Window.onload.Fire()};window.onmessage=function(){$Window.onmessage.Fire()};window.onoffline=function(){$Window.onoffline.Fire()};window.ononline=function(){$Window.ononline.Fire()};window.onpagehide=function(){$Window.onpagehide.Fire()};window.onpageshow=function(){$Window.onpageshow.Fire()};window.onpopstate=function(){$Window.onpopstate.Fire()};window.onredo=function(){$Window.onredo.Fire()};window.onresize=function(){$Window.onresize.Fire()};window.onstorage=function(){$Window.onstorage.Fire()};window.onunload=function(){$Window.onunload.Fire()}
var $Document=function(){};$Document.onmousemove=new $Event;$Document.onmousedown=new $Event;$Document.onmouseup=new $Event;$Document.onkeydown=new $Event;$Document.onkeyup=new $Event;document.documentElement.onmousedown=function(e){$Document.onmousedown.Fire()};document.documentElement.onmouseup=function(e){$Document.onmouseup.Fire()};document.documentElement.onmousemove=function(e){e=e||window.event;$Document.onmousemove.Fire([e.clientX,e.clientY])};document.documentElement.onkeydown=function(e){var t;if(window.event)t=window.event.keyCode;else if(e)t=e.which;$Document.onkeydown.Fire([t])};document.documentElement.onkeyup=function(e){var t;if(window.event)t=window.event.keyCode;else if(e)t=e.which;$Document.onkeyup.Fire([t])}
var $Image=function(e,t){this.image=new Image;this.rect=t;if(e!=null){if(typeof imgSrc=="string")this.image.src=e;else this.image=e;if(this.rect==null){this.rect.width=this.image.width;this.rect.height=this.image.height}}this.Load=function(e){if(typeof imgSrc=="string")this.image.src=e;else this.image=e};this.Position=function(e,t){if(e!=null)this.rect.x=e;if(t!=null)this.rect.y=t};this.Resize=function(e,t){this.rect.width=e;this.rect.height=t};this.Draw=function(e,t,n){e.context.drawImage(this.image,t,n,this.rect.width,this.rect.height)};this.SimpleDraw=function(e){e.context.drawImage(this.image,this.rect.x,this.rect.y,this.rect.width,this.rect.height)}}
$Vector2=function(e,t){this.x=e==null?0:e;this.y=t==null?0:t;this.Set=function(a,b){if(a!=null)this.x=a;if(b!=null)this.y=b};this.Move=function(e){this.x+=vec2.x;this.y+=vec2.y};this.Magnitude=function(){return Math.sqrt(this.x*this.x+this.y*this.y)};this.Dot=function(e){return this.x*e.x+this.y*e.y};this.Cross=function(e){return this.x*e.y-this.y*e.x};this.Normalized=function(){var e=new $Vector2(this.x,this.y);var t=this.Magnitude();e.x=e.x/t;e.y=e.y/t;return e};this.Distance=function(e){return Math.sqrt((vec2.x-this.x)*(vec2.x-this.x)+(this.y-vec2.y)*(this.y-vec2.y))};this.Difference=function(e){new $Vector2(this.x-vec2.x,this.y-vec2.y)};this.Sum=function(e){new $Vector2(this.x+vec2.x,this.y+vec2.y)}};$Color=function(e,t,n,r){this.r=e==null?255:e;this.g=t==null?255:t;this.b=n==null?255:n;this.a=r==null?1:r;this.ToStandard=function(e){if(e==null||!e)return"rgba("+this.r+","+this.g+","+this.b+","+this.a+")";else return"rgb("+this.r+","+this.g+","+this.b+")"}};$Rectangle=function(e,t,n,r,i){this.x=e==null?0:e;this.y=t==null?0:t;this.width=n==null?0:n;this.height=r==null?0:r;this.color=i==null?new $Color:i;this.Contains=function(e,t){return e>=this.x&&e<=this.x+this.width&&t>=this.y&&t<=this.y+this.height};this.Intersects=function(e){var t=0;if(e.radius!=null)t=e.radius;if(this.Contains(e.x-t,e.y-t)||this.Contains(e.x+e.width-t,e.y-t)||this.Contains(e.x-t,e.y+e.height-t)||this.Contains(e.x+e.width-t,e.y+e.height-t)){return true}else if(e.Contains(this.x-t,this.y-t)||e.Contains(this.x+this.width-t,this.y-t)||e.Contains(this.x-t,this.y+this.height-t)||e.Contains(this.x+this.width-t,this.y+this.height-t)){return true}return false};this.Draw=function(e){e.context.fillStyle=this.color.ToStandard();e.context.fillRect(this.x,this.y,this.width,this.height)}}
function InputMousePosition(e,t){Input.mousePosition.x=e-Input.offset.x;Input.mousePosition.y=t-Input.offset.y;Input.mouseMove.Fire([Input.mousePosition.x,Input.mousePosition.y])}function InputMouseDown(){Input.mouseIsDown=true;Input.mouseDown.Fire()}function InputMouseUp(){Input.mouseIsDown=false;Input.mouseUp.Fire()}function InputKeyDown(e){if(Input.SetKeyDown(e))Input.keyDown.Fire([e])}function InputKeyUp(e){if(Input.SetKeyUp(e))Input.keyUp.Fire([e])}var KeyString="ABCDEFGHIJKLMNOPQRSTUVWXYZ";var KeyNumberStrings="0123456789";var $Keys=function(){this.tmp=65;for(var e=0;e<KeyString.length;e++){this[KeyString.charAt(e)]=this.tmp++}this.tmp=48;for(var e=0;e<KeyNumberStrings.length;e++){this["Num"+KeyNumberStrings.charAt(e)]=this.tmp++}this.tmp=96;for(var e=0;e<KeyNumberStrings.length;e++){this["Numpad"+KeyNumberStrings.charAt(e)]=this.tmp++}this.Left=37;this.Right=38;this.Up=39;this.Down=40;this.Enter=13;this.Space=32;this.Period=190;this.Comma=188;this.Slash=191;this.Backslash=220;this.Escape=27;this.Backspace=8;this.Backspace=46;this.Shift=16;this.Capslock=20;this.Tab=9;this.Backquote=192;this.Ctrl=17;this.Alt=18;this.Add=107;this.Subtract=109;this.Divide=111;this.Multiply=106;this.Decimal=110};var Keys=new $Keys;var $Input=function(){this.tmp=65;for(var e=0;e<KeyString.length;e++){this[KeyString.charAt(e)]=false}this.tmp=48;for(var e=0;e<KeyNumberStrings.length;e++){this["num"+KeyNumberStrings.charAt(e)]=false}this.tmp=96;for(var e=0;e<KeyNumberStrings.length;e++){this["numpad"+KeyNumberStrings.charAt(e)]=false}this.Left=false;this.Right=false;this.Up=false;this.Down=false;this.Enter=false;this.Space=false;this.Period=false;this.Comma=false;this.Slash=false;this.Backslash=false;this.Escape=false;this.Backspace=false;this.Shift=false;this.Capslock=false;this.Tab=false;this.Backquote=false;this.Ctrl=false;this.Alt=false;this.Add=false;this.Subtract=false;this.Divide=false;this.Multiply=false;this.Decimal=false;this.mouseIsDown=false;this.mousePosition=new $Vector2(0);this.offset=new $Vector2(0);this.clamp=new $Vector2(0);this.keyDown=new $Event;this.keyUp=new $Event;this.mouseDown=new $Event;this.mouseUp=new $Event;this.mouseMove=new $Event;this.SetKeyDown=function(e){for(var t=0;t<KeyString.length;t++){if(e==Keys[KeyString[t]]){if(this[KeyString.charAt(t)])return false;this[KeyString.charAt(t)]=true;return true}}for(var t=0;t<KeyNumberStrings.length;t++){if(e==Keys["Num"+KeyNumberStrings[t]]){if(this["Num"+KeyNumberStrings.charAt(t)])return false;this["Num"+KeyNumberStrings.charAt(t)]=true;return true}}for(var t=0;t<KeyNumberStrings.length;t++){if(e==Keys["Numpad"+KeyNumberStrings[t]]){if(this["Numpad"+KeyNumberStrings.charAt(t)])return false;this["Numpad"+KeyNumberStrings.charAt(t)]=true;return true}}var n=false;if(e==Keys.Left){n=this.Left;this.Left=true}else if(e==Keys.Right){n=this.Right;this.Right=true}else if(e==Keys.Up){n=this.Up;this.Up=true}else if(e==Keys.Down){n=this.Down;this.Down=true}else if(e==Keys.Enter){n=this.Enter;this.Enter=true}else if(e==Keys.Space){n=this.Space;this.Space=true}else if(e==Keys.Period){n=this.Period;this.Period=true}else if(e==Keys.Comma){n=this.Comma;this.Comma=true}else if(e==Keys.Slash){n=this.Slash;this.Slash=true}else if(e==Keys.Backslash){n=this.Backslash;this.Backslash=true}else if(e==Keys.Escape){n=this.Escape;this.Escape=true}else if(e==Keys.Backspace){n=this.Backspace;this.Backspace=true}else if(e==Keys.Delete){n=this.Delete;this.Delete=true}else if(e==Keys.Shift){n=this.Shift;this.Shift=true}else if(e==Keys.Capslock){n=this.Capslock;this.Capslock=true}else if(e==Keys.Tab){n=this.Tab;this.Tab=true}else if(e==Keys.Backquote){n=this.Backquote;this.Backquote=true}else if(e==Keys.Ctrl){n=this.Ctrl;this.Ctrl=true}else if(e==Keys.Alt){n=this.Alt;this.Alt=true}else if(e==Keys.Add){n=this.Add;this.Addtrue}else if(e==Keys.Subtract){n=this.Subtract;this.Subtract=true}else if(e==Keys.Divide){n=this.Divide;this.Divide=true}else if(e==Keys.Multiply){n=this.Multiply;this.Multiply=true}else if(e==Keys.Decimal){n=this.Decimal;this.Decimal=true}return!n};this.SetKeyUp=function(e){for(var t=0;t<KeyString.length;t++){if(e==Keys[KeyString[t]]){if(!this[KeyString.charAt(t)])return false;this[KeyString.charAt(t)]=false;return true}}for(var t=0;t<KeyNumberStrings.length;t++){if(e==Keys["Num"+KeyNumberStrings[t]]){if(!this["Num"+KeyNumberStrings.charAt(t)])return false;this["Num"+KeyNumberStrings.charAt(t)]=false;return true}}for(var t=0;t<KeyNumberStrings.length;t++){if(e==Keys["Numpad"+KeyNumberStrings[t]]){if(!this["Numpad"+KeyNumberStrings.charAt(t)])return false;this["Numpad"+KeyNumberStrings.charAt(t)]=false;return true}}var n=false;if(e==Keys.Left){n=this.Left;this.Left=false}else if(e==Keys.Right){n=this.Right;this.Right=false}else if(e==Keys.Up){n=this.Up;this.Up=false}else if(e==Keys.Down){n=this.Down;this.Down=false}else if(e==Keys.Enter){n=this.Enter;this.Enter=false}else if(e==Keys.Space){n=this.Space;this.Space=false}else if(e==Keys.Period){n=this.Period;this.Period=false}else if(e==Keys.Comma){n=this.Comma;this.Comma=false}else if(e==Keys.Slash){n=this.Slash;this.Slash=false}else if(e==Keys.Backslash){n=this.Backslash;this.Backslash=false}else if(e==Keys.Escape){n=this.Escape;this.Escape=false}else if(e==Keys.Backspace){n=this.Backspace;this.Backspace=false}else if(e==Keys.Delete){n=this.Delete;this.Delete=false}else if(e==Keys.Shift){n=this.Shift;this.Shift=false}else if(e==Keys.Capslock){n=this.Capslock;this.Capslock=false}else if(e==Keys.Tab){n=this.Tab;this.Tab=false}else if(e==Keys.Backquote){n=this.Backquote;this.Backquote=false}else if(e==Keys.Ctrl){n=this.Ctrl;this.Ctrl=false}else if(e==Keys.Alt){n=this.Alt;this.Alt=false}else if(e==Keys.Add){n=this.Add;this.Add=false}else if(e==Keys.Subtract){n=this.Subtract;this.Subtract=false}else if(e==Keys.Divide){n=this.Divide;this.Divide=false}else if(e==Keys.Multiply){n=this.Multiply;this.Multiply=false}else if(e==Keys.Decimal){n=this.Decimal;this.Decimal=false}return n};this.KeyDown=function(e){return this[e.toUpperCase()]};this.KeyUp=function(e){return!this[e.toUpperCase()]};this.MouseDown=function(){return this.mouseIsDown};this.MouseUp=function(){return!this.mouseIsDown}};var Input=new $Input;$Document.onmousemove.Register(InputMousePosition);$Document.onmousedown.Register(InputMouseDown);$Document.onmouseup.Register(InputMouseUp);$Document.onkeydown.Register(InputKeyDown);$Document.onkeyup.Register(InputKeyUp)
var $SpriteSheet=function(e,t,n,r,i,s,o,u,a){this.fps=o==null||o>=33?1:33/o;this.fpsCounter=0;this.width=e;this.height=t;this.rowStart=n;this.columnStart=r;this.row=n;this.column=r;this.rows=a;this.columns=u;this.limit=i==null||i==0?999999999999:i-1;this.limitCount=0;this.position=new $Vector2(0);this.cropPosition=new $Vector2(0);this.image=new Image;if(typeof s=="string")this.image.src=s;else this.image=s;this.SetLimit=function(e){this.limit=l-1};this.SetRow=function(e){this.row=e;this.rowStart=e;this.cropPosition.x=this.width*this.column;this.cropPosition.y=this.height*this.row};this.SetColumn=function(e){this.column=e;this.columnStart=e;this.cropPosition.x=this.width*this.column;this.cropPosition.y=this.height*this.row};this.Draw=function(e){this.cropPosition.x=this.width*this.column;this.cropPosition.y=this.height*this.row;if(this.columns==null||this.columns==0)this.columns=this.image.width/this.width;if(this.rows==null||this.rows==0)this.rows=this.image.height/this.height;if(this.fpsCounter==0){if(this.limitCount<this.limit){this.limitCount++;this.column++;if(this.column>=this.columns){this.row++;this.column=0;if(this.row>=this.rows){this.row=this.rowStart;this.column=this.columnStart;this.limitCount=0}}}else{this.column=this.columnStart;this.row=this.rowStart;this.limitCount=0}}e.context.drawImage(this.image,this.cropPosition.x,this.cropPosition.y,this.width,this.height,this.position.x,this.position.y,this.width,this.height);this.fpsCounter++;if(this.fpsCounter>=this.fps)this.fpsCounter=0}}
function registerCanvas(e,t,n){if(Canvas!=null)throw"Canvas already registered";Canvas=new $Canvas(e,t,n);Canvas.drawing.Register(UpdateRequestId);Start()}function UpdateRequestId(e){requestId=window.requestAnimationFrame(DrawCanvas)}function DrawCanvas(){Canvas.context.clearRect(0,0,Canvas.elm.width,Canvas.elm.height);Canvas.Draw()}function Start(){if(Canvas==null)throw'You must first register a Canvas with the "registerCanvas" function';requestId=window.requestAnimationFrame(DrawCanvas)}function Stop(){if(requestId)window.cancelAnimationFrame(requestId);requestId=0}var $Canvas=function(e,t,n){if(e==="undefined")throw"The Canvas id passedQ was not valid";this.elm=e;this.context=this.elm.getContext("2d");if(t!=null)this.elm.width=document.body.clientWidth*t;if(n!=null)this.elm.height=document.body.clientHeight*n;this.elm.style.width=this.elm.width+"px";this.elm.style.height=this.elm.height+"px";this.updating=new $Event;this.drawing=new $Event;this.Draw=function(){this.updating.Fire();this.drawing.Fire([this])}};var Canvas=null;var requestId=0;(function(){var e=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;window.requestAnimationFrame=e})();
