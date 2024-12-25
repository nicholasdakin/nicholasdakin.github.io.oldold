;/*FB_PKG_DELIM*/

__d("DesktopHscrollUnitEventConstants",[],(function(a,b,c,d,e,f){a="DesktopHScrollUnit/itemInserted";b="DesktopHScrollUnit/itemShown";c="DesktopHScrollUnit/HideIndividualItem";d="DesktopHScrollUnit/scrollItemBeforeXout";e="DesktopHScrollUnit/unhideIndividualItem";var g="logLastAdXout",h="onXoutIndividualItem";f.HSCROLL_ITEM_INSERTED_EVENT=a;f.HSCROLL_ITEM_SHOWN_EVENT=b;f.HSCROLL_ITEM_HIDE_EVENT=c;f.HSCROLL_ITEM_SCROLL_BEFORE_XOUT_EVENT=d;f.HSCROLL_ITEM_UNHIDE_EVENT=e;f.HSCROLL_LAST_ITEM_NFX_ACTION_TAKEN=g;f.HSCROLL_PAGER_ITEM_HIDE_EVENT=h}),66);
__d("EntstreamFeedObject",["csx","CSS","Parent"],(function(a,b,c,d,e,f,g){var h={getRoot:function(a){return b("Parent").bySelector(a,"._5jmm")},getHscrollOuterRootIfAvailable:function(a){a=a;b("CSS").matchesSelector(a,"._170y")&&(a=h.getRoot(a.parentNode));return a}};e.exports=h}),null);
__d("EntstreamFeedObjectTracking",["csx","CSS","DOM","EntstreamFeedObject","Focus","ge"],(function(a,b,c,d,e,f,g,h){"use strict";var i=new Map();function a(a){var b=j(a.nodeID);if(!b)return;var d=c("DOM").scry(b,"._5v9_"),e=d&&d.length?d:[b];a.actorIDs.forEach(function(a){var b=[].concat(i.get(a)||[]);b.push.apply(b,e);i.set(a,b)})}function b(a){var b=j(a.nodeID);(i.get(a.actorID)||[]).forEach(function(a){if(a===b)return;d("CSS").hide(a)})}function e(a){var b=j(a.nodeID);(i.get(a.actorID)||[]).forEach(function(a){d("CSS").show(a)});b&&d("Focus").setWithoutOutline(b)}function j(a){a=c("ge")(a);return a?d("EntstreamFeedObject").getRoot(a):null}g.register=a;g.hideAllFromActor=b;g.unhideAllFromActor=e;g.getRoot=j}),98);
__d("DataAttributeUtils",["cr:6669"],(function(a,b,c,d,e,f){var g=[];function h(a,b){a=a;while(a){if(b(a))return a;a=a.parentNode}return null}function i(a,b){a=h(a,function(a){return a instanceof Element&&!!a.getAttribute(b)});return a instanceof Element?a:null}var j={LEGACY_CLICK_TRACKING_ATTRIBUTE:"data-ft",CLICK_TRACKING_DATASTORE_KEY:"data-ft",ENABLE_STORE_CLICK_TRACKING:"data-fte",IMPRESSION_TRACKING_CONFIG_ATTRIBUTE:"data-xt-vimp",IMPRESSION_TRACKING_CONFIG_DATASTORE_KEY:"data-xt-vimp",REMOVE_LEGACY_TRACKING:"data-ftr",getDataAttribute:function(a,b){return k[b]?k[b](a):a.getAttribute(b)},setDataAttribute:function(a,b,c){return l[b]?l[b](a,c):a.setAttribute(b,c)},getDataFt:function(a){if(a.getAttribute(j.ENABLE_STORE_CLICK_TRACKING)){var c=b("cr:6669").get(a,j.CLICK_TRACKING_DATASTORE_KEY);c||(c=j.moveClickTrackingToDataStore(a,a.getAttribute(j.REMOVE_LEGACY_TRACKING)));return c}return a.getAttribute(j.LEGACY_CLICK_TRACKING_ATTRIBUTE)},setDataFt:function(a,c){if(a.getAttribute(j.ENABLE_STORE_CLICK_TRACKING)){b("cr:6669").set(a,j.CLICK_TRACKING_DATASTORE_KEY,c);return}a.setAttribute(j.LEGACY_CLICK_TRACKING_ATTRIBUTE,c)},moveXTVimp:function(a){j.moveAttributeToDataStore(a,j.IMPRESSION_TRACKING_CONFIG_ATTRIBUTE,j.IMPRESSION_TRACKING_CONFIG_DATASTORE_KEY),g.push(a.id)},getXTrackableElements:function(){var a=g.map(function(a){return document.getElementById(a)}).filter(function(a){return!!a}),b=document.querySelectorAll("[data-xt-vimp]");for(var c=0;c<b.length;c++)a.push(b[c]);return a},getDataAttributeGeneric:function(a,c,d){d=b("cr:6669").get(a,d);return d!==void 0?d:a.getAttribute(c)},moveAttributeToDataStore:function(a,c,d){var e=a.getAttribute(c);e&&(b("cr:6669").set(a,d,e),a.removeAttribute(c))},moveClickTrackingToDataStore:function(a,c){var d=a.getAttribute(j.LEGACY_CLICK_TRACKING_ATTRIBUTE);d&&(b("cr:6669").set(a,j.CLICK_TRACKING_DATASTORE_KEY,d),c&&a.removeAttribute(j.LEGACY_CLICK_TRACKING_ATTRIBUTE));return d},getClickTrackingParent:function(a){a=i(a,j.LEGACY_CLICK_TRACKING_ATTRIBUTE)||i(a,j.ENABLE_STORE_CLICK_TRACKING);return a},getClickTrackingElements:function(a){return a.querySelectorAll("["+j.LEGACY_CLICK_TRACKING_ATTRIBUTE+"], ["+j.ENABLE_STORE_CLICK_TRACKING+"]")},getParentByAttributeOrDataStoreKey:function(a,c,d){while(a&&(!a.getAttribute||!a.getAttribute(c))&&b("cr:6669").get(a,d)===void 0)a=a.parentNode;return a}},k={"data-ft":j.getDataFt,"data-xt-vimp":function(a){return j.getDataAttributeGeneric(a,"data-xt-vimp","data-xt-vimp")},"data-ad":function(a){return j.getDataAttributeGeneric(a,"data-ad","data-ad")},"data-xt":function(a){return j.getDataAttributeGeneric(a,"data-xt","data-xt")}},l={"data-ft":j.setDataFt,"data-xt":function(a,c){b("cr:6669").set(a,"data-xt",c)}};e.exports=j}),null);
__d("getContextualParent",["ge"],(function(a,b,c,d,e,f,g){function a(a,b){b===void 0&&(b=!1);var d=!1;a=a;do{if(a instanceof Element){var e=a.getAttribute("data-ownerid");if(e){a=c("ge")(e);d=!0;continue}}a=a.parentNode}while(b&&a&&!d);return a}g["default"]=a}),98);
__d("collectDataAttributes",["DataAttributeUtils","getContextualParent"],(function(a,b,c,d,e,f){var g="normal";function a(a,c,d){var e={},f=[],h=c.length,i;for(i=0;i<h;++i)e[c[i]]={},f.push("data-"+c[i]);if(d){e[g]={};for(i=0;i<(d||[]).length;++i)f.push(d[i])}d={tn:"","tn-debug":","};a=a;while(a){if(a.getAttribute)for(i=0;i<f.length;++i){var j=f[i],k=b("DataAttributeUtils").getDataAttribute(a,j);if(k){if(i>=h){e[g][j]===void 0&&(e[g][j]=k);continue}j=JSON.parse(k);for(k in j)d[k]!==void 0?(e[c[i]][k]===void 0&&(e[c[i]][k]=[]),e[c[i]][k].push(j[k])):e[c[i]][k]===void 0&&(e[c[i]][k]=j[k])}}a=b("getContextualParent")(a)}for(k in e)for(j in d)e[k][j]!==void 0&&(e[k][j]=e[k][j].join(d[j]));return e}e.exports=a}),null);
__d("FeedTrackingAsync",["Arbiter","Run","collectDataAttributes"],(function(a,b,c,d,e,f,g){var h;function a(){if(h)return;h=c("Arbiter").subscribe("AsyncRequest/send",function(a,b){a=b.request;b=a.getRelativeTo();if(b){a=a.getData();b=c("collectDataAttributes")(b,["ft"]);b.ft&&Object.keys(b.ft).length&&Object.assign(a,b)}});d("Run").onLeave(function(){h&&(h.unsubscribe(),h=null)})}g.init=a}),98);
__d("DOMControl",["$","DataStore"],(function(a,b,c,d,e,f){a=function(){"use strict";function a(a){this.root=b("$").fromIDOrElement(a),this.updating=!1,b("DataStore").set(a,"DOMControl",this)}var c=a.prototype;c.getRoot=function(){return this.root};c.beginUpdate=function(){if(this.updating)return!1;this.updating=!0;return!0};c.endUpdate=function(){this.updating=!1};c.update=function(a){if(!this.beginUpdate())return this;this.onupdate(a);this.endUpdate()};c.onupdate=function(a){};a.getInstance=function(a){return b("DataStore").get(a,"DOMControl")};return a}();e.exports=a}),null);
__d("Input",["CSS","DOMControl","DOMQuery"],(function(a,b,c,d,e,f,g){function h(a){return!/\S/.test(a||"")}function i(a){return h(a.value)}function a(a){return i(a)?"":a.value}function b(a){return a.value}function e(a,b){a.value=b||"";b=c("DOMControl").getInstance(a);b&&b.resetHeight&&b.resetHeight()}function f(a,b){b||(b=""),a.setAttribute("aria-label",b),a.setAttribute("placeholder",b)}function j(a){a.value="",a.style.height=""}function k(a,b){d("CSS").conditionClass(a,"enter_submit",b)}function l(a){return d("CSS").hasClass(a,"enter_submit")}function m(a,b){b>0?a.setAttribute("maxlength",b.toString()):a.removeAttribute("maxlength")}g.isWhiteSpaceOnly=h;g.isEmpty=i;g.getValue=a;g.getValueRaw=b;g.setValue=e;g.setPlaceholder=f;g.reset=j;g.setSubmitOnEnter=k;g.getSubmitOnEnter=l;g.setMaxLength=m}),98);
__d("normalizeBoundingClientRect",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){a=a.ownerDocument.documentElement;var c=a?a.clientLeft:0;a=a?a.clientTop:0;var d=Math.round(b.left)-c;c=Math.round(b.right)-c;var e=Math.round(b.top)-a;b=Math.round(b.bottom)-a;return{left:d,right:c,top:e,bottom:b,width:c-d,height:b-e}}f["default"]=a}),66);
__d("getElementRect",["containsNode","normalizeBoundingClientRect"],(function(a,b,c,d,e,f,g){function a(a){var b;b=a==null?void 0:(b=a.ownerDocument)==null?void 0:b.documentElement;return!a||!("getBoundingClientRect"in a)||!c("containsNode")(b,a)?{left:0,right:0,top:0,bottom:0,width:0,height:0}:c("normalizeBoundingClientRect")(a,a.getBoundingClientRect())}g["default"]=a}),98);
__d("getElementPosition",["getElementRect"],(function(a,b,c,d,e,f,g){function a(a){a=c("getElementRect")(a);return{x:a.left,y:a.top,width:a.right-a.left,height:a.bottom-a.top}}g["default"]=a}),98);
__d("Form",["DOM","DOMQuery","DTSG","DTSGUtils","DataStore","FBLogger","Input","LSD","PHPQuerySerializer","Random","SprinkleConfig","URI","getElementPosition","isFacebookURI","isNode"],(function(a,b,c,d,e,f,g){var h,i,j="FileList"in window,k="FormData"in window;function l(a){var b={};(h||(h=c("PHPQuerySerializer"))).serialize(a).split("&").forEach(function(a){if(a){a=/^([^=]*)(?:=(.*))?$/.exec(a);var d=(i||(i=c("URI"))).decodeComponent(a[1]),e=a[2]!==void 0;e=e?(i||(i=c("URI"))).decodeComponent(a[2]):null;b[d]=e}});return b}var m={getInputs:function(a){a===void 0&&(a=document);return[].concat(d("DOMQuery").scry(a,"input"),d("DOMQuery").scry(a,"select"),d("DOMQuery").scry(a,"textarea"),d("DOMQuery").scry(a,"button"))},getInputsByName:function(a){var b={};m.getInputs(a).forEach(function(a){var c=b[a.name];b[a.name]=c===void 0?a:[a].concat(c)});return b},getSelectValue:function(a){return a.options[a.selectedIndex].value},setSelectValue:function(a,b){for(var c=0;c<a.options.length;++c)if(a.options[c].value===b){a.selectedIndex=c;break}},getRadioValue:function(a){for(var b=0;b<a.length;b++)if(a[b].checked)return a[b].value;return null},getElements:function(a){return a.tagName==="FORM"&&a.elements!==a?Array.from(a.elements):m.getInputs(a)},getAttribute:function(a,b){return(a.getAttributeNode(b)||{}).value||null},setDisabled:function(a,b){m.getElements(a).forEach(function(a){if(a.disabled!==void 0){var d=c("DataStore").get(a,"origDisabledState");b?(d===void 0&&c("DataStore").set(a,"origDisabledState",a.disabled),a.disabled=b):d===!1&&(a.disabled=!1)}})},forEachValue:function(a,b,c){m.getElements(a).forEach(function(a){if(!a.name||a.disabled)return;if(a.type==="submit")return;if(a.type==="reset"||a.type==="button"||a.type==="image")return;if((a.type==="radio"||a.type==="checkbox")&&!a.checked)return;if(a.nodeName==="SELECT"){for(var b=0,e=a.options.length;b<e;b++){var f=a.options[b];f.selected&&c("select",a.name,f.value)}return}if(a.type==="file"){if(j){f=a.files;for(b=0;b<f.length;b++)c("file",a.name,f.item(b))}return}c(a.type,a.name,d("Input").getValue(a))}),b&&b.name&&b.type==="submit"&&d("DOMQuery").contains(a,b)&&d("DOMQuery").isNodeOfType(b,["input","button"])&&c("submit",b.name,b.value)},createFormData:function(a,b){if(!k)return null;var d=new FormData();if(a)if(c("isNode")(a))m.forEachValue(a,b,function(a,b,c){d.append(b,c)});else{b=l(a);for(a in b)b[a]==null?d.append(a,""):d.append(a,b[a])}return d},serialize:function(a,b){var c={};m.forEachValue(a,b,function(a,b,d){if(a==="file")return;m._serializeHelper(c,b,d)});return m._serializeFix(c)},_serializeHelper:function(a,b,c){var d=Object.prototype.hasOwnProperty,e=/([^\]]+)\[([^\]]*)\](.*)/.exec(b);if(e){if(!a[e[1]]||!d.call(a,e[1])){a[e[1]]=d={};if(a[e[1]]!==d)return}d=0;if(e[2]==="")while(a[e[1]][d]!==void 0)d++;else d=e[2];e[3]===""?a[e[1]][d]=c:m._serializeHelper(a[e[1]],d.concat(e[3]),c)}else a[b]=c},_serializeFix:function(a){for(var b in a)a[b]instanceof Object&&(a[b]=m._serializeFix(a[b]));b=Object.keys(a);if(b.length===0||b.some(isNaN))return a;b.sort(function(a,b){return a-b});var c=0,d=b.every(function(a){return+a===c++});return d?b.map(function(b){return a[b]}):a},post:function(a,b,e,f){f===void 0&&(f=!0);a=new(i||(i=c("URI")))(a);var g=document.createElement("form");g.action=a.toString();g.method="POST";g.style.display="none";var h=!c("isFacebookURI")(a);if(e){if(h){g.rel="noreferrer";if(e==="_blank"){e=btoa(c("Random").uint32());var j=window.open("about:blank",e);j!==void 0&&(j.opener=null)}}g.target=e}if(f&&(!h&&a.getSubdomain()!=="apps")){j=d("DTSG").getToken();j&&(b.fb_dtsg=j,c("SprinkleConfig").param_name&&(b[c("SprinkleConfig").param_name]=c("DTSGUtils").getNumericValue(j)));c("LSD").token&&(b.lsd=c("LSD").token,c("SprinkleConfig").param_name&&!j&&(b[c("SprinkleConfig").param_name]=c("DTSGUtils").getNumericValue(c("LSD").token)))}m.createHiddenInputs(b,g);d("DOMQuery").getRootElement().appendChild(g);g.submit();return!1},post_UNSAFE_LET_ANYONE_IMPERSONATE_THE_USER_FOR_THESE_WRITES:function(a,b,c){m.post(a,b,c)},createHiddenInputs:function(a,b,d,e){e===void 0&&(e=!1);d=d||{};a=l(a);for(var f in a){if(a[f]===null)continue;if(d[f]&&e)d[f].value=a[f];else{var g=c("DOM").create("input",{type:"hidden",name:f,value:a[f]});d[f]=g;b.appendChild(g)}}return d},getFirstElement:function(a,b){b===void 0&&(b=['input[type="text"]',"textarea",'input[type="password"]','input[type="button"]','input[type="submit"]']);var e=[];for(var f=0;f<b.length;f++){e=d("DOMQuery").scry(a,b[f]);for(var g=0;g<e.length;g++){var h=e[g];try{var i=c("getElementPosition")(h);if(i.y>0&&i.x>0)return h}catch(a){}}}return null},focusFirst:function(a){a=m.getFirstElement(a);if(a){a.focus();return!0}return!1}};f.exports=m}),34);
__d("PageHooks",["Arbiter","ErrorUtils","InitialJSLoader","PageEvents"],(function(a,b,c,d,e,f){var g;f={DOMREADY_HOOK:"domreadyhooks",ONLOAD_HOOK:"onloadhooks"};function h(){k(l.DOMREADY_HOOK),window.domready=!0,b("Arbiter").inform("uipage_onload",!0,"state")}function i(){k(l.ONLOAD_HOOK),window.loaded=!0}function j(a,c){return(g||(g=b("ErrorUtils"))).applyWithGuard(a,null,null,function(a){a.event_type=c,a.category="runhook"},"PageHooks:"+c)}function k(a){var b=a=="onbeforeleavehooks"||a=="onbeforeunloadhooks";do{var c=window[a];if(!c)break;b||(window[a]=null);for(var d=0;d<c.length;d++){var e=j(c[d],a);if(b&&e)return e}}while(!b&&window[a])}function c(){window.domready||(window.domready=!0,k("onloadhooks")),window.loaded||(window.loaded=!0,k("onafterloadhooks"))}function d(){var a,c;(a=b("Arbiter")).registerCallback(h,[(c=b("PageEvents")).BIGPIPE_DOMREADY,b("InitialJSLoader").INITIAL_JS_READY]);a.registerCallback(i,[c.BIGPIPE_DOMREADY,c.BIGPIPE_ONLOAD,b("InitialJSLoader").INITIAL_JS_READY]);a.subscribe(c.NATIVE_ONBEFOREUNLOAD,function(a,b){b.warn=k("onbeforeleavehooks")||k("onbeforeunloadhooks"),b.warn||(window.domready=!1,window.loaded=!1)},"new");a.subscribe(c.NATIVE_ONUNLOAD,function(a,b){k("onunloadhooks"),k("onafterunloadhooks")},"new")}var l=babelHelpers["extends"]({_domreadyHook:h,_onloadHook:i,runHook:j,runHooks:k,keepWindowSetAsLoaded:c},f);d();a.PageHooks=e.exports=l}),null);
__d("AsyncFormRequestUtils",["Arbiter"],(function(a,b,c,d,e,f,g){function a(a,b,d){c("Arbiter").subscribe("AsyncRequest/"+b,function(b,c){b=c.request.relativeTo;b&&b===a&&d(c)})}g.subscribe=a}),98);
__d("PluginConnectButton",["Arbiter","CSS","DOM","DOMEvent","DOMEventListener","Focus","FormSubmit","PlatformWidgetEndpoint","Plugin","PluginOptin","URI"],(function(a,b,c,d,e,f){var g,h="new",i=b("Arbiter").subscribe,j=function(a,c){return b("DOMEventListener").add(a,"click",c)};function a(a){var c=this;this.config=a;this.busy=!1;var d=b("DOM").find(a.form,".pluginConnectButton");this.buttons=d;this.node_connected=b("DOM").find(d,".pluginConnectButtonConnected");this.node_disconnected=b("DOM").find(d,".pluginConnectButtonDisconnected");var e=function(a){new(b("DOMEvent"))(a).kill(),c.busy||(c.submit(),c.busy=c.canpersonalize)};j(this.node_disconnected,e);a.buttontype===1?j(b("DOM").find(d,".pluginButtonX button"),e):a.buttontype===2&&j(this.node_connected,e);j(this.node_connected,function(a){return b("Arbiter").inform(b("Plugin").DIALOG,a)});d=this.update.bind(this);i(b("Plugin").CONNECT,d,h);i(b("Plugin").DISCONNECT,d,h);i(b("Plugin").ERROR,this.error.bind(this),h)}Object.assign(a.prototype,{update:function(a,c){this.busy=!1;var d=this.config;if(c.identifier!==d.identifier)return;c=a===b("Plugin").CONNECT;a=b("PlatformWidgetEndpoint").plugins(d.plugin);a+="/"+(c?"disconnect":"connect");b("CSS")[c?"show":"hide"](this.node_connected);b("CSS")[c?"hide":"show"](this.node_disconnected);try{if(document.activeElement.nodeName.toLowerCase()==="button"){var e=c?this.node_connected:this.node_disconnected;e=b("DOM").find(e,"button");e.disabled=!1;b("Focus").set(e)}}catch(a){}d.connected=c;d.form.setAttribute("action",a);d.form.setAttribute("ajaxify",a)},error:function(a,c){this.busy=!1;if(c.action in{connect:1,disconnect:1}){b("DOM").setContent(this.buttons,c.content);a=b("DOM").scry(this.buttons,".confirmButton");a.length===1&&b("Focus").set(a[0])}},submit:function(){if(!this.config.canpersonalize)return this.login();b("FormSubmit").send(this.config.form);this.fireStateToggle()},fireStateToggle:function(){var a=this.config;a.connected?b("Plugin").disconnect(a.identifier):b("Plugin").connect(a.identifier)},login:function(){var a=this.config.plugin;new(b("PluginOptin"))(a,(g||(g=b("URI"))).getRequestURI().getQueryData().api_key).addReturnParams({act:"connect"}).addLoginParams({social_plugin_action:this.config.pluginaction,kid_directed_site:this.config.kidDirectedSite}).start()}});e.exports=a}),null);
__d("XPostPluginLoggingController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/platform/plugin/post/logging/",{})}),null);
__d("PluginFeedFooterActionLogger",["AsyncRequest","DOM","Event","XPostPluginLoggingController"],(function(a,b,c,d,e,f,g){a={initializeClickLoggers:function(a,b,d,e,f,g,h,i,j,k){var l=function(b,d){try{b=c("DOM").find(a,"."+b);c("Event").listen(b,"click",function(a){new(c("AsyncRequest"))().setURI(c("XPostPluginLoggingController").getURIBuilder().getURI()).setData({action:d,action_type:"click",source:g,story_token:h,referer_url:i,is_sdk:j,post_url:k}).send()})}catch(a){}};l(b,"embedded_post_like");l(d,"embedded_post_unlike");l(e,"embedded_post_comment");l(f,"embedded_post_share")}};f.exports=a}),34);
__d("PluginFeedLikeButton",["Arbiter","AsyncFormRequestUtils","CSS","ClientIDs","DOM","DOMEventListener","FormSubmit","Keys","PluginOptin","URI"],(function(a,b,c,d,e,f,g){var h;window.resetConfirmStoryLike=function(a){d("CSS").show(c("DOM").find(document,"#likeStory_"+a)),c("DOM").remove(c("DOM").find(document,"#confirmStory_"+a))};function a(a){a.setAttribute("value",d("ClientIDs").getNewClientID())}function b(a,b,e){var f="";if(b===23)f="post";else if(b===50)f="page";else throw new Error("Invalid FBFeedLocation type.");var g=new(c("PluginOptin"))(f).addReturnParams({act:"like_"+a});d("DOMEventListener").add(e,"click",function(){return g.start()})}function e(a,b,e,f,g){var i,j=function(a){if(a.type==="keypress")if(a.keyCode===c("Keys").RETURN||a.keyCode===c("Keys").SPACE)c("FormSubmit").send(g);else return;c("FormSubmit").send(g)};(i=d("DOMEventListener")).add(b,"click",j);i.add(e,"click",j);i.add(b,"keypress",j);i.add(e,"keypress",j);i=f.getAttribute("value")==="1";d("AsyncFormRequestUtils").subscribe(g,"send",function(g){g=f.getAttribute("value")==="1";d("CSS").conditionShow(e,g);d("CSS").conditionShow(b,!g);c("Arbiter").inform("embeddedUfiToggle",{isLike:g,storyToken:a});f.setAttribute("value",g?"":"1")});d("AsyncFormRequestUtils").subscribe(g,"response",function(g){g=g.response.payload;if(g&&!g.success){g=g.isLike;d("CSS").conditionShow(b,g);d("CSS").conditionShow(e,!g);c("Arbiter").inform("revertLike",{isLike:g,storyToken:a});f.setAttribute("value",g?"1":"")}});j=new(h||(h=c("URI")))(window.location.search).getQueryData();i&&j.act==="like_"+a&&c("FormSubmit").send(g)}g.addClientId=a;g.loggedOutLikeButton=b;g.init=e}),98);
__d("Button",["csx","cx","invariant","CSS","DOM","DataStore","Event","Parent","emptyFunction","isNode"],(function(a,b,c,d,e,f,g,h,i,j){var k="uiButtonDisabled",l="uiButtonDepressed",m="_42fr",n="_42fs",o="button:blocker",p="href",q="ajaxify";function r(a,b){var e=d("DataStore").get(a,o);b?e&&(e.remove(),d("DataStore").remove(a,o)):e||d("DataStore").set(a,o,c("Event").listen(a,"click",c("emptyFunction").thatReturnsFalse,c("Event").Priority.URGENT))}function s(a){a=d("Parent").byClass(a,"uiButton")||d("Parent").bySelector(a,"._42ft");if(!a)throw new Error("invalid use case");return a}function t(a){return c("DOM").isNodeOfType(a,"a")}function u(a){return c("DOM").isNodeOfType(a,"button")}function v(a){return d("CSS").matchesSelector(a,"._42ft")}var w={getInputElement:function(a){a=s(a);if(t(a))throw new Error("invalid use case");if(u(a)){a instanceof HTMLButtonElement||j(0,21261);return a}return c("DOM").find(a,"input")},isEnabled:function(a){return!(d("CSS").hasClass(s(a),k)||d("CSS").hasClass(s(a),m))},setEnabled:function(a,b){a=s(a);var c=v(a)?m:k;d("CSS").conditionClass(a,c,!b);if(t(a)){c=a.getAttribute("href");var e=a.getAttribute("ajaxify"),f=d("DataStore").get(a,p,"#"),g=d("DataStore").get(a,q);b?(c||a.setAttribute("href",f),!e&&g&&a.setAttribute("ajaxify",g),a.removeAttribute("tabIndex")):(c&&c!==f&&d("DataStore").set(a,p,c),e&&e!==g&&d("DataStore").set(a,q,e),a.removeAttribute("href"),a.removeAttribute("ajaxify"),a.setAttribute("tabIndex","-1"));r(a,b)}else{f=w.getInputElement(a);f.disabled=!b;r(f,b)}},setDepressed:function(a,b){a=s(a);var c=v(a)?n:l;d("CSS").conditionClass(a,c,b)},isDepressed:function(a){a=s(a);var b=v(a)?n:l;return d("CSS").hasClass(a,b)},setLabel:function(a,b){a=s(a);if(v(a)){var e=[];b&&e.push(b);var f=c("DOM").scry(a,".img");for(var g=0;g<f.length;g++){var h=f[g],i=h.parentNode;i.classList&&(i.classList.contains("_4o_3")||i.classList.contains("_-xe"))?a.firstChild===i?e.unshift(i):e.push(i):a.firstChild==h?e.unshift(h):e.push(h)}c("DOM").setContent(a,e)}else if(t(a)){i=c("DOM").find(a,"span.uiButtonText");c("DOM").setContent(i,b)}else w.getInputElement(a).value=b;h=v(a)?"_42fv":"uiButtonNoText";d("CSS").conditionClass(a,h,!b)},getIcon:function(a){a=s(a);return c("DOM").scry(a,".img")[0]},setIcon:function(a,b){if(b&&!c("isNode")(b))return;var e=w.getIcon(a);if(!b){e&&c("DOM").remove(e);return}d("CSS").addClass(b,"customimg");e!=b&&(e?c("DOM").replace(e,b):c("DOM").prependContent(s(a),b))}};a=w;g["default"]=a}),98);
__d("XThisControllerNoLongerExistsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/dcb/tcnle/",{t:{type:"String"}})}),null);
__d("VirtualCursorStatus",["UserAgent","cr:5662","emptyFunction","setImmediate"],(function(a,b,c,d,e,f){var g=null,h=null;function i(){h||(h=b("cr:5662").listen(window,"blur",function(){g=null,j()}))}function j(){h&&(h.remove(),h=null)}function a(a){g=a.keyCode,i()}function c(){g=null,j()}if(typeof window!=="undefined"&&window.document&&window.document.createElement){d=document.documentElement;if(d)if(d.addEventListener)d.addEventListener("keydown",a,!0),d.addEventListener("keyup",c,!0);else if(d.attachEvent){f=d.attachEvent;f("onkeydown",a);f("onkeyup",c)}}var k={isKeyDown:function(){return!!g},getKeyDownCode:function(){return g}},l=!1,m=!1,n=null,o=!1;function p(a){var c=new Set(),d=k.isKeyDown(),e=a.clientX,f=a.clientY,g=a.isTrusted,h=a.offsetX,i=a.offsetY,j=a.mozInputSource,n=a.WEBKIT_FORCE_AT_MOUSE_DOWN,o=a.webkitForce;a=a.target;var p=a.clientWidth;a=a.clientHeight;e===0&&f===0&&h>=0&&i>=0&&m&&g&&j==null&&c.add("Chrome");l&&m&&!d&&o!=null&&o<n&&h===0&&i===0&&j==null&&c.add("Safari-edge");e===0&&f===0&&h<0&&i<0&&m&&j==null&&c.add("Safari-old");!l&&!m&&!d&&g&&b("UserAgent").isBrowser("IE >= 10")&&j==null&&(e<0&&f<0?c.add("IE"):(h<0||h>p)&&(i<0||i>a)&&c.add("MSIE"));j===0&&g&&c.add("Firefox");return c}function q(){l=!0,b("setImmediate")(function(){l=!1})}function r(){m=!0,b("setImmediate")(function(){m=!1})}function s(a,c){n===null&&(n=p(a));o=n.size>0;a=a.target.getAttribute("data-accessibilityid")==="virtual_cursor_trigger";c(o,n,a);b("setImmediate")(function(){o=!1,n=null})}d={isVirtualCursorTriggered:function(){return o},add:function(a,c){c===void 0&&(c=b("emptyFunction"));var d=function(a){return s(a,c)};a.addEventListener("click",d);var e=b("cr:5662").listen(a,"mousedown",q),f=b("cr:5662").listen(a,"mouseup",r);return{remove:function(){a.removeEventListener("click",d),e.remove(),f.remove()}}}};e.exports=d}),null);
__d("ThisControllerNoLongerExists",["XControllerURIBuilder","XThisControllerNoLongerExistsController"],(function(a,b,c,d,e,f,g){"use strict";var h=function(b){babelHelpers.inheritsLoose(a,b);function a(a){var c;c=b.call(this,"/dcb/tcnle/",{})||this;c.$XControllerURIBuilderNoOpDead1=a;return c}var d=a.prototype;d.__validateRequiredParamsExistence=function(){};d.__assertParamExists=function(a){};d.__setParam=function(a,b,c){return this};d.__setParamInt=function(a,b){};d.getRequest_LEGACY_UNTYPED=function(a){return a.setURI(this.getURI())};d.getURI=function(){return c("XThisControllerNoLongerExistsController").getURIBuilder().setString("t",this.$XControllerURIBuilderNoOpDead1).getURI()};d.getLookasideURI=function(){return this.getURI()};return a}(c("XControllerURIBuilder"));function a(a){return c("XThisControllerNoLongerExistsController").getURIBuilder().setString("t",a).getURI()}function b(a){return new h(a)}g.__DEADURI__=a;g.__DEADBUILDER__=b}),98);
__d("queryThenMutateDOM",["ErrorUtils","Run","TimeSlice","emptyFunction","gkx","requestAnimationFrame"],(function(a,b,c,d,e,f){var g,h,i,j=[],k={};function l(a,c,d){if(!a&&!c)return{cancel:b("emptyFunction")};if(d&&Object.prototype.hasOwnProperty.call(k,d))return{cancel:b("emptyFunction")};else d&&(k[d]=1);c=b("TimeSlice").guard(c||b("emptyFunction"),"queryThenMutateDOM mutation callback",{propagationType:b("TimeSlice").PropagationType.CONTINUATION,registerCallStack:!0});a=b("TimeSlice").guard(a||b("emptyFunction"),"queryThenMutateDOM query callback",{propagationType:b("TimeSlice").PropagationType.CONTINUATION,registerCallStack:!0});var e={queryFunction:a,mutateFunction:c,output:null,deleted:!1};j.push(e);n();h||(h=!0,b("gkx")("20935")||b("Run").onLeave(function(){h=!1,i=!1,k={},j.length=0}));return{cancel:function(){e.deleted=!0,d&&delete k[d]}}}l.prepare=function(a,b,c){return function(){for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];e.unshift(this);var g=Function.prototype.bind.apply(a,e),h=b.bind(this);l(g,h,c)}};var m=b("TimeSlice").guard(function(){while(j.length){k={};var a=[];window.document.body.getClientRects();while(j.length){var b=j.shift();b.deleted||(b.output=o(b.queryFunction),a.push(b))}while(a.length){b=a.shift();b.deleted||o(b.mutateFunction,null,[b.output])}}i=!1},"queryThenMutateDOM runScheduledQueriesAndMutations",{propagationType:b("TimeSlice").PropagationType.ORPHAN});function n(){!i&&j.length&&(i=!0,b("requestAnimationFrame")(m))}function o(a,c,d,e,f){return(g||(g=b("ErrorUtils"))).applyWithGuard(a,c,d,e,f)}e.exports=l}),null);
__d("throttle",["TimeSlice","TimeSliceInteractionSV","setTimeout","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g){function a(a,b,d){return h(a,b,d,c("setTimeout"),!1)}Object.assign(a,{acrossTransitions:function(a,b,d){return h(a,b,d,c("setTimeoutAcrossTransitions"),!1)},withBlocking:function(a,b,d){return h(a,b,d,c("setTimeout"),!0)},acrossTransitionsWithBlocking:function(a,b,d){return h(a,b,d,c("setTimeoutAcrossTransitions"),!0)}});function h(a,b,d,e,f){var g=b==null?100:b,h,i=null,j=0,k=null,l=[],m=c("TimeSlice").guard(function(){j=Date.now();if(i){var b=function(b){a.apply(h,b)}.bind(null,i),c=l.length;while(--c>=0)b=l[c].bind(null,b);l=[];b();i=null;k=e(m,g)}else k=null},"throttle_"+g+"_ms",{propagationType:c("TimeSlice").PropagationType.EXECUTION,registerCallStack:!0});m.__SMmeta=a.__SMmeta;return function(){c("TimeSliceInteractionSV").ref_counting_fix&&l.push(c("TimeSlice").getGuardedContinuation("throttleWithContinuation"));for(var a=arguments.length,b=new Array(a),n=0;n<a;n++)b[n]=arguments[n];i=b;h=this;d!==void 0&&(h=d);(k===null||Date.now()-j>g)&&(f===!0?m():k=e(m,0))}}b=a;g["default"]=b}),98);