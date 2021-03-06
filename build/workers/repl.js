/*
  @license
	Rollup.js v2.34.2
	Sun, 06 Dec 2020 05:40:46 GMT - commit 92a2dfa8f18350373aa2329dec45e56bd076909d


	https://github.com/rollup/rollup

	Released under the MIT License.
*/
for(var t={},s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",i=0;i<s.length;i++)t[s.charCodeAt(i)]=i;function n(e,t,s){4===s?e.push([t[0],t[1],t[2],t[3]]):5===s?e.push([t[0],t[1],t[2],t[3],t[4]]):1===s&&e.push([t[0]]);}function r(e){var t="";e=e<0?-e<<1|1:e<<1;do{var i=31&e;(e>>>=5)>0&&(i|=32),t+=s[i];}while(e>0);return t}var a=function e(t){this.bits=t instanceof e?t.bits.slice():[];};a.prototype.add=function(e){this.bits[e>>5]|=1<<(31&e);},a.prototype.has=function(e){return !!(this.bits[e>>5]&1<<(31&e))};var o=function(e,t,s){this.start=e,this.end=t,this.original=s,this.intro="",this.outro="",this.content=s,this.storeName=!1,this.edited=!1,Object.defineProperties(this,{previous:{writable:!0,value:null},next:{writable:!0,value:null}});};o.prototype.appendLeft=function(e){this.outro+=e;},o.prototype.appendRight=function(e){this.intro=this.intro+e;},o.prototype.clone=function(){var e=new o(this.start,this.end,this.original);return e.intro=this.intro,e.outro=this.outro,e.content=this.content,e.storeName=this.storeName,e.edited=this.edited,e},o.prototype.contains=function(e){return this.start<e&&e<this.end},o.prototype.eachNext=function(e){for(var t=this;t;)e(t),t=t.next;},o.prototype.eachPrevious=function(e){for(var t=this;t;)e(t),t=t.previous;},o.prototype.edit=function(e,t,s){return this.content=e,s||(this.intro="",this.outro=""),this.storeName=t,this.edited=!0,this},o.prototype.prependLeft=function(e){this.outro=e+this.outro;},o.prototype.prependRight=function(e){this.intro=e+this.intro;},o.prototype.split=function(e){var t=e-this.start,s=this.original.slice(0,t),i=this.original.slice(t);this.original=s;var n=new o(e,this.end,i);return n.outro=this.outro,this.outro="",this.end=e,this.edited?(n.edit("",!1),this.content=""):this.content=s,n.next=this.next,n.next&&(n.next.previous=n),n.previous=this,this.next=n,n},o.prototype.toString=function(){return this.intro+this.content+this.outro},o.prototype.trimEnd=function(e){if(this.outro=this.outro.replace(e,""),this.outro.length)return !0;var t=this.content.replace(e,"");return t.length?(t!==this.content&&this.split(this.start+t.length).edit("",void 0,!0),!0):(this.edit("",void 0,!0),this.intro=this.intro.replace(e,""),!!this.intro.length||void 0)},o.prototype.trimStart=function(e){if(this.intro=this.intro.replace(e,""),this.intro.length)return !0;var t=this.content.replace(e,"");return t.length?(t!==this.content&&(this.split(this.end-t.length),this.edit("",void 0,!0)),!0):(this.edit("",void 0,!0),this.outro=this.outro.replace(e,""),!!this.outro.length||void 0)};var h=function(){throw new Error("Unsupported environment: `window.btoa` or `Buffer` should be supported.")};"undefined"!=typeof window&&"function"==typeof window.btoa?h=function(e){return window.btoa(unescape(encodeURIComponent(e)))}:"function"==typeof Buffer&&(h=function(e){return Buffer.from(e,"utf-8").toString("base64")});var l=function(e){this.version=3,this.file=e.file,this.sources=e.sources,this.sourcesContent=e.sourcesContent,this.names=e.names,this.mappings=function(e){for(var t=0,s=0,i=0,n=0,a="",o=0;o<e.length;o++){var h=e[o];if(o>0&&(a+=";"),0!==h.length){for(var l=0,c=[],u=0,d=h;u<d.length;u++){var p=d[u],f=r(p[0]-l);l=p[0],p.length>1&&(f+=r(p[1]-t)+r(p[2]-s)+r(p[3]-i),t=p[1],s=p[2],i=p[3]),5===p.length&&(f+=r(p[4]-n),n=p[4]),c.push(f);}a+=c.join(",");}}return a}(e.mappings);};function c(e){var t=e.split("\n"),s=t.filter((function(e){return /^\t+/.test(e)})),i=t.filter((function(e){return /^ {2,}/.test(e)}));if(0===s.length&&0===i.length)return null;if(s.length>=i.length)return "\t";var n=i.reduce((function(e,t){var s=/^ +/.exec(t)[0].length;return Math.min(s,e)}),1/0);return new Array(n+1).join(" ")}function u(e,t){var s=e.split(/[/\\]/),i=t.split(/[/\\]/);for(s.pop();s[0]===i[0];)s.shift(),i.shift();if(s.length)for(var n=s.length;n--;)s[n]="..";return s.concat(i).join("/")}l.prototype.toString=function(){return JSON.stringify(this)},l.prototype.toUrl=function(){return "data:application/json;charset=utf-8;base64,"+h(this.toString())};var d=Object.prototype.toString;function p(e){return "[object Object]"===d.call(e)}function f(e){for(var t=e.split("\n"),s=[],i=0,n=0;i<t.length;i++)s.push(n),n+=t[i].length+1;return function(e){for(var t=0,i=s.length;t<i;){var n=t+i>>1;e<s[n]?i=n:t=n+1;}var r=t-1;return {line:r,column:e-s[r]}}}var m=function(e){this.hires=e,this.generatedCodeLine=0,this.generatedCodeColumn=0,this.raw=[],this.rawSegments=this.raw[this.generatedCodeLine]=[],this.pending=null;};m.prototype.addEdit=function(e,t,s,i){if(t.length){var n=[this.generatedCodeColumn,e,s.line,s.column];i>=0&&n.push(i),this.rawSegments.push(n);}else this.pending&&this.rawSegments.push(this.pending);this.advance(t),this.pending=null;},m.prototype.addUneditedChunk=function(e,t,s,i,n){for(var r=t.start,a=!0;r<t.end;)(this.hires||a||n.has(r))&&this.rawSegments.push([this.generatedCodeColumn,e,i.line,i.column]),"\n"===s[r]?(i.line+=1,i.column=0,this.generatedCodeLine+=1,this.raw[this.generatedCodeLine]=this.rawSegments=[],this.generatedCodeColumn=0,a=!0):(i.column+=1,this.generatedCodeColumn+=1,a=!1),r+=1;this.pending=null;},m.prototype.advance=function(e){if(e){var t=e.split("\n");if(t.length>1){for(var s=0;s<t.length-1;s++)this.generatedCodeLine++,this.raw[this.generatedCodeLine]=this.rawSegments=[];this.generatedCodeColumn=0;}this.generatedCodeColumn+=t[t.length-1].length;}};var g="\n",y={insertLeft:!1,insertRight:!1,storeName:!1},x=function(e,t){void 0===t&&(t={});var s=new o(0,e.length,e);Object.defineProperties(this,{original:{writable:!0,value:e},outro:{writable:!0,value:""},intro:{writable:!0,value:""},firstChunk:{writable:!0,value:s},lastChunk:{writable:!0,value:s},lastSearchedChunk:{writable:!0,value:s},byStart:{writable:!0,value:{}},byEnd:{writable:!0,value:{}},filename:{writable:!0,value:t.filename},indentExclusionRanges:{writable:!0,value:t.indentExclusionRanges},sourcemapLocations:{writable:!0,value:new a},storedNames:{writable:!0,value:{}},indentStr:{writable:!0,value:c(e)}}),this.byStart[0]=s,this.byEnd[e.length]=s;};x.prototype.addSourcemapLocation=function(e){this.sourcemapLocations.add(e);},x.prototype.append=function(e){if("string"!=typeof e)throw new TypeError("outro content must be a string");return this.outro+=e,this},x.prototype.appendLeft=function(e,t){if("string"!=typeof t)throw new TypeError("inserted content must be a string");this._split(e);var s=this.byEnd[e];return s?s.appendLeft(t):this.intro+=t,this},x.prototype.appendRight=function(e,t){if("string"!=typeof t)throw new TypeError("inserted content must be a string");this._split(e);var s=this.byStart[e];return s?s.appendRight(t):this.outro+=t,this},x.prototype.clone=function(){for(var e=new x(this.original,{filename:this.filename}),t=this.firstChunk,s=e.firstChunk=e.lastSearchedChunk=t.clone();t;){e.byStart[s.start]=s,e.byEnd[s.end]=s;var i=t.next,n=i&&i.clone();n&&(s.next=n,n.previous=s,s=n),t=i;}return e.lastChunk=s,this.indentExclusionRanges&&(e.indentExclusionRanges=this.indentExclusionRanges.slice()),e.sourcemapLocations=new a(this.sourcemapLocations),e.intro=this.intro,e.outro=this.outro,e},x.prototype.generateDecodedMap=function(e){var t=this;e=e||{};var s=Object.keys(this.storedNames),i=new m(e.hires),n=f(this.original);return this.intro&&i.advance(this.intro),this.firstChunk.eachNext((function(e){var r=n(e.start);e.intro.length&&i.advance(e.intro),e.edited?i.addEdit(0,e.content,r,e.storeName?s.indexOf(e.original):-1):i.addUneditedChunk(0,e,t.original,r,t.sourcemapLocations),e.outro.length&&i.advance(e.outro);})),{file:e.file?e.file.split(/[/\\]/).pop():null,sources:[e.source?u(e.file||"",e.source):null],sourcesContent:e.includeContent?[this.original]:[null],names:s,mappings:i.raw}},x.prototype.generateMap=function(e){return new l(this.generateDecodedMap(e))},x.prototype.getIndentString=function(){return null===this.indentStr?"\t":this.indentStr},x.prototype.indent=function(e,t){var s=/^[^\r\n]/gm;if(p(e)&&(t=e,e=void 0),""===(e=void 0!==e?e:this.indentStr||"\t"))return this;var i={};(t=t||{}).exclude&&("number"==typeof t.exclude[0]?[t.exclude]:t.exclude).forEach((function(e){for(var t=e[0];t<e[1];t+=1)i[t]=!0;}));var n=!1!==t.indentStart,r=function(t){return n?""+e+t:(n=!0,t)};this.intro=this.intro.replace(s,r);for(var a=0,o=this.firstChunk;o;){var h=o.end;if(o.edited)i[a]||(o.content=o.content.replace(s,r),o.content.length&&(n="\n"===o.content[o.content.length-1]));else for(a=o.start;a<h;){if(!i[a]){var l=this.original[a];"\n"===l?n=!0:"\r"!==l&&n&&(n=!1,a===o.start?o.prependRight(e):(this._splitChunk(o,a),(o=o.next).prependRight(e)));}a+=1;}a=o.end,o=o.next;}return this.outro=this.outro.replace(s,r),this},x.prototype.insert=function(){throw new Error("magicString.insert(...) is deprecated. Use prependRight(...) or appendLeft(...)")},x.prototype.insertLeft=function(e,t){return y.insertLeft||(console.warn("magicString.insertLeft(...) is deprecated. Use magicString.appendLeft(...) instead"),y.insertLeft=!0),this.appendLeft(e,t)},x.prototype.insertRight=function(e,t){return y.insertRight||(console.warn("magicString.insertRight(...) is deprecated. Use magicString.prependRight(...) instead"),y.insertRight=!0),this.prependRight(e,t)},x.prototype.move=function(e,t,s){if(s>=e&&s<=t)throw new Error("Cannot move a selection inside itself");this._split(e),this._split(t),this._split(s);var i=this.byStart[e],n=this.byEnd[t],r=i.previous,a=n.next,o=this.byStart[s];if(!o&&n===this.lastChunk)return this;var h=o?o.previous:this.lastChunk;return r&&(r.next=a),a&&(a.previous=r),h&&(h.next=i),o&&(o.previous=n),i.previous||(this.firstChunk=n.next),n.next||(this.lastChunk=i.previous,this.lastChunk.next=null),i.previous=h,n.next=o||null,h||(this.firstChunk=i),o||(this.lastChunk=n),this},x.prototype.overwrite=function(e,t,s,i){if("string"!=typeof s)throw new TypeError("replacement content must be a string");for(;e<0;)e+=this.original.length;for(;t<0;)t+=this.original.length;if(t>this.original.length)throw new Error("end is out of bounds");if(e===t)throw new Error("Cannot overwrite a zero-length range – use appendLeft or prependRight instead");this._split(e),this._split(t),!0===i&&(y.storeName||(console.warn("The final argument to magicString.overwrite(...) should be an options object. See https://github.com/rich-harris/magic-string"),y.storeName=!0),i={storeName:!0});var n=void 0!==i&&i.storeName,r=void 0!==i&&i.contentOnly;if(n){var a=this.original.slice(e,t);this.storedNames[a]=!0;}var h=this.byStart[e],l=this.byEnd[t];if(h){if(t>h.end&&h.next!==this.byStart[h.end])throw new Error("Cannot overwrite across a split point");if(h.edit(s,n,r),h!==l){for(var c=h.next;c!==l;)c.edit("",!1),c=c.next;c.edit("",!1);}}else {var u=new o(e,t,"").edit(s,n);l.next=u,u.previous=l;}return this},x.prototype.prepend=function(e){if("string"!=typeof e)throw new TypeError("outro content must be a string");return this.intro=e+this.intro,this},x.prototype.prependLeft=function(e,t){if("string"!=typeof t)throw new TypeError("inserted content must be a string");this._split(e);var s=this.byEnd[e];return s?s.prependLeft(t):this.intro=t+this.intro,this},x.prototype.prependRight=function(e,t){if("string"!=typeof t)throw new TypeError("inserted content must be a string");this._split(e);var s=this.byStart[e];return s?s.prependRight(t):this.outro=t+this.outro,this},x.prototype.remove=function(e,t){for(;e<0;)e+=this.original.length;for(;t<0;)t+=this.original.length;if(e===t)return this;if(e<0||t>this.original.length)throw new Error("Character is out of bounds");if(e>t)throw new Error("end must be greater than start");this._split(e),this._split(t);for(var s=this.byStart[e];s;)s.intro="",s.outro="",s.edit(""),s=t>s.end?this.byStart[s.end]:null;return this},x.prototype.lastChar=function(){if(this.outro.length)return this.outro[this.outro.length-1];var e=this.lastChunk;do{if(e.outro.length)return e.outro[e.outro.length-1];if(e.content.length)return e.content[e.content.length-1];if(e.intro.length)return e.intro[e.intro.length-1]}while(e=e.previous);return this.intro.length?this.intro[this.intro.length-1]:""},x.prototype.lastLine=function(){var e=this.outro.lastIndexOf(g);if(-1!==e)return this.outro.substr(e+1);var t=this.outro,s=this.lastChunk;do{if(s.outro.length>0){if(-1!==(e=s.outro.lastIndexOf(g)))return s.outro.substr(e+1)+t;t=s.outro+t;}if(s.content.length>0){if(-1!==(e=s.content.lastIndexOf(g)))return s.content.substr(e+1)+t;t=s.content+t;}if(s.intro.length>0){if(-1!==(e=s.intro.lastIndexOf(g)))return s.intro.substr(e+1)+t;t=s.intro+t;}}while(s=s.previous);return -1!==(e=this.intro.lastIndexOf(g))?this.intro.substr(e+1)+t:this.intro+t},x.prototype.slice=function(e,t){for(void 0===e&&(e=0),void 0===t&&(t=this.original.length);e<0;)e+=this.original.length;for(;t<0;)t+=this.original.length;for(var s="",i=this.firstChunk;i&&(i.start>e||i.end<=e);){if(i.start<t&&i.end>=t)return s;i=i.next;}if(i&&i.edited&&i.start!==e)throw new Error("Cannot use replaced character "+e+" as slice start anchor.");for(var n=i;i;){!i.intro||n===i&&i.start!==e||(s+=i.intro);var r=i.start<t&&i.end>=t;if(r&&i.edited&&i.end!==t)throw new Error("Cannot use replaced character "+t+" as slice end anchor.");var a=n===i?e-i.start:0,o=r?i.content.length+t-i.end:i.content.length;if(s+=i.content.slice(a,o),!i.outro||r&&i.end!==t||(s+=i.outro),r)break;i=i.next;}return s},x.prototype.snip=function(e,t){var s=this.clone();return s.remove(0,e),s.remove(t,s.original.length),s},x.prototype._split=function(e){if(!this.byStart[e]&&!this.byEnd[e])for(var t=this.lastSearchedChunk,s=e>t.end;t;){if(t.contains(e))return this._splitChunk(t,e);t=s?this.byStart[t.end]:this.byEnd[t.start];}},x.prototype._splitChunk=function(e,t){if(e.edited&&e.content.length){var s=f(this.original)(t);throw new Error("Cannot split a chunk that has already been edited ("+s.line+":"+s.column+' – "'+e.original+'")')}var i=e.split(t);return this.byEnd[t]=e,this.byStart[t]=i,this.byEnd[i.end]=i,e===this.lastChunk&&(this.lastChunk=i),this.lastSearchedChunk=e,!0},x.prototype.toString=function(){for(var e=this.intro,t=this.firstChunk;t;)e+=t.toString(),t=t.next;return e+this.outro},x.prototype.isEmpty=function(){var e=this.firstChunk;do{if(e.intro.length&&e.intro.trim()||e.content.length&&e.content.trim()||e.outro.length&&e.outro.trim())return !1}while(e=e.next);return !0},x.prototype.length=function(){var e=this.firstChunk,t=0;do{t+=e.intro.length+e.content.length+e.outro.length;}while(e=e.next);return t},x.prototype.trimLines=function(){return this.trim("[\\r\\n]")},x.prototype.trim=function(e){return this.trimStart(e).trimEnd(e)},x.prototype.trimEndAborted=function(e){var t=new RegExp((e||"\\s")+"+$");if(this.outro=this.outro.replace(t,""),this.outro.length)return !0;var s=this.lastChunk;do{var i=s.end,n=s.trimEnd(t);if(s.end!==i&&(this.lastChunk===s&&(this.lastChunk=s.next),this.byEnd[s.end]=s,this.byStart[s.next.start]=s.next,this.byEnd[s.next.end]=s.next),n)return !0;s=s.previous;}while(s);return !1},x.prototype.trimEnd=function(e){return this.trimEndAborted(e),this},x.prototype.trimStartAborted=function(e){var t=new RegExp("^"+(e||"\\s")+"+");if(this.intro=this.intro.replace(t,""),this.intro.length)return !0;var s=this.firstChunk;do{var i=s.end,n=s.trimStart(t);if(s.end!==i&&(s===this.lastChunk&&(this.lastChunk=s.next),this.byEnd[s.end]=s,this.byStart[s.next.start]=s.next,this.byEnd[s.next.end]=s.next),n)return !0;s=s.next;}while(s);return !1},x.prototype.trimStart=function(e){return this.trimStartAborted(e),this};var E=Object.prototype.hasOwnProperty,v=function(e){void 0===e&&(e={}),this.intro=e.intro||"",this.separator=void 0!==e.separator?e.separator:"\n",this.sources=[],this.uniqueSources=[],this.uniqueSourceIndexByFilename={};};function b(e,t){const s=e.split(/[/\\]/).filter(Boolean),i=t.split(/[/\\]/).filter(Boolean);for("."===s[0]&&s.shift(),"."===i[0]&&i.shift();s[0]&&i[0]&&s[0]===i[0];)s.shift(),i.shift();for(;".."===i[0]&&s.length>0;)i.shift(),s.pop();for(;s.pop();)i.unshift("..");return i.join("/")}v.prototype.addSource=function(e){if(e instanceof x)return this.addSource({content:e,filename:e.filename,separator:this.separator});if(!p(e)||!e.content)throw new Error("bundle.addSource() takes an object with a `content` property, which should be an instance of MagicString, and an optional `filename`");if(["filename","indentExclusionRanges","separator"].forEach((function(t){E.call(e,t)||(e[t]=e.content[t]);})),void 0===e.separator&&(e.separator=this.separator),e.filename)if(E.call(this.uniqueSourceIndexByFilename,e.filename)){var t=this.uniqueSources[this.uniqueSourceIndexByFilename[e.filename]];if(e.content.original!==t.content)throw new Error("Illegal source: same filename ("+e.filename+"), different contents")}else this.uniqueSourceIndexByFilename[e.filename]=this.uniqueSources.length,this.uniqueSources.push({filename:e.filename,content:e.content.original});return this.sources.push(e),this},v.prototype.append=function(e,t){return this.addSource({content:new x(e),separator:t&&t.separator||""}),this},v.prototype.clone=function(){var e=new v({intro:this.intro,separator:this.separator});return this.sources.forEach((function(t){e.addSource({filename:t.filename,content:t.content.clone(),separator:t.separator});})),e},v.prototype.generateDecodedMap=function(e){var t=this;void 0===e&&(e={});var s=[];this.sources.forEach((function(e){Object.keys(e.content.storedNames).forEach((function(e){~s.indexOf(e)||s.push(e);}));}));var i=new m(e.hires);return this.intro&&i.advance(this.intro),this.sources.forEach((function(e,n){n>0&&i.advance(t.separator);var r=e.filename?t.uniqueSourceIndexByFilename[e.filename]:-1,a=e.content,o=f(a.original);a.intro&&i.advance(a.intro),a.firstChunk.eachNext((function(t){var n=o(t.start);t.intro.length&&i.advance(t.intro),e.filename?t.edited?i.addEdit(r,t.content,n,t.storeName?s.indexOf(t.original):-1):i.addUneditedChunk(r,t,a.original,n,a.sourcemapLocations):i.advance(t.content),t.outro.length&&i.advance(t.outro);})),a.outro&&i.advance(a.outro);})),{file:e.file?e.file.split(/[/\\]/).pop():null,sources:this.uniqueSources.map((function(t){return e.file?u(e.file,t.filename):t.filename})),sourcesContent:this.uniqueSources.map((function(t){return e.includeContent?t.content:null})),names:s,mappings:i.raw}},v.prototype.generateMap=function(e){return new l(this.generateDecodedMap(e))},v.prototype.getIndentString=function(){var e={};return this.sources.forEach((function(t){var s=t.content.indentStr;null!==s&&(e[s]||(e[s]=0),e[s]+=1);})),Object.keys(e).sort((function(t,s){return e[t]-e[s]}))[0]||"\t"},v.prototype.indent=function(e){var t=this;if(arguments.length||(e=this.getIndentString()),""===e)return this;var s=!this.intro||"\n"===this.intro.slice(-1);return this.sources.forEach((function(i,n){var r=void 0!==i.separator?i.separator:t.separator,a=s||n>0&&/\r?\n$/.test(r);i.content.indent(e,{exclude:i.indentExclusionRanges,indentStart:a}),s="\n"===i.content.lastChar();})),this.intro&&(this.intro=e+this.intro.replace(/^[^\n]/gm,(function(t,s){return s>0?e+t:t}))),this},v.prototype.prepend=function(e){return this.intro=e+this.intro,this},v.prototype.toString=function(){var e=this,t=this.sources.map((function(t,s){var i=void 0!==t.separator?t.separator:e.separator;return (s>0?i:"")+t.content.toString()})).join("");return this.intro+t},v.prototype.isEmpty=function(){return (!this.intro.length||!this.intro.trim())&&!this.sources.some((function(e){return !e.content.isEmpty()}))},v.prototype.length=function(){return this.sources.reduce((function(e,t){return e+t.content.length()}),this.intro.length)},v.prototype.trimLines=function(){return this.trim("[\\r\\n]")},v.prototype.trim=function(e){return this.trimStart(e).trimEnd(e)},v.prototype.trimStart=function(e){var t=new RegExp("^"+(e||"\\s")+"+");if(this.intro=this.intro.replace(t,""),!this.intro){var s,i=0;do{if(!(s=this.sources[i++]))break}while(!s.content.trimStartAborted(e))}return this},v.prototype.trimEnd=function(e){var t,s=new RegExp((e||"\\s")+"+$"),i=this.sources.length-1;do{if(!(t=this.sources[i--])){this.intro=this.intro.replace(s,"");break}}while(!t.content.trimEndAborted(e));return this};function S(e,t,s,i){if(t.remove(s,i),e.annotations)for(const i of e.annotations){if(!(i.start<s))return;t.remove(i.start,i.end);}}function A(e,t){if(e.annotations||"ExpressionStatement"!==e.parent.type||(e=e.parent),e.annotations)for(const s of e.annotations)t.remove(s.start,s.end);}const P={isNoStatement:!0};function C(e,t,s=0){let i,n;for(i=e.indexOf(t,s);;){if(-1===(s=e.indexOf("/",s))||s>=i)return i;n=e.charCodeAt(++s),++s,(s=47===n?e.indexOf("\n",s)+1:e.indexOf("*/",s)+2)>i&&(i=e.indexOf(t,s));}}const N=/\s/;function k(e,t){for(;t<e.length&&N.test(e[t]);)t++;return t}function w(e){let t,s,i=0;for(t=e.indexOf("\n",i);;){if(i=e.indexOf("/",i),-1===i||i>t)return [t,t+1];if(s=e.charCodeAt(i+1),47===s)return [i,t+1];i=e.indexOf("*/",i+3)+2,i>t&&(t=e.indexOf("\n",i));}}function _(e,t,s,i,n){let r,a,o,h,l=e[0],c=!l.included||l.needsBoundaries;c&&(h=s+w(t.original.slice(s,l.start))[1]);for(let s=1;s<=e.length;s++)r=l,a=h,o=c,l=e[s],c=void 0!==l&&(!l.included||l.needsBoundaries),o||c?(h=r.end+w(t.original.slice(r.end,void 0===l?i:l.start))[1],r.included?o?r.render(t,n,{end:h,start:a}):r.render(t,n):S(r,t,a,h)):r.render(t,n);}function I(e,t,s,i){const n=[];let r,a,o,h,l,c=s-1;for(let i=0;i<e.length;i++){for(a=e[i],void 0!==r&&(c=r.end+C(t.original.slice(r.end,a.start),",")),o=h=c+1+w(t.original.slice(c+1,a.start))[1];l=t.original.charCodeAt(o),32===l||9===l||10===l||13===l;)o++;void 0!==r&&n.push({contentEnd:h,end:o,node:r,separator:c,start:s}),r=a,s=o;}return n.push({contentEnd:i,end:i,node:r,separator:null,start:s}),n}function $(e,t,s){for(;;){const[i,n]=w(e.original.slice(t,s));if(-1===i)break;e.remove(t+i,t+=n);}}function T(e,t){const s=t.compact?"":" ";if(1===e.length&&1===t.exportNamesByVariable.get(e[0]).length){const i=e[0];return `exports('${t.exportNamesByVariable.get(i)}',${s}${i.getName()})`}return `exports({${s}${e.map((e=>t.exportNamesByVariable.get(e).map((t=>`${t}:${s}${e.getName()}`)).join(`,${s}`))).join(`,${s}`)}${s}})`}function M(e,t,s){const i=s.compact?"":" ",n=s.compact?"":";";return `function${i}(v)${i}{${i}return exports({${i}${e.map((e=>s.exportNamesByVariable.get(e).map((s=>`${s}:${i}${t?e.getName():"v"}`)).join(`,${i}`))).join(`,${i}`)}${i}}),${i}v${n}${i}}(`}function L(e){let t="";do{const s=e%64;e=Math.floor(e/64),t="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$"[s]+t;}while(0!==e);return t}const R={__proto__:null,await:!0,break:!0,case:!0,catch:!0,class:!0,const:!0,continue:!0,debugger:!0,default:!0,delete:!0,do:!0,else:!0,enum:!0,eval:!0,export:!0,extends:!0,false:!0,finally:!0,for:!0,function:!0,if:!0,implements:!0,import:!0,in:!0,instanceof:!0,interface:!0,let:!0,new:!0,null:!0,package:!0,private:!0,protected:!0,public:!0,return:!0,static:!0,super:!0,switch:!0,this:!0,throw:!0,true:!0,try:!0,typeof:!0,undefined:!0,var:!0,void:!0,while:!0,with:!0,yield:!0};function O(e,t){let s=e,i=1;for(;t.has(s)||R[s];)s=`${e}$${L(i++)}`;return t.add(s),s}const D=[];function V(e,t,s){const i=e.get(t);if(i)return i;const n=s();return e.set(t,n),n}const B=Symbol("Unknown Key"),F=[],W=[B],U=Symbol("Entities");class z{constructor(){this.entityPaths=Object.create(null,{[U]:{value:new Set}});}getEntities(e){let t=this.entityPaths;for(const s of e)t=t[s]=t[s]||Object.create(null,{[U]:{value:new Set}});return t[U]}}const j=new z;class G{constructor(){this.entityPaths=Object.create(null,{[U]:{value:new Map}});}getEntities(e,t){let s=this.entityPaths;for(const t of e)s=s[t]=s[t]||Object.create(null,{[U]:{value:new Map}});return V(s[U],t,(()=>new Set))}}function H(e,t=null){return Object.create(t,e)}const q=Symbol("Unknown Value"),K={deoptimizePath:()=>{},getLiteralValueAtPath:()=>q,getReturnExpressionWhenCalledAtPath:()=>K,hasEffectsWhenAccessedAtPath:e=>e.length>0,hasEffectsWhenAssignedAtPath:e=>e.length>0,hasEffectsWhenCalledAtPath:()=>!0,include:()=>{},includeCallArguments(e,t){for(const s of t)s.include(e,!1);},included:!0,toString:()=>"[[UNKNOWN]]"},X={deoptimizePath:()=>{},getLiteralValueAtPath:()=>{},getReturnExpressionWhenCalledAtPath:()=>K,hasEffectsWhenAccessedAtPath:e=>e.length>0,hasEffectsWhenAssignedAtPath:e=>e.length>0,hasEffectsWhenCalledAtPath:()=>!0,include:()=>{},includeCallArguments(){},included:!0,toString:()=>"undefined"},Y={value:{callsArgs:null,mutatesSelf:!1,returns:null,returnsPrimitive:K}},Q={value:{returns:null,returnsPrimitive:K,callsArgs:null,mutatesSelf:!0}},J={value:{returns:null,returnsPrimitive:K,callsArgs:[0],mutatesSelf:!1}};class Z{constructor(){this.included=!1;}deoptimizePath(){}getLiteralValueAtPath(){return q}getReturnExpressionWhenCalledAtPath(e){return 1===e.length?ve(me,e[0]):K}hasEffectsWhenAccessedAtPath(e){return e.length>1}hasEffectsWhenAssignedAtPath(e){return e.length>1}hasEffectsWhenCalledAtPath(e,t,s){return 1!==e.length||Ee(me,e[0],this.included,t,s)}include(){this.included=!0;}includeCallArguments(e,t){for(const s of t)s.include(e,!1);}toString(){return "[[UNKNOWN ARRAY]]"}}const ee={value:{callsArgs:null,mutatesSelf:!1,returns:Z,returnsPrimitive:null}},te={value:{callsArgs:null,mutatesSelf:!0,returns:Z,returnsPrimitive:null}},se={value:{callsArgs:[0],mutatesSelf:!1,returns:Z,returnsPrimitive:null}},ie={value:{callsArgs:[0],mutatesSelf:!0,returns:Z,returnsPrimitive:null}},ne={deoptimizePath:()=>{},getLiteralValueAtPath:()=>q,getReturnExpressionWhenCalledAtPath:e=>1===e.length?ve(ge,e[0]):K,hasEffectsWhenAccessedAtPath:e=>e.length>1,hasEffectsWhenAssignedAtPath:e=>e.length>0,hasEffectsWhenCalledAtPath:e=>{if(1===e.length){const t=e[0];return "string"!=typeof t||!ge[t]}return !0},include:()=>{},includeCallArguments(e,t){for(const s of t)s.include(e,!1);},included:!0,toString:()=>"[[UNKNOWN BOOLEAN]]"},re={value:{callsArgs:null,mutatesSelf:!1,returns:null,returnsPrimitive:ne}},ae={value:{callsArgs:[0],mutatesSelf:!1,returns:null,returnsPrimitive:ne}},oe={deoptimizePath:()=>{},getLiteralValueAtPath:()=>q,getReturnExpressionWhenCalledAtPath:e=>1===e.length?ve(ye,e[0]):K,hasEffectsWhenAccessedAtPath:e=>e.length>1,hasEffectsWhenAssignedAtPath:e=>e.length>0,hasEffectsWhenCalledAtPath:e=>{if(1===e.length){const t=e[0];return "string"!=typeof t||!ye[t]}return !0},include:()=>{},includeCallArguments(e,t){for(const s of t)s.include(e,!1);},included:!0,toString:()=>"[[UNKNOWN NUMBER]]"},he={value:{callsArgs:null,mutatesSelf:!1,returns:null,returnsPrimitive:oe}},le={value:{callsArgs:null,mutatesSelf:!0,returns:null,returnsPrimitive:oe}},ce={value:{callsArgs:[0],mutatesSelf:!1,returns:null,returnsPrimitive:oe}},ue={deoptimizePath:()=>{},getLiteralValueAtPath:()=>q,getReturnExpressionWhenCalledAtPath:e=>1===e.length?ve(xe,e[0]):K,hasEffectsWhenAccessedAtPath:e=>e.length>1,hasEffectsWhenAssignedAtPath:e=>e.length>0,hasEffectsWhenCalledAtPath:(e,t,s)=>1!==e.length||Ee(xe,e[0],!0,t,s),include:()=>{},includeCallArguments(e,t){for(const s of t)s.include(e,!1);},included:!0,toString:()=>"[[UNKNOWN STRING]]"},de={value:{callsArgs:null,mutatesSelf:!1,returns:null,returnsPrimitive:ue}};class pe{constructor(){this.included=!1;}deoptimizePath(){}getLiteralValueAtPath(){return q}getReturnExpressionWhenCalledAtPath(e){return 1===e.length?ve(fe,e[0]):K}hasEffectsWhenAccessedAtPath(e){return e.length>1}hasEffectsWhenAssignedAtPath(e){return e.length>1}hasEffectsWhenCalledAtPath(e,t,s){return 1!==e.length||Ee(fe,e[0],this.included,t,s)}include(){this.included=!0;}includeCallArguments(e,t){for(const s of t)s.include(e,!1);}toString(){return "[[UNKNOWN OBJECT]]"}}const fe=H({hasOwnProperty:re,isPrototypeOf:re,propertyIsEnumerable:re,toLocaleString:de,toString:de,valueOf:Y}),me=H({concat:ee,copyWithin:te,every:ae,fill:te,filter:se,find:J,findIndex:ce,forEach:J,includes:re,indexOf:he,join:de,lastIndexOf:he,map:se,pop:Q,push:le,reduce:J,reduceRight:J,reverse:te,shift:Q,slice:ee,some:ae,sort:ie,splice:te,unshift:le},fe),ge=H({valueOf:re},fe),ye=H({toExponential:de,toFixed:de,toLocaleString:de,toPrecision:de,valueOf:he},fe),xe=H({charAt:de,charCodeAt:he,codePointAt:he,concat:de,endsWith:re,includes:re,indexOf:he,lastIndexOf:he,localeCompare:he,match:re,normalize:de,padEnd:de,padStart:de,repeat:de,replace:{value:{callsArgs:[1],mutatesSelf:!1,returns:null,returnsPrimitive:ue}},search:he,slice:de,split:ee,startsWith:re,substr:de,substring:de,toLocaleLowerCase:de,toLocaleUpperCase:de,toLowerCase:de,toUpperCase:de,trim:de,valueOf:de},fe);function Ee(e,t,s,i,n){if("string"!=typeof t||!e[t]||e[t].mutatesSelf&&s)return !0;if(!e[t].callsArgs)return !1;for(const s of e[t].callsArgs)if(i.args[s]&&i.args[s].hasEffectsWhenCalledAtPath(F,{args:D,withNew:!1},n))return !0;return !1}function ve(e,t){return "string"==typeof t&&e[t]?null!==e[t].returnsPrimitive?e[t].returnsPrimitive:new e[t].returns:K}class be{constructor(e){this.alwaysRendered=!1,this.included=!1,this.isId=!1,this.isReassigned=!1,this.renderBaseName=null,this.renderName=null,this.name=e;}addReference(e){}deoptimizePath(e){}getBaseVariableName(){return this.renderBaseName||this.renderName||this.name}getLiteralValueAtPath(e,t,s){return q}getName(){const e=this.renderName||this.name;return this.renderBaseName?`${this.renderBaseName}${R[e]?`['${e}']`:`.${e}`}`:e}getReturnExpressionWhenCalledAtPath(e,t,s){return K}hasEffectsWhenAccessedAtPath(e,t){return e.length>0}hasEffectsWhenAssignedAtPath(e,t){return !0}hasEffectsWhenCalledAtPath(e,t,s){return !0}include(){this.included=!0;}includeCallArguments(e,t){for(const s of t)s.include(e,!1);}markCalledFromTryStatement(){}setRenderNames(e,t){this.renderBaseName=e,this.renderName=t;}}class Se extends be{constructor(e,t){super(t),this.module=e,this.isNamespace="*"===t,this.referenced=!1;}addReference(e){this.referenced=!0,"default"!==this.name&&"*"!==this.name||this.module.suggestName(e.name);}include(){this.included||(this.included=!0,this.module.used=!0);}}const Ae=Object.freeze(Object.create(null)),Pe=Object.freeze({}),Ce=Object.freeze([]),Ne="break case class catch const continue debugger default delete do else export extends finally for function if import in instanceof let new return super switch this throw try typeof var void while with yield enum await implements package protected static interface private public".split(" "),ke="Infinity NaN undefined null true false eval uneval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Symbol Error EvalError InternalError RangeError ReferenceError SyntaxError TypeError URIError Number Math Date String RegExp Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array Map Set WeakMap WeakSet SIMD ArrayBuffer DataView JSON Promise Generator GeneratorFunction Reflect Proxy Intl".split(" "),we=new Set(Ne.concat(ke)),_e=/[^$_a-zA-Z0-9]/g,Ie=e=>/\d/.test(e[0]);function $e(e){return e=e.replace(/-(\w)/g,((e,t)=>t.toUpperCase())).replace(_e,"_"),(Ie(e)||we.has(e))&&(e=`_${e}`),e||"_"}const Te=/^(?:\/|(?:[A-Za-z]:)?[\\|/])/,Me=/^\.?\.\//;function Le(e){return Te.test(e)}function Re(e){return Me.test(e)}function Oe(e){return e.replace(/\\/g,"/")}function De(e){return e.split(/(\/|\\)/).pop()}function Ve(e){const t=/(\/|\\)[^/\\]*$/.exec(e);if(!t)return ".";const s=e.slice(0,-t[0].length);return s||"/"}function Be(e){const t=/\.[^.]+$/.exec(De(e));return t?t[0]:""}function Fe(e,t){const s=e.split(/[/\\]/).filter(Boolean),i=t.split(/[/\\]/).filter(Boolean);for("."===s[0]&&s.shift(),"."===i[0]&&i.shift();s[0]&&i[0]&&s[0]===i[0];)s.shift(),i.shift();for(;".."===i[0]&&s.length>0;)i.shift(),s.pop();for(;s.pop();)i.unshift("..");return i.join("/")}function We(...e){let t=e.shift().split(/[/\\]/);return e.forEach((e=>{if(Le(e))t=e.split(/[/\\]/);else {const s=e.split(/[/\\]/);for(;"."===s[0]||".."===s[0];){".."===s.shift()&&t.pop();}t.push.apply(t,s);}})),t.join("/")}class Ue{constructor(e,t,s,i){this.options=e,this.id=t,this.defaultVariableName="",this.dynamicImporters=[],this.importers=[],this.mostCommonSuggestion=0,this.namespaceVariableName="",this.reexported=!1,this.renderPath=void 0,this.renormalizeRenderPath=!1,this.used=!1,this.variableName="",this.execIndex=1/0,this.suggestedVariableName=$e(t.split(/[\\/]/).pop()),this.nameSuggestions=Object.create(null),this.declarations=Object.create(null),this.exportedVariables=new Map;const n=this;this.info={ast:null,code:null,dynamicallyImportedIds:Ce,get dynamicImporters(){return n.dynamicImporters.sort()},hasModuleSideEffects:s,id:t,implicitlyLoadedAfterOneOf:Ce,implicitlyLoadedBefore:Ce,importedIds:Ce,get importers(){return n.importers.sort()},isEntry:!1,isExternal:!0,meta:i,syntheticNamedExports:!1};}getVariableForExportName(e){let t=this.declarations[e];return t||(this.declarations[e]=t=new Se(this,e),this.exportedVariables.set(t,e),t)}setRenderPath(e,t){return this.renderPath="function"==typeof e.paths?e.paths(this.id):e.paths[this.id],this.renderPath||(Le(this.id)?(this.renderPath=Oe(Fe(t,this.id)),this.renormalizeRenderPath=!0):this.renderPath=this.id),this.renderPath}suggestName(e){this.nameSuggestions[e]||(this.nameSuggestions[e]=0),this.nameSuggestions[e]+=1,this.nameSuggestions[e]>this.mostCommonSuggestion&&(this.mostCommonSuggestion=this.nameSuggestions[e],this.suggestedVariableName=e);}warnUnusedImports(){const e=Object.keys(this.declarations).filter((e=>{if("*"===e)return !1;const t=this.declarations[e];return !t.included&&!this.reexported&&!t.referenced}));if(0===e.length)return;const t=1===e.length?`'${e[0]}' is`:`${e.slice(0,-1).map((e=>`'${e}'`)).join(", ")} and '${e.slice(-1)}' are`;this.options.onwarn({code:"UNUSED_EXTERNAL_IMPORT",message:`${t} imported from external module '${this.id}' but never used`,names:e,source:this.id});}}function ze(e){e.isExecuted=!0;const t=[e],s=new Set;for(const e of t)for(const i of [...e.dependencies,...e.implicitlyLoadedBefore])i instanceof Ue||i.isExecuted||!i.info.hasModuleSideEffects&&!e.implicitlyLoadedBefore.has(i)||s.has(i.id)||(i.isExecuted=!0,s.add(i.id),t.push(i));}function je(){return {brokenFlow:0,includedCallArguments:new Set,includedLabels:new Set}}function Ge(){return {accessed:new z,assigned:new z,brokenFlow:0,called:new G,ignore:{breaks:!1,continues:!1,labels:new Set,returnAwaitYield:!1},includedLabels:new Set,instantiated:new G,replacedVariableInits:new Map}}class He extends be{constructor(e,t,s,i){super(e),this.additionalInitializers=null,this.calledFromTryStatement=!1,this.expressionsToBeDeoptimized=[],this.declarations=t?[t]:[],this.init=s,this.deoptimizationTracker=i.deoptimizationTracker,this.module=i.module;}addDeclaration(e,t){this.declarations.push(e),null===this.additionalInitializers&&(this.additionalInitializers=null===this.init?[]:[this.init],this.init=K,this.isReassigned=!0),null!==t&&this.additionalInitializers.push(t);}consolidateInitializers(){if(null!==this.additionalInitializers){for(const e of this.additionalInitializers)e.deoptimizePath(W);this.additionalInitializers=null;}}deoptimizePath(e){if(e.length>7||this.isReassigned)return;const t=this.deoptimizationTracker.getEntities(e);if(!t.has(this))if(t.add(this),0===e.length){if(!this.isReassigned){this.isReassigned=!0;const e=this.expressionsToBeDeoptimized;this.expressionsToBeDeoptimized=[];for(const t of e)t.deoptimizeCache();this.init&&this.init.deoptimizePath(W);}}else this.init&&this.init.deoptimizePath(e);}getLiteralValueAtPath(e,t,s){if(this.isReassigned||!this.init||e.length>7)return q;const i=t.getEntities(e);if(i.has(this.init))return q;this.expressionsToBeDeoptimized.push(s),i.add(this.init);const n=this.init.getLiteralValueAtPath(e,t,s);return i.delete(this.init),n}getReturnExpressionWhenCalledAtPath(e,t,s){if(this.isReassigned||!this.init||e.length>7)return K;const i=t.getEntities(e);if(i.has(this.init))return K;this.expressionsToBeDeoptimized.push(s),i.add(this.init);const n=this.init.getReturnExpressionWhenCalledAtPath(e,t,s);return i.delete(this.init),n}hasEffectsWhenAccessedAtPath(e,t){if(0===e.length)return !1;if(this.isReassigned||e.length>7)return !0;const s=t.accessed.getEntities(e);return !s.has(this)&&(s.add(this),this.init&&this.init.hasEffectsWhenAccessedAtPath(e,t))}hasEffectsWhenAssignedAtPath(e,t){if(this.included||e.length>7)return !0;if(0===e.length)return !1;if(this.isReassigned)return !0;const s=t.assigned.getEntities(e);return !s.has(this)&&(s.add(this),this.init&&this.init.hasEffectsWhenAssignedAtPath(e,t))}hasEffectsWhenCalledAtPath(e,t,s){if(e.length>7||this.isReassigned)return !0;const i=(t.withNew?s.instantiated:s.called).getEntities(e,t);return !i.has(this)&&(i.add(this),this.init&&this.init.hasEffectsWhenCalledAtPath(e,t,s))}include(){if(!this.included){this.included=!0,this.module.isExecuted||ze(this.module);for(const e of this.declarations){e.included||e.include(je(),!1);let t=e.parent;for(;!t.included&&(t.included=!0,"Program"!==t.type);)t=t.parent;}}}includeCallArguments(e,t){if(this.isReassigned||this.init&&e.includedCallArguments.has(this.init))for(const s of t)s.include(e,!1);else this.init&&(e.includedCallArguments.add(this.init),this.init.includeCallArguments(e,t),e.includedCallArguments.delete(this.init));}markCalledFromTryStatement(){this.calledFromTryStatement=!0;}}class qe{constructor(){this.children=[],this.variables=new Map;}addDeclaration(e,t,s,i){const n=e.name;let r=this.variables.get(n);return r?r.addDeclaration(e,s):(r=new He(e.name,e,s||X,t),this.variables.set(n,r)),r}contains(e){return this.variables.has(e)}findVariable(e){throw new Error("Internal Error: findVariable needs to be implemented by a subclass")}}class Ke extends qe{constructor(e){super(),this.accessedOutsideVariables=new Map,this.parent=e,e.children.push(this);}addAccessedDynamicImport(e){(this.accessedDynamicImports||(this.accessedDynamicImports=new Set)).add(e),this.parent instanceof Ke&&this.parent.addAccessedDynamicImport(e);}addAccessedGlobals(e,t){const s=t.get(this)||new Set;for(const t of e)s.add(t);t.set(this,s),this.parent instanceof Ke&&this.parent.addAccessedGlobals(e,t);}addNamespaceMemberAccess(e,t){this.accessedOutsideVariables.set(e,t),this.parent.addNamespaceMemberAccess(e,t);}addReturnExpression(e){this.parent instanceof Ke&&this.parent.addReturnExpression(e);}addUsedOutsideNames(e,t,s,i){for(const i of this.accessedOutsideVariables.values())i.included&&(e.add(i.getBaseVariableName()),"system"===t&&s.has(i)&&e.add("exports"));const n=i.get(this);if(n)for(const t of n)e.add(t);}contains(e){return this.variables.has(e)||this.parent.contains(e)}deconflict(e,t,s){const i=new Set;if(this.addUsedOutsideNames(i,e,t,s),this.accessedDynamicImports)for(const e of this.accessedDynamicImports)e.inlineNamespace&&i.add(e.inlineNamespace.getBaseVariableName());for(const[e,t]of this.variables)(t.included||t.alwaysRendered)&&t.setRenderNames(null,O(e,i));for(const i of this.children)i.deconflict(e,t,s);}findLexicalBoundary(){return this.parent.findLexicalBoundary()}findVariable(e){const t=this.variables.get(e)||this.accessedOutsideVariables.get(e);if(t)return t;const s=this.parent.findVariable(e);return this.accessedOutsideVariables.set(e,s),s}}function Xe(e,t,s){if("number"==typeof s)throw new Error("locate takes a { startIndex, offsetLine, offsetColumn } object as the third argument");return function(e,t){void 0===t&&(t={});var s=t.offsetLine||0,i=t.offsetColumn||0,n=e.split("\n"),r=0,a=n.map((function(e,t){var s=r+e.length+1,i={start:r,end:s,line:t};return r=s,i})),o=0;function h(e,t){return e.start<=t&&t<e.end}function l(e,t){return {line:s+e.line,column:i+t-e.start,character:t}}return function(t,s){"string"==typeof t&&(t=e.indexOf(t,s||0));for(var i=a[o],n=t>=i.end?1:-1;i;){if(h(i,t))return l(i,t);i=a[o+=n];}}}(e,s)(t,s&&s.startIndex)}const Ye={Literal:[],Program:["body"]};class Qe{constructor(e,t,s){this.included=!1,this.esTreeNode=e,this.keys=Ye[e.type]||function(e){return Ye[e.type]=Object.keys(e).filter((t=>"object"==typeof e[t])),Ye[e.type]}(e),this.parent=t,this.context=t.context,this.createScope(s),this.parseNode(e),this.initialise(),this.context.magicString.addSourcemapLocation(this.start),this.context.magicString.addSourcemapLocation(this.end);}bind(){for(const e of this.keys){const t=this[e];if(null!==t&&"annotations"!==e)if(Array.isArray(t))for(const e of t)null!==e&&e.bind();else t.bind();}}createScope(e){this.scope=e;}declare(e,t){return []}deoptimizePath(e){}getLiteralValueAtPath(e,t,s){return q}getReturnExpressionWhenCalledAtPath(e,t,s){return K}hasEffects(e){for(const t of this.keys){const s=this[t];if(null!==s&&"annotations"!==t)if(Array.isArray(s)){for(const t of s)if(null!==t&&t.hasEffects(e))return !0}else if(s.hasEffects(e))return !0}return !1}hasEffectsWhenAccessedAtPath(e,t){return e.length>0}hasEffectsWhenAssignedAtPath(e,t){return !0}hasEffectsWhenCalledAtPath(e,t,s){return !0}include(e,t){this.included=!0;for(const s of this.keys){const i=this[s];if(null!==i&&"annotations"!==s)if(Array.isArray(i))for(const s of i)null!==s&&s.include(e,t);else i.include(e,t);}}includeCallArguments(e,t){for(const s of t)s.include(e,!1);}includeWithAllDeclaredVariables(e,t){this.include(t,e);}initialise(){}insertSemicolon(e){";"!==e.original[this.end-1]&&e.appendLeft(this.end,";");}parseNode(e){for(const t of Object.keys(e)){if(this.hasOwnProperty(t))continue;const s=e[t];if("object"!=typeof s||null===s||"annotations"===t)this[t]=s;else if(Array.isArray(s)){this[t]=[];for(const e of s)this[t].push(null===e?null:new(this.context.nodeConstructors[e.type]||this.context.nodeConstructors.UnknownNode)(e,this,this.scope));}else this[t]=new(this.context.nodeConstructors[s.type]||this.context.nodeConstructors.UnknownNode)(s,this,this.scope);}}render(e,t){for(const s of this.keys){const i=this[s];if(null!==i&&"annotations"!==s)if(Array.isArray(i))for(const s of i)null!==s&&s.render(e,t);else i.render(e,t);}}shouldBeIncluded(e){return this.included||!e.brokenFlow&&this.hasEffects(Ge())}toString(){return this.context.code.slice(this.start,this.end)}}class Je extends Qe{createScope(e){this.scope=new Ke(e);}hasEffectsWhenAccessedAtPath(e){return !(e.length<=1)&&(e.length>2||"prototype"!==e[0])}hasEffectsWhenAssignedAtPath(e){return !(e.length<=1)&&(e.length>2||"prototype"!==e[0])}hasEffectsWhenCalledAtPath(e,t,s){return !t.withNew||(this.body.hasEffectsWhenCalledAtPath(e,t,s)||null!==this.superClass&&this.superClass.hasEffectsWhenCalledAtPath(e,t,s))}initialise(){null!==this.id&&this.id.declare("class",this);}}class Ze extends Je{initialise(){super.initialise(),null!==this.id&&(this.id.variable.isId=!0);}parseNode(e){null!==e.id&&(this.id=new this.context.nodeConstructors.Identifier(e.id,this,this.scope.parent)),super.parseNode(e);}render(e,t){"system"===t.format&&this.id&&t.exportNamesByVariable.has(this.id.variable)&&e.appendLeft(this.end,`${t.compact?"":" "}${T([this.id.variable],t)};`),super.render(e,t);}}class et extends He{constructor(e){super("arguments",null,K,e);}hasEffectsWhenAccessedAtPath(e){return e.length>1}hasEffectsWhenAssignedAtPath(){return !0}hasEffectsWhenCalledAtPath(){return !0}}class tt extends He{constructor(e){super("this",null,null,e);}getLiteralValueAtPath(){return q}hasEffectsWhenAccessedAtPath(e,t){return this.getInit(t).hasEffectsWhenAccessedAtPath(e,t)||super.hasEffectsWhenAccessedAtPath(e,t)}hasEffectsWhenAssignedAtPath(e,t){return this.getInit(t).hasEffectsWhenAssignedAtPath(e,t)||super.hasEffectsWhenAssignedAtPath(e,t)}hasEffectsWhenCalledAtPath(e,t,s){return this.getInit(s).hasEffectsWhenCalledAtPath(e,t,s)||super.hasEffectsWhenCalledAtPath(e,t,s)}getInit(e){return e.replacedVariableInits.get(this)||K}}class st extends Qe{bind(){super.bind(),this.argument.deoptimizePath([B,B]);}}class it extends Ke{constructor(e,t){super(e),this.parameters=[],this.hasRest=!1,this.context=t,this.hoistedBodyVarScope=new Ke(this);}addParameterDeclaration(e){const t=e.name;let s=this.hoistedBodyVarScope.variables.get(t);return s?s.addDeclaration(e,null):s=new He(t,e,K,this.context),this.variables.set(t,s),s}addParameterVariables(e,t){this.parameters=e;for(const t of e)for(const e of t)e.alwaysRendered=!0;this.hasRest=t;}includeCallArguments(e,t){let s=!1,i=!1;const n=this.hasRest&&this.parameters[this.parameters.length-1];for(const s of t)if(s instanceof st){for(const s of t)s.include(e,!1);break}for(let r=t.length-1;r>=0;r--){const a=this.parameters[r]||n,o=t[r];if(a){s=!1;for(const e of a)e.included&&(i=!0),e.calledFromTryStatement&&(s=!0);}!i&&o.shouldBeIncluded(e)&&(i=!0),i&&o.include(e,s);}}}class nt extends it{constructor(){super(...arguments),this.returnExpression=null,this.returnExpressions=[];}addReturnExpression(e){this.returnExpressions.push(e);}getReturnExpression(){return null===this.returnExpression&&this.updateReturnExpression(),this.returnExpression}updateReturnExpression(){if(1===this.returnExpressions.length)this.returnExpression=this.returnExpressions[0];else {this.returnExpression=K;for(const e of this.returnExpressions)e.deoptimizePath(W);}}}class rt extends nt{constructor(e,t){super(e,t),this.variables.set("arguments",this.argumentsVariable=new et(t)),this.variables.set("this",this.thisVariable=new tt(t));}findLexicalBoundary(){return this}includeCallArguments(e,t){if(super.includeCallArguments(e,t),this.argumentsVariable.included)for(const s of t)s.included||s.include(e,!1);}}function at(e,t){if("MemberExpression"===e.type)return !e.computed&&at(e.object,e);if("Identifier"===e.type){if(!t)return !0;switch(t.type){case"MemberExpression":return t.computed||e===t.object;case"MethodDefinition":return t.computed;case"FieldDefinition":case"Property":return t.computed||e===t.value;case"ExportSpecifier":case"ImportSpecifier":return e===t.local;case"LabeledStatement":case"BreakStatement":case"ContinueStatement":return !1;default:return !0}}return !1}const ot=Symbol("Value Properties"),ht={pure:!0},lt={pure:!1},ct={__proto__:null,[ot]:lt},ut={__proto__:null,[ot]:ht},dt={__proto__:null,[ot]:lt,prototype:ct},pt={__proto__:null,[ot]:ht,prototype:ct},ft={__proto__:null,[ot]:ht,from:ut,of:ut,prototype:ct},mt={__proto__:null,[ot]:ht,supportedLocalesOf:pt},gt={global:ct,globalThis:ct,self:ct,window:ct,__proto__:null,[ot]:lt,Array:{__proto__:null,[ot]:lt,from:ct,isArray:ut,of:ut,prototype:ct},ArrayBuffer:{__proto__:null,[ot]:ht,isView:ut,prototype:ct},Atomics:ct,BigInt:dt,BigInt64Array:dt,BigUint64Array:dt,Boolean:pt,constructor:dt,DataView:pt,Date:{__proto__:null,[ot]:ht,now:ut,parse:ut,prototype:ct,UTC:ut},decodeURI:ut,decodeURIComponent:ut,encodeURI:ut,encodeURIComponent:ut,Error:pt,escape:ut,eval:ct,EvalError:pt,Float32Array:ft,Float64Array:ft,Function:dt,hasOwnProperty:ct,Infinity:ct,Int16Array:ft,Int32Array:ft,Int8Array:ft,isFinite:ut,isNaN:ut,isPrototypeOf:ct,JSON:ct,Map:pt,Math:{__proto__:null,[ot]:lt,abs:ut,acos:ut,acosh:ut,asin:ut,asinh:ut,atan:ut,atan2:ut,atanh:ut,cbrt:ut,ceil:ut,clz32:ut,cos:ut,cosh:ut,exp:ut,expm1:ut,floor:ut,fround:ut,hypot:ut,imul:ut,log:ut,log10:ut,log1p:ut,log2:ut,max:ut,min:ut,pow:ut,random:ut,round:ut,sign:ut,sin:ut,sinh:ut,sqrt:ut,tan:ut,tanh:ut,trunc:ut},NaN:ct,Number:{__proto__:null,[ot]:ht,isFinite:ut,isInteger:ut,isNaN:ut,isSafeInteger:ut,parseFloat:ut,parseInt:ut,prototype:ct},Object:{__proto__:null,[ot]:ht,create:ut,getNotifier:ut,getOwn:ut,getOwnPropertyDescriptor:ut,getOwnPropertyNames:ut,getOwnPropertySymbols:ut,getPrototypeOf:ut,is:ut,isExtensible:ut,isFrozen:ut,isSealed:ut,keys:ut,prototype:ct},parseFloat:ut,parseInt:ut,Promise:{__proto__:null,[ot]:lt,all:ut,prototype:ct,race:ut,resolve:ut},propertyIsEnumerable:ct,Proxy:ct,RangeError:pt,ReferenceError:pt,Reflect:ct,RegExp:pt,Set:pt,SharedArrayBuffer:dt,String:{__proto__:null,[ot]:ht,fromCharCode:ut,fromCodePoint:ut,prototype:ct,raw:ut},Symbol:{__proto__:null,[ot]:ht,for:ut,keyFor:ut,prototype:ct},SyntaxError:pt,toLocaleString:ct,toString:ct,TypeError:pt,Uint16Array:ft,Uint32Array:ft,Uint8Array:ft,Uint8ClampedArray:ft,unescape:ut,URIError:pt,valueOf:ct,WeakMap:pt,WeakSet:pt,clearInterval:dt,clearTimeout:dt,console:ct,Intl:{__proto__:null,[ot]:lt,Collator:mt,DateTimeFormat:mt,ListFormat:mt,NumberFormat:mt,PluralRules:mt,RelativeTimeFormat:mt},setInterval:dt,setTimeout:dt,TextDecoder:dt,TextEncoder:dt,URL:dt,URLSearchParams:dt,AbortController:dt,AbortSignal:dt,addEventListener:ct,alert:ct,AnalyserNode:dt,Animation:dt,AnimationEvent:dt,applicationCache:ct,ApplicationCache:dt,ApplicationCacheErrorEvent:dt,atob:ct,Attr:dt,Audio:dt,AudioBuffer:dt,AudioBufferSourceNode:dt,AudioContext:dt,AudioDestinationNode:dt,AudioListener:dt,AudioNode:dt,AudioParam:dt,AudioProcessingEvent:dt,AudioScheduledSourceNode:dt,AudioWorkletNode:dt,BarProp:dt,BaseAudioContext:dt,BatteryManager:dt,BeforeUnloadEvent:dt,BiquadFilterNode:dt,Blob:dt,BlobEvent:dt,blur:ct,BroadcastChannel:dt,btoa:ct,ByteLengthQueuingStrategy:dt,Cache:dt,caches:ct,CacheStorage:dt,cancelAnimationFrame:ct,cancelIdleCallback:ct,CanvasCaptureMediaStreamTrack:dt,CanvasGradient:dt,CanvasPattern:dt,CanvasRenderingContext2D:dt,ChannelMergerNode:dt,ChannelSplitterNode:dt,CharacterData:dt,clientInformation:ct,ClipboardEvent:dt,close:ct,closed:ct,CloseEvent:dt,Comment:dt,CompositionEvent:dt,confirm:ct,ConstantSourceNode:dt,ConvolverNode:dt,CountQueuingStrategy:dt,createImageBitmap:ct,Credential:dt,CredentialsContainer:dt,crypto:ct,Crypto:dt,CryptoKey:dt,CSS:dt,CSSConditionRule:dt,CSSFontFaceRule:dt,CSSGroupingRule:dt,CSSImportRule:dt,CSSKeyframeRule:dt,CSSKeyframesRule:dt,CSSMediaRule:dt,CSSNamespaceRule:dt,CSSPageRule:dt,CSSRule:dt,CSSRuleList:dt,CSSStyleDeclaration:dt,CSSStyleRule:dt,CSSStyleSheet:dt,CSSSupportsRule:dt,CustomElementRegistry:dt,customElements:ct,CustomEvent:dt,DataTransfer:dt,DataTransferItem:dt,DataTransferItemList:dt,defaultstatus:ct,defaultStatus:ct,DelayNode:dt,DeviceMotionEvent:dt,DeviceOrientationEvent:dt,devicePixelRatio:ct,dispatchEvent:ct,document:ct,Document:dt,DocumentFragment:dt,DocumentType:dt,DOMError:dt,DOMException:dt,DOMImplementation:dt,DOMMatrix:dt,DOMMatrixReadOnly:dt,DOMParser:dt,DOMPoint:dt,DOMPointReadOnly:dt,DOMQuad:dt,DOMRect:dt,DOMRectReadOnly:dt,DOMStringList:dt,DOMStringMap:dt,DOMTokenList:dt,DragEvent:dt,DynamicsCompressorNode:dt,Element:dt,ErrorEvent:dt,Event:dt,EventSource:dt,EventTarget:dt,external:ct,fetch:ct,File:dt,FileList:dt,FileReader:dt,find:ct,focus:ct,FocusEvent:dt,FontFace:dt,FontFaceSetLoadEvent:dt,FormData:dt,frames:ct,GainNode:dt,Gamepad:dt,GamepadButton:dt,GamepadEvent:dt,getComputedStyle:ct,getSelection:ct,HashChangeEvent:dt,Headers:dt,history:ct,History:dt,HTMLAllCollection:dt,HTMLAnchorElement:dt,HTMLAreaElement:dt,HTMLAudioElement:dt,HTMLBaseElement:dt,HTMLBodyElement:dt,HTMLBRElement:dt,HTMLButtonElement:dt,HTMLCanvasElement:dt,HTMLCollection:dt,HTMLContentElement:dt,HTMLDataElement:dt,HTMLDataListElement:dt,HTMLDetailsElement:dt,HTMLDialogElement:dt,HTMLDirectoryElement:dt,HTMLDivElement:dt,HTMLDListElement:dt,HTMLDocument:dt,HTMLElement:dt,HTMLEmbedElement:dt,HTMLFieldSetElement:dt,HTMLFontElement:dt,HTMLFormControlsCollection:dt,HTMLFormElement:dt,HTMLFrameElement:dt,HTMLFrameSetElement:dt,HTMLHeadElement:dt,HTMLHeadingElement:dt,HTMLHRElement:dt,HTMLHtmlElement:dt,HTMLIFrameElement:dt,HTMLImageElement:dt,HTMLInputElement:dt,HTMLLabelElement:dt,HTMLLegendElement:dt,HTMLLIElement:dt,HTMLLinkElement:dt,HTMLMapElement:dt,HTMLMarqueeElement:dt,HTMLMediaElement:dt,HTMLMenuElement:dt,HTMLMetaElement:dt,HTMLMeterElement:dt,HTMLModElement:dt,HTMLObjectElement:dt,HTMLOListElement:dt,HTMLOptGroupElement:dt,HTMLOptionElement:dt,HTMLOptionsCollection:dt,HTMLOutputElement:dt,HTMLParagraphElement:dt,HTMLParamElement:dt,HTMLPictureElement:dt,HTMLPreElement:dt,HTMLProgressElement:dt,HTMLQuoteElement:dt,HTMLScriptElement:dt,HTMLSelectElement:dt,HTMLShadowElement:dt,HTMLSlotElement:dt,HTMLSourceElement:dt,HTMLSpanElement:dt,HTMLStyleElement:dt,HTMLTableCaptionElement:dt,HTMLTableCellElement:dt,HTMLTableColElement:dt,HTMLTableElement:dt,HTMLTableRowElement:dt,HTMLTableSectionElement:dt,HTMLTemplateElement:dt,HTMLTextAreaElement:dt,HTMLTimeElement:dt,HTMLTitleElement:dt,HTMLTrackElement:dt,HTMLUListElement:dt,HTMLUnknownElement:dt,HTMLVideoElement:dt,IDBCursor:dt,IDBCursorWithValue:dt,IDBDatabase:dt,IDBFactory:dt,IDBIndex:dt,IDBKeyRange:dt,IDBObjectStore:dt,IDBOpenDBRequest:dt,IDBRequest:dt,IDBTransaction:dt,IDBVersionChangeEvent:dt,IdleDeadline:dt,IIRFilterNode:dt,Image:dt,ImageBitmap:dt,ImageBitmapRenderingContext:dt,ImageCapture:dt,ImageData:dt,indexedDB:ct,innerHeight:ct,innerWidth:ct,InputEvent:dt,IntersectionObserver:dt,IntersectionObserverEntry:dt,isSecureContext:ct,KeyboardEvent:dt,KeyframeEffect:dt,length:ct,localStorage:ct,location:ct,Location:dt,locationbar:ct,matchMedia:ct,MediaDeviceInfo:dt,MediaDevices:dt,MediaElementAudioSourceNode:dt,MediaEncryptedEvent:dt,MediaError:dt,MediaKeyMessageEvent:dt,MediaKeySession:dt,MediaKeyStatusMap:dt,MediaKeySystemAccess:dt,MediaList:dt,MediaQueryList:dt,MediaQueryListEvent:dt,MediaRecorder:dt,MediaSettingsRange:dt,MediaSource:dt,MediaStream:dt,MediaStreamAudioDestinationNode:dt,MediaStreamAudioSourceNode:dt,MediaStreamEvent:dt,MediaStreamTrack:dt,MediaStreamTrackEvent:dt,menubar:ct,MessageChannel:dt,MessageEvent:dt,MessagePort:dt,MIDIAccess:dt,MIDIConnectionEvent:dt,MIDIInput:dt,MIDIInputMap:dt,MIDIMessageEvent:dt,MIDIOutput:dt,MIDIOutputMap:dt,MIDIPort:dt,MimeType:dt,MimeTypeArray:dt,MouseEvent:dt,moveBy:ct,moveTo:ct,MutationEvent:dt,MutationObserver:dt,MutationRecord:dt,name:ct,NamedNodeMap:dt,NavigationPreloadManager:dt,navigator:ct,Navigator:dt,NetworkInformation:dt,Node:dt,NodeFilter:ct,NodeIterator:dt,NodeList:dt,Notification:dt,OfflineAudioCompletionEvent:dt,OfflineAudioContext:dt,offscreenBuffering:ct,OffscreenCanvas:dt,open:ct,openDatabase:ct,Option:dt,origin:ct,OscillatorNode:dt,outerHeight:ct,outerWidth:ct,PageTransitionEvent:dt,pageXOffset:ct,pageYOffset:ct,PannerNode:dt,parent:ct,Path2D:dt,PaymentAddress:dt,PaymentRequest:dt,PaymentRequestUpdateEvent:dt,PaymentResponse:dt,performance:ct,Performance:dt,PerformanceEntry:dt,PerformanceLongTaskTiming:dt,PerformanceMark:dt,PerformanceMeasure:dt,PerformanceNavigation:dt,PerformanceNavigationTiming:dt,PerformanceObserver:dt,PerformanceObserverEntryList:dt,PerformancePaintTiming:dt,PerformanceResourceTiming:dt,PerformanceTiming:dt,PeriodicWave:dt,Permissions:dt,PermissionStatus:dt,personalbar:ct,PhotoCapabilities:dt,Plugin:dt,PluginArray:dt,PointerEvent:dt,PopStateEvent:dt,postMessage:ct,Presentation:dt,PresentationAvailability:dt,PresentationConnection:dt,PresentationConnectionAvailableEvent:dt,PresentationConnectionCloseEvent:dt,PresentationConnectionList:dt,PresentationReceiver:dt,PresentationRequest:dt,print:ct,ProcessingInstruction:dt,ProgressEvent:dt,PromiseRejectionEvent:dt,prompt:ct,PushManager:dt,PushSubscription:dt,PushSubscriptionOptions:dt,queueMicrotask:ct,RadioNodeList:dt,Range:dt,ReadableStream:dt,RemotePlayback:dt,removeEventListener:ct,Request:dt,requestAnimationFrame:ct,requestIdleCallback:ct,resizeBy:ct,ResizeObserver:dt,ResizeObserverEntry:dt,resizeTo:ct,Response:dt,RTCCertificate:dt,RTCDataChannel:dt,RTCDataChannelEvent:dt,RTCDtlsTransport:dt,RTCIceCandidate:dt,RTCIceTransport:dt,RTCPeerConnection:dt,RTCPeerConnectionIceEvent:dt,RTCRtpReceiver:dt,RTCRtpSender:dt,RTCSctpTransport:dt,RTCSessionDescription:dt,RTCStatsReport:dt,RTCTrackEvent:dt,screen:ct,Screen:dt,screenLeft:ct,ScreenOrientation:dt,screenTop:ct,screenX:ct,screenY:ct,ScriptProcessorNode:dt,scroll:ct,scrollbars:ct,scrollBy:ct,scrollTo:ct,scrollX:ct,scrollY:ct,SecurityPolicyViolationEvent:dt,Selection:dt,ServiceWorker:dt,ServiceWorkerContainer:dt,ServiceWorkerRegistration:dt,sessionStorage:ct,ShadowRoot:dt,SharedWorker:dt,SourceBuffer:dt,SourceBufferList:dt,speechSynthesis:ct,SpeechSynthesisEvent:dt,SpeechSynthesisUtterance:dt,StaticRange:dt,status:ct,statusbar:ct,StereoPannerNode:dt,stop:ct,Storage:dt,StorageEvent:dt,StorageManager:dt,styleMedia:ct,StyleSheet:dt,StyleSheetList:dt,SubtleCrypto:dt,SVGAElement:dt,SVGAngle:dt,SVGAnimatedAngle:dt,SVGAnimatedBoolean:dt,SVGAnimatedEnumeration:dt,SVGAnimatedInteger:dt,SVGAnimatedLength:dt,SVGAnimatedLengthList:dt,SVGAnimatedNumber:dt,SVGAnimatedNumberList:dt,SVGAnimatedPreserveAspectRatio:dt,SVGAnimatedRect:dt,SVGAnimatedString:dt,SVGAnimatedTransformList:dt,SVGAnimateElement:dt,SVGAnimateMotionElement:dt,SVGAnimateTransformElement:dt,SVGAnimationElement:dt,SVGCircleElement:dt,SVGClipPathElement:dt,SVGComponentTransferFunctionElement:dt,SVGDefsElement:dt,SVGDescElement:dt,SVGDiscardElement:dt,SVGElement:dt,SVGEllipseElement:dt,SVGFEBlendElement:dt,SVGFEColorMatrixElement:dt,SVGFEComponentTransferElement:dt,SVGFECompositeElement:dt,SVGFEConvolveMatrixElement:dt,SVGFEDiffuseLightingElement:dt,SVGFEDisplacementMapElement:dt,SVGFEDistantLightElement:dt,SVGFEDropShadowElement:dt,SVGFEFloodElement:dt,SVGFEFuncAElement:dt,SVGFEFuncBElement:dt,SVGFEFuncGElement:dt,SVGFEFuncRElement:dt,SVGFEGaussianBlurElement:dt,SVGFEImageElement:dt,SVGFEMergeElement:dt,SVGFEMergeNodeElement:dt,SVGFEMorphologyElement:dt,SVGFEOffsetElement:dt,SVGFEPointLightElement:dt,SVGFESpecularLightingElement:dt,SVGFESpotLightElement:dt,SVGFETileElement:dt,SVGFETurbulenceElement:dt,SVGFilterElement:dt,SVGForeignObjectElement:dt,SVGGElement:dt,SVGGeometryElement:dt,SVGGradientElement:dt,SVGGraphicsElement:dt,SVGImageElement:dt,SVGLength:dt,SVGLengthList:dt,SVGLinearGradientElement:dt,SVGLineElement:dt,SVGMarkerElement:dt,SVGMaskElement:dt,SVGMatrix:dt,SVGMetadataElement:dt,SVGMPathElement:dt,SVGNumber:dt,SVGNumberList:dt,SVGPathElement:dt,SVGPatternElement:dt,SVGPoint:dt,SVGPointList:dt,SVGPolygonElement:dt,SVGPolylineElement:dt,SVGPreserveAspectRatio:dt,SVGRadialGradientElement:dt,SVGRect:dt,SVGRectElement:dt,SVGScriptElement:dt,SVGSetElement:dt,SVGStopElement:dt,SVGStringList:dt,SVGStyleElement:dt,SVGSVGElement:dt,SVGSwitchElement:dt,SVGSymbolElement:dt,SVGTextContentElement:dt,SVGTextElement:dt,SVGTextPathElement:dt,SVGTextPositioningElement:dt,SVGTitleElement:dt,SVGTransform:dt,SVGTransformList:dt,SVGTSpanElement:dt,SVGUnitTypes:dt,SVGUseElement:dt,SVGViewElement:dt,TaskAttributionTiming:dt,Text:dt,TextEvent:dt,TextMetrics:dt,TextTrack:dt,TextTrackCue:dt,TextTrackCueList:dt,TextTrackList:dt,TimeRanges:dt,toolbar:ct,top:ct,Touch:dt,TouchEvent:dt,TouchList:dt,TrackEvent:dt,TransitionEvent:dt,TreeWalker:dt,UIEvent:dt,ValidityState:dt,visualViewport:ct,VisualViewport:dt,VTTCue:dt,WaveShaperNode:dt,WebAssembly:ct,WebGL2RenderingContext:dt,WebGLActiveInfo:dt,WebGLBuffer:dt,WebGLContextEvent:dt,WebGLFramebuffer:dt,WebGLProgram:dt,WebGLQuery:dt,WebGLRenderbuffer:dt,WebGLRenderingContext:dt,WebGLSampler:dt,WebGLShader:dt,WebGLShaderPrecisionFormat:dt,WebGLSync:dt,WebGLTexture:dt,WebGLTransformFeedback:dt,WebGLUniformLocation:dt,WebGLVertexArrayObject:dt,WebSocket:dt,WheelEvent:dt,Window:dt,Worker:dt,WritableStream:dt,XMLDocument:dt,XMLHttpRequest:dt,XMLHttpRequestEventTarget:dt,XMLHttpRequestUpload:dt,XMLSerializer:dt,XPathEvaluator:dt,XPathExpression:dt,XPathResult:dt,XSLTProcessor:dt};for(const e of ["window","global","self","globalThis"])gt[e]=gt;function yt(e){let t=gt;for(const s of e){if("string"!=typeof s)return null;if(t=t[s],!t)return null}return t[ot]}class xt extends be{constructor(){super(...arguments),this.isReassigned=!0;}hasEffectsWhenAccessedAtPath(e){return !function(e){return 1===e.length?"undefined"===e[0]||null!==yt(e):null!==yt(e.slice(0,-1))}([this.name,...e])}hasEffectsWhenCalledAtPath(e){return !function(e){const t=yt(e);return null!==t&&t.pure}([this.name,...e])}}class Et extends Qe{constructor(){super(...arguments),this.variable=null,this.bound=!1;}addExportedVariables(e,t){null!==this.variable&&t.has(this.variable)&&e.push(this.variable);}bind(){this.bound||(this.bound=!0,null===this.variable&&at(this,this.parent)&&(this.variable=this.scope.findVariable(this.name),this.variable.addReference(this)),null!==this.variable&&this.variable instanceof He&&null!==this.variable.additionalInitializers&&this.variable.consolidateInitializers());}declare(e,t){let s;switch(e){case"var":s=this.scope.addDeclaration(this,this.context,t,!0);break;case"function":s=this.scope.addDeclaration(this,this.context,t,!1);break;case"let":case"const":case"class":s=this.scope.addDeclaration(this,this.context,t,!1);break;case"parameter":s=this.scope.addParameterDeclaration(this);break;default:throw new Error(`Internal Error: Unexpected identifier kind ${e}.`)}return [this.variable=s]}deoptimizePath(e){this.bound||this.bind(),0!==e.length||this.scope.contains(this.name)||this.disallowImportReassignment(),this.variable.deoptimizePath(e);}getLiteralValueAtPath(e,t,s){return this.bound||this.bind(),this.variable.getLiteralValueAtPath(e,t,s)}getReturnExpressionWhenCalledAtPath(e,t,s){return this.bound||this.bind(),this.variable.getReturnExpressionWhenCalledAtPath(e,t,s)}hasEffects(){return this.context.options.treeshake.unknownGlobalSideEffects&&this.variable instanceof xt&&this.variable.hasEffectsWhenAccessedAtPath(F)}hasEffectsWhenAccessedAtPath(e,t){return null!==this.variable&&this.variable.hasEffectsWhenAccessedAtPath(e,t)}hasEffectsWhenAssignedAtPath(e,t){return !this.variable||this.variable.hasEffectsWhenAssignedAtPath(e,t)}hasEffectsWhenCalledAtPath(e,t,s){return !this.variable||this.variable.hasEffectsWhenCalledAtPath(e,t,s)}include(){this.included||(this.included=!0,null!==this.variable&&this.context.includeVariable(this.variable));}includeCallArguments(e,t){this.variable.includeCallArguments(e,t);}render(e,t,{renderedParentType:s,isCalleeOfRenderedParent:i,isShorthandProperty:n}=Ae){if(this.variable){const t=this.variable.getName();t!==this.name&&(e.overwrite(this.start,this.end,t,{contentOnly:!0,storeName:!0}),n&&e.prependRight(this.start,`${this.name}: `)),"eval"===t&&"CallExpression"===s&&i&&e.appendRight(this.start,"0, ");}}disallowImportReassignment(){return this.context.error({code:"ILLEGAL_REASSIGNMENT",message:`Illegal reassignment to import '${this.name}'`},this.start)}}class vt extends Qe{constructor(){super(...arguments),this.declarationInit=null;}addExportedVariables(e,t){this.argument.addExportedVariables(e,t);}bind(){super.bind(),null!==this.declarationInit&&this.declarationInit.deoptimizePath([B,B]);}declare(e,t){return this.declarationInit=t,this.argument.declare(e,K)}deoptimizePath(e){0===e.length&&this.argument.deoptimizePath(F);}hasEffectsWhenAssignedAtPath(e,t){return e.length>0||this.argument.hasEffectsWhenAssignedAtPath(F,t)}}class bt extends Qe{constructor(){super(...arguments),this.isPrototypeDeoptimized=!1;}createScope(e){this.scope=new rt(e,this.context);}deoptimizePath(e){1===e.length&&("prototype"===e[0]?this.isPrototypeDeoptimized=!0:e[0]===B&&(this.isPrototypeDeoptimized=!0,this.scope.getReturnExpression().deoptimizePath(W)));}getReturnExpressionWhenCalledAtPath(e){return 0===e.length?this.scope.getReturnExpression():K}hasEffects(){return null!==this.id&&this.id.hasEffects()}hasEffectsWhenAccessedAtPath(e){return !(e.length<=1)&&(e.length>2||"prototype"!==e[0]||this.isPrototypeDeoptimized)}hasEffectsWhenAssignedAtPath(e){return !(e.length<=1)&&(e.length>2||"prototype"!==e[0]||this.isPrototypeDeoptimized)}hasEffectsWhenCalledAtPath(e,t,s){if(e.length>0)return !0;for(const e of this.params)if(e.hasEffects(s))return !0;const i=s.replacedVariableInits.get(this.scope.thisVariable);s.replacedVariableInits.set(this.scope.thisVariable,t.withNew?new pe:K);const{brokenFlow:n,ignore:r}=s;return s.ignore={breaks:!1,continues:!1,labels:new Set,returnAwaitYield:!0},!!this.body.hasEffects(s)||(s.brokenFlow=n,i?s.replacedVariableInits.set(this.scope.thisVariable,i):s.replacedVariableInits.delete(this.scope.thisVariable),s.ignore=r,!1)}include(e,t){this.included=!0,this.id&&this.id.include();const s=this.scope.argumentsVariable.included;for(const i of this.params)i instanceof Et&&!s||i.include(e,t);const{brokenFlow:i}=e;e.brokenFlow=0,this.body.include(e,t),e.brokenFlow=i;}includeCallArguments(e,t){this.scope.includeCallArguments(e,t);}initialise(){null!==this.id&&this.id.declare("function",this),this.scope.addParameterVariables(this.params.map((e=>e.declare("parameter",K))),this.params[this.params.length-1]instanceof vt),this.body.addImplicitReturnExpressionToScope();}parseNode(e){this.body=new this.context.nodeConstructors.BlockStatement(e.body,this,this.scope.hoistedBodyVarScope),super.parseNode(e);}}bt.prototype.preventChildBlockScope=!0;class St extends bt{initialise(){super.initialise(),null!==this.id&&(this.id.variable.isId=!0);}parseNode(e){null!==e.id&&(this.id=new this.context.nodeConstructors.Identifier(e.id,this,this.scope.parent)),super.parseNode(e);}}class At extends Qe{include(e,t){super.include(e,t),t&&this.context.includeVariable(this.variable);}initialise(){const e=this.declaration;this.declarationName=e.id&&e.id.name||this.declaration.name,this.variable=this.scope.addExportDefaultDeclaration(this.declarationName||this.context.getModuleName(),this,this.context),this.context.addExport(this);}render(e,t,s){const{start:i,end:n}=s,r=function(e,t){return k(e,C(e,"default",t)+7)}(e.original,this.start);if(this.declaration instanceof St)this.renderNamedDeclaration(e,r,"function","(",null===this.declaration.id,t);else if(this.declaration instanceof Ze)this.renderNamedDeclaration(e,r,"class","{",null===this.declaration.id,t);else {if(this.variable.getOriginalVariable()!==this.variable)return void S(this,e,i,n);if(!this.variable.included)return e.remove(this.start,r),this.declaration.render(e,t,{isCalleeOfRenderedParent:!1,renderedParentType:"ExpressionStatement"}),void(";"!==e.original[this.end-1]&&e.appendLeft(this.end,";"));this.renderVariableDeclaration(e,r,t);}this.declaration.render(e,t);}renderNamedDeclaration(e,t,s,i,n,r){const a=this.variable.getName();e.remove(this.start,t),n&&e.appendLeft(function(e,t,s,i){const n=C(e,t,i)+t.length;e=e.slice(n,C(e,s,n));const r=C(e,"*");return -1===r?n:n+r+1}(e.original,s,i,t),` ${a}`),"system"===r.format&&this.declaration instanceof Ze&&r.exportNamesByVariable.has(this.variable)&&e.appendLeft(this.end,` ${T([this.variable],r)};`);}renderVariableDeclaration(e,t,s){const i=59===e.original.charCodeAt(this.end-1),n="system"===s.format&&s.exportNamesByVariable.get(this.variable);n?(e.overwrite(this.start,t,`${s.varOrConst} ${this.variable.getName()} = exports('${n[0]}', `),e.appendRight(i?this.end-1:this.end,")"+(i?"":";"))):(e.overwrite(this.start,t,`${s.varOrConst} ${this.variable.getName()} = `),i||e.appendLeft(this.end,";"));}}At.prototype.needsBoundaries=!0;class Pt extends be{constructor(){super("undefined");}getLiteralValueAtPath(){}}class Ct extends He{constructor(e,t,s){super(e,t,t.declaration,s),this.hasId=!1,this.originalId=null,this.originalVariableAndDeclarationModules=null;const i=t.declaration;(i instanceof St||i instanceof Ze)&&i.id?(this.hasId=!0,this.originalId=i.id):i instanceof Et&&(this.originalId=i);}addReference(e){this.hasId||(this.name=e.name);}getAssignedVariableName(){return this.originalId&&this.originalId.name||null}getBaseVariableName(){const e=this.getOriginalVariable();return e===this?super.getBaseVariableName():e.getBaseVariableName()}getName(){const e=this.getOriginalVariable();return e===this?super.getName():e.getName()}getOriginalVariable(){return this.getOriginalVariableAndDeclarationModules().original}getOriginalVariableAndDeclarationModules(){if(null===this.originalVariableAndDeclarationModules)if(!this.originalId||!this.hasId&&(this.originalId.variable.isReassigned||this.originalId.variable instanceof Pt))this.originalVariableAndDeclarationModules={modules:[],original:this};else {const e=this.originalId.variable;if(e instanceof Ct){const{modules:t,original:s}=e.getOriginalVariableAndDeclarationModules();this.originalVariableAndDeclarationModules={modules:t.concat(this.module),original:s};}else this.originalVariableAndDeclarationModules={modules:[this.module],original:e};}return this.originalVariableAndDeclarationModules}}class Nt extends be{constructor(e){super("_missingExportShim"),this.module=e;}}class kt extends be{constructor(e,t){super(e.getModuleName()),this.memberVariables=null,this.mergedNamespaces=[],this.referencedEarly=!1,this.references=[],this.context=e,this.module=e.module,this.syntheticNamedExports=t;}addReference(e){this.references.push(e),this.name=e.name;}deoptimizePath(){const e=this.getMemberVariables();for(const t of Object.keys(e))e[t].deoptimizePath(W);}getMemberVariables(){if(this.memberVariables)return this.memberVariables;const e=Object.create(null);for(const t of this.context.getExports().concat(this.context.getReexports()))"*"!==t[0]&&t!==this.module.info.syntheticNamedExports&&(e[t]=this.context.traceExport(t));return this.memberVariables=e}include(){this.included=!0,this.context.includeAllExports();}prepareNamespace(e){this.mergedNamespaces=e;const t=this.context.getModuleExecIndex();for(const e of this.references)if(e.context.getModuleExecIndex()<=t){this.referencedEarly=!0;break}}renderBlock(e){const t=e.compact?"":" ",s=e.compact?"":"\n",i=e.indent,n=this.getMemberVariables(),r=Object.keys(n).map((s=>{const r=n[s];if(this.referencedEarly||r.isReassigned)return `${i}get ${s}${t}()${t}{${t}return ${r.getName()}${e.compact?"":";"}${t}}`;return `${i}${R[s]?`'${s}'`:s}: ${r.getName()}`}));e.namespaceToStringTag&&r.unshift(`${i}[Symbol.toStringTag]:${t}'Module'`);const a=this.mergedNamespaces.length>0||this.syntheticNamedExports;a||r.unshift(`${i}__proto__:${t}null`);let o=`{${s}${r.join(`,${s}`)}${s}}`;if(a){const e=["/*#__PURE__*/Object.create(null)"];this.mergedNamespaces.length>0&&e.push(...this.mergedNamespaces.map((e=>e.getName()))),this.syntheticNamedExports&&e.push(this.module.getSyntheticNamespace().getName()),r.length>0&&e.push(o),o=`/*#__PURE__*/Object.assign(${e.join(`,${t}`)})`;}e.freeze&&(o=`/*#__PURE__*/Object.freeze(${o})`);const h=this.getName();return o=`${e.varOrConst} ${h}${t}=${t}${o};`,"system"===e.format&&e.exportNamesByVariable.has(this)&&(o+=`${s}${T([this],e)};`),o}renderFirst(){return this.referencedEarly}}kt.prototype.isNamespace=!0;class wt extends be{constructor(e,t,s){super(t),this.context=e,this.module=e.module,this.syntheticNamespace=s;}getBaseVariable(){let e=this.syntheticNamespace;return e instanceof Ct&&(e=e.getOriginalVariable()),e instanceof wt&&(e=e.getBaseVariable()),e}getBaseVariableName(){return this.syntheticNamespace.getBaseVariableName()}getName(){const e=this.name;return `${this.syntheticNamespace.getName()}${_t(e)}`}include(){this.included||(this.included=!0,this.context.includeVariable(this.syntheticNamespace));}setRenderNames(e,t){super.setRenderNames(e,t);}}const _t=e=>!R[e]&&/^(?!\d)[\w$]+$/.test(e)?`.${e}`:`[${JSON.stringify(e)}]`;function It(e){return e.endsWith(".js")?e.slice(0,-3):e}function $t(e,t){return e.autoId?`${e.basePath?e.basePath+"/":""}${It(t)}`:e.id||""}const Tt={auto:"_interopDefault",default:null,defaultOnly:null,esModule:null,false:null,true:"_interopDefaultLegacy"};function Mt(e,t){return "esModule"===e||t&&("auto"===e||"true"===e)}const Lt={auto:"_interopNamespace",default:"_interopNamespaceDefault",defaultOnly:"_interopNamespaceDefaultOnly",esModule:null,false:null,true:"_interopNamespace"};function Rt(e,t){return Mt(e,t)&&"_interopDefault"===Tt[e]}const Ot={_interopDefault:(e,t,s,i,n)=>`function _interopDefault${e}(e)${e}{${e}return e${e}&&${e}e.__esModule${e}?${e}${n?Dt(e):Vt(e)}${s}${e}}${t}${t}`,_interopDefaultLegacy:(e,t,s,i,n)=>`function _interopDefaultLegacy${e}(e)${e}{${e}return e${e}&&${e}typeof e${e}===${e}'object'${e}&&${e}'default'${e}in e${e}?${e}${n?Dt(e):Vt(e)}${s}${e}}${t}${t}`,_interopNamespace:(e,t,s,i,n,r,a,o)=>`function _interopNamespace(e)${e}{${t}`+(o.has("_interopNamespaceDefault")?`${i}return e${e}&&${e}e.__esModule${e}?${e}e${e}:${e}_interopNamespaceDefault(e)${s}${t}`:`${i}if${e}(e${e}&&${e}e.__esModule)${e}return e;${t}`+Bt(e,t,i,i,n,r,a))+`}${t}${t}`,_interopNamespaceDefault:(e,t,s,i,n,r,a)=>`function _interopNamespaceDefault(e)${e}{${t}`+Bt(e,t,i,i,n,r,a)+`}${t}${t}`,_interopNamespaceDefaultOnly:(e,t,s,i,n,r,a)=>`function _interopNamespaceDefaultOnly(e)${e}{${t}${i}return ${Ut(`{__proto__: null,${a?`${e}[Symbol.toStringTag]:${e}'Module',`:""}${e}'default':${e}e}`,r)};${t}}${t}${t}`};function Dt(e){return `e${e}:${e}{${e}'default':${e}e${e}}`}function Vt(e){return `e['default']${e}:${e}e`}function Bt(e,t,s,i,n,r,a){return `${i}var n${e}=${e}${a?`{__proto__:${e}null,${e}[Symbol.toStringTag]:${e}'Module'}`:"Object.create(null)"};${t}${i}if${e}(e)${e}{${t}${i}${s}Object.keys(e).forEach(function${e}(k)${e}{${t}`+(n?Ft:Wt)(e,t,s,i+s+s)+`${i}${s}});${t}`+`${i}}${t}`+`${i}n['default']${e}=${e}e;${t}`+`${i}return ${Ut("n",r)};${t}`}function Ft(e,t,s,i){return `${i}if${e}(k${e}!==${e}'default')${e}{${t}${i}${s}var d${e}=${e}Object.getOwnPropertyDescriptor(e,${e}k);${t}${i}${s}Object.defineProperty(n,${e}k,${e}d.get${e}?${e}d${e}:${e}{${t}${i}${s}${s}enumerable:${e}true,${t}${i}${s}${s}get:${e}function${e}()${e}{${t}${i}${s}${s}${s}return e[k];${t}${i}${s}${s}}${t}${i}${s}});${t}${i}}${t}`}function Wt(e,t,s,i){return `${i}n[k]${e}=${e}e[k];${t}`}function Ut(e,t){return t?`Object.freeze(${e})`:e}const zt=Object.keys(Ot);function jt(e,t,s,i,n,r,a,o="return "){const h=n?"":" ",l=n?"":"\n";if(!s)return `${l}${l}${o}${function(e,t,s,i){if(e.length>0)return e[0].local;for(const{defaultVariableName:e,id:n,isChunk:r,name:a,namedExportsMode:o,namespaceVariableName:h,reexports:l}of t)if(l)return Gt(a,l[0].imported,o,r,e,h,s,n,i)}(e,t,i,a)};`;let c="";for(const{name:e,reexports:i}of t)if(i&&s)for(const t of i)"*"===t.reexported&&(c&&(c+=l),t.needsLiveBinding?c+=`Object.keys(${e}).forEach(function${h}(k)${h}{${l}${r}if${h}(k${h}!==${h}'default')${h}Object.defineProperty(exports,${h}k,${h}{${l}${r}${r}enumerable:${h}true,${l}${r}${r}get:${h}function${h}()${h}{${l}${r}${r}${r}return ${e}[k];${l}${r}${r}}${l}${r}});${l}});`:c+=`Object.keys(${e}).forEach(function${h}(k)${h}{${l}${r}if${h}(k${h}!==${h}'default')${h}exports[k]${h}=${h}${e}[k];${l}});`);for(const{defaultVariableName:e,id:n,isChunk:o,name:u,namedExportsMode:d,namespaceVariableName:p,reexports:f}of t)if(f&&s)for(const t of f)if("*"!==t.reexported){const s=Gt(u,t.imported,d,o,e,p,i,n,a);c&&(c+=l),c+="*"!==t.imported&&t.needsLiveBinding?`Object.defineProperty(exports,${h}'${t.reexported}',${h}{${l}${r}enumerable:${h}true,${l}${r}get:${h}function${h}()${h}{${l}${r}${r}return ${s};${l}${r}}${l}});`:`exports.${t.reexported}${h}=${h}${s};`;}for(const t of e){const e=`exports.${t.exported}`,s=t.local;e!==s&&(c&&(c+=l),c+=`${e}${h}=${h}${s};`);}return c?`${l}${l}${c}`:""}function Gt(e,t,s,i,n,r,a,o,h){if("default"===t){if(!i){const t=String(a(o)),s=Tt[t]?n:e;return Mt(t,h)?`${s}['default']`:s}return s?`${e}['default']`:e}return "*"===t?(i?!s:Lt[String(a(o))])?r:e:`${e}.${t}`}function Ht(e,t,s,i,n){let r="";return e&&(t&&(r+=function(e){return `Object.defineProperty(exports,${e}'__esModule',${e}{${e}value:${e}true${e}});`}(i)),s&&(r&&(r+=n),r+=function(e){return `exports[Symbol.toStringTag]${e}=${e}'Module';`}(i))),r}function qt(e,t,s,i,n,r,a,o,h,l,c){const u=new Set,d=[],p=(e,s,i)=>{u.add(s),d.push(`${t} ${e}${o}=${o}/*#__PURE__*/${s}(${i});`);};for(const{defaultVariableName:t,imports:i,id:n,isChunk:r,name:a,namedExportsMode:o,namespaceVariableName:h,reexports:l}of e)if(r){for(const{imported:e,reexported:t}of [...i||[],...l||[]])if("*"===e&&"*"!==t){o||p(h,"_interopNamespaceDefaultOnly",a);break}}else {const e=String(s(n));let r=!1,o=!1;for(const{imported:s,reexported:n}of [...i||[],...l||[]]){let i,l;"default"===s?r||(r=!0,t!==h&&(l=t,i=Tt[e])):"*"===s&&"*"!==n&&(o||(o=!0,i=Lt[e],l=h)),i&&p(l,i,a);}}return `${function(e,t,s,i,n,r,a,o,h){return zt.map((l=>e.has(l)||t.has(l)?Ot[l](s,i,n,r,a,o,h,e):"")).join("")}(u,a,o,h,l,c,i,n,r)}${d.length>0?`${d.join(h)}${h}${h}`:""}`}function Kt(e){return "."===e[0]?It(e):e}const Xt={assert:!0,buffer:!0,console:!0,constants:!0,domain:!0,events:!0,http:!0,https:!0,os:!0,path:!0,process:!0,punycode:!0,querystring:!0,stream:!0,string_decoder:!0,timers:!0,tty:!0,url:!0,util:!0,vm:!0,zlib:!0};function Yt(e,t){const s=t.map((({id:e})=>e)).filter((e=>e in Xt));if(!s.length)return;e({code:"MISSING_NODE_BUILTINS",message:`Creating a browser bundle that depends on Node.js built-in ${1===s.length?`module ('${s[0]}')`:`modules (${s.slice(0,-1).map((e=>`'${e}'`)).join(", ")} and '${s.slice(-1)}')`}. You might need to include https://github.com/ionic-team/rollup-plugin-node-polyfills`,modules:s});}function Qt(e){return e.replace(/^\t+/,(e=>e.split("\t").join("  ")))}function Jt(e){return e.replace(/[\0?*]/g,"_")}function Zt(e){const t=De(e);return t.substr(0,t.length-Be(e).length)}function es(e){return "undefined"!=typeof process&&Le(e)?Fe(process.cwd(),e):e}function ts(e){return !("/"===e[0]||"."===e[0]&&("/"===e[1]||"."===e[1])||Jt(e)!==e||Le(e))}function ss(e){throw e instanceof Error||(e=Object.assign(new Error(e.message),e)),e}function is(e,t,s,i){if("object"==typeof t){const{line:s,column:n}=t;e.loc={file:i,line:s,column:n};}else {e.pos=t;const{line:n,column:r}=Xe(s,t,{offsetLine:1});e.loc={file:i,line:n,column:r};}if(void 0===e.frame){const{line:t,column:i}=e.loc;e.frame=function(e,t,s){let i=e.split("\n");const n=Math.max(0,t-3);let r=Math.min(t+2,i.length);for(i=i.slice(n,r);!/\S/.test(i[i.length-1]);)i.pop(),r-=1;const a=String(r).length;return i.map(((e,i)=>{const r=n+i+1===t;let o=String(i+n+1);for(;o.length<a;)o=` ${o}`;if(r){const t=function(e){let t="";for(;e--;)t+=" ";return t}(a+2+Qt(e.slice(0,s)).length)+"^";return `${o}: ${Qt(e)}\n${t}`}return `${o}: ${Qt(e)}`})).join("\n")}(s,t,i);}}var ns;function rs(e,t,s){return {code:"INVALID_EXPORT_OPTION",message:`"${e}" was specified for "output.exports", but entry module "${es(s)}" has the following exports: ${t.join(", ")}`}}function as(e){const t=Array.from(e.implicitlyLoadedBefore,(e=>es(e.id))).sort();return {code:ns.MISSING_IMPLICIT_DEPENDANT,message:`Module "${es(e.id)}" that should be implicitly loaded before "${1===t.length?t[0]:`${t.slice(0,-1).join('", "')}" and "${t.slice(-1)[0]}`}" is not included in the module graph. Either it was not imported by an included module or only via a tree-shaken dynamic import, or no imported bindings were used and it had otherwise no side-effects.`}}function os(e,t,s){return {code:ns.NAMESPACE_CONFLICT,message:`Conflicting namespaces: ${es(t.id)} re-exports '${e}' from both ${es(t.exportsAll[e])} and ${es(s.exportsAll[e])} (will be ignored)`,name:e,reexporter:t.id,sources:[t.exportsAll[e],s.exportsAll[e]]}}function hs(e,t,s){const i=s?"reexport":"import";return {code:ns.UNEXPECTED_NAMED_IMPORT,id:e,message:`The named export "${t}" was ${i}ed from the external module ${es(e)} even though its interop type is "defaultOnly". Either remove or change this ${i} or change the value of the "output.interop" option.`,url:"https://rollupjs.org/guide/en/#outputinterop"}}function ls(e){return {code:ns.UNEXPECTED_NAMED_IMPORT,id:e,message:`There was a namespace "*" reexport from the external module ${es(e)} even though its interop type is "defaultOnly". This will be ignored as namespace reexports only reexport named exports. If this is not intended, either remove or change this reexport or change the value of the "output.interop" option.`,url:"https://rollupjs.org/guide/en/#outputinterop"}}function cs(e){return {code:ns.VALIDATION_ERROR,message:e}}function us(e,t,s){ds(e,t,s.onwarn,s.strictDeprecations);}function ds(e,t,s,i){if(t||i){const t=function(e){return {code:ns.DEPRECATED_FEATURE,..."string"==typeof e?{message:e}:e}}(e);if(i)return ss(t);s(t);}}!function(e){e.ASSET_NOT_FINALISED="ASSET_NOT_FINALISED",e.ASSET_NOT_FOUND="ASSET_NOT_FOUND",e.ASSET_SOURCE_ALREADY_SET="ASSET_SOURCE_ALREADY_SET",e.ASSET_SOURCE_MISSING="ASSET_SOURCE_MISSING",e.BAD_LOADER="BAD_LOADER",e.CANNOT_EMIT_FROM_OPTIONS_HOOK="CANNOT_EMIT_FROM_OPTIONS_HOOK",e.CHUNK_NOT_GENERATED="CHUNK_NOT_GENERATED",e.DEPRECATED_FEATURE="DEPRECATED_FEATURE",e.FILE_NOT_FOUND="FILE_NOT_FOUND",e.FILE_NAME_CONFLICT="FILE_NAME_CONFLICT",e.INPUT_HOOK_IN_OUTPUT_PLUGIN="INPUT_HOOK_IN_OUTPUT_PLUGIN",e.INVALID_CHUNK="INVALID_CHUNK",e.INVALID_EXPORT_OPTION="INVALID_EXPORT_OPTION",e.INVALID_EXTERNAL_ID="INVALID_EXTERNAL_ID",e.INVALID_OPTION="INVALID_OPTION",e.INVALID_PLUGIN_HOOK="INVALID_PLUGIN_HOOK",e.INVALID_ROLLUP_PHASE="INVALID_ROLLUP_PHASE",e.MISSING_IMPLICIT_DEPENDANT="MISSING_IMPLICIT_DEPENDANT",e.MIXED_EXPORTS="MIXED_EXPORTS",e.NAMESPACE_CONFLICT="NAMESPACE_CONFLICT",e.NO_TRANSFORM_MAP_OR_AST_WITHOUT_CODE="NO_TRANSFORM_MAP_OR_AST_WITHOUT_CODE",e.PLUGIN_ERROR="PLUGIN_ERROR",e.PREFER_NAMED_EXPORTS="PREFER_NAMED_EXPORTS",e.UNEXPECTED_NAMED_IMPORT="UNEXPECTED_NAMED_IMPORT",e.UNRESOLVED_ENTRY="UNRESOLVED_ENTRY",e.UNRESOLVED_IMPORT="UNRESOLVED_IMPORT",e.VALIDATION_ERROR="VALIDATION_ERROR",e.EXTERNAL_SYNTHETIC_EXPORTS="EXTERNAL_SYNTHETIC_EXPORTS",e.SYNTHETIC_NAMED_EXPORTS_NEED_NAMESPACE_EXPORT="SYNTHETIC_NAMED_EXPORTS_NEED_NAMESPACE_EXPORT";}(ns||(ns={}));const ps=/^[a-zA-Z$_][a-zA-Z0-9$_]*$/;function fs(e){return ps.test(e)?`.${e}`:`['${e}']`}function ms(e){return e.split(".").map(fs).join("")}function gs(e,t,s,i,n){const r=i?"":" ",a=e.split(".");a[0]=("function"==typeof s?s(a[0]):s[a[0]])||a[0];const o=a.pop();let h=t,l=a.map((e=>(h+=fs(e),`${h}${r}=${r}${h}${r}||${r}{}`))).concat(`${h}${fs(o)}`).join(`,${r}`).concat(`${r}=${r}${n}`);return a.length>0&&(l=`(${l})`),l}function ys(e){let t=e.length;for(;t--;){const{imports:s,reexports:i}=e[t];if(s||i)return e.slice(0,t+1)}return []}const xs=e=>`this${ms(e)}`;function Es({dependencies:e,exports:t}){const s=new Set(t.map((e=>e.exported)));s.has("default")||s.add("default");for(const{reexports:t}of e)if(t)for(const e of t)"*"===e.imported||s.has(e.reexported)||s.add(e.reexported);return s}function vs(e,t,s,i){return 0===e.length?"":1===e.length?`${s}${s}${s}exports('${e[0].name}',${t}${e[0].value});${i}${i}`:`${s}${s}${s}exports({${i}`+e.map((({name:e,value:i})=>`${s}${s}${s}${s}${e}:${t}${i}`)).join(`,${i}`)+`${i}${s}${s}${s}});${i}${i}`}function bs(e,t){return e?`${t}${ms(e)}`:"null"}var Ss={system:function(e,{accessedGlobals:t,dependencies:s,exports:i,hasExports:n,indentString:r,intro:a,outro:o,usesTopLevelAwait:h,varOrConst:l},c){const u=c.compact?"":"\n",d=c.compact?"":" ",p=s.map((e=>`'${e.id}'`)),f=[];let m;const g=[];for(const{imports:e,reexports:t}of s){const n=[];if(e)for(const t of e)f.push(t.local),"*"===t.imported?n.push(`${t.local}${d}=${d}module;`):n.push(`${t.local}${d}=${d}module.${t.imported};`);if(t){let e=!1;if(t.length>1||1===t.length&&("*"===t[0].reexported||"*"===t[0].imported)){for(const a of t)"*"===a.reexported&&(m||(m=Es({dependencies:s,exports:i})),e||(n.push(`${l} _setter${d}=${d}{};`),e=!0),n.push(`for${d}(var _$p${d}in${d}module)${d}{`),n.push(`${r}if${d}(!_starExcludes[_$p])${d}_setter[_$p]${d}=${d}module[_$p];`),n.push("}"));for(const e of t)"*"===e.imported&&"*"!==e.reexported&&n.push(`exports('${e.reexported}',${d}module);`);for(const s of t)"*"!==s.reexported&&"*"!==s.imported&&(e||(n.push(`${l} _setter${d}=${d}{};`),e=!0),n.push(`_setter.${s.reexported}${d}=${d}module.${s.imported};`));e&&n.push("exports(_setter);");}else for(const e of t)n.push(`exports('${e.reexported}',${d}module.${e.imported});`);}g.push(n.join(`${u}${r}${r}${r}`));}const y=c.name?`'${c.name}',${d}`:"",x=t.has("module")?`exports,${d}module`:n?"exports":"";let E=`System.register(${y}[`+p.join(`,${d}`)+`],${d}function${d}(${x})${d}{${u}${r}${c.strict?"'use strict';":""}`+((e,t,s,i,n)=>e?`${n}${i}${t} _starExcludes${s}=${s}{${s}${[...e].map((e=>`${e}:${s}1`)).join(`,${s}`)}${s}};`:"")(m,l,d,r,u)+((e,t,s,i)=>e.length?`${i}${s}var ${e.join(`,${t}`)};`:"")(f,d,r,u)+`${u}${r}return${d}{${g.length?`${u}${r}${r}setters:${d}[${g.map((e=>e?`function${d}(module)${d}{${u}${r}${r}${r}${e}${u}${r}${r}}`:c.systemNullSetters?"null":`function${d}()${d}{}`)).join(`,${d}`)}],`:""}${u}`;E+=`${r}${r}execute:${d}${h?`async${d}`:""}function${d}()${d}{${u}${u}`+((e,t,s,i)=>vs(e.filter((e=>e.hoisted||e.uninitialized)).map((e=>({name:e.exported,value:e.uninitialized?"void 0":e.local}))),t,s,i))(i,d,r,u);const v=`${u}${u}`+((e,t,s,i)=>vs(e.filter((e=>e.expression)).map((e=>({name:e.exported,value:e.local}))),t,s,i))(i,d,r,u)+((e,t,s,i)=>vs(e.filter((e=>"_missingExportShim"===e.local)).map((e=>({name:e.exported,value:"_missingExportShim"}))),t,s,i))(i,d,r,u)+`${r}${r}}${u}${r}}${c.compact?"":";"}${u}});`;return a&&e.prepend(a),o&&e.append(o),e.indent(`${r}${r}${r}`).append(v).prepend(E)},amd:function(e,{accessedGlobals:t,dependencies:s,exports:i,hasExports:n,id:r,indentString:a,intro:o,isEntryFacade:h,isModuleFacade:l,namedExportsMode:c,outro:u,varOrConst:d,warn:p},{amd:f,compact:m,esModule:g,externalLiveBindings:y,freeze:x,interop:E,namespaceToStringTag:v,strict:b}){Yt(p,s);const S=s.map((e=>`'${Kt(e.id)}'`)),A=s.map((e=>e.name)),P=m?"":"\n",C=m?"":";",N=m?"":" ";c&&n&&(A.unshift("exports"),S.unshift("'exports'")),t.has("require")&&(A.unshift("require"),S.unshift("'require'")),t.has("module")&&(A.unshift("module"),S.unshift("'module'"));const k=$t(f,r),w=(k?`'${k}',${N}`:"")+(S.length?`[${S.join(`,${N}`)}],${N}`:""),_=b?`${N}'use strict';`:"";e.prepend(`${o}${qt(s,d,E,y,x,v,t,N,P,C,a)}`);const I=jt(i,s,c,E,m,a,y);let $=Ht(c&&n,h&&g,l&&v,N,P);return $&&($=P+P+$),e.append(`${I}${$}${u}`),e.indent(a).prepend(`${f.define}(${w}function${N}(${A.join(`,${N}`)})${N}{${_}${P}${P}`).append(`${P}${P}});`)},cjs:function(e,{accessedGlobals:t,dependencies:s,exports:i,hasExports:n,indentString:r,intro:a,isEntryFacade:o,isModuleFacade:h,namedExportsMode:l,outro:c,varOrConst:u},{compact:d,esModule:p,externalLiveBindings:f,freeze:m,interop:g,namespaceToStringTag:y,strict:x}){const E=d?"":"\n",v=d?"":";",b=d?"":" ",S=x?`'use strict';${E}${E}`:"";let A=Ht(l&&n,o&&p,h&&y,b,E);A&&(A+=E+E);const P=function(e,t,s,i,n){let r="",a=!1;for(const{id:o,name:h,reexports:l,imports:c}of e)l||c?(r+=t&&a?",":`${r?`;${i}`:""}${s} `,a=!0,r+=`${h}${n}=${n}require('${o}')`):(r&&(r+=!t||a?`;${i}`:","),a=!1,r+=`require('${o}')`);if(r)return `${r};${i}${i}`;return ""}(s,d,u,E,b),C=qt(s,u,g,f,m,y,t,b,E,v,r);e.prepend(`${S}${a}${A}${P}${C}`);const N=jt(i,s,l,g,d,r,f,`module.exports${b}=${b}`);return e.append(`${N}${c}`)},es:function(e,{intro:t,outro:s,dependencies:i,exports:n,varOrConst:r},{compact:a}){const o=a?"":" ",h=a?"":"\n",l=function(e,t){const s=[];for(const{id:i,reexports:n,imports:r,name:a}of e)if(n||r){if(r){let e=null,n=null;const a=[];for(const t of r)"default"===t.imported?e=t:"*"===t.imported?n=t:a.push(t);n&&s.push(`import${t}*${t}as ${n.local} from${t}'${i}';`),e&&0===a.length?s.push(`import ${e.local} from${t}'${i}';`):a.length>0&&s.push(`import ${e?`${e.local},${t}`:""}{${t}${a.map((e=>e.imported===e.local?e.imported:`${e.imported} as ${e.local}`)).join(`,${t}`)}${t}}${t}from${t}'${i}';`);}if(n){let e=null;const o=[],h=[];for(const t of n)"*"===t.reexported?e=t:"*"===t.imported?o.push(t):h.push(t);if(e&&s.push(`export${t}*${t}from${t}'${i}';`),o.length>0){r&&r.some((e=>"*"===e.imported&&e.local===a))||s.push(`import${t}*${t}as ${a} from${t}'${i}';`);for(const e of o)s.push(`export${t}{${t}${a===e.reexported?a:`${a} as ${e.reexported}`} };`);}h.length>0&&s.push(`export${t}{${t}${h.map((e=>e.imported===e.reexported?e.imported:`${e.imported} as ${e.reexported}`)).join(`,${t}`)}${t}}${t}from${t}'${i}';`);}}else s.push(`import${t}'${i}';`);return s}(i,o);l.length>0&&(t+=l.join(h)+h+h),t&&e.prepend(t);const c=function(e,t,s){const i=[],n=[];for(const r of e)"default"===r.exported?i.push(`export default ${r.local};`):(r.expression&&i.push(`${s} ${r.local}${t}=${t}${r.expression};`),n.push(r.exported===r.local?r.local:`${r.local} as ${r.exported}`));n.length&&i.push(`export${t}{${t}${n.join(`,${t}`)}${t}};`);return i}(n,o,r);return c.length&&e.append(h+h+c.join(h).trim()),s&&e.append(s),e.trim()},iife:function(e,{accessedGlobals:t,dependencies:s,exports:i,hasExports:n,indentString:r,intro:a,namedExportsMode:o,outro:h,varOrConst:l,warn:c},{compact:u,esModule:d,extend:p,freeze:f,externalLiveBindings:m,globals:g,interop:y,name:x,namespaceToStringTag:E,strict:v}){const b=u?"":" ",S=u?"":";",A=u?"":"\n",P=x&&-1!==x.indexOf("."),C=!p&&!P;if(x&&C&&(Ie(N=x)||we.has(N)||_e.test(N)))return ss({code:"ILLEGAL_IDENTIFIER_AS_NAME",message:`Given name "${x}" is not a legal JS identifier. If you need this, you can try "output.extend: true".`});var N;Yt(c,s);const k=ys(s),w=k.map((e=>e.globalName||"null")),_=k.map((e=>e.name));n&&!x&&c({code:"MISSING_NAME_OPTION_FOR_IIFE_EXPORT",message:'If you do not supply "output.name", you may not be able to access the exports of an IIFE bundle.'}),o&&n&&(p?(w.unshift(`${xs(x)}${b}=${b}${xs(x)}${b}||${b}{}`),_.unshift("exports")):(w.unshift("{}"),_.unshift("exports")));const I=v?`${r}'use strict';${A}`:"",$=qt(s,l,y,m,f,E,t,b,A,S,r);e.prepend(`${a}${$}`);let T=`(function${b}(${_.join(`,${b}`)})${b}{${A}${I}${A}`;n&&(!x||p&&o||(T=(C?`${l} ${x}`:xs(x))+`${b}=${b}${T}`),P&&(T=function(e,t,s,i){const n=i?"":" ",r=e.split(".");r[0]=("function"==typeof s?s(r[0]):s[r[0]])||r[0],r.pop();let a=t;return r.map((e=>(a+=fs(e),`${a}${n}=${n}${a}${n}||${n}{}${i?"":";"}`))).join(i?",":"\n")+(i&&r.length?";":"\n")}(x,"this",g,u)+T));let M=`${A}${A}}(${w.join(`,${b}`)}));`;n&&!p&&o&&(M=`${A}${A}${r}return exports;${M}`);const L=jt(i,s,o,y,u,r,m);let R=Ht(o&&n,d,E,b,A);return R&&(R=A+A+R),e.append(`${L}${R}${h}`),e.indent(r).prepend(T).append(M)},umd:function(e,{accessedGlobals:t,dependencies:s,exports:i,hasExports:n,id:r,indentString:a,intro:o,namedExportsMode:h,outro:l,varOrConst:c,warn:u},{amd:d,compact:p,esModule:f,extend:m,externalLiveBindings:g,freeze:y,interop:x,name:E,namespaceToStringTag:v,globals:b,noConflict:S,strict:A}){const P=p?"":" ",C=p?"":"\n",N=p?"":";",k=p?"f":"factory",w=p?"g":"global";if(n&&!E)return ss({code:"MISSING_NAME_OPTION_FOR_IIFE_EXPORT",message:'You must supply "output.name" for UMD bundles that have exports so that the exports are accessible in environments without a module loader.'});Yt(u,s);const _=s.map((e=>`'${Kt(e.id)}'`)),I=s.map((e=>`require('${e.id}')`)),$=ys(s),T=$.map((e=>bs(e.globalName,w))),M=$.map((e=>e.name));h&&(n||S)&&(_.unshift("'exports'"),I.unshift("exports"),T.unshift(gs(E,w,b,p,(m?`${bs(E,w)}${P}||${P}`:"")+"{}")),M.unshift("exports"));const L=$t(d,r),R=(L?`'${L}',${P}`:"")+(_.length?`[${_.join(`,${P}`)}],${P}`:""),O=d.define,D=!h&&n?`module.exports${P}=${P}`:"",V=A?`${P}'use strict';${C}`:"";let B;if(S){const e=p?"e":"exports";let t;if(!h&&n)t=`var ${e}${P}=${P}${gs(E,w,b,p,`${k}(${T.join(`,${P}`)})`)};`;else {t=`var ${e}${P}=${P}${T.shift()};${C}${a}${a}${k}(${[e].concat(T).join(`,${P}`)});`;}B=`(function${P}()${P}{${C}${a}${a}var current${P}=${P}${function(e,t,s){const i=e.split(".");let n=t;return i.map((e=>n+=fs(e))).join(`${s}&&${s}`)}(E,w,P)};${C}${a}${a}${t}${C}${a}${a}${e}.noConflict${P}=${P}function${P}()${P}{${P}${bs(E,w)}${P}=${P}current;${P}return ${e}${p?"":"; "}};${C}${a}}())`;}else B=`${k}(${T.join(`,${P}`)})`,!h&&n&&(B=gs(E,w,b,p,B));const F=n||S&&h||T.length>0,W=F?`this,${P}`:"",U=F?`(${w}${P}=${P}typeof globalThis${P}!==${P}'undefined'${P}?${P}globalThis${P}:${P}${w}${P}||${P}self,${P}`:"",z=F?")":"",j=`(function${P}(${F?`${w},${P}`:""}${k})${P}{${C}`+(F?`${a}typeof exports${P}===${P}'object'${P}&&${P}typeof module${P}!==${P}'undefined'${P}?${P}${D}${k}(${I.join(`,${P}`)})${P}:${C}`:"")+`${a}typeof ${O}${P}===${P}'function'${P}&&${P}${O}.amd${P}?${P}${O}(${R}${k})${P}:${C}`+`${a}${U}${B}${z};${C}`+`}(${W}(function${P}(${M.join(", ")})${P}{${V}${C}`,G=C+C+"})));";e.prepend(`${o}${qt(s,c,x,g,y,v,t,P,C,N,a)}`);const H=jt(i,s,h,x,p,a,g);let q=Ht(h&&n,f,v,P,C);return q&&(q=C+C+q),e.append(`${H}${q}${l}`),e.trim().indent(a).append(G).prepend(j)}};const As={ArrayPattern(e,t){for(const s of t.elements)s&&As[s.type](e,s);},AssignmentPattern(e,t){As[t.left.type](e,t.left);},Identifier(e,t){e.push(t.name);},MemberExpression(){},ObjectPattern(e,t){for(const s of t.properties)"RestElement"===s.type?As.RestElement(e,s):As[s.value.type](e,s.value);},RestElement(e,t){As[t.argument.type](e,t.argument);}},Ps=function(e){const t=[];return As[e.type](t,e),t};class Cs extends Qe{hasEffects(){return !1}initialise(){this.context.addExport(this);}render(e,t,s){e.remove(s.start,s.end);}}Cs.prototype.needsBoundaries=!0;class Ns extends Ke{addDeclaration(e,t,s,i){return i?this.parent.addDeclaration(e,t,K,i):super.addDeclaration(e,t,s,!1)}}class ks extends Qe{initialise(){this.directive&&"use strict"!==this.directive&&"Program"===this.parent.type&&this.context.warn({code:"MODULE_LEVEL_DIRECTIVE",message:`Module level directives cause errors when bundled, '${this.directive}' was ignored.`},this.start);}render(e,t){super.render(e,t),this.included&&this.insertSemicolon(e);}shouldBeIncluded(e){return this.directive&&"use strict"!==this.directive?"Program"!==this.parent.type:super.shouldBeIncluded(e)}}class ws extends Qe{constructor(){super(...arguments),this.directlyIncluded=!1;}addImplicitReturnExpressionToScope(){const e=this.body[this.body.length-1];e&&"ReturnStatement"===e.type||this.scope.addReturnExpression(K);}createScope(e){this.scope=this.parent.preventChildBlockScope?e:new Ns(e);}hasEffects(e){if(this.deoptimizeBody)return !0;for(const t of this.body){if(t.hasEffects(e))return !0;if(e.brokenFlow)break}return !1}include(e,t){if(!this.deoptimizeBody||!this.directlyIncluded){this.included=!0,this.directlyIncluded=!0,this.deoptimizeBody&&(t=!0);for(const s of this.body)(t||s.shouldBeIncluded(e))&&s.include(e,t);}}initialise(){const e=this.body[0];this.deoptimizeBody=e instanceof ks&&"use asm"===e.directive;}render(e,t){this.body.length?_(this.body,e,this.start+1,this.end-1,t):super.render(e,t);}}class _s extends Qe{createScope(e){this.scope=new nt(e,this.context);}deoptimizePath(e){1===e.length&&e[0]===B&&this.scope.getReturnExpression().deoptimizePath(W);}getReturnExpressionWhenCalledAtPath(e){return 0===e.length?this.scope.getReturnExpression():K}hasEffects(){return !1}hasEffectsWhenAccessedAtPath(e){return e.length>1}hasEffectsWhenAssignedAtPath(e){return e.length>1}hasEffectsWhenCalledAtPath(e,t,s){if(e.length>0)return !0;for(const e of this.params)if(e.hasEffects(s))return !0;const{ignore:i,brokenFlow:n}=s;return s.ignore={breaks:!1,continues:!1,labels:new Set,returnAwaitYield:!0},!!this.body.hasEffects(s)||(s.ignore=i,s.brokenFlow=n,!1)}include(e,t){this.included=!0;for(const s of this.params)s instanceof Et||s.include(e,t);const{brokenFlow:s}=e;e.brokenFlow=0,this.body.include(e,t),e.brokenFlow=s;}includeCallArguments(e,t){this.scope.includeCallArguments(e,t);}initialise(){this.scope.addParameterVariables(this.params.map((e=>e.declare("parameter",K))),this.params[this.params.length-1]instanceof vt),this.body instanceof ws?this.body.addImplicitReturnExpressionToScope():this.scope.addReturnExpression(this.body);}parseNode(e){"BlockStatement"===e.body.type&&(this.body=new this.context.nodeConstructors.BlockStatement(e.body,this,this.scope.hoistedBodyVarScope)),super.parseNode(e);}}_s.prototype.preventChildBlockScope=!0;const Is={"!=":(e,t)=>e!=t,"!==":(e,t)=>e!==t,"%":(e,t)=>e%t,"&":(e,t)=>e&t,"*":(e,t)=>e*t,"**":(e,t)=>e**t,"+":(e,t)=>e+t,"-":(e,t)=>e-t,"/":(e,t)=>e/t,"<":(e,t)=>e<t,"<<":(e,t)=>e<<t,"<=":(e,t)=>e<=t,"==":(e,t)=>e==t,"===":(e,t)=>e===t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,">>":(e,t)=>e>>t,">>>":(e,t)=>e>>>t,"^":(e,t)=>e^t,in:()=>q,instanceof:()=>q,"|":(e,t)=>e|t};class $s extends Qe{getLiteralValueAtPath(e){return e.length>0||null===this.value&&110!==this.context.code.charCodeAt(this.start)||"bigint"==typeof this.value||47===this.context.code.charCodeAt(this.start)?q:this.value}getReturnExpressionWhenCalledAtPath(e){return 1!==e.length?K:ve(this.members,e[0])}hasEffectsWhenAccessedAtPath(e){return null===this.value?e.length>0:e.length>1}hasEffectsWhenAssignedAtPath(e){return e.length>0}hasEffectsWhenCalledAtPath(e,t,s){return 1!==e.length||Ee(this.members,e[0],this.included,t,s)}initialise(){this.members=function(e){switch(typeof e){case"boolean":return ge;case"number":return ye;case"string":return xe;default:return Object.create(null)}}(this.value);}parseNode(e){this.value=e.value,this.regex=e.regex,super.parseNode(e);}render(e){"string"==typeof this.value&&e.indentExclusionRanges.push([this.start+1,this.end-1]);}}function Ts(e){return e.computed?function(e){if(e instanceof $s)return String(e.value);return null}(e.property):e.property.name}function Ms(e){const t=e.propertyKey,s=e.object;if("string"==typeof t){if(s instanceof Et)return [{key:s.name,pos:s.start},{key:t,pos:e.property.start}];if(s instanceof Ls){const i=Ms(s);return i&&[...i,{key:t,pos:e.property.start}]}}return null}class Ls extends Qe{constructor(){super(...arguments),this.variable=null,this.bound=!1,this.expressionsToBeDeoptimized=[],this.replacement=null,this.wasPathDeoptimizedWhileOptimized=!1;}addExportedVariables(){}bind(){if(this.bound)return;this.bound=!0;const e=Ms(this),t=e&&this.scope.findVariable(e[0].key);if(t&&t.isNamespace){const s=this.resolveNamespaceVariables(t,e.slice(1));s?"string"==typeof s?this.replacement=s:(s instanceof Se&&s.module&&s.module.suggestName(e[0].key),this.variable=s,this.scope.addNamespaceMemberAccess(function(e){let t=e[0].key;for(let s=1;s<e.length;s++)t+="."+e[s].key;return t}(e),s)):super.bind();}else super.bind(),this.getPropertyKey();}deoptimizeCache(){const e=this.expressionsToBeDeoptimized;this.expressionsToBeDeoptimized=[],this.propertyKey=B,this.wasPathDeoptimizedWhileOptimized&&this.object.deoptimizePath(W);for(const t of e)t.deoptimizeCache();}deoptimizePath(e){if(this.bound||this.bind(),0===e.length&&this.disallowNamespaceReassignment(),this.variable)this.variable.deoptimizePath(e);else {const t=this.getPropertyKey();t===B?this.object.deoptimizePath(W):(this.wasPathDeoptimizedWhileOptimized=!0,this.object.deoptimizePath([t,...e]));}}getLiteralValueAtPath(e,t,s){return this.bound||this.bind(),null!==this.variable?this.variable.getLiteralValueAtPath(e,t,s):(this.expressionsToBeDeoptimized.push(s),this.object.getLiteralValueAtPath([this.getPropertyKey(),...e],t,s))}getReturnExpressionWhenCalledAtPath(e,t,s){return this.bound||this.bind(),null!==this.variable?this.variable.getReturnExpressionWhenCalledAtPath(e,t,s):(this.expressionsToBeDeoptimized.push(s),this.object.getReturnExpressionWhenCalledAtPath([this.getPropertyKey(),...e],t,s))}hasEffects(e){return this.property.hasEffects(e)||this.object.hasEffects(e)||this.context.options.treeshake.propertyReadSideEffects&&this.object.hasEffectsWhenAccessedAtPath([this.propertyKey],e)}hasEffectsWhenAccessedAtPath(e,t){return 0!==e.length&&(null!==this.variable?this.variable.hasEffectsWhenAccessedAtPath(e,t):this.object.hasEffectsWhenAccessedAtPath([this.propertyKey,...e],t))}hasEffectsWhenAssignedAtPath(e,t){return null!==this.variable?this.variable.hasEffectsWhenAssignedAtPath(e,t):this.object.hasEffectsWhenAssignedAtPath([this.propertyKey,...e],t)}hasEffectsWhenCalledAtPath(e,t,s){return null!==this.variable?this.variable.hasEffectsWhenCalledAtPath(e,t,s):this.object.hasEffectsWhenCalledAtPath([this.propertyKey,...e],t,s)}include(e,t){this.included||(this.included=!0,null!==this.variable&&this.context.includeVariable(this.variable)),this.object.include(e,t),this.property.include(e,t);}includeCallArguments(e,t){this.variable?this.variable.includeCallArguments(e,t):super.includeCallArguments(e,t);}initialise(){this.propertyKey=Ts(this);}render(e,t,{renderedParentType:s,isCalleeOfRenderedParent:i}=Ae){const n="CallExpression"===s&&i;if(this.variable||this.replacement){let t=this.variable?this.variable.getName():this.replacement;n&&(t="0, "+t),e.overwrite(this.start,this.end,t,{contentOnly:!0,storeName:!0});}else n&&e.appendRight(this.start,"0, "),super.render(e,t);}disallowNamespaceReassignment(){if(this.object instanceof Et){this.scope.findVariable(this.object.name).isNamespace&&(this.variable&&this.context.includeVariable(this.variable),this.context.warn({code:"ILLEGAL_NAMESPACE_REASSIGNMENT",message:`Illegal reassignment to import '${this.object.name}'`},this.start));}}getPropertyKey(){if(null===this.propertyKey){this.propertyKey=B;const e=this.property.getLiteralValueAtPath(F,j,this);return this.propertyKey=e===q?B:String(e)}return this.propertyKey}resolveNamespaceVariables(e,t){if(0===t.length)return e;if(!e.isNamespace)return null;const s=t[0].key,i=e instanceof Se?e.module.getVariableForExportName(s):e.context.traceExport(s);if(!i){const i=e instanceof Se?e.module.id:e.context.fileName;return this.context.warn({code:"MISSING_EXPORT",exporter:es(i),importer:es(this.context.fileName),message:`'${s}' is not exported by '${es(i)}'`,missing:s,url:"https://rollupjs.org/guide/en/#error-name-is-not-exported-by-module"},t[0].pos),"undefined"}return this.resolveNamespaceVariables(i,t.slice(1))}}class Rs extends it{addDeclaration(e,t,s,i){return i?this.parent.addDeclaration(e,t,s,i):super.addDeclaration(e,t,s,!1)}}class Os extends Qe{createScope(e){this.scope=new Rs(e,this.context);}initialise(){this.param&&this.param.declare("parameter",K);}parseNode(e){this.body=new this.context.nodeConstructors.BlockStatement(e.body,this,this.scope),super.parseNode(e);}}Os.prototype.preventChildBlockScope=!0;class Ds extends Ke{findLexicalBoundary(){return this}}class Vs extends Qe{hasEffects(e){return this.key.hasEffects(e)}hasEffectsWhenCalledAtPath(e,t,s){return e.length>0||this.value.hasEffectsWhenCalledAtPath(F,t,s)}}class Bs{constructor(e){this.included=!1,this.expressions=e;}deoptimizePath(e){for(const t of this.expressions)t.deoptimizePath(e);}getLiteralValueAtPath(){return q}getReturnExpressionWhenCalledAtPath(e,t,s){return new Bs(this.expressions.map((i=>i.getReturnExpressionWhenCalledAtPath(e,t,s))))}hasEffectsWhenAccessedAtPath(e,t){for(const s of this.expressions)if(s.hasEffectsWhenAccessedAtPath(e,t))return !0;return !1}hasEffectsWhenAssignedAtPath(e,t){for(const s of this.expressions)if(s.hasEffectsWhenAssignedAtPath(e,t))return !0;return !1}hasEffectsWhenCalledAtPath(e,t,s){for(const i of this.expressions)if(i.hasEffectsWhenCalledAtPath(e,t,s))return !0;return !1}include(e,t){for(const s of this.expressions)s.included||s.include(e,t);}includeCallArguments(){}}class Fs extends Qe{bind(){null!==this.declaration&&this.declaration.bind();}hasEffects(e){return null!==this.declaration&&this.declaration.hasEffects(e)}initialise(){this.context.addExport(this);}render(e,t,s){const{start:i,end:n}=s;null===this.declaration?e.remove(i,n):(e.remove(this.start,this.declaration.start),this.declaration.render(e,t,{start:i,end:n}));}}Fs.prototype.needsBoundaries=!0;class Ws extends Ns{constructor(){super(...arguments),this.hoistedDeclarations=[];}addDeclaration(e,t,s,i){return this.hoistedDeclarations.push(e),this.parent.addDeclaration(e,t,s,i)}}const Us=Symbol("unset");class zs extends Qe{constructor(){super(...arguments),this.testValue=Us;}deoptimizeCache(){this.testValue=q;}hasEffects(e){if(this.test.hasEffects(e))return !0;const t=this.getTestValue();if(t===q){const{brokenFlow:t}=e;if(this.consequent.hasEffects(e))return !0;const s=e.brokenFlow;return e.brokenFlow=t,null===this.alternate?!1:!!this.alternate.hasEffects(e)||(e.brokenFlow=e.brokenFlow<s?e.brokenFlow:s,!1)}return t?this.consequent.hasEffects(e):null!==this.alternate&&this.alternate.hasEffects(e)}include(e,t){if(this.included=!0,t)this.includeRecursively(t,e);else {const t=this.getTestValue();t===q?this.includeUnknownTest(e):this.includeKnownTest(e,t);}}parseNode(e){this.consequentScope=new Ws(this.scope),this.consequent=new(this.context.nodeConstructors[e.consequent.type]||this.context.nodeConstructors.UnknownNode)(e.consequent,this,this.consequentScope),e.alternate&&(this.alternateScope=new Ws(this.scope),this.alternate=new(this.context.nodeConstructors[e.alternate.type]||this.context.nodeConstructors.UnknownNode)(e.alternate,this,this.alternateScope)),super.parseNode(e);}render(e,t){const s=this.getTestValue(),i=[],n=this.test.included,r=!this.context.options.treeshake;n?this.test.render(e,t):(A(this,e),e.remove(this.start,this.consequent.start)),this.consequent.included&&(r||s===q||s)?this.consequent.render(e,t):(e.overwrite(this.consequent.start,this.consequent.end,n?";":""),i.push(...this.consequentScope.hoistedDeclarations)),this.alternate&&(!this.alternate.included||!r&&s!==q&&s?(n&&this.shouldKeepAlternateBranch()?e.overwrite(this.alternate.start,this.end,";"):e.remove(this.consequent.end,this.end),i.push(...this.alternateScope.hoistedDeclarations)):(n?101===e.original.charCodeAt(this.alternate.start-1)&&e.prependLeft(this.alternate.start," "):e.remove(this.consequent.end,this.alternate.start),this.alternate.render(e,t))),this.renderHoistedDeclarations(i,e);}getTestValue(){return this.testValue===Us?this.testValue=this.test.getLiteralValueAtPath(F,j,this):this.testValue}includeKnownTest(e,t){this.test.shouldBeIncluded(e)&&this.test.include(e,!1),t&&this.consequent.shouldBeIncluded(e)&&this.consequent.include(e,!1),null!==this.alternate&&!t&&this.alternate.shouldBeIncluded(e)&&this.alternate.include(e,!1);}includeRecursively(e,t){this.test.include(t,e),this.consequent.include(t,e),null!==this.alternate&&this.alternate.include(t,e);}includeUnknownTest(e){this.test.include(e,!1);const{brokenFlow:t}=e;let s=0;this.consequent.shouldBeIncluded(e)&&(this.consequent.include(e,!1),s=e.brokenFlow,e.brokenFlow=t),null!==this.alternate&&this.alternate.shouldBeIncluded(e)&&(this.alternate.include(e,!1),e.brokenFlow=e.brokenFlow<s?e.brokenFlow:s);}renderHoistedDeclarations(e,t){const s=[...new Set(e.map((e=>{const t=e.variable;return t.included?t.getName():""})))].filter(Boolean).join(", ");if(s){const e=this.parent.type,i="Program"!==e&&"BlockStatement"!==e;t.prependRight(this.start,`${i?"{ ":""}var ${s}; `),i&&t.appendLeft(this.end," }");}}shouldKeepAlternateBranch(){let e=this.parent;do{if(e instanceof zs&&e.alternate)return !0;if(e instanceof ws)return !1;e=e.parent;}while(e);return !1}}class js extends Qe{bind(){}hasEffects(){return !1}initialise(){this.context.addImport(this);}render(e,t,s){e.remove(s.start,s.end);}}js.prototype.needsBoundaries=!0;const Gs={amd:["require"],cjs:["require"],system:["module"]};const Hs="ROLLUP_ASSET_URL_",qs="ROLLUP_FILE_URL_";const Ks={amd:["document","module","URL"],cjs:["document","require","URL"],es:[],iife:["document","URL"],system:["module"],umd:["document","require","URL"]},Xs={amd:["document","require","URL"],cjs:["document","require","URL"],es:[],iife:["document","URL"],system:["module","URL"],umd:["document","require","URL"]},Ys=(e,t="URL")=>`new ${t}(${e}).href`,Qs=e=>Ys(`'${e}', document.currentScript && document.currentScript.src || document.baseURI`),Js=e=>(t,s)=>{const i=e(s);return null===t?`({ url: ${i} })`:"url"===t?i:"undefined"},Zs=e=>`(document.currentScript && document.currentScript.src || new URL('${e}', document.baseURI).href)`,ei={amd:e=>("."!==e[0]&&(e="./"+e),Ys(`require.toUrl('${e}'), document.baseURI`)),cjs:e=>`(typeof document === 'undefined' ? ${Ys(`'file:' + __dirname + '/${e}'`,"(require('u' + 'rl').URL)")} : ${Qs(e)})`,es:e=>Ys(`'${e}', import.meta.url`),iife:e=>Qs(e),system:e=>Ys(`'${e}', module.meta.url`),umd:e=>`(typeof document === 'undefined' ? ${Ys(`'file:' + __dirname + '/${e}'`,"(require('u' + 'rl').URL)")} : ${Qs(e)})`},ti={amd:Js((()=>Ys("module.uri, document.baseURI"))),cjs:Js((e=>`(typeof document === 'undefined' ? ${Ys("'file:' + __filename","(require('u' + 'rl').URL)")} : ${Zs(e)})`)),iife:Js((e=>Zs(e))),system:e=>null===e?"module.meta":`module.meta.${e}`,umd:Js((e=>`(typeof document === 'undefined' ? ${Ys("'file:' + __filename","(require('u' + 'rl').URL)")} : ${Zs(e)})`))};class si extends Qe{constructor(){super(...arguments),this.hasCachedEffect=!1;}hasEffects(e){if(this.hasCachedEffect)return !0;for(const t of this.body)if(t.hasEffects(e))return this.hasCachedEffect=!0;return !1}include(e,t){this.included=!0;for(const s of this.body)(t||s.shouldBeIncluded(e))&&s.include(e,t);}render(e,t){this.body.length?_(this.body,e,this.start,this.end,t):super.render(e,t);}}class ii extends Qe{hasEffects(e){if(this.test&&this.test.hasEffects(e))return !0;for(const t of this.consequent){if(e.brokenFlow)break;if(t.hasEffects(e))return !0}return !1}include(e,t){this.included=!0,this.test&&this.test.include(e,t);for(const s of this.consequent)(t||s.shouldBeIncluded(e))&&s.include(e,t);}render(e,t,s){if(this.consequent.length){this.test&&this.test.render(e,t);const i=this.test?this.test.end:C(e.original,"default",this.start)+7,n=C(e.original,":",i)+1;_(this.consequent,e,n,s.end,t);}else super.render(e,t);}}ii.prototype.needsBoundaries=!0;class ni extends Qe{getLiteralValueAtPath(e){return e.length>0||1!==this.quasis.length?q:this.quasis[0].value.cooked}render(e,t){e.indentExclusionRanges.push([this.start,this.end]),super.render(e,t);}}class ri extends Ke{constructor(e,t){super(e),this.context=t,this.variables.set("this",new He("this",null,X,t));}addExportDefaultDeclaration(e,t,s){const i=new Ct(e,t,s);return this.variables.set("default",i),i}addNamespaceMemberAccess(){}deconflict(e,t,s){for(const i of this.children)i.deconflict(e,t,s);}findLexicalBoundary(){return this}findVariable(e){const t=this.variables.get(e)||this.accessedOutsideVariables.get(e);if(t)return t;const s=this.context.traceVariable(e)||this.parent.findVariable(e);return s instanceof xt&&this.accessedOutsideVariables.set(e,s),s}}const ai={"!":e=>!e,"+":e=>+e,"-":e=>-e,delete:()=>q,typeof:e=>typeof e,void:()=>{},"~":e=>~e};function oi(e,t){return null!==e.renderBaseName&&t.has(e)&&e.isReassigned}class hi extends Qe{deoptimizePath(){for(const e of this.declarations)e.deoptimizePath(F);}hasEffectsWhenAssignedAtPath(){return !1}include(e,t){this.included=!0;for(const s of this.declarations)(t||s.shouldBeIncluded(e))&&s.include(e,t);}includeWithAllDeclaredVariables(e,t){this.included=!0;for(const s of this.declarations)s.include(t,e);}initialise(){for(const e of this.declarations)e.declareDeclarator(this.kind);}render(e,t,s=Ae){if(function(e,t){for(const s of e){if(!s.included)return !1;if("Identifier"===s.id.type){if(t.has(s.id.variable))return !1}else {const e=[];if(s.id.addExportedVariables(e,t),e.length>0)return !1}}return !0}(this.declarations,t.exportNamesByVariable)){for(const s of this.declarations)s.render(e,t);s.isNoStatement||59===e.original.charCodeAt(this.end-1)||e.appendLeft(this.end,";");}else this.renderReplacedDeclarations(e,t,s);}renderDeclarationEnd(e,t,s,i,n,r,a,o){59===e.original.charCodeAt(this.end-1)&&e.remove(this.end-1,this.end),r&&(t+=";"),null!==s?(10!==e.original.charCodeAt(i-1)||10!==e.original.charCodeAt(this.end)&&13!==e.original.charCodeAt(this.end)||(i--,13===e.original.charCodeAt(i)&&i--),i===s+1?e.overwrite(s,n,t):(e.overwrite(s,s+1,t),e.remove(i,n))):e.appendLeft(n,t),a.length>0&&e.appendLeft(n,` ${T(a,o)};`);}renderReplacedDeclarations(e,t,{start:s=this.start,end:i=this.end,isNoStatement:n}){const r=I(this.declarations,e,this.start+this.kind.length,this.end-(59===e.original.charCodeAt(this.end-1)?1:0));let a,o;o=/\n\s*$/.test(e.slice(this.start,r[0].start))?this.start+this.kind.length:r[0].start;let h=o-1;e.remove(this.start,h);let l,c,u=!1,d=!1,p="";const f=[];for(const{node:s,start:i,separator:n,contentEnd:m,end:g}of r)if(!s.included||s.id instanceof Et&&oi(s.id.variable,t.exportNamesByVariable)&&null===s.init)e.remove(i,g);else {if(l="",c="",s.id instanceof Et&&oi(s.id.variable,t.exportNamesByVariable))d&&(p+=";"),u=!1;else {if("system"===t.format&&null!==s.init)if("Identifier"!==s.id.type)s.id.addExportedVariables(f,t.exportNamesByVariable);else {const i=t.exportNamesByVariable.get(s.id.variable);if(i){const n=t.compact?"":" ",r=C(e.original,"=",s.id.end);e.prependLeft(k(e.original,r+1),1===i.length?`exports('${i[0]}',${n}`:M([s.id.variable],!1,t)),c+=")";}}u?p+=",":(d&&(p+=";"),l+=`${this.kind} `,u=!0);}o===h+1?e.overwrite(h,o,p+l):(e.overwrite(h,h+1,p),e.appendLeft(o,l)),s.render(e,t),a=m,o=g,d=!0,h=n,p=c;}d?this.renderDeclarationEnd(e,p,h,a,o,!n,f,t):e.remove(s,i);}}const li={ArrayExpression:class extends Qe{bind(){super.bind();for(const e of this.elements)null!==e&&e.deoptimizePath(W);}getReturnExpressionWhenCalledAtPath(e){return 1!==e.length?K:ve(me,e[0])}hasEffectsWhenAccessedAtPath(e){return e.length>1}hasEffectsWhenCalledAtPath(e,t,s){return 1!==e.length||Ee(me,e[0],this.included,t,s)}},ArrayPattern:class extends Qe{addExportedVariables(e,t){for(const s of this.elements)null!==s&&s.addExportedVariables(e,t);}declare(e){const t=[];for(const s of this.elements)null!==s&&t.push(...s.declare(e,K));return t}deoptimizePath(e){if(0===e.length)for(const t of this.elements)null!==t&&t.deoptimizePath(e);}hasEffectsWhenAssignedAtPath(e,t){if(e.length>0)return !0;for(const e of this.elements)if(null!==e&&e.hasEffectsWhenAssignedAtPath(F,t))return !0;return !1}},ArrowFunctionExpression:_s,AssignmentExpression:class extends Qe{constructor(){super(...arguments),this.deoptimized=!1;}hasEffects(e){return this.deoptimized||this.applyDeoptimizations(),this.right.hasEffects(e)||this.left.hasEffects(e)||this.left.hasEffectsWhenAssignedAtPath(F,e)}hasEffectsWhenAccessedAtPath(e,t){return e.length>0&&this.right.hasEffectsWhenAccessedAtPath(e,t)}include(e,t){this.deoptimized||this.applyDeoptimizations(),this.included=!0,this.left.include(e,t),this.right.include(e,t);}render(e,t){if(this.left.render(e,t),this.right.render(e,t),"system"===t.format){const s=this.left.variable&&t.exportNamesByVariable.get(this.left.variable);if("Identifier"===this.left.type&&s){const i=t.compact?"":" ",n=C(e.original,this.operator,this.left.end),r=this.operator.length>1?`${s[0]}${i}${this.operator.slice(0,-1)}${i}`:"";e.overwrite(n,k(e.original,n+this.operator.length),`=${i}${1===s.length?`exports('${s[0]}',${i}`:M([this.left.variable],!1,t)}${r}`),e.appendLeft(this.right.end,")");}else {const s=[];this.left.addExportedVariables(s,t.exportNamesByVariable),s.length>0&&(e.prependRight(this.start,M(s,!0,t)),e.appendLeft(this.end,")"));}}}applyDeoptimizations(){this.deoptimized=!0,this.left.deoptimizePath(F),this.right.deoptimizePath(W);}},AssignmentPattern:class extends Qe{addExportedVariables(e,t){this.left.addExportedVariables(e,t);}bind(){super.bind(),this.left.deoptimizePath(F),this.right.deoptimizePath(W);}declare(e,t){return this.left.declare(e,t)}deoptimizePath(e){0===e.length&&this.left.deoptimizePath(e);}hasEffectsWhenAssignedAtPath(e,t){return e.length>0||this.left.hasEffectsWhenAssignedAtPath(F,t)}render(e,t,{isShorthandProperty:s}=Ae){this.left.render(e,t,{isShorthandProperty:s}),this.right.render(e,t);}},AwaitExpression:class extends Qe{hasEffects(e){return !e.ignore.returnAwaitYield||this.argument.hasEffects(e)}include(e,t){if(!this.included){this.included=!0;e:if(!this.context.usesTopLevelAwait){let e=this.parent;do{if(e instanceof bt||e instanceof _s)break e}while(e=e.parent);this.context.usesTopLevelAwait=!0;}}this.argument.include(e,t);}},BinaryExpression:class extends Qe{deoptimizeCache(){}getLiteralValueAtPath(e,t,s){if(e.length>0)return q;const i=this.left.getLiteralValueAtPath(F,t,s);if(i===q)return q;const n=this.right.getLiteralValueAtPath(F,t,s);if(n===q)return q;const r=Is[this.operator];return r?r(i,n):q}hasEffects(e){return "+"===this.operator&&this.parent instanceof ks&&""===this.left.getLiteralValueAtPath(F,j,this)||super.hasEffects(e)}hasEffectsWhenAccessedAtPath(e){return e.length>1}},BlockStatement:ws,BreakStatement:class extends Qe{hasEffects(e){if(this.label){if(!e.ignore.labels.has(this.label.name))return !0;e.includedLabels.add(this.label.name),e.brokenFlow=2;}else {if(!e.ignore.breaks)return !0;e.brokenFlow=1;}return !1}include(e){this.included=!0,this.label&&(this.label.include(),e.includedLabels.add(this.label.name)),e.brokenFlow=this.label?2:1;}},CallExpression:class extends Qe{constructor(){super(...arguments),this.expressionsToBeDeoptimized=[],this.returnExpression=null,this.wasPathDeoptmizedWhileOptimized=!1;}bind(){if(super.bind(),this.callee instanceof Et){this.scope.findVariable(this.callee.name).isNamespace&&this.context.warn({code:"CANNOT_CALL_NAMESPACE",message:`Cannot call a namespace ('${this.callee.name}')`},this.start),"eval"===this.callee.name&&this.context.warn({code:"EVAL",message:"Use of eval is strongly discouraged, as it poses security risks and may cause issues with minification",url:"https://rollupjs.org/guide/en/#avoiding-eval"},this.start);}this.getReturnExpression(j),this.callee instanceof Ls&&!this.callee.variable&&this.callee.object.deoptimizePath(W);for(const e of this.arguments)e.deoptimizePath(W);}deoptimizeCache(){if(this.returnExpression!==K){this.returnExpression=null;const e=this.getReturnExpression(j),t=this.expressionsToBeDeoptimized;e!==K&&(this.expressionsToBeDeoptimized=[],this.wasPathDeoptmizedWhileOptimized&&(e.deoptimizePath(W),this.wasPathDeoptmizedWhileOptimized=!1));for(const e of t)e.deoptimizeCache();}}deoptimizePath(e){if(0===e.length)return;const t=this.context.deoptimizationTracker.getEntities(e);if(t.has(this))return;t.add(this);const s=this.getReturnExpression(j);s!==K&&(this.wasPathDeoptmizedWhileOptimized=!0,s.deoptimizePath(e));}getLiteralValueAtPath(e,t,s){const i=this.getReturnExpression(t);if(i===K)return q;const n=t.getEntities(e);if(n.has(i))return q;this.expressionsToBeDeoptimized.push(s),n.add(i);const r=i.getLiteralValueAtPath(e,t,s);return n.delete(i),r}getReturnExpressionWhenCalledAtPath(e,t,s){const i=this.getReturnExpression(t);if(this.returnExpression===K)return K;const n=t.getEntities(e);if(n.has(i))return K;this.expressionsToBeDeoptimized.push(s),n.add(i);const r=i.getReturnExpressionWhenCalledAtPath(e,t,s);return n.delete(i),r}hasEffects(e){for(const t of this.arguments)if(t.hasEffects(e))return !0;return (!this.context.options.treeshake.annotations||!this.annotatedPure)&&(this.callee.hasEffects(e)||this.callee.hasEffectsWhenCalledAtPath(F,this.callOptions,e))}hasEffectsWhenAccessedAtPath(e,t){if(0===e.length)return !1;const s=t.accessed.getEntities(e);return !s.has(this)&&(s.add(this),this.returnExpression.hasEffectsWhenAccessedAtPath(e,t))}hasEffectsWhenAssignedAtPath(e,t){if(0===e.length)return !0;const s=t.assigned.getEntities(e);return !s.has(this)&&(s.add(this),this.returnExpression.hasEffectsWhenAssignedAtPath(e,t))}hasEffectsWhenCalledAtPath(e,t,s){const i=(t.withNew?s.instantiated:s.called).getEntities(e,t);return !i.has(this)&&(i.add(this),this.returnExpression.hasEffectsWhenCalledAtPath(e,t,s))}include(e,t){t?(super.include(e,t),"variables"===t&&this.callee instanceof Et&&this.callee.variable&&this.callee.variable.markCalledFromTryStatement()):(this.included=!0,this.callee.include(e,!1)),this.callee.includeCallArguments(e,this.arguments),this.returnExpression.included||this.returnExpression.include(e,!1);}initialise(){this.callOptions={args:this.arguments,withNew:!1};}render(e,t,{renderedParentType:s}=Ae){if(this.callee.render(e,t),this.arguments.length>0)if(this.arguments[this.arguments.length-1].included)for(const s of this.arguments)s.render(e,t);else {let s=this.arguments.length-2;for(;s>=0&&!this.arguments[s].included;)s--;if(s>=0){for(let i=0;i<=s;i++)this.arguments[i].render(e,t);e.remove(C(e.original,",",this.arguments[s].end),this.end-1);}else e.remove(C(e.original,"(",this.callee.end)+1,this.end-1);}"ExpressionStatement"===s&&"FunctionExpression"===this.callee.type&&(e.appendRight(this.start,"("),e.prependLeft(this.end,")"));}getReturnExpression(e){return null===this.returnExpression?(this.returnExpression=K,this.returnExpression=this.callee.getReturnExpressionWhenCalledAtPath(F,e,this)):this.returnExpression}},CatchClause:Os,ChainExpression:class extends Qe{},ClassBody:class extends Qe{createScope(e){this.scope=new Ds(e);}hasEffectsWhenCalledAtPath(e,t,s){return e.length>0||null!==this.classConstructor&&this.classConstructor.hasEffectsWhenCalledAtPath(F,t,s)}initialise(){for(const e of this.body)if(e instanceof Vs&&"constructor"===e.kind)return void(this.classConstructor=e);this.classConstructor=null;}},ClassDeclaration:Ze,ClassExpression:class extends Je{},ConditionalExpression:class extends Qe{constructor(){super(...arguments),this.expressionsToBeDeoptimized=[],this.isBranchResolutionAnalysed=!1,this.usedBranch=null,this.wasPathDeoptimizedWhileOptimized=!1;}bind(){super.bind(),this.getUsedBranch();}deoptimizeCache(){if(null!==this.usedBranch){const e=this.usedBranch===this.consequent?this.alternate:this.consequent;this.usedBranch=null;const t=this.expressionsToBeDeoptimized;this.expressionsToBeDeoptimized=[],this.wasPathDeoptimizedWhileOptimized&&e.deoptimizePath(W);for(const e of t)e.deoptimizeCache();}}deoptimizePath(e){if(e.length>0){const t=this.getUsedBranch();null===t?(this.consequent.deoptimizePath(e),this.alternate.deoptimizePath(e)):(this.wasPathDeoptimizedWhileOptimized=!0,t.deoptimizePath(e));}}getLiteralValueAtPath(e,t,s){const i=this.getUsedBranch();return null===i?q:(this.expressionsToBeDeoptimized.push(s),i.getLiteralValueAtPath(e,t,s))}getReturnExpressionWhenCalledAtPath(e,t,s){const i=this.getUsedBranch();return null===i?new Bs([this.consequent.getReturnExpressionWhenCalledAtPath(e,t,s),this.alternate.getReturnExpressionWhenCalledAtPath(e,t,s)]):(this.expressionsToBeDeoptimized.push(s),i.getReturnExpressionWhenCalledAtPath(e,t,s))}hasEffects(e){return !!this.test.hasEffects(e)||(null===this.usedBranch?this.consequent.hasEffects(e)||this.alternate.hasEffects(e):this.usedBranch.hasEffects(e))}hasEffectsWhenAccessedAtPath(e,t){return 0!==e.length&&(null===this.usedBranch?this.consequent.hasEffectsWhenAccessedAtPath(e,t)||this.alternate.hasEffectsWhenAccessedAtPath(e,t):this.usedBranch.hasEffectsWhenAccessedAtPath(e,t))}hasEffectsWhenAssignedAtPath(e,t){return 0===e.length||(null===this.usedBranch?this.consequent.hasEffectsWhenAssignedAtPath(e,t)||this.alternate.hasEffectsWhenAssignedAtPath(e,t):this.usedBranch.hasEffectsWhenAssignedAtPath(e,t))}hasEffectsWhenCalledAtPath(e,t,s){return null===this.usedBranch?this.consequent.hasEffectsWhenCalledAtPath(e,t,s)||this.alternate.hasEffectsWhenCalledAtPath(e,t,s):this.usedBranch.hasEffectsWhenCalledAtPath(e,t,s)}include(e,t){this.included=!0,t||this.test.shouldBeIncluded(e)||null===this.usedBranch?(this.test.include(e,t),this.consequent.include(e,t),this.alternate.include(e,t)):this.usedBranch.include(e,t);}includeCallArguments(e,t){null===this.usedBranch?(this.consequent.includeCallArguments(e,t),this.alternate.includeCallArguments(e,t)):this.usedBranch.includeCallArguments(e,t);}render(e,t,{renderedParentType:s,isCalleeOfRenderedParent:i,preventASI:n}=Ae){if(this.test.included)super.render(e,t);else {const r=C(e.original,":",this.consequent.end),a=(this.consequent.included?C(e.original,"?",this.test.end):r)+1;n&&$(e,a,this.usedBranch.start),e.remove(this.start,a),this.consequent.included&&e.remove(r,this.end),A(this,e),this.usedBranch.render(e,t,{isCalleeOfRenderedParent:s?i:this.parent.callee===this,preventASI:!0,renderedParentType:s||this.parent.type});}}getUsedBranch(){if(this.isBranchResolutionAnalysed)return this.usedBranch;this.isBranchResolutionAnalysed=!0;const e=this.test.getLiteralValueAtPath(F,j,this);return e===q?null:this.usedBranch=e?this.consequent:this.alternate}},ContinueStatement:class extends Qe{hasEffects(e){if(this.label){if(!e.ignore.labels.has(this.label.name))return !0;e.includedLabels.add(this.label.name),e.brokenFlow=2;}else {if(!e.ignore.continues)return !0;e.brokenFlow=1;}return !1}include(e){this.included=!0,this.label&&(this.label.include(),e.includedLabels.add(this.label.name)),e.brokenFlow=this.label?2:1;}},DoWhileStatement:class extends Qe{hasEffects(e){if(this.test.hasEffects(e))return !0;const{brokenFlow:t,ignore:{breaks:s,continues:i}}=e;return e.ignore.breaks=!0,e.ignore.continues=!0,!!this.body.hasEffects(e)||(e.ignore.breaks=s,e.ignore.continues=i,e.brokenFlow=t,!1)}include(e,t){this.included=!0,this.test.include(e,t);const{brokenFlow:s}=e;this.body.include(e,t),e.brokenFlow=s;}},EmptyStatement:class extends Qe{hasEffects(){return !1}},ExportAllDeclaration:Cs,ExportDefaultDeclaration:At,ExportNamedDeclaration:Fs,ExportSpecifier:class extends Qe{},ExpressionStatement:ks,FieldDefinition:class extends Qe{hasEffects(e){return this.key.hasEffects(e)||this.static&&null!==this.value&&this.value.hasEffects(e)}},ForInStatement:class extends Qe{bind(){this.left.bind(),this.left.deoptimizePath(F),this.right.bind(),this.body.bind();}createScope(e){this.scope=new Ns(e);}hasEffects(e){if(this.left&&(this.left.hasEffects(e)||this.left.hasEffectsWhenAssignedAtPath(F,e))||this.right&&this.right.hasEffects(e))return !0;const{brokenFlow:t,ignore:{breaks:s,continues:i}}=e;return e.ignore.breaks=!0,e.ignore.continues=!0,!!this.body.hasEffects(e)||(e.ignore.breaks=s,e.ignore.continues=i,e.brokenFlow=t,!1)}include(e,t){this.included=!0,this.left.includeWithAllDeclaredVariables(t,e),this.left.deoptimizePath(F),this.right.include(e,t);const{brokenFlow:s}=e;this.body.include(e,t),e.brokenFlow=s;}render(e,t){this.left.render(e,t,P),this.right.render(e,t,P),110===e.original.charCodeAt(this.right.start-1)&&e.prependLeft(this.right.start," "),this.body.render(e,t);}},ForOfStatement:class extends Qe{bind(){this.left.bind(),this.left.deoptimizePath(F),this.right.bind(),this.body.bind();}createScope(e){this.scope=new Ns(e);}hasEffects(){return !0}include(e,t){this.included=!0,this.left.includeWithAllDeclaredVariables(t,e),this.left.deoptimizePath(F),this.right.include(e,t);const{brokenFlow:s}=e;this.body.include(e,t),e.brokenFlow=s;}render(e,t){this.left.render(e,t,P),this.right.render(e,t,P),102===e.original.charCodeAt(this.right.start-1)&&e.prependLeft(this.right.start," "),this.body.render(e,t);}},ForStatement:class extends Qe{createScope(e){this.scope=new Ns(e);}hasEffects(e){if(this.init&&this.init.hasEffects(e)||this.test&&this.test.hasEffects(e)||this.update&&this.update.hasEffects(e))return !0;const{brokenFlow:t,ignore:{breaks:s,continues:i}}=e;return e.ignore.breaks=!0,e.ignore.continues=!0,!!this.body.hasEffects(e)||(e.ignore.breaks=s,e.ignore.continues=i,e.brokenFlow=t,!1)}include(e,t){this.included=!0,this.init&&this.init.include(e,t),this.test&&this.test.include(e,t);const{brokenFlow:s}=e;this.update&&this.update.include(e,t),this.body.include(e,t),e.brokenFlow=s;}render(e,t){this.init&&this.init.render(e,t,P),this.test&&this.test.render(e,t,P),this.update&&this.update.render(e,t,P),this.body.render(e,t);}},FunctionDeclaration:St,FunctionExpression:class extends bt{},Identifier:Et,IfStatement:zs,ImportDeclaration:js,ImportDefaultSpecifier:class extends Qe{},ImportExpression:class extends Qe{constructor(){super(...arguments),this.inlineNamespace=null,this.mechanism=null,this.resolution=null;}hasEffects(){return !0}include(e,t){this.included||(this.included=!0,this.context.includeDynamicImport(this),this.scope.addAccessedDynamicImport(this)),this.source.include(e,t);}initialise(){this.context.addDynamicImport(this);}render(e,t){if(this.inlineNamespace){const s=t.compact?"":" ",i=t.compact?"":";";e.overwrite(this.start,this.end,`Promise.resolve().then(function${s}()${s}{${s}return ${this.inlineNamespace.getName()}${i}${s}})`);}else this.mechanism&&(e.overwrite(this.start,C(e.original,"(",this.start+6)+1,this.mechanism.left),e.overwrite(this.end-1,this.end,this.mechanism.right)),this.source.render(e,t);}renderFinalResolution(e,t,s,i){if(e.overwrite(this.source.start,this.source.end,t),s){const t=i.compact?"":" ",n=i.compact?"":";";e.prependLeft(this.end,`.then(function${t}(n)${t}{${t}return n.${s}${n}${t}})`);}}setExternalResolution(e,t,s,i,n){this.resolution=t;const r=[...Gs[s.format]||[]];let a;({helper:a,mechanism:this.mechanism}=this.getDynamicImportMechanismAndHelper(t,e,s,i)),a&&r.push(a),r.length>0&&this.scope.addAccessedGlobals(r,n);}setInternalResolution(e){this.inlineNamespace=e;}getDynamicImportMechanismAndHelper(e,t,s,i){const n=i.hookFirstSync("renderDynamicImport",[{customResolution:"string"==typeof this.resolution?this.resolution:null,format:s.format,moduleId:this.context.module.id,targetModuleId:this.resolution&&"string"!=typeof this.resolution?this.resolution.id:null}]);if(n)return {helper:null,mechanism:n};switch(s.format){case"cjs":{const i=s.compact?"":" ",n=s.compact?"":";",r=`Promise.resolve().then(function${i}()${i}{${i}return`,a=this.getInteropHelper(e,t,s.interop);return {helper:a,mechanism:a?{left:`${r} /*#__PURE__*/${a}(require(`,right:`))${n}${i}})`}:{left:`${r} require(`,right:`)${n}${i}})`}}}case"amd":{const i=s.compact?"":" ",n=s.compact?"c":"resolve",r=s.compact?"e":"reject",a=this.getInteropHelper(e,t,s.interop);return {helper:a,mechanism:{left:`new Promise(function${i}(${n},${i}${r})${i}{${i}require([`,right:`],${i}${a?`function${i}(m)${i}{${i}${n}(/*#__PURE__*/${a}(m));${i}}`:n},${i}${r})${i}})`}}}case"system":return {helper:null,mechanism:{left:"module.import(",right:")"}};case"es":if(s.dynamicImportFunction)return {helper:null,mechanism:{left:`${s.dynamicImportFunction}(`,right:")"}}}return {helper:null,mechanism:null}}getInteropHelper(e,t,s){return "external"===t?Lt[String(s(e instanceof Ue?e.id:null))]:"default"===t?"_interopNamespaceDefaultOnly":null}},ImportNamespaceSpecifier:class extends Qe{},ImportSpecifier:class extends Qe{},LabeledStatement:class extends Qe{hasEffects(e){const t=e.brokenFlow;return e.ignore.labels.add(this.label.name),!!this.body.hasEffects(e)||(e.ignore.labels.delete(this.label.name),e.includedLabels.has(this.label.name)&&(e.includedLabels.delete(this.label.name),e.brokenFlow=t),!1)}include(e,t){this.included=!0;const s=e.brokenFlow;this.body.include(e,t),(t||e.includedLabels.has(this.label.name))&&(this.label.include(),e.includedLabels.delete(this.label.name),e.brokenFlow=s);}render(e,t){this.label.included?this.label.render(e,t):e.remove(this.start,C(e.original,":",this.label.end)+1),this.body.render(e,t);}},Literal:$s,LogicalExpression:class extends Qe{constructor(){super(...arguments),this.expressionsToBeDeoptimized=[],this.isBranchResolutionAnalysed=!1,this.unusedBranch=null,this.usedBranch=null,this.wasPathDeoptimizedWhileOptimized=!1;}bind(){super.bind(),this.getUsedBranch();}deoptimizeCache(){if(null!==this.usedBranch){this.usedBranch=null;const e=this.expressionsToBeDeoptimized;this.expressionsToBeDeoptimized=[],this.wasPathDeoptimizedWhileOptimized&&this.unusedBranch.deoptimizePath(W);for(const t of e)t.deoptimizeCache();}}deoptimizePath(e){const t=this.getUsedBranch();null===t?(this.left.deoptimizePath(e),this.right.deoptimizePath(e)):(this.wasPathDeoptimizedWhileOptimized=!0,t.deoptimizePath(e));}getLiteralValueAtPath(e,t,s){const i=this.getUsedBranch();return null===i?q:(this.expressionsToBeDeoptimized.push(s),i.getLiteralValueAtPath(e,t,s))}getReturnExpressionWhenCalledAtPath(e,t,s){const i=this.getUsedBranch();return null===i?new Bs([this.left.getReturnExpressionWhenCalledAtPath(e,t,s),this.right.getReturnExpressionWhenCalledAtPath(e,t,s)]):(this.expressionsToBeDeoptimized.push(s),i.getReturnExpressionWhenCalledAtPath(e,t,s))}hasEffects(e){return !!this.left.hasEffects(e)||this.usedBranch!==this.left&&this.right.hasEffects(e)}hasEffectsWhenAccessedAtPath(e,t){return 0!==e.length&&(null===this.usedBranch?this.left.hasEffectsWhenAccessedAtPath(e,t)||this.right.hasEffectsWhenAccessedAtPath(e,t):this.usedBranch.hasEffectsWhenAccessedAtPath(e,t))}hasEffectsWhenAssignedAtPath(e,t){return 0===e.length||(null===this.usedBranch?this.left.hasEffectsWhenAssignedAtPath(e,t)||this.right.hasEffectsWhenAssignedAtPath(e,t):this.usedBranch.hasEffectsWhenAssignedAtPath(e,t))}hasEffectsWhenCalledAtPath(e,t,s){return null===this.usedBranch?this.left.hasEffectsWhenCalledAtPath(e,t,s)||this.right.hasEffectsWhenCalledAtPath(e,t,s):this.usedBranch.hasEffectsWhenCalledAtPath(e,t,s)}include(e,t){this.included=!0,t||this.usedBranch===this.right&&this.left.shouldBeIncluded(e)||null===this.usedBranch?(this.left.include(e,t),this.right.include(e,t)):this.usedBranch.include(e,t);}render(e,t,{renderedParentType:s,isCalleeOfRenderedParent:i,preventASI:n}=Ae){if(this.left.included&&this.right.included)this.left.render(e,t,{preventASI:n}),this.right.render(e,t);else {const r=C(e.original,this.operator,this.left.end);this.right.included?(e.remove(this.start,r+2),n&&$(e,r+2,this.right.start)):e.remove(r,this.end),A(this,e),this.usedBranch.render(e,t,{isCalleeOfRenderedParent:s?i:this.parent.callee===this,preventASI:n,renderedParentType:s||this.parent.type});}}getUsedBranch(){if(!this.isBranchResolutionAnalysed){this.isBranchResolutionAnalysed=!0;const e=this.left.getLiteralValueAtPath(F,j,this);if(e===q)return null;"||"===this.operator&&e||"&&"===this.operator&&!e||"??"===this.operator&&null!=e?(this.usedBranch=this.left,this.unusedBranch=this.right):(this.usedBranch=this.right,this.unusedBranch=this.left);}return this.usedBranch}},MemberExpression:Ls,MetaProperty:class extends Qe{addAccessedGlobals(e,t){const s=this.metaProperty,i=(s&&(s.startsWith(qs)||s.startsWith(Hs)||s.startsWith("ROLLUP_CHUNK_URL_"))?Xs:Ks)[e];i.length>0&&this.scope.addAccessedGlobals(i,t);}getReferencedFileName(e){const t=this.metaProperty;return t&&t.startsWith(qs)?e.getFileName(t.substr(qs.length)):null}hasEffects(){return !1}hasEffectsWhenAccessedAtPath(e){return e.length>1}include(){if(!this.included&&(this.included=!0,"import"===this.meta.name)){this.context.addImportMeta(this);const e=this.parent;this.metaProperty=e instanceof Ls&&"string"==typeof e.propertyKey?e.propertyKey:null;}}renderFinalMechanism(e,t,s,i){var n;const r=this.parent,a=this.metaProperty;if(a&&(a.startsWith(qs)||a.startsWith(Hs)||a.startsWith("ROLLUP_CHUNK_URL_"))){let n,o=null,h=null,l=null;a.startsWith(qs)?(o=a.substr(qs.length),n=i.getFileName(o)):a.startsWith(Hs)?(us(`Using the "${Hs}" prefix to reference files is deprecated. Use the "${qs}" prefix instead.`,!0,this.context.options),h=a.substr(Hs.length),n=i.getFileName(h)):(us(`Using the "ROLLUP_CHUNK_URL_" prefix to reference files is deprecated. Use the "${qs}" prefix instead.`,!0,this.context.options),l=a.substr("ROLLUP_CHUNK_URL_".length),n=i.getFileName(l));const c=Oe(Fe(Ve(t),n));let u;return null!==h&&(u=i.hookFirstSync("resolveAssetUrl",[{assetFileName:n,chunkId:t,format:s,moduleId:this.context.module.id,relativeAssetPath:c}])),u||(u=i.hookFirstSync("resolveFileUrl",[{assetReferenceId:h,chunkId:t,chunkReferenceId:l,fileName:n,format:s,moduleId:this.context.module.id,referenceId:o||h||l,relativePath:c}])||ei[s](c)),void e.overwrite(r.start,r.end,u,{contentOnly:!0})}const o=i.hookFirstSync("resolveImportMeta",[a,{chunkId:t,format:s,moduleId:this.context.module.id}])||(null===(n=ti[s])||void 0===n?void 0:n.call(ti,a,t));"string"==typeof o&&(r instanceof Ls?e.overwrite(r.start,r.end,o,{contentOnly:!0}):e.overwrite(this.start,this.end,o,{contentOnly:!0}));}},MethodDefinition:Vs,NewExpression:class extends Qe{bind(){super.bind();for(const e of this.arguments)e.deoptimizePath(W);}hasEffects(e){for(const t of this.arguments)if(t.hasEffects(e))return !0;return (!this.context.options.treeshake.annotations||!this.annotatedPure)&&(this.callee.hasEffects(e)||this.callee.hasEffectsWhenCalledAtPath(F,this.callOptions,e))}hasEffectsWhenAccessedAtPath(e){return e.length>1}initialise(){this.callOptions={args:this.arguments,withNew:!0};}},ObjectExpression:class extends Qe{constructor(){super(...arguments),this.deoptimizedPaths=new Set,this.expressionsToBeDeoptimized=new Map,this.hasUnknownDeoptimizedProperty=!1,this.propertyMap=null,this.unmatchablePropertiesRead=[],this.unmatchablePropertiesWrite=[];}bind(){super.bind(),this.getPropertyMap();}deoptimizeCache(){this.hasUnknownDeoptimizedProperty||this.deoptimizeAllProperties();}deoptimizePath(e){if(this.hasUnknownDeoptimizedProperty)return;const t=this.getPropertyMap(),s=e[0];if(1===e.length){if("string"!=typeof s)return void this.deoptimizeAllProperties();if(!this.deoptimizedPaths.has(s)){this.deoptimizedPaths.add(s);const e=this.expressionsToBeDeoptimized.get(s);if(e)for(const t of e)t.deoptimizeCache();}}const i=1===e.length?W:e.slice(1);for(const e of "string"==typeof s?t[s]?t[s].propertiesRead:[]:this.properties)e.deoptimizePath(i);}getLiteralValueAtPath(e,t,s){const i=this.getPropertyMap(),n=e[0];return 0===e.length||this.hasUnknownDeoptimizedProperty||"string"!=typeof n||this.deoptimizedPaths.has(n)?q:1!==e.length||i[n]||fe[n]||0!==this.unmatchablePropertiesRead.length?!i[n]||null===i[n].exactMatchRead||i[n].propertiesRead.length>1?q:(V(this.expressionsToBeDeoptimized,n,(()=>[])).push(s),i[n].exactMatchRead.getLiteralValueAtPath(e.slice(1),t,s)):void V(this.expressionsToBeDeoptimized,n,(()=>[])).push(s)}getReturnExpressionWhenCalledAtPath(e,t,s){const i=this.getPropertyMap(),n=e[0];return 0===e.length||this.hasUnknownDeoptimizedProperty||"string"!=typeof n||this.deoptimizedPaths.has(n)?K:1!==e.length||!fe[n]||0!==this.unmatchablePropertiesRead.length||i[n]&&null!==i[n].exactMatchRead?!i[n]||null===i[n].exactMatchRead||i[n].propertiesRead.length>1?K:(V(this.expressionsToBeDeoptimized,n,(()=>[])).push(s),i[n].exactMatchRead.getReturnExpressionWhenCalledAtPath(e.slice(1),t,s)):ve(fe,n)}hasEffectsWhenAccessedAtPath(e,t){if(0===e.length)return !1;const s=e[0],i=this.propertyMap;if(e.length>1&&(this.hasUnknownDeoptimizedProperty||"string"!=typeof s||this.deoptimizedPaths.has(s)||!i[s]||null===i[s].exactMatchRead))return !0;const n=e.slice(1);for(const e of "string"!=typeof s?this.properties:i[s]?i[s].propertiesRead:[])if(e.hasEffectsWhenAccessedAtPath(n,t))return !0;return !1}hasEffectsWhenAssignedAtPath(e,t){const s=e[0],i=this.propertyMap;if(e.length>1&&(this.hasUnknownDeoptimizedProperty||this.deoptimizedPaths.has(s)||!i[s]||null===i[s].exactMatchRead))return !0;const n=e.slice(1);for(const r of "string"!=typeof s?this.properties:e.length>1?i[s].propertiesRead:i[s]?i[s].propertiesWrite:[])if(r.hasEffectsWhenAssignedAtPath(n,t))return !0;return !1}hasEffectsWhenCalledAtPath(e,t,s){const i=e[0];if("string"!=typeof i||this.hasUnknownDeoptimizedProperty||this.deoptimizedPaths.has(i)||(this.propertyMap[i]?!this.propertyMap[i].exactMatchRead:e.length>1||!fe[i]))return !0;const n=e.slice(1);if(this.propertyMap[i])for(const e of this.propertyMap[i].propertiesRead)if(e.hasEffectsWhenCalledAtPath(n,t,s))return !0;return !(1!==e.length||!fe[i])&&Ee(fe,i,this.included,t,s)}render(e,t,{renderedParentType:s}=Ae){super.render(e,t),"ExpressionStatement"!==s&&"ArrowFunctionExpression"!==s||(e.appendRight(this.start,"("),e.prependLeft(this.end,")"));}deoptimizeAllProperties(){this.hasUnknownDeoptimizedProperty=!0;for(const e of this.properties)e.deoptimizePath(W);for(const e of this.expressionsToBeDeoptimized.values())for(const t of e)t.deoptimizeCache();}getPropertyMap(){if(null!==this.propertyMap)return this.propertyMap;const e=this.propertyMap=Object.create(null);for(let t=this.properties.length-1;t>=0;t--){const s=this.properties[t];if(s instanceof st){this.unmatchablePropertiesRead.push(s);continue}const i="get"!==s.kind,n="set"!==s.kind;let r;if(s.computed){const e=s.key.getLiteralValueAtPath(F,j,this);if(e===q){n?this.unmatchablePropertiesRead.push(s):this.unmatchablePropertiesWrite.push(s);continue}r=String(e);}else r=s.key instanceof Et?s.key.name:String(s.key.value);const a=e[r];a?(n&&null===a.exactMatchRead&&(a.exactMatchRead=s,a.propertiesRead.push(s,...this.unmatchablePropertiesRead)),i&&!n&&null===a.exactMatchWrite&&(a.exactMatchWrite=s,a.propertiesWrite.push(s,...this.unmatchablePropertiesWrite))):e[r]={exactMatchRead:n?s:null,exactMatchWrite:i?s:null,propertiesRead:n?[s,...this.unmatchablePropertiesRead]:[],propertiesWrite:i&&!n?[s,...this.unmatchablePropertiesWrite]:[]};}return e}},ObjectPattern:class extends Qe{addExportedVariables(e,t){for(const s of this.properties)"Property"===s.type?s.value.addExportedVariables(e,t):s.argument.addExportedVariables(e,t);}declare(e,t){const s=[];for(const i of this.properties)s.push(...i.declare(e,t));return s}deoptimizePath(e){if(0===e.length)for(const t of this.properties)t.deoptimizePath(e);}hasEffectsWhenAssignedAtPath(e,t){if(e.length>0)return !0;for(const e of this.properties)if(e.hasEffectsWhenAssignedAtPath(F,t))return !0;return !1}},PrivateName:class extends Qe{},Program:si,Property:class extends Qe{constructor(){super(...arguments),this.declarationInit=null,this.returnExpression=null;}bind(){super.bind(),"get"===this.kind&&this.getReturnExpression(),null!==this.declarationInit&&this.declarationInit.deoptimizePath([B,B]);}declare(e,t){return this.declarationInit=t,this.value.declare(e,K)}deoptimizeCache(){}deoptimizePath(e){"get"===this.kind?this.getReturnExpression().deoptimizePath(e):this.value.deoptimizePath(e);}getLiteralValueAtPath(e,t,s){return "get"===this.kind?this.getReturnExpression().getLiteralValueAtPath(e,t,s):this.value.getLiteralValueAtPath(e,t,s)}getReturnExpressionWhenCalledAtPath(e,t,s){return "get"===this.kind?this.getReturnExpression().getReturnExpressionWhenCalledAtPath(e,t,s):this.value.getReturnExpressionWhenCalledAtPath(e,t,s)}hasEffects(e){return this.key.hasEffects(e)||this.value.hasEffects(e)}hasEffectsWhenAccessedAtPath(e,t){if("get"===this.kind){const s=t.accessed.getEntities(e);return !s.has(this)&&(s.add(this),this.value.hasEffectsWhenCalledAtPath(F,this.accessorCallOptions,t)||e.length>0&&this.returnExpression.hasEffectsWhenAccessedAtPath(e,t))}return this.value.hasEffectsWhenAccessedAtPath(e,t)}hasEffectsWhenAssignedAtPath(e,t){if("get"===this.kind){const s=t.assigned.getEntities(e);return !s.has(this)&&(s.add(this),this.returnExpression.hasEffectsWhenAssignedAtPath(e,t))}if("set"===this.kind){const s=t.assigned.getEntities(e);return !s.has(this)&&(s.add(this),this.value.hasEffectsWhenCalledAtPath(F,this.accessorCallOptions,t))}return this.value.hasEffectsWhenAssignedAtPath(e,t)}hasEffectsWhenCalledAtPath(e,t,s){if("get"===this.kind){const i=(t.withNew?s.instantiated:s.called).getEntities(e,t);return !i.has(this)&&(i.add(this),this.returnExpression.hasEffectsWhenCalledAtPath(e,t,s))}return this.value.hasEffectsWhenCalledAtPath(e,t,s)}initialise(){this.accessorCallOptions={args:D,withNew:!1};}render(e,t){this.shorthand||this.key.render(e,t),this.value.render(e,t,{isShorthandProperty:this.shorthand});}getReturnExpression(){return null===this.returnExpression?(this.returnExpression=K,this.returnExpression=this.value.getReturnExpressionWhenCalledAtPath(F,j,this)):this.returnExpression}},RestElement:vt,ReturnStatement:class extends Qe{hasEffects(e){return !(e.ignore.returnAwaitYield&&(null===this.argument||!this.argument.hasEffects(e)))||(e.brokenFlow=2,!1)}include(e,t){this.included=!0,this.argument&&this.argument.include(e,t),e.brokenFlow=2;}initialise(){this.scope.addReturnExpression(this.argument||K);}render(e,t){this.argument&&(this.argument.render(e,t,{preventASI:!0}),this.argument.start===this.start+6&&e.prependLeft(this.start+6," "));}},SequenceExpression:class extends Qe{deoptimizePath(e){e.length>0&&this.expressions[this.expressions.length-1].deoptimizePath(e);}getLiteralValueAtPath(e,t,s){return this.expressions[this.expressions.length-1].getLiteralValueAtPath(e,t,s)}hasEffects(e){for(const t of this.expressions)if(t.hasEffects(e))return !0;return !1}hasEffectsWhenAccessedAtPath(e,t){return e.length>0&&this.expressions[this.expressions.length-1].hasEffectsWhenAccessedAtPath(e,t)}hasEffectsWhenAssignedAtPath(e,t){return 0===e.length||this.expressions[this.expressions.length-1].hasEffectsWhenAssignedAtPath(e,t)}hasEffectsWhenCalledAtPath(e,t,s){return this.expressions[this.expressions.length-1].hasEffectsWhenCalledAtPath(e,t,s)}include(e,t){this.included=!0;for(let s=0;s<this.expressions.length-1;s++){const i=this.expressions[s];(t||i.shouldBeIncluded(e))&&i.include(e,t);}this.expressions[this.expressions.length-1].include(e,t);}render(e,t,{renderedParentType:s,isCalleeOfRenderedParent:i,preventASI:n}=Ae){let r=0;for(const{node:a,start:o,end:h}of I(this.expressions,e,this.start,this.end))a.included?(r++,1===r&&n&&$(e,o,a.start),a===this.expressions[this.expressions.length-1]&&1===r?a.render(e,t,{isCalleeOfRenderedParent:s?i:this.parent.callee===this,renderedParentType:s||this.parent.type}):a.render(e,t)):S(a,e,o,h);}},SpreadElement:st,Super:class extends Qe{},SwitchCase:ii,SwitchStatement:class extends Qe{createScope(e){this.scope=new Ns(e);}hasEffects(e){if(this.discriminant.hasEffects(e))return !0;const{brokenFlow:t,ignore:{breaks:s}}=e;let i=1/0;e.ignore.breaks=!0;for(const s of this.cases){if(s.hasEffects(e))return !0;i=e.brokenFlow<i?e.brokenFlow:i,e.brokenFlow=t;}return null!==this.defaultCase&&1!==i&&(e.brokenFlow=i),e.ignore.breaks=s,!1}include(e,t){this.included=!0,this.discriminant.include(e,t);const{brokenFlow:s}=e;let i=1/0,n=t||null!==this.defaultCase&&this.defaultCase<this.cases.length-1;for(let r=this.cases.length-1;r>=0;r--){const a=this.cases[r];if(a.included&&(n=!0),!n){const e=Ge();e.ignore.breaks=!0,n=a.hasEffects(e);}n?(a.include(e,t),i=i<e.brokenFlow?i:e.brokenFlow,e.brokenFlow=s):i=s;}n&&null!==this.defaultCase&&1!==i&&(e.brokenFlow=i);}initialise(){for(let e=0;e<this.cases.length;e++)if(null===this.cases[e].test)return void(this.defaultCase=e);this.defaultCase=null;}render(e,t){this.discriminant.render(e,t),this.cases.length>0&&_(this.cases,e,this.cases[0].start,this.end-1,t);}},TaggedTemplateExpression:class extends Qe{bind(){if(super.bind(),"Identifier"===this.tag.type){const e=this.tag.name;this.scope.findVariable(e).isNamespace&&this.context.warn({code:"CANNOT_CALL_NAMESPACE",message:`Cannot call a namespace ('${e}')`},this.start),"eval"===e&&this.context.warn({code:"EVAL",message:"Use of eval is strongly discouraged, as it poses security risks and may cause issues with minification",url:"https://rollupjs.org/guide/en/#avoiding-eval"},this.start);}}hasEffects(e){return super.hasEffects(e)||this.tag.hasEffectsWhenCalledAtPath(F,this.callOptions,e)}initialise(){this.callOptions={args:D,withNew:!1};}},TemplateElement:class extends Qe{bind(){}hasEffects(){return !1}include(){this.included=!0;}parseNode(e){this.value=e.value,super.parseNode(e);}render(){}},TemplateLiteral:ni,ThisExpression:class extends Qe{bind(){super.bind(),this.variable=this.scope.findVariable("this");}hasEffectsWhenAccessedAtPath(e,t){return e.length>0&&this.variable.hasEffectsWhenAccessedAtPath(e,t)}hasEffectsWhenAssignedAtPath(e,t){return this.variable.hasEffectsWhenAssignedAtPath(e,t)}initialise(){this.alias=this.scope.findLexicalBoundary()instanceof ri?this.context.moduleContext:null,"undefined"===this.alias&&this.context.warn({code:"THIS_IS_UNDEFINED",message:"The 'this' keyword is equivalent to 'undefined' at the top level of an ES module, and has been rewritten",url:"https://rollupjs.org/guide/en/#error-this-is-undefined"},this.start);}render(e){null!==this.alias&&e.overwrite(this.start,this.end,this.alias,{contentOnly:!1,storeName:!0});}},ThrowStatement:class extends Qe{hasEffects(){return !0}include(e,t){this.included=!0,this.argument.include(e,t),e.brokenFlow=2;}render(e,t){this.argument.render(e,t,{preventASI:!0}),this.argument.start===this.start+5&&e.prependLeft(this.start+5," ");}},TryStatement:class extends Qe{constructor(){super(...arguments),this.directlyIncluded=!1,this.includedLabelsAfterBlock=null;}hasEffects(e){return (this.context.options.treeshake.tryCatchDeoptimization?this.block.body.length>0:this.block.hasEffects(e))||null!==this.finalizer&&this.finalizer.hasEffects(e)}include(e,t){var s;const i=null===(s=this.context.options.treeshake)||void 0===s?void 0:s.tryCatchDeoptimization,{brokenFlow:n}=e;if(this.directlyIncluded&&i){if(this.includedLabelsAfterBlock)for(const t of this.includedLabelsAfterBlock)e.includedLabels.add(t);}else this.included=!0,this.directlyIncluded=!0,this.block.include(e,i?"variables":t),e.includedLabels.size>0&&(this.includedLabelsAfterBlock=[...e.includedLabels]),e.brokenFlow=n;null!==this.handler&&(this.handler.include(e,t),e.brokenFlow=n),null!==this.finalizer&&this.finalizer.include(e,t);}},UnaryExpression:class extends Qe{bind(){super.bind(),"delete"===this.operator&&this.argument.deoptimizePath(F);}getLiteralValueAtPath(e,t,s){if(e.length>0)return q;const i=this.argument.getLiteralValueAtPath(F,t,s);return i===q?q:ai[this.operator](i)}hasEffects(e){return !("typeof"===this.operator&&this.argument instanceof Et)&&(this.argument.hasEffects(e)||"delete"===this.operator&&this.argument.hasEffectsWhenAssignedAtPath(F,e))}hasEffectsWhenAccessedAtPath(e){return "void"===this.operator?e.length>0:e.length>1}},UnknownNode:class extends Qe{hasEffects(){return !0}include(e){super.include(e,!0);}},UpdateExpression:class extends Qe{bind(){if(super.bind(),this.argument.deoptimizePath(F),this.argument instanceof Et){this.scope.findVariable(this.argument.name).isReassigned=!0;}}hasEffects(e){return this.argument.hasEffects(e)||this.argument.hasEffectsWhenAssignedAtPath(F,e)}hasEffectsWhenAccessedAtPath(e){return e.length>1}render(e,t){if(this.argument.render(e,t),"system"===t.format){const s=this.argument.variable,i=t.exportNamesByVariable.get(s);if(i&&i.length){const n=t.compact?"":" ",r=s.getName();if(this.prefix)1===i.length?e.overwrite(this.start,this.end,`exports('${i[0]}',${n}${this.operator}${r})`):e.overwrite(this.start,this.end,`(${this.operator}${r},${n}${T([s],t)},${n}${r})`);else if(i.length>1)e.overwrite(this.start,this.end,`${M([s],!1,t)}${this.operator}${r})`);else {let t;switch(this.operator){case"++":t=`${r}${n}+${n}1`;break;case"--":t=`${r}${n}-${n}1`;}e.overwrite(this.start,this.end,`(exports('${i[0]}',${n}${t}),${n}${r}${this.operator})`);}}}}},VariableDeclaration:hi,VariableDeclarator:class extends Qe{declareDeclarator(e){this.id.declare(e,this.init||X);}deoptimizePath(e){this.id.deoptimizePath(e);}},WhileStatement:class extends Qe{hasEffects(e){if(this.test.hasEffects(e))return !0;const{brokenFlow:t,ignore:{breaks:s,continues:i}}=e;return e.ignore.breaks=!0,e.ignore.continues=!0,!!this.body.hasEffects(e)||(e.ignore.breaks=s,e.ignore.continues=i,e.brokenFlow=t,!1)}include(e,t){this.included=!0,this.test.include(e,t);const{brokenFlow:s}=e;this.body.include(e,t),e.brokenFlow=s;}},YieldExpression:class extends Qe{bind(){super.bind(),null!==this.argument&&this.argument.deoptimizePath(W);}hasEffects(e){return !e.ignore.returnAwaitYield||null!==this.argument&&this.argument.hasEffects(e)}render(e,t){this.argument&&(this.argument.render(e,t,{preventASI:!0}),this.argument.start===this.start+5&&e.prependLeft(this.start+5," "));}}};function ci(e){return e.id}function ui(e,t,s){s(e,t);}function di(e,t,s){}var pi={};function fi(e,t,s=e.type){let i=t.commentNodes[t.commentIndex];for(;i&&e.start>=i.end;)mi(e,i),i=t.commentNodes[++t.commentIndex];i&&i.end<=e.end&&pi[s](e,t,fi);}function mi(e,t){e.annotations?e.annotations.push(t):e.annotations=[t],"ExpressionStatement"===e.type&&(e=e.expression),"CallExpression"!==e.type&&"NewExpression"!==e.type||(e.annotatedPure=!0);}pi.Program=pi.BlockStatement=function(e,t,s){for(var i=0,n=e.body;i<n.length;i+=1){s(n[i],t,"Statement");}},pi.Statement=ui,pi.EmptyStatement=di,pi.ExpressionStatement=pi.ParenthesizedExpression=pi.ChainExpression=function(e,t,s){return s(e.expression,t,"Expression")},pi.IfStatement=function(e,t,s){s(e.test,t,"Expression"),s(e.consequent,t,"Statement"),e.alternate&&s(e.alternate,t,"Statement");},pi.LabeledStatement=function(e,t,s){return s(e.body,t,"Statement")},pi.BreakStatement=pi.ContinueStatement=di,pi.WithStatement=function(e,t,s){s(e.object,t,"Expression"),s(e.body,t,"Statement");},pi.SwitchStatement=function(e,t,s){s(e.discriminant,t,"Expression");for(var i=0,n=e.cases;i<n.length;i+=1){var r=n[i];r.test&&s(r.test,t,"Expression");for(var a=0,o=r.consequent;a<o.length;a+=1){s(o[a],t,"Statement");}}},pi.SwitchCase=function(e,t,s){e.test&&s(e.test,t,"Expression");for(var i=0,n=e.consequent;i<n.length;i+=1){s(n[i],t,"Statement");}},pi.ReturnStatement=pi.YieldExpression=pi.AwaitExpression=function(e,t,s){e.argument&&s(e.argument,t,"Expression");},pi.ThrowStatement=pi.SpreadElement=function(e,t,s){return s(e.argument,t,"Expression")},pi.TryStatement=function(e,t,s){s(e.block,t,"Statement"),e.handler&&s(e.handler,t),e.finalizer&&s(e.finalizer,t,"Statement");},pi.CatchClause=function(e,t,s){e.param&&s(e.param,t,"Pattern"),s(e.body,t,"Statement");},pi.WhileStatement=pi.DoWhileStatement=function(e,t,s){s(e.test,t,"Expression"),s(e.body,t,"Statement");},pi.ForStatement=function(e,t,s){e.init&&s(e.init,t,"ForInit"),e.test&&s(e.test,t,"Expression"),e.update&&s(e.update,t,"Expression"),s(e.body,t,"Statement");},pi.ForInStatement=pi.ForOfStatement=function(e,t,s){s(e.left,t,"ForInit"),s(e.right,t,"Expression"),s(e.body,t,"Statement");},pi.ForInit=function(e,t,s){"VariableDeclaration"===e.type?s(e,t):s(e,t,"Expression");},pi.DebuggerStatement=di,pi.FunctionDeclaration=function(e,t,s){return s(e,t,"Function")},pi.VariableDeclaration=function(e,t,s){for(var i=0,n=e.declarations;i<n.length;i+=1){s(n[i],t);}},pi.VariableDeclarator=function(e,t,s){s(e.id,t,"Pattern"),e.init&&s(e.init,t,"Expression");},pi.Function=function(e,t,s){e.id&&s(e.id,t,"Pattern");for(var i=0,n=e.params;i<n.length;i+=1){s(n[i],t,"Pattern");}s(e.body,t,e.expression?"Expression":"Statement");},pi.Pattern=function(e,t,s){"Identifier"===e.type?s(e,t,"VariablePattern"):"MemberExpression"===e.type?s(e,t,"MemberPattern"):s(e,t);},pi.VariablePattern=di,pi.MemberPattern=ui,pi.RestElement=function(e,t,s){return s(e.argument,t,"Pattern")},pi.ArrayPattern=function(e,t,s){for(var i=0,n=e.elements;i<n.length;i+=1){var r=n[i];r&&s(r,t,"Pattern");}},pi.ObjectPattern=function(e,t,s){for(var i=0,n=e.properties;i<n.length;i+=1){var r=n[i];"Property"===r.type?(r.computed&&s(r.key,t,"Expression"),s(r.value,t,"Pattern")):"RestElement"===r.type&&s(r.argument,t,"Pattern");}},pi.Expression=ui,pi.ThisExpression=pi.Super=pi.MetaProperty=di,pi.ArrayExpression=function(e,t,s){for(var i=0,n=e.elements;i<n.length;i+=1){var r=n[i];r&&s(r,t,"Expression");}},pi.ObjectExpression=function(e,t,s){for(var i=0,n=e.properties;i<n.length;i+=1){s(n[i],t);}},pi.FunctionExpression=pi.ArrowFunctionExpression=pi.FunctionDeclaration,pi.SequenceExpression=function(e,t,s){for(var i=0,n=e.expressions;i<n.length;i+=1){s(n[i],t,"Expression");}},pi.TemplateLiteral=function(e,t,s){for(var i=0,n=e.quasis;i<n.length;i+=1){s(n[i],t);}for(var r=0,a=e.expressions;r<a.length;r+=1){s(a[r],t,"Expression");}},pi.TemplateElement=di,pi.UnaryExpression=pi.UpdateExpression=function(e,t,s){s(e.argument,t,"Expression");},pi.BinaryExpression=pi.LogicalExpression=function(e,t,s){s(e.left,t,"Expression"),s(e.right,t,"Expression");},pi.AssignmentExpression=pi.AssignmentPattern=function(e,t,s){s(e.left,t,"Pattern"),s(e.right,t,"Expression");},pi.ConditionalExpression=function(e,t,s){s(e.test,t,"Expression"),s(e.consequent,t,"Expression"),s(e.alternate,t,"Expression");},pi.NewExpression=pi.CallExpression=function(e,t,s){if(s(e.callee,t,"Expression"),e.arguments)for(var i=0,n=e.arguments;i<n.length;i+=1){s(n[i],t,"Expression");}},pi.MemberExpression=function(e,t,s){s(e.object,t,"Expression"),e.computed&&s(e.property,t,"Expression");},pi.ExportNamedDeclaration=pi.ExportDefaultDeclaration=function(e,t,s){e.declaration&&s(e.declaration,t,"ExportNamedDeclaration"===e.type||e.declaration.id?"Statement":"Expression"),e.source&&s(e.source,t,"Expression");},pi.ExportAllDeclaration=function(e,t,s){e.exported&&s(e.exported,t),s(e.source,t,"Expression");},pi.ImportDeclaration=function(e,t,s){for(var i=0,n=e.specifiers;i<n.length;i+=1){s(n[i],t);}s(e.source,t,"Expression");},pi.ImportExpression=function(e,t,s){s(e.source,t,"Expression");},pi.ImportSpecifier=pi.ImportDefaultSpecifier=pi.ImportNamespaceSpecifier=pi.Identifier=pi.Literal=di,pi.TaggedTemplateExpression=function(e,t,s){s(e.tag,t,"Expression"),s(e.quasi,t,"Expression");},pi.ClassDeclaration=pi.ClassExpression=function(e,t,s){return s(e,t,"Class")},pi.Class=function(e,t,s){e.id&&s(e.id,t,"Pattern"),e.superClass&&s(e.superClass,t,"Expression"),s(e.body,t);},pi.ClassBody=function(e,t,s){for(var i=0,n=e.body;i<n.length;i+=1){s(n[i],t);}},pi.MethodDefinition=pi.Property=function(e,t,s){e.computed&&s(e.key,t,"Expression"),s(e.value,t,"Expression");},pi.FieldDefinition=function(e,t,s){e.computed&&s(e.key,t,"Expression"),e.value&&s(e.value,t,"Expression");};const gi=/[@#]__PURE__/,yi=e=>gi.test(e.text);const Ei=new RegExp("^#\\s+sourceMappingURL=.+\\n?"),vi=()=>{};let bi=()=>[0,0],Si=()=>0,Ai=()=>0,Pi={};function Ci(e,t){switch(t){case 1:return `# ${e}`;case 2:return `## ${e}`;case 3:return e;default:return `${"  ".repeat(t-4)}- ${e}`}}function Ni(e,t=3){e=Ci(e,t),Pi.hasOwnProperty(e)||(Pi[e]={memory:0,startMemory:void 0,startTime:void 0,time:0,totalMemory:0});const s=Ai();Pi[e].startTime=bi(),Pi[e].startMemory=s;}function ki(e,t=3){if(e=Ci(e,t),Pi.hasOwnProperty(e)){const t=Ai();Pi[e].time+=Si(Pi[e].startTime),Pi[e].totalMemory=Math.max(Pi[e].totalMemory,t),Pi[e].memory+=t-Pi[e].startMemory;}}function wi(){const e={};for(const t of Object.keys(Pi))e[t]=[Pi[t].time,Pi[t].memory,Pi[t].totalMemory];return e}let _i=vi,Ii=vi;const $i={load:!0,resolveDynamicImport:!0,resolveId:!0,transform:!0};function Ti(e,t){const s={};for(const i of Object.keys(e))if(!0===$i[i]){let n=`plugin ${t}`;e.name&&(n+=` (${e.name})`),n+=` - ${i}`,s[i]=function(){_i(n,4);const t=e[i].apply(this===s?e:this,arguments);return Ii(n,4),t&&"function"==typeof t.then&&(_i(`${n} (async)`,4),t.then((()=>Ii(`${n} (async)`,4)))),t};}else s[i]=e[i];return s}function Mi(e){e.perf?(Pi={},"undefined"!=typeof process&&"function"==typeof process.hrtime?(bi=process.hrtime.bind(process),Si=e=>{return 1e3*(t=process.hrtime(e))[0]+t[1]/1e6;var t;}):"undefined"!=typeof performance&&"function"==typeof performance.now&&(bi=()=>[performance.now(),0],Si=e=>performance.now()-e[0]),"undefined"!=typeof process&&"function"==typeof process.memoryUsage&&(Ai=()=>process.memoryUsage().heapUsed),_i=Ni,Ii=ki,e.plugins=e.plugins.map(Ti)):(_i=vi,Ii=vi);}function Li(e,t,s,i){return t.error({code:"MISSING_EXPORT",message:`'${e}' is not exported by ${es(s)}, imported by ${es(t.id)}`,url:"https://rollupjs.org/guide/en/#error-name-is-not-exported-by-module"},i)}const Ri={identifier:null,localName:"_missingExportShim"};function Oi(e,t,s,i=new Map){const n=i.get(t);if(n){if(n.has(e))return null;n.add(e);}else i.set(t,new Set([e]));return e.getVariableForExportName(t,s,i)}class Di{constructor(e,t,s,i,n,r,a){this.graph=e,this.id=t,this.options=s,this.ast=null,this.chunkFileNames=new Set,this.chunkName=null,this.comments=[],this.dependencies=new Set,this.dynamicDependencies=new Set,this.dynamicImporters=[],this.dynamicImports=[],this.execIndex=1/0,this.exportAllSources=new Set,this.exports=Object.create(null),this.exportsAll=Object.create(null),this.implicitlyLoadedAfter=new Set,this.implicitlyLoadedBefore=new Set,this.importDescriptions=Object.create(null),this.importers=[],this.importMetas=[],this.imports=new Set,this.includedDynamicImporters=[],this.isExecuted=!1,this.isUserDefinedEntryPoint=!1,this.preserveSignature=this.options.preserveEntrySignatures,this.reexportDescriptions=Object.create(null),this.sources=new Set,this.userChunkNames=new Set,this.usesTopLevelAwait=!1,this.allExportNames=null,this.exportAllModules=[],this.exportNamesByVariable=null,this.exportShimVariable=new Nt(this),this.relevantDependencies=null,this.syntheticExports=new Map,this.syntheticNamespace=null,this.transformDependencies=[],this.transitiveReexports=null,this.excludeFromSourcemap=/\0/.test(t),this.context=s.moduleContext(t);const o=this;this.info={ast:null,code:null,get dynamicallyImportedIds(){const e=[];for(const{resolution:t}of o.dynamicImports)(t instanceof Di||t instanceof Ue)&&e.push(t.id);return e},get dynamicImporters(){return o.dynamicImporters.sort()},hasModuleSideEffects:n,id:t,get implicitlyLoadedAfterOneOf(){return Array.from(o.implicitlyLoadedAfter,ci)},get implicitlyLoadedBefore(){return Array.from(o.implicitlyLoadedBefore,ci)},get importedIds(){return Array.from(o.sources,(e=>o.resolvedIds[e].id))},get importers(){return o.importers.sort()},isEntry:i,isExternal:!1,meta:a,syntheticNamedExports:r};}basename(){const e=De(this.id),t=Be(this.id);return $e(t?e.slice(0,-t.length):e)}bindReferences(){this.ast.bind();}error(e,t){return this.addLocationToLogProps(e,t),ss(e)}getAllExportNames(){if(this.allExportNames)return this.allExportNames;const e=this.allExportNames=new Set;for(const t of Object.keys(this.exports))e.add(t);for(const t of Object.keys(this.reexportDescriptions))e.add(t);for(const t of this.exportAllModules)if(t instanceof Ue)e.add(`*${t.id}`);else for(const s of t.getAllExportNames())"default"!==s&&e.add(s);return e}getDependenciesToBeIncluded(){if(this.relevantDependencies)return this.relevantDependencies;const e=new Set,t=new Set,s=new Set(this.dependencies);let i=this.imports;if(this.info.isEntry||this.includedDynamicImporters.length>0||this.namespace.included||this.implicitlyLoadedAfter.size>0){i=new Set(i);for(const e of [...this.getReexports(),...this.getExports()])i.add(this.getVariableForExportName(e));}for(let n of i){if(n instanceof wt)n=n.getBaseVariable();else if(n instanceof Ct){const{modules:e,original:i}=n.getOriginalVariableAndDeclarationModules();n=i;for(const i of e)t.add(i),s.add(i);}e.add(n.module);}if(this.options.treeshake&&"no-treeshake"!==this.info.hasModuleSideEffects){for(const i of s)if((i.info.hasModuleSideEffects||t.has(i))&&!e.has(i))if(i instanceof Ue||i.hasEffects())e.add(i);else for(const e of i.dependencies)s.add(e);}else for(const t of this.dependencies)e.add(t);return this.relevantDependencies=e}getExportNamesByVariable(){if(this.exportNamesByVariable)return this.exportNamesByVariable;const e=new Map;for(const t of this.getAllExportNames()){if(t===this.info.syntheticNamedExports)continue;let s=this.getVariableForExportName(t);if(s instanceof Ct&&(s=s.getOriginalVariable()),!s||!(s.included||s instanceof Se))continue;const i=e.get(s);i?i.push(t):e.set(s,[t]);}return this.exportNamesByVariable=e}getExports(){return Object.keys(this.exports)}getReexports(){if(this.transitiveReexports)return this.transitiveReexports;this.transitiveReexports=[];const e=new Set;for(const t in this.reexportDescriptions)e.add(t);for(const t of this.exportAllModules)if(t instanceof Ue)e.add(`*${t.id}`);else for(const s of [...t.getReexports(),...t.getExports()])"default"!==s&&e.add(s);return this.transitiveReexports=[...e]}getRenderedExports(){const e=[],t=[];for(const s in this.exports){const i=this.getVariableForExportName(s);(i&&i.included?e:t).push(s);}return {renderedExports:e,removedExports:t}}getSyntheticNamespace(){return null===this.syntheticNamespace&&(this.syntheticNamespace=void 0,this.syntheticNamespace=this.getVariableForExportName("string"==typeof this.info.syntheticNamedExports?this.info.syntheticNamedExports:"default")),this.syntheticNamespace?this.syntheticNamespace:ss({code:ns.SYNTHETIC_NAMED_EXPORTS_NEED_NAMESPACE_EXPORT,id:this.id,message:`Module "${es(this.id)}" that is marked with 'syntheticNamedExports: ${JSON.stringify(this.info.syntheticNamedExports)}' needs ${"string"==typeof this.info.syntheticNamedExports&&"default"!==this.info.syntheticNamedExports?`an export named "${this.info.syntheticNamedExports}"`:"a default export"}.`})}getVariableForExportName(e,t,s){if("*"===e[0]){if(1===e.length)return this.namespace;return this.graph.modulesById.get(e.slice(1)).getVariableForExportName("*")}const i=this.reexportDescriptions[e];if(i){const e=Oi(i.module,i.localName,!1,s);return e||Li(i.localName,this,i.module.id,i.start)}const n=this.exports[e];if(n){if(n===Ri)return this.exportShimVariable;const e=n.localName;return this.traceVariable(e)}if("default"!==e)for(const t of this.exportAllModules){const i=Oi(t,e,!0,s);if(i)return i}if(!t){if(this.info.syntheticNamedExports){let t=this.syntheticExports.get(e);if(!t){const s=this.getSyntheticNamespace();return t=new wt(this.astContext,e,s),this.syntheticExports.set(e,t),t}return t}if(this.options.shimMissingExports)return this.shimMissingExport(e),this.exportShimVariable}return null}hasEffects(){return "no-treeshake"===this.info.hasModuleSideEffects||this.ast.included&&this.ast.hasEffects(Ge())}include(){const e=je();this.ast.shouldBeIncluded(e)&&this.ast.include(e,!1);}includeAllExports(e){this.isExecuted||(this.graph.needsTreeshakingPass=!0,ze(this));for(const t of this.getExports())if(e||t!==this.info.syntheticNamedExports){const e=this.getVariableForExportName(t);e.deoptimizePath(W),e.included||(e.include(),this.graph.needsTreeshakingPass=!0);}for(const e of this.getReexports()){const t=this.getVariableForExportName(e);t.deoptimizePath(W),t.included||(t.include(),this.graph.needsTreeshakingPass=!0),t instanceof Se&&(t.module.reexported=!0);}e&&this.namespace.prepareNamespace(this.includeAndGetAdditionalMergedNamespaces());}includeAllInBundle(){this.ast.include(je(),!0);}isIncluded(){return this.ast.included||this.namespace.included}linkImports(){this.addModulesToImportDescriptions(this.importDescriptions),this.addModulesToImportDescriptions(this.reexportDescriptions);for(const e in this.exports)"default"!==e&&(this.exportsAll[e]=this.id);const e=[];for(const t of this.exportAllSources){const s=this.graph.modulesById.get(this.resolvedIds[t].id);if(s instanceof Ue)e.push(s);else {this.exportAllModules.push(s);for(const e in s.exportsAll)e in this.exportsAll?this.options.onwarn(os(e,this,s)):this.exportsAll[e]=s.exportsAll[e];}}this.exportAllModules.push(...e);}render(e){const t=this.magicString.clone();return this.ast.render(t,e),this.usesTopLevelAwait=this.astContext.usesTopLevelAwait,t}setSource({alwaysRemovedCode:e,ast:t,code:s,customTransformCache:i,originalCode:n,originalSourcemap:r,resolvedIds:a,sourcemapChain:o,transformDependencies:h,transformFiles:l,...c}){if(this.info.code=s,this.originalCode=n,this.originalSourcemap=r,this.sourcemapChain=o,l&&(this.transformFiles=l),this.transformDependencies=h,this.customTransformCache=i,this.updateOptions(c),_i("generate ast",3),this.alwaysRemovedCode=e||[],!t){t=function(e,t,s){try{return t.parse(e.info.code,{...s,onComment:(t,s,i,n)=>e.comments.push({block:t,text:s,start:i,end:n})})}catch(t){let s=t.message.replace(/ \(\d+:\d+\)$/,"");return e.id.endsWith(".json")?s+=" (Note that you need @rollup/plugin-json to import JSON files)":e.id.endsWith(".js")||(s+=" (Note that you need plugins to import files that are not JavaScript)"),e.error({code:"PARSE_ERROR",message:s,parserError:t},t.pos)}}(this,this.graph.acornParser,this.options.acorn);for(const e of this.comments)!e.block&&Ei.test(e.text)&&this.alwaysRemovedCode.push([e.start,e.end]);u=this.comments,fi(t,{commentIndex:0,commentNodes:u.filter(yi)});}var u;Ii("generate ast",3),this.resolvedIds=a||Object.create(null);const d=this.id;this.magicString=new x(s,{filename:this.excludeFromSourcemap?null:d,indentExclusionRanges:[]});for(const[e,t]of this.alwaysRemovedCode)this.magicString.remove(e,t);_i("analyse ast",3),this.astContext={addDynamicImport:this.addDynamicImport.bind(this),addExport:this.addExport.bind(this),addImport:this.addImport.bind(this),addImportMeta:this.addImportMeta.bind(this),code:s,deoptimizationTracker:this.graph.deoptimizationTracker,error:this.error.bind(this),fileName:d,getExports:this.getExports.bind(this),getModuleExecIndex:()=>this.execIndex,getModuleName:this.basename.bind(this),getReexports:this.getReexports.bind(this),importDescriptions:this.importDescriptions,includeAllExports:()=>this.includeAllExports(!0),includeDynamicImport:this.includeDynamicImport.bind(this),includeVariable:this.includeVariable.bind(this),magicString:this.magicString,module:this,moduleContext:this.context,nodeConstructors:li,options:this.options,traceExport:this.getVariableForExportName.bind(this),traceVariable:this.traceVariable.bind(this),usesTopLevelAwait:!1,warn:this.warn.bind(this)},this.scope=new ri(this.graph.scope,this.astContext),this.namespace=new kt(this.astContext,this.info.syntheticNamedExports),this.ast=new si(t,{type:"Module",context:this.astContext},this.scope),this.info.ast=t,Ii("analyse ast",3);}toJSON(){return {alwaysRemovedCode:this.alwaysRemovedCode,ast:this.ast.esTreeNode,code:this.info.code,customTransformCache:this.customTransformCache,dependencies:Array.from(this.dependencies,ci),id:this.id,meta:this.info.meta,moduleSideEffects:this.info.hasModuleSideEffects,originalCode:this.originalCode,originalSourcemap:this.originalSourcemap,resolvedIds:this.resolvedIds,sourcemapChain:this.sourcemapChain,syntheticNamedExports:this.info.syntheticNamedExports,transformDependencies:this.transformDependencies,transformFiles:this.transformFiles}}traceVariable(e){const t=this.scope.variables.get(e);if(t)return t;if(e in this.importDescriptions){const t=this.importDescriptions[e],s=t.module;if(s instanceof Di&&"*"===t.name)return s.namespace;const i=s.getVariableForExportName(t.name);return i||Li(t.name,this,s.id,t.start)}return null}updateOptions({meta:e,moduleSideEffects:t,syntheticNamedExports:s}){null!=t&&(this.info.hasModuleSideEffects=t),null!=s&&(this.info.syntheticNamedExports=s),null!=e&&(this.info.meta={...this.info.meta,...e});}warn(e,t){this.addLocationToLogProps(e,t),this.options.onwarn(e);}addDynamicImport(e){let t=e.source;t instanceof ni?1===t.quasis.length&&t.quasis[0].value.cooked&&(t=t.quasis[0].value.cooked):t instanceof $s&&"string"==typeof t.value&&(t=t.value),this.dynamicImports.push({node:e,resolution:null,argument:t});}addExport(e){if(e instanceof At)this.exports.default={identifier:e.variable.getAssignedVariableName(),localName:"default"};else if(e instanceof Cs){const t=e.source.value;if(this.sources.add(t),e.exported){const s=e.exported.name;this.reexportDescriptions[s]={localName:"*",module:null,source:t,start:e.start};}else this.exportAllSources.add(t);}else if(e.source instanceof $s){const t=e.source.value;this.sources.add(t);for(const s of e.specifiers){const e=s.exported.name;this.reexportDescriptions[e]={localName:s.local.name,module:null,source:t,start:s.start};}}else if(e.declaration){const t=e.declaration;if(t instanceof hi)for(const e of t.declarations)for(const t of Ps(e.id))this.exports[t]={identifier:null,localName:t};else {const e=t.id.name;this.exports[e]={identifier:null,localName:e};}}else for(const t of e.specifiers){const e=t.local.name,s=t.exported.name;this.exports[s]={identifier:null,localName:e};}}addImport(e){const t=e.source.value;this.sources.add(t);for(const s of e.specifiers){const e="ImportDefaultSpecifier"===s.type,i="ImportNamespaceSpecifier"===s.type,n=e?"default":i?"*":s.imported.name;this.importDescriptions[s.local.name]={module:null,name:n,source:t,start:s.start};}}addImportMeta(e){this.importMetas.push(e);}addLocationToLogProps(e,t){e.id=this.id,e.pos=t;let s=this.info.code,{column:i,line:n}=Xe(s,t,{offsetLine:1});try{({column:i,line:n}=function(e,t){const s=e.filter((e=>e.mappings));for(;s.length>0;){const e=s.pop(),i=e.mappings[t.line-1];let n=!1;if(void 0!==i)for(const s of i)if(s[0]>=t.column){if(1===s.length)break;t={column:s[3],line:s[2]+1,name:5===s.length?e.names[s[4]]:void 0,source:e.sources[s[1]]},n=!0;break}if(!n)throw new Error("Can't resolve original location of error.")}return t}(this.sourcemapChain,{column:i,line:n})),s=this.originalCode;}catch(e){this.options.onwarn({code:"SOURCEMAP_ERROR",id:this.id,loc:{column:i,file:this.id,line:n},message:`Error when using sourcemap for reporting an error: ${e.message}`,pos:t});}is(e,{column:i,line:n},s,this.id);}addModulesToImportDescriptions(e){for(const t of Object.keys(e)){const s=e[t],i=this.resolvedIds[s.source].id;s.module=this.graph.modulesById.get(i);}}includeAndGetAdditionalMergedNamespaces(){const e=[];for(const t of this.exportAllModules)if(t instanceof Ue){const s=t.getVariableForExportName("*");s.include(),this.imports.add(s),e.push(s);}else if(t.info.syntheticNamedExports){const s=t.getSyntheticNamespace();s.include(),this.imports.add(s),e.push(s);}return e}includeDynamicImport(e){const t=this.dynamicImports.find((t=>t.node===e)).resolution;t instanceof Di&&(t.includedDynamicImporters.push(this),t.includeAllExports(!0));}includeVariable(e){const t=e.module;e.included||(e.include(),this.graph.needsTreeshakingPass=!0),t&&t!==this&&this.imports.add(e);}shimMissingExport(e){this.options.onwarn({code:"SHIMMED_EXPORT",exporter:es(this.id),exportName:e,message:`Missing export "${e}" has been shimmed in module ${es(this.id)}.`}),this.exports[e]=Ri;}}class Vi{constructor(e,t){this.isOriginal=!0,this.filename=e,this.content=t;}traceSegment(e,t,s){return {line:e,column:t,name:s,source:this}}}class Bi{constructor(e,t){this.sources=t,this.names=e.names,this.mappings=e.mappings;}traceMappings(){const e=[],t=[],s=[],i=[];for(const n of this.mappings){const r=[];for(const i of n){if(1==i.length)continue;const n=this.sources[i[1]];if(!n)continue;const a=n.traceSegment(i[2],i[3],5===i.length?this.names[i[4]]:"");if(a){let n=e.lastIndexOf(a.source.filename);if(-1===n)n=e.length,e.push(a.source.filename),t[n]=a.source.content;else if(null==t[n])t[n]=a.source.content;else if(null!=a.source.content&&t[n]!==a.source.content)return ss({message:`Multiple conflicting contents for sourcemap source ${a.source.filename}`});const o=[i[0],n,a.line,a.column];if(a.name){let e=s.indexOf(a.name);-1===e&&(e=s.length,s.push(a.name)),o[4]=e;}r.push(o);}}i.push(r);}return {sources:e,sourcesContent:t,names:s,mappings:i}}traceSegment(e,t,s){const i=this.mappings[e];if(!i)return null;let n=0,r=i.length-1;for(;n<=r;){const e=n+r>>1,a=i[e];if(a[0]===t){if(1==a.length)return null;const e=this.sources[a[1]];return e?e.traceSegment(a[2],a[3],5===a.length?this.names[a[4]]:s):null}a[0]>t?r=e-1:n=e+1;}return null}}function Fi(e){return function(t,s){return s.mappings?new Bi(s,[t]):(e({code:"SOURCEMAP_BROKEN",message:`Sourcemap is likely to be incorrect: a plugin (${s.plugin}) was used to transform files, but didn't generate a sourcemap for the transformation. Consult the plugin documentation for help`,plugin:s.plugin,url:"https://rollupjs.org/guide/en/#warning-sourcemap-is-likely-to-be-incorrect"}),new Bi({mappings:[],names:[]},[t]))}}function Wi(e,t,s,i,n){let r;if(s){const t=s.sources,i=s.sourcesContent||[],n=Ve(e)||".",a=s.sourceRoot||".",o=t.map(((e,t)=>new Vi(We(n,a,e),i[t])));r=new Bi(s,o);}else r=new Vi(e,t);return i.reduce(n,r)}var Ui,zi=ji;function ji(e,t){if(!e)throw new Error(t||"Assertion failed")}function Gi(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(s){var i=Object.getOwnPropertyDescriptor(e,s);Object.defineProperty(t,s,i.get?i:{enumerable:!0,get:function(){return e[s]}});})),t}function Hi(e,t){return 55296==(64512&e.charCodeAt(t))&&(!(t<0||t+1>=e.length)&&56320==(64512&e.charCodeAt(t+1)))}function qi(e){return (e>>>24|e>>>8&65280|e<<8&16711680|(255&e)<<24)>>>0}function Ki(e){return 1===e.length?"0"+e:e}function Xi(e){return 7===e.length?"0"+e:6===e.length?"00"+e:5===e.length?"000"+e:4===e.length?"0000"+e:3===e.length?"00000"+e:2===e.length?"000000"+e:1===e.length?"0000000"+e:e}ji.equal=function(e,t,s){if(e!=t)throw new Error(s||"Assertion failed: "+e+" != "+t)};var Yi={inherits:(function(e){"function"==typeof Object.create?e.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}));}:e.exports=function(e,t){if(t){e.super_=t;var s=function(){};s.prototype=t.prototype,e.prototype=new s,e.prototype.constructor=e;}};}(Ui={exports:{}},Ui.exports),Ui.exports),toArray:function(e,t){if(Array.isArray(e))return e.slice();if(!e)return [];var s=[];if("string"==typeof e)if(t){if("hex"===t)for((e=e.replace(/[^a-z0-9]+/gi,"")).length%2!=0&&(e="0"+e),n=0;n<e.length;n+=2)s.push(parseInt(e[n]+e[n+1],16));}else for(var i=0,n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?s[i++]=r:r<2048?(s[i++]=r>>6|192,s[i++]=63&r|128):Hi(e,n)?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++n)),s[i++]=r>>18|240,s[i++]=r>>12&63|128,s[i++]=r>>6&63|128,s[i++]=63&r|128):(s[i++]=r>>12|224,s[i++]=r>>6&63|128,s[i++]=63&r|128);}else for(n=0;n<e.length;n++)s[n]=0|e[n];return s},toHex:function(e){for(var t="",s=0;s<e.length;s++)t+=Ki(e[s].toString(16));return t},htonl:qi,toHex32:function(e,t){for(var s="",i=0;i<e.length;i++){var n=e[i];"little"===t&&(n=qi(n)),s+=Xi(n.toString(16));}return s},zero2:Ki,zero8:Xi,join32:function(e,t,s,i){var n=s-t;zi(n%4==0);for(var r=new Array(n/4),a=0,o=t;a<r.length;a++,o+=4){var h;h="big"===i?e[o]<<24|e[o+1]<<16|e[o+2]<<8|e[o+3]:e[o+3]<<24|e[o+2]<<16|e[o+1]<<8|e[o],r[a]=h>>>0;}return r},split32:function(e,t){for(var s=new Array(4*e.length),i=0,n=0;i<e.length;i++,n+=4){var r=e[i];"big"===t?(s[n]=r>>>24,s[n+1]=r>>>16&255,s[n+2]=r>>>8&255,s[n+3]=255&r):(s[n+3]=r>>>24,s[n+2]=r>>>16&255,s[n+1]=r>>>8&255,s[n]=255&r);}return s},rotr32:function(e,t){return e>>>t|e<<32-t},rotl32:function(e,t){return e<<t|e>>>32-t},sum32:function(e,t){return e+t>>>0},sum32_3:function(e,t,s){return e+t+s>>>0},sum32_4:function(e,t,s,i){return e+t+s+i>>>0},sum32_5:function(e,t,s,i,n){return e+t+s+i+n>>>0},sum64:function(e,t,s,i){var n=e[t],r=i+e[t+1]>>>0,a=(r<i?1:0)+s+n;e[t]=a>>>0,e[t+1]=r;},sum64_hi:function(e,t,s,i){return (t+i>>>0<t?1:0)+e+s>>>0},sum64_lo:function(e,t,s,i){return t+i>>>0},sum64_4_hi:function(e,t,s,i,n,r,a,o){var h=0,l=t;return h+=(l=l+i>>>0)<t?1:0,h+=(l=l+r>>>0)<r?1:0,e+s+n+a+(h+=(l=l+o>>>0)<o?1:0)>>>0},sum64_4_lo:function(e,t,s,i,n,r,a,o){return t+i+r+o>>>0},sum64_5_hi:function(e,t,s,i,n,r,a,o,h,l){var c=0,u=t;return c+=(u=u+i>>>0)<t?1:0,c+=(u=u+r>>>0)<r?1:0,c+=(u=u+o>>>0)<o?1:0,e+s+n+a+h+(c+=(u=u+l>>>0)<l?1:0)>>>0},sum64_5_lo:function(e,t,s,i,n,r,a,o,h,l){return t+i+r+o+l>>>0},rotr64_hi:function(e,t,s){return (t<<32-s|e>>>s)>>>0},rotr64_lo:function(e,t,s){return (e<<32-s|t>>>s)>>>0},shr64_hi:function(e,t,s){return e>>>s},shr64_lo:function(e,t,s){return (e<<32-s|t>>>s)>>>0}};function Qi(){this.pending=null,this.pendingTotal=0,this.blockSize=this.constructor.blockSize,this.outSize=this.constructor.outSize,this.hmacStrength=this.constructor.hmacStrength,this.padLength=this.constructor.padLength/8,this.endian="big",this._delta8=this.blockSize/8,this._delta32=this.blockSize/32;}var Ji=Qi;Qi.prototype.update=function(e,t){if(e=Yi.toArray(e,t),this.pending?this.pending=this.pending.concat(e):this.pending=e,this.pendingTotal+=e.length,this.pending.length>=this._delta8){var s=(e=this.pending).length%this._delta8;this.pending=e.slice(e.length-s,e.length),0===this.pending.length&&(this.pending=null),e=Yi.join32(e,0,e.length-s,this.endian);for(var i=0;i<e.length;i+=this._delta32)this._update(e,i,i+this._delta32);}return this},Qi.prototype.digest=function(e){return this.update(this._pad()),zi(null===this.pending),this._digest(e)},Qi.prototype._pad=function(){var e=this.pendingTotal,t=this._delta8,s=t-(e+this.padLength)%t,i=new Array(s+this.padLength);i[0]=128;for(var n=1;n<s;n++)i[n]=0;if(e<<=3,"big"===this.endian){for(var r=8;r<this.padLength;r++)i[n++]=0;i[n++]=0,i[n++]=0,i[n++]=0,i[n++]=0,i[n++]=e>>>24&255,i[n++]=e>>>16&255,i[n++]=e>>>8&255,i[n++]=255&e;}else for(i[n++]=255&e,i[n++]=e>>>8&255,i[n++]=e>>>16&255,i[n++]=e>>>24&255,i[n++]=0,i[n++]=0,i[n++]=0,i[n++]=0,r=8;r<this.padLength;r++)i[n++]=0;return i};var Zi={BlockHash:Ji},en=Yi.rotr32;function tn(e,t,s){return e&t^~e&s}function sn(e,t,s){return e&t^e&s^t&s}function nn(e,t,s){return e^t^s}var rn={ft_1:function(e,t,s,i){return 0===e?tn(t,s,i):1===e||3===e?nn(t,s,i):2===e?sn(t,s,i):void 0},ch32:tn,maj32:sn,p32:nn,s0_256:function(e){return en(e,2)^en(e,13)^en(e,22)},s1_256:function(e){return en(e,6)^en(e,11)^en(e,25)},g0_256:function(e){return en(e,7)^en(e,18)^e>>>3},g1_256:function(e){return en(e,17)^en(e,19)^e>>>10}},an=Yi.sum32,on=Yi.sum32_4,hn=Yi.sum32_5,ln=rn.ch32,cn=rn.maj32,un=rn.s0_256,dn=rn.s1_256,pn=rn.g0_256,fn=rn.g1_256,mn=Zi.BlockHash,gn=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function yn(){if(!(this instanceof yn))return new yn;mn.call(this),this.h=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],this.k=gn,this.W=new Array(64);}Yi.inherits(yn,mn);var xn=yn;yn.blockSize=512,yn.outSize=256,yn.hmacStrength=192,yn.padLength=64,yn.prototype._update=function(e,t){for(var s=this.W,i=0;i<16;i++)s[i]=e[t+i];for(;i<s.length;i++)s[i]=on(fn(s[i-2]),s[i-7],pn(s[i-15]),s[i-16]);var n=this.h[0],r=this.h[1],a=this.h[2],o=this.h[3],h=this.h[4],l=this.h[5],c=this.h[6],u=this.h[7];for(zi(this.k.length===s.length),i=0;i<s.length;i++){var d=hn(u,dn(h),ln(h,l,c),this.k[i],s[i]),p=an(un(n),cn(n,r,a));u=c,c=l,l=h,h=an(o,d),o=a,a=r,r=n,n=an(d,p);}this.h[0]=an(this.h[0],n),this.h[1]=an(this.h[1],r),this.h[2]=an(this.h[2],a),this.h[3]=an(this.h[3],o),this.h[4]=an(this.h[4],h),this.h[5]=an(this.h[5],l),this.h[6]=an(this.h[6],c),this.h[7]=an(this.h[7],u);},yn.prototype._digest=function(e){return "hex"===e?Yi.toHex32(this.h,"big"):Yi.split32(this.h,"big")};const En=()=>xn(),vn={amd:An,cjs:An,es:Sn,iife:An,system:Sn,umd:An};function bn(e,t,s,i,n,r,a,o,h,l,c,u,d){for(const t of e)t.scope.addUsedOutsideNames(i,n,c,u);!function(e,t,s){for(const i of t){for(const t of i.scope.variables.values())t.included&&!(t.renderBaseName||t instanceof Ct&&t.getOriginalVariable()!==t)&&t.setRenderNames(null,O(t.name,e));if(s.has(i)){const t=i.namespace;t.setRenderNames(null,O(t.name,e));}}}(i,e,d),vn[n](i,s,t,r,a,o,h,l);for(const t of e)t.scope.deconflict(n,c,u);}function Sn(e,t,s,i,n,r,a,o){for(const t of s.dependencies)(n||t instanceof Ue)&&(t.variableName=O(t.suggestedVariableName,e));for(const s of t){const t=s.module,i=s.name;s.isNamespace&&(n||t instanceof Ue)?s.setRenderNames(null,(t instanceof Ue?t:a.get(t)).variableName):t instanceof Ue&&"default"===i?s.setRenderNames(null,O([...t.exportedVariables].some((([e,t])=>"*"===t&&e.included))?t.suggestedVariableName+"__default":t.suggestedVariableName,e)):s.setRenderNames(null,O(i,e));}for(const t of o)t.setRenderNames(null,O(t.name,e));}function An(e,t,{deconflictedDefault:s,deconflictedNamespace:i,dependencies:n},r,a,o,h){for(const t of n)t.variableName=O(t.suggestedVariableName,e);for(const t of i)t.namespaceVariableName=O(`${t.suggestedVariableName}__namespace`,e);for(const t of s)i.has(t)&&Rt(String(r(t.id)),o)?t.defaultVariableName=t.namespaceVariableName:t.defaultVariableName=O(`${t.suggestedVariableName}__default`,e);for(const e of t){const t=e.module;if(t instanceof Ue){const s=e.name;if("default"===s){const s=String(r(t.id)),i=Tt[s]?t.defaultVariableName:t.variableName;Mt(s,o)?e.setRenderNames(i,"default"):e.setRenderNames(null,i);}else "*"===s?e.setRenderNames(null,Lt[String(r(t.id))]?t.namespaceVariableName:t.variableName):e.setRenderNames(t.variableName,null);}else {const s=h.get(t);a&&e.isNamespace?e.setRenderNames(null,"default"===s.exportMode?s.namespaceVariableName:s.variableName):"default"===s.exportMode?e.setRenderNames(null,s.variableName):e.setRenderNames(s.variableName,s.getVariableExportName(e));}}}const Pn=/[\\'\r\n\u2028\u2029]/,Cn=/(['\r\n\u2028\u2029])/g,Nn=/\\/g;function kn(e){return e.match(Pn)?e.replace(Nn,"\\\\").replace(Cn,"\\$1"):e}const wn=(e,t)=>e.execIndex>t.execIndex?1:-1;function _n(e){e.sort(wn);}function In(e,t,s){const i=[es(e.id)];let n=t;for(;n!==e;)i.push(es(n.id)),n=s.get(n);return i.push(i[0]),i.reverse(),i}function $n(e,{exports:t,name:s,format:i},n,r,a){const o=e.getExportNames();if("default"===t){if(1!==o.length||"default"!==o[0])return ss(rs("default",o,r))}else if("none"===t&&o.length)return ss(rs("none",o,r));return "auto"===t&&(0===o.length?t="none":1===o.length&&"default"===o[0]?("cjs"===i&&n.has("exports")&&a(function(e){const t=es(e);return {code:ns.PREFER_NAMED_EXPORTS,id:e,message:`Entry module "${t}" is implicitly using "default" export mode, which means for CommonJS output that its default export is assigned to "module.exports". For many tools, such CommonJS output will not be interchangeable with the original ES module. If this is intended, explicitly set "output.exports" to either "auto" or "default", otherwise you might want to consider changing the signature of "${t}" to use named exports only.`,url:"https://rollupjs.org/guide/en/#outputexports"}}(r)),t="default"):("es"!==i&&-1!==o.indexOf("default")&&a(function(e,t){return {code:ns.MIXED_EXPORTS,id:e,message:`Entry module "${es(e)}" is using named and default exports together. Consumers of your bundle will have to use \`${t||"chunk"}["default"]\` to access the default export, which may not be what you want. Use \`output.exports: "named"\` to disable this warning`,url:"https://rollupjs.org/guide/en/#outputexports"}}(r,s)),t="named")),t}function Tn(e){const t=e.split("\n"),s=t.filter((e=>/^\t+/.test(e))),i=t.filter((e=>/^ {2,}/.test(e)));if(0===s.length&&0===i.length)return null;if(s.length>=i.length)return "\t";const n=i.reduce(((e,t)=>{const s=/^ +/.exec(t)[0].length;return Math.min(s,e)}),1/0);return new Array(n+1).join(" ")}function Mn(e){if(!e)return null;if("string"==typeof e&&(e=JSON.parse(e)),""===e.mappings)return {mappings:[],names:[],sources:[],version:3};let s;return s="string"==typeof e.mappings?function(e){for(var s=[],i=[],r=[0,0,0,0,0],a=0,o=0,h=0,l=0;o<e.length;o++){var c=e.charCodeAt(o);if(44===c)n(i,r,a),a=0;else if(59===c)n(i,r,a),a=0,s.push(i),i=[],r[0]=0;else {var u=t[c];if(void 0===u)throw new Error("Invalid character ("+String.fromCharCode(c)+")");var d=32&u;if(l+=(u&=31)<<h,d)h+=5;else {var p=1&l;l>>>=1,p&&(l=0===l?-2147483648:-l),r[a]+=l,a++,l=h=0;}}}return n(i,r,a),s.push(i),s}(e.mappings):e.mappings,{...e,mappings:s}}function Ln(e,t,s){return ts(e)?e.replace(/\[(\w+)\]/g,((e,i)=>{if(!s.hasOwnProperty(i))return ss(cs(`"[${i}]" is not a valid placeholder in "${t}" pattern.`));const n=s[i]();return ts(n)?n:ss(cs(`Invalid substitution "${n}" for placeholder "[${i}]" in "${t}" pattern, can be neither absolute nor relative path.`))})):ss(cs(`Invalid pattern "${e}" for "${t}", patterns can be neither absolute nor relative paths and must not contain invalid characters.`))}function Rn(e,t){const s=new Set(Object.keys(t).map((e=>e.toLowerCase())));if(!s.has(e.toLocaleLowerCase()))return e;const i=Be(e);e=e.substr(0,e.length-i.length);let n,r=1;for(;s.has((n=e+ ++r+i).toLowerCase()););return n}const On=[".js",".jsx",".ts",".tsx"];function Dn(e,t,s,i){const n="function"==typeof t?t(e.id):t[e.id];return n||(s?(i({code:"MISSING_GLOBAL_NAME",guess:e.variableName,message:`No name was provided for external module '${e.id}' in output.globals – guessing '${e.variableName}'`,source:e.id}),e.variableName):void 0)}class Vn{constructor(e,t,s,i,n,r,a,o,h,l){this.orderedModules=e,this.inputOptions=t,this.outputOptions=s,this.unsetOptions=i,this.pluginDriver=n,this.modulesById=r,this.chunkByModule=a,this.facadeChunkByModule=o,this.includedNamespaces=h,this.manualChunkAlias=l,this.entryModules=[],this.exportMode="named",this.facadeModule=null,this.id=null,this.namespaceVariableName="",this.variableName="",this.accessedGlobalsByScope=new Map,this.dependencies=new Set,this.dynamicDependencies=new Set,this.dynamicEntryModules=[],this.exportNamesByVariable=new Map,this.exports=new Set,this.exportsByName=Object.create(null),this.fileName=null,this.implicitEntryModules=[],this.implicitlyLoadedBefore=new Set,this.imports=new Set,this.indentString=void 0,this.isEmpty=!0,this.name=null,this.needsExportsShim=!1,this.renderedDependencies=null,this.renderedExports=null,this.renderedHash=void 0,this.renderedModules=Object.create(null),this.renderedModuleSources=new Map,this.renderedSource=null,this.sortedExportNames=null,this.strictFacade=!1,this.usedModules=void 0,this.execIndex=e.length>0?e[0].execIndex:1/0;const c=new Set(e);for(const t of e){t.namespace.included&&h.add(t),this.isEmpty&&t.isIncluded()&&(this.isEmpty=!1),(t.info.isEntry||s.preserveModules)&&this.entryModules.push(t);for(const e of t.includedDynamicImporters)c.has(e)||(this.dynamicEntryModules.push(t),t.info.syntheticNamedExports&&!s.preserveModules&&(h.add(t),this.exports.add(t.namespace)));t.implicitlyLoadedAfter.size>0&&this.implicitEntryModules.push(t);}this.suggestedVariableName=$e(this.generateVariableName());}static generateFacade(e,t,s,i,n,r,a,o,h,l){const c=new Vn([],e,t,s,i,n,r,a,o,null);c.assignFacadeName(l,h),a.has(h)||a.set(h,c);for(const e of h.getDependenciesToBeIncluded())c.dependencies.add(e instanceof Di?r.get(e):e);return !c.dependencies.has(r.get(h))&&h.info.hasModuleSideEffects&&h.hasEffects()&&c.dependencies.add(r.get(h)),c.ensureReexportsAreAvailableForModule(h),c.facadeModule=h,c.strictFacade=!0,c}canModuleBeFacade(e,t){const s=e.getExportNamesByVariable();for(const t of this.exports)if(!s.has(t))return 0===s.size&&e.isUserDefinedEntryPoint&&"strict"===e.preserveSignature&&this.unsetOptions.has("preserveEntrySignatures")&&this.inputOptions.onwarn({code:"EMPTY_FACADE",id:e.id,message:`To preserve the export signature of the entry module "${es(e.id)}", an empty facade chunk was created. This often happens when creating a bundle for a web app where chunks are placed in script tags and exports are ignored. In this case it is recommended to set "preserveEntrySignatures: false" to avoid this and reduce the number of chunks. Otherwise if this is intentional, set "preserveEntrySignatures: 'strict'" explicitly to silence this warning.`,url:"https://rollupjs.org/guide/en/#preserveentrysignatures"}),!1;for(const i of t)if(!s.has(i)&&i.module!==e)return !1;return !0}generateExports(){this.sortedExportNames=null;const e=new Set(this.exports);if(null!==this.facadeModule&&(!1!==this.facadeModule.preserveSignature||this.strictFacade)){const t=this.facadeModule.getExportNamesByVariable();for(const[s,i]of t){this.exportNamesByVariable.set(s,[...i]);for(const e of i)this.exportsByName[e]=s;e.delete(s);}}this.outputOptions.minifyInternalExports?function(e,t,s){let i=0;for(const n of e){let e=n.name[0];if(t[e])do{e=L(++i),49===e.charCodeAt(0)&&(i+=9*64**(e.length-1),e=L(i));}while(R[e]||t[e]);t[e]=n,s.set(n,[e]);}}(e,this.exportsByName,this.exportNamesByVariable):function(e,t,s){for(const i of e){let e=0,n=i.name;for(;t[n];)n=i.name+"$"+ ++e;t[n]=i,s.set(i,[n]);}}(e,this.exportsByName,this.exportNamesByVariable),(this.outputOptions.preserveModules||this.facadeModule&&this.facadeModule.info.isEntry)&&(this.exportMode=$n(this,this.outputOptions,this.unsetOptions,this.facadeModule.id,this.inputOptions.onwarn));}generateFacades(){var e;const t=[],s=new Set([...this.entryModules,...this.implicitEntryModules]),i=new Set(this.dynamicEntryModules.map((e=>e.namespace)));for(const e of s)if(e.preserveSignature)for(const t of e.getExportNamesByVariable().keys())i.add(t);for(const e of s){const s=Array.from(e.userChunkNames,(e=>({name:e})));if(0===s.length&&e.isUserDefinedEntryPoint&&s.push({}),s.push(...Array.from(e.chunkFileNames,(e=>({fileName:e})))),0===s.length&&s.push({}),!this.facadeModule){const t="strict"===e.preserveSignature||"exports-only"===e.preserveSignature&&0!==e.getExportNamesByVariable().size;(!t||this.outputOptions.preserveModules||this.canModuleBeFacade(e,i))&&(this.facadeModule=e,this.facadeChunkByModule.set(e,this),e.preserveSignature&&(this.strictFacade=t,this.ensureReexportsAreAvailableForModule(e)),this.assignFacadeName(s.shift(),e));}for(const i of s)t.push(Vn.generateFacade(this.inputOptions,this.outputOptions,this.unsetOptions,this.pluginDriver,this.modulesById,this.chunkByModule,this.facadeChunkByModule,this.includedNamespaces,e,i));}for(const t of this.dynamicEntryModules)t.info.syntheticNamedExports||(!this.facadeModule&&this.canModuleBeFacade(t,i)?(this.facadeModule=t,this.facadeChunkByModule.set(t,this),this.strictFacade=!0,this.assignFacadeName({},t)):this.facadeModule===t&&!this.strictFacade&&this.canModuleBeFacade(t,i)?this.strictFacade=!0:(null===(e=this.facadeChunkByModule.get(t))||void 0===e?void 0:e.strictFacade)||(this.includedNamespaces.add(t),this.exports.add(t.namespace)));return t}generateId(e,t,s,i){if(null!==this.fileName)return this.fileName;const[n,r]=this.facadeModule&&this.facadeModule.isUserDefinedEntryPoint?[t.entryFileNames,"output.entryFileNames"]:[t.chunkFileNames,"output.chunkFileNames"];return Rn(Ln("function"==typeof n?n(this.getChunkInfo()):n,r,{format:()=>t.format,hash:()=>i?this.computeContentHashWithDependencies(e,t,s):"[hash]",name:()=>this.getChunkName()}),s)}generateIdPreserveModules(e,t,s,i){const n=this.orderedModules[0].id,r=Jt(n);let a;if(Le(n)){const s=Be(n),o=i.has("entryFileNames")?On.includes(s)?"[name].js":"[name][extname].js":t.entryFileNames,h=`${Ve(r)}/${Ln("function"==typeof o?o(this.getChunkInfo()):o,"output.entryFileNames",{ext:()=>s.substr(1),extname:()=>s,format:()=>t.format,name:()=>this.getChunkName()})}`,{preserveModulesRoot:l}=t;a=l&&h.startsWith(l)?h.slice(l.length).replace(/^[\\/]/,""):b(e,h);}else a=`_virtual/${De(r)}`;return Rn(Oe(a),s)}getChunkInfo(){const e=this.facadeModule,t=this.getChunkName.bind(this);return {exports:this.getExportNames(),facadeModuleId:e&&e.id,isDynamicEntry:this.dynamicEntryModules.length>0,isEntry:null!==e&&e.info.isEntry,isImplicitEntry:this.implicitEntryModules.length>0,modules:this.renderedModules,get name(){return t()},type:"chunk"}}getChunkInfoWithFileNames(){return Object.assign(this.getChunkInfo(),{code:void 0,dynamicImports:Array.from(this.dynamicDependencies,ci),fileName:this.id,implicitlyLoadedBefore:Array.from(this.implicitlyLoadedBefore,ci),importedBindings:this.getImportedBindingsPerDependency(),imports:Array.from(this.dependencies,ci),map:void 0,referencedFiles:this.getReferencedFiles()})}getChunkName(){return this.name||(this.name=Jt(this.getFallbackChunkName()))}getExportNames(){return this.sortedExportNames||(this.sortedExportNames=Object.keys(this.exportsByName).sort())}getRenderedHash(){if(this.renderedHash)return this.renderedHash;const e=En(),t=this.pluginDriver.hookReduceValueSync("augmentChunkHash","",[this.getChunkInfo()],((e,t)=>(t&&(e+=t),e)));return e.update(t),e.update(this.renderedSource.toString()),e.update(this.getExportNames().map((e=>{const t=this.exportsByName[e];return `${es(t.module.id).replace(/\\/g,"/")}:${t.name}:${e}`})).join(",")),this.renderedHash=e.digest("hex")}getVariableExportName(e){return this.outputOptions.preserveModules&&e instanceof kt?"*":this.exportNamesByVariable.get(e)[0]}link(){for(const e of this.orderedModules)this.addDependenciesToChunk(e.getDependenciesToBeIncluded(),this.dependencies),this.addDependenciesToChunk(e.dynamicDependencies,this.dynamicDependencies),this.addDependenciesToChunk(e.implicitlyLoadedBefore,this.implicitlyLoadedBefore),this.setUpChunkImportsAndExportsForModule(e);}preRender(e,t){const s=new v({separator:e.compact?"":"\n\n"});this.usedModules=[],this.indentString=function(e,t){if(!0!==t.indent)return t.indent;for(let t=0;t<e.length;t++){const s=Tn(e[t].originalCode);if(null!==s)return s}return "\t"}(this.orderedModules,e);const i=e.compact?"":"\n",n=e.compact?"":" ",r={compact:e.compact,dynamicImportFunction:e.dynamicImportFunction,exportNamesByVariable:this.exportNamesByVariable,format:e.format,freeze:e.freeze,indent:this.indentString,namespaceToStringTag:e.namespaceToStringTag,outputPluginDriver:this.pluginDriver,varOrConst:e.preferConst?"const":"var"};if(e.hoistTransitiveImports&&!this.outputOptions.preserveModules&&null!==this.facadeModule)for(const e of this.dependencies)e instanceof Vn&&this.inlineChunkDependencies(e);const a=[...this.dependencies];_n(a),this.dependencies=new Set(a),this.prepareDynamicImportsAndImportMetas(),this.setIdentifierRenderResolutions(e);let o="";const h=this.renderedModules;for(const t of this.orderedModules){let n=0;if(t.isIncluded()||this.includedNamespaces.has(t)){const a=t.render(r).trim();n=a.length(),n&&(e.compact&&-1!==a.lastLine().indexOf("//")&&a.append("\n"),this.renderedModuleSources.set(t,a),s.addSource(a),this.usedModules.push(t));const h=t.namespace;if(this.includedNamespaces.has(t)&&!this.outputOptions.preserveModules){const e=h.renderBlock(r);h.renderFirst()?o+=i+e:s.addSource(new x(e));}}const{renderedExports:a,removedExports:l}=t.getRenderedExports();h[t.id]={originalLength:t.originalCode.length,removedExports:l,renderedExports:a,renderedLength:n};}if(o&&s.prepend(o+i+i),this.needsExportsShim&&s.prepend(`${i}${r.varOrConst} _missingExportShim${n}=${n}void 0;${i}${i}`),e.compact?this.renderedSource=s:this.renderedSource=s.trim(),this.renderedHash=void 0,this.isEmpty&&0===this.getExportNames().length&&0===this.dependencies.size){const e=this.getChunkName();this.inputOptions.onwarn({chunkName:e,code:"EMPTY_BUNDLE",message:`Generated an empty chunk: "${e}"`});}this.setExternalRenderPaths(e,t),this.renderedDependencies=this.getChunkDependencyDeclarations(e),this.renderedExports="none"===this.exportMode?[]:this.getChunkExportDeclarations(e.format);}async render(e,t,s){_i("render format",2);const i=e.format,n=Ss[i];e.dynamicImportFunction&&"es"!==i&&this.inputOptions.onwarn({code:"INVALID_OPTION",message:'"output.dynamicImportFunction" is ignored for formats other than "es".'});for(const e of this.dependencies){const t=this.renderedDependencies.get(e);if(e instanceof Ue){const s=e.renderPath;t.id=kn(e.renormalizeRenderPath?this.getRelativePath(s,!1):s);}else t.namedExportsMode="default"!==e.exportMode,t.id=kn(this.getRelativePath(e.id,!1));}this.finaliseDynamicImports(e),this.finaliseImportMetas(i);const r=0!==this.renderedExports.length||[...this.renderedDependencies.values()].some((e=>e.reexports&&0!==e.reexports.length));let a=!1;const o=new Set;for(const e of this.orderedModules){e.usesTopLevelAwait&&(a=!0);const t=this.accessedGlobalsByScope.get(e.scope);if(t)for(const e of t)o.add(e);}if(a&&"es"!==i&&"system"!==i)return ss({code:"INVALID_TLA_FORMAT",message:`Module format ${i} does not support top-level await. Use the "es" or "system" output formats rather.`});if(!this.id)throw new Error("Internal Error: expecting chunk id");const h=n(this.renderedSource,{accessedGlobals:o,dependencies:[...this.renderedDependencies.values()],exports:this.renderedExports,hasExports:r,id:this.id,indentString:this.indentString,intro:t.intro,isEntryFacade:this.outputOptions.preserveModules||null!==this.facadeModule&&this.facadeModule.info.isEntry,isModuleFacade:null!==this.facadeModule,namedExportsMode:"default"!==this.exportMode,outro:t.outro,usesTopLevelAwait:a,varOrConst:e.preferConst?"const":"var",warn:this.inputOptions.onwarn},e);t.banner&&h.prepend(t.banner),t.footer&&h.append(t.footer);const c=h.toString();Ii("render format",2);let u=null;const d=[];let p=await function({code:e,options:t,outputPluginDriver:s,renderChunk:i,sourcemapChain:n}){return s.hookReduceArg0("renderChunk",[e,i,t],((e,t,s)=>{if(null==t)return e;if("string"==typeof t&&(t={code:t,map:void 0}),null!==t.map){const e=Mn(t.map);n.push(e||{missing:!0,plugin:s.name});}return t.code}))}({code:c,options:e,outputPluginDriver:this.pluginDriver,renderChunk:s,sourcemapChain:d});if(e.sourcemap){let t;_i("sourcemap",2),t=e.file?We(e.sourcemapFile||e.file):e.dir?We(e.dir,this.id):We(this.id);const s=h.generateDecodedMap({});u=function(e,t,s,i,n,r){const a=Fi(r),o=s.filter((e=>!e.excludeFromSourcemap)).map((e=>Wi(e.id,e.originalCode,e.originalSourcemap,e.sourcemapChain,a)));let h=new Bi(t,o);h=i.reduce(a,h);let{sources:c,sourcesContent:u,names:d,mappings:p}=h.traceMappings();if(e){const t=Ve(e);c=c.map((e=>Fe(t,e))),e=De(e);}return u=n?null:u,new l({file:e,sources:c,sourcesContent:u,names:d,mappings:p})}(t,s,this.usedModules,d,e.sourcemapExcludeSources,this.inputOptions.onwarn),u.sources=u.sources.map((s=>{const{sourcemapPathTransform:i}=e;if(i){const e=i(s,`${t}.map`);return "string"!=typeof e&&ss(cs("sourcemapPathTransform function must return a string.")),e}return s})).map(Oe),Ii("sourcemap",2);}return e.compact||"\n"===p[p.length-1]||(p+="\n"),{code:p,map:u}}addDependenciesToChunk(e,t){for(const s of e)if(s instanceof Di){const e=this.chunkByModule.get(s);e&&e!==this&&t.add(e);}else t.add(s);}assignFacadeName({fileName:e,name:t},s){e?this.fileName=e:this.name=Jt(t||s.chunkName||Zt(s.id));}computeContentHashWithDependencies(e,t,s){const i=En();i.update([e.intro,e.outro,e.banner,e.footer].map((e=>e||"")).join(":")),i.update(t.format);const n=new Set([this]);for(const r of n)if(r instanceof Ue?i.update(":"+r.renderPath):(i.update(r.getRenderedHash()),i.update(r.generateId(e,t,s,!1))),!(r instanceof Ue))for(const e of [...r.dependencies,...r.dynamicDependencies])n.add(e);return i.digest("hex").substr(0,8)}ensureReexportsAreAvailableForModule(e){const t=e.getExportNamesByVariable();for(const e of t.keys()){const t=e instanceof wt,s=t?e.getBaseVariable():e;if(!(s instanceof kt&&this.outputOptions.preserveModules)){const e=s.module;if(e instanceof Di){const i=this.chunkByModule.get(e);i&&i!==this&&(i.exports.add(s),t&&this.imports.add(s));}}}}finaliseDynamicImports(e){const t="amd"===e.format;for(const[s,i]of this.renderedModuleSources)for(const{node:n,resolution:r}of s.dynamicImports){const s=this.chunkByModule.get(r),a=this.facadeChunkByModule.get(r);if(!r||!n.included||s===this)continue;const o=r instanceof Di?`'${this.getRelativePath((a||s).id,t)}'`:r instanceof Ue?`'${r.renormalizeRenderPath?this.getRelativePath(r.renderPath,t):r.renderPath}'`:r;n.renderFinalResolution(i,o,r instanceof Di&&!(null==a?void 0:a.strictFacade)&&s.exportNamesByVariable.get(r.namespace)[0],e);}}finaliseImportMetas(e){for(const[t,s]of this.renderedModuleSources)for(const i of t.importMetas)i.renderFinalMechanism(s,this.id,e,this.pluginDriver);}generateVariableName(){if(this.manualChunkAlias)return this.manualChunkAlias;const e=this.entryModules[0]||this.implicitEntryModules[0]||this.dynamicEntryModules[0]||this.orderedModules[this.orderedModules.length-1];return e?e.chunkName||Zt(e.id):"chunk"}getChunkDependencyDeclarations(e){const t=this.getImportSpecifiers(),s=this.getReexportSpecifiers(),i=new Map;for(const n of this.dependencies){const r=t.get(n)||null,a=s.get(n)||null,o=n instanceof Ue||"default"!==n.exportMode;i.set(n,{defaultVariableName:n.defaultVariableName,globalName:n instanceof Ue&&("umd"===e.format||"iife"===e.format)&&Dn(n,e.globals,null!==(r||a),this.inputOptions.onwarn),id:void 0,imports:r,isChunk:n instanceof Vn,name:n.variableName,namedExportsMode:o,namespaceVariableName:n.namespaceVariableName,reexports:a});}return i}getChunkExportDeclarations(e){const t=[];for(const s of this.getExportNames()){if("*"===s[0])continue;const i=this.exportsByName[s];if(!(i instanceof wt)){const e=i.module;if(e&&this.chunkByModule.get(e)!==this)continue}let n=null,r=!1,a=!1,o=i.getName();if(i instanceof He){i.init===X&&(a=!0);for(const e of i.declarations)if(e.parent instanceof St||e instanceof At&&e.declaration instanceof St){r=!0;break}}else i instanceof wt&&(n=o,"es"===e&&"default"!==s&&(o=i.renderName));t.push({exported:s,expression:n,hoisted:r,local:o,uninitialized:a});}return t}getDependenciesToBeDeconflicted(e,t,s){const i=new Set,n=new Set,r=new Set;for(const t of [...this.exportNamesByVariable.keys(),...this.imports])if(e||t.isNamespace){const a=t.module;if(a instanceof Ue)i.add(a),e&&("default"===t.name?Tt[String(s(a.id))]&&n.add(a):"*"===t.name&&Lt[String(s(a.id))]&&r.add(a));else {const s=this.chunkByModule.get(a);s!==this&&(i.add(s),e&&"default"===s.exportMode&&t.isNamespace&&r.add(s));}}if(t)for(const e of this.dependencies)i.add(e);return {deconflictedDefault:n,deconflictedNamespace:r,dependencies:i}}getFallbackChunkName(){return this.manualChunkAlias?this.manualChunkAlias:this.fileName?Zt(this.fileName):Zt(this.orderedModules[this.orderedModules.length-1].id)}getImportedBindingsPerDependency(){const e={};for(const[t,s]of this.renderedDependencies){const i=new Set;if(s.imports)for(const{imported:e}of s.imports)i.add(e);if(s.reexports)for(const{imported:e}of s.reexports)i.add(e);e[t.id]=[...i];}return e}getImportSpecifiers(){const{interop:e}=this.outputOptions,t=new Map;for(const s of this.imports){const i=s.module;let n,r;if(i instanceof Ue){if(n=i,r=s.name,"default"!==r&&"*"!==r&&"defaultOnly"===e(i.id))return ss(hs(i.id,r,!1))}else n=this.chunkByModule.get(i),r=n.getVariableExportName(s);V(t,n,(()=>[])).push({imported:r,local:s.getName()});}return t}getReexportSpecifiers(){const{externalLiveBindings:e,interop:t}=this.outputOptions,s=new Map;for(let i of this.getExportNames()){let n,r,a=!1;if("*"===i[0]){const s=i.substr(1);"defaultOnly"===t(s)&&this.inputOptions.onwarn(ls(s)),a=e,n=this.modulesById.get(s),r=i="*";}else {const s=this.exportsByName[i];if(s instanceof wt)continue;const o=s.module;if(o instanceof Di){if(n=this.chunkByModule.get(o),n===this)continue;r=n.getVariableExportName(s),a=s.isReassigned;}else {if(n=o,r=s.name,"default"!==r&&"*"!==r&&"defaultOnly"===t(o.id))return ss(hs(o.id,r,!0));a=e&&("default"!==r||Mt(String(t(o.id)),!0));}}V(s,n,(()=>[])).push({imported:r,needsLiveBinding:a,reexported:i});}return s}getReferencedFiles(){const e=[];for(const t of this.orderedModules)for(const s of t.importMetas){const t=s.getReferencedFileName(this.pluginDriver);t&&e.push(t);}return e}getRelativePath(e,t){let s=Oe(b(Ve(this.id),e));return t&&s.endsWith(".js")&&(s=s.slice(0,-3)),".."===s?"../../"+De(e):""===s?"../"+De(e):s.startsWith("../")?s:"./"+s}inlineChunkDependencies(e){for(const t of e.dependencies)this.dependencies.has(t)||(this.dependencies.add(t),t instanceof Vn&&this.inlineChunkDependencies(t));}prepareDynamicImportsAndImportMetas(){var e;const t=this.accessedGlobalsByScope;for(const s of this.orderedModules){for(const{node:i,resolution:n}of s.dynamicImports)if(i.included)if(n instanceof Di){const s=this.chunkByModule.get(n);s===this?i.setInternalResolution(n.namespace):i.setExternalResolution((null===(e=this.facadeChunkByModule.get(n))||void 0===e?void 0:e.exportMode)||s.exportMode,n,this.outputOptions,this.pluginDriver,t);}else i.setExternalResolution("external",n,this.outputOptions,this.pluginDriver,t);for(const e of s.importMetas)e.addAccessedGlobals(this.outputOptions.format,t);}}setExternalRenderPaths(e,t){for(const s of [...this.dependencies,...this.dynamicDependencies])s instanceof Ue&&s.setRenderPath(e,t);}setIdentifierRenderResolutions({format:e,interop:t}){const s=new Set;for(const t of this.getExportNames()){const i=this.exportsByName[t];i instanceof Nt&&(this.needsExportsShim=!0),"es"!==e&&"system"!==e&&i.isReassigned&&!i.isId?i.setRenderNames("exports",t):i instanceof wt?s.add(i):i.setRenderNames(null,null);}const i=new Set;switch(this.needsExportsShim&&i.add("_missingExportShim"),e){case"system":i.add("module").add("exports");break;case"es":break;case"cjs":i.add("module").add("require").add("__filename").add("__dirname");default:i.add("exports");for(const e of zt)i.add(e);}bn(this.orderedModules,this.getDependenciesToBeDeconflicted("es"!==e&&"system"!==e,"amd"===e||"umd"===e||"iife"===e,t),this.imports,i,e,t,this.outputOptions.preserveModules,this.outputOptions.externalLiveBindings,this.chunkByModule,s,this.exportNamesByVariable,this.accessedGlobalsByScope,this.includedNamespaces);}setUpChunkImportsAndExportsForModule(e){const t=new Set(e.imports);if(!this.outputOptions.preserveModules&&this.includedNamespaces.has(e)){const s=e.namespace.getMemberVariables();for(const e of Object.keys(s))t.add(s[e]);}for(let e of t){e instanceof Ct&&(e=e.getOriginalVariable()),e instanceof wt&&(e=e.getBaseVariable());const t=this.chunkByModule.get(e.module);t!==this&&(this.imports.add(e),!(e instanceof kt&&this.outputOptions.preserveModules)&&e.module instanceof Di&&t.exports.add(e));}(this.includedNamespaces.has(e)||e.info.isEntry&&!1!==e.preserveSignature||e.includedDynamicImporters.some((e=>this.chunkByModule.get(e)!==this)))&&this.ensureReexportsAreAvailableForModule(e);for(const{node:t,resolution:s}of e.dynamicImports)t.included&&s instanceof Di&&this.chunkByModule.get(s)===this&&!this.includedNamespaces.has(s)&&(this.includedNamespaces.add(s),this.ensureReexportsAreAvailableForModule(s));}}const Bn=(e,t)=>t?`${e}\n${t}`:e,Fn=(e,t)=>t?`${e}\n\n${t}`:e;function Wn(e,t){const s=[],i=new Set(t.keys()),n=Object.create(null);for(const[e,s]of t){Un(e,n[s]=n[s]||[],i);}for(const[e,t]of Object.entries(n))s.push({alias:e,modules:t});const r=new Map,{dependentEntryPointsByModule:a,dynamicEntryModules:o}=function(e){const t=new Set,s=new Map,i=new Set(e);for(const e of i){const n=new Set([e]);for(const r of n){V(s,r,(()=>new Set)).add(e);for(const e of r.getDependenciesToBeIncluded())e instanceof Ue||n.add(e);for(const{resolution:e}of r.dynamicImports)e instanceof Di&&e.includedDynamicImporters.length>0&&(t.add(e),i.add(e));for(const e of r.implicitlyLoadedBefore)t.add(e),i.add(e);}}return {dependentEntryPointsByModule:s,dynamicEntryModules:t}}(e),h=function(e,t){const s=new Map;for(const i of t){const t=V(s,i,(()=>new Set));for(const s of [...i.includedDynamicImporters,...i.implicitlyLoadedAfter])for(const i of e.get(s))t.add(i);}return s}(a,o),l=new Set(e);function c(e,t){const s=new Set([e]);for(const n of s){const o=V(r,n,(()=>new Set));if(!t||!u(t,a.get(n))){o.add(e);for(const e of n.getDependenciesToBeIncluded())e instanceof Ue||i.has(e)||s.add(e);}}}function u(e,t){const s=new Set(e);for(const e of s)if(!t.has(e)){if(l.has(e))return !1;const t=h.get(e);for(const e of t)s.add(e);}return !0}for(const t of e)i.has(t)||c(t,null);for(const e of o)i.has(e)||c(e,h.get(e));return s.push(...function(e,t){const s=Object.create(null);for(const[i,n]of t){let t="";for(const s of e)t+=n.has(s)?"X":"_";const r=s[t];r?r.push(i):s[t]=[i];}return Object.keys(s).map((e=>({alias:null,modules:s[e]})))}([...e,...o],r)),s}function Un(e,t,s){const i=new Set([e]);for(const e of i){s.add(e),t.push(e);for(const t of e.dependencies)t instanceof Ue||s.has(t)||i.add(t);}}var zn;function jn(e,t,s){e in t&&s(function(e){return {code:ns.FILE_NAME_CONFLICT,message:`The emitted file "${e}" overwrites a previously emitted file of the same name.`}}(e)),t[e]=Gn;}!function(e){e[e.LOAD_AND_PARSE=0]="LOAD_AND_PARSE",e[e.ANALYSE=1]="ANALYSE",e[e.GENERATE=2]="GENERATE";}(zn||(zn={}));const Gn={type:"placeholder"};function Hn(e,t,s){if(!("string"==typeof e||e instanceof Uint8Array)){const e=t.fileName||t.name||s;return ss(cs(`Could not set source for ${"string"==typeof e?`asset "${e}"`:"unnamed asset"}, asset source needs to be a string, Uint8Array or Buffer.`))}return e}function qn(e,t){return "string"!=typeof e.fileName?ss((s=e.name||t,{code:ns.ASSET_NOT_FINALISED,message:`Plugin error - Unable to get file name for asset "${s}". Ensure that the source is set and that generate is called first.`})):e.fileName;var s;}function Kn(e,t){var s;const i=e.fileName||e.module&&(null===(s=null==t?void 0:t.get(e.module))||void 0===s?void 0:s.id);return i||ss((n=e.fileName||e.name,{code:ns.CHUNK_NOT_GENERATED,message:`Plugin error - Unable to get file name for chunk "${n}". Ensure that generate is called first.`}));var n;}class Xn{constructor(e,t,s){this.graph=e,this.options=t,this.facadeChunkByModule=null,this.output=null,this.assertAssetsFinalized=()=>{for(const[t,s]of this.filesByReferenceId.entries())if("asset"===s.type&&"string"!=typeof s.fileName)return ss((e=s.name||t,{code:ns.ASSET_SOURCE_MISSING,message:`Plugin error creating asset "${e}" - no asset source set.`}));var e;},this.emitFile=e=>function(e){return Boolean(e&&("asset"===e.type||"chunk"===e.type))}(e)?function(e){const t=e.fileName||e.name;return !t||"string"==typeof t&&ts(t)}(e)?"chunk"===e.type?this.emitChunk(e):this.emitAsset(e):ss(cs(`The "fileName" or "name" properties of emitted files must be strings that are neither absolute nor relative paths and do not contain invalid characters, received "${e.fileName||e.name}".`)):ss(cs(`Emitted files must be of type "asset" or "chunk", received "${e&&e.type}".`)),this.getFileName=e=>{const t=this.filesByReferenceId.get(e);return t?"chunk"===t.type?Kn(t,this.facadeChunkByModule):qn(t,e):ss((s=e,{code:ns.FILE_NOT_FOUND,message:`Plugin error - Unable to get file name for unknown file "${s}".`}));var s;},this.setAssetSource=(e,t)=>{const s=this.filesByReferenceId.get(e);if(!s)return ss((i=e,{code:ns.ASSET_NOT_FOUND,message:`Plugin error - Unable to set the source for unknown asset "${i}".`}));var i,n;if("asset"!==s.type)return ss(cs(`Asset sources can only be set for emitted assets but "${e}" is an emitted chunk.`));if(void 0!==s.source)return ss((n=s.name||e,{code:ns.ASSET_SOURCE_ALREADY_SET,message:`Unable to set the source for asset "${n}", source already set.`}));const r=Hn(t,s,e);this.output?this.finalizeAsset(s,r,e,this.output):s.source=r;},this.setOutputBundle=(e,t,s)=>{this.output={assetFileNames:t,bundle:e},this.facadeChunkByModule=s;for(const e of this.filesByReferenceId.values())e.fileName&&jn(e.fileName,this.output.bundle,this.options.onwarn);for(const[e,t]of this.filesByReferenceId.entries())"asset"===t.type&&void 0!==t.source&&this.finalizeAsset(t,t.source,e,this.output);},this.filesByReferenceId=s?new Map(s.filesByReferenceId):new Map;}assignReferenceId(e,t){let s;do{const e=En();s?e.update(s):e.update(t),s=e.digest("hex").substr(0,8);}while(this.filesByReferenceId.has(s));return this.filesByReferenceId.set(s,e),s}emitAsset(e){const t=void 0!==e.source?Hn(e.source,e,null):void 0,s={fileName:e.fileName,name:e.name,source:t,type:"asset"},i=this.assignReferenceId(s,e.fileName||e.name||e.type);return this.output&&(e.fileName&&jn(e.fileName,this.output.bundle,this.options.onwarn),void 0!==t&&this.finalizeAsset(s,t,i,this.output)),i}emitChunk(e){if(this.graph.phase>zn.LOAD_AND_PARSE)return ss({code:ns.INVALID_ROLLUP_PHASE,message:"Cannot emit chunks after module loading has finished."});if("string"!=typeof e.id)return ss(cs(`Emitted chunks need to have a valid string id, received "${e.id}"`));const t={fileName:e.fileName,module:null,name:e.name||e.id,type:"chunk"};return this.graph.moduleLoader.emitChunk(e).then((e=>t.module=e)).catch((()=>{})),this.assignReferenceId(t,e.id)}finalizeAsset(e,t,s,i){const n=e.fileName||function(e,t){for(const s of Object.keys(e)){const i=e[s];if("asset"===i.type&&Yn(t,i.source))return s}return null}(i.bundle,t)||function(e,t,s){const i=e||"asset";return Rn(Ln("function"==typeof s.assetFileNames?s.assetFileNames({name:e,source:t,type:"asset"}):s.assetFileNames,"output.assetFileNames",{hash(){const e=En();return e.update(i),e.update(":"),e.update(t),e.digest("hex").substr(0,8)},ext:()=>Be(i).substr(1),extname:()=>Be(i),name:()=>i.substr(0,i.length-Be(i).length)}),s.bundle)}(e.name,t,i),r={...e,source:t,fileName:n};this.filesByReferenceId.set(s,r);const a=this.options;i.bundle[n]={fileName:n,name:e.name,get isAsset(){return us('Accessing "isAsset" on files in the bundle is deprecated, please use "type === \'asset\'" instead',!0,a),!0},source:t,type:"asset"};}}function Yn(e,t){if("string"==typeof e)return e===t;if("string"==typeof t)return !1;if("equals"in e)return e.equals(t);if(e.length!==t.length)return !1;for(let s=0;s<e.length;s++)if(e[s]!==t[s])return !1;return !0}class Qn{constructor(e,t,s,i,n){this.outputOptions=e,this.unsetOptions=t,this.inputOptions=s,this.pluginDriver=i,this.graph=n,this.facadeChunkByModule=new Map,this.includedNamespaces=new Set;}async generate(e){_i("GENERATE",1);const t=Object.create(null);this.pluginDriver.setOutputBundle(t,this.outputOptions.assetFileNames,this.facadeChunkByModule);try{await this.pluginDriver.hookParallel("renderStart",[this.outputOptions,this.inputOptions]),_i("generate chunks",2);const e=await this.generateChunks();e.length>1&&function(e,t){if("umd"===e.format||"iife"===e.format)return ss({code:"INVALID_OPTION",message:"UMD and IIFE output formats are not supported for code-splitting builds."});if("string"==typeof e.file)return ss({code:"INVALID_OPTION",message:'When building multiple chunks, the "output.dir" option must be used, not "output.file". To inline dynamic imports, set the "inlineDynamicImports" option.'});if(e.sourcemapFile)return ss({code:"INVALID_OPTION",message:'"output.sourcemapFile" is only supported for single-file builds.'});!e.amd.autoId&&e.amd.id&&t({code:"INVALID_OPTION",message:'"output.amd.id" is only properly supported for single-file builds. Use "output.amd.autoId" and "output.amd.basePath".'});}(this.outputOptions,this.inputOptions.onwarn);const s=function(e){if(0===e.length)return "/";if(1===e.length)return Ve(e[0]);const t=e.slice(1).reduce(((e,t)=>{const s=t.split(/\/+|\\+/);let i;for(i=0;e[i]===s[i]&&i<Math.min(e.length,s.length);i++);return e.slice(0,i)}),e[0].split(/\/+|\\+/));return t.length>1?t.join("/"):"/"}(function(e){const t=[];for(const s of e)for(const e of s.entryModules)Le(e.id)&&t.push(e.id);return t}(e));Ii("generate chunks",2),_i("render modules",2);const i=await async function(e,t){try{let[s,i,n,r]=await Promise.all([t.hookReduceValue("banner",e.banner(),[],Bn),t.hookReduceValue("footer",e.footer(),[],Bn),t.hookReduceValue("intro",e.intro(),[],Fn),t.hookReduceValue("outro",e.outro(),[],Fn)]);return n&&(n+="\n\n"),r&&(r=`\n\n${r}`),s.length&&(s+="\n"),i.length&&(i="\n"+i),{intro:n,outro:r,banner:s,footer:i}}catch(e){return ss({code:"ADDON_ERROR",message:`Could not retrieve ${e.hook}. Check configuration of plugin ${e.plugin}.\n\tError Message: ${e.message}`})}}(this.outputOptions,this.pluginDriver);this.prerenderChunks(e,s),Ii("render modules",2),await this.addFinalizedChunksToBundle(e,s,i,t);}catch(e){throw await this.pluginDriver.hookParallel("renderError",[e]),e}return await this.pluginDriver.hookSeq("generateBundle",[this.outputOptions,t,e]),this.finaliseAssets(t),Ii("GENERATE",1),t}async addFinalizedChunksToBundle(e,t,s,i){this.assignChunkIds(e,t,s,i);for(const t of e)i[t.id]=t.getChunkInfoWithFileNames();await Promise.all(e.map((async e=>{const t=i[e.id];Object.assign(t,await e.render(this.outputOptions,s,t));})));}async addManualChunks(e){const t=new Map,s=await Promise.all(Object.keys(e).map((async t=>({alias:t,entries:await this.graph.moduleLoader.addAdditionalModules(e[t])}))));for(const{alias:e,entries:i}of s)for(const s of i)Zn(e,s,t);return t}assignChunkIds(e,t,s,i){const n=[],r=[];for(const t of e)(t.facadeModule&&t.facadeModule.isUserDefinedEntryPoint?n:r).push(t);const a=n.concat(r);for(const e of a)this.outputOptions.file?e.id=De(this.outputOptions.file):this.outputOptions.preserveModules?e.id=e.generateIdPreserveModules(t,this.outputOptions,i,this.unsetOptions):e.id=e.generateId(s,this.outputOptions,i,!0),i[e.id]=Gn;}assignManualChunks(e){const t=new Map,s={getModuleIds:()=>this.graph.modulesById.keys(),getModuleInfo:this.graph.getModuleInfo};for(const i of this.graph.modulesById.values())if(i instanceof Di){const n=e(i.id,s);"string"==typeof n&&Zn(n,i,t);}return t}finaliseAssets(e){for(const t of Object.keys(e)){const s=e[t];s.type||(us('A plugin is directly adding properties to the bundle object in the "generateBundle" hook. This is deprecated and will be removed in a future Rollup version, please use "this.emitFile" instead.',!0,this.inputOptions),s.type="asset");}this.pluginDriver.finaliseAssets();}async generateChunks(){const{manualChunks:e}=this.outputOptions,t="object"==typeof e?await this.addManualChunks(e):this.assignManualChunks(e),s=[],i=new Map;for(const{alias:e,modules:n}of this.outputOptions.inlineDynamicImports?[{alias:null,modules:Jn(this.graph.modulesById)}]:this.outputOptions.preserveModules?Jn(this.graph.modulesById).map((e=>({alias:null,modules:[e]}))):Wn(this.graph.entryModules,t)){_n(n);const t=new Vn(n,this.inputOptions,this.outputOptions,this.unsetOptions,this.pluginDriver,this.graph.modulesById,i,this.facadeChunkByModule,this.includedNamespaces,e);s.push(t);for(const e of n)i.set(e,t);}for(const e of s)e.link();const n=[];for(const e of s)n.push(...e.generateFacades());return [...s,...n]}prerenderChunks(e,t){for(const t of e)t.generateExports();for(const s of e)s.preRender(this.outputOptions,t);}}function Jn(e){return [...e.values()].filter((e=>e instanceof Di&&(e.isIncluded()||e.info.isEntry||e.includedDynamicImporters.length>0)))}function Zn(e,t,s){const i=s.get(t);if("string"==typeof i&&i!==e)return ss((n=t.id,r=e,a=i,{code:ns.INVALID_CHUNK,message:`Cannot assign ${es(n)} to the "${r}" chunk as it is already in the "${a}" chunk.`}));var n,r,a;s.set(t,e);}var er={3:"abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",5:"class enum extends super const export import",6:"enum",strict:"implements interface let package private protected public static yield",strictBind:"eval arguments"},tr="break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this",sr={5:tr,"5module":tr+" export import",6:tr+" const class extends export import super"},ir=/^in(stanceof)?$/,nr="ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࣇऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-鿼ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-ꟊꟵ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",rr="‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿᫀᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿",ar=new RegExp("["+nr+"]"),or=new RegExp("["+nr+rr+"]");nr=rr=null;var hr=[0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,14,29,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,157,310,10,21,11,7,153,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,28,43,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,14,35,349,41,7,1,79,28,11,0,9,21,107,20,28,22,13,52,76,44,33,24,27,35,30,0,3,0,9,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,21,2,31,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,14,0,72,26,230,43,117,63,32,7,3,0,3,7,2,1,2,23,16,0,2,0,95,7,3,38,17,0,2,0,29,0,11,39,8,0,22,0,12,45,20,0,35,56,264,8,2,36,18,0,50,29,113,6,2,1,2,37,22,0,26,5,2,1,2,31,15,0,328,18,190,0,80,921,103,110,18,195,2749,1070,4050,582,8634,568,8,30,114,29,19,47,17,3,32,20,6,18,689,63,129,74,6,0,67,12,65,1,2,0,29,6135,9,1237,43,8,8952,286,50,2,18,3,9,395,2309,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,2357,44,11,6,17,0,370,43,1301,196,60,67,8,0,1205,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42717,35,4148,12,221,3,5761,15,7472,3104,541,1507,4938],lr=[509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,574,3,9,9,370,1,154,10,176,2,54,14,32,9,16,3,46,10,54,9,7,2,37,13,2,9,6,1,45,0,13,2,49,13,9,3,2,11,83,11,7,0,161,11,6,9,7,3,56,1,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,5,0,82,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,243,14,166,9,71,5,2,1,3,3,2,0,2,1,13,9,120,6,3,6,4,0,29,9,41,6,2,3,9,0,10,10,47,15,406,7,2,7,17,9,57,21,2,13,123,5,4,0,2,1,2,6,2,0,9,9,49,4,2,1,2,4,9,9,330,3,19306,9,135,4,60,6,26,9,1014,0,2,54,8,3,82,0,12,1,19628,1,5319,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,262,6,10,9,419,13,1495,6,110,6,6,9,4759,9,787719,239];function cr(e,t){for(var s=65536,i=0;i<t.length;i+=2){if((s+=t[i])>e)return !1;if((s+=t[i+1])>=e)return !0}}function ur(e,t){return e<65?36===e:e<91||(e<97?95===e:e<123||(e<=65535?e>=170&&ar.test(String.fromCharCode(e)):!1!==t&&cr(e,hr)))}function dr(e,t){return e<48?36===e:e<58||!(e<65)&&(e<91||(e<97?95===e:e<123||(e<=65535?e>=170&&or.test(String.fromCharCode(e)):!1!==t&&(cr(e,hr)||cr(e,lr)))))}var pr=function(e,t){void 0===t&&(t={}),this.label=e,this.keyword=t.keyword,this.beforeExpr=!!t.beforeExpr,this.startsExpr=!!t.startsExpr,this.isLoop=!!t.isLoop,this.isAssign=!!t.isAssign,this.prefix=!!t.prefix,this.postfix=!!t.postfix,this.binop=t.binop||null,this.updateContext=null;};function fr(e,t){return new pr(e,{beforeExpr:!0,binop:t})}var mr={beforeExpr:!0},gr={startsExpr:!0},yr={};function xr(e,t){return void 0===t&&(t={}),t.keyword=e,yr[e]=new pr(e,t)}var Er={num:new pr("num",gr),regexp:new pr("regexp",gr),string:new pr("string",gr),name:new pr("name",gr),eof:new pr("eof"),bracketL:new pr("[",{beforeExpr:!0,startsExpr:!0}),bracketR:new pr("]"),braceL:new pr("{",{beforeExpr:!0,startsExpr:!0}),braceR:new pr("}"),parenL:new pr("(",{beforeExpr:!0,startsExpr:!0}),parenR:new pr(")"),comma:new pr(",",mr),semi:new pr(";",mr),colon:new pr(":",mr),dot:new pr("."),question:new pr("?",mr),questionDot:new pr("?."),arrow:new pr("=>",mr),template:new pr("template"),invalidTemplate:new pr("invalidTemplate"),ellipsis:new pr("...",mr),backQuote:new pr("`",gr),dollarBraceL:new pr("${",{beforeExpr:!0,startsExpr:!0}),eq:new pr("=",{beforeExpr:!0,isAssign:!0}),assign:new pr("_=",{beforeExpr:!0,isAssign:!0}),incDec:new pr("++/--",{prefix:!0,postfix:!0,startsExpr:!0}),prefix:new pr("!/~",{beforeExpr:!0,prefix:!0,startsExpr:!0}),logicalOR:fr("||",1),logicalAND:fr("&&",2),bitwiseOR:fr("|",3),bitwiseXOR:fr("^",4),bitwiseAND:fr("&",5),equality:fr("==/!=/===/!==",6),relational:fr("</>/<=/>=",7),bitShift:fr("<</>>/>>>",8),plusMin:new pr("+/-",{beforeExpr:!0,binop:9,prefix:!0,startsExpr:!0}),modulo:fr("%",10),star:fr("*",10),slash:fr("/",10),starstar:new pr("**",{beforeExpr:!0}),coalesce:fr("??",1),_break:xr("break"),_case:xr("case",mr),_catch:xr("catch"),_continue:xr("continue"),_debugger:xr("debugger"),_default:xr("default",mr),_do:xr("do",{isLoop:!0,beforeExpr:!0}),_else:xr("else",mr),_finally:xr("finally"),_for:xr("for",{isLoop:!0}),_function:xr("function",gr),_if:xr("if"),_return:xr("return",mr),_switch:xr("switch"),_throw:xr("throw",mr),_try:xr("try"),_var:xr("var"),_const:xr("const"),_while:xr("while",{isLoop:!0}),_with:xr("with"),_new:xr("new",{beforeExpr:!0,startsExpr:!0}),_this:xr("this",gr),_super:xr("super",gr),_class:xr("class",gr),_extends:xr("extends",mr),_export:xr("export"),_import:xr("import",gr),_null:xr("null",gr),_true:xr("true",gr),_false:xr("false",gr),_in:xr("in",{beforeExpr:!0,binop:7}),_instanceof:xr("instanceof",{beforeExpr:!0,binop:7}),_typeof:xr("typeof",{beforeExpr:!0,prefix:!0,startsExpr:!0}),_void:xr("void",{beforeExpr:!0,prefix:!0,startsExpr:!0}),_delete:xr("delete",{beforeExpr:!0,prefix:!0,startsExpr:!0})},vr=/\r\n?|\n|\u2028|\u2029/,br=new RegExp(vr.source,"g");function Sr(e,t){return 10===e||13===e||!t&&(8232===e||8233===e)}var Ar=/[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/,Pr=/(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,Cr=Object.prototype,Nr=Cr.hasOwnProperty,kr=Cr.toString;function wr(e,t){return Nr.call(e,t)}var _r=Array.isArray||function(e){return "[object Array]"===kr.call(e)};function Ir(e){return new RegExp("^(?:"+e.replace(/ /g,"|")+")$")}var $r=function(e,t){this.line=e,this.column=t;};$r.prototype.offset=function(e){return new $r(this.line,this.column+e)};var Tr=function(e,t,s){this.start=t,this.end=s,null!==e.sourceFile&&(this.source=e.sourceFile);};function Mr(e,t){for(var s=1,i=0;;){br.lastIndex=i;var n=br.exec(e);if(!(n&&n.index<t))return new $r(s,t-i);++s,i=n.index+n[0].length;}}var Lr={ecmaVersion:null,sourceType:"script",onInsertedSemicolon:null,onTrailingComma:null,allowReserved:null,allowReturnOutsideFunction:!1,allowImportExportEverywhere:!1,allowAwaitOutsideFunction:!1,allowHashBang:!1,locations:!1,onToken:null,onComment:null,ranges:!1,program:null,sourceFile:null,directSourceFile:null,preserveParens:!1},Rr=!1;function Or(e){var t={};for(var s in Lr)t[s]=e&&wr(e,s)?e[s]:Lr[s];if("latest"===t.ecmaVersion?t.ecmaVersion=1e8:null==t.ecmaVersion?(!Rr&&"object"==typeof console&&console.warn&&(Rr=!0,console.warn("Since Acorn 8.0.0, options.ecmaVersion is required.\nDefaulting to 2020, but this will stop working in the future.")),t.ecmaVersion=11):t.ecmaVersion>=2015&&(t.ecmaVersion-=2009),null==t.allowReserved&&(t.allowReserved=t.ecmaVersion<5),_r(t.onToken)){var i=t.onToken;t.onToken=function(e){return i.push(e)};}return _r(t.onComment)&&(t.onComment=function(e,t){return function(s,i,n,r,a,o){var h={type:s?"Block":"Line",value:i,start:n,end:r};e.locations&&(h.loc=new Tr(this,a,o)),e.ranges&&(h.range=[n,r]),t.push(h);}}(t,t.onComment)),t}function Dr(e,t){return 2|(e?4:0)|(t?8:0)}var Vr=function(e,t,s){this.options=e=Or(e),this.sourceFile=e.sourceFile,this.keywords=Ir(sr[e.ecmaVersion>=6?6:"module"===e.sourceType?"5module":5]);var i="";!0!==e.allowReserved&&(i=er[e.ecmaVersion>=6?6:5===e.ecmaVersion?5:3],"module"===e.sourceType&&(i+=" await")),this.reservedWords=Ir(i);var n=(i?i+" ":"")+er.strict;this.reservedWordsStrict=Ir(n),this.reservedWordsStrictBind=Ir(n+" "+er.strictBind),this.input=String(t),this.containsEsc=!1,s?(this.pos=s,this.lineStart=this.input.lastIndexOf("\n",s-1)+1,this.curLine=this.input.slice(0,this.lineStart).split(vr).length):(this.pos=this.lineStart=0,this.curLine=1),this.type=Er.eof,this.value=null,this.start=this.end=this.pos,this.startLoc=this.endLoc=this.curPosition(),this.lastTokEndLoc=this.lastTokStartLoc=null,this.lastTokStart=this.lastTokEnd=this.pos,this.context=this.initialContext(),this.exprAllowed=!0,this.inModule="module"===e.sourceType,this.strict=this.inModule||this.strictDirective(this.pos),this.potentialArrowAt=-1,this.yieldPos=this.awaitPos=this.awaitIdentPos=0,this.labels=[],this.undefinedExports={},0===this.pos&&e.allowHashBang&&"#!"===this.input.slice(0,2)&&this.skipLineComment(2),this.scopeStack=[],this.enterScope(1),this.regexpState=null;},Br={inFunction:{configurable:!0},inGenerator:{configurable:!0},inAsync:{configurable:!0},allowSuper:{configurable:!0},allowDirectSuper:{configurable:!0},treatFunctionsAsVar:{configurable:!0},inNonArrowFunction:{configurable:!0}};Vr.prototype.parse=function(){var e=this.options.program||this.startNode();return this.nextToken(),this.parseTopLevel(e)},Br.inFunction.get=function(){return (2&this.currentVarScope().flags)>0},Br.inGenerator.get=function(){return (8&this.currentVarScope().flags)>0},Br.inAsync.get=function(){return (4&this.currentVarScope().flags)>0},Br.allowSuper.get=function(){return (64&this.currentThisScope().flags)>0},Br.allowDirectSuper.get=function(){return (128&this.currentThisScope().flags)>0},Br.treatFunctionsAsVar.get=function(){return this.treatFunctionsAsVarInScope(this.currentScope())},Br.inNonArrowFunction.get=function(){return (2&this.currentThisScope().flags)>0},Vr.extend=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var s=this,i=0;i<e.length;i++)s=e[i](s);return s},Vr.parse=function(e,t){return new this(t,e).parse()},Vr.parseExpressionAt=function(e,t,s){var i=new this(s,e,t);return i.nextToken(),i.parseExpression()},Vr.tokenizer=function(e,t){return new this(t,e)},Object.defineProperties(Vr.prototype,Br);var Fr=Vr.prototype,Wr=/^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/;function Ur(){this.shorthandAssign=this.trailingComma=this.parenthesizedAssign=this.parenthesizedBind=this.doubleProto=-1;}Fr.strictDirective=function(e){for(;;){Pr.lastIndex=e,e+=Pr.exec(this.input)[0].length;var t=Wr.exec(this.input.slice(e));if(!t)return !1;if("use strict"===(t[1]||t[2])){Pr.lastIndex=e+t[0].length;var s=Pr.exec(this.input),i=s.index+s[0].length,n=this.input.charAt(i);return ";"===n||"}"===n||vr.test(s[0])&&!(/[(`.[+\-/*%<>=,?^&]/.test(n)||"!"===n&&"="===this.input.charAt(i+1))}e+=t[0].length,Pr.lastIndex=e,e+=Pr.exec(this.input)[0].length,";"===this.input[e]&&e++;}},Fr.eat=function(e){return this.type===e&&(this.next(),!0)},Fr.isContextual=function(e){return this.type===Er.name&&this.value===e&&!this.containsEsc},Fr.eatContextual=function(e){return !!this.isContextual(e)&&(this.next(),!0)},Fr.expectContextual=function(e){this.eatContextual(e)||this.unexpected();},Fr.canInsertSemicolon=function(){return this.type===Er.eof||this.type===Er.braceR||vr.test(this.input.slice(this.lastTokEnd,this.start))},Fr.insertSemicolon=function(){if(this.canInsertSemicolon())return this.options.onInsertedSemicolon&&this.options.onInsertedSemicolon(this.lastTokEnd,this.lastTokEndLoc),!0},Fr.semicolon=function(){this.eat(Er.semi)||this.insertSemicolon()||this.unexpected();},Fr.afterTrailingComma=function(e,t){if(this.type===e)return this.options.onTrailingComma&&this.options.onTrailingComma(this.lastTokStart,this.lastTokStartLoc),t||this.next(),!0},Fr.expect=function(e){this.eat(e)||this.unexpected();},Fr.unexpected=function(e){this.raise(null!=e?e:this.start,"Unexpected token");},Fr.checkPatternErrors=function(e,t){if(e){e.trailingComma>-1&&this.raiseRecoverable(e.trailingComma,"Comma is not permitted after the rest element");var s=t?e.parenthesizedAssign:e.parenthesizedBind;s>-1&&this.raiseRecoverable(s,"Parenthesized pattern");}},Fr.checkExpressionErrors=function(e,t){if(!e)return !1;var s=e.shorthandAssign,i=e.doubleProto;if(!t)return s>=0||i>=0;s>=0&&this.raise(s,"Shorthand property assignments are valid only in destructuring patterns"),i>=0&&this.raiseRecoverable(i,"Redefinition of __proto__ property");},Fr.checkYieldAwaitInDefaultParams=function(){this.yieldPos&&(!this.awaitPos||this.yieldPos<this.awaitPos)&&this.raise(this.yieldPos,"Yield expression cannot be a default value"),this.awaitPos&&this.raise(this.awaitPos,"Await expression cannot be a default value");},Fr.isSimpleAssignTarget=function(e){return "ParenthesizedExpression"===e.type?this.isSimpleAssignTarget(e.expression):"Identifier"===e.type||"MemberExpression"===e.type};var zr=Vr.prototype;zr.parseTopLevel=function(e){var t={};for(e.body||(e.body=[]);this.type!==Er.eof;){var s=this.parseStatement(null,!0,t);e.body.push(s);}if(this.inModule)for(var i=0,n=Object.keys(this.undefinedExports);i<n.length;i+=1){var r=n[i];this.raiseRecoverable(this.undefinedExports[r].start,"Export '"+r+"' is not defined");}return this.adaptDirectivePrologue(e.body),this.next(),e.sourceType=this.options.sourceType,this.finishNode(e,"Program")};var jr={kind:"loop"},Gr={kind:"switch"};zr.isLet=function(e){if(this.options.ecmaVersion<6||!this.isContextual("let"))return !1;Pr.lastIndex=this.pos;var t=Pr.exec(this.input),s=this.pos+t[0].length,i=this.input.charCodeAt(s);if(91===i)return !0;if(e)return !1;if(123===i)return !0;if(ur(i,!0)){for(var n=s+1;dr(this.input.charCodeAt(n),!0);)++n;var r=this.input.slice(s,n);if(!ir.test(r))return !0}return !1},zr.isAsyncFunction=function(){if(this.options.ecmaVersion<8||!this.isContextual("async"))return !1;Pr.lastIndex=this.pos;var e=Pr.exec(this.input),t=this.pos+e[0].length;return !(vr.test(this.input.slice(this.pos,t))||"function"!==this.input.slice(t,t+8)||t+8!==this.input.length&&dr(this.input.charAt(t+8)))},zr.parseStatement=function(e,t,s){var i,n=this.type,r=this.startNode();switch(this.isLet(e)&&(n=Er._var,i="let"),n){case Er._break:case Er._continue:return this.parseBreakContinueStatement(r,n.keyword);case Er._debugger:return this.parseDebuggerStatement(r);case Er._do:return this.parseDoStatement(r);case Er._for:return this.parseForStatement(r);case Er._function:return e&&(this.strict||"if"!==e&&"label"!==e)&&this.options.ecmaVersion>=6&&this.unexpected(),this.parseFunctionStatement(r,!1,!e);case Er._class:return e&&this.unexpected(),this.parseClass(r,!0);case Er._if:return this.parseIfStatement(r);case Er._return:return this.parseReturnStatement(r);case Er._switch:return this.parseSwitchStatement(r);case Er._throw:return this.parseThrowStatement(r);case Er._try:return this.parseTryStatement(r);case Er._const:case Er._var:return i=i||this.value,e&&"var"!==i&&this.unexpected(),this.parseVarStatement(r,i);case Er._while:return this.parseWhileStatement(r);case Er._with:return this.parseWithStatement(r);case Er.braceL:return this.parseBlock(!0,r);case Er.semi:return this.parseEmptyStatement(r);case Er._export:case Er._import:if(this.options.ecmaVersion>10&&n===Er._import){Pr.lastIndex=this.pos;var a=Pr.exec(this.input),o=this.pos+a[0].length,h=this.input.charCodeAt(o);if(40===h||46===h)return this.parseExpressionStatement(r,this.parseExpression())}return this.options.allowImportExportEverywhere||(t||this.raise(this.start,"'import' and 'export' may only appear at the top level"),this.inModule||this.raise(this.start,"'import' and 'export' may appear only with 'sourceType: module'")),n===Er._import?this.parseImport(r):this.parseExport(r,s);default:if(this.isAsyncFunction())return e&&this.unexpected(),this.next(),this.parseFunctionStatement(r,!0,!e);var l=this.value,c=this.parseExpression();return n===Er.name&&"Identifier"===c.type&&this.eat(Er.colon)?this.parseLabeledStatement(r,l,c,e):this.parseExpressionStatement(r,c)}},zr.parseBreakContinueStatement=function(e,t){var s="break"===t;this.next(),this.eat(Er.semi)||this.insertSemicolon()?e.label=null:this.type!==Er.name?this.unexpected():(e.label=this.parseIdent(),this.semicolon());for(var i=0;i<this.labels.length;++i){var n=this.labels[i];if(null==e.label||n.name===e.label.name){if(null!=n.kind&&(s||"loop"===n.kind))break;if(e.label&&s)break}}return i===this.labels.length&&this.raise(e.start,"Unsyntactic "+t),this.finishNode(e,s?"BreakStatement":"ContinueStatement")},zr.parseDebuggerStatement=function(e){return this.next(),this.semicolon(),this.finishNode(e,"DebuggerStatement")},zr.parseDoStatement=function(e){return this.next(),this.labels.push(jr),e.body=this.parseStatement("do"),this.labels.pop(),this.expect(Er._while),e.test=this.parseParenExpression(),this.options.ecmaVersion>=6?this.eat(Er.semi):this.semicolon(),this.finishNode(e,"DoWhileStatement")},zr.parseForStatement=function(e){this.next();var t=this.options.ecmaVersion>=9&&(this.inAsync||!this.inFunction&&this.options.allowAwaitOutsideFunction)&&this.eatContextual("await")?this.lastTokStart:-1;if(this.labels.push(jr),this.enterScope(0),this.expect(Er.parenL),this.type===Er.semi)return t>-1&&this.unexpected(t),this.parseFor(e,null);var s=this.isLet();if(this.type===Er._var||this.type===Er._const||s){var i=this.startNode(),n=s?"let":this.value;return this.next(),this.parseVar(i,!0,n),this.finishNode(i,"VariableDeclaration"),(this.type===Er._in||this.options.ecmaVersion>=6&&this.isContextual("of"))&&1===i.declarations.length?(this.options.ecmaVersion>=9&&(this.type===Er._in?t>-1&&this.unexpected(t):e.await=t>-1),this.parseForIn(e,i)):(t>-1&&this.unexpected(t),this.parseFor(e,i))}var r=new Ur,a=this.parseExpression(!0,r);return this.type===Er._in||this.options.ecmaVersion>=6&&this.isContextual("of")?(this.options.ecmaVersion>=9&&(this.type===Er._in?t>-1&&this.unexpected(t):e.await=t>-1),this.toAssignable(a,!1,r),this.checkLValPattern(a),this.parseForIn(e,a)):(this.checkExpressionErrors(r,!0),t>-1&&this.unexpected(t),this.parseFor(e,a))},zr.parseFunctionStatement=function(e,t,s){return this.next(),this.parseFunction(e,qr|(s?0:Kr),!1,t)},zr.parseIfStatement=function(e){return this.next(),e.test=this.parseParenExpression(),e.consequent=this.parseStatement("if"),e.alternate=this.eat(Er._else)?this.parseStatement("if"):null,this.finishNode(e,"IfStatement")},zr.parseReturnStatement=function(e){return this.inFunction||this.options.allowReturnOutsideFunction||this.raise(this.start,"'return' outside of function"),this.next(),this.eat(Er.semi)||this.insertSemicolon()?e.argument=null:(e.argument=this.parseExpression(),this.semicolon()),this.finishNode(e,"ReturnStatement")},zr.parseSwitchStatement=function(e){var t;this.next(),e.discriminant=this.parseParenExpression(),e.cases=[],this.expect(Er.braceL),this.labels.push(Gr),this.enterScope(0);for(var s=!1;this.type!==Er.braceR;)if(this.type===Er._case||this.type===Er._default){var i=this.type===Er._case;t&&this.finishNode(t,"SwitchCase"),e.cases.push(t=this.startNode()),t.consequent=[],this.next(),i?t.test=this.parseExpression():(s&&this.raiseRecoverable(this.lastTokStart,"Multiple default clauses"),s=!0,t.test=null),this.expect(Er.colon);}else t||this.unexpected(),t.consequent.push(this.parseStatement(null));return this.exitScope(),t&&this.finishNode(t,"SwitchCase"),this.next(),this.labels.pop(),this.finishNode(e,"SwitchStatement")},zr.parseThrowStatement=function(e){return this.next(),vr.test(this.input.slice(this.lastTokEnd,this.start))&&this.raise(this.lastTokEnd,"Illegal newline after throw"),e.argument=this.parseExpression(),this.semicolon(),this.finishNode(e,"ThrowStatement")};var Hr=[];zr.parseTryStatement=function(e){if(this.next(),e.block=this.parseBlock(),e.handler=null,this.type===Er._catch){var t=this.startNode();if(this.next(),this.eat(Er.parenL)){t.param=this.parseBindingAtom();var s="Identifier"===t.param.type;this.enterScope(s?32:0),this.checkLValPattern(t.param,s?4:2),this.expect(Er.parenR);}else this.options.ecmaVersion<10&&this.unexpected(),t.param=null,this.enterScope(0);t.body=this.parseBlock(!1),this.exitScope(),e.handler=this.finishNode(t,"CatchClause");}return e.finalizer=this.eat(Er._finally)?this.parseBlock():null,e.handler||e.finalizer||this.raise(e.start,"Missing catch or finally clause"),this.finishNode(e,"TryStatement")},zr.parseVarStatement=function(e,t){return this.next(),this.parseVar(e,!1,t),this.semicolon(),this.finishNode(e,"VariableDeclaration")},zr.parseWhileStatement=function(e){return this.next(),e.test=this.parseParenExpression(),this.labels.push(jr),e.body=this.parseStatement("while"),this.labels.pop(),this.finishNode(e,"WhileStatement")},zr.parseWithStatement=function(e){return this.strict&&this.raise(this.start,"'with' in strict mode"),this.next(),e.object=this.parseParenExpression(),e.body=this.parseStatement("with"),this.finishNode(e,"WithStatement")},zr.parseEmptyStatement=function(e){return this.next(),this.finishNode(e,"EmptyStatement")},zr.parseLabeledStatement=function(e,t,s,i){for(var n=0,r=this.labels;n<r.length;n+=1){r[n].name===t&&this.raise(s.start,"Label '"+t+"' is already declared");}for(var a=this.type.isLoop?"loop":this.type===Er._switch?"switch":null,o=this.labels.length-1;o>=0;o--){var h=this.labels[o];if(h.statementStart!==e.start)break;h.statementStart=this.start,h.kind=a;}return this.labels.push({name:t,kind:a,statementStart:this.start}),e.body=this.parseStatement(i?-1===i.indexOf("label")?i+"label":i:"label"),this.labels.pop(),e.label=s,this.finishNode(e,"LabeledStatement")},zr.parseExpressionStatement=function(e,t){return e.expression=t,this.semicolon(),this.finishNode(e,"ExpressionStatement")},zr.parseBlock=function(e,t,s){for(void 0===e&&(e=!0),void 0===t&&(t=this.startNode()),t.body=[],this.expect(Er.braceL),e&&this.enterScope(0);this.type!==Er.braceR;){var i=this.parseStatement(null);t.body.push(i);}return s&&(this.strict=!1),this.next(),e&&this.exitScope(),this.finishNode(t,"BlockStatement")},zr.parseFor=function(e,t){return e.init=t,this.expect(Er.semi),e.test=this.type===Er.semi?null:this.parseExpression(),this.expect(Er.semi),e.update=this.type===Er.parenR?null:this.parseExpression(),this.expect(Er.parenR),e.body=this.parseStatement("for"),this.exitScope(),this.labels.pop(),this.finishNode(e,"ForStatement")},zr.parseForIn=function(e,t){var s=this.type===Er._in;return this.next(),"VariableDeclaration"===t.type&&null!=t.declarations[0].init&&(!s||this.options.ecmaVersion<8||this.strict||"var"!==t.kind||"Identifier"!==t.declarations[0].id.type)&&this.raise(t.start,(s?"for-in":"for-of")+" loop variable declaration may not have an initializer"),e.left=t,e.right=s?this.parseExpression():this.parseMaybeAssign(),this.expect(Er.parenR),e.body=this.parseStatement("for"),this.exitScope(),this.labels.pop(),this.finishNode(e,s?"ForInStatement":"ForOfStatement")},zr.parseVar=function(e,t,s){for(e.declarations=[],e.kind=s;;){var i=this.startNode();if(this.parseVarId(i,s),this.eat(Er.eq)?i.init=this.parseMaybeAssign(t):"const"!==s||this.type===Er._in||this.options.ecmaVersion>=6&&this.isContextual("of")?"Identifier"===i.id.type||t&&(this.type===Er._in||this.isContextual("of"))?i.init=null:this.raise(this.lastTokEnd,"Complex binding patterns require an initialization value"):this.unexpected(),e.declarations.push(this.finishNode(i,"VariableDeclarator")),!this.eat(Er.comma))break}return e},zr.parseVarId=function(e,t){e.id=this.parseBindingAtom(),this.checkLValPattern(e.id,"var"===t?1:2,!1);};var qr=1,Kr=2;zr.parseFunction=function(e,t,s,i){this.initFunction(e),(this.options.ecmaVersion>=9||this.options.ecmaVersion>=6&&!i)&&(this.type===Er.star&&t&Kr&&this.unexpected(),e.generator=this.eat(Er.star)),this.options.ecmaVersion>=8&&(e.async=!!i),t&qr&&(e.id=4&t&&this.type!==Er.name?null:this.parseIdent(),!e.id||t&Kr||this.checkLValSimple(e.id,this.strict||e.generator||e.async?this.treatFunctionsAsVar?1:2:3));var n=this.yieldPos,r=this.awaitPos,a=this.awaitIdentPos;return this.yieldPos=0,this.awaitPos=0,this.awaitIdentPos=0,this.enterScope(Dr(e.async,e.generator)),t&qr||(e.id=this.type===Er.name?this.parseIdent():null),this.parseFunctionParams(e),this.parseFunctionBody(e,s,!1),this.yieldPos=n,this.awaitPos=r,this.awaitIdentPos=a,this.finishNode(e,t&qr?"FunctionDeclaration":"FunctionExpression")},zr.parseFunctionParams=function(e){this.expect(Er.parenL),e.params=this.parseBindingList(Er.parenR,!1,this.options.ecmaVersion>=8),this.checkYieldAwaitInDefaultParams();},zr.parseClass=function(e,t){this.next();var s=this.strict;this.strict=!0,this.parseClassId(e,t),this.parseClassSuper(e);var i=this.startNode(),n=!1;for(i.body=[],this.expect(Er.braceL);this.type!==Er.braceR;){var r=this.parseClassElement(null!==e.superClass);r&&(i.body.push(r),"MethodDefinition"===r.type&&"constructor"===r.kind&&(n&&this.raise(r.start,"Duplicate constructor in the same class"),n=!0));}return this.strict=s,this.next(),e.body=this.finishNode(i,"ClassBody"),this.finishNode(e,t?"ClassDeclaration":"ClassExpression")},zr.parseClassElement=function(e){var t=this;if(this.eat(Er.semi))return null;var s=this.startNode(),i=function(e,i){void 0===i&&(i=!1);var n=t.start,r=t.startLoc;return !!t.eatContextual(e)&&(!(t.type===Er.parenL||i&&t.canInsertSemicolon())||(s.key&&t.unexpected(),s.computed=!1,s.key=t.startNodeAt(n,r),s.key.name=e,t.finishNode(s.key,"Identifier"),!1))};s.kind="method",s.static=i("static");var n=this.eat(Er.star),r=!1;n||(this.options.ecmaVersion>=8&&i("async",!0)?(r=!0,n=this.options.ecmaVersion>=9&&this.eat(Er.star)):i("get")?s.kind="get":i("set")&&(s.kind="set")),s.key||this.parsePropertyName(s);var a=s.key,o=!1;return s.computed||s.static||!("Identifier"===a.type&&"constructor"===a.name||"Literal"===a.type&&"constructor"===a.value)?s.static&&"Identifier"===a.type&&"prototype"===a.name&&this.raise(a.start,"Classes may not have a static property named prototype"):("method"!==s.kind&&this.raise(a.start,"Constructor can't have get/set modifier"),n&&this.raise(a.start,"Constructor can't be a generator"),r&&this.raise(a.start,"Constructor can't be an async method"),s.kind="constructor",o=e),this.parseClassMethod(s,n,r,o),"get"===s.kind&&0!==s.value.params.length&&this.raiseRecoverable(s.value.start,"getter should have no params"),"set"===s.kind&&1!==s.value.params.length&&this.raiseRecoverable(s.value.start,"setter should have exactly one param"),"set"===s.kind&&"RestElement"===s.value.params[0].type&&this.raiseRecoverable(s.value.params[0].start,"Setter cannot use rest params"),s},zr.parseClassMethod=function(e,t,s,i){return e.value=this.parseMethod(t,s,i),this.finishNode(e,"MethodDefinition")},zr.parseClassId=function(e,t){this.type===Er.name?(e.id=this.parseIdent(),t&&this.checkLValSimple(e.id,2,!1)):(!0===t&&this.unexpected(),e.id=null);},zr.parseClassSuper=function(e){e.superClass=this.eat(Er._extends)?this.parseExprSubscripts():null;},zr.parseExport=function(e,t){if(this.next(),this.eat(Er.star))return this.options.ecmaVersion>=11&&(this.eatContextual("as")?(e.exported=this.parseIdent(!0),this.checkExport(t,e.exported.name,this.lastTokStart)):e.exported=null),this.expectContextual("from"),this.type!==Er.string&&this.unexpected(),e.source=this.parseExprAtom(),this.semicolon(),this.finishNode(e,"ExportAllDeclaration");if(this.eat(Er._default)){var s;if(this.checkExport(t,"default",this.lastTokStart),this.type===Er._function||(s=this.isAsyncFunction())){var i=this.startNode();this.next(),s&&this.next(),e.declaration=this.parseFunction(i,4|qr,!1,s);}else if(this.type===Er._class){var n=this.startNode();e.declaration=this.parseClass(n,"nullableID");}else e.declaration=this.parseMaybeAssign(),this.semicolon();return this.finishNode(e,"ExportDefaultDeclaration")}if(this.shouldParseExportStatement())e.declaration=this.parseStatement(null),"VariableDeclaration"===e.declaration.type?this.checkVariableExport(t,e.declaration.declarations):this.checkExport(t,e.declaration.id.name,e.declaration.id.start),e.specifiers=[],e.source=null;else {if(e.declaration=null,e.specifiers=this.parseExportSpecifiers(t),this.eatContextual("from"))this.type!==Er.string&&this.unexpected(),e.source=this.parseExprAtom();else {for(var r=0,a=e.specifiers;r<a.length;r+=1){var o=a[r];this.checkUnreserved(o.local),this.checkLocalExport(o.local);}e.source=null;}this.semicolon();}return this.finishNode(e,"ExportNamedDeclaration")},zr.checkExport=function(e,t,s){e&&(wr(e,t)&&this.raiseRecoverable(s,"Duplicate export '"+t+"'"),e[t]=!0);},zr.checkPatternExport=function(e,t){var s=t.type;if("Identifier"===s)this.checkExport(e,t.name,t.start);else if("ObjectPattern"===s)for(var i=0,n=t.properties;i<n.length;i+=1){var r=n[i];this.checkPatternExport(e,r);}else if("ArrayPattern"===s)for(var a=0,o=t.elements;a<o.length;a+=1){var h=o[a];h&&this.checkPatternExport(e,h);}else "Property"===s?this.checkPatternExport(e,t.value):"AssignmentPattern"===s?this.checkPatternExport(e,t.left):"RestElement"===s?this.checkPatternExport(e,t.argument):"ParenthesizedExpression"===s&&this.checkPatternExport(e,t.expression);},zr.checkVariableExport=function(e,t){if(e)for(var s=0,i=t;s<i.length;s+=1){var n=i[s];this.checkPatternExport(e,n.id);}},zr.shouldParseExportStatement=function(){return "var"===this.type.keyword||"const"===this.type.keyword||"class"===this.type.keyword||"function"===this.type.keyword||this.isLet()||this.isAsyncFunction()},zr.parseExportSpecifiers=function(e){var t=[],s=!0;for(this.expect(Er.braceL);!this.eat(Er.braceR);){if(s)s=!1;else if(this.expect(Er.comma),this.afterTrailingComma(Er.braceR))break;var i=this.startNode();i.local=this.parseIdent(!0),i.exported=this.eatContextual("as")?this.parseIdent(!0):i.local,this.checkExport(e,i.exported.name,i.exported.start),t.push(this.finishNode(i,"ExportSpecifier"));}return t},zr.parseImport=function(e){return this.next(),this.type===Er.string?(e.specifiers=Hr,e.source=this.parseExprAtom()):(e.specifiers=this.parseImportSpecifiers(),this.expectContextual("from"),e.source=this.type===Er.string?this.parseExprAtom():this.unexpected()),this.semicolon(),this.finishNode(e,"ImportDeclaration")},zr.parseImportSpecifiers=function(){var e=[],t=!0;if(this.type===Er.name){var s=this.startNode();if(s.local=this.parseIdent(),this.checkLValSimple(s.local,2),e.push(this.finishNode(s,"ImportDefaultSpecifier")),!this.eat(Er.comma))return e}if(this.type===Er.star){var i=this.startNode();return this.next(),this.expectContextual("as"),i.local=this.parseIdent(),this.checkLValSimple(i.local,2),e.push(this.finishNode(i,"ImportNamespaceSpecifier")),e}for(this.expect(Er.braceL);!this.eat(Er.braceR);){if(t)t=!1;else if(this.expect(Er.comma),this.afterTrailingComma(Er.braceR))break;var n=this.startNode();n.imported=this.parseIdent(!0),this.eatContextual("as")?n.local=this.parseIdent():(this.checkUnreserved(n.imported),n.local=n.imported),this.checkLValSimple(n.local,2),e.push(this.finishNode(n,"ImportSpecifier"));}return e},zr.adaptDirectivePrologue=function(e){for(var t=0;t<e.length&&this.isDirectiveCandidate(e[t]);++t)e[t].directive=e[t].expression.raw.slice(1,-1);},zr.isDirectiveCandidate=function(e){return "ExpressionStatement"===e.type&&"Literal"===e.expression.type&&"string"==typeof e.expression.value&&('"'===this.input[e.start]||"'"===this.input[e.start])};var Xr=Vr.prototype;Xr.toAssignable=function(e,t,s){if(this.options.ecmaVersion>=6&&e)switch(e.type){case"Identifier":this.inAsync&&"await"===e.name&&this.raise(e.start,"Cannot use 'await' as identifier inside an async function");break;case"ObjectPattern":case"ArrayPattern":case"AssignmentPattern":case"RestElement":break;case"ObjectExpression":e.type="ObjectPattern",s&&this.checkPatternErrors(s,!0);for(var i=0,n=e.properties;i<n.length;i+=1){var r=n[i];this.toAssignable(r,t),"RestElement"!==r.type||"ArrayPattern"!==r.argument.type&&"ObjectPattern"!==r.argument.type||this.raise(r.argument.start,"Unexpected token");}break;case"Property":"init"!==e.kind&&this.raise(e.key.start,"Object pattern can't contain getter or setter"),this.toAssignable(e.value,t);break;case"ArrayExpression":e.type="ArrayPattern",s&&this.checkPatternErrors(s,!0),this.toAssignableList(e.elements,t);break;case"SpreadElement":e.type="RestElement",this.toAssignable(e.argument,t),"AssignmentPattern"===e.argument.type&&this.raise(e.argument.start,"Rest elements cannot have a default value");break;case"AssignmentExpression":"="!==e.operator&&this.raise(e.left.end,"Only '=' operator can be used for specifying default value."),e.type="AssignmentPattern",delete e.operator,this.toAssignable(e.left,t);break;case"ParenthesizedExpression":this.toAssignable(e.expression,t,s);break;case"ChainExpression":this.raiseRecoverable(e.start,"Optional chaining cannot appear in left-hand side");break;case"MemberExpression":if(!t)break;default:this.raise(e.start,"Assigning to rvalue");}else s&&this.checkPatternErrors(s,!0);return e},Xr.toAssignableList=function(e,t){for(var s=e.length,i=0;i<s;i++){var n=e[i];n&&this.toAssignable(n,t);}if(s){var r=e[s-1];6===this.options.ecmaVersion&&t&&r&&"RestElement"===r.type&&"Identifier"!==r.argument.type&&this.unexpected(r.argument.start);}return e},Xr.parseSpread=function(e){var t=this.startNode();return this.next(),t.argument=this.parseMaybeAssign(!1,e),this.finishNode(t,"SpreadElement")},Xr.parseRestBinding=function(){var e=this.startNode();return this.next(),6===this.options.ecmaVersion&&this.type!==Er.name&&this.unexpected(),e.argument=this.parseBindingAtom(),this.finishNode(e,"RestElement")},Xr.parseBindingAtom=function(){if(this.options.ecmaVersion>=6)switch(this.type){case Er.bracketL:var e=this.startNode();return this.next(),e.elements=this.parseBindingList(Er.bracketR,!0,!0),this.finishNode(e,"ArrayPattern");case Er.braceL:return this.parseObj(!0)}return this.parseIdent()},Xr.parseBindingList=function(e,t,s){for(var i=[],n=!0;!this.eat(e);)if(n?n=!1:this.expect(Er.comma),t&&this.type===Er.comma)i.push(null);else {if(s&&this.afterTrailingComma(e))break;if(this.type===Er.ellipsis){var r=this.parseRestBinding();this.parseBindingListItem(r),i.push(r),this.type===Er.comma&&this.raise(this.start,"Comma is not permitted after the rest element"),this.expect(e);break}var a=this.parseMaybeDefault(this.start,this.startLoc);this.parseBindingListItem(a),i.push(a);}return i},Xr.parseBindingListItem=function(e){return e},Xr.parseMaybeDefault=function(e,t,s){if(s=s||this.parseBindingAtom(),this.options.ecmaVersion<6||!this.eat(Er.eq))return s;var i=this.startNodeAt(e,t);return i.left=s,i.right=this.parseMaybeAssign(),this.finishNode(i,"AssignmentPattern")},Xr.checkLValSimple=function(e,t,s){void 0===t&&(t=0);var i=0!==t;switch(e.type){case"Identifier":this.strict&&this.reservedWordsStrictBind.test(e.name)&&this.raiseRecoverable(e.start,(i?"Binding ":"Assigning to ")+e.name+" in strict mode"),i&&(2===t&&"let"===e.name&&this.raiseRecoverable(e.start,"let is disallowed as a lexically bound name"),s&&(wr(s,e.name)&&this.raiseRecoverable(e.start,"Argument name clash"),s[e.name]=!0),5!==t&&this.declareName(e.name,t,e.start));break;case"ChainExpression":this.raiseRecoverable(e.start,"Optional chaining cannot appear in left-hand side");break;case"MemberExpression":i&&this.raiseRecoverable(e.start,"Binding member expression");break;case"ParenthesizedExpression":return i&&this.raiseRecoverable(e.start,"Binding parenthesized expression"),this.checkLValSimple(e.expression,t,s);default:this.raise(e.start,(i?"Binding":"Assigning to")+" rvalue");}},Xr.checkLValPattern=function(e,t,s){switch(void 0===t&&(t=0),e.type){case"ObjectPattern":for(var i=0,n=e.properties;i<n.length;i+=1){var r=n[i];this.checkLValInnerPattern(r,t,s);}break;case"ArrayPattern":for(var a=0,o=e.elements;a<o.length;a+=1){var h=o[a];h&&this.checkLValInnerPattern(h,t,s);}break;default:this.checkLValSimple(e,t,s);}},Xr.checkLValInnerPattern=function(e,t,s){switch(void 0===t&&(t=0),e.type){case"Property":this.checkLValInnerPattern(e.value,t,s);break;case"AssignmentPattern":this.checkLValPattern(e.left,t,s);break;case"RestElement":this.checkLValPattern(e.argument,t,s);break;default:this.checkLValPattern(e,t,s);}};var Yr=Vr.prototype;Yr.checkPropClash=function(e,t,s){if(!(this.options.ecmaVersion>=9&&"SpreadElement"===e.type||this.options.ecmaVersion>=6&&(e.computed||e.method||e.shorthand))){var i,n=e.key;switch(n.type){case"Identifier":i=n.name;break;case"Literal":i=String(n.value);break;default:return}var r=e.kind;if(this.options.ecmaVersion>=6)"__proto__"===i&&"init"===r&&(t.proto&&(s?s.doubleProto<0&&(s.doubleProto=n.start):this.raiseRecoverable(n.start,"Redefinition of __proto__ property")),t.proto=!0);else {var a=t[i="$"+i];if(a)("init"===r?this.strict&&a.init||a.get||a.set:a.init||a[r])&&this.raiseRecoverable(n.start,"Redefinition of property");else a=t[i]={init:!1,get:!1,set:!1};a[r]=!0;}}},Yr.parseExpression=function(e,t){var s=this.start,i=this.startLoc,n=this.parseMaybeAssign(e,t);if(this.type===Er.comma){var r=this.startNodeAt(s,i);for(r.expressions=[n];this.eat(Er.comma);)r.expressions.push(this.parseMaybeAssign(e,t));return this.finishNode(r,"SequenceExpression")}return n},Yr.parseMaybeAssign=function(e,t,s){if(this.isContextual("yield")){if(this.inGenerator)return this.parseYield(e);this.exprAllowed=!1;}var i=!1,n=-1,r=-1;t?(n=t.parenthesizedAssign,r=t.trailingComma,t.parenthesizedAssign=t.trailingComma=-1):(t=new Ur,i=!0);var a=this.start,o=this.startLoc;this.type!==Er.parenL&&this.type!==Er.name||(this.potentialArrowAt=this.start);var h=this.parseMaybeConditional(e,t);if(s&&(h=s.call(this,h,a,o)),this.type.isAssign){var l=this.startNodeAt(a,o);return l.operator=this.value,this.type===Er.eq&&(h=this.toAssignable(h,!1,t)),i||(t.parenthesizedAssign=t.trailingComma=t.doubleProto=-1),t.shorthandAssign>=h.start&&(t.shorthandAssign=-1),this.type===Er.eq?this.checkLValPattern(h):this.checkLValSimple(h),l.left=h,this.next(),l.right=this.parseMaybeAssign(e),this.finishNode(l,"AssignmentExpression")}return i&&this.checkExpressionErrors(t,!0),n>-1&&(t.parenthesizedAssign=n),r>-1&&(t.trailingComma=r),h},Yr.parseMaybeConditional=function(e,t){var s=this.start,i=this.startLoc,n=this.parseExprOps(e,t);if(this.checkExpressionErrors(t))return n;if(this.eat(Er.question)){var r=this.startNodeAt(s,i);return r.test=n,r.consequent=this.parseMaybeAssign(),this.expect(Er.colon),r.alternate=this.parseMaybeAssign(e),this.finishNode(r,"ConditionalExpression")}return n},Yr.parseExprOps=function(e,t){var s=this.start,i=this.startLoc,n=this.parseMaybeUnary(t,!1);return this.checkExpressionErrors(t)||n.start===s&&"ArrowFunctionExpression"===n.type?n:this.parseExprOp(n,s,i,-1,e)},Yr.parseExprOp=function(e,t,s,i,n){var r=this.type.binop;if(null!=r&&(!n||this.type!==Er._in)&&r>i){var a=this.type===Er.logicalOR||this.type===Er.logicalAND,o=this.type===Er.coalesce;o&&(r=Er.logicalAND.binop);var h=this.value;this.next();var l=this.start,c=this.startLoc,u=this.parseExprOp(this.parseMaybeUnary(null,!1),l,c,r,n),d=this.buildBinary(t,s,e,u,h,a||o);return (a&&this.type===Er.coalesce||o&&(this.type===Er.logicalOR||this.type===Er.logicalAND))&&this.raiseRecoverable(this.start,"Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"),this.parseExprOp(d,t,s,i,n)}return e},Yr.buildBinary=function(e,t,s,i,n,r){var a=this.startNodeAt(e,t);return a.left=s,a.operator=n,a.right=i,this.finishNode(a,r?"LogicalExpression":"BinaryExpression")},Yr.parseMaybeUnary=function(e,t){var s,i=this.start,n=this.startLoc;if(this.isContextual("await")&&(this.inAsync||!this.inFunction&&this.options.allowAwaitOutsideFunction))s=this.parseAwait(),t=!0;else if(this.type.prefix){var r=this.startNode(),a=this.type===Er.incDec;r.operator=this.value,r.prefix=!0,this.next(),r.argument=this.parseMaybeUnary(null,!0),this.checkExpressionErrors(e,!0),a?this.checkLValSimple(r.argument):this.strict&&"delete"===r.operator&&"Identifier"===r.argument.type?this.raiseRecoverable(r.start,"Deleting local variable in strict mode"):t=!0,s=this.finishNode(r,a?"UpdateExpression":"UnaryExpression");}else {if(s=this.parseExprSubscripts(e),this.checkExpressionErrors(e))return s;for(;this.type.postfix&&!this.canInsertSemicolon();){var o=this.startNodeAt(i,n);o.operator=this.value,o.prefix=!1,o.argument=s,this.checkLValSimple(s),this.next(),s=this.finishNode(o,"UpdateExpression");}}return !t&&this.eat(Er.starstar)?this.buildBinary(i,n,s,this.parseMaybeUnary(null,!1),"**",!1):s},Yr.parseExprSubscripts=function(e){var t=this.start,s=this.startLoc,i=this.parseExprAtom(e);if("ArrowFunctionExpression"===i.type&&")"!==this.input.slice(this.lastTokStart,this.lastTokEnd))return i;var n=this.parseSubscripts(i,t,s);return e&&"MemberExpression"===n.type&&(e.parenthesizedAssign>=n.start&&(e.parenthesizedAssign=-1),e.parenthesizedBind>=n.start&&(e.parenthesizedBind=-1)),n},Yr.parseSubscripts=function(e,t,s,i){for(var n=this.options.ecmaVersion>=8&&"Identifier"===e.type&&"async"===e.name&&this.lastTokEnd===e.end&&!this.canInsertSemicolon()&&e.end-e.start==5&&this.potentialArrowAt===e.start,r=!1;;){var a=this.parseSubscript(e,t,s,i,n,r);if(a.optional&&(r=!0),a===e||"ArrowFunctionExpression"===a.type){if(r){var o=this.startNodeAt(t,s);o.expression=a,a=this.finishNode(o,"ChainExpression");}return a}e=a;}},Yr.parseSubscript=function(e,t,s,i,n,r){var a=this.options.ecmaVersion>=11,o=a&&this.eat(Er.questionDot);i&&o&&this.raise(this.lastTokStart,"Optional chaining cannot appear in the callee of new expressions");var h=this.eat(Er.bracketL);if(h||o&&this.type!==Er.parenL&&this.type!==Er.backQuote||this.eat(Er.dot)){var l=this.startNodeAt(t,s);l.object=e,l.property=h?this.parseExpression():this.parseIdent("never"!==this.options.allowReserved),l.computed=!!h,h&&this.expect(Er.bracketR),a&&(l.optional=o),e=this.finishNode(l,"MemberExpression");}else if(!i&&this.eat(Er.parenL)){var c=new Ur,u=this.yieldPos,d=this.awaitPos,p=this.awaitIdentPos;this.yieldPos=0,this.awaitPos=0,this.awaitIdentPos=0;var f=this.parseExprList(Er.parenR,this.options.ecmaVersion>=8,!1,c);if(n&&!o&&!this.canInsertSemicolon()&&this.eat(Er.arrow))return this.checkPatternErrors(c,!1),this.checkYieldAwaitInDefaultParams(),this.awaitIdentPos>0&&this.raise(this.awaitIdentPos,"Cannot use 'await' as identifier inside an async function"),this.yieldPos=u,this.awaitPos=d,this.awaitIdentPos=p,this.parseArrowExpression(this.startNodeAt(t,s),f,!0);this.checkExpressionErrors(c,!0),this.yieldPos=u||this.yieldPos,this.awaitPos=d||this.awaitPos,this.awaitIdentPos=p||this.awaitIdentPos;var m=this.startNodeAt(t,s);m.callee=e,m.arguments=f,a&&(m.optional=o),e=this.finishNode(m,"CallExpression");}else if(this.type===Er.backQuote){(o||r)&&this.raise(this.start,"Optional chaining cannot appear in the tag of tagged template expressions");var g=this.startNodeAt(t,s);g.tag=e,g.quasi=this.parseTemplate({isTagged:!0}),e=this.finishNode(g,"TaggedTemplateExpression");}return e},Yr.parseExprAtom=function(e){this.type===Er.slash&&this.readRegexp();var t,s=this.potentialArrowAt===this.start;switch(this.type){case Er._super:return this.allowSuper||this.raise(this.start,"'super' keyword outside a method"),t=this.startNode(),this.next(),this.type!==Er.parenL||this.allowDirectSuper||this.raise(t.start,"super() call outside constructor of a subclass"),this.type!==Er.dot&&this.type!==Er.bracketL&&this.type!==Er.parenL&&this.unexpected(),this.finishNode(t,"Super");case Er._this:return t=this.startNode(),this.next(),this.finishNode(t,"ThisExpression");case Er.name:var i=this.start,n=this.startLoc,r=this.containsEsc,a=this.parseIdent(!1);if(this.options.ecmaVersion>=8&&!r&&"async"===a.name&&!this.canInsertSemicolon()&&this.eat(Er._function))return this.parseFunction(this.startNodeAt(i,n),0,!1,!0);if(s&&!this.canInsertSemicolon()){if(this.eat(Er.arrow))return this.parseArrowExpression(this.startNodeAt(i,n),[a],!1);if(this.options.ecmaVersion>=8&&"async"===a.name&&this.type===Er.name&&!r)return a=this.parseIdent(!1),!this.canInsertSemicolon()&&this.eat(Er.arrow)||this.unexpected(),this.parseArrowExpression(this.startNodeAt(i,n),[a],!0)}return a;case Er.regexp:var o=this.value;return (t=this.parseLiteral(o.value)).regex={pattern:o.pattern,flags:o.flags},t;case Er.num:case Er.string:return this.parseLiteral(this.value);case Er._null:case Er._true:case Er._false:return (t=this.startNode()).value=this.type===Er._null?null:this.type===Er._true,t.raw=this.type.keyword,this.next(),this.finishNode(t,"Literal");case Er.parenL:var h=this.start,l=this.parseParenAndDistinguishExpression(s);return e&&(e.parenthesizedAssign<0&&!this.isSimpleAssignTarget(l)&&(e.parenthesizedAssign=h),e.parenthesizedBind<0&&(e.parenthesizedBind=h)),l;case Er.bracketL:return t=this.startNode(),this.next(),t.elements=this.parseExprList(Er.bracketR,!0,!0,e),this.finishNode(t,"ArrayExpression");case Er.braceL:return this.parseObj(!1,e);case Er._function:return t=this.startNode(),this.next(),this.parseFunction(t,0);case Er._class:return this.parseClass(this.startNode(),!1);case Er._new:return this.parseNew();case Er.backQuote:return this.parseTemplate();case Er._import:return this.options.ecmaVersion>=11?this.parseExprImport():this.unexpected();default:this.unexpected();}},Yr.parseExprImport=function(){var e=this.startNode();this.containsEsc&&this.raiseRecoverable(this.start,"Escape sequence in keyword import");var t=this.parseIdent(!0);switch(this.type){case Er.parenL:return this.parseDynamicImport(e);case Er.dot:return e.meta=t,this.parseImportMeta(e);default:this.unexpected();}},Yr.parseDynamicImport=function(e){if(this.next(),e.source=this.parseMaybeAssign(),!this.eat(Er.parenR)){var t=this.start;this.eat(Er.comma)&&this.eat(Er.parenR)?this.raiseRecoverable(t,"Trailing comma is not allowed in import()"):this.unexpected(t);}return this.finishNode(e,"ImportExpression")},Yr.parseImportMeta=function(e){this.next();var t=this.containsEsc;return e.property=this.parseIdent(!0),"meta"!==e.property.name&&this.raiseRecoverable(e.property.start,"The only valid meta property for import is 'import.meta'"),t&&this.raiseRecoverable(e.start,"'import.meta' must not contain escaped characters"),"module"!==this.options.sourceType&&this.raiseRecoverable(e.start,"Cannot use 'import.meta' outside a module"),this.finishNode(e,"MetaProperty")},Yr.parseLiteral=function(e){var t=this.startNode();return t.value=e,t.raw=this.input.slice(this.start,this.end),110===t.raw.charCodeAt(t.raw.length-1)&&(t.bigint=t.raw.slice(0,-1).replace(/_/g,"")),this.next(),this.finishNode(t,"Literal")},Yr.parseParenExpression=function(){this.expect(Er.parenL);var e=this.parseExpression();return this.expect(Er.parenR),e},Yr.parseParenAndDistinguishExpression=function(e){var t,s=this.start,i=this.startLoc,n=this.options.ecmaVersion>=8;if(this.options.ecmaVersion>=6){this.next();var r,a=this.start,o=this.startLoc,h=[],l=!0,c=!1,u=new Ur,d=this.yieldPos,p=this.awaitPos;for(this.yieldPos=0,this.awaitPos=0;this.type!==Er.parenR;){if(l?l=!1:this.expect(Er.comma),n&&this.afterTrailingComma(Er.parenR,!0)){c=!0;break}if(this.type===Er.ellipsis){r=this.start,h.push(this.parseParenItem(this.parseRestBinding())),this.type===Er.comma&&this.raise(this.start,"Comma is not permitted after the rest element");break}h.push(this.parseMaybeAssign(!1,u,this.parseParenItem));}var f=this.start,m=this.startLoc;if(this.expect(Er.parenR),e&&!this.canInsertSemicolon()&&this.eat(Er.arrow))return this.checkPatternErrors(u,!1),this.checkYieldAwaitInDefaultParams(),this.yieldPos=d,this.awaitPos=p,this.parseParenArrowList(s,i,h);h.length&&!c||this.unexpected(this.lastTokStart),r&&this.unexpected(r),this.checkExpressionErrors(u,!0),this.yieldPos=d||this.yieldPos,this.awaitPos=p||this.awaitPos,h.length>1?((t=this.startNodeAt(a,o)).expressions=h,this.finishNodeAt(t,"SequenceExpression",f,m)):t=h[0];}else t=this.parseParenExpression();if(this.options.preserveParens){var g=this.startNodeAt(s,i);return g.expression=t,this.finishNode(g,"ParenthesizedExpression")}return t},Yr.parseParenItem=function(e){return e},Yr.parseParenArrowList=function(e,t,s){return this.parseArrowExpression(this.startNodeAt(e,t),s)};var Qr=[];Yr.parseNew=function(){this.containsEsc&&this.raiseRecoverable(this.start,"Escape sequence in keyword new");var e=this.startNode(),t=this.parseIdent(!0);if(this.options.ecmaVersion>=6&&this.eat(Er.dot)){e.meta=t;var s=this.containsEsc;return e.property=this.parseIdent(!0),"target"!==e.property.name&&this.raiseRecoverable(e.property.start,"The only valid meta property for new is 'new.target'"),s&&this.raiseRecoverable(e.start,"'new.target' must not contain escaped characters"),this.inNonArrowFunction||this.raiseRecoverable(e.start,"'new.target' can only be used in functions"),this.finishNode(e,"MetaProperty")}var i=this.start,n=this.startLoc,r=this.type===Er._import;return e.callee=this.parseSubscripts(this.parseExprAtom(),i,n,!0),r&&"ImportExpression"===e.callee.type&&this.raise(i,"Cannot use new with import()"),this.eat(Er.parenL)?e.arguments=this.parseExprList(Er.parenR,this.options.ecmaVersion>=8,!1):e.arguments=Qr,this.finishNode(e,"NewExpression")},Yr.parseTemplateElement=function(e){var t=e.isTagged,s=this.startNode();return this.type===Er.invalidTemplate?(t||this.raiseRecoverable(this.start,"Bad escape sequence in untagged template literal"),s.value={raw:this.value,cooked:null}):s.value={raw:this.input.slice(this.start,this.end).replace(/\r\n?/g,"\n"),cooked:this.value},this.next(),s.tail=this.type===Er.backQuote,this.finishNode(s,"TemplateElement")},Yr.parseTemplate=function(e){void 0===e&&(e={});var t=e.isTagged;void 0===t&&(t=!1);var s=this.startNode();this.next(),s.expressions=[];var i=this.parseTemplateElement({isTagged:t});for(s.quasis=[i];!i.tail;)this.type===Er.eof&&this.raise(this.pos,"Unterminated template literal"),this.expect(Er.dollarBraceL),s.expressions.push(this.parseExpression()),this.expect(Er.braceR),s.quasis.push(i=this.parseTemplateElement({isTagged:t}));return this.next(),this.finishNode(s,"TemplateLiteral")},Yr.isAsyncProp=function(e){return !e.computed&&"Identifier"===e.key.type&&"async"===e.key.name&&(this.type===Er.name||this.type===Er.num||this.type===Er.string||this.type===Er.bracketL||this.type.keyword||this.options.ecmaVersion>=9&&this.type===Er.star)&&!vr.test(this.input.slice(this.lastTokEnd,this.start))},Yr.parseObj=function(e,t){var s=this.startNode(),i=!0,n={};for(s.properties=[],this.next();!this.eat(Er.braceR);){if(i)i=!1;else if(this.expect(Er.comma),this.options.ecmaVersion>=5&&this.afterTrailingComma(Er.braceR))break;var r=this.parseProperty(e,t);e||this.checkPropClash(r,n,t),s.properties.push(r);}return this.finishNode(s,e?"ObjectPattern":"ObjectExpression")},Yr.parseProperty=function(e,t){var s,i,n,r,a=this.startNode();if(this.options.ecmaVersion>=9&&this.eat(Er.ellipsis))return e?(a.argument=this.parseIdent(!1),this.type===Er.comma&&this.raise(this.start,"Comma is not permitted after the rest element"),this.finishNode(a,"RestElement")):(this.type===Er.parenL&&t&&(t.parenthesizedAssign<0&&(t.parenthesizedAssign=this.start),t.parenthesizedBind<0&&(t.parenthesizedBind=this.start)),a.argument=this.parseMaybeAssign(!1,t),this.type===Er.comma&&t&&t.trailingComma<0&&(t.trailingComma=this.start),this.finishNode(a,"SpreadElement"));this.options.ecmaVersion>=6&&(a.method=!1,a.shorthand=!1,(e||t)&&(n=this.start,r=this.startLoc),e||(s=this.eat(Er.star)));var o=this.containsEsc;return this.parsePropertyName(a),!e&&!o&&this.options.ecmaVersion>=8&&!s&&this.isAsyncProp(a)?(i=!0,s=this.options.ecmaVersion>=9&&this.eat(Er.star),this.parsePropertyName(a,t)):i=!1,this.parsePropertyValue(a,e,s,i,n,r,t,o),this.finishNode(a,"Property")},Yr.parsePropertyValue=function(e,t,s,i,n,r,a,o){if((s||i)&&this.type===Er.colon&&this.unexpected(),this.eat(Er.colon))e.value=t?this.parseMaybeDefault(this.start,this.startLoc):this.parseMaybeAssign(!1,a),e.kind="init";else if(this.options.ecmaVersion>=6&&this.type===Er.parenL)t&&this.unexpected(),e.kind="init",e.method=!0,e.value=this.parseMethod(s,i);else if(t||o||!(this.options.ecmaVersion>=5)||e.computed||"Identifier"!==e.key.type||"get"!==e.key.name&&"set"!==e.key.name||this.type===Er.comma||this.type===Er.braceR||this.type===Er.eq)this.options.ecmaVersion>=6&&!e.computed&&"Identifier"===e.key.type?((s||i)&&this.unexpected(),this.checkUnreserved(e.key),"await"!==e.key.name||this.awaitIdentPos||(this.awaitIdentPos=n),e.kind="init",t?e.value=this.parseMaybeDefault(n,r,this.copyNode(e.key)):this.type===Er.eq&&a?(a.shorthandAssign<0&&(a.shorthandAssign=this.start),e.value=this.parseMaybeDefault(n,r,this.copyNode(e.key))):e.value=this.copyNode(e.key),e.shorthand=!0):this.unexpected();else {(s||i)&&this.unexpected(),e.kind=e.key.name,this.parsePropertyName(e),e.value=this.parseMethod(!1);var h="get"===e.kind?0:1;if(e.value.params.length!==h){var l=e.value.start;"get"===e.kind?this.raiseRecoverable(l,"getter should have no params"):this.raiseRecoverable(l,"setter should have exactly one param");}else "set"===e.kind&&"RestElement"===e.value.params[0].type&&this.raiseRecoverable(e.value.params[0].start,"Setter cannot use rest params");}},Yr.parsePropertyName=function(e){if(this.options.ecmaVersion>=6){if(this.eat(Er.bracketL))return e.computed=!0,e.key=this.parseMaybeAssign(),this.expect(Er.bracketR),e.key;e.computed=!1;}return e.key=this.type===Er.num||this.type===Er.string?this.parseExprAtom():this.parseIdent("never"!==this.options.allowReserved)},Yr.initFunction=function(e){e.id=null,this.options.ecmaVersion>=6&&(e.generator=e.expression=!1),this.options.ecmaVersion>=8&&(e.async=!1);},Yr.parseMethod=function(e,t,s){var i=this.startNode(),n=this.yieldPos,r=this.awaitPos,a=this.awaitIdentPos;return this.initFunction(i),this.options.ecmaVersion>=6&&(i.generator=e),this.options.ecmaVersion>=8&&(i.async=!!t),this.yieldPos=0,this.awaitPos=0,this.awaitIdentPos=0,this.enterScope(64|Dr(t,i.generator)|(s?128:0)),this.expect(Er.parenL),i.params=this.parseBindingList(Er.parenR,!1,this.options.ecmaVersion>=8),this.checkYieldAwaitInDefaultParams(),this.parseFunctionBody(i,!1,!0),this.yieldPos=n,this.awaitPos=r,this.awaitIdentPos=a,this.finishNode(i,"FunctionExpression")},Yr.parseArrowExpression=function(e,t,s){var i=this.yieldPos,n=this.awaitPos,r=this.awaitIdentPos;return this.enterScope(16|Dr(s,!1)),this.initFunction(e),this.options.ecmaVersion>=8&&(e.async=!!s),this.yieldPos=0,this.awaitPos=0,this.awaitIdentPos=0,e.params=this.toAssignableList(t,!0),this.parseFunctionBody(e,!0,!1),this.yieldPos=i,this.awaitPos=n,this.awaitIdentPos=r,this.finishNode(e,"ArrowFunctionExpression")},Yr.parseFunctionBody=function(e,t,s){var i=t&&this.type!==Er.braceL,n=this.strict,r=!1;if(i)e.body=this.parseMaybeAssign(),e.expression=!0,this.checkParams(e,!1);else {var a=this.options.ecmaVersion>=7&&!this.isSimpleParamList(e.params);n&&!a||(r=this.strictDirective(this.end))&&a&&this.raiseRecoverable(e.start,"Illegal 'use strict' directive in function with non-simple parameter list");var o=this.labels;this.labels=[],r&&(this.strict=!0),this.checkParams(e,!n&&!r&&!t&&!s&&this.isSimpleParamList(e.params)),this.strict&&e.id&&this.checkLValSimple(e.id,5),e.body=this.parseBlock(!1,void 0,r&&!n),e.expression=!1,this.adaptDirectivePrologue(e.body.body),this.labels=o;}this.exitScope();},Yr.isSimpleParamList=function(e){for(var t=0,s=e;t<s.length;t+=1){if("Identifier"!==s[t].type)return !1}return !0},Yr.checkParams=function(e,t){for(var s={},i=0,n=e.params;i<n.length;i+=1){var r=n[i];this.checkLValInnerPattern(r,1,t?null:s);}},Yr.parseExprList=function(e,t,s,i){for(var n=[],r=!0;!this.eat(e);){if(r)r=!1;else if(this.expect(Er.comma),t&&this.afterTrailingComma(e))break;var a=void 0;s&&this.type===Er.comma?a=null:this.type===Er.ellipsis?(a=this.parseSpread(i),i&&this.type===Er.comma&&i.trailingComma<0&&(i.trailingComma=this.start)):a=this.parseMaybeAssign(!1,i),n.push(a);}return n},Yr.checkUnreserved=function(e){var t=e.start,s=e.end,i=e.name;(this.inGenerator&&"yield"===i&&this.raiseRecoverable(t,"Cannot use 'yield' as identifier inside a generator"),this.inAsync&&"await"===i&&this.raiseRecoverable(t,"Cannot use 'await' as identifier inside an async function"),this.keywords.test(i)&&this.raise(t,"Unexpected keyword '"+i+"'"),this.options.ecmaVersion<6&&-1!==this.input.slice(t,s).indexOf("\\"))||(this.strict?this.reservedWordsStrict:this.reservedWords).test(i)&&(this.inAsync||"await"!==i||this.raiseRecoverable(t,"Cannot use keyword 'await' outside an async function"),this.raiseRecoverable(t,"The keyword '"+i+"' is reserved"));},Yr.parseIdent=function(e,t){var s=this.startNode();return this.type===Er.name?s.name=this.value:this.type.keyword?(s.name=this.type.keyword,"class"!==s.name&&"function"!==s.name||this.lastTokEnd===this.lastTokStart+1&&46===this.input.charCodeAt(this.lastTokStart)||this.context.pop()):this.unexpected(),this.next(!!e),this.finishNode(s,"Identifier"),e||(this.checkUnreserved(s),"await"!==s.name||this.awaitIdentPos||(this.awaitIdentPos=s.start)),s},Yr.parseYield=function(e){this.yieldPos||(this.yieldPos=this.start);var t=this.startNode();return this.next(),this.type===Er.semi||this.canInsertSemicolon()||this.type!==Er.star&&!this.type.startsExpr?(t.delegate=!1,t.argument=null):(t.delegate=this.eat(Er.star),t.argument=this.parseMaybeAssign(e)),this.finishNode(t,"YieldExpression")},Yr.parseAwait=function(){this.awaitPos||(this.awaitPos=this.start);var e=this.startNode();return this.next(),e.argument=this.parseMaybeUnary(null,!0),this.finishNode(e,"AwaitExpression")};var Jr=Vr.prototype;Jr.raise=function(e,t){var s=Mr(this.input,e);t+=" ("+s.line+":"+s.column+")";var i=new SyntaxError(t);throw i.pos=e,i.loc=s,i.raisedAt=this.pos,i},Jr.raiseRecoverable=Jr.raise,Jr.curPosition=function(){if(this.options.locations)return new $r(this.curLine,this.pos-this.lineStart)};var Zr=Vr.prototype,ea=function(e){this.flags=e,this.var=[],this.lexical=[],this.functions=[];};Zr.enterScope=function(e){this.scopeStack.push(new ea(e));},Zr.exitScope=function(){this.scopeStack.pop();},Zr.treatFunctionsAsVarInScope=function(e){return 2&e.flags||!this.inModule&&1&e.flags},Zr.declareName=function(e,t,s){var i=!1;if(2===t){var n=this.currentScope();i=n.lexical.indexOf(e)>-1||n.functions.indexOf(e)>-1||n.var.indexOf(e)>-1,n.lexical.push(e),this.inModule&&1&n.flags&&delete this.undefinedExports[e];}else if(4===t){this.currentScope().lexical.push(e);}else if(3===t){var r=this.currentScope();i=this.treatFunctionsAsVar?r.lexical.indexOf(e)>-1:r.lexical.indexOf(e)>-1||r.var.indexOf(e)>-1,r.functions.push(e);}else for(var a=this.scopeStack.length-1;a>=0;--a){var o=this.scopeStack[a];if(o.lexical.indexOf(e)>-1&&!(32&o.flags&&o.lexical[0]===e)||!this.treatFunctionsAsVarInScope(o)&&o.functions.indexOf(e)>-1){i=!0;break}if(o.var.push(e),this.inModule&&1&o.flags&&delete this.undefinedExports[e],3&o.flags)break}i&&this.raiseRecoverable(s,"Identifier '"+e+"' has already been declared");},Zr.checkLocalExport=function(e){-1===this.scopeStack[0].lexical.indexOf(e.name)&&-1===this.scopeStack[0].var.indexOf(e.name)&&(this.undefinedExports[e.name]=e);},Zr.currentScope=function(){return this.scopeStack[this.scopeStack.length-1]},Zr.currentVarScope=function(){for(var e=this.scopeStack.length-1;;e--){var t=this.scopeStack[e];if(3&t.flags)return t}},Zr.currentThisScope=function(){for(var e=this.scopeStack.length-1;;e--){var t=this.scopeStack[e];if(3&t.flags&&!(16&t.flags))return t}};var ta=function(e,t,s){this.type="",this.start=t,this.end=0,e.options.locations&&(this.loc=new Tr(e,s)),e.options.directSourceFile&&(this.sourceFile=e.options.directSourceFile),e.options.ranges&&(this.range=[t,0]);},sa=Vr.prototype;function ia(e,t,s,i){return e.type=t,e.end=s,this.options.locations&&(e.loc.end=i),this.options.ranges&&(e.range[1]=s),e}sa.startNode=function(){return new ta(this,this.start,this.startLoc)},sa.startNodeAt=function(e,t){return new ta(this,e,t)},sa.finishNode=function(e,t){return ia.call(this,e,t,this.lastTokEnd,this.lastTokEndLoc)},sa.finishNodeAt=function(e,t,s,i){return ia.call(this,e,t,s,i)},sa.copyNode=function(e){var t=new ta(this,e.start,this.startLoc);for(var s in e)t[s]=e[s];return t};var na=function(e,t,s,i,n){this.token=e,this.isExpr=!!t,this.preserveSpace=!!s,this.override=i,this.generator=!!n;},ra={b_stat:new na("{",!1),b_expr:new na("{",!0),b_tmpl:new na("${",!1),p_stat:new na("(",!1),p_expr:new na("(",!0),q_tmpl:new na("`",!0,!0,(function(e){return e.tryReadTemplateToken()})),f_stat:new na("function",!1),f_expr:new na("function",!0),f_expr_gen:new na("function",!0,!1,null,!0),f_gen:new na("function",!1,!1,null,!0)},aa=Vr.prototype;aa.initialContext=function(){return [ra.b_stat]},aa.braceIsBlock=function(e){var t=this.curContext();return t===ra.f_expr||t===ra.f_stat||(e!==Er.colon||t!==ra.b_stat&&t!==ra.b_expr?e===Er._return||e===Er.name&&this.exprAllowed?vr.test(this.input.slice(this.lastTokEnd,this.start)):e===Er._else||e===Er.semi||e===Er.eof||e===Er.parenR||e===Er.arrow||(e===Er.braceL?t===ra.b_stat:e!==Er._var&&e!==Er._const&&e!==Er.name&&!this.exprAllowed):!t.isExpr)},aa.inGeneratorContext=function(){for(var e=this.context.length-1;e>=1;e--){var t=this.context[e];if("function"===t.token)return t.generator}return !1},aa.updateContext=function(e){var t,s=this.type;s.keyword&&e===Er.dot?this.exprAllowed=!1:(t=s.updateContext)?t.call(this,e):this.exprAllowed=s.beforeExpr;},Er.parenR.updateContext=Er.braceR.updateContext=function(){if(1!==this.context.length){var e=this.context.pop();e===ra.b_stat&&"function"===this.curContext().token&&(e=this.context.pop()),this.exprAllowed=!e.isExpr;}else this.exprAllowed=!0;},Er.braceL.updateContext=function(e){this.context.push(this.braceIsBlock(e)?ra.b_stat:ra.b_expr),this.exprAllowed=!0;},Er.dollarBraceL.updateContext=function(){this.context.push(ra.b_tmpl),this.exprAllowed=!0;},Er.parenL.updateContext=function(e){var t=e===Er._if||e===Er._for||e===Er._with||e===Er._while;this.context.push(t?ra.p_stat:ra.p_expr),this.exprAllowed=!0;},Er.incDec.updateContext=function(){},Er._function.updateContext=Er._class.updateContext=function(e){!e.beforeExpr||e===Er._else||e===Er.semi&&this.curContext()!==ra.p_stat||e===Er._return&&vr.test(this.input.slice(this.lastTokEnd,this.start))||(e===Er.colon||e===Er.braceL)&&this.curContext()===ra.b_stat?this.context.push(ra.f_stat):this.context.push(ra.f_expr),this.exprAllowed=!1;},Er.backQuote.updateContext=function(){this.curContext()===ra.q_tmpl?this.context.pop():this.context.push(ra.q_tmpl),this.exprAllowed=!1;},Er.star.updateContext=function(e){if(e===Er._function){var t=this.context.length-1;this.context[t]===ra.f_expr?this.context[t]=ra.f_expr_gen:this.context[t]=ra.f_gen;}this.exprAllowed=!0;},Er.name.updateContext=function(e){var t=!1;this.options.ecmaVersion>=6&&e!==Er.dot&&("of"===this.value&&!this.exprAllowed||"yield"===this.value&&this.inGeneratorContext())&&(t=!0),this.exprAllowed=t;};var oa="ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS",ha=oa+" Extended_Pictographic",la={9:oa,10:ha,11:ha,12:"ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS Extended_Pictographic EBase EComp EMod EPres ExtPict"},ca="Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu",ua="Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb",da=ua+" Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd",pa=da+" Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho",fa={9:ua,10:da,11:pa,12:"Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi"},ma={};function ga(e){var t=ma[e]={binary:Ir(la[e]+" "+ca),nonBinary:{General_Category:Ir(ca),Script:Ir(fa[e])}};t.nonBinary.Script_Extensions=t.nonBinary.Script,t.nonBinary.gc=t.nonBinary.General_Category,t.nonBinary.sc=t.nonBinary.Script,t.nonBinary.scx=t.nonBinary.Script_Extensions;}ga(9),ga(10),ga(11),ga(12);var ya=Vr.prototype,xa=function(e){this.parser=e,this.validFlags="gim"+(e.options.ecmaVersion>=6?"uy":"")+(e.options.ecmaVersion>=9?"s":""),this.unicodeProperties=ma[e.options.ecmaVersion>=12?12:e.options.ecmaVersion],this.source="",this.flags="",this.start=0,this.switchU=!1,this.switchN=!1,this.pos=0,this.lastIntValue=0,this.lastStringValue="",this.lastAssertionIsQuantifiable=!1,this.numCapturingParens=0,this.maxBackReference=0,this.groupNames=[],this.backReferenceNames=[];};function Ea(e){return e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(55296+(e>>10),56320+(1023&e)))}function va(e){return 36===e||e>=40&&e<=43||46===e||63===e||e>=91&&e<=94||e>=123&&e<=125}function ba(e){return e>=65&&e<=90||e>=97&&e<=122}function Sa(e){return ba(e)||95===e}function Aa(e){return Sa(e)||Pa(e)}function Pa(e){return e>=48&&e<=57}function Ca(e){return e>=48&&e<=57||e>=65&&e<=70||e>=97&&e<=102}function Na(e){return e>=65&&e<=70?e-65+10:e>=97&&e<=102?e-97+10:e-48}function ka(e){return e>=48&&e<=55}xa.prototype.reset=function(e,t,s){var i=-1!==s.indexOf("u");this.start=0|e,this.source=t+"",this.flags=s,this.switchU=i&&this.parser.options.ecmaVersion>=6,this.switchN=i&&this.parser.options.ecmaVersion>=9;},xa.prototype.raise=function(e){this.parser.raiseRecoverable(this.start,"Invalid regular expression: /"+this.source+"/: "+e);},xa.prototype.at=function(e,t){void 0===t&&(t=!1);var s=this.source,i=s.length;if(e>=i)return -1;var n=s.charCodeAt(e);if(!t&&!this.switchU||n<=55295||n>=57344||e+1>=i)return n;var r=s.charCodeAt(e+1);return r>=56320&&r<=57343?(n<<10)+r-56613888:n},xa.prototype.nextIndex=function(e,t){void 0===t&&(t=!1);var s=this.source,i=s.length;if(e>=i)return i;var n,r=s.charCodeAt(e);return !t&&!this.switchU||r<=55295||r>=57344||e+1>=i||(n=s.charCodeAt(e+1))<56320||n>57343?e+1:e+2},xa.prototype.current=function(e){return void 0===e&&(e=!1),this.at(this.pos,e)},xa.prototype.lookahead=function(e){return void 0===e&&(e=!1),this.at(this.nextIndex(this.pos,e),e)},xa.prototype.advance=function(e){void 0===e&&(e=!1),this.pos=this.nextIndex(this.pos,e);},xa.prototype.eat=function(e,t){return void 0===t&&(t=!1),this.current(t)===e&&(this.advance(t),!0)},ya.validateRegExpFlags=function(e){for(var t=e.validFlags,s=e.flags,i=0;i<s.length;i++){var n=s.charAt(i);-1===t.indexOf(n)&&this.raise(e.start,"Invalid regular expression flag"),s.indexOf(n,i+1)>-1&&this.raise(e.start,"Duplicate regular expression flag");}},ya.validateRegExpPattern=function(e){this.regexp_pattern(e),!e.switchN&&this.options.ecmaVersion>=9&&e.groupNames.length>0&&(e.switchN=!0,this.regexp_pattern(e));},ya.regexp_pattern=function(e){e.pos=0,e.lastIntValue=0,e.lastStringValue="",e.lastAssertionIsQuantifiable=!1,e.numCapturingParens=0,e.maxBackReference=0,e.groupNames.length=0,e.backReferenceNames.length=0,this.regexp_disjunction(e),e.pos!==e.source.length&&(e.eat(41)&&e.raise("Unmatched ')'"),(e.eat(93)||e.eat(125))&&e.raise("Lone quantifier brackets")),e.maxBackReference>e.numCapturingParens&&e.raise("Invalid escape");for(var t=0,s=e.backReferenceNames;t<s.length;t+=1){var i=s[t];-1===e.groupNames.indexOf(i)&&e.raise("Invalid named capture referenced");}},ya.regexp_disjunction=function(e){for(this.regexp_alternative(e);e.eat(124);)this.regexp_alternative(e);this.regexp_eatQuantifier(e,!0)&&e.raise("Nothing to repeat"),e.eat(123)&&e.raise("Lone quantifier brackets");},ya.regexp_alternative=function(e){for(;e.pos<e.source.length&&this.regexp_eatTerm(e););},ya.regexp_eatTerm=function(e){return this.regexp_eatAssertion(e)?(e.lastAssertionIsQuantifiable&&this.regexp_eatQuantifier(e)&&e.switchU&&e.raise("Invalid quantifier"),!0):!!(e.switchU?this.regexp_eatAtom(e):this.regexp_eatExtendedAtom(e))&&(this.regexp_eatQuantifier(e),!0)},ya.regexp_eatAssertion=function(e){var t=e.pos;if(e.lastAssertionIsQuantifiable=!1,e.eat(94)||e.eat(36))return !0;if(e.eat(92)){if(e.eat(66)||e.eat(98))return !0;e.pos=t;}if(e.eat(40)&&e.eat(63)){var s=!1;if(this.options.ecmaVersion>=9&&(s=e.eat(60)),e.eat(61)||e.eat(33))return this.regexp_disjunction(e),e.eat(41)||e.raise("Unterminated group"),e.lastAssertionIsQuantifiable=!s,!0}return e.pos=t,!1},ya.regexp_eatQuantifier=function(e,t){return void 0===t&&(t=!1),!!this.regexp_eatQuantifierPrefix(e,t)&&(e.eat(63),!0)},ya.regexp_eatQuantifierPrefix=function(e,t){return e.eat(42)||e.eat(43)||e.eat(63)||this.regexp_eatBracedQuantifier(e,t)},ya.regexp_eatBracedQuantifier=function(e,t){var s=e.pos;if(e.eat(123)){var i=0,n=-1;if(this.regexp_eatDecimalDigits(e)&&(i=e.lastIntValue,e.eat(44)&&this.regexp_eatDecimalDigits(e)&&(n=e.lastIntValue),e.eat(125)))return -1!==n&&n<i&&!t&&e.raise("numbers out of order in {} quantifier"),!0;e.switchU&&!t&&e.raise("Incomplete quantifier"),e.pos=s;}return !1},ya.regexp_eatAtom=function(e){return this.regexp_eatPatternCharacters(e)||e.eat(46)||this.regexp_eatReverseSolidusAtomEscape(e)||this.regexp_eatCharacterClass(e)||this.regexp_eatUncapturingGroup(e)||this.regexp_eatCapturingGroup(e)},ya.regexp_eatReverseSolidusAtomEscape=function(e){var t=e.pos;if(e.eat(92)){if(this.regexp_eatAtomEscape(e))return !0;e.pos=t;}return !1},ya.regexp_eatUncapturingGroup=function(e){var t=e.pos;if(e.eat(40)){if(e.eat(63)&&e.eat(58)){if(this.regexp_disjunction(e),e.eat(41))return !0;e.raise("Unterminated group");}e.pos=t;}return !1},ya.regexp_eatCapturingGroup=function(e){if(e.eat(40)){if(this.options.ecmaVersion>=9?this.regexp_groupSpecifier(e):63===e.current()&&e.raise("Invalid group"),this.regexp_disjunction(e),e.eat(41))return e.numCapturingParens+=1,!0;e.raise("Unterminated group");}return !1},ya.regexp_eatExtendedAtom=function(e){return e.eat(46)||this.regexp_eatReverseSolidusAtomEscape(e)||this.regexp_eatCharacterClass(e)||this.regexp_eatUncapturingGroup(e)||this.regexp_eatCapturingGroup(e)||this.regexp_eatInvalidBracedQuantifier(e)||this.regexp_eatExtendedPatternCharacter(e)},ya.regexp_eatInvalidBracedQuantifier=function(e){return this.regexp_eatBracedQuantifier(e,!0)&&e.raise("Nothing to repeat"),!1},ya.regexp_eatSyntaxCharacter=function(e){var t=e.current();return !!va(t)&&(e.lastIntValue=t,e.advance(),!0)},ya.regexp_eatPatternCharacters=function(e){for(var t=e.pos,s=0;-1!==(s=e.current())&&!va(s);)e.advance();return e.pos!==t},ya.regexp_eatExtendedPatternCharacter=function(e){var t=e.current();return !(-1===t||36===t||t>=40&&t<=43||46===t||63===t||91===t||94===t||124===t)&&(e.advance(),!0)},ya.regexp_groupSpecifier=function(e){if(e.eat(63)){if(this.regexp_eatGroupName(e))return -1!==e.groupNames.indexOf(e.lastStringValue)&&e.raise("Duplicate capture group name"),void e.groupNames.push(e.lastStringValue);e.raise("Invalid group");}},ya.regexp_eatGroupName=function(e){if(e.lastStringValue="",e.eat(60)){if(this.regexp_eatRegExpIdentifierName(e)&&e.eat(62))return !0;e.raise("Invalid capture group name");}return !1},ya.regexp_eatRegExpIdentifierName=function(e){if(e.lastStringValue="",this.regexp_eatRegExpIdentifierStart(e)){for(e.lastStringValue+=Ea(e.lastIntValue);this.regexp_eatRegExpIdentifierPart(e);)e.lastStringValue+=Ea(e.lastIntValue);return !0}return !1},ya.regexp_eatRegExpIdentifierStart=function(e){var t=e.pos,s=this.options.ecmaVersion>=11,i=e.current(s);return e.advance(s),92===i&&this.regexp_eatRegExpUnicodeEscapeSequence(e,s)&&(i=e.lastIntValue),function(e){return ur(e,!0)||36===e||95===e}(i)?(e.lastIntValue=i,!0):(e.pos=t,!1)},ya.regexp_eatRegExpIdentifierPart=function(e){var t=e.pos,s=this.options.ecmaVersion>=11,i=e.current(s);return e.advance(s),92===i&&this.regexp_eatRegExpUnicodeEscapeSequence(e,s)&&(i=e.lastIntValue),function(e){return dr(e,!0)||36===e||95===e||8204===e||8205===e}(i)?(e.lastIntValue=i,!0):(e.pos=t,!1)},ya.regexp_eatAtomEscape=function(e){return !!(this.regexp_eatBackReference(e)||this.regexp_eatCharacterClassEscape(e)||this.regexp_eatCharacterEscape(e)||e.switchN&&this.regexp_eatKGroupName(e))||(e.switchU&&(99===e.current()&&e.raise("Invalid unicode escape"),e.raise("Invalid escape")),!1)},ya.regexp_eatBackReference=function(e){var t=e.pos;if(this.regexp_eatDecimalEscape(e)){var s=e.lastIntValue;if(e.switchU)return s>e.maxBackReference&&(e.maxBackReference=s),!0;if(s<=e.numCapturingParens)return !0;e.pos=t;}return !1},ya.regexp_eatKGroupName=function(e){if(e.eat(107)){if(this.regexp_eatGroupName(e))return e.backReferenceNames.push(e.lastStringValue),!0;e.raise("Invalid named reference");}return !1},ya.regexp_eatCharacterEscape=function(e){return this.regexp_eatControlEscape(e)||this.regexp_eatCControlLetter(e)||this.regexp_eatZero(e)||this.regexp_eatHexEscapeSequence(e)||this.regexp_eatRegExpUnicodeEscapeSequence(e,!1)||!e.switchU&&this.regexp_eatLegacyOctalEscapeSequence(e)||this.regexp_eatIdentityEscape(e)},ya.regexp_eatCControlLetter=function(e){var t=e.pos;if(e.eat(99)){if(this.regexp_eatControlLetter(e))return !0;e.pos=t;}return !1},ya.regexp_eatZero=function(e){return 48===e.current()&&!Pa(e.lookahead())&&(e.lastIntValue=0,e.advance(),!0)},ya.regexp_eatControlEscape=function(e){var t=e.current();return 116===t?(e.lastIntValue=9,e.advance(),!0):110===t?(e.lastIntValue=10,e.advance(),!0):118===t?(e.lastIntValue=11,e.advance(),!0):102===t?(e.lastIntValue=12,e.advance(),!0):114===t&&(e.lastIntValue=13,e.advance(),!0)},ya.regexp_eatControlLetter=function(e){var t=e.current();return !!ba(t)&&(e.lastIntValue=t%32,e.advance(),!0)},ya.regexp_eatRegExpUnicodeEscapeSequence=function(e,t){void 0===t&&(t=!1);var s,i=e.pos,n=t||e.switchU;if(e.eat(117)){if(this.regexp_eatFixedHexDigits(e,4)){var r=e.lastIntValue;if(n&&r>=55296&&r<=56319){var a=e.pos;if(e.eat(92)&&e.eat(117)&&this.regexp_eatFixedHexDigits(e,4)){var o=e.lastIntValue;if(o>=56320&&o<=57343)return e.lastIntValue=1024*(r-55296)+(o-56320)+65536,!0}e.pos=a,e.lastIntValue=r;}return !0}if(n&&e.eat(123)&&this.regexp_eatHexDigits(e)&&e.eat(125)&&((s=e.lastIntValue)>=0&&s<=1114111))return !0;n&&e.raise("Invalid unicode escape"),e.pos=i;}return !1},ya.regexp_eatIdentityEscape=function(e){if(e.switchU)return !!this.regexp_eatSyntaxCharacter(e)||!!e.eat(47)&&(e.lastIntValue=47,!0);var t=e.current();return !(99===t||e.switchN&&107===t)&&(e.lastIntValue=t,e.advance(),!0)},ya.regexp_eatDecimalEscape=function(e){e.lastIntValue=0;var t=e.current();if(t>=49&&t<=57){do{e.lastIntValue=10*e.lastIntValue+(t-48),e.advance();}while((t=e.current())>=48&&t<=57);return !0}return !1},ya.regexp_eatCharacterClassEscape=function(e){var t=e.current();if(function(e){return 100===e||68===e||115===e||83===e||119===e||87===e}(t))return e.lastIntValue=-1,e.advance(),!0;if(e.switchU&&this.options.ecmaVersion>=9&&(80===t||112===t)){if(e.lastIntValue=-1,e.advance(),e.eat(123)&&this.regexp_eatUnicodePropertyValueExpression(e)&&e.eat(125))return !0;e.raise("Invalid property name");}return !1},ya.regexp_eatUnicodePropertyValueExpression=function(e){var t=e.pos;if(this.regexp_eatUnicodePropertyName(e)&&e.eat(61)){var s=e.lastStringValue;if(this.regexp_eatUnicodePropertyValue(e)){var i=e.lastStringValue;return this.regexp_validateUnicodePropertyNameAndValue(e,s,i),!0}}if(e.pos=t,this.regexp_eatLoneUnicodePropertyNameOrValue(e)){var n=e.lastStringValue;return this.regexp_validateUnicodePropertyNameOrValue(e,n),!0}return !1},ya.regexp_validateUnicodePropertyNameAndValue=function(e,t,s){wr(e.unicodeProperties.nonBinary,t)||e.raise("Invalid property name"),e.unicodeProperties.nonBinary[t].test(s)||e.raise("Invalid property value");},ya.regexp_validateUnicodePropertyNameOrValue=function(e,t){e.unicodeProperties.binary.test(t)||e.raise("Invalid property name");},ya.regexp_eatUnicodePropertyName=function(e){var t=0;for(e.lastStringValue="";Sa(t=e.current());)e.lastStringValue+=Ea(t),e.advance();return ""!==e.lastStringValue},ya.regexp_eatUnicodePropertyValue=function(e){var t=0;for(e.lastStringValue="";Aa(t=e.current());)e.lastStringValue+=Ea(t),e.advance();return ""!==e.lastStringValue},ya.regexp_eatLoneUnicodePropertyNameOrValue=function(e){return this.regexp_eatUnicodePropertyValue(e)},ya.regexp_eatCharacterClass=function(e){if(e.eat(91)){if(e.eat(94),this.regexp_classRanges(e),e.eat(93))return !0;e.raise("Unterminated character class");}return !1},ya.regexp_classRanges=function(e){for(;this.regexp_eatClassAtom(e);){var t=e.lastIntValue;if(e.eat(45)&&this.regexp_eatClassAtom(e)){var s=e.lastIntValue;!e.switchU||-1!==t&&-1!==s||e.raise("Invalid character class"),-1!==t&&-1!==s&&t>s&&e.raise("Range out of order in character class");}}},ya.regexp_eatClassAtom=function(e){var t=e.pos;if(e.eat(92)){if(this.regexp_eatClassEscape(e))return !0;if(e.switchU){var s=e.current();(99===s||ka(s))&&e.raise("Invalid class escape"),e.raise("Invalid escape");}e.pos=t;}var i=e.current();return 93!==i&&(e.lastIntValue=i,e.advance(),!0)},ya.regexp_eatClassEscape=function(e){var t=e.pos;if(e.eat(98))return e.lastIntValue=8,!0;if(e.switchU&&e.eat(45))return e.lastIntValue=45,!0;if(!e.switchU&&e.eat(99)){if(this.regexp_eatClassControlLetter(e))return !0;e.pos=t;}return this.regexp_eatCharacterClassEscape(e)||this.regexp_eatCharacterEscape(e)},ya.regexp_eatClassControlLetter=function(e){var t=e.current();return !(!Pa(t)&&95!==t)&&(e.lastIntValue=t%32,e.advance(),!0)},ya.regexp_eatHexEscapeSequence=function(e){var t=e.pos;if(e.eat(120)){if(this.regexp_eatFixedHexDigits(e,2))return !0;e.switchU&&e.raise("Invalid escape"),e.pos=t;}return !1},ya.regexp_eatDecimalDigits=function(e){var t=e.pos,s=0;for(e.lastIntValue=0;Pa(s=e.current());)e.lastIntValue=10*e.lastIntValue+(s-48),e.advance();return e.pos!==t},ya.regexp_eatHexDigits=function(e){var t=e.pos,s=0;for(e.lastIntValue=0;Ca(s=e.current());)e.lastIntValue=16*e.lastIntValue+Na(s),e.advance();return e.pos!==t},ya.regexp_eatLegacyOctalEscapeSequence=function(e){if(this.regexp_eatOctalDigit(e)){var t=e.lastIntValue;if(this.regexp_eatOctalDigit(e)){var s=e.lastIntValue;t<=3&&this.regexp_eatOctalDigit(e)?e.lastIntValue=64*t+8*s+e.lastIntValue:e.lastIntValue=8*t+s;}else e.lastIntValue=t;return !0}return !1},ya.regexp_eatOctalDigit=function(e){var t=e.current();return ka(t)?(e.lastIntValue=t-48,e.advance(),!0):(e.lastIntValue=0,!1)},ya.regexp_eatFixedHexDigits=function(e,t){var s=e.pos;e.lastIntValue=0;for(var i=0;i<t;++i){var n=e.current();if(!Ca(n))return e.pos=s,!1;e.lastIntValue=16*e.lastIntValue+Na(n),e.advance();}return !0};var wa=function(e){this.type=e.type,this.value=e.value,this.start=e.start,this.end=e.end,e.options.locations&&(this.loc=new Tr(e,e.startLoc,e.endLoc)),e.options.ranges&&(this.range=[e.start,e.end]);},_a=Vr.prototype;function Ia(e){return "function"!=typeof BigInt?null:BigInt(e.replace(/_/g,""))}function $a(e){return e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(55296+(e>>10),56320+(1023&e)))}_a.next=function(e){!e&&this.type.keyword&&this.containsEsc&&this.raiseRecoverable(this.start,"Escape sequence in keyword "+this.type.keyword),this.options.onToken&&this.options.onToken(new wa(this)),this.lastTokEnd=this.end,this.lastTokStart=this.start,this.lastTokEndLoc=this.endLoc,this.lastTokStartLoc=this.startLoc,this.nextToken();},_a.getToken=function(){return this.next(),new wa(this)},"undefined"!=typeof Symbol&&(_a[Symbol.iterator]=function(){var e=this;return {next:function(){var t=e.getToken();return {done:t.type===Er.eof,value:t}}}}),_a.curContext=function(){return this.context[this.context.length-1]},_a.nextToken=function(){var e=this.curContext();return e&&e.preserveSpace||this.skipSpace(),this.start=this.pos,this.options.locations&&(this.startLoc=this.curPosition()),this.pos>=this.input.length?this.finishToken(Er.eof):e.override?e.override(this):void this.readToken(this.fullCharCodeAtPos())},_a.readToken=function(e){return ur(e,this.options.ecmaVersion>=6)||92===e?this.readWord():this.getTokenFromCode(e)},_a.fullCharCodeAtPos=function(){var e=this.input.charCodeAt(this.pos);return e<=55295||e>=57344?e:(e<<10)+this.input.charCodeAt(this.pos+1)-56613888},_a.skipBlockComment=function(){var e,t=this.options.onComment&&this.curPosition(),s=this.pos,i=this.input.indexOf("*/",this.pos+=2);if(-1===i&&this.raise(this.pos-2,"Unterminated comment"),this.pos=i+2,this.options.locations)for(br.lastIndex=s;(e=br.exec(this.input))&&e.index<this.pos;)++this.curLine,this.lineStart=e.index+e[0].length;this.options.onComment&&this.options.onComment(!0,this.input.slice(s+2,i),s,this.pos,t,this.curPosition());},_a.skipLineComment=function(e){for(var t=this.pos,s=this.options.onComment&&this.curPosition(),i=this.input.charCodeAt(this.pos+=e);this.pos<this.input.length&&!Sr(i);)i=this.input.charCodeAt(++this.pos);this.options.onComment&&this.options.onComment(!1,this.input.slice(t+e,this.pos),t,this.pos,s,this.curPosition());},_a.skipSpace=function(){e:for(;this.pos<this.input.length;){var e=this.input.charCodeAt(this.pos);switch(e){case 32:case 160:++this.pos;break;case 13:10===this.input.charCodeAt(this.pos+1)&&++this.pos;case 10:case 8232:case 8233:++this.pos,this.options.locations&&(++this.curLine,this.lineStart=this.pos);break;case 47:switch(this.input.charCodeAt(this.pos+1)){case 42:this.skipBlockComment();break;case 47:this.skipLineComment(2);break;default:break e}break;default:if(!(e>8&&e<14||e>=5760&&Ar.test(String.fromCharCode(e))))break e;++this.pos;}}},_a.finishToken=function(e,t){this.end=this.pos,this.options.locations&&(this.endLoc=this.curPosition());var s=this.type;this.type=e,this.value=t,this.updateContext(s);},_a.readToken_dot=function(){var e=this.input.charCodeAt(this.pos+1);if(e>=48&&e<=57)return this.readNumber(!0);var t=this.input.charCodeAt(this.pos+2);return this.options.ecmaVersion>=6&&46===e&&46===t?(this.pos+=3,this.finishToken(Er.ellipsis)):(++this.pos,this.finishToken(Er.dot))},_a.readToken_slash=function(){var e=this.input.charCodeAt(this.pos+1);return this.exprAllowed?(++this.pos,this.readRegexp()):61===e?this.finishOp(Er.assign,2):this.finishOp(Er.slash,1)},_a.readToken_mult_modulo_exp=function(e){var t=this.input.charCodeAt(this.pos+1),s=1,i=42===e?Er.star:Er.modulo;return this.options.ecmaVersion>=7&&42===e&&42===t&&(++s,i=Er.starstar,t=this.input.charCodeAt(this.pos+2)),61===t?this.finishOp(Er.assign,s+1):this.finishOp(i,s)},_a.readToken_pipe_amp=function(e){var t=this.input.charCodeAt(this.pos+1);if(t===e){if(this.options.ecmaVersion>=12)if(61===this.input.charCodeAt(this.pos+2))return this.finishOp(Er.assign,3);return this.finishOp(124===e?Er.logicalOR:Er.logicalAND,2)}return 61===t?this.finishOp(Er.assign,2):this.finishOp(124===e?Er.bitwiseOR:Er.bitwiseAND,1)},_a.readToken_caret=function(){return 61===this.input.charCodeAt(this.pos+1)?this.finishOp(Er.assign,2):this.finishOp(Er.bitwiseXOR,1)},_a.readToken_plus_min=function(e){var t=this.input.charCodeAt(this.pos+1);return t===e?45!==t||this.inModule||62!==this.input.charCodeAt(this.pos+2)||0!==this.lastTokEnd&&!vr.test(this.input.slice(this.lastTokEnd,this.pos))?this.finishOp(Er.incDec,2):(this.skipLineComment(3),this.skipSpace(),this.nextToken()):61===t?this.finishOp(Er.assign,2):this.finishOp(Er.plusMin,1)},_a.readToken_lt_gt=function(e){var t=this.input.charCodeAt(this.pos+1),s=1;return t===e?(s=62===e&&62===this.input.charCodeAt(this.pos+2)?3:2,61===this.input.charCodeAt(this.pos+s)?this.finishOp(Er.assign,s+1):this.finishOp(Er.bitShift,s)):33!==t||60!==e||this.inModule||45!==this.input.charCodeAt(this.pos+2)||45!==this.input.charCodeAt(this.pos+3)?(61===t&&(s=2),this.finishOp(Er.relational,s)):(this.skipLineComment(4),this.skipSpace(),this.nextToken())},_a.readToken_eq_excl=function(e){var t=this.input.charCodeAt(this.pos+1);return 61===t?this.finishOp(Er.equality,61===this.input.charCodeAt(this.pos+2)?3:2):61===e&&62===t&&this.options.ecmaVersion>=6?(this.pos+=2,this.finishToken(Er.arrow)):this.finishOp(61===e?Er.eq:Er.prefix,1)},_a.readToken_question=function(){var e=this.options.ecmaVersion;if(e>=11){var t=this.input.charCodeAt(this.pos+1);if(46===t){var s=this.input.charCodeAt(this.pos+2);if(s<48||s>57)return this.finishOp(Er.questionDot,2)}if(63===t){if(e>=12)if(61===this.input.charCodeAt(this.pos+2))return this.finishOp(Er.assign,3);return this.finishOp(Er.coalesce,2)}}return this.finishOp(Er.question,1)},_a.getTokenFromCode=function(e){switch(e){case 46:return this.readToken_dot();case 40:return ++this.pos,this.finishToken(Er.parenL);case 41:return ++this.pos,this.finishToken(Er.parenR);case 59:return ++this.pos,this.finishToken(Er.semi);case 44:return ++this.pos,this.finishToken(Er.comma);case 91:return ++this.pos,this.finishToken(Er.bracketL);case 93:return ++this.pos,this.finishToken(Er.bracketR);case 123:return ++this.pos,this.finishToken(Er.braceL);case 125:return ++this.pos,this.finishToken(Er.braceR);case 58:return ++this.pos,this.finishToken(Er.colon);case 96:if(this.options.ecmaVersion<6)break;return ++this.pos,this.finishToken(Er.backQuote);case 48:var t=this.input.charCodeAt(this.pos+1);if(120===t||88===t)return this.readRadixNumber(16);if(this.options.ecmaVersion>=6){if(111===t||79===t)return this.readRadixNumber(8);if(98===t||66===t)return this.readRadixNumber(2)}case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return this.readNumber(!1);case 34:case 39:return this.readString(e);case 47:return this.readToken_slash();case 37:case 42:return this.readToken_mult_modulo_exp(e);case 124:case 38:return this.readToken_pipe_amp(e);case 94:return this.readToken_caret();case 43:case 45:return this.readToken_plus_min(e);case 60:case 62:return this.readToken_lt_gt(e);case 61:case 33:return this.readToken_eq_excl(e);case 63:return this.readToken_question();case 126:return this.finishOp(Er.prefix,1)}this.raise(this.pos,"Unexpected character '"+$a(e)+"'");},_a.finishOp=function(e,t){var s=this.input.slice(this.pos,this.pos+t);return this.pos+=t,this.finishToken(e,s)},_a.readRegexp=function(){for(var e,t,s=this.pos;;){this.pos>=this.input.length&&this.raise(s,"Unterminated regular expression");var i=this.input.charAt(this.pos);if(vr.test(i)&&this.raise(s,"Unterminated regular expression"),e)e=!1;else {if("["===i)t=!0;else if("]"===i&&t)t=!1;else if("/"===i&&!t)break;e="\\"===i;}++this.pos;}var n=this.input.slice(s,this.pos);++this.pos;var r=this.pos,a=this.readWord1();this.containsEsc&&this.unexpected(r);var o=this.regexpState||(this.regexpState=new xa(this));o.reset(s,n,a),this.validateRegExpFlags(o),this.validateRegExpPattern(o);var h=null;try{h=new RegExp(n,a);}catch(e){}return this.finishToken(Er.regexp,{pattern:n,flags:a,value:h})},_a.readInt=function(e,t,s){for(var i=this.options.ecmaVersion>=12&&void 0===t,n=s&&48===this.input.charCodeAt(this.pos),r=this.pos,a=0,o=0,h=0,l=null==t?1/0:t;h<l;++h,++this.pos){var c=this.input.charCodeAt(this.pos),u=void 0;if(i&&95===c)n&&this.raiseRecoverable(this.pos,"Numeric separator is not allowed in legacy octal numeric literals"),95===o&&this.raiseRecoverable(this.pos,"Numeric separator must be exactly one underscore"),0===h&&this.raiseRecoverable(this.pos,"Numeric separator is not allowed at the first of digits"),o=c;else {if((u=c>=97?c-97+10:c>=65?c-65+10:c>=48&&c<=57?c-48:1/0)>=e)break;o=c,a=a*e+u;}}return i&&95===o&&this.raiseRecoverable(this.pos-1,"Numeric separator is not allowed at the last of digits"),this.pos===r||null!=t&&this.pos-r!==t?null:a},_a.readRadixNumber=function(e){var t=this.pos;this.pos+=2;var s=this.readInt(e);return null==s&&this.raise(this.start+2,"Expected number in radix "+e),this.options.ecmaVersion>=11&&110===this.input.charCodeAt(this.pos)?(s=Ia(this.input.slice(t,this.pos)),++this.pos):ur(this.fullCharCodeAtPos())&&this.raise(this.pos,"Identifier directly after number"),this.finishToken(Er.num,s)},_a.readNumber=function(e){var t=this.pos;e||null!==this.readInt(10,void 0,!0)||this.raise(t,"Invalid number");var s=this.pos-t>=2&&48===this.input.charCodeAt(t);s&&this.strict&&this.raise(t,"Invalid number");var i=this.input.charCodeAt(this.pos);if(!s&&!e&&this.options.ecmaVersion>=11&&110===i){var n=Ia(this.input.slice(t,this.pos));return ++this.pos,ur(this.fullCharCodeAtPos())&&this.raise(this.pos,"Identifier directly after number"),this.finishToken(Er.num,n)}s&&/[89]/.test(this.input.slice(t,this.pos))&&(s=!1),46!==i||s||(++this.pos,this.readInt(10),i=this.input.charCodeAt(this.pos)),69!==i&&101!==i||s||(43!==(i=this.input.charCodeAt(++this.pos))&&45!==i||++this.pos,null===this.readInt(10)&&this.raise(t,"Invalid number")),ur(this.fullCharCodeAtPos())&&this.raise(this.pos,"Identifier directly after number");var r,a=(r=this.input.slice(t,this.pos),s?parseInt(r,8):parseFloat(r.replace(/_/g,"")));return this.finishToken(Er.num,a)},_a.readCodePoint=function(){var e;if(123===this.input.charCodeAt(this.pos)){this.options.ecmaVersion<6&&this.unexpected();var t=++this.pos;e=this.readHexChar(this.input.indexOf("}",this.pos)-this.pos),++this.pos,e>1114111&&this.invalidStringToken(t,"Code point out of bounds");}else e=this.readHexChar(4);return e},_a.readString=function(e){for(var t="",s=++this.pos;;){this.pos>=this.input.length&&this.raise(this.start,"Unterminated string constant");var i=this.input.charCodeAt(this.pos);if(i===e)break;92===i?(t+=this.input.slice(s,this.pos),t+=this.readEscapedChar(!1),s=this.pos):(Sr(i,this.options.ecmaVersion>=10)&&this.raise(this.start,"Unterminated string constant"),++this.pos);}return t+=this.input.slice(s,this.pos++),this.finishToken(Er.string,t)};var Ta={};_a.tryReadTemplateToken=function(){this.inTemplateElement=!0;try{this.readTmplToken();}catch(e){if(e!==Ta)throw e;this.readInvalidTemplateToken();}this.inTemplateElement=!1;},_a.invalidStringToken=function(e,t){if(this.inTemplateElement&&this.options.ecmaVersion>=9)throw Ta;this.raise(e,t);},_a.readTmplToken=function(){for(var e="",t=this.pos;;){this.pos>=this.input.length&&this.raise(this.start,"Unterminated template");var s=this.input.charCodeAt(this.pos);if(96===s||36===s&&123===this.input.charCodeAt(this.pos+1))return this.pos!==this.start||this.type!==Er.template&&this.type!==Er.invalidTemplate?(e+=this.input.slice(t,this.pos),this.finishToken(Er.template,e)):36===s?(this.pos+=2,this.finishToken(Er.dollarBraceL)):(++this.pos,this.finishToken(Er.backQuote));if(92===s)e+=this.input.slice(t,this.pos),e+=this.readEscapedChar(!0),t=this.pos;else if(Sr(s)){switch(e+=this.input.slice(t,this.pos),++this.pos,s){case 13:10===this.input.charCodeAt(this.pos)&&++this.pos;case 10:e+="\n";break;default:e+=String.fromCharCode(s);}this.options.locations&&(++this.curLine,this.lineStart=this.pos),t=this.pos;}else ++this.pos;}},_a.readInvalidTemplateToken=function(){for(;this.pos<this.input.length;this.pos++)switch(this.input[this.pos]){case"\\":++this.pos;break;case"$":if("{"!==this.input[this.pos+1])break;case"`":return this.finishToken(Er.invalidTemplate,this.input.slice(this.start,this.pos))}this.raise(this.start,"Unterminated template");},_a.readEscapedChar=function(e){var t=this.input.charCodeAt(++this.pos);switch(++this.pos,t){case 110:return "\n";case 114:return "\r";case 120:return String.fromCharCode(this.readHexChar(2));case 117:return $a(this.readCodePoint());case 116:return "\t";case 98:return "\b";case 118:return "\v";case 102:return "\f";case 13:10===this.input.charCodeAt(this.pos)&&++this.pos;case 10:return this.options.locations&&(this.lineStart=this.pos,++this.curLine),"";case 56:case 57:if(this.strict&&this.invalidStringToken(this.pos-1,"Invalid escape sequence"),e){var s=this.pos-1;return this.invalidStringToken(s,"Invalid escape sequence in template string"),null}default:if(t>=48&&t<=55){var i=this.input.substr(this.pos-1,3).match(/^[0-7]+/)[0],n=parseInt(i,8);return n>255&&(i=i.slice(0,-1),n=parseInt(i,8)),this.pos+=i.length-1,t=this.input.charCodeAt(this.pos),"0"===i&&56!==t&&57!==t||!this.strict&&!e||this.invalidStringToken(this.pos-1-i.length,e?"Octal literal in template string":"Octal literal in strict mode"),String.fromCharCode(n)}return Sr(t)?"":String.fromCharCode(t)}},_a.readHexChar=function(e){var t=this.pos,s=this.readInt(16,e);return null===s&&this.invalidStringToken(t,"Bad character escape sequence"),s},_a.readWord1=function(){this.containsEsc=!1;for(var e="",t=!0,s=this.pos,i=this.options.ecmaVersion>=6;this.pos<this.input.length;){var n=this.fullCharCodeAtPos();if(dr(n,i))this.pos+=n<=65535?1:2;else {if(92!==n)break;this.containsEsc=!0,e+=this.input.slice(s,this.pos);var r=this.pos;117!==this.input.charCodeAt(++this.pos)&&this.invalidStringToken(this.pos,"Expecting Unicode escape sequence \\uXXXX"),++this.pos;var a=this.readCodePoint();(t?ur:dr)(a,i)||this.invalidStringToken(r,"Invalid Unicode escape"),e+=$a(a),s=this.pos;}t=!1;}return e+this.input.slice(s,this.pos)},_a.readWord=function(){var e=this.readWord1(),t=Er.name;return this.keywords.test(e)&&(t=yr[e]),this.finishToken(t,e)};Vr.acorn={Parser:Vr,version:"8.0.4",defaultOptions:Lr,Position:$r,SourceLocation:Tr,getLineInfo:Mr,Node:ta,TokenType:pr,tokTypes:Er,keywordTypes:yr,TokContext:na,tokContexts:ra,isIdentifierChar:dr,isIdentifierStart:ur,Token:wa,isNewLine:Sr,lineBreak:vr,lineBreakG:br,nonASCIIwhitespace:Ar};var Ma=Object.freeze({__proto__:null,Node:ta,Parser:Vr,Position:$r,SourceLocation:Tr,TokContext:na,Token:wa,TokenType:pr,defaultOptions:Lr,getLineInfo:Mr,isIdentifierChar:dr,isIdentifierStart:ur,isNewLine:Sr,keywordTypes:yr,lineBreak:vr,lineBreakG:br,nonASCIIwhitespace:Ar,parse:function(e,t){return Vr.parse(e,t)},parseExpressionAt:function(e,t,s){return Vr.parseExpressionAt(e,t,s)},tokContexts:ra,tokTypes:Er,tokenizer:function(e,t){return Vr.tokenizer(e,t)},version:"8.0.4"});class La extends qe{constructor(){super(),this.variables.set("undefined",new Pt);}findVariable(e){let t=this.variables.get(e);return t||(t=new xt(e),this.variables.set(e,t)),t}}const Ra=e=>(...t)=>{throw Object.assign(new Error(`Cannot access the file system (via "fs.${e}") when using the browser build of Rollup. Make sure you supply a plugin with custom resolveId and load hooks to Rollup.`),{code:"NO_FS_IN_BROWSER",url:"https://rollupjs.org/guide/en/#a-simple-example"})},Oa=Ra("lstatSync"),Da=Ra("readdirSync"),Va=Ra("readFile"),Ba=Ra("realpathSync"),Fa=Ra("writeFile");async function Wa(e,t,s,i,n,r){const a=await i.hookFirst("resolveId",[e,t,{custom:r}],null,n);return null!=a?a:void 0===t||Le(e)||"."===e[0]?function(e,t){let s=Ua(e,t);return s||(s=Ua(e+".mjs",t),s||(s=Ua(e+".js",t),s))}(We(t?Ve(t):We(),e),s):null}function Ua(e,t){try{const s=Oa(e);if(!t&&s.isSymbolicLink())return Ua(Ba(e),t);if(t&&s.isSymbolicLink()||s.isFile()){const t=De(e);if(-1!==Da(Ve(e)).indexOf(t))return e}}catch(e){}}function za(e,t,{hook:s,id:i}={}){return "string"==typeof e&&(e={message:e}),e.code&&e.code!==ns.PLUGIN_ERROR&&(e.pluginCode=e.code),e.code=ns.PLUGIN_ERROR,e.plugin=t,s&&(e.hook=s),i&&(e.id=i),ss(e)}const ja=[{active:!0,deprecated:"resolveAssetUrl",replacement:"resolveFileUrl"}];const Ga={has:()=>!1,get(){},set(){},delete:()=>!1};function Ha(e){return e.startsWith("at position ")||e.startsWith("at output position ")?ss({code:"ANONYMOUS_PLUGIN_CACHE",message:"A plugin is trying to use the Rollup cache but is not declaring a plugin name or cacheKey."}):ss({code:"DUPLICATE_PLUGIN_NAME",message:`The plugin name ${e} is being used twice in the same build. Plugin names must be distinct or provide a cacheKey (please post an issue to the plugin if you are a plugin user).`})}function qa(e,t,s,i){const n=t.id,r=[];let a=null===e.map?null:Mn(e.map);const o=e.code;let h=e.ast;const c=[],u=[];let d=!1;const p=()=>d=!0;let f;const m=e.code;return s.hookReduceArg0("transform",[m,n],(function(e,s,n){let a,o;if("string"==typeof s)a=s;else {if(!s||"object"!=typeof s)return e;if(t.updateOptions(s),null==s.code)return (s.map||s.ast)&&i((l=n.name,{code:ns.NO_TRANSFORM_MAP_OR_AST_WITHOUT_CODE,message:`The plugin "${l}" returned a "map" or "ast" without returning a "code". This will be ignored.`})),e;({code:a,map:o,ast:h}=s);}var l;return null!==o&&r.push(Mn("string"==typeof o?JSON.parse(o):o)||{missing:!0,plugin:n.name}),a}),((e,t)=>{return f=t,{...e,cache:d?e.cache:(h=e.cache,g=p,{has:e=>(g(),h.has(e)),get:e=>(g(),h.get(e)),set:(e,t)=>(g(),h.set(e,t)),delete:e=>(g(),h.delete(e))}),warn(t,s){"string"==typeof t&&(t={message:t}),s&&is(t,s,m,n),t.id=n,t.hook="transform",e.warn(t);},error:(t,s)=>("string"==typeof t&&(t={message:t}),s&&is(t,s,m,n),t.id=n,t.hook="transform",e.error(t)),emitAsset:(t,s)=>(u.push({type:"asset",name:t,source:s}),e.emitAsset(t,s)),emitChunk:(t,s)=>(u.push({type:"chunk",id:t,name:s&&s.name}),e.emitChunk(t,s)),emitFile:e=>(u.push(e),s.emitFile(e)),addWatchFile(t){c.push(t),e.addWatchFile(t);},setAssetSource(){return this.error({code:"INVALID_SETASSETSOURCE",message:"setAssetSource cannot be called in transform for caching reasons. Use emitFile with a source, or call setAssetSource in another hook."})},getCombinedSourcemap(){const e=function(e,t,s,i,n){return i.length?{version:3,...Wi(e,t,s,i,Fi(n)).traceMappings()}:s}(n,o,a,r,i);if(!e){return new x(o).generateMap({includeContent:!0,hires:!0,source:n})}return a!==e&&(a=e,r.length=0),new l({...e,file:null,sourcesContent:e.sourcesContent})}};var h,g;})).catch((e=>za(e,f.name,{hook:"transform",id:n}))).then((e=>(d||u.length&&(t.transformFiles=u),{ast:h,code:e,customTransformCache:d,meta:t.info.meta,originalCode:o,originalSourcemap:a,sourcemapChain:r,transformDependencies:c})))}class Ka{constructor(e,t,s,i){this.graph=e,this.modulesById=t,this.options=s,this.pluginDriver=i,this.implicitEntryModules=new Set,this.indexedEntryModules=[],this.latestLoadModulesPromise=Promise.resolve(),this.nextEntryModuleIndex=0,this.hasModuleSideEffects=s.treeshake?s.treeshake.moduleSideEffects:()=>!0;}async addAdditionalModules(e){const t=this.extendLoadModulesPromise(Promise.all(e.map((e=>this.loadEntryModule(e,!1,void 0,null)))));return await this.awaitLoadModulesPromise(),t}async addEntryModules(e,t){const s=this.nextEntryModuleIndex;this.nextEntryModuleIndex+=e.length;const i=await this.extendLoadModulesPromise(Promise.all(e.map((({id:e,importer:t})=>this.loadEntryModule(e,!0,t,null)))).then((i=>{let n=s;for(let s=0;s<i.length;s++){const r=i[s];r.isUserDefinedEntryPoint=r.isUserDefinedEntryPoint||t,Ya(r,e[s],t);const a=this.indexedEntryModules.find((e=>e.module===r));a?a.index=Math.min(a.index,n):this.indexedEntryModules.push({module:r,index:n}),n++;}return this.indexedEntryModules.sort((({index:e},{index:t})=>e>t?1:-1)),i})));return await this.awaitLoadModulesPromise(),{entryModules:this.indexedEntryModules.map((({module:e})=>e)),implicitEntryModules:[...this.implicitEntryModules],newEntryModules:i}}async emitChunk({fileName:e,id:t,importer:s,name:i,implicitlyLoadedAfterOneOf:n,preserveSignature:r}){const a={fileName:e||null,id:t,importer:s,name:i||null},o=n?await this.addEntryWithImplicitDependants(a,n):(await this.addEntryModules([a],!1)).newEntryModules[0];return null!=r&&(o.preserveSignature=r),o}async resolveId(e,t,s,i=null){return this.addDefaultsToResolvedId(this.getNormalizedResolvedIdWithoutDefaults(!this.options.external(e,t,!1)&&await Wa(e,t,this.options.preserveSymlinks,this.pluginDriver,i,s),t,e))}addDefaultsToResolvedId(e){var t,s;if(!e)return null;const i=e.external||!1;return {external:i,id:e.id,meta:e.meta||Pe,moduleSideEffects:null!==(t=e.moduleSideEffects)&&void 0!==t?t:this.hasModuleSideEffects(e.id,i),syntheticNamedExports:null!==(s=e.syntheticNamedExports)&&void 0!==s&&s}}addEntryWithImplicitDependants(e,t){return this.extendLoadModulesPromise(this.loadEntryModule(e.id,!1,e.importer,null).then((async s=>{if(Ya(s,e,!1),!s.info.isEntry){this.implicitEntryModules.add(s);const i=await Promise.all(t.map((t=>this.loadEntryModule(t,!1,e.importer,s.id))));for(const e of i)s.implicitlyLoadedAfter.add(e);for(const e of s.implicitlyLoadedAfter)e.implicitlyLoadedBefore.add(s);}return s})))}async addModuleSource(e,t,s){var i;let n;_i("load modules",3);try{n=null!==(i=await this.pluginDriver.hookFirst("load",[e]))&&void 0!==i?i:await Va(e);}catch(s){Ii("load modules",3);let i=`Could not load ${e}`;throw t&&(i+=` (imported by ${es(t)})`),i+=`: ${s.message}`,s.message=i,s}Ii("load modules",3);const r="string"==typeof n?{code:n}:"object"==typeof n&&"string"==typeof n.code?n:ss(function(e){return {code:ns.BAD_LOADER,message:`Error loading ${es(e)}: plugin load hook should return a string, a { code, map } object, or nothing/null`}}(e)),a=this.graph.cachedModules.get(e);if(a&&!a.customTransformCache&&a.originalCode===r.code){if(a.transformFiles)for(const e of a.transformFiles)this.pluginDriver.emitFile(e);s.setSource(a);}else s.updateOptions(r),s.setSource(await qa(r,s,this.pluginDriver,this.options.onwarn));}async awaitLoadModulesPromise(){let e;do{e=this.latestLoadModulesPromise,await e;}while(e!==this.latestLoadModulesPromise)}extendLoadModulesPromise(e){return this.latestLoadModulesPromise=Promise.all([e,this.latestLoadModulesPromise]),this.latestLoadModulesPromise.catch((()=>{})),e}async fetchDynamicDependencies(e){const t=await Promise.all(e.dynamicImports.map((async t=>{const s=await this.resolveDynamicImport(e,"string"==typeof t.argument?t.argument:t.argument.esTreeNode,e.id);return null===s?null:"string"==typeof s?(t.resolution=s,null):t.resolution=await this.fetchResolvedDependency(es(s.id),e.id,s)})));for(const s of t)s&&(e.dynamicDependencies.add(s),s.dynamicImporters.push(e.id));}async fetchModule({id:e,meta:t,moduleSideEffects:s,syntheticNamedExports:i},n,r){const a=this.modulesById.get(e);if(a instanceof Di){if(r){a.info.isEntry=!0,this.implicitEntryModules.delete(a);for(const e of a.implicitlyLoadedAfter)e.implicitlyLoadedBefore.delete(a);a.implicitlyLoadedAfter.clear();}return a}const o=new Di(this.graph,e,this.options,r,s,i,t);return this.modulesById.set(e,o),this.graph.watchFiles[e]=!0,await this.addModuleSource(e,n,o),await this.pluginDriver.hookParallel("moduleParsed",[o.info]),await Promise.all([this.fetchStaticDependencies(o),this.fetchDynamicDependencies(o)]),o.linkImports(),o}fetchResolvedDependency(e,t,s){if(s.external){this.modulesById.has(s.id)||this.modulesById.set(s.id,new Ue(this.options,s.id,s.moduleSideEffects,s.meta));const i=this.modulesById.get(s.id);return i instanceof Ue?Promise.resolve(i):ss(function(e,t){return {code:ns.INVALID_EXTERNAL_ID,message:`'${e}' is imported as an external by ${es(t)}, but is already an existing non-external module id.`}}(e,t))}return this.fetchModule(s,t,!1)}async fetchStaticDependencies(e){for(const t of await Promise.all(Array.from(e.sources,(async t=>this.fetchResolvedDependency(t,e.id,e.resolvedIds[t]=e.resolvedIds[t]||this.handleResolveId(await this.resolveId(t,e.id,Pe),t,e.id))))))e.dependencies.add(t),t.importers.push(e.id);}getNormalizedResolvedIdWithoutDefaults(e,t,s){if(e){if("object"==typeof e)return {...e,external:e.external||this.options.external(e.id,t,!0)};const s=this.options.external(e,t,!0);return {external:s,id:s?Xa(e,t):e}}const i=Xa(s,t);return !1===e||this.options.external(i,t,!0)?{external:!0,id:i}:null}handleResolveId(e,t,s){return null===e?Re(t)?ss(function(e,t){return {code:ns.UNRESOLVED_IMPORT,message:`Could not resolve '${e}' from ${es(t)}`}}(t,s)):(this.options.onwarn(function(e,t){return {code:ns.UNRESOLVED_IMPORT,importer:es(t),message:`'${e}' is imported by ${es(t)}, but could not be resolved – treating it as an external dependency`,source:e,url:"https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency"}}(t,s)),{external:!0,id:t,meta:Pe,moduleSideEffects:this.hasModuleSideEffects(t,!0),syntheticNamedExports:!1}):(e.external&&e.syntheticNamedExports&&this.options.onwarn(function(e,t){return {code:ns.EXTERNAL_SYNTHETIC_EXPORTS,importer:es(t),message:`External '${e}' can not have 'syntheticNamedExports' enabled.`,source:e}}(t,s)),e)}async loadEntryModule(e,t,s,i){const n=await Wa(e,s,this.options.preserveSymlinks,this.pluginDriver,null,Pe);return null==n?ss(null===i?function(e){return {code:ns.UNRESOLVED_ENTRY,message:`Could not resolve entry module (${es(e)}).`}}(e):function(e,t){return {code:ns.MISSING_IMPLICIT_DEPENDANT,message:`Module "${es(e)}" that should be implicitly loaded before "${es(t)}" could not be resolved.`}}(e,i)):!1===n||"object"==typeof n&&n.external?ss(null===i?function(e){return {code:ns.UNRESOLVED_ENTRY,message:`Entry module cannot be external (${es(e)}).`}}(e):function(e,t){return {code:ns.MISSING_IMPLICIT_DEPENDANT,message:`Module "${es(e)}" that should be implicitly loaded before "${es(t)}" cannot be external.`}}(e,i)):this.fetchModule(this.addDefaultsToResolvedId("object"==typeof n?n:{id:n}),void 0,t)}async resolveDynamicImport(e,t,s){const i=await this.pluginDriver.hookFirst("resolveDynamicImport",[t,s]);return "string"!=typeof t?"string"==typeof i?i:i?{external:!1,moduleSideEffects:!0,...i}:null:null==i?e.resolvedIds[t]=e.resolvedIds[t]||this.handleResolveId(await this.resolveId(t,e.id,Pe),t,e.id):this.handleResolveId(this.addDefaultsToResolvedId(this.getNormalizedResolvedIdWithoutDefaults(i,s,t)),t,s)}}function Xa(e,t){return Re(e)?t?We(t,"..",e):We(e):e}function Ya(e,{fileName:t,name:s},i){null!==t?e.chunkFileNames.add(t):null!==s&&(null===e.chunkName&&(e.chunkName=s),i&&e.userChunkNames.add(s));}function Qa(e,t,s,i,n,r){let a=!1;return (...o)=>(a||(a=!0,us({message:`The "this.${t}" plugin context function used by plugin ${i} is deprecated. The "this.${s}" plugin context function should be used instead.`,plugin:i},n,r)),e(...o))}function Ja(e,t,s,i){const n=new Set;return (r,a)=>{let o,h=!0;if("string"!=typeof r.cacheKey&&(r.name.startsWith("at position ")||r.name.startsWith("at output position ")||n.has(r.name)?h=!1:n.add(r.name)),e)if(h){const t=r.cacheKey||r.name;c=e[t]||(e[t]=Object.create(null)),o={has(e){const t=c[e];return !!t&&(t[0]=0,!0)},get(e){const t=c[e];if(t)return t[0]=0,t[1]},set(e,t){c[e]=[0,t];},delete:e=>delete c[e]};}else l=r.name,o={has:()=>Ha(l),get:()=>Ha(l),set:()=>Ha(l),delete:()=>Ha(l)};else o=Ga;var l,c;return {addWatchFile(e){if(t.phase>=zn.GENERATE)return this.error({code:ns.INVALID_ROLLUP_PHASE,message:"Cannot call addWatchFile after the build has finished."});t.watchFiles[e]=!0;},cache:o,emitAsset:Qa(((e,t)=>i.emitFile({type:"asset",name:e,source:t})),"emitAsset","emitFile",r.name,!0,s),emitChunk:Qa(((e,t)=>i.emitFile({type:"chunk",id:e,name:t&&t.name})),"emitChunk","emitFile",r.name,!0,s),emitFile:i.emitFile,error:e=>za(e,r.name),getAssetFileName:Qa(i.getFileName,"getAssetFileName","getFileName",r.name,!0,s),getChunkFileName:Qa(i.getFileName,"getChunkFileName","getFileName",r.name,!0,s),getFileName:i.getFileName,getModuleIds:()=>t.modulesById.keys(),getModuleInfo:t.getModuleInfo,getWatchFiles:()=>Object.keys(t.watchFiles),isExternal:Qa(((e,t,i=!1)=>s.external(e,t,i)),"isExternal","resolve",r.name,!0,s),meta:{rollupVersion:"2.34.2",watchMode:t.watchMode},get moduleIds(){const e=t.modulesById.keys();return function*(){us({message:`Accessing "this.moduleIds" on the plugin context by plugin ${r.name} is deprecated. The "this.getModuleIds" plugin context function should be used instead.`,plugin:r.name},!1,s),yield*e;}()},parse:t.contextParse,resolve:(e,s,{custom:i,skipSelf:n}=Ae)=>t.moduleLoader.resolveId(e,s,i,n?a:null),resolveId:Qa(((e,s)=>t.moduleLoader.resolveId(e,s,Ae).then((e=>e&&e.id))),"resolveId","resolve",r.name,!0,s),setAssetSource:i.setAssetSource,warn(e){"string"==typeof e&&(e={message:e}),e.code&&(e.pluginCode=e.code),e.code="PLUGIN_WARNING",e.plugin=r.name,s.onwarn(e);}}}}const Za=Object.keys({buildEnd:1,buildStart:1,closeWatcher:1,load:1,moduleParsed:1,options:1,resolveDynamicImport:1,resolveId:1,transform:1,watchChange:1});function eo(e,t){return ss({code:"INVALID_PLUGIN_HOOK",message:`Error running plugin hook ${e} for ${t}, expected a function hook.`})}class to{constructor(e,t,s,i,n){if(this.graph=e,this.options=t,function(e,t){for(const{active:s,deprecated:i,replacement:n}of ja)for(const r of e)i in r&&us({message:`The "${i}" hook used by plugin ${r.name} is deprecated. The "${n}" hook should be used instead.`,plugin:r.name},s,t);}(s,t),this.pluginCache=i,this.fileEmitter=new Xn(e,t,n&&n.fileEmitter),this.emitFile=this.fileEmitter.emitFile,this.getFileName=this.fileEmitter.getFileName,this.finaliseAssets=this.fileEmitter.assertAssetsFinalized,this.setOutputBundle=this.fileEmitter.setOutputBundle,this.plugins=s.concat(n?n.plugins:[]),this.pluginContexts=this.plugins.map(Ja(i,e,t,this.fileEmitter)),n)for(const e of s)for(const s of Za)s in e&&t.onwarn((r=e.name,a=s,{code:ns.INPUT_HOOK_IN_OUTPUT_PLUGIN,message:`The "${a}" hook used by the output plugin ${r} is a build time hook and will not be run for that plugin. Either this plugin cannot be used as an output plugin, or it should have an option to configure it as an output plugin.`}));var r,a;}createOutputPluginDriver(e){return new to(this.graph,this.options,e,this.pluginCache,this)}hookFirst(e,t,s,i){let n=Promise.resolve(void 0);for(let r=0;r<this.plugins.length;r++)i!==r&&(n=n.then((i=>null!=i?i:this.runHook(e,t,r,!1,s))));return n}hookFirstSync(e,t,s){for(let i=0;i<this.plugins.length;i++){const n=this.runHookSync(e,t,i,s);if(null!=n)return n}return null}hookParallel(e,t,s){const i=[];for(let n=0;n<this.plugins.length;n++){const r=this.runHook(e,t,n,!1,s);r&&i.push(r);}return Promise.all(i).then((()=>{}))}hookReduceArg0(e,[t,...s],i,n){let r=Promise.resolve(t);for(let t=0;t<this.plugins.length;t++)r=r.then((r=>{const a=[r,...s],o=this.runHook(e,a,t,!1,n);return o?o.then((e=>i.call(this.pluginContexts[t],r,e,this.plugins[t]))):r}));return r}hookReduceArg0Sync(e,[t,...s],i,n){for(let r=0;r<this.plugins.length;r++){const a=[t,...s],o=this.runHookSync(e,a,r,n);t=i.call(this.pluginContexts[r],t,o,this.plugins[r]);}return t}hookReduceValue(e,t,s,i,n){let r=Promise.resolve(t);for(let t=0;t<this.plugins.length;t++)r=r.then((r=>{const a=this.runHook(e,s,t,!0,n);return a?a.then((e=>i.call(this.pluginContexts[t],r,e,this.plugins[t]))):r}));return r}hookReduceValueSync(e,t,s,i,n){let r=t;for(let t=0;t<this.plugins.length;t++){const a=this.runHookSync(e,s,t,n);r=i.call(this.pluginContexts[t],r,a,this.plugins[t]);}return r}hookSeq(e,t,s){let i=Promise.resolve();for(let n=0;n<this.plugins.length;n++)i=i.then((()=>this.runHook(e,t,n,!1,s)));return i}hookSeqSync(e,t,s){for(let i=0;i<this.plugins.length;i++)this.runHookSync(e,t,i,s);}runHook(e,t,s,i,n){const r=this.plugins[s],a=r[e];if(!a)return;let o=this.pluginContexts[s];return n&&(o=n(o,r)),Promise.resolve().then((()=>"function"!=typeof a?i?a:eo(e,r.name):a.apply(o,t))).catch((t=>za(t,r.name,{hook:e})))}runHookSync(e,t,s,i){const n=this.plugins[s],r=n[e];if(!r)return;let a=this.pluginContexts[s];i&&(a=i(a,n));try{return "function"!=typeof r?eo(e,n.name):r.apply(a,t)}catch(t){return za(t,n.name,{hook:e})}}}class so{constructor(e,t){var s,i;if(this.options=e,this.entryModules=[],this.modulesById=new Map,this.needsTreeshakingPass=!1,this.phase=zn.LOAD_AND_PARSE,this.watchFiles=Object.create(null),this.watchMode=!1,this.externalModules=[],this.implicitEntryModules=[],this.modules=[],this.getModuleInfo=e=>{const t=this.modulesById.get(e);return t?t.info:null},this.deoptimizationTracker=new z,this.cachedModules=new Map,!1!==e.cache){if(null===(s=e.cache)||void 0===s?void 0:s.modules)for(const t of e.cache.modules)this.cachedModules.set(t.id,t);this.pluginCache=(null===(i=e.cache)||void 0===i?void 0:i.plugins)||Object.create(null);for(const e in this.pluginCache){const t=this.pluginCache[e];for(const e of Object.keys(t))t[e][0]++;}}if(this.contextParse=(e,t={})=>this.acornParser.parse(e,{...this.options.acorn,...t}),t){this.watchMode=!0;const e=(...e)=>this.pluginDriver.hookSeqSync("watchChange",e),s=()=>this.pluginDriver.hookSeqSync("closeWatcher",[]);t.on("change",e),t.on("close",s),t.once("restart",(()=>{t.removeListener("change",e),t.removeListener("close",s);}));}this.pluginDriver=new to(this,e,e.plugins,this.pluginCache),this.scope=new La,this.acornParser=Vr.extend(...e.acornInjectPlugins),this.moduleLoader=new Ka(this,this.modulesById,this.options,this.pluginDriver);}async build(){_i("generate module graph",2),await this.generateModuleGraph(),Ii("generate module graph",2),_i("sort modules",2),this.phase=zn.ANALYSE,this.sortModules(),Ii("sort modules",2),_i("mark included statements",2),this.includeStatements(),Ii("mark included statements",2),this.phase=zn.GENERATE;}getCache(){for(const e in this.pluginCache){const t=this.pluginCache[e];let s=!0;for(const e of Object.keys(t))t[e][0]>=this.options.experimentalCacheExpiry?delete t[e]:s=!1;s&&delete this.pluginCache[e];}return {modules:this.modules.map((e=>e.toJSON())),plugins:this.pluginCache}}async generateModuleGraph(){var e;if(({entryModules:this.entryModules,implicitEntryModules:this.implicitEntryModules}=await this.moduleLoader.addEntryModules((e=this.options.input,Array.isArray(e)?e.map((e=>({fileName:null,id:e,implicitlyLoadedAfter:[],importer:void 0,name:null}))):Object.keys(e).map((t=>({fileName:null,id:e[t],implicitlyLoadedAfter:[],importer:void 0,name:t})))),!0)),0===this.entryModules.length)throw new Error("You must supply options.input to rollup");for(const e of this.modulesById.values())e instanceof Di?this.modules.push(e):this.externalModules.push(e);}includeStatements(){for(const e of [...this.entryModules,...this.implicitEntryModules])!1!==e.preserveSignature?e.includeAllExports(!1):ze(e);if(this.options.treeshake){let e=1;do{_i(`treeshaking pass ${e}`,3),this.needsTreeshakingPass=!1;for(const e of this.modules)e.isExecuted&&("no-treeshake"===e.info.hasModuleSideEffects?e.includeAllInBundle():e.include());Ii("treeshaking pass "+e++,3);}while(this.needsTreeshakingPass)}else for(const e of this.modules)e.includeAllInBundle();for(const e of this.externalModules)e.warnUnusedImports();for(const e of this.implicitEntryModules)for(const t of e.implicitlyLoadedAfter)t.info.isEntry||t.isIncluded()||ss(as(t));}sortModules(){const{orderedModules:e,cyclePaths:t}=function(e){let t=0;const s=[],i=new Set,n=new Set,r=new Map,a=[],o=e=>{if(e instanceof Di){for(const t of e.dependencies)r.has(t)?i.has(t)||s.push(In(t,e,r)):(r.set(t,e),o(t));for(const t of e.implicitlyLoadedBefore)n.add(t);for(const{resolution:t}of e.dynamicImports)t instanceof Di&&n.add(t);a.push(e);}e.execIndex=t++,i.add(e);};for(const t of e)r.has(t)||(r.set(t,null),o(t));for(const e of n)r.has(e)||(r.set(e,null),o(e));return {orderedModules:a,cyclePaths:s}}(this.entryModules);for(const e of t)this.options.onwarn({code:"CIRCULAR_DEPENDENCY",cycle:e,importer:e[0],message:`Circular dependency: ${e.join(" -> ")}`});this.modules=e;for(const e of this.modules)e.bindReferences();this.warnForMissingExports();}warnForMissingExports(){for(const e of this.modules)for(const t of Object.keys(e.importDescriptions)){const s=e.importDescriptions[t];"*"===s.name||s.module.getVariableForExportName(s.name)||e.warn({code:"NON_EXISTENT_EXPORT",message:`Non-existent export '${s.name}' is imported from ${es(s.module.id)}`,name:s.name,source:s.module.id},s.start);}}}function io(e){return Array.isArray(e)?e.filter(Boolean):e?[e]:[]}var no=Gi(Ma);const ro=Object.getPrototypeOf||(e=>e.__proto__);var ao=function(e){if(e.prototype.parsePrivateName)return e;const t=(e=>{if(e.acorn)return e.acorn;const t=no;if(0!=t.version.indexOf("6.")&&0==t.version.indexOf("6.0.")&&0!=t.version.indexOf("7."))throw new Error(`acorn-private-class-elements requires acorn@^6.1.0 or acorn@7.0.0, not ${t.version}`);for(let s=e;s&&s!==t.Parser;s=ro(s))if(s!==t.Parser)throw new Error("acorn-private-class-elements does not support mixing different acorn copies");return t})(e);return (e=class extends e{_branch(){return this.__branch=this.__branch||new e({ecmaVersion:this.options.ecmaVersion},this.input),this.__branch.end=this.end,this.__branch.pos=this.pos,this.__branch.type=this.type,this.__branch.value=this.value,this.__branch.containsEsc=this.containsEsc,this.__branch}parsePrivateClassElementName(e){e.computed=!1,e.key=this.parsePrivateName(),"constructor"==e.key.name&&this.raise(e.key.start,"Classes may not have a private element named constructor");const t={get:"set",set:"get"}[e.kind],s=this._privateBoundNames;return Object.prototype.hasOwnProperty.call(s,e.key.name)&&s[e.key.name]!==t&&this.raise(e.start,"Duplicate private element"),s[e.key.name]=e.kind||!0,delete this._unresolvedPrivateNames[e.key.name],e.key}parsePrivateName(){const e=this.startNode();return e.name=this.value,this.next(),this.finishNode(e,"PrivateName"),"never"==this.options.allowReserved&&this.checkUnreserved(e),e}getTokenFromCode(e){if(35===e){++this.pos;const e=this.readWord1();return this.finishToken(this.privateNameToken,e)}return super.getTokenFromCode(e)}parseClass(e,t){const s=this._outerPrivateBoundNames;this._outerPrivateBoundNames=this._privateBoundNames,this._privateBoundNames=Object.create(this._privateBoundNames||null);const i=this._outerUnresolvedPrivateNames;this._outerUnresolvedPrivateNames=this._unresolvedPrivateNames,this._unresolvedPrivateNames=Object.create(null);const n=super.parseClass(e,t),r=this._unresolvedPrivateNames;if(this._privateBoundNames=this._outerPrivateBoundNames,this._outerPrivateBoundNames=s,this._unresolvedPrivateNames=this._outerUnresolvedPrivateNames,this._outerUnresolvedPrivateNames=i,this._unresolvedPrivateNames)Object.assign(this._unresolvedPrivateNames,r);else {const e=Object.keys(r);e.length&&(e.sort(((e,t)=>r[e]-r[t])),this.raise(r[e[0]],"Usage of undeclared private name"));}return n}parseClassSuper(e){const t=this._privateBoundNames;this._privateBoundNames=this._outerPrivateBoundNames;const s=this._unresolvedPrivateNames;this._unresolvedPrivateNames=this._outerUnresolvedPrivateNames;const i=super.parseClassSuper(e);return this._privateBoundNames=t,this._unresolvedPrivateNames=s,i}parseSubscript(e,s,i,n,r,a){const o=this.options.ecmaVersion>=11&&t.tokTypes.questionDot,h=this._branch();if(!(h.eat(t.tokTypes.dot)||o&&h.eat(t.tokTypes.questionDot))||h.type!=this.privateNameToken)return super.parseSubscript.apply(this,arguments);let l=!1;this.eat(t.tokTypes.dot)||(this.expect(t.tokTypes.questionDot),l=!0);let c=this.startNodeAt(s,i);return c.object=e,c.computed=!1,o&&(c.optional=l),this.type==this.privateNameToken?("Super"==e.type&&this.raise(this.start,"Cannot access private element on super"),c.property=this.parsePrivateName(),this._privateBoundNames&&this._privateBoundNames[c.property.name]||(this._unresolvedPrivateNames||this.raise(c.property.start,"Usage of undeclared private name"),this._unresolvedPrivateNames[c.property.name]=c.property.start)):c.property=this.parseIdent(!0),this.finishNode(c,"MemberExpression")}parseMaybeUnary(e,t){const s=super.parseMaybeUnary(e,t);return "delete"==s.operator&&"MemberExpression"==s.argument.type&&"PrivateName"==s.argument.property.type&&this.raise(s.start,"Private elements may not be deleted"),s}}).prototype.privateNameToken=new t.TokenType("privateName"),e},oo=function(e){const t=(e.acorn||no).tokTypes;return e=ao(e),class extends e{_maybeParseFieldValue(e){if(this.eat(t.eq)){const s=this._inFieldValue;this._inFieldValue=!0,this.type===t.name&&"await"===this.value&&(this.inAsync||this.options.allowAwaitOutsideFunction)?e.value=this.parseAwait():e.value=this.parseExpression(),this._inFieldValue=s;}else e.value=null;}parseClassElement(e){if(this.options.ecmaVersion>=8&&(this.type==t.name||this.type.keyword||this.type==this.privateNameToken||this.type==t.bracketL||this.type==t.string||this.type==t.num)){const e=this._branch();if(e.type==t.bracketL){let s=0;do{e.eat(t.bracketL)?++s:e.eat(t.bracketR)?--s:e.next();}while(s>0)}else e.next(!0);let s=e.type==t.eq||e.type==t.semi;if(!s&&e.canInsertSemicolon()&&(s=e.type!=t.parenL),s){const e=this.startNode();return this.type==this.privateNameToken?this.parsePrivateClassElementName(e):this.parsePropertyName(e),("Identifier"===e.key.type&&"constructor"===e.key.name||"Literal"===e.key.type&&"constructor"===e.key.value)&&this.raise(e.key.start,"Classes may not have a field called constructor"),this.enterScope(67),this._maybeParseFieldValue(e),this.exitScope(),this.finishNode(e,"FieldDefinition"),this.semicolon(),e}}return super.parseClassElement.apply(this,arguments)}parseIdent(e,t){const s=super.parseIdent(e,t);return this._inFieldValue&&"arguments"==s.name&&this.raise(s.start,"A class field initializer may not contain arguments"),s}}};var ho=function(e){const t=e.acorn||no;return t.version.startsWith("6.")&&!(t.version.startsWith("6.0.")||t.version.startsWith("6.1."))||t.version.startsWith("7.")?function(e,t){return class extends t{readInt(e,t){if(null!=t)return super.readInt(e,t);let s=this.pos,i=0,n=!1;for(;;){let t,s=this.input.charCodeAt(this.pos);if(s>=97)t=s-97+10;else {if(95==s){n||this.raise(this.pos,"Invalid numeric separator"),++this.pos,n=!1;continue}t=s>=65?s-65+10:s>=48&&s<=57?s-48:1/0;}if(t>=e)break;++this.pos,i=i*e+t,n=!0;}return this.pos===s?null:(n||this.raise(this.pos-1,"Invalid numeric separator"),i)}readNumber(t){let s=this.pos;t||null!==this.readInt(10)||this.raise(s,"Invalid number");let i=this.pos-s>=2&&48===this.input.charCodeAt(s),n=!1;i&&this.strict&&this.raise(s,"Invalid number");let r=this.input.charCodeAt(this.pos);if(!i&&!t&&this.options.ecmaVersion>=11&&110===r){let t=this.getNumberInput(s,this.pos),i="undefined"!=typeof BigInt?BigInt(t):null;return ++this.pos,e.isIdentifierStart(this.fullCharCodeAtPos())&&this.raise(this.pos,"Identifier directly after number"),this.finishToken(e.tokTypes.num,i)}i&&/[89]/.test(this.input.slice(s,this.pos))&&(i=!1,n=!0),46!==r||i||(++this.pos,this.readInt(10),r=this.input.charCodeAt(this.pos)),69!==r&&101!==r||i||(r=this.input.charCodeAt(++this.pos),43!==r&&45!==r||++this.pos,null===this.readInt(10)&&this.raise(s,"Invalid number")),e.isIdentifierStart(this.fullCharCodeAtPos())&&this.raise(this.pos,"Identifier directly after number");let a=this.getNumberInput(s,this.pos);(i||n)&&a.length<this.pos-s&&this.raise(s,"Invalid number");let o=i?parseInt(a,8):parseFloat(a);return this.finishToken(e.tokTypes.num,o)}parseLiteral(e){const t=super.parseLiteral(e);return t.bigint&&(t.bigint=t.bigint.replace(/_/g,"")),t}readRadixNumber(t){let s=this.pos;this.pos+=2;let i=this.readInt(t);if(null==i&&this.raise(this.start+2,`Expected number in radix ${t}`),this.options.ecmaVersion>=11&&110===this.input.charCodeAt(this.pos)){let e=this.getNumberInput(s,this.pos);i="undefined"!=typeof BigInt?BigInt(e):null,++this.pos;}else e.isIdentifierStart(this.fullCharCodeAtPos())&&this.raise(this.pos,"Identifier directly after number");return this.finishToken(e.tokTypes.num,i)}getNumberInput(e,t){return this.input.slice(e,t).replace(/_/g,"")}}}(t,e):function(e,t){return class extends t{readInt(e,t){if(null!=t)return super.readInt(e,t);let s=this.pos,i=0,n=!1;for(;;){let t,s=this.input.charCodeAt(this.pos);if(s>=97)t=s-97+10;else {if(95==s){n||this.raise(this.pos,"Invalid numeric separator"),++this.pos,n=!1;continue}t=s>=65?s-65+10:s>=48&&s<=57?s-48:1/0;}if(t>=e)break;++this.pos,i=i*e+t,n=!0;}return this.pos===s?null:(n||this.raise(this.pos-1,"Invalid numeric separator"),i)}readNumber(e){const t=super.readNumber(e);let s=this.end-this.start>=2&&48===this.input.charCodeAt(this.start);const i=this.getNumberInput(this.start,this.end);return i.length<this.end-this.start&&(s&&this.raise(this.start,"Invalid number"),this.value=parseFloat(i)),t}getNumberInput(e,t){return this.input.slice(e,t).replace(/_/g,"")}}}(0,e)},lo=function(e){const t=ao(e),s=(e.acorn||no).tokTypes;return class extends t{_maybeParseFieldValue(e){if(this.eat(s.eq)){const t=this._inStaticFieldScope;this._inStaticFieldScope=this.currentThisScope(),e.value=this.parseExpression(),this._inStaticFieldScope=t;}else e.value=null;}parseClassElement(e){if(this.options.ecmaVersion<8||!this.isContextual("static"))return super.parseClassElement.apply(this,arguments);const t=this._branch();if(t.next(),-1==[s.name,s.bracketL,s.string,s.num,this.privateNameToken].indexOf(t.type)&&!t.type.keyword)return super.parseClassElement.apply(this,arguments);if(t.type==s.bracketL){let e=0;do{t.eat(s.bracketL)?++e:t.eat(s.bracketR)?--e:t.next();}while(e>0)}else t.next();if(t.type!=s.eq&&!t.canInsertSemicolon()&&t.type!=s.semi)return super.parseClassElement.apply(this,arguments);const i=this.startNode();return i.static=this.eatContextual("static"),this.type==this.privateNameToken?this.parsePrivateClassElementName(i):this.parsePropertyName(i),("Identifier"===i.key.type&&"constructor"===i.key.name||"Literal"===i.key.type&&!i.computed&&"constructor"===i.key.value)&&this.raise(i.key.start,"Classes may not have a field called constructor"),"prototype"!==(i.key.name||i.key.value)||i.computed||this.raise(i.key.start,"Classes may not have a static property named prototype"),this.enterScope(67),this._maybeParseFieldValue(i),this.exitScope(),this.finishNode(i,"FieldDefinition"),this.semicolon(),i}parsePropertyName(e){e.static&&this.type==this.privateNameToken?this.parsePrivateClassElementName(e):super.parsePropertyName(e);}parseIdent(e,t){const s=super.parseIdent(e,t);return this._inStaticFieldScope&&this.currentThisScope()===this._inStaticFieldScope&&"arguments"==s.name&&this.raise(s.start,"A static class field initializer may not contain arguments"),s}}};const co=e=>console.warn(e.message||e);function uo(e,t,s,i,n=/$./){const r=new Set(t),a=Object.keys(e).filter((e=>!(r.has(e)||n.test(e))));a.length>0&&i({code:"UNKNOWN_OPTION",message:`Unknown ${s}: ${a.join(", ")}. Allowed options: ${[...r].sort().join(", ")}`});}const po=e=>e.onwarn?t=>{t.toString=()=>{let e="";return t.plugin&&(e+=`(${t.plugin} plugin) `),t.loc&&(e+=`${es(t.loc.file)} (${t.loc.line}:${t.loc.column}) `),e+=t.message,e},e.onwarn(t,co);}:co,fo=e=>({allowAwaitOutsideFunction:!0,ecmaVersion:"latest",preserveParens:!1,sourceType:"module",...e.acorn}),mo=e=>[oo,lo,ho,...io(e.acornInjectPlugins)],go=e=>{var t;return (null===(t=e.cache)||void 0===t?void 0:t.cache)||e.cache},yo=e=>{if(!0===e)return ()=>!0;if("function"==typeof e)return (t,...s)=>!t.startsWith("\0")&&e(t,...s)||!1;if(e){const t=new Set,s=[];for(const i of io(e))i instanceof RegExp?s.push(i):t.add(i);return (e,...i)=>t.has(e)||s.some((t=>t.test(e)))}return ()=>!1},xo=(e,t,s)=>{const i=e.inlineDynamicImports;return i&&ds('The "inlineDynamicImports" option is deprecated. Use the "output.inlineDynamicImports" option instead.',!1,t,s),i},Eo=e=>{const t=e.input;return null==t?[]:"string"==typeof t?[t]:t},vo=(e,t,s)=>{const i=e.manualChunks;return i&&ds('The "manualChunks" option is deprecated. Use the "output.manualChunks" option instead.',!1,t,s),i},bo=(e,t)=>{const s=e.moduleContext;if("function"==typeof s)return e=>{var i;return null!==(i=s(e))&&void 0!==i?i:t};if(s){const e=Object.create(null);for(const t of Object.keys(s))e[We(t)]=s[t];return s=>e[s]||t}return ()=>t},So=(e,t)=>{const s=e.preserveEntrySignatures;return null==s&&t.add("preserveEntrySignatures"),null!=s?s:"strict"},Ao=(e,t,s)=>{const i=e.preserveModules;return i&&ds('The "preserveModules" option is deprecated. Use the "output.preserveModules" option instead.',!1,t,s),i},Po=(e,t,s)=>{const i=e.treeshake;return !1!==i&&(i&&!0!==i?(void 0!==i.pureExternalModules&&ds('The "treeshake.pureExternalModules" option is deprecated. The "treeshake.moduleSideEffects" option should be used instead. "treeshake.pureExternalModules: true" is equivalent to "treeshake.moduleSideEffects: \'no-external\'"',!0,t,s),{annotations:!1!==i.annotations,moduleSideEffects:Co(i.moduleSideEffects,i.pureExternalModules,t),propertyReadSideEffects:!1!==i.propertyReadSideEffects,tryCatchDeoptimization:!1!==i.tryCatchDeoptimization,unknownGlobalSideEffects:!1!==i.unknownGlobalSideEffects}):{annotations:!0,moduleSideEffects:()=>!0,propertyReadSideEffects:!0,tryCatchDeoptimization:!0,unknownGlobalSideEffects:!0})},Co=(e,t,s)=>{if("boolean"==typeof e)return ()=>e;if("no-external"===e)return (e,t)=>!t;if("function"==typeof e)return (t,s)=>!!t.startsWith("\0")||!1!==e(t,s);if(Array.isArray(e)){const t=new Set(e);return e=>t.has(e)}var i,n;e&&s((i="treeshake.moduleSideEffects",n='please use one of false, "no-external", a function or an array',{code:ns.INVALID_OPTION,message:`Invalid value for option "${i}" - ${n}.`}));const r=yo(t);return (e,t)=>!(t&&r(e))};const No=(e,t,s)=>{const i=e.file;if("string"==typeof i){if(t)return ss({code:"INVALID_OPTION",message:'You must set "output.dir" instead of "output.file" when using the "output.preserveModules" option.'});if(!Array.isArray(s.input))return ss({code:"INVALID_OPTION",message:'You must set "output.dir" instead of "output.file" when providing named inputs.'})}return i},ko=e=>{const t=e.format;switch(t){case void 0:case"es":case"esm":case"module":return "es";case"cjs":case"commonjs":return "cjs";case"system":case"systemjs":return "system";case"amd":case"iife":case"umd":return t;default:return ss({message:'You must specify "output.format", which can be one of "amd", "cjs", "system", "es", "iife" or "umd".',url:"https://rollupjs.org/guide/en/#outputformat"})}},wo=(e,t)=>{var s;const i=(null!==(s=e.inlineDynamicImports)&&void 0!==s?s:t.inlineDynamicImports)||!1,{input:n}=t;return i&&(Array.isArray(n)?n:Object.keys(n)).length>1?ss({code:"INVALID_OPTION",message:'Multiple inputs are not supported for "output.inlineDynamicImports".'}):i},_o=(e,t,s)=>{var i;const n=(null!==(i=e.preserveModules)&&void 0!==i?i:s.preserveModules)||!1;if(n){if(t)return ss({code:"INVALID_OPTION",message:'The "output.inlineDynamicImports" option is not supported for "output.preserveModules".'});if(!1===s.preserveEntrySignatures)return ss({code:"INVALID_OPTION",message:'Setting "preserveEntrySignatures" to "false" is not supported for "output.preserveModules".'})}return n},Io=e=>{const t=e.preserveModulesRoot;if(null!=t)return We(t)},$o=e=>{const t={autoId:!1,basePath:"",define:"define",...e.amd};if((t.autoId||t.basePath)&&t.id)return ss({code:"INVALID_OPTION",message:'"output.amd.autoId"/"output.amd.basePath" and "output.amd.id" cannot be used together.'});if(t.basePath&&!t.autoId)return ss({code:"INVALID_OPTION",message:'"output.amd.basePath" only works with "output.amd.autoId".'});let s;return s=t.autoId?{autoId:!0,basePath:t.basePath,define:t.define}:{autoId:!1,define:t.define,id:t.id},s},To=(e,t)=>{const s=e[t];return "function"==typeof s?s:()=>s||""},Mo=(e,t)=>{const s=e.dir;return "string"==typeof s&&"string"==typeof t?ss({code:"INVALID_OPTION",message:'You must set either "output.file" for a single-file build or "output.dir" when generating multiple chunks.'}):s},Lo=(e,t)=>{const s=e.dynamicImportFunction;return s&&us('The "output.dynamicImportFunction" option is deprecated. Use the "renderDynamicImport" plugin hook instead.',!1,t),s},Ro=(e,t)=>{const s=e.entryFileNames;return null==s&&t.add("entryFileNames"),null!=s?s:"[name].js"};function Oo(e,t){const s=e.exports;if(null==s)t.add("exports");else if(!["default","named","none","auto"].includes(s))return ss((i=s,{code:ns.INVALID_EXPORT_OPTION,message:`"output.exports" must be "default", "named", "none", "auto", or left unspecified (defaults to "auto"), received "${i}"`,url:"https://rollupjs.org/guide/en/#outputexports"}));var i;return s||"auto"}const Do=(e,t)=>{if(t)return "";const s=e.indent;return !1===s?"":null==s||s},Vo=new Set(["auto","esModule","default","defaultOnly",!0,!1]),Bo=(e,t)=>{const s=e.interop,i=new Set,n=e=>{if(!i.has(e)){if(i.add(e),!Vo.has(e))return ss({code:"INVALID_OPTION",message:`The value ${JSON.stringify(e)} is not supported for "output.interop". Use one of ${Array.from(Vo.values(),(e=>JSON.stringify(e))).join(", ")} instead.`,url:"https://rollupjs.org/guide/en/#outputinterop"});"boolean"==typeof e&&us({message:`The boolean value "${e}" for the "output.interop" option is deprecated. Use ${e?'"auto"':'"esModule", "default" or "defaultOnly"'} instead.`,url:"https://rollupjs.org/guide/en/#outputinterop"},!1,t);}return e};if("function"==typeof s){const e=Object.create(null);let t=null;return i=>null===i?t||n(t=s(i)):i in e?e[i]:n(e[i]=s(i))}return void 0===s?()=>!0:()=>n(s)},Fo=(e,t,s,i)=>{const n=e.manualChunks||i.manualChunks;if(n){if(t)return ss({code:"INVALID_OPTION",message:'The "output.manualChunks" option is not supported for "output.inlineDynamicImports".'});if(s)return ss({code:"INVALID_OPTION",message:'The "output.manualChunks" option is not supported for "output.preserveModules".'})}return n||{}},Wo=(e,t,s)=>{var i;return null!==(i=e.minifyInternalExports)&&void 0!==i?i:s||"es"===t||"system"===t};function Uo(e){return async function(e,t){const{options:s,unsetOptions:i}=await async function(e,t){if(!e)throw new Error("You must supply an options object to rollup");const s=io(e.plugins),{options:i,unsetOptions:n}=function(e){var t,s;const i=new Set,n=null!==(t=e.context)&&void 0!==t?t:"undefined",r=po(e),a=e.strictDeprecations||!1,o={acorn:fo(e),acornInjectPlugins:mo(e),cache:go(e),context:n,experimentalCacheExpiry:null!==(s=e.experimentalCacheExpiry)&&void 0!==s?s:10,external:yo(e.external),inlineDynamicImports:xo(e,r,a),input:Eo(e),manualChunks:vo(e,r,a),moduleContext:bo(e,n),onwarn:r,perf:e.perf||!1,plugins:io(e.plugins),preserveEntrySignatures:So(e,i),preserveModules:Ao(e,r,a),preserveSymlinks:e.preserveSymlinks||!1,shimMissingExports:e.shimMissingExports||!1,strictDeprecations:a,treeshake:Po(e,r,a)};return uo(e,[...Object.keys(o),"watch"],"input options",o.onwarn,/^(output)$/),{options:o,unsetOptions:i}}(await s.reduce(function(e){return async(t,s)=>s.options&&s.options.call({meta:{rollupVersion:"2.34.2",watchMode:e}},await t)||t}(t),Promise.resolve(e)));return zo(i.plugins,"at position "),{options:i,unsetOptions:n}}(e,null!==t);Mi(s);const n=new so(s,t),r=!1!==e.cache;delete s.cache,delete e.cache,_i("BUILD",1);try{await n.pluginDriver.hookParallel("buildStart",[s]),await n.build();}catch(e){const t=Object.keys(n.watchFiles);throw t.length>0&&(e.watchFiles=t),await n.pluginDriver.hookParallel("buildEnd",[e]),e}await n.pluginDriver.hookParallel("buildEnd",[]),Ii("BUILD",1);const a={cache:r?n.getCache():void 0,generate:async e=>jo(!1,s,i,e,n),watchFiles:Object.keys(n.watchFiles),write:async e=>jo(!0,s,i,e,n)};s.perf&&(a.getTimings=wi);return a}(e,null)}function zo(e,t){for(let s=0;s<e.length;s++){const i=e[s];i.name||(i.name=`${t}${s+1}`);}}async function jo(e,t,s,i,n){const{options:r,outputPluginDriver:a,unsetOptions:o}=function(e,t,s,i){if(!e)throw new Error("You must supply an options object");const n=io(e.plugins);zo(n,"at output position ");const r=t.createOutputPluginDriver(n);return {...Go(s,i,e,r),outputPluginDriver:r}}(i,n.pluginDriver,t,s),h=new Qn(r,o,t,a,n),l=await h.generate(e);if(e){if(!r.dir&&!r.file)return ss({code:"MISSING_OPTION",message:'You must specify "output.file" or "output.dir" for the build.'});await Promise.all(Object.keys(l).map((e=>function(e,t){const s=We(t.dir||Ve(t.file),e.fileName);let i,n;if("asset"===e.type)n=e.source;else if(n=e.code,t.sourcemap&&e.map){let r;"inline"===t.sourcemap?r=e.map.toUrl():(r=`${De(e.fileName)}.map`,i=Fa(`${s}.map`,e.map.toString())),"hidden"!==t.sourcemap&&(n+=`//# sourceMappingURL=${r}\n`);}return Promise.all([Fa(s,n),i])}(l[e],r)))),await a.hookParallel("writeBundle",[r,l]);}return c=l,{output:Object.keys(c).map((e=>c[e])).filter((e=>Object.keys(e).length>0)).sort(((e,t)=>{const s=qo(e),i=qo(t);return s===i?0:s<i?-1:1}))};var c;}function Go(e,t,s,i){return function(e,t,s){var i,n,r,a,o,h,l;const c=new Set(s),u=e.compact||!1,d=ko(e),p=wo(e,t),f=_o(e,p,t),m=No(e,f,t),g={amd:$o(e),assetFileNames:null!==(i=e.assetFileNames)&&void 0!==i?i:"assets/[name]-[hash][extname]",banner:To(e,"banner"),chunkFileNames:null!==(n=e.chunkFileNames)&&void 0!==n?n:"[name]-[hash].js",compact:u,dir:Mo(e,m),dynamicImportFunction:Lo(e,t),entryFileNames:Ro(e,c),esModule:null===(r=e.esModule)||void 0===r||r,exports:Oo(e,c),extend:e.extend||!1,externalLiveBindings:null===(a=e.externalLiveBindings)||void 0===a||a,file:m,footer:To(e,"footer"),format:d,freeze:null===(o=e.freeze)||void 0===o||o,globals:e.globals||{},hoistTransitiveImports:null===(h=e.hoistTransitiveImports)||void 0===h||h,indent:Do(e,u),inlineDynamicImports:p,interop:Bo(e,t),intro:To(e,"intro"),manualChunks:Fo(e,p,f,t),minifyInternalExports:Wo(e,d,u),name:e.name,namespaceToStringTag:e.namespaceToStringTag||!1,noConflict:e.noConflict||!1,outro:To(e,"outro"),paths:e.paths||{},plugins:io(e.plugins),preferConst:e.preferConst||!1,preserveModules:f,preserveModulesRoot:Io(e),sourcemap:e.sourcemap||!1,sourcemapExcludeSources:e.sourcemapExcludeSources||!1,sourcemapFile:e.sourcemapFile,sourcemapPathTransform:e.sourcemapPathTransform,strict:null===(l=e.strict)||void 0===l||l,systemNullSetters:e.systemNullSetters||!1};return uo(e,Object.keys(g),"output options",t.onwarn),{options:g,unsetOptions:c}}(i.hookReduceArg0Sync("outputOptions",[s.output||s],((e,t)=>t||e),(e=>{const t=()=>e.error({code:ns.CANNOT_EMIT_FROM_OPTIONS_HOOK,message:'Cannot emit files or set asset sources in the "outputOptions" hook, use the "renderStart" hook instead.'});return {...e,emitFile:t,setAssetSource:t}})),e,t)}var Ho;function qo(e){return "asset"===e.type?Ho.ASSET:e.isEntry?Ho.ENTRY_CHUNK:Ho.SECONDARY_CHUNK}!function(e){e[e.ENTRY_CHUNK=0]="ENTRY_CHUNK",e[e.SECONDARY_CHUNK=1]="SECONDARY_CHUNK",e[e.ASSET=2]="ASSET";}(Ho||(Ho={}));

// Reserved word lists for various dialects of the language

var reservedWords = {
  3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
  5: "class enum extends super const export import",
  6: "enum",
  strict: "implements interface let package private protected public static yield",
  strictBind: "eval arguments"
};

// And the keywords

var ecma5AndLessKeywords = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this";

var keywords = {
  5: ecma5AndLessKeywords,
  "5module": ecma5AndLessKeywords + " export import",
  6: ecma5AndLessKeywords + " const class extends export import super"
};

var keywordRelationalOperator = /^in(stanceof)?$/;

// ## Character categories

// Big ugly regular expressions that match characters in the
// whitespace, identifier, and identifier-start categories. These
// are only applied when a character is found to actually have a
// code point above 128.
// Generated by `bin/generate-identifier-regex.js`.
var nonASCIIidentifierStartChars = "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0560-\u0588\u05d0-\u05ea\u05ef-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u0860-\u086a\u08a0-\u08b4\u08b6-\u08c7\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u09fc\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0af9\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c60\u0c61\u0c80\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d04-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d54-\u0d56\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e86-\u0e8a\u0e8c-\u0ea3\u0ea5\u0ea7-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1878\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1c80-\u1c88\u1c90-\u1cba\u1cbd-\u1cbf\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5\u1cf6\u1cfa\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u31a0-\u31bf\u31f0-\u31ff\u3400-\u4dbf\u4e00-\u9ffc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua7bf\ua7c2-\ua7ca\ua7f5-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd\ua8fe\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab69\uab70-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc";
var nonASCIIidentifierChars = "\u200c\u200d\xb7\u0300-\u036f\u0387\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u07fd\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08d3-\u08e1\u08e3-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u09fe\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0afa-\u0aff\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b55-\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c00-\u0c04\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c81-\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0d00-\u0d03\u0d3b\u0d3c\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d81-\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0ebc\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1369-\u1371\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19d0-\u19da\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1ab0-\u1abd\u1abf\u1ac0\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf4\u1cf7-\u1cf9\u1dc0-\u1df9\u1dfb-\u1dff\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69e\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua82c\ua880\ua881\ua8b4-\ua8c5\ua8d0-\ua8d9\ua8e0-\ua8f1\ua8ff-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\ua9e5\ua9f0-\ua9f9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b-\uaa7d\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f";

var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");

nonASCIIidentifierStartChars = nonASCIIidentifierChars = null;

// These are a run-length and offset encoded representation of the
// >0xffff code points that are a valid part of identifiers. The
// offset starts at 0x10000, and each pair of numbers represents an
// offset to the next range, and then a size of the range. They were
// generated by bin/generate-identifier-regex.js

// eslint-disable-next-line comma-spacing
var astralIdentifierStartCodes = [0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,14,29,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,157,310,10,21,11,7,153,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,28,43,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,14,35,349,41,7,1,79,28,11,0,9,21,107,20,28,22,13,52,76,44,33,24,27,35,30,0,3,0,9,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,21,2,31,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,14,0,72,26,230,43,117,63,32,7,3,0,3,7,2,1,2,23,16,0,2,0,95,7,3,38,17,0,2,0,29,0,11,39,8,0,22,0,12,45,20,0,35,56,264,8,2,36,18,0,50,29,113,6,2,1,2,37,22,0,26,5,2,1,2,31,15,0,328,18,190,0,80,921,103,110,18,195,2749,1070,4050,582,8634,568,8,30,114,29,19,47,17,3,32,20,6,18,689,63,129,74,6,0,67,12,65,1,2,0,29,6135,9,1237,43,8,8952,286,50,2,18,3,9,395,2309,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,2357,44,11,6,17,0,370,43,1301,196,60,67,8,0,1205,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42717,35,4148,12,221,3,5761,15,7472,3104,541,1507,4938];

// eslint-disable-next-line comma-spacing
var astralIdentifierCodes = [509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,574,3,9,9,370,1,154,10,176,2,54,14,32,9,16,3,46,10,54,9,7,2,37,13,2,9,6,1,45,0,13,2,49,13,9,3,2,11,83,11,7,0,161,11,6,9,7,3,56,1,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,5,0,82,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,243,14,166,9,71,5,2,1,3,3,2,0,2,1,13,9,120,6,3,6,4,0,29,9,41,6,2,3,9,0,10,10,47,15,406,7,2,7,17,9,57,21,2,13,123,5,4,0,2,1,2,6,2,0,9,9,49,4,2,1,2,4,9,9,330,3,19306,9,135,4,60,6,26,9,1014,0,2,54,8,3,82,0,12,1,19628,1,5319,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,262,6,10,9,419,13,1495,6,110,6,6,9,4759,9,787719,239];

// This has a complexity linear to the value of the code. The
// assumption is that looking up astral identifier characters is
// rare.
function isInAstralSet(code, set) {
  var pos = 0x10000;
  for (var i = 0; i < set.length; i += 2) {
    pos += set[i];
    if (pos > code) { return false }
    pos += set[i + 1];
    if (pos >= code) { return true }
  }
}

// Test whether a given character code starts an identifier.

function isIdentifierStart(code, astral) {
  if (code < 65) { return code === 36 }
  if (code < 91) { return true }
  if (code < 97) { return code === 95 }
  if (code < 123) { return true }
  if (code <= 0xffff) { return code >= 0xaa && nonASCIIidentifierStart.test(String.fromCharCode(code)) }
  if (astral === false) { return false }
  return isInAstralSet(code, astralIdentifierStartCodes)
}

// Test whether a given character is part of an identifier.

function isIdentifierChar(code, astral) {
  if (code < 48) { return code === 36 }
  if (code < 58) { return true }
  if (code < 65) { return false }
  if (code < 91) { return true }
  if (code < 97) { return code === 95 }
  if (code < 123) { return true }
  if (code <= 0xffff) { return code >= 0xaa && nonASCIIidentifier.test(String.fromCharCode(code)) }
  if (astral === false) { return false }
  return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes)
}

// ## Token types

// The assignment of fine-grained, information-carrying type objects
// allows the tokenizer to store the information it has about a
// token in a way that is very cheap for the parser to look up.

// All token type variables start with an underscore, to make them
// easy to recognize.

// The `beforeExpr` property is used to disambiguate between regular
// expressions and divisions. It is set on all token types that can
// be followed by an expression (thus, a slash after them would be a
// regular expression).
//
// The `startsExpr` property is used to check if the token ends a
// `yield` expression. It is set on all token types that either can
// directly start an expression (like a quotation mark) or can
// continue an expression (like the body of a string).
//
// `isLoop` marks a keyword as starting a loop, which is important
// to know when parsing a label, in order to allow or disallow
// continue jumps to that label.

var TokenType = function TokenType(label, conf) {
  if ( conf === void 0 ) conf = {};

  this.label = label;
  this.keyword = conf.keyword;
  this.beforeExpr = !!conf.beforeExpr;
  this.startsExpr = !!conf.startsExpr;
  this.isLoop = !!conf.isLoop;
  this.isAssign = !!conf.isAssign;
  this.prefix = !!conf.prefix;
  this.postfix = !!conf.postfix;
  this.binop = conf.binop || null;
  this.updateContext = null;
};

function binop(name, prec) {
  return new TokenType(name, {beforeExpr: true, binop: prec})
}
var beforeExpr = {beforeExpr: true}, startsExpr = {startsExpr: true};

// Map keyword names to token types.

var keywords$1 = {};

// Succinct definitions of keyword token types
function kw(name, options) {
  if ( options === void 0 ) options = {};

  options.keyword = name;
  return keywords$1[name] = new TokenType(name, options)
}

var types = {
  num: new TokenType("num", startsExpr),
  regexp: new TokenType("regexp", startsExpr),
  string: new TokenType("string", startsExpr),
  name: new TokenType("name", startsExpr),
  eof: new TokenType("eof"),

  // Punctuation token types.
  bracketL: new TokenType("[", {beforeExpr: true, startsExpr: true}),
  bracketR: new TokenType("]"),
  braceL: new TokenType("{", {beforeExpr: true, startsExpr: true}),
  braceR: new TokenType("}"),
  parenL: new TokenType("(", {beforeExpr: true, startsExpr: true}),
  parenR: new TokenType(")"),
  comma: new TokenType(",", beforeExpr),
  semi: new TokenType(";", beforeExpr),
  colon: new TokenType(":", beforeExpr),
  dot: new TokenType("."),
  question: new TokenType("?", beforeExpr),
  questionDot: new TokenType("?."),
  arrow: new TokenType("=>", beforeExpr),
  template: new TokenType("template"),
  invalidTemplate: new TokenType("invalidTemplate"),
  ellipsis: new TokenType("...", beforeExpr),
  backQuote: new TokenType("`", startsExpr),
  dollarBraceL: new TokenType("${", {beforeExpr: true, startsExpr: true}),

  // Operators. These carry several kinds of properties to help the
  // parser use them properly (the presence of these properties is
  // what categorizes them as operators).
  //
  // `binop`, when present, specifies that this operator is a binary
  // operator, and will refer to its precedence.
  //
  // `prefix` and `postfix` mark the operator as a prefix or postfix
  // unary operator.
  //
  // `isAssign` marks all of `=`, `+=`, `-=` etcetera, which act as
  // binary operators with a very low precedence, that should result
  // in AssignmentExpression nodes.

  eq: new TokenType("=", {beforeExpr: true, isAssign: true}),
  assign: new TokenType("_=", {beforeExpr: true, isAssign: true}),
  incDec: new TokenType("++/--", {prefix: true, postfix: true, startsExpr: true}),
  prefix: new TokenType("!/~", {beforeExpr: true, prefix: true, startsExpr: true}),
  logicalOR: binop("||", 1),
  logicalAND: binop("&&", 2),
  bitwiseOR: binop("|", 3),
  bitwiseXOR: binop("^", 4),
  bitwiseAND: binop("&", 5),
  equality: binop("==/!=/===/!==", 6),
  relational: binop("</>/<=/>=", 7),
  bitShift: binop("<</>>/>>>", 8),
  plusMin: new TokenType("+/-", {beforeExpr: true, binop: 9, prefix: true, startsExpr: true}),
  modulo: binop("%", 10),
  star: binop("*", 10),
  slash: binop("/", 10),
  starstar: new TokenType("**", {beforeExpr: true}),
  coalesce: binop("??", 1),

  // Keyword token types.
  _break: kw("break"),
  _case: kw("case", beforeExpr),
  _catch: kw("catch"),
  _continue: kw("continue"),
  _debugger: kw("debugger"),
  _default: kw("default", beforeExpr),
  _do: kw("do", {isLoop: true, beforeExpr: true}),
  _else: kw("else", beforeExpr),
  _finally: kw("finally"),
  _for: kw("for", {isLoop: true}),
  _function: kw("function", startsExpr),
  _if: kw("if"),
  _return: kw("return", beforeExpr),
  _switch: kw("switch"),
  _throw: kw("throw", beforeExpr),
  _try: kw("try"),
  _var: kw("var"),
  _const: kw("const"),
  _while: kw("while", {isLoop: true}),
  _with: kw("with"),
  _new: kw("new", {beforeExpr: true, startsExpr: true}),
  _this: kw("this", startsExpr),
  _super: kw("super", startsExpr),
  _class: kw("class", startsExpr),
  _extends: kw("extends", beforeExpr),
  _export: kw("export"),
  _import: kw("import", startsExpr),
  _null: kw("null", startsExpr),
  _true: kw("true", startsExpr),
  _false: kw("false", startsExpr),
  _in: kw("in", {beforeExpr: true, binop: 7}),
  _instanceof: kw("instanceof", {beforeExpr: true, binop: 7}),
  _typeof: kw("typeof", {beforeExpr: true, prefix: true, startsExpr: true}),
  _void: kw("void", {beforeExpr: true, prefix: true, startsExpr: true}),
  _delete: kw("delete", {beforeExpr: true, prefix: true, startsExpr: true})
};

// Matches a whole line break (where CRLF is considered a single
// line break). Used to count lines.

var lineBreak = /\r\n?|\n|\u2028|\u2029/;
var lineBreakG = new RegExp(lineBreak.source, "g");

function isNewLine(code, ecma2019String) {
  return code === 10 || code === 13 || (!ecma2019String && (code === 0x2028 || code === 0x2029))
}

var nonASCIIwhitespace = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/;

var skipWhiteSpace = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;

var ref = Object.prototype;
var hasOwnProperty = ref.hasOwnProperty;
var toString = ref.toString;

// Checks if an object has a property.

function has(obj, propName) {
  return hasOwnProperty.call(obj, propName)
}

var isArray = Array.isArray || (function (obj) { return (
  toString.call(obj) === "[object Array]"
); });

function wordsRegexp(words) {
  return new RegExp("^(?:" + words.replace(/ /g, "|") + ")$")
}

// These are used when `options.locations` is on, for the
// `startLoc` and `endLoc` properties.

var Position = function Position(line, col) {
  this.line = line;
  this.column = col;
};

Position.prototype.offset = function offset (n) {
  return new Position(this.line, this.column + n)
};

var SourceLocation = function SourceLocation(p, start, end) {
  this.start = start;
  this.end = end;
  if (p.sourceFile !== null) { this.source = p.sourceFile; }
};

// The `getLineInfo` function is mostly useful when the
// `locations` option is off (for performance reasons) and you
// want to find the line/column position for a given character
// offset. `input` should be the code string that the offset refers
// into.

function getLineInfo(input, offset) {
  for (var line = 1, cur = 0;;) {
    lineBreakG.lastIndex = cur;
    var match = lineBreakG.exec(input);
    if (match && match.index < offset) {
      ++line;
      cur = match.index + match[0].length;
    } else {
      return new Position(line, offset - cur)
    }
  }
}

// A second argument must be given to configure the parser process.
// These options are recognized (only `ecmaVersion` is required):

var defaultOptions = {
  // `ecmaVersion` indicates the ECMAScript version to parse. Must be
  // either 3, 5, 6 (or 2015), 7 (2016), 8 (2017), 9 (2018), 10
  // (2019), 11 (2020), 12 (2021), or `"latest"` (the latest version
  // the library supports). This influences support for strict mode,
  // the set of reserved words, and support for new syntax features.
  ecmaVersion: null,
  // `sourceType` indicates the mode the code should be parsed in.
  // Can be either `"script"` or `"module"`. This influences global
  // strict mode and parsing of `import` and `export` declarations.
  sourceType: "script",
  // `onInsertedSemicolon` can be a callback that will be called
  // when a semicolon is automatically inserted. It will be passed
  // the position of the comma as an offset, and if `locations` is
  // enabled, it is given the location as a `{line, column}` object
  // as second argument.
  onInsertedSemicolon: null,
  // `onTrailingComma` is similar to `onInsertedSemicolon`, but for
  // trailing commas.
  onTrailingComma: null,
  // By default, reserved words are only enforced if ecmaVersion >= 5.
  // Set `allowReserved` to a boolean value to explicitly turn this on
  // an off. When this option has the value "never", reserved words
  // and keywords can also not be used as property names.
  allowReserved: null,
  // When enabled, a return at the top level is not considered an
  // error.
  allowReturnOutsideFunction: false,
  // When enabled, import/export statements are not constrained to
  // appearing at the top of the program.
  allowImportExportEverywhere: false,
  // When enabled, await identifiers are allowed to appear at the top-level scope,
  // but they are still not allowed in non-async functions.
  allowAwaitOutsideFunction: false,
  // When enabled, hashbang directive in the beginning of file
  // is allowed and treated as a line comment.
  allowHashBang: false,
  // When `locations` is on, `loc` properties holding objects with
  // `start` and `end` properties in `{line, column}` form (with
  // line being 1-based and column 0-based) will be attached to the
  // nodes.
  locations: false,
  // A function can be passed as `onToken` option, which will
  // cause Acorn to call that function with object in the same
  // format as tokens returned from `tokenizer().getToken()`. Note
  // that you are not allowed to call the parser from the
  // callback—that will corrupt its internal state.
  onToken: null,
  // A function can be passed as `onComment` option, which will
  // cause Acorn to call that function with `(block, text, start,
  // end)` parameters whenever a comment is skipped. `block` is a
  // boolean indicating whether this is a block (`/* */`) comment,
  // `text` is the content of the comment, and `start` and `end` are
  // character offsets that denote the start and end of the comment.
  // When the `locations` option is on, two more parameters are
  // passed, the full `{line, column}` locations of the start and
  // end of the comments. Note that you are not allowed to call the
  // parser from the callback—that will corrupt its internal state.
  onComment: null,
  // Nodes have their start and end characters offsets recorded in
  // `start` and `end` properties (directly on the node, rather than
  // the `loc` object, which holds line/column data. To also add a
  // [semi-standardized][range] `range` property holding a `[start,
  // end]` array with the same numbers, set the `ranges` option to
  // `true`.
  //
  // [range]: https://bugzilla.mozilla.org/show_bug.cgi?id=745678
  ranges: false,
  // It is possible to parse multiple files into a single AST by
  // passing the tree produced by parsing the first file as
  // `program` option in subsequent parses. This will add the
  // toplevel forms of the parsed file to the `Program` (top) node
  // of an existing parse tree.
  program: null,
  // When `locations` is on, you can pass this to record the source
  // file in every node's `loc` object.
  sourceFile: null,
  // This value, if given, is stored in every node, whether
  // `locations` is on or off.
  directSourceFile: null,
  // When enabled, parenthesized expressions are represented by
  // (non-standard) ParenthesizedExpression nodes
  preserveParens: false
};

// Interpret and default an options object

var warnedAboutEcmaVersion = false;

function getOptions(opts) {
  var options = {};

  for (var opt in defaultOptions)
    { options[opt] = opts && has(opts, opt) ? opts[opt] : defaultOptions[opt]; }

  if (options.ecmaVersion === "latest") {
    options.ecmaVersion = 1e8;
  } else if (options.ecmaVersion == null) {
    if (!warnedAboutEcmaVersion && typeof console === "object" && console.warn) {
      warnedAboutEcmaVersion = true;
      console.warn("Since Acorn 8.0.0, options.ecmaVersion is required.\nDefaulting to 2020, but this will stop working in the future.");
    }
    options.ecmaVersion = 11;
  } else if (options.ecmaVersion >= 2015) {
    options.ecmaVersion -= 2009;
  }

  if (options.allowReserved == null)
    { options.allowReserved = options.ecmaVersion < 5; }

  if (isArray(options.onToken)) {
    var tokens = options.onToken;
    options.onToken = function (token) { return tokens.push(token); };
  }
  if (isArray(options.onComment))
    { options.onComment = pushComment(options, options.onComment); }

  return options
}

function pushComment(options, array) {
  return function(block, text, start, end, startLoc, endLoc) {
    var comment = {
      type: block ? "Block" : "Line",
      value: text,
      start: start,
      end: end
    };
    if (options.locations)
      { comment.loc = new SourceLocation(this, startLoc, endLoc); }
    if (options.ranges)
      { comment.range = [start, end]; }
    array.push(comment);
  }
}

// Each scope gets a bitset that may contain these flags
var
    SCOPE_TOP = 1,
    SCOPE_FUNCTION = 2,
    SCOPE_VAR = SCOPE_TOP | SCOPE_FUNCTION,
    SCOPE_ASYNC = 4,
    SCOPE_GENERATOR = 8,
    SCOPE_ARROW = 16,
    SCOPE_SIMPLE_CATCH = 32,
    SCOPE_SUPER = 64,
    SCOPE_DIRECT_SUPER = 128;

function functionFlags(async, generator) {
  return SCOPE_FUNCTION | (async ? SCOPE_ASYNC : 0) | (generator ? SCOPE_GENERATOR : 0)
}

// Used in checkLVal* and declareName to determine the type of a binding
var
    BIND_NONE = 0, // Not a binding
    BIND_VAR = 1, // Var-style binding
    BIND_LEXICAL = 2, // Let- or const-style binding
    BIND_FUNCTION = 3, // Function declaration
    BIND_SIMPLE_CATCH = 4, // Simple (identifier pattern) catch binding
    BIND_OUTSIDE = 5; // Special case for function names as bound inside the function

var Parser = function Parser(options, input, startPos) {
  this.options = options = getOptions(options);
  this.sourceFile = options.sourceFile;
  this.keywords = wordsRegexp(keywords[options.ecmaVersion >= 6 ? 6 : options.sourceType === "module" ? "5module" : 5]);
  var reserved = "";
  if (options.allowReserved !== true) {
    reserved = reservedWords[options.ecmaVersion >= 6 ? 6 : options.ecmaVersion === 5 ? 5 : 3];
    if (options.sourceType === "module") { reserved += " await"; }
  }
  this.reservedWords = wordsRegexp(reserved);
  var reservedStrict = (reserved ? reserved + " " : "") + reservedWords.strict;
  this.reservedWordsStrict = wordsRegexp(reservedStrict);
  this.reservedWordsStrictBind = wordsRegexp(reservedStrict + " " + reservedWords.strictBind);
  this.input = String(input);

  // Used to signal to callers of `readWord1` whether the word
  // contained any escape sequences. This is needed because words with
  // escape sequences must not be interpreted as keywords.
  this.containsEsc = false;

  // Set up token state

  // The current position of the tokenizer in the input.
  if (startPos) {
    this.pos = startPos;
    this.lineStart = this.input.lastIndexOf("\n", startPos - 1) + 1;
    this.curLine = this.input.slice(0, this.lineStart).split(lineBreak).length;
  } else {
    this.pos = this.lineStart = 0;
    this.curLine = 1;
  }

  // Properties of the current token:
  // Its type
  this.type = types.eof;
  // For tokens that include more information than their type, the value
  this.value = null;
  // Its start and end offset
  this.start = this.end = this.pos;
  // And, if locations are used, the {line, column} object
  // corresponding to those offsets
  this.startLoc = this.endLoc = this.curPosition();

  // Position information for the previous token
  this.lastTokEndLoc = this.lastTokStartLoc = null;
  this.lastTokStart = this.lastTokEnd = this.pos;

  // The context stack is used to superficially track syntactic
  // context to predict whether a regular expression is allowed in a
  // given position.
  this.context = this.initialContext();
  this.exprAllowed = true;

  // Figure out if it's a module code.
  this.inModule = options.sourceType === "module";
  this.strict = this.inModule || this.strictDirective(this.pos);

  // Used to signify the start of a potential arrow function
  this.potentialArrowAt = -1;

  // Positions to delayed-check that yield/await does not exist in default parameters.
  this.yieldPos = this.awaitPos = this.awaitIdentPos = 0;
  // Labels in scope.
  this.labels = [];
  // Thus-far undefined exports.
  this.undefinedExports = {};

  // If enabled, skip leading hashbang line.
  if (this.pos === 0 && options.allowHashBang && this.input.slice(0, 2) === "#!")
    { this.skipLineComment(2); }

  // Scope tracking for duplicate variable names (see scope.js)
  this.scopeStack = [];
  this.enterScope(SCOPE_TOP);

  // For RegExp validation
  this.regexpState = null;
};

var prototypeAccessors = { inFunction: { configurable: true },inGenerator: { configurable: true },inAsync: { configurable: true },allowSuper: { configurable: true },allowDirectSuper: { configurable: true },treatFunctionsAsVar: { configurable: true },inNonArrowFunction: { configurable: true } };

Parser.prototype.parse = function parse () {
  var node = this.options.program || this.startNode();
  this.nextToken();
  return this.parseTopLevel(node)
};

prototypeAccessors.inFunction.get = function () { return (this.currentVarScope().flags & SCOPE_FUNCTION) > 0 };
prototypeAccessors.inGenerator.get = function () { return (this.currentVarScope().flags & SCOPE_GENERATOR) > 0 };
prototypeAccessors.inAsync.get = function () { return (this.currentVarScope().flags & SCOPE_ASYNC) > 0 };
prototypeAccessors.allowSuper.get = function () { return (this.currentThisScope().flags & SCOPE_SUPER) > 0 };
prototypeAccessors.allowDirectSuper.get = function () { return (this.currentThisScope().flags & SCOPE_DIRECT_SUPER) > 0 };
prototypeAccessors.treatFunctionsAsVar.get = function () { return this.treatFunctionsAsVarInScope(this.currentScope()) };
prototypeAccessors.inNonArrowFunction.get = function () { return (this.currentThisScope().flags & SCOPE_FUNCTION) > 0 };

Parser.extend = function extend () {
    var plugins = [], len = arguments.length;
    while ( len-- ) plugins[ len ] = arguments[ len ];

  var cls = this;
  for (var i = 0; i < plugins.length; i++) { cls = plugins[i](cls); }
  return cls
};

Parser.parse = function parse (input, options) {
  return new this(options, input).parse()
};

Parser.parseExpressionAt = function parseExpressionAt (input, pos, options) {
  var parser = new this(options, input, pos);
  parser.nextToken();
  return parser.parseExpression()
};

Parser.tokenizer = function tokenizer (input, options) {
  return new this(options, input)
};

Object.defineProperties( Parser.prototype, prototypeAccessors );

var pp = Parser.prototype;

// ## Parser utilities

var literal = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/;
pp.strictDirective = function(start) {
  for (;;) {
    // Try to find string literal.
    skipWhiteSpace.lastIndex = start;
    start += skipWhiteSpace.exec(this.input)[0].length;
    var match = literal.exec(this.input.slice(start));
    if (!match) { return false }
    if ((match[1] || match[2]) === "use strict") {
      skipWhiteSpace.lastIndex = start + match[0].length;
      var spaceAfter = skipWhiteSpace.exec(this.input), end = spaceAfter.index + spaceAfter[0].length;
      var next = this.input.charAt(end);
      return next === ";" || next === "}" ||
        (lineBreak.test(spaceAfter[0]) &&
         !(/[(`.[+\-/*%<>=,?^&]/.test(next) || next === "!" && this.input.charAt(end + 1) === "="))
    }
    start += match[0].length;

    // Skip semicolon, if any.
    skipWhiteSpace.lastIndex = start;
    start += skipWhiteSpace.exec(this.input)[0].length;
    if (this.input[start] === ";")
      { start++; }
  }
};

// Predicate that tests whether the next token is of the given
// type, and if yes, consumes it as a side effect.

pp.eat = function(type) {
  if (this.type === type) {
    this.next();
    return true
  } else {
    return false
  }
};

// Tests whether parsed token is a contextual keyword.

pp.isContextual = function(name) {
  return this.type === types.name && this.value === name && !this.containsEsc
};

// Consumes contextual keyword if possible.

pp.eatContextual = function(name) {
  if (!this.isContextual(name)) { return false }
  this.next();
  return true
};

// Asserts that following token is given contextual keyword.

pp.expectContextual = function(name) {
  if (!this.eatContextual(name)) { this.unexpected(); }
};

// Test whether a semicolon can be inserted at the current position.

pp.canInsertSemicolon = function() {
  return this.type === types.eof ||
    this.type === types.braceR ||
    lineBreak.test(this.input.slice(this.lastTokEnd, this.start))
};

pp.insertSemicolon = function() {
  if (this.canInsertSemicolon()) {
    if (this.options.onInsertedSemicolon)
      { this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc); }
    return true
  }
};

// Consume a semicolon, or, failing that, see if we are allowed to
// pretend that there is a semicolon at this position.

pp.semicolon = function() {
  if (!this.eat(types.semi) && !this.insertSemicolon()) { this.unexpected(); }
};

pp.afterTrailingComma = function(tokType, notNext) {
  if (this.type === tokType) {
    if (this.options.onTrailingComma)
      { this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc); }
    if (!notNext)
      { this.next(); }
    return true
  }
};

// Expect a token of a given type. If found, consume it, otherwise,
// raise an unexpected token error.

pp.expect = function(type) {
  this.eat(type) || this.unexpected();
};

// Raise an unexpected token error.

pp.unexpected = function(pos) {
  this.raise(pos != null ? pos : this.start, "Unexpected token");
};

function DestructuringErrors() {
  this.shorthandAssign =
  this.trailingComma =
  this.parenthesizedAssign =
  this.parenthesizedBind =
  this.doubleProto =
    -1;
}

pp.checkPatternErrors = function(refDestructuringErrors, isAssign) {
  if (!refDestructuringErrors) { return }
  if (refDestructuringErrors.trailingComma > -1)
    { this.raiseRecoverable(refDestructuringErrors.trailingComma, "Comma is not permitted after the rest element"); }
  var parens = isAssign ? refDestructuringErrors.parenthesizedAssign : refDestructuringErrors.parenthesizedBind;
  if (parens > -1) { this.raiseRecoverable(parens, "Parenthesized pattern"); }
};

pp.checkExpressionErrors = function(refDestructuringErrors, andThrow) {
  if (!refDestructuringErrors) { return false }
  var shorthandAssign = refDestructuringErrors.shorthandAssign;
  var doubleProto = refDestructuringErrors.doubleProto;
  if (!andThrow) { return shorthandAssign >= 0 || doubleProto >= 0 }
  if (shorthandAssign >= 0)
    { this.raise(shorthandAssign, "Shorthand property assignments are valid only in destructuring patterns"); }
  if (doubleProto >= 0)
    { this.raiseRecoverable(doubleProto, "Redefinition of __proto__ property"); }
};

pp.checkYieldAwaitInDefaultParams = function() {
  if (this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos))
    { this.raise(this.yieldPos, "Yield expression cannot be a default value"); }
  if (this.awaitPos)
    { this.raise(this.awaitPos, "Await expression cannot be a default value"); }
};

pp.isSimpleAssignTarget = function(expr) {
  if (expr.type === "ParenthesizedExpression")
    { return this.isSimpleAssignTarget(expr.expression) }
  return expr.type === "Identifier" || expr.type === "MemberExpression"
};

var pp$1 = Parser.prototype;

// ### Statement parsing

// Parse a program. Initializes the parser, reads any number of
// statements, and wraps them in a Program node.  Optionally takes a
// `program` argument.  If present, the statements will be appended
// to its body instead of creating a new node.

pp$1.parseTopLevel = function(node) {
  var exports = {};
  if (!node.body) { node.body = []; }
  while (this.type !== types.eof) {
    var stmt = this.parseStatement(null, true, exports);
    node.body.push(stmt);
  }
  if (this.inModule)
    { for (var i = 0, list = Object.keys(this.undefinedExports); i < list.length; i += 1)
      {
        var name = list[i];

        this.raiseRecoverable(this.undefinedExports[name].start, ("Export '" + name + "' is not defined"));
      } }
  this.adaptDirectivePrologue(node.body);
  this.next();
  node.sourceType = this.options.sourceType;
  return this.finishNode(node, "Program")
};

var loopLabel = {kind: "loop"}, switchLabel = {kind: "switch"};

pp$1.isLet = function(context) {
  if (this.options.ecmaVersion < 6 || !this.isContextual("let")) { return false }
  skipWhiteSpace.lastIndex = this.pos;
  var skip = skipWhiteSpace.exec(this.input);
  var next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
  // For ambiguous cases, determine if a LexicalDeclaration (or only a
  // Statement) is allowed here. If context is not empty then only a Statement
  // is allowed. However, `let [` is an explicit negative lookahead for
  // ExpressionStatement, so special-case it first.
  if (nextCh === 91) { return true } // '['
  if (context) { return false }

  if (nextCh === 123) { return true } // '{'
  if (isIdentifierStart(nextCh, true)) {
    var pos = next + 1;
    while (isIdentifierChar(this.input.charCodeAt(pos), true)) { ++pos; }
    var ident = this.input.slice(next, pos);
    if (!keywordRelationalOperator.test(ident)) { return true }
  }
  return false
};

// check 'async [no LineTerminator here] function'
// - 'async /*foo*/ function' is OK.
// - 'async /*\n*/ function' is invalid.
pp$1.isAsyncFunction = function() {
  if (this.options.ecmaVersion < 8 || !this.isContextual("async"))
    { return false }

  skipWhiteSpace.lastIndex = this.pos;
  var skip = skipWhiteSpace.exec(this.input);
  var next = this.pos + skip[0].length;
  return !lineBreak.test(this.input.slice(this.pos, next)) &&
    this.input.slice(next, next + 8) === "function" &&
    (next + 8 === this.input.length || !isIdentifierChar(this.input.charAt(next + 8)))
};

// Parse a single statement.
//
// If expecting a statement and finding a slash operator, parse a
// regular expression literal. This is to handle cases like
// `if (foo) /blah/.exec(foo)`, where looking at the previous token
// does not help.

pp$1.parseStatement = function(context, topLevel, exports) {
  var starttype = this.type, node = this.startNode(), kind;

  if (this.isLet(context)) {
    starttype = types._var;
    kind = "let";
  }

  // Most types of statements are recognized by the keyword they
  // start with. Many are trivial to parse, some require a bit of
  // complexity.

  switch (starttype) {
  case types._break: case types._continue: return this.parseBreakContinueStatement(node, starttype.keyword)
  case types._debugger: return this.parseDebuggerStatement(node)
  case types._do: return this.parseDoStatement(node)
  case types._for: return this.parseForStatement(node)
  case types._function:
    // Function as sole body of either an if statement or a labeled statement
    // works, but not when it is part of a labeled statement that is the sole
    // body of an if statement.
    if ((context && (this.strict || context !== "if" && context !== "label")) && this.options.ecmaVersion >= 6) { this.unexpected(); }
    return this.parseFunctionStatement(node, false, !context)
  case types._class:
    if (context) { this.unexpected(); }
    return this.parseClass(node, true)
  case types._if: return this.parseIfStatement(node)
  case types._return: return this.parseReturnStatement(node)
  case types._switch: return this.parseSwitchStatement(node)
  case types._throw: return this.parseThrowStatement(node)
  case types._try: return this.parseTryStatement(node)
  case types._const: case types._var:
    kind = kind || this.value;
    if (context && kind !== "var") { this.unexpected(); }
    return this.parseVarStatement(node, kind)
  case types._while: return this.parseWhileStatement(node)
  case types._with: return this.parseWithStatement(node)
  case types.braceL: return this.parseBlock(true, node)
  case types.semi: return this.parseEmptyStatement(node)
  case types._export:
  case types._import:
    if (this.options.ecmaVersion > 10 && starttype === types._import) {
      skipWhiteSpace.lastIndex = this.pos;
      var skip = skipWhiteSpace.exec(this.input);
      var next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
      if (nextCh === 40 || nextCh === 46) // '(' or '.'
        { return this.parseExpressionStatement(node, this.parseExpression()) }
    }

    if (!this.options.allowImportExportEverywhere) {
      if (!topLevel)
        { this.raise(this.start, "'import' and 'export' may only appear at the top level"); }
      if (!this.inModule)
        { this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'"); }
    }
    return starttype === types._import ? this.parseImport(node) : this.parseExport(node, exports)

    // If the statement does not start with a statement keyword or a
    // brace, it's an ExpressionStatement or LabeledStatement. We
    // simply start parsing an expression, and afterwards, if the
    // next token is a colon and the expression was a simple
    // Identifier node, we switch to interpreting it as a label.
  default:
    if (this.isAsyncFunction()) {
      if (context) { this.unexpected(); }
      this.next();
      return this.parseFunctionStatement(node, true, !context)
    }

    var maybeName = this.value, expr = this.parseExpression();
    if (starttype === types.name && expr.type === "Identifier" && this.eat(types.colon))
      { return this.parseLabeledStatement(node, maybeName, expr, context) }
    else { return this.parseExpressionStatement(node, expr) }
  }
};

pp$1.parseBreakContinueStatement = function(node, keyword) {
  var isBreak = keyword === "break";
  this.next();
  if (this.eat(types.semi) || this.insertSemicolon()) { node.label = null; }
  else if (this.type !== types.name) { this.unexpected(); }
  else {
    node.label = this.parseIdent();
    this.semicolon();
  }

  // Verify that there is an actual destination to break or
  // continue to.
  var i = 0;
  for (; i < this.labels.length; ++i) {
    var lab = this.labels[i];
    if (node.label == null || lab.name === node.label.name) {
      if (lab.kind != null && (isBreak || lab.kind === "loop")) { break }
      if (node.label && isBreak) { break }
    }
  }
  if (i === this.labels.length) { this.raise(node.start, "Unsyntactic " + keyword); }
  return this.finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement")
};

pp$1.parseDebuggerStatement = function(node) {
  this.next();
  this.semicolon();
  return this.finishNode(node, "DebuggerStatement")
};

pp$1.parseDoStatement = function(node) {
  this.next();
  this.labels.push(loopLabel);
  node.body = this.parseStatement("do");
  this.labels.pop();
  this.expect(types._while);
  node.test = this.parseParenExpression();
  if (this.options.ecmaVersion >= 6)
    { this.eat(types.semi); }
  else
    { this.semicolon(); }
  return this.finishNode(node, "DoWhileStatement")
};

// Disambiguating between a `for` and a `for`/`in` or `for`/`of`
// loop is non-trivial. Basically, we have to parse the init `var`
// statement or expression, disallowing the `in` operator (see
// the second parameter to `parseExpression`), and then check
// whether the next token is `in` or `of`. When there is no init
// part (semicolon immediately after the opening parenthesis), it
// is a regular `for` loop.

pp$1.parseForStatement = function(node) {
  this.next();
  var awaitAt = (this.options.ecmaVersion >= 9 && (this.inAsync || (!this.inFunction && this.options.allowAwaitOutsideFunction)) && this.eatContextual("await")) ? this.lastTokStart : -1;
  this.labels.push(loopLabel);
  this.enterScope(0);
  this.expect(types.parenL);
  if (this.type === types.semi) {
    if (awaitAt > -1) { this.unexpected(awaitAt); }
    return this.parseFor(node, null)
  }
  var isLet = this.isLet();
  if (this.type === types._var || this.type === types._const || isLet) {
    var init$1 = this.startNode(), kind = isLet ? "let" : this.value;
    this.next();
    this.parseVar(init$1, true, kind);
    this.finishNode(init$1, "VariableDeclaration");
    if ((this.type === types._in || (this.options.ecmaVersion >= 6 && this.isContextual("of"))) && init$1.declarations.length === 1) {
      if (this.options.ecmaVersion >= 9) {
        if (this.type === types._in) {
          if (awaitAt > -1) { this.unexpected(awaitAt); }
        } else { node.await = awaitAt > -1; }
      }
      return this.parseForIn(node, init$1)
    }
    if (awaitAt > -1) { this.unexpected(awaitAt); }
    return this.parseFor(node, init$1)
  }
  var refDestructuringErrors = new DestructuringErrors;
  var init = this.parseExpression(true, refDestructuringErrors);
  if (this.type === types._in || (this.options.ecmaVersion >= 6 && this.isContextual("of"))) {
    if (this.options.ecmaVersion >= 9) {
      if (this.type === types._in) {
        if (awaitAt > -1) { this.unexpected(awaitAt); }
      } else { node.await = awaitAt > -1; }
    }
    this.toAssignable(init, false, refDestructuringErrors);
    this.checkLValPattern(init);
    return this.parseForIn(node, init)
  } else {
    this.checkExpressionErrors(refDestructuringErrors, true);
  }
  if (awaitAt > -1) { this.unexpected(awaitAt); }
  return this.parseFor(node, init)
};

pp$1.parseFunctionStatement = function(node, isAsync, declarationPosition) {
  this.next();
  return this.parseFunction(node, FUNC_STATEMENT | (declarationPosition ? 0 : FUNC_HANGING_STATEMENT), false, isAsync)
};

pp$1.parseIfStatement = function(node) {
  this.next();
  node.test = this.parseParenExpression();
  // allow function declarations in branches, but only in non-strict mode
  node.consequent = this.parseStatement("if");
  node.alternate = this.eat(types._else) ? this.parseStatement("if") : null;
  return this.finishNode(node, "IfStatement")
};

pp$1.parseReturnStatement = function(node) {
  if (!this.inFunction && !this.options.allowReturnOutsideFunction)
    { this.raise(this.start, "'return' outside of function"); }
  this.next();

  // In `return` (and `break`/`continue`), the keywords with
  // optional arguments, we eagerly look for a semicolon or the
  // possibility to insert one.

  if (this.eat(types.semi) || this.insertSemicolon()) { node.argument = null; }
  else { node.argument = this.parseExpression(); this.semicolon(); }
  return this.finishNode(node, "ReturnStatement")
};

pp$1.parseSwitchStatement = function(node) {
  this.next();
  node.discriminant = this.parseParenExpression();
  node.cases = [];
  this.expect(types.braceL);
  this.labels.push(switchLabel);
  this.enterScope(0);

  // Statements under must be grouped (by label) in SwitchCase
  // nodes. `cur` is used to keep the node that we are currently
  // adding statements to.

  var cur;
  for (var sawDefault = false; this.type !== types.braceR;) {
    if (this.type === types._case || this.type === types._default) {
      var isCase = this.type === types._case;
      if (cur) { this.finishNode(cur, "SwitchCase"); }
      node.cases.push(cur = this.startNode());
      cur.consequent = [];
      this.next();
      if (isCase) {
        cur.test = this.parseExpression();
      } else {
        if (sawDefault) { this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"); }
        sawDefault = true;
        cur.test = null;
      }
      this.expect(types.colon);
    } else {
      if (!cur) { this.unexpected(); }
      cur.consequent.push(this.parseStatement(null));
    }
  }
  this.exitScope();
  if (cur) { this.finishNode(cur, "SwitchCase"); }
  this.next(); // Closing brace
  this.labels.pop();
  return this.finishNode(node, "SwitchStatement")
};

pp$1.parseThrowStatement = function(node) {
  this.next();
  if (lineBreak.test(this.input.slice(this.lastTokEnd, this.start)))
    { this.raise(this.lastTokEnd, "Illegal newline after throw"); }
  node.argument = this.parseExpression();
  this.semicolon();
  return this.finishNode(node, "ThrowStatement")
};

// Reused empty array added for node fields that are always empty.

var empty = [];

pp$1.parseTryStatement = function(node) {
  this.next();
  node.block = this.parseBlock();
  node.handler = null;
  if (this.type === types._catch) {
    var clause = this.startNode();
    this.next();
    if (this.eat(types.parenL)) {
      clause.param = this.parseBindingAtom();
      var simple = clause.param.type === "Identifier";
      this.enterScope(simple ? SCOPE_SIMPLE_CATCH : 0);
      this.checkLValPattern(clause.param, simple ? BIND_SIMPLE_CATCH : BIND_LEXICAL);
      this.expect(types.parenR);
    } else {
      if (this.options.ecmaVersion < 10) { this.unexpected(); }
      clause.param = null;
      this.enterScope(0);
    }
    clause.body = this.parseBlock(false);
    this.exitScope();
    node.handler = this.finishNode(clause, "CatchClause");
  }
  node.finalizer = this.eat(types._finally) ? this.parseBlock() : null;
  if (!node.handler && !node.finalizer)
    { this.raise(node.start, "Missing catch or finally clause"); }
  return this.finishNode(node, "TryStatement")
};

pp$1.parseVarStatement = function(node, kind) {
  this.next();
  this.parseVar(node, false, kind);
  this.semicolon();
  return this.finishNode(node, "VariableDeclaration")
};

pp$1.parseWhileStatement = function(node) {
  this.next();
  node.test = this.parseParenExpression();
  this.labels.push(loopLabel);
  node.body = this.parseStatement("while");
  this.labels.pop();
  return this.finishNode(node, "WhileStatement")
};

pp$1.parseWithStatement = function(node) {
  if (this.strict) { this.raise(this.start, "'with' in strict mode"); }
  this.next();
  node.object = this.parseParenExpression();
  node.body = this.parseStatement("with");
  return this.finishNode(node, "WithStatement")
};

pp$1.parseEmptyStatement = function(node) {
  this.next();
  return this.finishNode(node, "EmptyStatement")
};

pp$1.parseLabeledStatement = function(node, maybeName, expr, context) {
  for (var i$1 = 0, list = this.labels; i$1 < list.length; i$1 += 1)
    {
    var label = list[i$1];

    if (label.name === maybeName)
      { this.raise(expr.start, "Label '" + maybeName + "' is already declared");
  } }
  var kind = this.type.isLoop ? "loop" : this.type === types._switch ? "switch" : null;
  for (var i = this.labels.length - 1; i >= 0; i--) {
    var label$1 = this.labels[i];
    if (label$1.statementStart === node.start) {
      // Update information about previous labels on this node
      label$1.statementStart = this.start;
      label$1.kind = kind;
    } else { break }
  }
  this.labels.push({name: maybeName, kind: kind, statementStart: this.start});
  node.body = this.parseStatement(context ? context.indexOf("label") === -1 ? context + "label" : context : "label");
  this.labels.pop();
  node.label = expr;
  return this.finishNode(node, "LabeledStatement")
};

pp$1.parseExpressionStatement = function(node, expr) {
  node.expression = expr;
  this.semicolon();
  return this.finishNode(node, "ExpressionStatement")
};

// Parse a semicolon-enclosed block of statements, handling `"use
// strict"` declarations when `allowStrict` is true (used for
// function bodies).

pp$1.parseBlock = function(createNewLexicalScope, node, exitStrict) {
  if ( createNewLexicalScope === void 0 ) createNewLexicalScope = true;
  if ( node === void 0 ) node = this.startNode();

  node.body = [];
  this.expect(types.braceL);
  if (createNewLexicalScope) { this.enterScope(0); }
  while (this.type !== types.braceR) {
    var stmt = this.parseStatement(null);
    node.body.push(stmt);
  }
  if (exitStrict) { this.strict = false; }
  this.next();
  if (createNewLexicalScope) { this.exitScope(); }
  return this.finishNode(node, "BlockStatement")
};

// Parse a regular `for` loop. The disambiguation code in
// `parseStatement` will already have parsed the init statement or
// expression.

pp$1.parseFor = function(node, init) {
  node.init = init;
  this.expect(types.semi);
  node.test = this.type === types.semi ? null : this.parseExpression();
  this.expect(types.semi);
  node.update = this.type === types.parenR ? null : this.parseExpression();
  this.expect(types.parenR);
  node.body = this.parseStatement("for");
  this.exitScope();
  this.labels.pop();
  return this.finishNode(node, "ForStatement")
};

// Parse a `for`/`in` and `for`/`of` loop, which are almost
// same from parser's perspective.

pp$1.parseForIn = function(node, init) {
  var isForIn = this.type === types._in;
  this.next();

  if (
    init.type === "VariableDeclaration" &&
    init.declarations[0].init != null &&
    (
      !isForIn ||
      this.options.ecmaVersion < 8 ||
      this.strict ||
      init.kind !== "var" ||
      init.declarations[0].id.type !== "Identifier"
    )
  ) {
    this.raise(
      init.start,
      ((isForIn ? "for-in" : "for-of") + " loop variable declaration may not have an initializer")
    );
  }
  node.left = init;
  node.right = isForIn ? this.parseExpression() : this.parseMaybeAssign();
  this.expect(types.parenR);
  node.body = this.parseStatement("for");
  this.exitScope();
  this.labels.pop();
  return this.finishNode(node, isForIn ? "ForInStatement" : "ForOfStatement")
};

// Parse a list of variable declarations.

pp$1.parseVar = function(node, isFor, kind) {
  node.declarations = [];
  node.kind = kind;
  for (;;) {
    var decl = this.startNode();
    this.parseVarId(decl, kind);
    if (this.eat(types.eq)) {
      decl.init = this.parseMaybeAssign(isFor);
    } else if (kind === "const" && !(this.type === types._in || (this.options.ecmaVersion >= 6 && this.isContextual("of")))) {
      this.unexpected();
    } else if (decl.id.type !== "Identifier" && !(isFor && (this.type === types._in || this.isContextual("of")))) {
      this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value");
    } else {
      decl.init = null;
    }
    node.declarations.push(this.finishNode(decl, "VariableDeclarator"));
    if (!this.eat(types.comma)) { break }
  }
  return node
};

pp$1.parseVarId = function(decl, kind) {
  decl.id = this.parseBindingAtom();
  this.checkLValPattern(decl.id, kind === "var" ? BIND_VAR : BIND_LEXICAL, false);
};

var FUNC_STATEMENT = 1, FUNC_HANGING_STATEMENT = 2, FUNC_NULLABLE_ID = 4;

// Parse a function declaration or literal (depending on the
// `statement & FUNC_STATEMENT`).

// Remove `allowExpressionBody` for 7.0.0, as it is only called with false
pp$1.parseFunction = function(node, statement, allowExpressionBody, isAsync) {
  this.initFunction(node);
  if (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !isAsync) {
    if (this.type === types.star && (statement & FUNC_HANGING_STATEMENT))
      { this.unexpected(); }
    node.generator = this.eat(types.star);
  }
  if (this.options.ecmaVersion >= 8)
    { node.async = !!isAsync; }

  if (statement & FUNC_STATEMENT) {
    node.id = (statement & FUNC_NULLABLE_ID) && this.type !== types.name ? null : this.parseIdent();
    if (node.id && !(statement & FUNC_HANGING_STATEMENT))
      // If it is a regular function declaration in sloppy mode, then it is
      // subject to Annex B semantics (BIND_FUNCTION). Otherwise, the binding
      // mode depends on properties of the current scope (see
      // treatFunctionsAsVar).
      { this.checkLValSimple(node.id, (this.strict || node.generator || node.async) ? this.treatFunctionsAsVar ? BIND_VAR : BIND_LEXICAL : BIND_FUNCTION); }
  }

  var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
  this.yieldPos = 0;
  this.awaitPos = 0;
  this.awaitIdentPos = 0;
  this.enterScope(functionFlags(node.async, node.generator));

  if (!(statement & FUNC_STATEMENT))
    { node.id = this.type === types.name ? this.parseIdent() : null; }

  this.parseFunctionParams(node);
  this.parseFunctionBody(node, allowExpressionBody, false);

  this.yieldPos = oldYieldPos;
  this.awaitPos = oldAwaitPos;
  this.awaitIdentPos = oldAwaitIdentPos;
  return this.finishNode(node, (statement & FUNC_STATEMENT) ? "FunctionDeclaration" : "FunctionExpression")
};

pp$1.parseFunctionParams = function(node) {
  this.expect(types.parenL);
  node.params = this.parseBindingList(types.parenR, false, this.options.ecmaVersion >= 8);
  this.checkYieldAwaitInDefaultParams();
};

// Parse a class declaration or literal (depending on the
// `isStatement` parameter).

pp$1.parseClass = function(node, isStatement) {
  this.next();

  // ecma-262 14.6 Class Definitions
  // A class definition is always strict mode code.
  var oldStrict = this.strict;
  this.strict = true;

  this.parseClassId(node, isStatement);
  this.parseClassSuper(node);
  var classBody = this.startNode();
  var hadConstructor = false;
  classBody.body = [];
  this.expect(types.braceL);
  while (this.type !== types.braceR) {
    var element = this.parseClassElement(node.superClass !== null);
    if (element) {
      classBody.body.push(element);
      if (element.type === "MethodDefinition" && element.kind === "constructor") {
        if (hadConstructor) { this.raise(element.start, "Duplicate constructor in the same class"); }
        hadConstructor = true;
      }
    }
  }
  this.strict = oldStrict;
  this.next();
  node.body = this.finishNode(classBody, "ClassBody");
  return this.finishNode(node, isStatement ? "ClassDeclaration" : "ClassExpression")
};

pp$1.parseClassElement = function(constructorAllowsSuper) {
  var this$1 = this;

  if (this.eat(types.semi)) { return null }

  var method = this.startNode();
  var tryContextual = function (k, noLineBreak) {
    if ( noLineBreak === void 0 ) noLineBreak = false;

    var start = this$1.start, startLoc = this$1.startLoc;
    if (!this$1.eatContextual(k)) { return false }
    if (this$1.type !== types.parenL && (!noLineBreak || !this$1.canInsertSemicolon())) { return true }
    if (method.key) { this$1.unexpected(); }
    method.computed = false;
    method.key = this$1.startNodeAt(start, startLoc);
    method.key.name = k;
    this$1.finishNode(method.key, "Identifier");
    return false
  };

  method.kind = "method";
  method.static = tryContextual("static");
  var isGenerator = this.eat(types.star);
  var isAsync = false;
  if (!isGenerator) {
    if (this.options.ecmaVersion >= 8 && tryContextual("async", true)) {
      isAsync = true;
      isGenerator = this.options.ecmaVersion >= 9 && this.eat(types.star);
    } else if (tryContextual("get")) {
      method.kind = "get";
    } else if (tryContextual("set")) {
      method.kind = "set";
    }
  }
  if (!method.key) { this.parsePropertyName(method); }
  var key = method.key;
  var allowsDirectSuper = false;
  if (!method.computed && !method.static && (key.type === "Identifier" && key.name === "constructor" ||
      key.type === "Literal" && key.value === "constructor")) {
    if (method.kind !== "method") { this.raise(key.start, "Constructor can't have get/set modifier"); }
    if (isGenerator) { this.raise(key.start, "Constructor can't be a generator"); }
    if (isAsync) { this.raise(key.start, "Constructor can't be an async method"); }
    method.kind = "constructor";
    allowsDirectSuper = constructorAllowsSuper;
  } else if (method.static && key.type === "Identifier" && key.name === "prototype") {
    this.raise(key.start, "Classes may not have a static property named prototype");
  }
  this.parseClassMethod(method, isGenerator, isAsync, allowsDirectSuper);
  if (method.kind === "get" && method.value.params.length !== 0)
    { this.raiseRecoverable(method.value.start, "getter should have no params"); }
  if (method.kind === "set" && method.value.params.length !== 1)
    { this.raiseRecoverable(method.value.start, "setter should have exactly one param"); }
  if (method.kind === "set" && method.value.params[0].type === "RestElement")
    { this.raiseRecoverable(method.value.params[0].start, "Setter cannot use rest params"); }
  return method
};

pp$1.parseClassMethod = function(method, isGenerator, isAsync, allowsDirectSuper) {
  method.value = this.parseMethod(isGenerator, isAsync, allowsDirectSuper);
  return this.finishNode(method, "MethodDefinition")
};

pp$1.parseClassId = function(node, isStatement) {
  if (this.type === types.name) {
    node.id = this.parseIdent();
    if (isStatement)
      { this.checkLValSimple(node.id, BIND_LEXICAL, false); }
  } else {
    if (isStatement === true)
      { this.unexpected(); }
    node.id = null;
  }
};

pp$1.parseClassSuper = function(node) {
  node.superClass = this.eat(types._extends) ? this.parseExprSubscripts() : null;
};

// Parses module export declaration.

pp$1.parseExport = function(node, exports) {
  this.next();
  // export * from '...'
  if (this.eat(types.star)) {
    if (this.options.ecmaVersion >= 11) {
      if (this.eatContextual("as")) {
        node.exported = this.parseIdent(true);
        this.checkExport(exports, node.exported.name, this.lastTokStart);
      } else {
        node.exported = null;
      }
    }
    this.expectContextual("from");
    if (this.type !== types.string) { this.unexpected(); }
    node.source = this.parseExprAtom();
    this.semicolon();
    return this.finishNode(node, "ExportAllDeclaration")
  }
  if (this.eat(types._default)) { // export default ...
    this.checkExport(exports, "default", this.lastTokStart);
    var isAsync;
    if (this.type === types._function || (isAsync = this.isAsyncFunction())) {
      var fNode = this.startNode();
      this.next();
      if (isAsync) { this.next(); }
      node.declaration = this.parseFunction(fNode, FUNC_STATEMENT | FUNC_NULLABLE_ID, false, isAsync);
    } else if (this.type === types._class) {
      var cNode = this.startNode();
      node.declaration = this.parseClass(cNode, "nullableID");
    } else {
      node.declaration = this.parseMaybeAssign();
      this.semicolon();
    }
    return this.finishNode(node, "ExportDefaultDeclaration")
  }
  // export var|const|let|function|class ...
  if (this.shouldParseExportStatement()) {
    node.declaration = this.parseStatement(null);
    if (node.declaration.type === "VariableDeclaration")
      { this.checkVariableExport(exports, node.declaration.declarations); }
    else
      { this.checkExport(exports, node.declaration.id.name, node.declaration.id.start); }
    node.specifiers = [];
    node.source = null;
  } else { // export { x, y as z } [from '...']
    node.declaration = null;
    node.specifiers = this.parseExportSpecifiers(exports);
    if (this.eatContextual("from")) {
      if (this.type !== types.string) { this.unexpected(); }
      node.source = this.parseExprAtom();
    } else {
      for (var i = 0, list = node.specifiers; i < list.length; i += 1) {
        // check for keywords used as local names
        var spec = list[i];

        this.checkUnreserved(spec.local);
        // check if export is defined
        this.checkLocalExport(spec.local);
      }

      node.source = null;
    }
    this.semicolon();
  }
  return this.finishNode(node, "ExportNamedDeclaration")
};

pp$1.checkExport = function(exports, name, pos) {
  if (!exports) { return }
  if (has(exports, name))
    { this.raiseRecoverable(pos, "Duplicate export '" + name + "'"); }
  exports[name] = true;
};

pp$1.checkPatternExport = function(exports, pat) {
  var type = pat.type;
  if (type === "Identifier")
    { this.checkExport(exports, pat.name, pat.start); }
  else if (type === "ObjectPattern")
    { for (var i = 0, list = pat.properties; i < list.length; i += 1)
      {
        var prop = list[i];

        this.checkPatternExport(exports, prop);
      } }
  else if (type === "ArrayPattern")
    { for (var i$1 = 0, list$1 = pat.elements; i$1 < list$1.length; i$1 += 1) {
      var elt = list$1[i$1];

        if (elt) { this.checkPatternExport(exports, elt); }
    } }
  else if (type === "Property")
    { this.checkPatternExport(exports, pat.value); }
  else if (type === "AssignmentPattern")
    { this.checkPatternExport(exports, pat.left); }
  else if (type === "RestElement")
    { this.checkPatternExport(exports, pat.argument); }
  else if (type === "ParenthesizedExpression")
    { this.checkPatternExport(exports, pat.expression); }
};

pp$1.checkVariableExport = function(exports, decls) {
  if (!exports) { return }
  for (var i = 0, list = decls; i < list.length; i += 1)
    {
    var decl = list[i];

    this.checkPatternExport(exports, decl.id);
  }
};

pp$1.shouldParseExportStatement = function() {
  return this.type.keyword === "var" ||
    this.type.keyword === "const" ||
    this.type.keyword === "class" ||
    this.type.keyword === "function" ||
    this.isLet() ||
    this.isAsyncFunction()
};

// Parses a comma-separated list of module exports.

pp$1.parseExportSpecifiers = function(exports) {
  var nodes = [], first = true;
  // export { x, y as z } [from '...']
  this.expect(types.braceL);
  while (!this.eat(types.braceR)) {
    if (!first) {
      this.expect(types.comma);
      if (this.afterTrailingComma(types.braceR)) { break }
    } else { first = false; }

    var node = this.startNode();
    node.local = this.parseIdent(true);
    node.exported = this.eatContextual("as") ? this.parseIdent(true) : node.local;
    this.checkExport(exports, node.exported.name, node.exported.start);
    nodes.push(this.finishNode(node, "ExportSpecifier"));
  }
  return nodes
};

// Parses import declaration.

pp$1.parseImport = function(node) {
  this.next();
  // import '...'
  if (this.type === types.string) {
    node.specifiers = empty;
    node.source = this.parseExprAtom();
  } else {
    node.specifiers = this.parseImportSpecifiers();
    this.expectContextual("from");
    node.source = this.type === types.string ? this.parseExprAtom() : this.unexpected();
  }
  this.semicolon();
  return this.finishNode(node, "ImportDeclaration")
};

// Parses a comma-separated list of module imports.

pp$1.parseImportSpecifiers = function() {
  var nodes = [], first = true;
  if (this.type === types.name) {
    // import defaultObj, { x, y as z } from '...'
    var node = this.startNode();
    node.local = this.parseIdent();
    this.checkLValSimple(node.local, BIND_LEXICAL);
    nodes.push(this.finishNode(node, "ImportDefaultSpecifier"));
    if (!this.eat(types.comma)) { return nodes }
  }
  if (this.type === types.star) {
    var node$1 = this.startNode();
    this.next();
    this.expectContextual("as");
    node$1.local = this.parseIdent();
    this.checkLValSimple(node$1.local, BIND_LEXICAL);
    nodes.push(this.finishNode(node$1, "ImportNamespaceSpecifier"));
    return nodes
  }
  this.expect(types.braceL);
  while (!this.eat(types.braceR)) {
    if (!first) {
      this.expect(types.comma);
      if (this.afterTrailingComma(types.braceR)) { break }
    } else { first = false; }

    var node$2 = this.startNode();
    node$2.imported = this.parseIdent(true);
    if (this.eatContextual("as")) {
      node$2.local = this.parseIdent();
    } else {
      this.checkUnreserved(node$2.imported);
      node$2.local = node$2.imported;
    }
    this.checkLValSimple(node$2.local, BIND_LEXICAL);
    nodes.push(this.finishNode(node$2, "ImportSpecifier"));
  }
  return nodes
};

// Set `ExpressionStatement#directive` property for directive prologues.
pp$1.adaptDirectivePrologue = function(statements) {
  for (var i = 0; i < statements.length && this.isDirectiveCandidate(statements[i]); ++i) {
    statements[i].directive = statements[i].expression.raw.slice(1, -1);
  }
};
pp$1.isDirectiveCandidate = function(statement) {
  return (
    statement.type === "ExpressionStatement" &&
    statement.expression.type === "Literal" &&
    typeof statement.expression.value === "string" &&
    // Reject parenthesized strings.
    (this.input[statement.start] === "\"" || this.input[statement.start] === "'")
  )
};

var pp$2 = Parser.prototype;

// Convert existing expression atom to assignable pattern
// if possible.

pp$2.toAssignable = function(node, isBinding, refDestructuringErrors) {
  if (this.options.ecmaVersion >= 6 && node) {
    switch (node.type) {
    case "Identifier":
      if (this.inAsync && node.name === "await")
        { this.raise(node.start, "Cannot use 'await' as identifier inside an async function"); }
      break

    case "ObjectPattern":
    case "ArrayPattern":
    case "AssignmentPattern":
    case "RestElement":
      break

    case "ObjectExpression":
      node.type = "ObjectPattern";
      if (refDestructuringErrors) { this.checkPatternErrors(refDestructuringErrors, true); }
      for (var i = 0, list = node.properties; i < list.length; i += 1) {
        var prop = list[i];

      this.toAssignable(prop, isBinding);
        // Early error:
        //   AssignmentRestProperty[Yield, Await] :
        //     `...` DestructuringAssignmentTarget[Yield, Await]
        //
        //   It is a Syntax Error if |DestructuringAssignmentTarget| is an |ArrayLiteral| or an |ObjectLiteral|.
        if (
          prop.type === "RestElement" &&
          (prop.argument.type === "ArrayPattern" || prop.argument.type === "ObjectPattern")
        ) {
          this.raise(prop.argument.start, "Unexpected token");
        }
      }
      break

    case "Property":
      // AssignmentProperty has type === "Property"
      if (node.kind !== "init") { this.raise(node.key.start, "Object pattern can't contain getter or setter"); }
      this.toAssignable(node.value, isBinding);
      break

    case "ArrayExpression":
      node.type = "ArrayPattern";
      if (refDestructuringErrors) { this.checkPatternErrors(refDestructuringErrors, true); }
      this.toAssignableList(node.elements, isBinding);
      break

    case "SpreadElement":
      node.type = "RestElement";
      this.toAssignable(node.argument, isBinding);
      if (node.argument.type === "AssignmentPattern")
        { this.raise(node.argument.start, "Rest elements cannot have a default value"); }
      break

    case "AssignmentExpression":
      if (node.operator !== "=") { this.raise(node.left.end, "Only '=' operator can be used for specifying default value."); }
      node.type = "AssignmentPattern";
      delete node.operator;
      this.toAssignable(node.left, isBinding);
      break

    case "ParenthesizedExpression":
      this.toAssignable(node.expression, isBinding, refDestructuringErrors);
      break

    case "ChainExpression":
      this.raiseRecoverable(node.start, "Optional chaining cannot appear in left-hand side");
      break

    case "MemberExpression":
      if (!isBinding) { break }

    default:
      this.raise(node.start, "Assigning to rvalue");
    }
  } else if (refDestructuringErrors) { this.checkPatternErrors(refDestructuringErrors, true); }
  return node
};

// Convert list of expression atoms to binding list.

pp$2.toAssignableList = function(exprList, isBinding) {
  var end = exprList.length;
  for (var i = 0; i < end; i++) {
    var elt = exprList[i];
    if (elt) { this.toAssignable(elt, isBinding); }
  }
  if (end) {
    var last = exprList[end - 1];
    if (this.options.ecmaVersion === 6 && isBinding && last && last.type === "RestElement" && last.argument.type !== "Identifier")
      { this.unexpected(last.argument.start); }
  }
  return exprList
};

// Parses spread element.

pp$2.parseSpread = function(refDestructuringErrors) {
  var node = this.startNode();
  this.next();
  node.argument = this.parseMaybeAssign(false, refDestructuringErrors);
  return this.finishNode(node, "SpreadElement")
};

pp$2.parseRestBinding = function() {
  var node = this.startNode();
  this.next();

  // RestElement inside of a function parameter must be an identifier
  if (this.options.ecmaVersion === 6 && this.type !== types.name)
    { this.unexpected(); }

  node.argument = this.parseBindingAtom();

  return this.finishNode(node, "RestElement")
};

// Parses lvalue (assignable) atom.

pp$2.parseBindingAtom = function() {
  if (this.options.ecmaVersion >= 6) {
    switch (this.type) {
    case types.bracketL:
      var node = this.startNode();
      this.next();
      node.elements = this.parseBindingList(types.bracketR, true, true);
      return this.finishNode(node, "ArrayPattern")

    case types.braceL:
      return this.parseObj(true)
    }
  }
  return this.parseIdent()
};

pp$2.parseBindingList = function(close, allowEmpty, allowTrailingComma) {
  var elts = [], first = true;
  while (!this.eat(close)) {
    if (first) { first = false; }
    else { this.expect(types.comma); }
    if (allowEmpty && this.type === types.comma) {
      elts.push(null);
    } else if (allowTrailingComma && this.afterTrailingComma(close)) {
      break
    } else if (this.type === types.ellipsis) {
      var rest = this.parseRestBinding();
      this.parseBindingListItem(rest);
      elts.push(rest);
      if (this.type === types.comma) { this.raise(this.start, "Comma is not permitted after the rest element"); }
      this.expect(close);
      break
    } else {
      var elem = this.parseMaybeDefault(this.start, this.startLoc);
      this.parseBindingListItem(elem);
      elts.push(elem);
    }
  }
  return elts
};

pp$2.parseBindingListItem = function(param) {
  return param
};

// Parses assignment pattern around given atom if possible.

pp$2.parseMaybeDefault = function(startPos, startLoc, left) {
  left = left || this.parseBindingAtom();
  if (this.options.ecmaVersion < 6 || !this.eat(types.eq)) { return left }
  var node = this.startNodeAt(startPos, startLoc);
  node.left = left;
  node.right = this.parseMaybeAssign();
  return this.finishNode(node, "AssignmentPattern")
};

// The following three functions all verify that a node is an lvalue —
// something that can be bound, or assigned to. In order to do so, they perform
// a variety of checks:
//
// - Check that none of the bound/assigned-to identifiers are reserved words.
// - Record name declarations for bindings in the appropriate scope.
// - Check duplicate argument names, if checkClashes is set.
//
// If a complex binding pattern is encountered (e.g., object and array
// destructuring), the entire pattern is recursively checked.
//
// There are three versions of checkLVal*() appropriate for different
// circumstances:
//
// - checkLValSimple() shall be used if the syntactic construct supports
//   nothing other than identifiers and member expressions. Parenthesized
//   expressions are also correctly handled. This is generally appropriate for
//   constructs for which the spec says
//
//   > It is a Syntax Error if AssignmentTargetType of [the production] is not
//   > simple.
//
//   It is also appropriate for checking if an identifier is valid and not
//   defined elsewhere, like import declarations or function/class identifiers.
//
//   Examples where this is used include:
//     a += …;
//     import a from '…';
//   where a is the node to be checked.
//
// - checkLValPattern() shall be used if the syntactic construct supports
//   anything checkLValSimple() supports, as well as object and array
//   destructuring patterns. This is generally appropriate for constructs for
//   which the spec says
//
//   > It is a Syntax Error if [the production] is neither an ObjectLiteral nor
//   > an ArrayLiteral and AssignmentTargetType of [the production] is not
//   > simple.
//
//   Examples where this is used include:
//     (a = …);
//     const a = …;
//     try { … } catch (a) { … }
//   where a is the node to be checked.
//
// - checkLValInnerPattern() shall be used if the syntactic construct supports
//   anything checkLValPattern() supports, as well as default assignment
//   patterns, rest elements, and other constructs that may appear within an
//   object or array destructuring pattern.
//
//   As a special case, function parameters also use checkLValInnerPattern(),
//   as they also support defaults and rest constructs.
//
// These functions deliberately support both assignment and binding constructs,
// as the logic for both is exceedingly similar. If the node is the target of
// an assignment, then bindingType should be set to BIND_NONE. Otherwise, it
// should be set to the appropriate BIND_* constant, like BIND_VAR or
// BIND_LEXICAL.
//
// If the function is called with a non-BIND_NONE bindingType, then
// additionally a checkClashes object may be specified to allow checking for
// duplicate argument names. checkClashes is ignored if the provided construct
// is an assignment (i.e., bindingType is BIND_NONE).

pp$2.checkLValSimple = function(expr, bindingType, checkClashes) {
  if ( bindingType === void 0 ) bindingType = BIND_NONE;

  var isBind = bindingType !== BIND_NONE;

  switch (expr.type) {
  case "Identifier":
    if (this.strict && this.reservedWordsStrictBind.test(expr.name))
      { this.raiseRecoverable(expr.start, (isBind ? "Binding " : "Assigning to ") + expr.name + " in strict mode"); }
    if (isBind) {
      if (bindingType === BIND_LEXICAL && expr.name === "let")
        { this.raiseRecoverable(expr.start, "let is disallowed as a lexically bound name"); }
      if (checkClashes) {
        if (has(checkClashes, expr.name))
          { this.raiseRecoverable(expr.start, "Argument name clash"); }
        checkClashes[expr.name] = true;
      }
      if (bindingType !== BIND_OUTSIDE) { this.declareName(expr.name, bindingType, expr.start); }
    }
    break

  case "ChainExpression":
    this.raiseRecoverable(expr.start, "Optional chaining cannot appear in left-hand side");
    break

  case "MemberExpression":
    if (isBind) { this.raiseRecoverable(expr.start, "Binding member expression"); }
    break

  case "ParenthesizedExpression":
    if (isBind) { this.raiseRecoverable(expr.start, "Binding parenthesized expression"); }
    return this.checkLValSimple(expr.expression, bindingType, checkClashes)

  default:
    this.raise(expr.start, (isBind ? "Binding" : "Assigning to") + " rvalue");
  }
};

pp$2.checkLValPattern = function(expr, bindingType, checkClashes) {
  if ( bindingType === void 0 ) bindingType = BIND_NONE;

  switch (expr.type) {
  case "ObjectPattern":
    for (var i = 0, list = expr.properties; i < list.length; i += 1) {
      var prop = list[i];

    this.checkLValInnerPattern(prop, bindingType, checkClashes);
    }
    break

  case "ArrayPattern":
    for (var i$1 = 0, list$1 = expr.elements; i$1 < list$1.length; i$1 += 1) {
      var elem = list$1[i$1];

    if (elem) { this.checkLValInnerPattern(elem, bindingType, checkClashes); }
    }
    break

  default:
    this.checkLValSimple(expr, bindingType, checkClashes);
  }
};

pp$2.checkLValInnerPattern = function(expr, bindingType, checkClashes) {
  if ( bindingType === void 0 ) bindingType = BIND_NONE;

  switch (expr.type) {
  case "Property":
    // AssignmentProperty has type === "Property"
    this.checkLValInnerPattern(expr.value, bindingType, checkClashes);
    break

  case "AssignmentPattern":
    this.checkLValPattern(expr.left, bindingType, checkClashes);
    break

  case "RestElement":
    this.checkLValPattern(expr.argument, bindingType, checkClashes);
    break

  default:
    this.checkLValPattern(expr, bindingType, checkClashes);
  }
};

// A recursive descent parser operates by defining functions for all

var pp$3 = Parser.prototype;

// Check if property name clashes with already added.
// Object/class getters and setters are not allowed to clash —
// either with each other or with an init property — and in
// strict mode, init properties are also not allowed to be repeated.

pp$3.checkPropClash = function(prop, propHash, refDestructuringErrors) {
  if (this.options.ecmaVersion >= 9 && prop.type === "SpreadElement")
    { return }
  if (this.options.ecmaVersion >= 6 && (prop.computed || prop.method || prop.shorthand))
    { return }
  var key = prop.key;
  var name;
  switch (key.type) {
  case "Identifier": name = key.name; break
  case "Literal": name = String(key.value); break
  default: return
  }
  var kind = prop.kind;
  if (this.options.ecmaVersion >= 6) {
    if (name === "__proto__" && kind === "init") {
      if (propHash.proto) {
        if (refDestructuringErrors) {
          if (refDestructuringErrors.doubleProto < 0)
            { refDestructuringErrors.doubleProto = key.start; }
          // Backwards-compat kludge. Can be removed in version 6.0
        } else { this.raiseRecoverable(key.start, "Redefinition of __proto__ property"); }
      }
      propHash.proto = true;
    }
    return
  }
  name = "$" + name;
  var other = propHash[name];
  if (other) {
    var redefinition;
    if (kind === "init") {
      redefinition = this.strict && other.init || other.get || other.set;
    } else {
      redefinition = other.init || other[kind];
    }
    if (redefinition)
      { this.raiseRecoverable(key.start, "Redefinition of property"); }
  } else {
    other = propHash[name] = {
      init: false,
      get: false,
      set: false
    };
  }
  other[kind] = true;
};

// ### Expression parsing

// These nest, from the most general expression type at the top to
// 'atomic', nondivisible expression types at the bottom. Most of
// the functions will simply let the function(s) below them parse,
// and, *if* the syntactic construct they handle is present, wrap
// the AST node that the inner parser gave them in another node.

// Parse a full expression. The optional arguments are used to
// forbid the `in` operator (in for loops initalization expressions)
// and provide reference for storing '=' operator inside shorthand
// property assignment in contexts where both object expression
// and object pattern might appear (so it's possible to raise
// delayed syntax error at correct position).

pp$3.parseExpression = function(noIn, refDestructuringErrors) {
  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseMaybeAssign(noIn, refDestructuringErrors);
  if (this.type === types.comma) {
    var node = this.startNodeAt(startPos, startLoc);
    node.expressions = [expr];
    while (this.eat(types.comma)) { node.expressions.push(this.parseMaybeAssign(noIn, refDestructuringErrors)); }
    return this.finishNode(node, "SequenceExpression")
  }
  return expr
};

// Parse an assignment expression. This includes applications of
// operators like `+=`.

pp$3.parseMaybeAssign = function(noIn, refDestructuringErrors, afterLeftParse) {
  if (this.isContextual("yield")) {
    if (this.inGenerator) { return this.parseYield(noIn) }
    // The tokenizer will assume an expression is allowed after
    // `yield`, but this isn't that kind of yield
    else { this.exprAllowed = false; }
  }

  var ownDestructuringErrors = false, oldParenAssign = -1, oldTrailingComma = -1;
  if (refDestructuringErrors) {
    oldParenAssign = refDestructuringErrors.parenthesizedAssign;
    oldTrailingComma = refDestructuringErrors.trailingComma;
    refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = -1;
  } else {
    refDestructuringErrors = new DestructuringErrors;
    ownDestructuringErrors = true;
  }

  var startPos = this.start, startLoc = this.startLoc;
  if (this.type === types.parenL || this.type === types.name)
    { this.potentialArrowAt = this.start; }
  var left = this.parseMaybeConditional(noIn, refDestructuringErrors);
  if (afterLeftParse) { left = afterLeftParse.call(this, left, startPos, startLoc); }
  if (this.type.isAssign) {
    var node = this.startNodeAt(startPos, startLoc);
    node.operator = this.value;
    if (this.type === types.eq)
      { left = this.toAssignable(left, false, refDestructuringErrors); }
    if (!ownDestructuringErrors) {
      refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = refDestructuringErrors.doubleProto = -1;
    }
    if (refDestructuringErrors.shorthandAssign >= left.start)
      { refDestructuringErrors.shorthandAssign = -1; } // reset because shorthand default was used correctly
    if (this.type === types.eq)
      { this.checkLValPattern(left); }
    else
      { this.checkLValSimple(left); }
    node.left = left;
    this.next();
    node.right = this.parseMaybeAssign(noIn);
    return this.finishNode(node, "AssignmentExpression")
  } else {
    if (ownDestructuringErrors) { this.checkExpressionErrors(refDestructuringErrors, true); }
  }
  if (oldParenAssign > -1) { refDestructuringErrors.parenthesizedAssign = oldParenAssign; }
  if (oldTrailingComma > -1) { refDestructuringErrors.trailingComma = oldTrailingComma; }
  return left
};

// Parse a ternary conditional (`?:`) operator.

pp$3.parseMaybeConditional = function(noIn, refDestructuringErrors) {
  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseExprOps(noIn, refDestructuringErrors);
  if (this.checkExpressionErrors(refDestructuringErrors)) { return expr }
  if (this.eat(types.question)) {
    var node = this.startNodeAt(startPos, startLoc);
    node.test = expr;
    node.consequent = this.parseMaybeAssign();
    this.expect(types.colon);
    node.alternate = this.parseMaybeAssign(noIn);
    return this.finishNode(node, "ConditionalExpression")
  }
  return expr
};

// Start the precedence parser.

pp$3.parseExprOps = function(noIn, refDestructuringErrors) {
  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseMaybeUnary(refDestructuringErrors, false);
  if (this.checkExpressionErrors(refDestructuringErrors)) { return expr }
  return expr.start === startPos && expr.type === "ArrowFunctionExpression" ? expr : this.parseExprOp(expr, startPos, startLoc, -1, noIn)
};

// Parse binary operators with the operator precedence parsing
// algorithm. `left` is the left-hand side of the operator.
// `minPrec` provides context that allows the function to stop and
// defer further parser to one of its callers when it encounters an
// operator that has a lower precedence than the set it is parsing.

pp$3.parseExprOp = function(left, leftStartPos, leftStartLoc, minPrec, noIn) {
  var prec = this.type.binop;
  if (prec != null && (!noIn || this.type !== types._in)) {
    if (prec > minPrec) {
      var logical = this.type === types.logicalOR || this.type === types.logicalAND;
      var coalesce = this.type === types.coalesce;
      if (coalesce) {
        // Handle the precedence of `tt.coalesce` as equal to the range of logical expressions.
        // In other words, `node.right` shouldn't contain logical expressions in order to check the mixed error.
        prec = types.logicalAND.binop;
      }
      var op = this.value;
      this.next();
      var startPos = this.start, startLoc = this.startLoc;
      var right = this.parseExprOp(this.parseMaybeUnary(null, false), startPos, startLoc, prec, noIn);
      var node = this.buildBinary(leftStartPos, leftStartLoc, left, right, op, logical || coalesce);
      if ((logical && this.type === types.coalesce) || (coalesce && (this.type === types.logicalOR || this.type === types.logicalAND))) {
        this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses");
      }
      return this.parseExprOp(node, leftStartPos, leftStartLoc, minPrec, noIn)
    }
  }
  return left
};

pp$3.buildBinary = function(startPos, startLoc, left, right, op, logical) {
  var node = this.startNodeAt(startPos, startLoc);
  node.left = left;
  node.operator = op;
  node.right = right;
  return this.finishNode(node, logical ? "LogicalExpression" : "BinaryExpression")
};

// Parse unary operators, both prefix and postfix.

pp$3.parseMaybeUnary = function(refDestructuringErrors, sawUnary) {
  var startPos = this.start, startLoc = this.startLoc, expr;
  if (this.isContextual("await") && (this.inAsync || (!this.inFunction && this.options.allowAwaitOutsideFunction))) {
    expr = this.parseAwait();
    sawUnary = true;
  } else if (this.type.prefix) {
    var node = this.startNode(), update = this.type === types.incDec;
    node.operator = this.value;
    node.prefix = true;
    this.next();
    node.argument = this.parseMaybeUnary(null, true);
    this.checkExpressionErrors(refDestructuringErrors, true);
    if (update) { this.checkLValSimple(node.argument); }
    else if (this.strict && node.operator === "delete" &&
             node.argument.type === "Identifier")
      { this.raiseRecoverable(node.start, "Deleting local variable in strict mode"); }
    else { sawUnary = true; }
    expr = this.finishNode(node, update ? "UpdateExpression" : "UnaryExpression");
  } else {
    expr = this.parseExprSubscripts(refDestructuringErrors);
    if (this.checkExpressionErrors(refDestructuringErrors)) { return expr }
    while (this.type.postfix && !this.canInsertSemicolon()) {
      var node$1 = this.startNodeAt(startPos, startLoc);
      node$1.operator = this.value;
      node$1.prefix = false;
      node$1.argument = expr;
      this.checkLValSimple(expr);
      this.next();
      expr = this.finishNode(node$1, "UpdateExpression");
    }
  }

  if (!sawUnary && this.eat(types.starstar))
    { return this.buildBinary(startPos, startLoc, expr, this.parseMaybeUnary(null, false), "**", false) }
  else
    { return expr }
};

// Parse call, dot, and `[]`-subscript expressions.

pp$3.parseExprSubscripts = function(refDestructuringErrors) {
  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseExprAtom(refDestructuringErrors);
  if (expr.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")")
    { return expr }
  var result = this.parseSubscripts(expr, startPos, startLoc);
  if (refDestructuringErrors && result.type === "MemberExpression") {
    if (refDestructuringErrors.parenthesizedAssign >= result.start) { refDestructuringErrors.parenthesizedAssign = -1; }
    if (refDestructuringErrors.parenthesizedBind >= result.start) { refDestructuringErrors.parenthesizedBind = -1; }
  }
  return result
};

pp$3.parseSubscripts = function(base, startPos, startLoc, noCalls) {
  var maybeAsyncArrow = this.options.ecmaVersion >= 8 && base.type === "Identifier" && base.name === "async" &&
      this.lastTokEnd === base.end && !this.canInsertSemicolon() && base.end - base.start === 5 &&
      this.potentialArrowAt === base.start;
  var optionalChained = false;

  while (true) {
    var element = this.parseSubscript(base, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained);

    if (element.optional) { optionalChained = true; }
    if (element === base || element.type === "ArrowFunctionExpression") {
      if (optionalChained) {
        var chainNode = this.startNodeAt(startPos, startLoc);
        chainNode.expression = element;
        element = this.finishNode(chainNode, "ChainExpression");
      }
      return element
    }

    base = element;
  }
};

pp$3.parseSubscript = function(base, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained) {
  var optionalSupported = this.options.ecmaVersion >= 11;
  var optional = optionalSupported && this.eat(types.questionDot);
  if (noCalls && optional) { this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions"); }

  var computed = this.eat(types.bracketL);
  if (computed || (optional && this.type !== types.parenL && this.type !== types.backQuote) || this.eat(types.dot)) {
    var node = this.startNodeAt(startPos, startLoc);
    node.object = base;
    node.property = computed ? this.parseExpression() : this.parseIdent(this.options.allowReserved !== "never");
    node.computed = !!computed;
    if (computed) { this.expect(types.bracketR); }
    if (optionalSupported) {
      node.optional = optional;
    }
    base = this.finishNode(node, "MemberExpression");
  } else if (!noCalls && this.eat(types.parenL)) {
    var refDestructuringErrors = new DestructuringErrors, oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
    this.yieldPos = 0;
    this.awaitPos = 0;
    this.awaitIdentPos = 0;
    var exprList = this.parseExprList(types.parenR, this.options.ecmaVersion >= 8, false, refDestructuringErrors);
    if (maybeAsyncArrow && !optional && !this.canInsertSemicolon() && this.eat(types.arrow)) {
      this.checkPatternErrors(refDestructuringErrors, false);
      this.checkYieldAwaitInDefaultParams();
      if (this.awaitIdentPos > 0)
        { this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"); }
      this.yieldPos = oldYieldPos;
      this.awaitPos = oldAwaitPos;
      this.awaitIdentPos = oldAwaitIdentPos;
      return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList, true)
    }
    this.checkExpressionErrors(refDestructuringErrors, true);
    this.yieldPos = oldYieldPos || this.yieldPos;
    this.awaitPos = oldAwaitPos || this.awaitPos;
    this.awaitIdentPos = oldAwaitIdentPos || this.awaitIdentPos;
    var node$1 = this.startNodeAt(startPos, startLoc);
    node$1.callee = base;
    node$1.arguments = exprList;
    if (optionalSupported) {
      node$1.optional = optional;
    }
    base = this.finishNode(node$1, "CallExpression");
  } else if (this.type === types.backQuote) {
    if (optional || optionalChained) {
      this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
    }
    var node$2 = this.startNodeAt(startPos, startLoc);
    node$2.tag = base;
    node$2.quasi = this.parseTemplate({isTagged: true});
    base = this.finishNode(node$2, "TaggedTemplateExpression");
  }
  return base
};

// Parse an atomic expression — either a single token that is an
// expression, an expression started by a keyword like `function` or
// `new`, or an expression wrapped in punctuation like `()`, `[]`,
// or `{}`.

pp$3.parseExprAtom = function(refDestructuringErrors) {
  // If a division operator appears in an expression position, the
  // tokenizer got confused, and we force it to read a regexp instead.
  if (this.type === types.slash) { this.readRegexp(); }

  var node, canBeArrow = this.potentialArrowAt === this.start;
  switch (this.type) {
  case types._super:
    if (!this.allowSuper)
      { this.raise(this.start, "'super' keyword outside a method"); }
    node = this.startNode();
    this.next();
    if (this.type === types.parenL && !this.allowDirectSuper)
      { this.raise(node.start, "super() call outside constructor of a subclass"); }
    // The `super` keyword can appear at below:
    // SuperProperty:
    //     super [ Expression ]
    //     super . IdentifierName
    // SuperCall:
    //     super ( Arguments )
    if (this.type !== types.dot && this.type !== types.bracketL && this.type !== types.parenL)
      { this.unexpected(); }
    return this.finishNode(node, "Super")

  case types._this:
    node = this.startNode();
    this.next();
    return this.finishNode(node, "ThisExpression")

  case types.name:
    var startPos = this.start, startLoc = this.startLoc, containsEsc = this.containsEsc;
    var id = this.parseIdent(false);
    if (this.options.ecmaVersion >= 8 && !containsEsc && id.name === "async" && !this.canInsertSemicolon() && this.eat(types._function))
      { return this.parseFunction(this.startNodeAt(startPos, startLoc), 0, false, true) }
    if (canBeArrow && !this.canInsertSemicolon()) {
      if (this.eat(types.arrow))
        { return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], false) }
      if (this.options.ecmaVersion >= 8 && id.name === "async" && this.type === types.name && !containsEsc) {
        id = this.parseIdent(false);
        if (this.canInsertSemicolon() || !this.eat(types.arrow))
          { this.unexpected(); }
        return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], true)
      }
    }
    return id

  case types.regexp:
    var value = this.value;
    node = this.parseLiteral(value.value);
    node.regex = {pattern: value.pattern, flags: value.flags};
    return node

  case types.num: case types.string:
    return this.parseLiteral(this.value)

  case types._null: case types._true: case types._false:
    node = this.startNode();
    node.value = this.type === types._null ? null : this.type === types._true;
    node.raw = this.type.keyword;
    this.next();
    return this.finishNode(node, "Literal")

  case types.parenL:
    var start = this.start, expr = this.parseParenAndDistinguishExpression(canBeArrow);
    if (refDestructuringErrors) {
      if (refDestructuringErrors.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(expr))
        { refDestructuringErrors.parenthesizedAssign = start; }
      if (refDestructuringErrors.parenthesizedBind < 0)
        { refDestructuringErrors.parenthesizedBind = start; }
    }
    return expr

  case types.bracketL:
    node = this.startNode();
    this.next();
    node.elements = this.parseExprList(types.bracketR, true, true, refDestructuringErrors);
    return this.finishNode(node, "ArrayExpression")

  case types.braceL:
    return this.parseObj(false, refDestructuringErrors)

  case types._function:
    node = this.startNode();
    this.next();
    return this.parseFunction(node, 0)

  case types._class:
    return this.parseClass(this.startNode(), false)

  case types._new:
    return this.parseNew()

  case types.backQuote:
    return this.parseTemplate()

  case types._import:
    if (this.options.ecmaVersion >= 11) {
      return this.parseExprImport()
    } else {
      return this.unexpected()
    }

  default:
    this.unexpected();
  }
};

pp$3.parseExprImport = function() {
  var node = this.startNode();

  // Consume `import` as an identifier for `import.meta`.
  // Because `this.parseIdent(true)` doesn't check escape sequences, it needs the check of `this.containsEsc`.
  if (this.containsEsc) { this.raiseRecoverable(this.start, "Escape sequence in keyword import"); }
  var meta = this.parseIdent(true);

  switch (this.type) {
  case types.parenL:
    return this.parseDynamicImport(node)
  case types.dot:
    node.meta = meta;
    return this.parseImportMeta(node)
  default:
    this.unexpected();
  }
};

pp$3.parseDynamicImport = function(node) {
  this.next(); // skip `(`

  // Parse node.source.
  node.source = this.parseMaybeAssign();

  // Verify ending.
  if (!this.eat(types.parenR)) {
    var errorPos = this.start;
    if (this.eat(types.comma) && this.eat(types.parenR)) {
      this.raiseRecoverable(errorPos, "Trailing comma is not allowed in import()");
    } else {
      this.unexpected(errorPos);
    }
  }

  return this.finishNode(node, "ImportExpression")
};

pp$3.parseImportMeta = function(node) {
  this.next(); // skip `.`

  var containsEsc = this.containsEsc;
  node.property = this.parseIdent(true);

  if (node.property.name !== "meta")
    { this.raiseRecoverable(node.property.start, "The only valid meta property for import is 'import.meta'"); }
  if (containsEsc)
    { this.raiseRecoverable(node.start, "'import.meta' must not contain escaped characters"); }
  if (this.options.sourceType !== "module")
    { this.raiseRecoverable(node.start, "Cannot use 'import.meta' outside a module"); }

  return this.finishNode(node, "MetaProperty")
};

pp$3.parseLiteral = function(value) {
  var node = this.startNode();
  node.value = value;
  node.raw = this.input.slice(this.start, this.end);
  if (node.raw.charCodeAt(node.raw.length - 1) === 110) { node.bigint = node.raw.slice(0, -1).replace(/_/g, ""); }
  this.next();
  return this.finishNode(node, "Literal")
};

pp$3.parseParenExpression = function() {
  this.expect(types.parenL);
  var val = this.parseExpression();
  this.expect(types.parenR);
  return val
};

pp$3.parseParenAndDistinguishExpression = function(canBeArrow) {
  var startPos = this.start, startLoc = this.startLoc, val, allowTrailingComma = this.options.ecmaVersion >= 8;
  if (this.options.ecmaVersion >= 6) {
    this.next();

    var innerStartPos = this.start, innerStartLoc = this.startLoc;
    var exprList = [], first = true, lastIsComma = false;
    var refDestructuringErrors = new DestructuringErrors, oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, spreadStart;
    this.yieldPos = 0;
    this.awaitPos = 0;
    // Do not save awaitIdentPos to allow checking awaits nested in parameters
    while (this.type !== types.parenR) {
      first ? first = false : this.expect(types.comma);
      if (allowTrailingComma && this.afterTrailingComma(types.parenR, true)) {
        lastIsComma = true;
        break
      } else if (this.type === types.ellipsis) {
        spreadStart = this.start;
        exprList.push(this.parseParenItem(this.parseRestBinding()));
        if (this.type === types.comma) { this.raise(this.start, "Comma is not permitted after the rest element"); }
        break
      } else {
        exprList.push(this.parseMaybeAssign(false, refDestructuringErrors, this.parseParenItem));
      }
    }
    var innerEndPos = this.start, innerEndLoc = this.startLoc;
    this.expect(types.parenR);

    if (canBeArrow && !this.canInsertSemicolon() && this.eat(types.arrow)) {
      this.checkPatternErrors(refDestructuringErrors, false);
      this.checkYieldAwaitInDefaultParams();
      this.yieldPos = oldYieldPos;
      this.awaitPos = oldAwaitPos;
      return this.parseParenArrowList(startPos, startLoc, exprList)
    }

    if (!exprList.length || lastIsComma) { this.unexpected(this.lastTokStart); }
    if (spreadStart) { this.unexpected(spreadStart); }
    this.checkExpressionErrors(refDestructuringErrors, true);
    this.yieldPos = oldYieldPos || this.yieldPos;
    this.awaitPos = oldAwaitPos || this.awaitPos;

    if (exprList.length > 1) {
      val = this.startNodeAt(innerStartPos, innerStartLoc);
      val.expressions = exprList;
      this.finishNodeAt(val, "SequenceExpression", innerEndPos, innerEndLoc);
    } else {
      val = exprList[0];
    }
  } else {
    val = this.parseParenExpression();
  }

  if (this.options.preserveParens) {
    var par = this.startNodeAt(startPos, startLoc);
    par.expression = val;
    return this.finishNode(par, "ParenthesizedExpression")
  } else {
    return val
  }
};

pp$3.parseParenItem = function(item) {
  return item
};

pp$3.parseParenArrowList = function(startPos, startLoc, exprList) {
  return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList)
};

// New's precedence is slightly tricky. It must allow its argument to
// be a `[]` or dot subscript expression, but not a call — at least,
// not without wrapping it in parentheses. Thus, it uses the noCalls
// argument to parseSubscripts to prevent it from consuming the
// argument list.

var empty$1 = [];

pp$3.parseNew = function() {
  if (this.containsEsc) { this.raiseRecoverable(this.start, "Escape sequence in keyword new"); }
  var node = this.startNode();
  var meta = this.parseIdent(true);
  if (this.options.ecmaVersion >= 6 && this.eat(types.dot)) {
    node.meta = meta;
    var containsEsc = this.containsEsc;
    node.property = this.parseIdent(true);
    if (node.property.name !== "target")
      { this.raiseRecoverable(node.property.start, "The only valid meta property for new is 'new.target'"); }
    if (containsEsc)
      { this.raiseRecoverable(node.start, "'new.target' must not contain escaped characters"); }
    if (!this.inNonArrowFunction)
      { this.raiseRecoverable(node.start, "'new.target' can only be used in functions"); }
    return this.finishNode(node, "MetaProperty")
  }
  var startPos = this.start, startLoc = this.startLoc, isImport = this.type === types._import;
  node.callee = this.parseSubscripts(this.parseExprAtom(), startPos, startLoc, true);
  if (isImport && node.callee.type === "ImportExpression") {
    this.raise(startPos, "Cannot use new with import()");
  }
  if (this.eat(types.parenL)) { node.arguments = this.parseExprList(types.parenR, this.options.ecmaVersion >= 8, false); }
  else { node.arguments = empty$1; }
  return this.finishNode(node, "NewExpression")
};

// Parse template expression.

pp$3.parseTemplateElement = function(ref) {
  var isTagged = ref.isTagged;

  var elem = this.startNode();
  if (this.type === types.invalidTemplate) {
    if (!isTagged) {
      this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal");
    }
    elem.value = {
      raw: this.value,
      cooked: null
    };
  } else {
    elem.value = {
      raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
      cooked: this.value
    };
  }
  this.next();
  elem.tail = this.type === types.backQuote;
  return this.finishNode(elem, "TemplateElement")
};

pp$3.parseTemplate = function(ref) {
  if ( ref === void 0 ) ref = {};
  var isTagged = ref.isTagged; if ( isTagged === void 0 ) isTagged = false;

  var node = this.startNode();
  this.next();
  node.expressions = [];
  var curElt = this.parseTemplateElement({isTagged: isTagged});
  node.quasis = [curElt];
  while (!curElt.tail) {
    if (this.type === types.eof) { this.raise(this.pos, "Unterminated template literal"); }
    this.expect(types.dollarBraceL);
    node.expressions.push(this.parseExpression());
    this.expect(types.braceR);
    node.quasis.push(curElt = this.parseTemplateElement({isTagged: isTagged}));
  }
  this.next();
  return this.finishNode(node, "TemplateLiteral")
};

pp$3.isAsyncProp = function(prop) {
  return !prop.computed && prop.key.type === "Identifier" && prop.key.name === "async" &&
    (this.type === types.name || this.type === types.num || this.type === types.string || this.type === types.bracketL || this.type.keyword || (this.options.ecmaVersion >= 9 && this.type === types.star)) &&
    !lineBreak.test(this.input.slice(this.lastTokEnd, this.start))
};

// Parse an object literal or binding pattern.

pp$3.parseObj = function(isPattern, refDestructuringErrors) {
  var node = this.startNode(), first = true, propHash = {};
  node.properties = [];
  this.next();
  while (!this.eat(types.braceR)) {
    if (!first) {
      this.expect(types.comma);
      if (this.options.ecmaVersion >= 5 && this.afterTrailingComma(types.braceR)) { break }
    } else { first = false; }

    var prop = this.parseProperty(isPattern, refDestructuringErrors);
    if (!isPattern) { this.checkPropClash(prop, propHash, refDestructuringErrors); }
    node.properties.push(prop);
  }
  return this.finishNode(node, isPattern ? "ObjectPattern" : "ObjectExpression")
};

pp$3.parseProperty = function(isPattern, refDestructuringErrors) {
  var prop = this.startNode(), isGenerator, isAsync, startPos, startLoc;
  if (this.options.ecmaVersion >= 9 && this.eat(types.ellipsis)) {
    if (isPattern) {
      prop.argument = this.parseIdent(false);
      if (this.type === types.comma) {
        this.raise(this.start, "Comma is not permitted after the rest element");
      }
      return this.finishNode(prop, "RestElement")
    }
    // To disallow parenthesized identifier via `this.toAssignable()`.
    if (this.type === types.parenL && refDestructuringErrors) {
      if (refDestructuringErrors.parenthesizedAssign < 0) {
        refDestructuringErrors.parenthesizedAssign = this.start;
      }
      if (refDestructuringErrors.parenthesizedBind < 0) {
        refDestructuringErrors.parenthesizedBind = this.start;
      }
    }
    // Parse argument.
    prop.argument = this.parseMaybeAssign(false, refDestructuringErrors);
    // To disallow trailing comma via `this.toAssignable()`.
    if (this.type === types.comma && refDestructuringErrors && refDestructuringErrors.trailingComma < 0) {
      refDestructuringErrors.trailingComma = this.start;
    }
    // Finish
    return this.finishNode(prop, "SpreadElement")
  }
  if (this.options.ecmaVersion >= 6) {
    prop.method = false;
    prop.shorthand = false;
    if (isPattern || refDestructuringErrors) {
      startPos = this.start;
      startLoc = this.startLoc;
    }
    if (!isPattern)
      { isGenerator = this.eat(types.star); }
  }
  var containsEsc = this.containsEsc;
  this.parsePropertyName(prop);
  if (!isPattern && !containsEsc && this.options.ecmaVersion >= 8 && !isGenerator && this.isAsyncProp(prop)) {
    isAsync = true;
    isGenerator = this.options.ecmaVersion >= 9 && this.eat(types.star);
    this.parsePropertyName(prop, refDestructuringErrors);
  } else {
    isAsync = false;
  }
  this.parsePropertyValue(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc);
  return this.finishNode(prop, "Property")
};

pp$3.parsePropertyValue = function(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc) {
  if ((isGenerator || isAsync) && this.type === types.colon)
    { this.unexpected(); }

  if (this.eat(types.colon)) {
    prop.value = isPattern ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(false, refDestructuringErrors);
    prop.kind = "init";
  } else if (this.options.ecmaVersion >= 6 && this.type === types.parenL) {
    if (isPattern) { this.unexpected(); }
    prop.kind = "init";
    prop.method = true;
    prop.value = this.parseMethod(isGenerator, isAsync);
  } else if (!isPattern && !containsEsc &&
             this.options.ecmaVersion >= 5 && !prop.computed && prop.key.type === "Identifier" &&
             (prop.key.name === "get" || prop.key.name === "set") &&
             (this.type !== types.comma && this.type !== types.braceR && this.type !== types.eq)) {
    if (isGenerator || isAsync) { this.unexpected(); }
    prop.kind = prop.key.name;
    this.parsePropertyName(prop);
    prop.value = this.parseMethod(false);
    var paramCount = prop.kind === "get" ? 0 : 1;
    if (prop.value.params.length !== paramCount) {
      var start = prop.value.start;
      if (prop.kind === "get")
        { this.raiseRecoverable(start, "getter should have no params"); }
      else
        { this.raiseRecoverable(start, "setter should have exactly one param"); }
    } else {
      if (prop.kind === "set" && prop.value.params[0].type === "RestElement")
        { this.raiseRecoverable(prop.value.params[0].start, "Setter cannot use rest params"); }
    }
  } else if (this.options.ecmaVersion >= 6 && !prop.computed && prop.key.type === "Identifier") {
    if (isGenerator || isAsync) { this.unexpected(); }
    this.checkUnreserved(prop.key);
    if (prop.key.name === "await" && !this.awaitIdentPos)
      { this.awaitIdentPos = startPos; }
    prop.kind = "init";
    if (isPattern) {
      prop.value = this.parseMaybeDefault(startPos, startLoc, this.copyNode(prop.key));
    } else if (this.type === types.eq && refDestructuringErrors) {
      if (refDestructuringErrors.shorthandAssign < 0)
        { refDestructuringErrors.shorthandAssign = this.start; }
      prop.value = this.parseMaybeDefault(startPos, startLoc, this.copyNode(prop.key));
    } else {
      prop.value = this.copyNode(prop.key);
    }
    prop.shorthand = true;
  } else { this.unexpected(); }
};

pp$3.parsePropertyName = function(prop) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(types.bracketL)) {
      prop.computed = true;
      prop.key = this.parseMaybeAssign();
      this.expect(types.bracketR);
      return prop.key
    } else {
      prop.computed = false;
    }
  }
  return prop.key = this.type === types.num || this.type === types.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never")
};

// Initialize empty function node.

pp$3.initFunction = function(node) {
  node.id = null;
  if (this.options.ecmaVersion >= 6) { node.generator = node.expression = false; }
  if (this.options.ecmaVersion >= 8) { node.async = false; }
};

// Parse object or class method.

pp$3.parseMethod = function(isGenerator, isAsync, allowDirectSuper) {
  var node = this.startNode(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;

  this.initFunction(node);
  if (this.options.ecmaVersion >= 6)
    { node.generator = isGenerator; }
  if (this.options.ecmaVersion >= 8)
    { node.async = !!isAsync; }

  this.yieldPos = 0;
  this.awaitPos = 0;
  this.awaitIdentPos = 0;
  this.enterScope(functionFlags(isAsync, node.generator) | SCOPE_SUPER | (allowDirectSuper ? SCOPE_DIRECT_SUPER : 0));

  this.expect(types.parenL);
  node.params = this.parseBindingList(types.parenR, false, this.options.ecmaVersion >= 8);
  this.checkYieldAwaitInDefaultParams();
  this.parseFunctionBody(node, false, true);

  this.yieldPos = oldYieldPos;
  this.awaitPos = oldAwaitPos;
  this.awaitIdentPos = oldAwaitIdentPos;
  return this.finishNode(node, "FunctionExpression")
};

// Parse arrow function expression with given parameters.

pp$3.parseArrowExpression = function(node, params, isAsync) {
  var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;

  this.enterScope(functionFlags(isAsync, false) | SCOPE_ARROW);
  this.initFunction(node);
  if (this.options.ecmaVersion >= 8) { node.async = !!isAsync; }

  this.yieldPos = 0;
  this.awaitPos = 0;
  this.awaitIdentPos = 0;

  node.params = this.toAssignableList(params, true);
  this.parseFunctionBody(node, true, false);

  this.yieldPos = oldYieldPos;
  this.awaitPos = oldAwaitPos;
  this.awaitIdentPos = oldAwaitIdentPos;
  return this.finishNode(node, "ArrowFunctionExpression")
};

// Parse function body and check parameters.

pp$3.parseFunctionBody = function(node, isArrowFunction, isMethod) {
  var isExpression = isArrowFunction && this.type !== types.braceL;
  var oldStrict = this.strict, useStrict = false;

  if (isExpression) {
    node.body = this.parseMaybeAssign();
    node.expression = true;
    this.checkParams(node, false);
  } else {
    var nonSimple = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(node.params);
    if (!oldStrict || nonSimple) {
      useStrict = this.strictDirective(this.end);
      // If this is a strict mode function, verify that argument names
      // are not repeated, and it does not try to bind the words `eval`
      // or `arguments`.
      if (useStrict && nonSimple)
        { this.raiseRecoverable(node.start, "Illegal 'use strict' directive in function with non-simple parameter list"); }
    }
    // Start a new scope with regard to labels and the `inFunction`
    // flag (restore them to their old value afterwards).
    var oldLabels = this.labels;
    this.labels = [];
    if (useStrict) { this.strict = true; }

    // Add the params to varDeclaredNames to ensure that an error is thrown
    // if a let/const declaration in the function clashes with one of the params.
    this.checkParams(node, !oldStrict && !useStrict && !isArrowFunction && !isMethod && this.isSimpleParamList(node.params));
    // Ensure the function name isn't a forbidden identifier in strict mode, e.g. 'eval'
    if (this.strict && node.id) { this.checkLValSimple(node.id, BIND_OUTSIDE); }
    node.body = this.parseBlock(false, undefined, useStrict && !oldStrict);
    node.expression = false;
    this.adaptDirectivePrologue(node.body.body);
    this.labels = oldLabels;
  }
  this.exitScope();
};

pp$3.isSimpleParamList = function(params) {
  for (var i = 0, list = params; i < list.length; i += 1)
    {
    var param = list[i];

    if (param.type !== "Identifier") { return false
  } }
  return true
};

// Checks function params for various disallowed patterns such as using "eval"
// or "arguments" and duplicate parameters.

pp$3.checkParams = function(node, allowDuplicates) {
  var nameHash = {};
  for (var i = 0, list = node.params; i < list.length; i += 1)
    {
    var param = list[i];

    this.checkLValInnerPattern(param, BIND_VAR, allowDuplicates ? null : nameHash);
  }
};

// Parses a comma-separated list of expressions, and returns them as
// an array. `close` is the token type that ends the list, and
// `allowEmpty` can be turned on to allow subsequent commas with
// nothing in between them to be parsed as `null` (which is needed
// for array literals).

pp$3.parseExprList = function(close, allowTrailingComma, allowEmpty, refDestructuringErrors) {
  var elts = [], first = true;
  while (!this.eat(close)) {
    if (!first) {
      this.expect(types.comma);
      if (allowTrailingComma && this.afterTrailingComma(close)) { break }
    } else { first = false; }

    var elt = (void 0);
    if (allowEmpty && this.type === types.comma)
      { elt = null; }
    else if (this.type === types.ellipsis) {
      elt = this.parseSpread(refDestructuringErrors);
      if (refDestructuringErrors && this.type === types.comma && refDestructuringErrors.trailingComma < 0)
        { refDestructuringErrors.trailingComma = this.start; }
    } else {
      elt = this.parseMaybeAssign(false, refDestructuringErrors);
    }
    elts.push(elt);
  }
  return elts
};

pp$3.checkUnreserved = function(ref) {
  var start = ref.start;
  var end = ref.end;
  var name = ref.name;

  if (this.inGenerator && name === "yield")
    { this.raiseRecoverable(start, "Cannot use 'yield' as identifier inside a generator"); }
  if (this.inAsync && name === "await")
    { this.raiseRecoverable(start, "Cannot use 'await' as identifier inside an async function"); }
  if (this.keywords.test(name))
    { this.raise(start, ("Unexpected keyword '" + name + "'")); }
  if (this.options.ecmaVersion < 6 &&
    this.input.slice(start, end).indexOf("\\") !== -1) { return }
  var re = this.strict ? this.reservedWordsStrict : this.reservedWords;
  if (re.test(name)) {
    if (!this.inAsync && name === "await")
      { this.raiseRecoverable(start, "Cannot use keyword 'await' outside an async function"); }
    this.raiseRecoverable(start, ("The keyword '" + name + "' is reserved"));
  }
};

// Parse the next token as an identifier. If `liberal` is true (used
// when parsing properties), it will also convert keywords into
// identifiers.

pp$3.parseIdent = function(liberal, isBinding) {
  var node = this.startNode();
  if (this.type === types.name) {
    node.name = this.value;
  } else if (this.type.keyword) {
    node.name = this.type.keyword;

    // To fix https://github.com/acornjs/acorn/issues/575
    // `class` and `function` keywords push new context into this.context.
    // But there is no chance to pop the context if the keyword is consumed as an identifier such as a property name.
    // If the previous token is a dot, this does not apply because the context-managing code already ignored the keyword
    if ((node.name === "class" || node.name === "function") &&
        (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46)) {
      this.context.pop();
    }
  } else {
    this.unexpected();
  }
  this.next(!!liberal);
  this.finishNode(node, "Identifier");
  if (!liberal) {
    this.checkUnreserved(node);
    if (node.name === "await" && !this.awaitIdentPos)
      { this.awaitIdentPos = node.start; }
  }
  return node
};

// Parses yield expression inside generator.

pp$3.parseYield = function(noIn) {
  if (!this.yieldPos) { this.yieldPos = this.start; }

  var node = this.startNode();
  this.next();
  if (this.type === types.semi || this.canInsertSemicolon() || (this.type !== types.star && !this.type.startsExpr)) {
    node.delegate = false;
    node.argument = null;
  } else {
    node.delegate = this.eat(types.star);
    node.argument = this.parseMaybeAssign(noIn);
  }
  return this.finishNode(node, "YieldExpression")
};

pp$3.parseAwait = function() {
  if (!this.awaitPos) { this.awaitPos = this.start; }

  var node = this.startNode();
  this.next();
  node.argument = this.parseMaybeUnary(null, true);
  return this.finishNode(node, "AwaitExpression")
};

var pp$4 = Parser.prototype;

// This function is used to raise exceptions on parse errors. It
// takes an offset integer (into the current `input`) to indicate
// the location of the error, attaches the position to the end
// of the error message, and then raises a `SyntaxError` with that
// message.

pp$4.raise = function(pos, message) {
  var loc = getLineInfo(this.input, pos);
  message += " (" + loc.line + ":" + loc.column + ")";
  var err = new SyntaxError(message);
  err.pos = pos; err.loc = loc; err.raisedAt = this.pos;
  throw err
};

pp$4.raiseRecoverable = pp$4.raise;

pp$4.curPosition = function() {
  if (this.options.locations) {
    return new Position(this.curLine, this.pos - this.lineStart)
  }
};

var pp$5 = Parser.prototype;

var Scope = function Scope(flags) {
  this.flags = flags;
  // A list of var-declared names in the current lexical scope
  this.var = [];
  // A list of lexically-declared names in the current lexical scope
  this.lexical = [];
  // A list of lexically-declared FunctionDeclaration names in the current lexical scope
  this.functions = [];
};

// The functions in this module keep track of declared variables in the current scope in order to detect duplicate variable names.

pp$5.enterScope = function(flags) {
  this.scopeStack.push(new Scope(flags));
};

pp$5.exitScope = function() {
  this.scopeStack.pop();
};

// The spec says:
// > At the top level of a function, or script, function declarations are
// > treated like var declarations rather than like lexical declarations.
pp$5.treatFunctionsAsVarInScope = function(scope) {
  return (scope.flags & SCOPE_FUNCTION) || !this.inModule && (scope.flags & SCOPE_TOP)
};

pp$5.declareName = function(name, bindingType, pos) {
  var redeclared = false;
  if (bindingType === BIND_LEXICAL) {
    var scope = this.currentScope();
    redeclared = scope.lexical.indexOf(name) > -1 || scope.functions.indexOf(name) > -1 || scope.var.indexOf(name) > -1;
    scope.lexical.push(name);
    if (this.inModule && (scope.flags & SCOPE_TOP))
      { delete this.undefinedExports[name]; }
  } else if (bindingType === BIND_SIMPLE_CATCH) {
    var scope$1 = this.currentScope();
    scope$1.lexical.push(name);
  } else if (bindingType === BIND_FUNCTION) {
    var scope$2 = this.currentScope();
    if (this.treatFunctionsAsVar)
      { redeclared = scope$2.lexical.indexOf(name) > -1; }
    else
      { redeclared = scope$2.lexical.indexOf(name) > -1 || scope$2.var.indexOf(name) > -1; }
    scope$2.functions.push(name);
  } else {
    for (var i = this.scopeStack.length - 1; i >= 0; --i) {
      var scope$3 = this.scopeStack[i];
      if (scope$3.lexical.indexOf(name) > -1 && !((scope$3.flags & SCOPE_SIMPLE_CATCH) && scope$3.lexical[0] === name) ||
          !this.treatFunctionsAsVarInScope(scope$3) && scope$3.functions.indexOf(name) > -1) {
        redeclared = true;
        break
      }
      scope$3.var.push(name);
      if (this.inModule && (scope$3.flags & SCOPE_TOP))
        { delete this.undefinedExports[name]; }
      if (scope$3.flags & SCOPE_VAR) { break }
    }
  }
  if (redeclared) { this.raiseRecoverable(pos, ("Identifier '" + name + "' has already been declared")); }
};

pp$5.checkLocalExport = function(id) {
  // scope.functions must be empty as Module code is always strict.
  if (this.scopeStack[0].lexical.indexOf(id.name) === -1 &&
      this.scopeStack[0].var.indexOf(id.name) === -1) {
    this.undefinedExports[id.name] = id;
  }
};

pp$5.currentScope = function() {
  return this.scopeStack[this.scopeStack.length - 1]
};

pp$5.currentVarScope = function() {
  for (var i = this.scopeStack.length - 1;; i--) {
    var scope = this.scopeStack[i];
    if (scope.flags & SCOPE_VAR) { return scope }
  }
};

// Could be useful for `this`, `new.target`, `super()`, `super.property`, and `super[property]`.
pp$5.currentThisScope = function() {
  for (var i = this.scopeStack.length - 1;; i--) {
    var scope = this.scopeStack[i];
    if (scope.flags & SCOPE_VAR && !(scope.flags & SCOPE_ARROW)) { return scope }
  }
};

var Node = function Node(parser, pos, loc) {
  this.type = "";
  this.start = pos;
  this.end = 0;
  if (parser.options.locations)
    { this.loc = new SourceLocation(parser, loc); }
  if (parser.options.directSourceFile)
    { this.sourceFile = parser.options.directSourceFile; }
  if (parser.options.ranges)
    { this.range = [pos, 0]; }
};

// Start an AST node, attaching a start offset.

var pp$6 = Parser.prototype;

pp$6.startNode = function() {
  return new Node(this, this.start, this.startLoc)
};

pp$6.startNodeAt = function(pos, loc) {
  return new Node(this, pos, loc)
};

// Finish an AST node, adding `type` and `end` properties.

function finishNodeAt(node, type, pos, loc) {
  node.type = type;
  node.end = pos;
  if (this.options.locations)
    { node.loc.end = loc; }
  if (this.options.ranges)
    { node.range[1] = pos; }
  return node
}

pp$6.finishNode = function(node, type) {
  return finishNodeAt.call(this, node, type, this.lastTokEnd, this.lastTokEndLoc)
};

// Finish node at given position

pp$6.finishNodeAt = function(node, type, pos, loc) {
  return finishNodeAt.call(this, node, type, pos, loc)
};

pp$6.copyNode = function(node) {
  var newNode = new Node(this, node.start, this.startLoc);
  for (var prop in node) { newNode[prop] = node[prop]; }
  return newNode
};

// The algorithm used to determine whether a regexp can appear at a

var TokContext = function TokContext(token, isExpr, preserveSpace, override, generator) {
  this.token = token;
  this.isExpr = !!isExpr;
  this.preserveSpace = !!preserveSpace;
  this.override = override;
  this.generator = !!generator;
};

var types$1 = {
  b_stat: new TokContext("{", false),
  b_expr: new TokContext("{", true),
  b_tmpl: new TokContext("${", false),
  p_stat: new TokContext("(", false),
  p_expr: new TokContext("(", true),
  q_tmpl: new TokContext("`", true, true, function (p) { return p.tryReadTemplateToken(); }),
  f_stat: new TokContext("function", false),
  f_expr: new TokContext("function", true),
  f_expr_gen: new TokContext("function", true, false, null, true),
  f_gen: new TokContext("function", false, false, null, true)
};

var pp$7 = Parser.prototype;

pp$7.initialContext = function() {
  return [types$1.b_stat]
};

pp$7.braceIsBlock = function(prevType) {
  var parent = this.curContext();
  if (parent === types$1.f_expr || parent === types$1.f_stat)
    { return true }
  if (prevType === types.colon && (parent === types$1.b_stat || parent === types$1.b_expr))
    { return !parent.isExpr }

  // The check for `tt.name && exprAllowed` detects whether we are
  // after a `yield` or `of` construct. See the `updateContext` for
  // `tt.name`.
  if (prevType === types._return || prevType === types.name && this.exprAllowed)
    { return lineBreak.test(this.input.slice(this.lastTokEnd, this.start)) }
  if (prevType === types._else || prevType === types.semi || prevType === types.eof || prevType === types.parenR || prevType === types.arrow)
    { return true }
  if (prevType === types.braceL)
    { return parent === types$1.b_stat }
  if (prevType === types._var || prevType === types._const || prevType === types.name)
    { return false }
  return !this.exprAllowed
};

pp$7.inGeneratorContext = function() {
  for (var i = this.context.length - 1; i >= 1; i--) {
    var context = this.context[i];
    if (context.token === "function")
      { return context.generator }
  }
  return false
};

pp$7.updateContext = function(prevType) {
  var update, type = this.type;
  if (type.keyword && prevType === types.dot)
    { this.exprAllowed = false; }
  else if (update = type.updateContext)
    { update.call(this, prevType); }
  else
    { this.exprAllowed = type.beforeExpr; }
};

// Token-specific context update code

types.parenR.updateContext = types.braceR.updateContext = function() {
  if (this.context.length === 1) {
    this.exprAllowed = true;
    return
  }
  var out = this.context.pop();
  if (out === types$1.b_stat && this.curContext().token === "function") {
    out = this.context.pop();
  }
  this.exprAllowed = !out.isExpr;
};

types.braceL.updateContext = function(prevType) {
  this.context.push(this.braceIsBlock(prevType) ? types$1.b_stat : types$1.b_expr);
  this.exprAllowed = true;
};

types.dollarBraceL.updateContext = function() {
  this.context.push(types$1.b_tmpl);
  this.exprAllowed = true;
};

types.parenL.updateContext = function(prevType) {
  var statementParens = prevType === types._if || prevType === types._for || prevType === types._with || prevType === types._while;
  this.context.push(statementParens ? types$1.p_stat : types$1.p_expr);
  this.exprAllowed = true;
};

types.incDec.updateContext = function() {
  // tokExprAllowed stays unchanged
};

types._function.updateContext = types._class.updateContext = function(prevType) {
  if (prevType.beforeExpr && prevType !== types._else &&
      !(prevType === types.semi && this.curContext() !== types$1.p_stat) &&
      !(prevType === types._return && lineBreak.test(this.input.slice(this.lastTokEnd, this.start))) &&
      !((prevType === types.colon || prevType === types.braceL) && this.curContext() === types$1.b_stat))
    { this.context.push(types$1.f_expr); }
  else
    { this.context.push(types$1.f_stat); }
  this.exprAllowed = false;
};

types.backQuote.updateContext = function() {
  if (this.curContext() === types$1.q_tmpl)
    { this.context.pop(); }
  else
    { this.context.push(types$1.q_tmpl); }
  this.exprAllowed = false;
};

types.star.updateContext = function(prevType) {
  if (prevType === types._function) {
    var index = this.context.length - 1;
    if (this.context[index] === types$1.f_expr)
      { this.context[index] = types$1.f_expr_gen; }
    else
      { this.context[index] = types$1.f_gen; }
  }
  this.exprAllowed = true;
};

types.name.updateContext = function(prevType) {
  var allowed = false;
  if (this.options.ecmaVersion >= 6 && prevType !== types.dot) {
    if (this.value === "of" && !this.exprAllowed ||
        this.value === "yield" && this.inGeneratorContext())
      { allowed = true; }
  }
  this.exprAllowed = allowed;
};

// This file contains Unicode properties extracted from the ECMAScript
// specification. The lists are extracted like so:
// $$('#table-binary-unicode-properties > figure > table > tbody > tr > td:nth-child(1) code').map(el => el.innerText)

// #table-binary-unicode-properties
var ecma9BinaryProperties = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS";
var ecma10BinaryProperties = ecma9BinaryProperties + " Extended_Pictographic";
var ecma11BinaryProperties = ecma10BinaryProperties;
var ecma12BinaryProperties = ecma11BinaryProperties + " EBase EComp EMod EPres ExtPict";
var unicodeBinaryProperties = {
  9: ecma9BinaryProperties,
  10: ecma10BinaryProperties,
  11: ecma11BinaryProperties,
  12: ecma12BinaryProperties
};

// #table-unicode-general-category-values
var unicodeGeneralCategoryValues = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu";

// #table-unicode-script-values
var ecma9ScriptValues = "Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb";
var ecma10ScriptValues = ecma9ScriptValues + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd";
var ecma11ScriptValues = ecma10ScriptValues + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho";
var ecma12ScriptValues = ecma11ScriptValues + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi";
var unicodeScriptValues = {
  9: ecma9ScriptValues,
  10: ecma10ScriptValues,
  11: ecma11ScriptValues,
  12: ecma12ScriptValues
};

var data = {};
function buildUnicodeData(ecmaVersion) {
  var d = data[ecmaVersion] = {
    binary: wordsRegexp(unicodeBinaryProperties[ecmaVersion] + " " + unicodeGeneralCategoryValues),
    nonBinary: {
      General_Category: wordsRegexp(unicodeGeneralCategoryValues),
      Script: wordsRegexp(unicodeScriptValues[ecmaVersion])
    }
  };
  d.nonBinary.Script_Extensions = d.nonBinary.Script;

  d.nonBinary.gc = d.nonBinary.General_Category;
  d.nonBinary.sc = d.nonBinary.Script;
  d.nonBinary.scx = d.nonBinary.Script_Extensions;
}
buildUnicodeData(9);
buildUnicodeData(10);
buildUnicodeData(11);
buildUnicodeData(12);

var pp$8 = Parser.prototype;

var RegExpValidationState = function RegExpValidationState(parser) {
  this.parser = parser;
  this.validFlags = "gim" + (parser.options.ecmaVersion >= 6 ? "uy" : "") + (parser.options.ecmaVersion >= 9 ? "s" : "");
  this.unicodeProperties = data[parser.options.ecmaVersion >= 12 ? 12 : parser.options.ecmaVersion];
  this.source = "";
  this.flags = "";
  this.start = 0;
  this.switchU = false;
  this.switchN = false;
  this.pos = 0;
  this.lastIntValue = 0;
  this.lastStringValue = "";
  this.lastAssertionIsQuantifiable = false;
  this.numCapturingParens = 0;
  this.maxBackReference = 0;
  this.groupNames = [];
  this.backReferenceNames = [];
};

RegExpValidationState.prototype.reset = function reset (start, pattern, flags) {
  var unicode = flags.indexOf("u") !== -1;
  this.start = start | 0;
  this.source = pattern + "";
  this.flags = flags;
  this.switchU = unicode && this.parser.options.ecmaVersion >= 6;
  this.switchN = unicode && this.parser.options.ecmaVersion >= 9;
};

RegExpValidationState.prototype.raise = function raise (message) {
  this.parser.raiseRecoverable(this.start, ("Invalid regular expression: /" + (this.source) + "/: " + message));
};

// If u flag is given, this returns the code point at the index (it combines a surrogate pair).
// Otherwise, this returns the code unit of the index (can be a part of a surrogate pair).
RegExpValidationState.prototype.at = function at (i, forceU) {
    if ( forceU === void 0 ) forceU = false;

  var s = this.source;
  var l = s.length;
  if (i >= l) {
    return -1
  }
  var c = s.charCodeAt(i);
  if (!(forceU || this.switchU) || c <= 0xD7FF || c >= 0xE000 || i + 1 >= l) {
    return c
  }
  var next = s.charCodeAt(i + 1);
  return next >= 0xDC00 && next <= 0xDFFF ? (c << 10) + next - 0x35FDC00 : c
};

RegExpValidationState.prototype.nextIndex = function nextIndex (i, forceU) {
    if ( forceU === void 0 ) forceU = false;

  var s = this.source;
  var l = s.length;
  if (i >= l) {
    return l
  }
  var c = s.charCodeAt(i), next;
  if (!(forceU || this.switchU) || c <= 0xD7FF || c >= 0xE000 || i + 1 >= l ||
      (next = s.charCodeAt(i + 1)) < 0xDC00 || next > 0xDFFF) {
    return i + 1
  }
  return i + 2
};

RegExpValidationState.prototype.current = function current (forceU) {
    if ( forceU === void 0 ) forceU = false;

  return this.at(this.pos, forceU)
};

RegExpValidationState.prototype.lookahead = function lookahead (forceU) {
    if ( forceU === void 0 ) forceU = false;

  return this.at(this.nextIndex(this.pos, forceU), forceU)
};

RegExpValidationState.prototype.advance = function advance (forceU) {
    if ( forceU === void 0 ) forceU = false;

  this.pos = this.nextIndex(this.pos, forceU);
};

RegExpValidationState.prototype.eat = function eat (ch, forceU) {
    if ( forceU === void 0 ) forceU = false;

  if (this.current(forceU) === ch) {
    this.advance(forceU);
    return true
  }
  return false
};

function codePointToString(ch) {
  if (ch <= 0xFFFF) { return String.fromCharCode(ch) }
  ch -= 0x10000;
  return String.fromCharCode((ch >> 10) + 0xD800, (ch & 0x03FF) + 0xDC00)
}

/**
 * Validate the flags part of a given RegExpLiteral.
 *
 * @param {RegExpValidationState} state The state to validate RegExp.
 * @returns {void}
 */
pp$8.validateRegExpFlags = function(state) {
  var validFlags = state.validFlags;
  var flags = state.flags;

  for (var i = 0; i < flags.length; i++) {
    var flag = flags.charAt(i);
    if (validFlags.indexOf(flag) === -1) {
      this.raise(state.start, "Invalid regular expression flag");
    }
    if (flags.indexOf(flag, i + 1) > -1) {
      this.raise(state.start, "Duplicate regular expression flag");
    }
  }
};

/**
 * Validate the pattern part of a given RegExpLiteral.
 *
 * @param {RegExpValidationState} state The state to validate RegExp.
 * @returns {void}
 */
pp$8.validateRegExpPattern = function(state) {
  this.regexp_pattern(state);

  // The goal symbol for the parse is |Pattern[~U, ~N]|. If the result of
  // parsing contains a |GroupName|, reparse with the goal symbol
  // |Pattern[~U, +N]| and use this result instead. Throw a *SyntaxError*
  // exception if _P_ did not conform to the grammar, if any elements of _P_
  // were not matched by the parse, or if any Early Error conditions exist.
  if (!state.switchN && this.options.ecmaVersion >= 9 && state.groupNames.length > 0) {
    state.switchN = true;
    this.regexp_pattern(state);
  }
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-Pattern
pp$8.regexp_pattern = function(state) {
  state.pos = 0;
  state.lastIntValue = 0;
  state.lastStringValue = "";
  state.lastAssertionIsQuantifiable = false;
  state.numCapturingParens = 0;
  state.maxBackReference = 0;
  state.groupNames.length = 0;
  state.backReferenceNames.length = 0;

  this.regexp_disjunction(state);

  if (state.pos !== state.source.length) {
    // Make the same messages as V8.
    if (state.eat(0x29 /* ) */)) {
      state.raise("Unmatched ')'");
    }
    if (state.eat(0x5D /* ] */) || state.eat(0x7D /* } */)) {
      state.raise("Lone quantifier brackets");
    }
  }
  if (state.maxBackReference > state.numCapturingParens) {
    state.raise("Invalid escape");
  }
  for (var i = 0, list = state.backReferenceNames; i < list.length; i += 1) {
    var name = list[i];

    if (state.groupNames.indexOf(name) === -1) {
      state.raise("Invalid named capture referenced");
    }
  }
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-Disjunction
pp$8.regexp_disjunction = function(state) {
  this.regexp_alternative(state);
  while (state.eat(0x7C /* | */)) {
    this.regexp_alternative(state);
  }

  // Make the same message as V8.
  if (this.regexp_eatQuantifier(state, true)) {
    state.raise("Nothing to repeat");
  }
  if (state.eat(0x7B /* { */)) {
    state.raise("Lone quantifier brackets");
  }
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-Alternative
pp$8.regexp_alternative = function(state) {
  while (state.pos < state.source.length && this.regexp_eatTerm(state))
    { }
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-Term
pp$8.regexp_eatTerm = function(state) {
  if (this.regexp_eatAssertion(state)) {
    // Handle `QuantifiableAssertion Quantifier` alternative.
    // `state.lastAssertionIsQuantifiable` is true if the last eaten Assertion
    // is a QuantifiableAssertion.
    if (state.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(state)) {
      // Make the same message as V8.
      if (state.switchU) {
        state.raise("Invalid quantifier");
      }
    }
    return true
  }

  if (state.switchU ? this.regexp_eatAtom(state) : this.regexp_eatExtendedAtom(state)) {
    this.regexp_eatQuantifier(state);
    return true
  }

  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-Assertion
pp$8.regexp_eatAssertion = function(state) {
  var start = state.pos;
  state.lastAssertionIsQuantifiable = false;

  // ^, $
  if (state.eat(0x5E /* ^ */) || state.eat(0x24 /* $ */)) {
    return true
  }

  // \b \B
  if (state.eat(0x5C /* \ */)) {
    if (state.eat(0x42 /* B */) || state.eat(0x62 /* b */)) {
      return true
    }
    state.pos = start;
  }

  // Lookahead / Lookbehind
  if (state.eat(0x28 /* ( */) && state.eat(0x3F /* ? */)) {
    var lookbehind = false;
    if (this.options.ecmaVersion >= 9) {
      lookbehind = state.eat(0x3C /* < */);
    }
    if (state.eat(0x3D /* = */) || state.eat(0x21 /* ! */)) {
      this.regexp_disjunction(state);
      if (!state.eat(0x29 /* ) */)) {
        state.raise("Unterminated group");
      }
      state.lastAssertionIsQuantifiable = !lookbehind;
      return true
    }
  }

  state.pos = start;
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-Quantifier
pp$8.regexp_eatQuantifier = function(state, noError) {
  if ( noError === void 0 ) noError = false;

  if (this.regexp_eatQuantifierPrefix(state, noError)) {
    state.eat(0x3F /* ? */);
    return true
  }
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-QuantifierPrefix
pp$8.regexp_eatQuantifierPrefix = function(state, noError) {
  return (
    state.eat(0x2A /* * */) ||
    state.eat(0x2B /* + */) ||
    state.eat(0x3F /* ? */) ||
    this.regexp_eatBracedQuantifier(state, noError)
  )
};
pp$8.regexp_eatBracedQuantifier = function(state, noError) {
  var start = state.pos;
  if (state.eat(0x7B /* { */)) {
    var min = 0, max = -1;
    if (this.regexp_eatDecimalDigits(state)) {
      min = state.lastIntValue;
      if (state.eat(0x2C /* , */) && this.regexp_eatDecimalDigits(state)) {
        max = state.lastIntValue;
      }
      if (state.eat(0x7D /* } */)) {
        // SyntaxError in https://www.ecma-international.org/ecma-262/8.0/#sec-term
        if (max !== -1 && max < min && !noError) {
          state.raise("numbers out of order in {} quantifier");
        }
        return true
      }
    }
    if (state.switchU && !noError) {
      state.raise("Incomplete quantifier");
    }
    state.pos = start;
  }
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-Atom
pp$8.regexp_eatAtom = function(state) {
  return (
    this.regexp_eatPatternCharacters(state) ||
    state.eat(0x2E /* . */) ||
    this.regexp_eatReverseSolidusAtomEscape(state) ||
    this.regexp_eatCharacterClass(state) ||
    this.regexp_eatUncapturingGroup(state) ||
    this.regexp_eatCapturingGroup(state)
  )
};
pp$8.regexp_eatReverseSolidusAtomEscape = function(state) {
  var start = state.pos;
  if (state.eat(0x5C /* \ */)) {
    if (this.regexp_eatAtomEscape(state)) {
      return true
    }
    state.pos = start;
  }
  return false
};
pp$8.regexp_eatUncapturingGroup = function(state) {
  var start = state.pos;
  if (state.eat(0x28 /* ( */)) {
    if (state.eat(0x3F /* ? */) && state.eat(0x3A /* : */)) {
      this.regexp_disjunction(state);
      if (state.eat(0x29 /* ) */)) {
        return true
      }
      state.raise("Unterminated group");
    }
    state.pos = start;
  }
  return false
};
pp$8.regexp_eatCapturingGroup = function(state) {
  if (state.eat(0x28 /* ( */)) {
    if (this.options.ecmaVersion >= 9) {
      this.regexp_groupSpecifier(state);
    } else if (state.current() === 0x3F /* ? */) {
      state.raise("Invalid group");
    }
    this.regexp_disjunction(state);
    if (state.eat(0x29 /* ) */)) {
      state.numCapturingParens += 1;
      return true
    }
    state.raise("Unterminated group");
  }
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-ExtendedAtom
pp$8.regexp_eatExtendedAtom = function(state) {
  return (
    state.eat(0x2E /* . */) ||
    this.regexp_eatReverseSolidusAtomEscape(state) ||
    this.regexp_eatCharacterClass(state) ||
    this.regexp_eatUncapturingGroup(state) ||
    this.regexp_eatCapturingGroup(state) ||
    this.regexp_eatInvalidBracedQuantifier(state) ||
    this.regexp_eatExtendedPatternCharacter(state)
  )
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-InvalidBracedQuantifier
pp$8.regexp_eatInvalidBracedQuantifier = function(state) {
  if (this.regexp_eatBracedQuantifier(state, true)) {
    state.raise("Nothing to repeat");
  }
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-SyntaxCharacter
pp$8.regexp_eatSyntaxCharacter = function(state) {
  var ch = state.current();
  if (isSyntaxCharacter(ch)) {
    state.lastIntValue = ch;
    state.advance();
    return true
  }
  return false
};
function isSyntaxCharacter(ch) {
  return (
    ch === 0x24 /* $ */ ||
    ch >= 0x28 /* ( */ && ch <= 0x2B /* + */ ||
    ch === 0x2E /* . */ ||
    ch === 0x3F /* ? */ ||
    ch >= 0x5B /* [ */ && ch <= 0x5E /* ^ */ ||
    ch >= 0x7B /* { */ && ch <= 0x7D /* } */
  )
}

// https://www.ecma-international.org/ecma-262/8.0/#prod-PatternCharacter
// But eat eager.
pp$8.regexp_eatPatternCharacters = function(state) {
  var start = state.pos;
  var ch = 0;
  while ((ch = state.current()) !== -1 && !isSyntaxCharacter(ch)) {
    state.advance();
  }
  return state.pos !== start
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-ExtendedPatternCharacter
pp$8.regexp_eatExtendedPatternCharacter = function(state) {
  var ch = state.current();
  if (
    ch !== -1 &&
    ch !== 0x24 /* $ */ &&
    !(ch >= 0x28 /* ( */ && ch <= 0x2B /* + */) &&
    ch !== 0x2E /* . */ &&
    ch !== 0x3F /* ? */ &&
    ch !== 0x5B /* [ */ &&
    ch !== 0x5E /* ^ */ &&
    ch !== 0x7C /* | */
  ) {
    state.advance();
    return true
  }
  return false
};

// GroupSpecifier ::
//   [empty]
//   `?` GroupName
pp$8.regexp_groupSpecifier = function(state) {
  if (state.eat(0x3F /* ? */)) {
    if (this.regexp_eatGroupName(state)) {
      if (state.groupNames.indexOf(state.lastStringValue) !== -1) {
        state.raise("Duplicate capture group name");
      }
      state.groupNames.push(state.lastStringValue);
      return
    }
    state.raise("Invalid group");
  }
};

// GroupName ::
//   `<` RegExpIdentifierName `>`
// Note: this updates `state.lastStringValue` property with the eaten name.
pp$8.regexp_eatGroupName = function(state) {
  state.lastStringValue = "";
  if (state.eat(0x3C /* < */)) {
    if (this.regexp_eatRegExpIdentifierName(state) && state.eat(0x3E /* > */)) {
      return true
    }
    state.raise("Invalid capture group name");
  }
  return false
};

// RegExpIdentifierName ::
//   RegExpIdentifierStart
//   RegExpIdentifierName RegExpIdentifierPart
// Note: this updates `state.lastStringValue` property with the eaten name.
pp$8.regexp_eatRegExpIdentifierName = function(state) {
  state.lastStringValue = "";
  if (this.regexp_eatRegExpIdentifierStart(state)) {
    state.lastStringValue += codePointToString(state.lastIntValue);
    while (this.regexp_eatRegExpIdentifierPart(state)) {
      state.lastStringValue += codePointToString(state.lastIntValue);
    }
    return true
  }
  return false
};

// RegExpIdentifierStart ::
//   UnicodeIDStart
//   `$`
//   `_`
//   `\` RegExpUnicodeEscapeSequence[+U]
pp$8.regexp_eatRegExpIdentifierStart = function(state) {
  var start = state.pos;
  var forceU = this.options.ecmaVersion >= 11;
  var ch = state.current(forceU);
  state.advance(forceU);

  if (ch === 0x5C /* \ */ && this.regexp_eatRegExpUnicodeEscapeSequence(state, forceU)) {
    ch = state.lastIntValue;
  }
  if (isRegExpIdentifierStart(ch)) {
    state.lastIntValue = ch;
    return true
  }

  state.pos = start;
  return false
};
function isRegExpIdentifierStart(ch) {
  return isIdentifierStart(ch, true) || ch === 0x24 /* $ */ || ch === 0x5F /* _ */
}

// RegExpIdentifierPart ::
//   UnicodeIDContinue
//   `$`
//   `_`
//   `\` RegExpUnicodeEscapeSequence[+U]
//   <ZWNJ>
//   <ZWJ>
pp$8.regexp_eatRegExpIdentifierPart = function(state) {
  var start = state.pos;
  var forceU = this.options.ecmaVersion >= 11;
  var ch = state.current(forceU);
  state.advance(forceU);

  if (ch === 0x5C /* \ */ && this.regexp_eatRegExpUnicodeEscapeSequence(state, forceU)) {
    ch = state.lastIntValue;
  }
  if (isRegExpIdentifierPart(ch)) {
    state.lastIntValue = ch;
    return true
  }

  state.pos = start;
  return false
};
function isRegExpIdentifierPart(ch) {
  return isIdentifierChar(ch, true) || ch === 0x24 /* $ */ || ch === 0x5F /* _ */ || ch === 0x200C /* <ZWNJ> */ || ch === 0x200D /* <ZWJ> */
}

// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-AtomEscape
pp$8.regexp_eatAtomEscape = function(state) {
  if (
    this.regexp_eatBackReference(state) ||
    this.regexp_eatCharacterClassEscape(state) ||
    this.regexp_eatCharacterEscape(state) ||
    (state.switchN && this.regexp_eatKGroupName(state))
  ) {
    return true
  }
  if (state.switchU) {
    // Make the same message as V8.
    if (state.current() === 0x63 /* c */) {
      state.raise("Invalid unicode escape");
    }
    state.raise("Invalid escape");
  }
  return false
};
pp$8.regexp_eatBackReference = function(state) {
  var start = state.pos;
  if (this.regexp_eatDecimalEscape(state)) {
    var n = state.lastIntValue;
    if (state.switchU) {
      // For SyntaxError in https://www.ecma-international.org/ecma-262/8.0/#sec-atomescape
      if (n > state.maxBackReference) {
        state.maxBackReference = n;
      }
      return true
    }
    if (n <= state.numCapturingParens) {
      return true
    }
    state.pos = start;
  }
  return false
};
pp$8.regexp_eatKGroupName = function(state) {
  if (state.eat(0x6B /* k */)) {
    if (this.regexp_eatGroupName(state)) {
      state.backReferenceNames.push(state.lastStringValue);
      return true
    }
    state.raise("Invalid named reference");
  }
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-CharacterEscape
pp$8.regexp_eatCharacterEscape = function(state) {
  return (
    this.regexp_eatControlEscape(state) ||
    this.regexp_eatCControlLetter(state) ||
    this.regexp_eatZero(state) ||
    this.regexp_eatHexEscapeSequence(state) ||
    this.regexp_eatRegExpUnicodeEscapeSequence(state, false) ||
    (!state.switchU && this.regexp_eatLegacyOctalEscapeSequence(state)) ||
    this.regexp_eatIdentityEscape(state)
  )
};
pp$8.regexp_eatCControlLetter = function(state) {
  var start = state.pos;
  if (state.eat(0x63 /* c */)) {
    if (this.regexp_eatControlLetter(state)) {
      return true
    }
    state.pos = start;
  }
  return false
};
pp$8.regexp_eatZero = function(state) {
  if (state.current() === 0x30 /* 0 */ && !isDecimalDigit(state.lookahead())) {
    state.lastIntValue = 0;
    state.advance();
    return true
  }
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-ControlEscape
pp$8.regexp_eatControlEscape = function(state) {
  var ch = state.current();
  if (ch === 0x74 /* t */) {
    state.lastIntValue = 0x09; /* \t */
    state.advance();
    return true
  }
  if (ch === 0x6E /* n */) {
    state.lastIntValue = 0x0A; /* \n */
    state.advance();
    return true
  }
  if (ch === 0x76 /* v */) {
    state.lastIntValue = 0x0B; /* \v */
    state.advance();
    return true
  }
  if (ch === 0x66 /* f */) {
    state.lastIntValue = 0x0C; /* \f */
    state.advance();
    return true
  }
  if (ch === 0x72 /* r */) {
    state.lastIntValue = 0x0D; /* \r */
    state.advance();
    return true
  }
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-ControlLetter
pp$8.regexp_eatControlLetter = function(state) {
  var ch = state.current();
  if (isControlLetter(ch)) {
    state.lastIntValue = ch % 0x20;
    state.advance();
    return true
  }
  return false
};
function isControlLetter(ch) {
  return (
    (ch >= 0x41 /* A */ && ch <= 0x5A /* Z */) ||
    (ch >= 0x61 /* a */ && ch <= 0x7A /* z */)
  )
}

// https://www.ecma-international.org/ecma-262/8.0/#prod-RegExpUnicodeEscapeSequence
pp$8.regexp_eatRegExpUnicodeEscapeSequence = function(state, forceU) {
  if ( forceU === void 0 ) forceU = false;

  var start = state.pos;
  var switchU = forceU || state.switchU;

  if (state.eat(0x75 /* u */)) {
    if (this.regexp_eatFixedHexDigits(state, 4)) {
      var lead = state.lastIntValue;
      if (switchU && lead >= 0xD800 && lead <= 0xDBFF) {
        var leadSurrogateEnd = state.pos;
        if (state.eat(0x5C /* \ */) && state.eat(0x75 /* u */) && this.regexp_eatFixedHexDigits(state, 4)) {
          var trail = state.lastIntValue;
          if (trail >= 0xDC00 && trail <= 0xDFFF) {
            state.lastIntValue = (lead - 0xD800) * 0x400 + (trail - 0xDC00) + 0x10000;
            return true
          }
        }
        state.pos = leadSurrogateEnd;
        state.lastIntValue = lead;
      }
      return true
    }
    if (
      switchU &&
      state.eat(0x7B /* { */) &&
      this.regexp_eatHexDigits(state) &&
      state.eat(0x7D /* } */) &&
      isValidUnicode(state.lastIntValue)
    ) {
      return true
    }
    if (switchU) {
      state.raise("Invalid unicode escape");
    }
    state.pos = start;
  }

  return false
};
function isValidUnicode(ch) {
  return ch >= 0 && ch <= 0x10FFFF
}

// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-IdentityEscape
pp$8.regexp_eatIdentityEscape = function(state) {
  if (state.switchU) {
    if (this.regexp_eatSyntaxCharacter(state)) {
      return true
    }
    if (state.eat(0x2F /* / */)) {
      state.lastIntValue = 0x2F; /* / */
      return true
    }
    return false
  }

  var ch = state.current();
  if (ch !== 0x63 /* c */ && (!state.switchN || ch !== 0x6B /* k */)) {
    state.lastIntValue = ch;
    state.advance();
    return true
  }

  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-DecimalEscape
pp$8.regexp_eatDecimalEscape = function(state) {
  state.lastIntValue = 0;
  var ch = state.current();
  if (ch >= 0x31 /* 1 */ && ch <= 0x39 /* 9 */) {
    do {
      state.lastIntValue = 10 * state.lastIntValue + (ch - 0x30 /* 0 */);
      state.advance();
    } while ((ch = state.current()) >= 0x30 /* 0 */ && ch <= 0x39 /* 9 */)
    return true
  }
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-CharacterClassEscape
pp$8.regexp_eatCharacterClassEscape = function(state) {
  var ch = state.current();

  if (isCharacterClassEscape(ch)) {
    state.lastIntValue = -1;
    state.advance();
    return true
  }

  if (
    state.switchU &&
    this.options.ecmaVersion >= 9 &&
    (ch === 0x50 /* P */ || ch === 0x70 /* p */)
  ) {
    state.lastIntValue = -1;
    state.advance();
    if (
      state.eat(0x7B /* { */) &&
      this.regexp_eatUnicodePropertyValueExpression(state) &&
      state.eat(0x7D /* } */)
    ) {
      return true
    }
    state.raise("Invalid property name");
  }

  return false
};
function isCharacterClassEscape(ch) {
  return (
    ch === 0x64 /* d */ ||
    ch === 0x44 /* D */ ||
    ch === 0x73 /* s */ ||
    ch === 0x53 /* S */ ||
    ch === 0x77 /* w */ ||
    ch === 0x57 /* W */
  )
}

// UnicodePropertyValueExpression ::
//   UnicodePropertyName `=` UnicodePropertyValue
//   LoneUnicodePropertyNameOrValue
pp$8.regexp_eatUnicodePropertyValueExpression = function(state) {
  var start = state.pos;

  // UnicodePropertyName `=` UnicodePropertyValue
  if (this.regexp_eatUnicodePropertyName(state) && state.eat(0x3D /* = */)) {
    var name = state.lastStringValue;
    if (this.regexp_eatUnicodePropertyValue(state)) {
      var value = state.lastStringValue;
      this.regexp_validateUnicodePropertyNameAndValue(state, name, value);
      return true
    }
  }
  state.pos = start;

  // LoneUnicodePropertyNameOrValue
  if (this.regexp_eatLoneUnicodePropertyNameOrValue(state)) {
    var nameOrValue = state.lastStringValue;
    this.regexp_validateUnicodePropertyNameOrValue(state, nameOrValue);
    return true
  }
  return false
};
pp$8.regexp_validateUnicodePropertyNameAndValue = function(state, name, value) {
  if (!has(state.unicodeProperties.nonBinary, name))
    { state.raise("Invalid property name"); }
  if (!state.unicodeProperties.nonBinary[name].test(value))
    { state.raise("Invalid property value"); }
};
pp$8.regexp_validateUnicodePropertyNameOrValue = function(state, nameOrValue) {
  if (!state.unicodeProperties.binary.test(nameOrValue))
    { state.raise("Invalid property name"); }
};

// UnicodePropertyName ::
//   UnicodePropertyNameCharacters
pp$8.regexp_eatUnicodePropertyName = function(state) {
  var ch = 0;
  state.lastStringValue = "";
  while (isUnicodePropertyNameCharacter(ch = state.current())) {
    state.lastStringValue += codePointToString(ch);
    state.advance();
  }
  return state.lastStringValue !== ""
};
function isUnicodePropertyNameCharacter(ch) {
  return isControlLetter(ch) || ch === 0x5F /* _ */
}

// UnicodePropertyValue ::
//   UnicodePropertyValueCharacters
pp$8.regexp_eatUnicodePropertyValue = function(state) {
  var ch = 0;
  state.lastStringValue = "";
  while (isUnicodePropertyValueCharacter(ch = state.current())) {
    state.lastStringValue += codePointToString(ch);
    state.advance();
  }
  return state.lastStringValue !== ""
};
function isUnicodePropertyValueCharacter(ch) {
  return isUnicodePropertyNameCharacter(ch) || isDecimalDigit(ch)
}

// LoneUnicodePropertyNameOrValue ::
//   UnicodePropertyValueCharacters
pp$8.regexp_eatLoneUnicodePropertyNameOrValue = function(state) {
  return this.regexp_eatUnicodePropertyValue(state)
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-CharacterClass
pp$8.regexp_eatCharacterClass = function(state) {
  if (state.eat(0x5B /* [ */)) {
    state.eat(0x5E /* ^ */);
    this.regexp_classRanges(state);
    if (state.eat(0x5D /* ] */)) {
      return true
    }
    // Unreachable since it threw "unterminated regular expression" error before.
    state.raise("Unterminated character class");
  }
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-ClassRanges
// https://www.ecma-international.org/ecma-262/8.0/#prod-NonemptyClassRanges
// https://www.ecma-international.org/ecma-262/8.0/#prod-NonemptyClassRangesNoDash
pp$8.regexp_classRanges = function(state) {
  while (this.regexp_eatClassAtom(state)) {
    var left = state.lastIntValue;
    if (state.eat(0x2D /* - */) && this.regexp_eatClassAtom(state)) {
      var right = state.lastIntValue;
      if (state.switchU && (left === -1 || right === -1)) {
        state.raise("Invalid character class");
      }
      if (left !== -1 && right !== -1 && left > right) {
        state.raise("Range out of order in character class");
      }
    }
  }
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-ClassAtom
// https://www.ecma-international.org/ecma-262/8.0/#prod-ClassAtomNoDash
pp$8.regexp_eatClassAtom = function(state) {
  var start = state.pos;

  if (state.eat(0x5C /* \ */)) {
    if (this.regexp_eatClassEscape(state)) {
      return true
    }
    if (state.switchU) {
      // Make the same message as V8.
      var ch$1 = state.current();
      if (ch$1 === 0x63 /* c */ || isOctalDigit(ch$1)) {
        state.raise("Invalid class escape");
      }
      state.raise("Invalid escape");
    }
    state.pos = start;
  }

  var ch = state.current();
  if (ch !== 0x5D /* ] */) {
    state.lastIntValue = ch;
    state.advance();
    return true
  }

  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-ClassEscape
pp$8.regexp_eatClassEscape = function(state) {
  var start = state.pos;

  if (state.eat(0x62 /* b */)) {
    state.lastIntValue = 0x08; /* <BS> */
    return true
  }

  if (state.switchU && state.eat(0x2D /* - */)) {
    state.lastIntValue = 0x2D; /* - */
    return true
  }

  if (!state.switchU && state.eat(0x63 /* c */)) {
    if (this.regexp_eatClassControlLetter(state)) {
      return true
    }
    state.pos = start;
  }

  return (
    this.regexp_eatCharacterClassEscape(state) ||
    this.regexp_eatCharacterEscape(state)
  )
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-ClassControlLetter
pp$8.regexp_eatClassControlLetter = function(state) {
  var ch = state.current();
  if (isDecimalDigit(ch) || ch === 0x5F /* _ */) {
    state.lastIntValue = ch % 0x20;
    state.advance();
    return true
  }
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-HexEscapeSequence
pp$8.regexp_eatHexEscapeSequence = function(state) {
  var start = state.pos;
  if (state.eat(0x78 /* x */)) {
    if (this.regexp_eatFixedHexDigits(state, 2)) {
      return true
    }
    if (state.switchU) {
      state.raise("Invalid escape");
    }
    state.pos = start;
  }
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-DecimalDigits
pp$8.regexp_eatDecimalDigits = function(state) {
  var start = state.pos;
  var ch = 0;
  state.lastIntValue = 0;
  while (isDecimalDigit(ch = state.current())) {
    state.lastIntValue = 10 * state.lastIntValue + (ch - 0x30 /* 0 */);
    state.advance();
  }
  return state.pos !== start
};
function isDecimalDigit(ch) {
  return ch >= 0x30 /* 0 */ && ch <= 0x39 /* 9 */
}

// https://www.ecma-international.org/ecma-262/8.0/#prod-HexDigits
pp$8.regexp_eatHexDigits = function(state) {
  var start = state.pos;
  var ch = 0;
  state.lastIntValue = 0;
  while (isHexDigit(ch = state.current())) {
    state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
    state.advance();
  }
  return state.pos !== start
};
function isHexDigit(ch) {
  return (
    (ch >= 0x30 /* 0 */ && ch <= 0x39 /* 9 */) ||
    (ch >= 0x41 /* A */ && ch <= 0x46 /* F */) ||
    (ch >= 0x61 /* a */ && ch <= 0x66 /* f */)
  )
}
function hexToInt(ch) {
  if (ch >= 0x41 /* A */ && ch <= 0x46 /* F */) {
    return 10 + (ch - 0x41 /* A */)
  }
  if (ch >= 0x61 /* a */ && ch <= 0x66 /* f */) {
    return 10 + (ch - 0x61 /* a */)
  }
  return ch - 0x30 /* 0 */
}

// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-LegacyOctalEscapeSequence
// Allows only 0-377(octal) i.e. 0-255(decimal).
pp$8.regexp_eatLegacyOctalEscapeSequence = function(state) {
  if (this.regexp_eatOctalDigit(state)) {
    var n1 = state.lastIntValue;
    if (this.regexp_eatOctalDigit(state)) {
      var n2 = state.lastIntValue;
      if (n1 <= 3 && this.regexp_eatOctalDigit(state)) {
        state.lastIntValue = n1 * 64 + n2 * 8 + state.lastIntValue;
      } else {
        state.lastIntValue = n1 * 8 + n2;
      }
    } else {
      state.lastIntValue = n1;
    }
    return true
  }
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-OctalDigit
pp$8.regexp_eatOctalDigit = function(state) {
  var ch = state.current();
  if (isOctalDigit(ch)) {
    state.lastIntValue = ch - 0x30; /* 0 */
    state.advance();
    return true
  }
  state.lastIntValue = 0;
  return false
};
function isOctalDigit(ch) {
  return ch >= 0x30 /* 0 */ && ch <= 0x37 /* 7 */
}

// https://www.ecma-international.org/ecma-262/8.0/#prod-Hex4Digits
// https://www.ecma-international.org/ecma-262/8.0/#prod-HexDigit
// And HexDigit HexDigit in https://www.ecma-international.org/ecma-262/8.0/#prod-HexEscapeSequence
pp$8.regexp_eatFixedHexDigits = function(state, length) {
  var start = state.pos;
  state.lastIntValue = 0;
  for (var i = 0; i < length; ++i) {
    var ch = state.current();
    if (!isHexDigit(ch)) {
      state.pos = start;
      return false
    }
    state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
    state.advance();
  }
  return true
};

// Object type used to represent tokens. Note that normally, tokens
// simply exist as properties on the parser object. This is only
// used for the onToken callback and the external tokenizer.

var Token = function Token(p) {
  this.type = p.type;
  this.value = p.value;
  this.start = p.start;
  this.end = p.end;
  if (p.options.locations)
    { this.loc = new SourceLocation(p, p.startLoc, p.endLoc); }
  if (p.options.ranges)
    { this.range = [p.start, p.end]; }
};

// ## Tokenizer

var pp$9 = Parser.prototype;

// Move to the next token

pp$9.next = function(ignoreEscapeSequenceInKeyword) {
  if (!ignoreEscapeSequenceInKeyword && this.type.keyword && this.containsEsc)
    { this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword); }
  if (this.options.onToken)
    { this.options.onToken(new Token(this)); }

  this.lastTokEnd = this.end;
  this.lastTokStart = this.start;
  this.lastTokEndLoc = this.endLoc;
  this.lastTokStartLoc = this.startLoc;
  this.nextToken();
};

pp$9.getToken = function() {
  this.next();
  return new Token(this)
};

// If we're in an ES6 environment, make parsers iterable
if (typeof Symbol !== "undefined")
  { pp$9[Symbol.iterator] = function() {
    var this$1 = this;

    return {
      next: function () {
        var token = this$1.getToken();
        return {
          done: token.type === types.eof,
          value: token
        }
      }
    }
  }; }

// Toggle strict mode. Re-reads the next number or string to please
// pedantic tests (`"use strict"; 010;` should fail).

pp$9.curContext = function() {
  return this.context[this.context.length - 1]
};

// Read a single token, updating the parser object's token-related
// properties.

pp$9.nextToken = function() {
  var curContext = this.curContext();
  if (!curContext || !curContext.preserveSpace) { this.skipSpace(); }

  this.start = this.pos;
  if (this.options.locations) { this.startLoc = this.curPosition(); }
  if (this.pos >= this.input.length) { return this.finishToken(types.eof) }

  if (curContext.override) { return curContext.override(this) }
  else { this.readToken(this.fullCharCodeAtPos()); }
};

pp$9.readToken = function(code) {
  // Identifier or keyword. '\uXXXX' sequences are allowed in
  // identifiers, so '\' also dispatches to that.
  if (isIdentifierStart(code, this.options.ecmaVersion >= 6) || code === 92 /* '\' */)
    { return this.readWord() }

  return this.getTokenFromCode(code)
};

pp$9.fullCharCodeAtPos = function() {
  var code = this.input.charCodeAt(this.pos);
  if (code <= 0xd7ff || code >= 0xe000) { return code }
  var next = this.input.charCodeAt(this.pos + 1);
  return (code << 10) + next - 0x35fdc00
};

pp$9.skipBlockComment = function() {
  var startLoc = this.options.onComment && this.curPosition();
  var start = this.pos, end = this.input.indexOf("*/", this.pos += 2);
  if (end === -1) { this.raise(this.pos - 2, "Unterminated comment"); }
  this.pos = end + 2;
  if (this.options.locations) {
    lineBreakG.lastIndex = start;
    var match;
    while ((match = lineBreakG.exec(this.input)) && match.index < this.pos) {
      ++this.curLine;
      this.lineStart = match.index + match[0].length;
    }
  }
  if (this.options.onComment)
    { this.options.onComment(true, this.input.slice(start + 2, end), start, this.pos,
                           startLoc, this.curPosition()); }
};

pp$9.skipLineComment = function(startSkip) {
  var start = this.pos;
  var startLoc = this.options.onComment && this.curPosition();
  var ch = this.input.charCodeAt(this.pos += startSkip);
  while (this.pos < this.input.length && !isNewLine(ch)) {
    ch = this.input.charCodeAt(++this.pos);
  }
  if (this.options.onComment)
    { this.options.onComment(false, this.input.slice(start + startSkip, this.pos), start, this.pos,
                           startLoc, this.curPosition()); }
};

// Called at the start of the parse and after every token. Skips
// whitespace and comments, and.

pp$9.skipSpace = function() {
  loop: while (this.pos < this.input.length) {
    var ch = this.input.charCodeAt(this.pos);
    switch (ch) {
    case 32: case 160: // ' '
      ++this.pos;
      break
    case 13:
      if (this.input.charCodeAt(this.pos + 1) === 10) {
        ++this.pos;
      }
    case 10: case 8232: case 8233:
      ++this.pos;
      if (this.options.locations) {
        ++this.curLine;
        this.lineStart = this.pos;
      }
      break
    case 47: // '/'
      switch (this.input.charCodeAt(this.pos + 1)) {
      case 42: // '*'
        this.skipBlockComment();
        break
      case 47:
        this.skipLineComment(2);
        break
      default:
        break loop
      }
      break
    default:
      if (ch > 8 && ch < 14 || ch >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(ch))) {
        ++this.pos;
      } else {
        break loop
      }
    }
  }
};

// Called at the end of every token. Sets `end`, `val`, and
// maintains `context` and `exprAllowed`, and skips the space after
// the token, so that the next one's `start` will point at the
// right position.

pp$9.finishToken = function(type, val) {
  this.end = this.pos;
  if (this.options.locations) { this.endLoc = this.curPosition(); }
  var prevType = this.type;
  this.type = type;
  this.value = val;

  this.updateContext(prevType);
};

// ### Token reading

// This is the function that is called to fetch the next token. It
// is somewhat obscure, because it works in character codes rather
// than characters, and because operator parsing has been inlined
// into it.
//
// All in the name of speed.
//
pp$9.readToken_dot = function() {
  var next = this.input.charCodeAt(this.pos + 1);
  if (next >= 48 && next <= 57) { return this.readNumber(true) }
  var next2 = this.input.charCodeAt(this.pos + 2);
  if (this.options.ecmaVersion >= 6 && next === 46 && next2 === 46) { // 46 = dot '.'
    this.pos += 3;
    return this.finishToken(types.ellipsis)
  } else {
    ++this.pos;
    return this.finishToken(types.dot)
  }
};

pp$9.readToken_slash = function() { // '/'
  var next = this.input.charCodeAt(this.pos + 1);
  if (this.exprAllowed) { ++this.pos; return this.readRegexp() }
  if (next === 61) { return this.finishOp(types.assign, 2) }
  return this.finishOp(types.slash, 1)
};

pp$9.readToken_mult_modulo_exp = function(code) { // '%*'
  var next = this.input.charCodeAt(this.pos + 1);
  var size = 1;
  var tokentype = code === 42 ? types.star : types.modulo;

  // exponentiation operator ** and **=
  if (this.options.ecmaVersion >= 7 && code === 42 && next === 42) {
    ++size;
    tokentype = types.starstar;
    next = this.input.charCodeAt(this.pos + 2);
  }

  if (next === 61) { return this.finishOp(types.assign, size + 1) }
  return this.finishOp(tokentype, size)
};

pp$9.readToken_pipe_amp = function(code) { // '|&'
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === code) {
    if (this.options.ecmaVersion >= 12) {
      var next2 = this.input.charCodeAt(this.pos + 2);
      if (next2 === 61) { return this.finishOp(types.assign, 3) }
    }
    return this.finishOp(code === 124 ? types.logicalOR : types.logicalAND, 2)
  }
  if (next === 61) { return this.finishOp(types.assign, 2) }
  return this.finishOp(code === 124 ? types.bitwiseOR : types.bitwiseAND, 1)
};

pp$9.readToken_caret = function() { // '^'
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === 61) { return this.finishOp(types.assign, 2) }
  return this.finishOp(types.bitwiseXOR, 1)
};

pp$9.readToken_plus_min = function(code) { // '+-'
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === code) {
    if (next === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 &&
        (this.lastTokEnd === 0 || lineBreak.test(this.input.slice(this.lastTokEnd, this.pos)))) {
      // A `-->` line comment
      this.skipLineComment(3);
      this.skipSpace();
      return this.nextToken()
    }
    return this.finishOp(types.incDec, 2)
  }
  if (next === 61) { return this.finishOp(types.assign, 2) }
  return this.finishOp(types.plusMin, 1)
};

pp$9.readToken_lt_gt = function(code) { // '<>'
  var next = this.input.charCodeAt(this.pos + 1);
  var size = 1;
  if (next === code) {
    size = code === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2;
    if (this.input.charCodeAt(this.pos + size) === 61) { return this.finishOp(types.assign, size + 1) }
    return this.finishOp(types.bitShift, size)
  }
  if (next === 33 && code === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 &&
      this.input.charCodeAt(this.pos + 3) === 45) {
    // `<!--`, an XML-style comment that should be interpreted as a line comment
    this.skipLineComment(4);
    this.skipSpace();
    return this.nextToken()
  }
  if (next === 61) { size = 2; }
  return this.finishOp(types.relational, size)
};

pp$9.readToken_eq_excl = function(code) { // '=!'
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === 61) { return this.finishOp(types.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2) }
  if (code === 61 && next === 62 && this.options.ecmaVersion >= 6) { // '=>'
    this.pos += 2;
    return this.finishToken(types.arrow)
  }
  return this.finishOp(code === 61 ? types.eq : types.prefix, 1)
};

pp$9.readToken_question = function() { // '?'
  var ecmaVersion = this.options.ecmaVersion;
  if (ecmaVersion >= 11) {
    var next = this.input.charCodeAt(this.pos + 1);
    if (next === 46) {
      var next2 = this.input.charCodeAt(this.pos + 2);
      if (next2 < 48 || next2 > 57) { return this.finishOp(types.questionDot, 2) }
    }
    if (next === 63) {
      if (ecmaVersion >= 12) {
        var next2$1 = this.input.charCodeAt(this.pos + 2);
        if (next2$1 === 61) { return this.finishOp(types.assign, 3) }
      }
      return this.finishOp(types.coalesce, 2)
    }
  }
  return this.finishOp(types.question, 1)
};

pp$9.getTokenFromCode = function(code) {
  switch (code) {
  // The interpretation of a dot depends on whether it is followed
  // by a digit or another two dots.
  case 46: // '.'
    return this.readToken_dot()

  // Punctuation tokens.
  case 40: ++this.pos; return this.finishToken(types.parenL)
  case 41: ++this.pos; return this.finishToken(types.parenR)
  case 59: ++this.pos; return this.finishToken(types.semi)
  case 44: ++this.pos; return this.finishToken(types.comma)
  case 91: ++this.pos; return this.finishToken(types.bracketL)
  case 93: ++this.pos; return this.finishToken(types.bracketR)
  case 123: ++this.pos; return this.finishToken(types.braceL)
  case 125: ++this.pos; return this.finishToken(types.braceR)
  case 58: ++this.pos; return this.finishToken(types.colon)

  case 96: // '`'
    if (this.options.ecmaVersion < 6) { break }
    ++this.pos;
    return this.finishToken(types.backQuote)

  case 48: // '0'
    var next = this.input.charCodeAt(this.pos + 1);
    if (next === 120 || next === 88) { return this.readRadixNumber(16) } // '0x', '0X' - hex number
    if (this.options.ecmaVersion >= 6) {
      if (next === 111 || next === 79) { return this.readRadixNumber(8) } // '0o', '0O' - octal number
      if (next === 98 || next === 66) { return this.readRadixNumber(2) } // '0b', '0B' - binary number
    }

  // Anything else beginning with a digit is an integer, octal
  // number, or float.
  case 49: case 50: case 51: case 52: case 53: case 54: case 55: case 56: case 57: // 1-9
    return this.readNumber(false)

  // Quotes produce strings.
  case 34: case 39: // '"', "'"
    return this.readString(code)

  // Operators are parsed inline in tiny state machines. '=' (61) is
  // often referred to. `finishOp` simply skips the amount of
  // characters it is given as second argument, and returns a token
  // of the type given by its first argument.

  case 47: // '/'
    return this.readToken_slash()

  case 37: case 42: // '%*'
    return this.readToken_mult_modulo_exp(code)

  case 124: case 38: // '|&'
    return this.readToken_pipe_amp(code)

  case 94: // '^'
    return this.readToken_caret()

  case 43: case 45: // '+-'
    return this.readToken_plus_min(code)

  case 60: case 62: // '<>'
    return this.readToken_lt_gt(code)

  case 61: case 33: // '=!'
    return this.readToken_eq_excl(code)

  case 63: // '?'
    return this.readToken_question()

  case 126: // '~'
    return this.finishOp(types.prefix, 1)
  }

  this.raise(this.pos, "Unexpected character '" + codePointToString$1(code) + "'");
};

pp$9.finishOp = function(type, size) {
  var str = this.input.slice(this.pos, this.pos + size);
  this.pos += size;
  return this.finishToken(type, str)
};

pp$9.readRegexp = function() {
  var escaped, inClass, start = this.pos;
  for (;;) {
    if (this.pos >= this.input.length) { this.raise(start, "Unterminated regular expression"); }
    var ch = this.input.charAt(this.pos);
    if (lineBreak.test(ch)) { this.raise(start, "Unterminated regular expression"); }
    if (!escaped) {
      if (ch === "[") { inClass = true; }
      else if (ch === "]" && inClass) { inClass = false; }
      else if (ch === "/" && !inClass) { break }
      escaped = ch === "\\";
    } else { escaped = false; }
    ++this.pos;
  }
  var pattern = this.input.slice(start, this.pos);
  ++this.pos;
  var flagsStart = this.pos;
  var flags = this.readWord1();
  if (this.containsEsc) { this.unexpected(flagsStart); }

  // Validate pattern
  var state = this.regexpState || (this.regexpState = new RegExpValidationState(this));
  state.reset(start, pattern, flags);
  this.validateRegExpFlags(state);
  this.validateRegExpPattern(state);

  // Create Literal#value property value.
  var value = null;
  try {
    value = new RegExp(pattern, flags);
  } catch (e) {
    // ESTree requires null if it failed to instantiate RegExp object.
    // https://github.com/estree/estree/blob/a27003adf4fd7bfad44de9cef372a2eacd527b1c/es5.md#regexpliteral
  }

  return this.finishToken(types.regexp, {pattern: pattern, flags: flags, value: value})
};

// Read an integer in the given radix. Return null if zero digits
// were read, the integer value otherwise. When `len` is given, this
// will return `null` unless the integer has exactly `len` digits.

pp$9.readInt = function(radix, len, maybeLegacyOctalNumericLiteral) {
  // `len` is used for character escape sequences. In that case, disallow separators.
  var allowSeparators = this.options.ecmaVersion >= 12 && len === undefined;

  // `maybeLegacyOctalNumericLiteral` is true if it doesn't have prefix (0x,0o,0b)
  // and isn't fraction part nor exponent part. In that case, if the first digit
  // is zero then disallow separators.
  var isLegacyOctalNumericLiteral = maybeLegacyOctalNumericLiteral && this.input.charCodeAt(this.pos) === 48;

  var start = this.pos, total = 0, lastCode = 0;
  for (var i = 0, e = len == null ? Infinity : len; i < e; ++i, ++this.pos) {
    var code = this.input.charCodeAt(this.pos), val = (void 0);

    if (allowSeparators && code === 95) {
      if (isLegacyOctalNumericLiteral) { this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"); }
      if (lastCode === 95) { this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"); }
      if (i === 0) { this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"); }
      lastCode = code;
      continue
    }

    if (code >= 97) { val = code - 97 + 10; } // a
    else if (code >= 65) { val = code - 65 + 10; } // A
    else if (code >= 48 && code <= 57) { val = code - 48; } // 0-9
    else { val = Infinity; }
    if (val >= radix) { break }
    lastCode = code;
    total = total * radix + val;
  }

  if (allowSeparators && lastCode === 95) { this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"); }
  if (this.pos === start || len != null && this.pos - start !== len) { return null }

  return total
};

function stringToNumber(str, isLegacyOctalNumericLiteral) {
  if (isLegacyOctalNumericLiteral) {
    return parseInt(str, 8)
  }

  // `parseFloat(value)` stops parsing at the first numeric separator then returns a wrong value.
  return parseFloat(str.replace(/_/g, ""))
}

function stringToBigInt(str) {
  if (typeof BigInt !== "function") {
    return null
  }

  // `BigInt(value)` throws syntax error if the string contains numeric separators.
  return BigInt(str.replace(/_/g, ""))
}

pp$9.readRadixNumber = function(radix) {
  var start = this.pos;
  this.pos += 2; // 0x
  var val = this.readInt(radix);
  if (val == null) { this.raise(this.start + 2, "Expected number in radix " + radix); }
  if (this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110) {
    val = stringToBigInt(this.input.slice(start, this.pos));
    ++this.pos;
  } else if (isIdentifierStart(this.fullCharCodeAtPos())) { this.raise(this.pos, "Identifier directly after number"); }
  return this.finishToken(types.num, val)
};

// Read an integer, octal integer, or floating-point number.

pp$9.readNumber = function(startsWithDot) {
  var start = this.pos;
  if (!startsWithDot && this.readInt(10, undefined, true) === null) { this.raise(start, "Invalid number"); }
  var octal = this.pos - start >= 2 && this.input.charCodeAt(start) === 48;
  if (octal && this.strict) { this.raise(start, "Invalid number"); }
  var next = this.input.charCodeAt(this.pos);
  if (!octal && !startsWithDot && this.options.ecmaVersion >= 11 && next === 110) {
    var val$1 = stringToBigInt(this.input.slice(start, this.pos));
    ++this.pos;
    if (isIdentifierStart(this.fullCharCodeAtPos())) { this.raise(this.pos, "Identifier directly after number"); }
    return this.finishToken(types.num, val$1)
  }
  if (octal && /[89]/.test(this.input.slice(start, this.pos))) { octal = false; }
  if (next === 46 && !octal) { // '.'
    ++this.pos;
    this.readInt(10);
    next = this.input.charCodeAt(this.pos);
  }
  if ((next === 69 || next === 101) && !octal) { // 'eE'
    next = this.input.charCodeAt(++this.pos);
    if (next === 43 || next === 45) { ++this.pos; } // '+-'
    if (this.readInt(10) === null) { this.raise(start, "Invalid number"); }
  }
  if (isIdentifierStart(this.fullCharCodeAtPos())) { this.raise(this.pos, "Identifier directly after number"); }

  var val = stringToNumber(this.input.slice(start, this.pos), octal);
  return this.finishToken(types.num, val)
};

// Read a string value, interpreting backslash-escapes.

pp$9.readCodePoint = function() {
  var ch = this.input.charCodeAt(this.pos), code;

  if (ch === 123) { // '{'
    if (this.options.ecmaVersion < 6) { this.unexpected(); }
    var codePos = ++this.pos;
    code = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos);
    ++this.pos;
    if (code > 0x10FFFF) { this.invalidStringToken(codePos, "Code point out of bounds"); }
  } else {
    code = this.readHexChar(4);
  }
  return code
};

function codePointToString$1(code) {
  // UTF-16 Decoding
  if (code <= 0xFFFF) { return String.fromCharCode(code) }
  code -= 0x10000;
  return String.fromCharCode((code >> 10) + 0xD800, (code & 1023) + 0xDC00)
}

pp$9.readString = function(quote) {
  var out = "", chunkStart = ++this.pos;
  for (;;) {
    if (this.pos >= this.input.length) { this.raise(this.start, "Unterminated string constant"); }
    var ch = this.input.charCodeAt(this.pos);
    if (ch === quote) { break }
    if (ch === 92) { // '\'
      out += this.input.slice(chunkStart, this.pos);
      out += this.readEscapedChar(false);
      chunkStart = this.pos;
    } else {
      if (isNewLine(ch, this.options.ecmaVersion >= 10)) { this.raise(this.start, "Unterminated string constant"); }
      ++this.pos;
    }
  }
  out += this.input.slice(chunkStart, this.pos++);
  return this.finishToken(types.string, out)
};

// Reads template string tokens.

var INVALID_TEMPLATE_ESCAPE_ERROR = {};

pp$9.tryReadTemplateToken = function() {
  this.inTemplateElement = true;
  try {
    this.readTmplToken();
  } catch (err) {
    if (err === INVALID_TEMPLATE_ESCAPE_ERROR) {
      this.readInvalidTemplateToken();
    } else {
      throw err
    }
  }

  this.inTemplateElement = false;
};

pp$9.invalidStringToken = function(position, message) {
  if (this.inTemplateElement && this.options.ecmaVersion >= 9) {
    throw INVALID_TEMPLATE_ESCAPE_ERROR
  } else {
    this.raise(position, message);
  }
};

pp$9.readTmplToken = function() {
  var out = "", chunkStart = this.pos;
  for (;;) {
    if (this.pos >= this.input.length) { this.raise(this.start, "Unterminated template"); }
    var ch = this.input.charCodeAt(this.pos);
    if (ch === 96 || ch === 36 && this.input.charCodeAt(this.pos + 1) === 123) { // '`', '${'
      if (this.pos === this.start && (this.type === types.template || this.type === types.invalidTemplate)) {
        if (ch === 36) {
          this.pos += 2;
          return this.finishToken(types.dollarBraceL)
        } else {
          ++this.pos;
          return this.finishToken(types.backQuote)
        }
      }
      out += this.input.slice(chunkStart, this.pos);
      return this.finishToken(types.template, out)
    }
    if (ch === 92) { // '\'
      out += this.input.slice(chunkStart, this.pos);
      out += this.readEscapedChar(true);
      chunkStart = this.pos;
    } else if (isNewLine(ch)) {
      out += this.input.slice(chunkStart, this.pos);
      ++this.pos;
      switch (ch) {
      case 13:
        if (this.input.charCodeAt(this.pos) === 10) { ++this.pos; }
      case 10:
        out += "\n";
        break
      default:
        out += String.fromCharCode(ch);
        break
      }
      if (this.options.locations) {
        ++this.curLine;
        this.lineStart = this.pos;
      }
      chunkStart = this.pos;
    } else {
      ++this.pos;
    }
  }
};

// Reads a template token to search for the end, without validating any escape sequences
pp$9.readInvalidTemplateToken = function() {
  for (; this.pos < this.input.length; this.pos++) {
    switch (this.input[this.pos]) {
    case "\\":
      ++this.pos;
      break

    case "$":
      if (this.input[this.pos + 1] !== "{") {
        break
      }
    // falls through

    case "`":
      return this.finishToken(types.invalidTemplate, this.input.slice(this.start, this.pos))

    // no default
    }
  }
  this.raise(this.start, "Unterminated template");
};

// Used to read escaped characters

pp$9.readEscapedChar = function(inTemplate) {
  var ch = this.input.charCodeAt(++this.pos);
  ++this.pos;
  switch (ch) {
  case 110: return "\n" // 'n' -> '\n'
  case 114: return "\r" // 'r' -> '\r'
  case 120: return String.fromCharCode(this.readHexChar(2)) // 'x'
  case 117: return codePointToString$1(this.readCodePoint()) // 'u'
  case 116: return "\t" // 't' -> '\t'
  case 98: return "\b" // 'b' -> '\b'
  case 118: return "\u000b" // 'v' -> '\u000b'
  case 102: return "\f" // 'f' -> '\f'
  case 13: if (this.input.charCodeAt(this.pos) === 10) { ++this.pos; } // '\r\n'
  case 10: // ' \n'
    if (this.options.locations) { this.lineStart = this.pos; ++this.curLine; }
    return ""
  case 56:
  case 57:
    if (this.strict) {
      this.invalidStringToken(
        this.pos - 1,
        "Invalid escape sequence"
      );
    }
    if (inTemplate) {
      var codePos = this.pos - 1;

      this.invalidStringToken(
        codePos,
        "Invalid escape sequence in template string"
      );

      return null
    }
  default:
    if (ch >= 48 && ch <= 55) {
      var octalStr = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0];
      var octal = parseInt(octalStr, 8);
      if (octal > 255) {
        octalStr = octalStr.slice(0, -1);
        octal = parseInt(octalStr, 8);
      }
      this.pos += octalStr.length - 1;
      ch = this.input.charCodeAt(this.pos);
      if ((octalStr !== "0" || ch === 56 || ch === 57) && (this.strict || inTemplate)) {
        this.invalidStringToken(
          this.pos - 1 - octalStr.length,
          inTemplate
            ? "Octal literal in template string"
            : "Octal literal in strict mode"
        );
      }
      return String.fromCharCode(octal)
    }
    if (isNewLine(ch)) {
      // Unicode new line characters after \ get removed from output in both
      // template literals and strings
      return ""
    }
    return String.fromCharCode(ch)
  }
};

// Used to read character escape sequences ('\x', '\u', '\U').

pp$9.readHexChar = function(len) {
  var codePos = this.pos;
  var n = this.readInt(16, len);
  if (n === null) { this.invalidStringToken(codePos, "Bad character escape sequence"); }
  return n
};

// Read an identifier, and return it as a string. Sets `this.containsEsc`
// to whether the word contained a '\u' escape.
//
// Incrementally adds only escaped chars, adding other chunks as-is
// as a micro-optimization.

pp$9.readWord1 = function() {
  this.containsEsc = false;
  var word = "", first = true, chunkStart = this.pos;
  var astral = this.options.ecmaVersion >= 6;
  while (this.pos < this.input.length) {
    var ch = this.fullCharCodeAtPos();
    if (isIdentifierChar(ch, astral)) {
      this.pos += ch <= 0xffff ? 1 : 2;
    } else if (ch === 92) { // "\"
      this.containsEsc = true;
      word += this.input.slice(chunkStart, this.pos);
      var escStart = this.pos;
      if (this.input.charCodeAt(++this.pos) !== 117) // "u"
        { this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"); }
      ++this.pos;
      var esc = this.readCodePoint();
      if (!(first ? isIdentifierStart : isIdentifierChar)(esc, astral))
        { this.invalidStringToken(escStart, "Invalid Unicode escape"); }
      word += codePointToString$1(esc);
      chunkStart = this.pos;
    } else {
      break
    }
    first = false;
  }
  return word + this.input.slice(chunkStart, this.pos)
};

// Read an identifier or keyword token. Will check for reserved
// words when necessary.

pp$9.readWord = function() {
  var word = this.readWord1();
  var type = types.name;
  if (this.keywords.test(word)) {
    type = keywords$1[word];
  }
  return this.finishToken(type, word)
};

// Acorn is a tiny, fast JavaScript parser written in JavaScript.

var version = "8.0.4";

Parser.acorn = {
  Parser: Parser,
  version: version,
  defaultOptions: defaultOptions,
  Position: Position,
  SourceLocation: SourceLocation,
  getLineInfo: getLineInfo,
  Node: Node,
  TokenType: TokenType,
  tokTypes: types,
  keywordTypes: keywords$1,
  TokContext: TokContext,
  tokContexts: types$1,
  isIdentifierChar: isIdentifierChar,
  isIdentifierStart: isIdentifierStart,
  Token: Token,
  isNewLine: isNewLine,
  lineBreak: lineBreak,
  lineBreakG: lineBreakG,
  nonASCIIwhitespace: nonASCIIwhitespace
};

// The main exported interface (under `self.acorn` when in the
// browser) is a `parse` function that takes a code string and
// returns an abstract syntax tree as specified by [Mozilla parser
// API][api].
//
// [api]: https://developer.mozilla.org/en-US/docs/SpiderMonkey/Parser_API

function parse(input, options) {
  return Parser.parse(input, options)
}

// @ts-check
/** @typedef { import('estree').BaseNode} BaseNode */

/** @typedef {{
	skip: () => void;
	remove: () => void;
	replace: (node: BaseNode) => void;
}} WalkerContext */

class WalkerBase {
	constructor() {
		/** @type {boolean} */
		this.should_skip = false;

		/** @type {boolean} */
		this.should_remove = false;

		/** @type {BaseNode | null} */
		this.replacement = null;

		/** @type {WalkerContext} */
		this.context = {
			skip: () => (this.should_skip = true),
			remove: () => (this.should_remove = true),
			replace: (node) => (this.replacement = node)
		};
	}

	/**
	 *
	 * @param {any} parent
	 * @param {string} prop
	 * @param {number} index
	 * @param {BaseNode} node
	 */
	replace(parent, prop, index, node) {
		if (parent) {
			if (index !== null) {
				parent[prop][index] = node;
			} else {
				parent[prop] = node;
			}
		}
	}

	/**
	 *
	 * @param {any} parent
	 * @param {string} prop
	 * @param {number} index
	 */
	remove(parent, prop, index) {
		if (parent) {
			if (index !== null) {
				parent[prop].splice(index, 1);
			} else {
				delete parent[prop];
			}
		}
	}
}

// @ts-check

/** @typedef { import('estree').BaseNode} BaseNode */
/** @typedef { import('./walker.js').WalkerContext} WalkerContext */

/** @typedef {(
 *    this: WalkerContext,
 *    node: BaseNode,
 *    parent: BaseNode,
 *    key: string,
 *    index: number
 * ) => void} SyncHandler */

class SyncWalker extends WalkerBase {
	/**
	 *
	 * @param {SyncHandler} enter
	 * @param {SyncHandler} leave
	 */
	constructor(enter, leave) {
		super();

		/** @type {SyncHandler} */
		this.enter = enter;

		/** @type {SyncHandler} */
		this.leave = leave;
	}

	/**
	 *
	 * @param {BaseNode} node
	 * @param {BaseNode} parent
	 * @param {string} [prop]
	 * @param {number} [index]
	 * @returns {BaseNode}
	 */
	visit(node, parent, prop, index) {
		if (node) {
			if (this.enter) {
				const _should_skip = this.should_skip;
				const _should_remove = this.should_remove;
				const _replacement = this.replacement;
				this.should_skip = false;
				this.should_remove = false;
				this.replacement = null;

				this.enter.call(this.context, node, parent, prop, index);

				if (this.replacement) {
					node = this.replacement;
					this.replace(parent, prop, index, node);
				}

				if (this.should_remove) {
					this.remove(parent, prop, index);
				}

				const skipped = this.should_skip;
				const removed = this.should_remove;

				this.should_skip = _should_skip;
				this.should_remove = _should_remove;
				this.replacement = _replacement;

				if (skipped) return node;
				if (removed) return null;
			}

			for (const key in node) {
				const value = node[key];

				if (typeof value !== "object") {
					continue;
				} else if (Array.isArray(value)) {
					for (let i = 0; i < value.length; i += 1) {
						if (value[i] !== null && typeof value[i].type === 'string') {
							if (!this.visit(value[i], node, key, i)) {
								// removed
								i--;
							}
						}
					}
				} else if (value !== null && typeof value.type === "string") {
					this.visit(value, node, key, null);
				}
			}

			if (this.leave) {
				const _replacement = this.replacement;
				const _should_remove = this.should_remove;
				this.replacement = null;
				this.should_remove = false;

				this.leave.call(this.context, node, parent, prop, index);

				if (this.replacement) {
					node = this.replacement;
					this.replace(parent, prop, index, node);
				}

				if (this.should_remove) {
					this.remove(parent, prop, index);
				}

				const removed = this.should_remove;

				this.replacement = _replacement;
				this.should_remove = _should_remove;

				if (removed) return null;
			}
		}

		return node;
	}
}

// @ts-check

/** @typedef { import('estree').BaseNode} BaseNode */
/** @typedef { import('./sync.js').SyncHandler} SyncHandler */
/** @typedef { import('./async.js').AsyncHandler} AsyncHandler */

/**
 *
 * @param {BaseNode} ast
 * @param {{
 *   enter?: SyncHandler
 *   leave?: SyncHandler
 * }} walker
 * @returns {BaseNode}
 */
function walk(ast, { enter, leave }) {
	const instance = new SyncWalker(enter, leave);
	return instance.visit(ast, null);
}

/*! Derived from https://github.com/sveltejs/svelte-repl/blob/master/src/workers/bundler/plugins/commonjs.js (Lil license) */

const require = `function require(id) {
	if (id in __repl_lookup) return __repl_lookup[id];
	throw new Error(\`Cannot require modules dynamically (\${id})\`);
}`;

var commonjs = {
	name: 'commonjs',

	transform: (code, id) => {
		if (!/\b(require|module|exports)\b/.test(code)) return;

		try {
			const ast = parse(code, {
				ecmaVersion: 9
			});

			const requires = [];

			walk(ast, {
				enter: node => {
					if (node.type === 'CallExpression' && node.callee.name === 'require') {
						if (node.arguments.length !== 1) return;
						const arg = node.arguments[0];
						if (arg.type !== 'Literal' || typeof arg.value !== 'string') return;

						requires.push(arg.value);
					}
				}
			});

			const imports = requires.map((id, i) => `import __repl_${i} from '${id}';`).join('\n');
			const lookup = `const __repl_lookup = { ${requires.map((id, i) => `'${id}': __repl_${i}`).join(', ')} };`;

			const transformed = [
				imports,
				lookup,
				require,
				`let exports = {}; let module = { exports };`,
				code,
				`export default module.exports;`
			].join('\n\n');

			return {
				code: transformed,
				map: null
			};
		} catch (err) {
			return null;
		}
	}
};

/*! Derived from https://github.com/pngwn/REPLicant (MIT) */

self.window = self;

const CDN_URL = 'https://unpkg.com'; // 'https://cdn.skypack.dev'; // "https://cdn.jsdelivr.net/npm";
importScripts(`${CDN_URL}/svelte/compiler.js`);

const component_lookup = new Map();

async function fetch_package(url) {
  return (await fetch(url)).text();
}

function generate_lookup(components) {
  components.forEach((component) => {
    component_lookup.set(`./${component.name}.${component.type}`, component);
  });
}

self.addEventListener('message', async (event) => {
  generate_lookup(event.data);

  const bundle = await Uo({
    input: './App.svelte',
    plugins: [
      {
        name: 'repl-plugin',
        async resolveId(importee, importer) {
          // handle imports from 'svelte'

          // import x from 'svelte'
          if (importee === 'svelte') return `${CDN_URL}/svelte/index.mjs`;

          // import x from 'svelte/somewhere'
          if (importee.startsWith('svelte/')) {
            return `${CDN_URL}/svelte/${importee.slice(7)}/index.mjs`;
          }

          // import x from './file.js' (via a 'svelte' or 'svelte/x' package)
          if (importer && importer.startsWith(`${CDN_URL}/svelte`)) {
            const resolved = new URL(importee, importer).href;
            if (resolved.endsWith('.mjs')) return resolved;
            return `${resolved}/index.mjs`;
          }

          // local repl components
          if (component_lookup.has(importee)) return importee;

          // relative imports from a remote package
          if (importee.startsWith('.')) return new URL(importee, importer).href;

          // bare named module imports (importing an npm package)

          // get the package.json and load it into memory
          const pkg_url = `${CDN_URL}/${importee}/package.json`;
          const pkg = JSON.parse(await fetch_package(pkg_url));

          // get an entry point from the pkg.json - first try svelte, then modules, then main
          if (pkg.svelte || pkg.module || pkg.main) {
            // use the aobove url minus `/package.json` to resolve the URL
            const url = pkg_url.replace(/\/package\.json$/, '');
            return new URL(pkg.svelte || pkg.module || pkg.main, `${url}/`)
              .href;
          }

          // we probably missed stuff, pass it along as is
          return importee;
        },
        async load(id) {
          // local repl components are stored in memory
          // this is our virtual filesystem
          if (component_lookup.has(id)) return component_lookup.get(id).source;

          // everything else comes from a cdn
          return await fetch_package(id);
        },
        transform(code, id) {
          // our only transform is to compile svelte components
          //@ts-ignore
          if (/.*\.svelte/.test(id)) return svelte.compile(code).js.code;
        },
      },
      commonjs,
    ],
    inlineDynamicImports: true,
  });

  // a touch longwinded but output contains an array of chunks
  // we are not code-splitting, so we only have a single chunk
  const output = (await bundle.generate({ format: 'esm' })).output[0].code;

  self.postMessage(output);
});
//# sourceMappingURL=repl.js.map
