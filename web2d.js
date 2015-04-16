function NULL(t){return null==t||void 0==t}function InputMousePosition(t,i){Input.mousePosition.x=t-Input.offset.x,Input.mousePosition.y=i-Input.offset.y,Input.mouseMove.Fire([Input.mousePosition.x,Input.mousePosition.y])}function InputMouseDown(){Input.mouseIsDown=!0,Input.mouseDown.Fire()}function InputMouseUp(){Input.mouseIsDown=!1,Input.mouseUp.Fire()}function InputKeyDown(t){Input.SetKeyDown(t)&&Input.keyDown.Fire([t])}function InputKeyUp(t){Input.SetKeyUp(t)&&Input.keyUp.Fire([t])}function registerCanvas(t,i,e){if(null!=Canvas)throw"Canvas already registered";Canvas=new $Canvas(t,i,e),Canvas.drawing.Register(UpdateRequestId),Start()}function UpdateRequestId(){requestId=window.requestAnimationFrame(DrawCanvas)}function DrawCanvas(){Canvas.context.clearRect(0,0,Canvas.elm.width,Canvas.elm.height),Canvas.Draw()}function Start(){if(null==Canvas)throw'You must first register a Canvas with the "registerCanvas" function';requestId=window.requestAnimationFrame(DrawCanvas)}function Stop(){requestId&&window.cancelAnimationFrame(requestId),requestId=0}Array.prototype.head=function(){return this[0]},Array.prototype.tail=function(){return this[this.length-1]},Array.prototype.removeAt=function(t){return this.splice(t,1),this},Array.prototype.remove=function(t){for(var i=0;i<this.length;i++)if(this[i]==t){this.splice(i,1);break}return this},Array.prototype.clear=function(){this.length=0},Array.prototype.insertAt=function(t,i){var e=this.slice(0,i),s=this.slice(i);this.clear();for(var n=0;n<e.length;n++)this.push(e[n]);this.push(t);for(var h=0;h<s.length;h++)this.push(s[h]);return this},Array.prototype.contains=function(t){for(var i=0;i<this.length;i++)if(this[i]==t)return!0;return!1},Array.prototype.occurs=function(t){for(var i=0,e=0;e<this.length;e++)this[e]==t&&i++;return i},Array.prototype.iterate=function(t){for(var i=0;i<this.length;i++)t(this[i]);return this},Array.prototype.iterateExecute=function(t,i){for(var e=[],s=0;s<this.length;s++)if(i)e.push(t(this[s]));else{var n=t(this[s]);NULL(n)||e.push(n)}return e},Array.prototype.where=function(t){for(var i=[],e=0;e<this.length;e++)t(this[e])&&i.push(this[e]);return i},Array.prototype.findFirst=function(t){for(var i=0;i<this.length;i++)if(t(this[i]))return this[i];return null},Array.prototype.findLast=function(t){for(var i=this.length-1;i>=0;i--)if(t(this[i]))return this[i];return null};var $Event=function(){this.events=new Array,this.Register=function(t,i){this.events.push(new Array(t,null==i?window:i))},this.Remove=function(t){for(var i=0;i<this.events.length;i++)if(this.events[i][0]==t){this.events.removeAt(i);break}},this.Fire=function(t){for(var i=0;i<this.events.length;i++)this.events[i][0].apply(this.events[i][1],t)}},$Window=function(){this.GetLeft=function(t){for(var i=t.offsetLeft;t=t.offsetParent;)i+=t.offsetLeft;return i-=window.pageXOffset},this.GetTop=function(t){for(var i=t.offsetTop;t=t.offsetParent;)i+=t.offsetTop;return i-=window.pageYOffset}};$Window.onafterprint=new $Event,$Window.onbeforeprint=new $Event,$Window.onbeforeunload=new $Event,$Window.onerror=new $Event,$Window.onhaschange=new $Event,$Window.onload=new $Event,$Window.onmessage=new $Event,$Window.onoffline=new $Event,$Window.ononline=new $Event,$Window.onpagehide=new $Event,$Window.onpageshow=new $Event,$Window.onpopstate=new $Event,$Window.onredo=new $Event,$Window.onresize=new $Event,$Window.onstorage=new $Event,$Window.onunload=new $Event,window.onresize=function(){$Window.Fire([window.innerWidth,window.innerHeight])},window.onafterprint=function(){$Window.onafterprint.Fire()},window.onbeforeprint=function(){$Window.onbeforeprint.Fire()},window.onbeforeunload=function(){$Window.onbeforeunload.Fire()},window.onerror=function(){$Window.onerror.Fire()},window.onhaschange=function(){$Window.onhaschange.Fire()},window.onload=function(){$Window.onload.Fire()},window.onmessage=function(){$Window.onmessage.Fire()},window.onoffline=function(){$Window.onoffline.Fire()},window.ononline=function(){$Window.ononline.Fire()},window.onpagehide=function(){$Window.onpagehide.Fire()},window.onpageshow=function(){$Window.onpageshow.Fire()},window.onpopstate=function(){$Window.onpopstate.Fire()},window.onredo=function(){$Window.onredo.Fire()},window.onresize=function(){$Window.onresize.Fire()},window.onstorage=function(){$Window.onstorage.Fire()},window.onunload=function(){$Window.onunload.Fire()};var $Document=function(){};$Document.onmousemove=new $Event,$Document.onmousedown=new $Event,$Document.onmouseup=new $Event,$Document.onkeydown=new $Event,$Document.onkeyup=new $Event,document.documentElement.onmousedown=function(){$Document.onmousedown.Fire()},document.documentElement.onmouseup=function(){$Document.onmouseup.Fire()},document.documentElement.onmousemove=function(t){t=t||window.event,$Document.onmousemove.Fire([t.clientX,t.clientY])},document.documentElement.onkeydown=function(t){var i;window.event?i=window.event.keyCode:t&&(i=t.which),$Document.onkeydown.Fire([i])},document.documentElement.onkeyup=function(t){var i;window.event?i=window.event.keyCode:t&&(i=t.which),$Document.onkeyup.Fire([i])},$Vector2=function(t,i){this.x=null==t?0:t,this.y=null==i?0:i,this.Set=function(t,i){null!=t&&(this.x=t),null!=i&&(this.y=i)},this.Move=function(){this.x+=vec2.x,this.y+=vec2.y},this.__defineGetter__("Magnitude",function(){return Math.sqrt(this.x*this.x+this.y*this.y)}),this.Dot=function(t){return this.x*t.x+this.y*t.y},this.Cross=function(t){return this.x*t.y-this.y*t.x},this.__defineGetter__("Normalized",function(){var t=new $Vector2(this.x,this.y),i=this.Magnitude();return t.x=t.x/i,t.y=t.y/i,t}),this.Distance=function(){return Math.sqrt((vec2.x-this.x)*(vec2.x-this.x)+(this.y-vec2.y)*(this.y-vec2.y))},this.Difference=function(){new $Vector2(this.x-vec2.x,this.y-vec2.y)},this.Sum=function(){new $Vector2(this.x+vec2.x,this.y+vec2.y)}},$Rectangle=function(t,i,e,s,n){this.x=null==t?0:t,this.y=null==i?0:i,this.width=null==e?0:e,this.height=null==s?0:s,this.color=null==n?new $Color:n,this.Contains=function(t,i){return t>=this.x&&t<=this.x+this.width&&i>=this.y&&i<=this.y+this.height},this.Intersects=function(t,i){return null==i&&(i=new $Vector2(0,0)),this.Contains(t.x+i.x,t.y+i.y)||this.Contains(t.x+t.width+i.x,t.y+i.y)||this.Contains(t.x+i.x,t.y+t.height+i.y)||this.Contains(t.x+t.width+i.x,t.y+t.height+i.y)?!0:t.Contains(this.x,this.y)||t.Contains(this.x+this.width,this.y)||t.Contains(this.x,this.y+this.height)||t.Contains(this.x+this.width,this.y+this.height)?!0:(console.log(i),!1)},this.Draw=function(t){t.context.fillStyle=this.color.ToStandard(),t.context.fillRect(this.x,this.y,this.width,this.height)}},$Color=function(t,i,e,s){this.r=null==t?0:255,this.g=null==i?0:255,this.b=null==e?0:255,this.a=null==s?0:1,this.__defineGetter__("Standard",function(){return"rgba("+this.r+","+this.g+","+this.b+","+this.a+")"}),this.ToStandard=function(t){return null!=t&&t?"rgb("+this.r+","+this.g+","+this.b+")":"rgba("+this.r+","+this.g+","+this.b+","+this.a+")"}};var KeyString="ABCDEFGHIJKLMNOPQRSTUVWXYZ",KeyNumberStrings="0123456789",Input=null,Keys=null,$Keys=function(){if(null!=Keys)return Keys;this.tmp=65;for(var t=0;t<KeyString.length;t++)this[KeyString.charAt(t)]=this.tmp++;this.tmp=48;for(var t=0;t<KeyNumberStrings.length;t++)this["Num"+KeyNumberStrings.charAt(t)]=this.tmp++;this.tmp=96;for(var t=0;t<KeyNumberStrings.length;t++)this["Numpad"+KeyNumberStrings.charAt(t)]=this.tmp++;this.Left=37,this.Right=38,this.Up=39,this.Down=40,this.Enter=13,this.Space=32,this.Period=190,this.Comma=188,this.Slash=191,this.Backslash=220,this.Escape=27,this.Backspace=8,this.Backspace=46,this.Shift=16,this.Capslock=20,this.Tab=9,this.Backquote=192,this.Ctrl=17,this.Alt=18,this.Add=107,this.Subtract=109,this.Divide=111,this.Multiply=106,this.Decimal=110};Keys=new $Keys;var $Input=function(){if(null!=Input)return Input;this.tmp=65;for(var t=0;t<KeyString.length;t++)this[KeyString.charAt(t)]=!1;this.tmp=48;for(var t=0;t<KeyNumberStrings.length;t++)this["num"+KeyNumberStrings.charAt(t)]=!1;this.tmp=96;for(var t=0;t<KeyNumberStrings.length;t++)this["numpad"+KeyNumberStrings.charAt(t)]=!1;this.Left=!1,this.Right=!1,this.Up=!1,this.Down=!1,this.Enter=!1,this.Space=!1,this.Period=!1,this.Comma=!1,this.Slash=!1,this.Backslash=!1,this.Escape=!1,this.Backspace=!1,this.Shift=!1,this.Capslock=!1,this.Tab=!1,this.Backquote=!1,this.Ctrl=!1,this.Alt=!1,this.Add=!1,this.Subtract=!1,this.Divide=!1,this.Multiply=!1,this.Decimal=!1,this.mouseIsDown=!1,this.mousePosition=new $Vector2(0),this.offset=new $Vector2(0),this.clamp=new $Vector2(0),this.keyDown=new $Event,this.keyUp=new $Event,this.mouseDown=new $Event,this.mouseUp=new $Event,this.mouseMove=new $Event,this.SetKeyDown=function(t){for(var i=0;i<KeyString.length;i++)if(t==Keys[KeyString[i]])return this[KeyString.charAt(i)]?!1:(this[KeyString.charAt(i)]=!0,!0);for(var i=0;i<KeyNumberStrings.length;i++)if(t==Keys["Num"+KeyNumberStrings[i]])return this["Num"+KeyNumberStrings.charAt(i)]?!1:(this["Num"+KeyNumberStrings.charAt(i)]=!0,!0);for(var i=0;i<KeyNumberStrings.length;i++)if(t==Keys["Numpad"+KeyNumberStrings[i]])return this["Numpad"+KeyNumberStrings.charAt(i)]?!1:(this["Numpad"+KeyNumberStrings.charAt(i)]=!0,!0);var e=!1;return t==Keys.Left?(e=this.Left,this.Left=!0):t==Keys.Right?(e=this.Right,this.Right=!0):t==Keys.Up?(e=this.Up,this.Up=!0):t==Keys.Down?(e=this.Down,this.Down=!0):t==Keys.Enter?(e=this.Enter,this.Enter=!0):t==Keys.Space?(e=this.Space,this.Space=!0):t==Keys.Period?(e=this.Period,this.Period=!0):t==Keys.Comma?(e=this.Comma,this.Comma=!0):t==Keys.Slash?(e=this.Slash,this.Slash=!0):t==Keys.Backslash?(e=this.Backslash,this.Backslash=!0):t==Keys.Escape?(e=this.Escape,this.Escape=!0):t==Keys.Backspace?(e=this.Backspace,this.Backspace=!0):t==Keys.Delete?(e=this.Delete,this.Delete=!0):t==Keys.Shift?(e=this.Shift,this.Shift=!0):t==Keys.Capslock?(e=this.Capslock,this.Capslock=!0):t==Keys.Tab?(e=this.Tab,this.Tab=!0):t==Keys.Backquote?(e=this.Backquote,this.Backquote=!0):t==Keys.Ctrl?(e=this.Ctrl,this.Ctrl=!0):t==Keys.Alt?(e=this.Alt,this.Alt=!0):t==Keys.Add?(e=this.Add,this.Addtrue):t==Keys.Subtract?(e=this.Subtract,this.Subtract=!0):t==Keys.Divide?(e=this.Divide,this.Divide=!0):t==Keys.Multiply?(e=this.Multiply,this.Multiply=!0):t==Keys.Decimal&&(e=this.Decimal,this.Decimal=!0),!e},this.SetKeyUp=function(t){for(var i=0;i<KeyString.length;i++)if(t==Keys[KeyString[i]])return this[KeyString.charAt(i)]?(this[KeyString.charAt(i)]=!1,!0):!1;for(var i=0;i<KeyNumberStrings.length;i++)if(t==Keys["Num"+KeyNumberStrings[i]])return this["Num"+KeyNumberStrings.charAt(i)]?(this["Num"+KeyNumberStrings.charAt(i)]=!1,!0):!1;for(var i=0;i<KeyNumberStrings.length;i++)if(t==Keys["Numpad"+KeyNumberStrings[i]])return this["Numpad"+KeyNumberStrings.charAt(i)]?(this["Numpad"+KeyNumberStrings.charAt(i)]=!1,!0):!1;var e=!1;return t==Keys.Left?(e=this.Left,this.Left=!1):t==Keys.Right?(e=this.Right,this.Right=!1):t==Keys.Up?(e=this.Up,this.Up=!1):t==Keys.Down?(e=this.Down,this.Down=!1):t==Keys.Enter?(e=this.Enter,this.Enter=!1):t==Keys.Space?(e=this.Space,this.Space=!1):t==Keys.Period?(e=this.Period,this.Period=!1):t==Keys.Comma?(e=this.Comma,this.Comma=!1):t==Keys.Slash?(e=this.Slash,this.Slash=!1):t==Keys.Backslash?(e=this.Backslash,this.Backslash=!1):t==Keys.Escape?(e=this.Escape,this.Escape=!1):t==Keys.Backspace?(e=this.Backspace,this.Backspace=!1):t==Keys.Delete?(e=this.Delete,this.Delete=!1):t==Keys.Shift?(e=this.Shift,this.Shift=!1):t==Keys.Capslock?(e=this.Capslock,this.Capslock=!1):t==Keys.Tab?(e=this.Tab,this.Tab=!1):t==Keys.Backquote?(e=this.Backquote,this.Backquote=!1):t==Keys.Ctrl?(e=this.Ctrl,this.Ctrl=!1):t==Keys.Alt?(e=this.Alt,this.Alt=!1):t==Keys.Add?(e=this.Add,this.Add=!1):t==Keys.Subtract?(e=this.Subtract,this.Subtract=!1):t==Keys.Divide?(e=this.Divide,this.Divide=!1):t==Keys.Multiply?(e=this.Multiply,this.Multiply=!1):t==Keys.Decimal&&(e=this.Decimal,this.Decimal=!1),e},this.KeyDown=function(t){return this[t.toUpperCase()]},this.KeyUp=function(t){return!this[t.toUpperCase()]},this.MouseDown=function(){return this.mouseIsDown},this.MouseUp=function(){return!this.mouseIsDown}};Input=new $Input,$Document.onmousemove.Register(InputMousePosition),$Document.onmousedown.Register(InputMouseDown),$Document.onmouseup.Register(InputMouseUp),$Document.onkeydown.Register(InputKeyDown),$Document.onkeyup.Register(InputKeyUp);var $Canvas=function(t,i,e){if("undefined"===t)throw"The Canvas id passed was not valid";this.elm=t,this.context=this.elm.getContext("2d"),null!=i&&(this.elm.width=document.body.clientWidth*i),null!=e&&(this.elm.height=document.body.clientHeight*e),this.elm.style.width=this.elm.width+"px",this.elm.style.height=this.elm.height+"px",this.scale=new $Vector2(1,1),this.width=this.elm.width,this.height=this.elm.height,this.updating=new $Event,this.drawing=new $Event,this.Draw=function(){this.updating.Fire(),this.drawing.Fire([this])},this.Scale=function(t,i){this.context.scale(t,i),this.width=this.width*(1/t),this.height=this.height*(1/i),this.scale.x=t,this.scale.y=i}},Canvas=null,requestId=0;!function(){var t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;window.requestAnimationFrame=t}();var $UI=function(){this.enabled=!0,this.rect=null,this.onClick=new $Event,this.onMouseOver=new $Event,this.onMouseOut=new $Event,this.onEnable=new $Event,this.onDisable=new $Event,this.hoverPointer="auto",this.clicking=!1,this.Enable=function(){this.enabled||("auto"==Canvas.elm.style.cursor&&this.ContainsMouse()&&(Canvas.elm.style.cursor=this.hoverPointer),this.onEnable.Fire()),this.enabled=!0},this.Disable=function(){this.enabled&&("auto"!=Canvas.elm.style.cursor&&this.ContainsMouse()&&(Canvas.elm.style.cursor="auto"),this.onDisable.Fire()),this.enabled=!1},this.InputMouseDown=function(){this.enabled&&this.ContainsMouse()&&(this.clicking=!0)},this.InputMouseUp=function(){if(this.enabled){if(!this.ContainsMouse())return void(this.clicking=!1);this.clicking&&this.onClick.Fire(),this.clicking=!1}},this.isHovering=!1,this.MouseMoved=function(t,i){this.enabled&&(this.ContainsMouse(t,i)?this.isHovering||(this.isHovering=!0,this.onMouseOver.Fire(),"auto"!=this.hoverPointer&&(Canvas.elm.style.cursor=this.hoverPointer)):this.isHovering&&(this.isHovering=!1,this.onMouseOut.Fire(),"auto"!=this.hoverPointer&&(Canvas.elm.style.cursor="auto")))},this.ContainsMouse=function(t,i){return null==t||null==i?this.rect.Contains(Input.mousePosition.x,Input.mousePosition.y):this.rect.Contains(t,i)}};$UI.prototype.init=function(t){this.rect=t,Input.mouseDown.Register(this.InputMouseDown,this),Input.mouseUp.Register(this.InputMouseUp,this),Input.mouseMove.Register(this.MouseMoved,this)};var $Image=function(t,i){this.image=new Image,this.rect=i,null!=t&&("string"==typeof imgSrc?this.image.src=t:this.image=t,null==this.rect&&(this.rect.width=this.image.width,this.rect.height=this.image.height)),this.Load=function(t){"string"==typeof imgSrc?this.image.src=t:this.image=t},this.Position=function(t,i){null!=t&&(this.rect.x=t),null!=i&&(this.rect.y=i)},this.Resize=function(t,i){this.rect.width=t,this.rect.height=i},this.Draw=function(t,i,e){t.context.drawImage(this.image,i,e,this.rect.width,this.rect.height)},this.SimpleDraw=function(t){t.context.drawImage(this.image,this.rect.x,this.rect.y,this.rect.width,this.rect.height)}},$SpriteSheet=function(t,i,e,s,n,h,o,r,u){this.fps=null==o||o>=33?1:33/o,this.fpsCounter=0,this.width=t,this.height=i,this.rowStart=e,this.columnStart=s,this.row=e,this.column=s,this.rows=u,this.columns=r,this.limit=null==n||0==n?999999999999:n-1,this.limitCount=0,this.position=new $Vector2(0),this.cropPosition=new $Vector2(0),this.image=new Image,"string"==typeof h?this.image.src=h:this.image=h,this.SetLimit=function(t){this.limit=t-1},this.SetRow=function(t){this.row=t,this.rowStart=t,this.cropPosition.x=this.width*this.column,this.cropPosition.y=this.height*this.row},this.SetColumn=function(t){this.column=t,this.columnStart=t,this.cropPosition.x=this.width*this.column,this.cropPosition.y=this.height*this.row},this.Draw=function(t){this.cropPosition.x=this.width*this.column,this.cropPosition.y=this.height*this.row,(null==this.columns||0==this.columns)&&(this.columns=this.image.width/this.width),(null==this.rows||0==this.rows)&&(this.rows=this.image.height/this.height),0==this.fpsCounter&&(this.limitCount<this.limit?(this.limitCount++,this.column++,this.column>=this.columns&&(this.row++,this.column=0,this.row>=this.rows&&(this.row=this.rowStart,this.column=this.columnStart,this.limitCount=0))):(this.column=this.columnStart,this.row=this.rowStart,this.limitCount=0)),t.context.drawImage(this.image,this.cropPosition.x,this.cropPosition.y,this.width,this.height,this.position.x,this.position.y,this.width,this.height),this.fpsCounter++,this.fpsCounter>=this.fps&&(this.fpsCounter=0)}},$Audio=function(t){this.loops=0,"string"==typeof t?(this.clip=new Audio,this.clip.src=t):this.clip=t,this.__defineGetter__("IsPlaying",function(){return this.clip.ended}),this.Play=function(){this.clip.play()},this.Pause=function(){this.clip.pause()},this.SetTime=function(t){this.clip.currentTime=t},this.SetVolume=function(t){this.clip.volume=t>1?.01*t:t},this.EndLoopDecrement=function(){this.loops>0&&this.loops--,this.loops>0&&this.Play()},this.__defineSetter__("Loops",function(t){this.SetLoopCount(t)}),this.SetLoopCount=function(t){0==t?this.clip.loop=!0:0>t?(this.clip.loop=!1,this.loops=0):this.loops=t},this.ended=new $Event,this.ended.Register(this.EndLoopDecrement,this)},$Button=function(t,i,e){this.init(t),this.strokeWidth=1,this.hoverPointer="pointer",null!=i&&(this.label=i,this.label.autoSize=!0),null!=e&&this.onClick.Register(e),this.SetText=function(t){this.label.SetText(t),this.label.rect.x=this.rect.x+.5*(this.rect.width-this.label.rect.width),this.label.rect.y=this.rect.y+.5*(this.rect.height-this.label.rect.height)},null!=i&&this.SetText(i.text),this.Draw=function(t){this.enabled&&(this.label.Draw(t),this.strokeWidth>0&&(t.context.lineWidth=this.strokeWidth,t.context.strokeRect(this.rect.x,this.rect.y,this.rect.width,this.rect.height)))},this.HoverOverEffect=function(){this.strokeWidth=2},this.HoverOutEffect=function(){this.strokeWidth=1},this.onMouseOver.Register(this.HoverOverEffect,this),this.onMouseOut.Register(this.HoverOutEffect,this)};$Button.prototype=new $UI;var $Label=function(t,i,e,s){this.init(t),this.text=i,this.fontSize=20,this.font="Arial, Helvetica, sans-serif",this.textBaseline="top",this.textWrap=null!=e?e:!1,this.autoSize=null!=s?s:!1,this.LineHeight=function(){return this.fontSize+2},this.WrapText=function(t,i,e,s,n,h){for(var o=i.split(" "),r="",u=0;u<o.length;u++){var a=r+o[u]+" ",c=t.measureText(a),l=c.width;l>n&&u>0?(t.fillText(r,e,s),r=o[u]+" ",s+=h):r=a}t.fillText(r,e,s)},this.SetText=function(t){this.text=t,this.autoSize&&(Canvas.context.font=this.fontSize+"px "+this.font,this.rect.width=Canvas.context.measureText(this.text).width,this.rect.height=this.LineHeight())},null!=i&&this.SetText(i),this.Draw=function(t){this.enabled&&(t.context.textBaseline=this.textBaseline,t.context.font=this.fontSize+"px "+this.font,this.textWrap?this.WrapText(t.context,this.text,this.rect.x,this.rect.y,this.rect.width,this.LineHeight()):t.context.fillText(this.text,this.rect.x,this.rect.y))},this.stopTypeWriter=!1,this.TypeWriter=function(t,i,e,s){if(this.stopTypeWriter)return this.stopTypeWriter=!1,this.SetText(t),void e();if(this.SetText(t.substr(0,s)),s++==t.length)return void(null!=e&&e());var n=this;this.typeWriterTimeout=setTimeout(function(){n.TypeWriter(t,i,e,s)},i)},this.StopTypeWriter=function(){this.stopTypeWriter=!0}};$Label.prototype=new $UI;