(function(t){function e(e){for(var a,o,i=e[0],u=e[1],s=e[2],l=0,b=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&b.push(r[o][0]),r[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);d&&d(e);while(b.length)b.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(a=!1)}a&&(c.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},c=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var d=u;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"099b":function(t,e,n){"use strict";n("c943")},"0bca":function(t,e,n){"use strict";n("2a33")},2372:function(t,e,n){},"25bd":function(t,e,n){"use strict";n("d7c3")},"2a33":function(t,e,n){},"340c":function(t,e,n){},"83d4":function(t,e,n){"use strict";n("adfd")},"851b":function(t,e,n){"use strict";n("340c")},"99f8":function(t,e,n){"use strict";n("2372")},adfd:function(t,e,n){},c943:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function r(t,e,n,r,c,o){var i=Object(a["y"])("home"),u=Object(a["y"])("timer-modal");return Object(a["q"])(),Object(a["d"])("div",null,[Object(a["h"])(i),t.showModal?(Object(a["q"])(),Object(a["d"])(u,{key:0})):Object(a["e"])("",!0)])}var c=Object(a["h"])("h1",null,"Your Reading Log",-1),o={class:"container"};function i(t,e,n,r,i,u){var s=Object(a["y"])("reading-form"),d=Object(a["y"])("progress-bar"),l=Object(a["y"])("reading-list"),b=Object(a["y"])("Calendar");return Object(a["q"])(),Object(a["d"])("div",null,[c,Object(a["h"])("div",o,[Object(a["h"])(s,{class:"col-span2"}),Object(a["h"])(d,{class:"col-span2"}),Object(a["h"])(l,{class:"col-span2"}),Object(a["h"])(b,{class:"col-span2"})])])}var u=Object(a["I"])("data-v-5aa20472");Object(a["t"])("data-v-5aa20472");var s={class:"list"};Object(a["r"])();var d=u((function(t,e,n,r,c,o){var i=Object(a["y"])("list-item");return Object(a["q"])(),Object(a["d"])("div",s,[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["x"])(t.readList,(function(t){return Object(a["q"])(),Object(a["d"])(i,{key:t.date,data:t},null,8,["data"])})),128))])})),l=(n("4de4"),n("c740"),n("4160"),n("c975"),n("d81d"),n("a434"),n("d3b7"),n("ac1f"),n("25f0"),n("5319"),n("159b"),n("2909")),b=(n("96cf"),n("1da1")),f=n("d4ec"),p=n("bee2"),m=n("262e"),O=n("2caf"),j=function(){function t(){Object(f["a"])(this,t);var e=this.data();this.setup(e),this.state=Object(a["u"])(e)}return Object(p["a"])(t,[{key:"setup",value:function(t){}},{key:"getState",value:function(){return Object(a["v"])(this.state)}}]),t}(),h="readingLog",v=function(t){Object(m["a"])(n,t);var e=Object(O["a"])(n);function n(){var t;return Object(f["a"])(this,n),t=e.call(this),t._data=null,t}return Object(p["a"])(n,[{key:"setLocalStorage",value:function(t){localStorage.setItem(h,JSON.stringify(t))}},{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0,n="x"==t?e:3&e|8;return n.toString(16)}))}},{key:"data",value:function(){if(!localStorage[h]){var t={readingLog:[],editItem:void 0};this.setLocalStorage(t)}return this._data=JSON.parse(localStorage[h]),this._data.readingLog.forEach((function(t){return t.date=new Date(t.date)})),this._data}},{key:"add",value:function(t){t.uuid=this.uuidv4(),this.state.readingLog.push(t),this.state.editItem=void 0,this.setLocalStorage(this.state)}},{key:"deleteItem",value:function(){var t=Object(b["a"])(regeneratorRuntime.mark((function t(e){var n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,a){var r=n.state.readingLog.findIndex((function(t){return t.uuid===e.uuid}));r<0&&a("Item not found ".concat(e)),n.state.readingLog.splice(r,1),n.setLocalStorage(n.state),t("done")})));case 1:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"setEditItem",value:function(t){this.state.editItem=t}},{key:"updateItem",value:function(){var t=Object(b["a"])(regeneratorRuntime.mark((function t(e){var n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,a){var r=n.state.readingLog.findIndex((function(t){return t.uuid===e.uuid}));r<0&&a("Item not found ".concat(e)),n.state.readingLog.splice(r,1,e),n.state.editItem=void 0,n.setLocalStorage(n.state),t("updated")})));case 1:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"findByDay",value:function(t){var e=this.state.readingLog.filter((function(e){return e.date.toLocaleString()===t}));return e.length>0}},{key:"editItem",get:function(){return this.state.editItem}},{key:"readList",get:function(){return this.state.readingLog.sort((function(t,e){return e.date.getTime()-t.date.getTime()}))}},{key:"streaks",get:function(){for(var t=this.readList.map((function(t){return t.date.toLocaleString()})),e=t.filter((function(t,e,n){return n.indexOf(t)===e})).map((function(t){return new Date(t)})),n=[[e[0]]],a=0,r=1,c=0,o=1;o<e.length;o++){var i=e[o],u=new Date(e[c]).setUTCHours(0,0,0,0),s=new Date(i).setUTCHours(0,0,0,0),d=864e5*r++;u-s===d?n[a].push(i):o<e.length-1&&(a++,n[a]=[i],r=1,c=o)}var b=n.map((function(t){return t.length})),f=b.indexOf(Math.max.apply(Math,Object(l["a"])(b))),p=n[f];return{streaks:n,currentStreak:n[0],longestStreak:p}}}]),n}(j),g=new v,y=Object(a["I"])("data-v-58aeea95");Object(a["t"])("data-v-58aeea95");var k={class:"list-item"},S={class:"book"},x={class:"date"},I={class:"two-columns"},M=Object(a["g"])(),T=Object(a["g"])(),w={class:"button-group"};Object(a["r"])();var D=y((function(t,e,n,r,c,o){return Object(a["q"])(),Object(a["d"])("div",k,[Object(a["h"])("h4",S,Object(a["A"])(t.data.book),1),Object(a["h"])("span",x,Object(a["A"])(t.formatDate(t.data.date)),1),Object(a["h"])("div",I,[Object(a["G"])(Object(a["h"])("span",null,"Time read: ",512),[[a["E"],t.data.minutes]]),M,Object(a["G"])(Object(a["h"])("span",null,Object(a["A"])(t.minutesToString(t.data.minutes)),513),[[a["E"],t.data.minutes]]),Object(a["G"])(Object(a["h"])("span",null,"Pages read:",512),[[a["E"],t.data.pageFrom&&t.data.pageTo]]),T,Object(a["G"])(Object(a["h"])("span",null,Object(a["A"])(t.data.pageTo-t.data.pageFrom)+" pages ("+Object(a["A"])(t.data.pageFrom)+"-"+Object(a["A"])(t.data.pageTo)+")",513),[[a["E"],t.data.pageFrom&&t.data.pageTo]])]),Object(a["h"])("div",w,[Object(a["h"])("button",{class:"edit",onClick:e[1]||(e[1]=function(e){return t.editItem(t.data)})},"Edit"),Object(a["h"])("button",{class:"delete",onClick:e[2]||(e[2]=function(e){return t.deleteItem(t.data)})},"X")])])})),L=(n("99af"),n("4d90"),Object(a["i"])({props:{data:Object},setup:function(t){var e=t.data,n=function(t){return t.toLocaleDateString("en-US",{month:"long",day:"numeric"})},a=function(){var t=Object(b["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g.deleteItem(e);case 2:n=t.sent,console.log("done",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),r=function(t){g.setEditItem(t)},c=function(t){var e=Math.floor(t).toString().padStart(2,"0"),n=Math.floor(t%1*100).toString().padStart(2,"0");return"".concat(e,":").concat(n)};return{data:e,formatDate:n,deleteItem:a,editItem:r,minutesToString:c}}}));n("0bca");L.render=D,L.__scopeId="data-v-58aeea95";var F=L,A=Object(a["i"])({components:{ListItem:F},setup:function(){var t=Object(a["b"])((function(){return g.readList}));return{readList:t}}});n("099b");A.render=d,A.__scopeId="data-v-5aa20472";var P=A,Y=(n("b0c0"),Object(a["I"])("data-v-e00d32c6"));Object(a["t"])("data-v-e00d32c6");var C={class:"full-calendar"},_={class:"grid-cal month"},q={class:"grid-cal month"},B={class:"grid-cal calendar"},U=Object(a["f"])('<div class="day title weekend" data-v-e00d32c6>Sun</div><div class="day title" data-v-e00d32c6>Mon</div><div class="day title" data-v-e00d32c6>Tue</div><div class="day title" data-v-e00d32c6>Wed</div><div class="day title" data-v-e00d32c6>Thu</div><div class="day title" data-v-e00d32c6>Fri</div><div class="day title weekend" data-v-e00d32c6>Sat</div>',7);Object(a["r"])();var R=Y((function(t,e,n,r,c,o){return Object(a["q"])(),Object(a["d"])("div",C,[Object(a["h"])("div",_,[Object(a["h"])("button",{onClick:e[1]||(e[1]=function(){return t.prevYear&&t.prevYear.apply(t,arguments)}),disabled:t.noPrevYear},"Next",8,["disabled"]),Object(a["h"])("div",null,[Object(a["h"])("span",{class:{hidden:t.editYear},onClick:e[2]||(e[2]=function(e){return t.editYear=!0})},Object(a["A"])(t.yearId),3),Object(a["G"])(Object(a["h"])("input",{class:{hidden:!t.editYear},type:"number","onUpdate:modelValue":e[3]||(e[3]=function(e){return t.yearId=e}),onKeyup:e[4]||(e[4]=Object(a["H"])((function(e){return t.editYear=!1}),["enter"])),onBlur:e[5]||(e[5]=function(e){return t.editYear=!1})},null,34),[[a["D"],t.yearId]])]),Object(a["h"])("button",{onClick:e[6]||(e[6]=function(){return t.nextYear&&t.nextYear.apply(t,arguments)}),disabled:t.noNextYear},"Next",8,["disabled"])]),Object(a["h"])("div",q,[Object(a["h"])("button",{onClick:e[7]||(e[7]=function(){return t.prevMonth&&t.prevMonth.apply(t,arguments)}),disabled:t.noPrevMonth},"Prev",8,["disabled"]),Object(a["g"])(" "+Object(a["A"])(t.month.name)+" ",1),Object(a["h"])("button",{onClick:e[8]||(e[8]=function(){return t.nextMonth&&t.nextMonth.apply(t,arguments)}),disabled:t.noNextMonth},"Prev",8,["disabled"])]),Object(a["h"])("div",B,[U,(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["x"])(t.emptySlots,(function(t,e){return Object(a["q"])(),Object(a["d"])("div",{class:["day",{weekend:0===t}],key:e},null,2)})),128)),(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["x"])(t.month.days,(function(e){return Object(a["q"])(),Object(a["d"])("div",{class:["day",{weekend:0===e.getDay()||6===e.getDay(),thisMonth:t.isThisMonth(e),today:t.isToday(e),hasLog:t.findByDay(e)}],key:e},Object(a["A"])(e.getDate()),3)})),128))])])})),G=(n("a630"),n("3ca3"),n("ddb0"),n("5530")),N=(n("7db0"),n("b85c"));function E(t){var e=["January","February","March","April","May","June","July","August","September","October","November","December"];return e[t]}var H=function(){var t=Object(a["u"])([{name:2020,months:[]},{name:2021,months:[]},{name:2022,months:[]}]),e=function(e){return t.findIndex((function(t){return t.name===e}))},n=function(n){return t[e(n)]},r=function(){var e,n=Array.from(Array(400).keys()).map((function(t){return t+1800})),a=Array.from(Array(12).keys()),r=Object(N["a"])(n);try{var c=function(){var n,r=e.value,c=t.find((function(t){return t.name===r})),i=[],u=Object(N["a"])(a);try{for(u.s();!(n=u.n()).done;){var s=n.value,d=o(r,s);i.push({id:s,name:E(s),days:d})}}catch(b){u.e(b)}finally{u.f()}if(c)c.months=i;else{var l={name:r,months:i};t.push(l)}};for(r.s();!(e=r.n()).done;)c()}catch(i){r.e(i)}finally{r.f()}function o(t,e){var n=new Date(t,e,1),a=[];while(n.getMonth()===e)a.push(new Date(n)),n.setDate(n.getDate()+1);return a}};r();var c="hi";return{getYearId:e,yearItem:n,test:c,years:t,getMonthName:E}},J=Object(a["i"])({setup:function(){var t=Object(a["u"])(H()),e=t.years,n=(t.getYearId,t.yearItem),r=function(t){return d.value===t.getMonth()},c=function(t){return t.toLocaleDateString("en-US")===o.value.toLocaleDateString("en-US")},o=Object(a["w"])(new Date),i=Object(a["u"])({yearId:o.value.getFullYear()});Object(a["F"])((function(){return i.yearId}),(function(t,e){i.yearId=+t}));var u=Object(a["b"])((function(){return n(i.yearId)})),s=Object(a["u"])({noPrevYear:Object(a["b"])((function(){return i.yearId===Math.min.apply(Math,Object(l["a"])(e.map((function(t){return t.name}))))})),noNextYear:Object(a["b"])((function(){return i.yearId===Math.max.apply(Math,Object(l["a"])(e.map((function(t){return t.name}))))})),prevYear:function(){i.yearId>1700&&i.yearId--},nextYear:function(){console.log("yearId",i.yearId),i.yearId<4e3&&i.yearId++},editYear:!1}),d=Object(a["w"])(o.value.getMonth()),b=Object(a["b"])((function(){return u.value.months[d.value]})),f=Object(a["u"])({noPrevMonth:Object(a["b"])((function(){return 0===d.value&&i.yearId===Math.min.apply(Math,Object(l["a"])(e.map((function(t){return t.name}))))})),noNextMonth:Object(a["b"])((function(){return 11===d.value&&i.yearId===Math.max.apply(Math,Object(l["a"])(e.map((function(t){return t.name}))))})),prevMonth:function(){d.value>0?d.value--:i.yearId>Math.min.apply(Math,Object(l["a"])(e.map((function(t){return t.name}))))-1&&(i.yearId--,d.value=11)},nextMonth:function(){d.value<11?d.value++:i.yearId<Math.max.apply(Math,Object(l["a"])(e.map((function(t){return t.name}))))+1&&(i.yearId++,d.value=0)}}),p=Object(a["b"])((function(){return Array.from(Array(b.value.days[0].getDay()).keys())})),m=function(t){return g.findByDay(t.toLocaleString())};return Object(G["a"])(Object(G["a"])(Object(G["a"])({isThisMonth:r,isToday:c,today:o,month:b,emptySlots:p,findByDay:m},Object(a["B"])(i)),Object(a["B"])(f)),Object(a["B"])(s))}});n("99f8");J.render=R,J.__scopeId="data-v-e00d32c6";var V=J,K={class:"progress-bar"},W={class:"progress"},X={class:"progress"};function z(t,e,n,r,c,o){return Object(a["q"])(),Object(a["d"])("div",K,[Object(a["g"])(" Current streak: "+Object(a["A"])(t.currentStreak.length)+" days ",1),Object(a["h"])("div",W,[Object(a["h"])("div",{class:"amount",style:{width:t.getPerc(t.currentStreak.length,100)+"%"}},null,4)]),Object(a["g"])(" Longest streak: "+Object(a["A"])(t.longestStreak.length)+" days ",1),Object(a["h"])("div",X,[Object(a["h"])("div",{class:"amount longest",style:{width:t.getPerc(t.longestStreak.length,100)+"%"}},null,4)])])}var Q=Object(a["i"])({setup:function(){var t=Object(a["u"])({currentStreak:Object(a["b"])((function(){return g.streaks.currentStreak})),longestStreak:Object(a["b"])((function(){return g.streaks.longestStreak})),streaks:Object(a["b"])((function(){return g.streaks.streaks}))}),e=function(t,e){return t/e*100};return Object(G["a"])(Object(G["a"])({},Object(a["B"])(t)),{},{getPerc:e})}});n("25bd");Q.render=z;var Z=Q,$=Object(a["I"])("data-v-a2941a46");Object(a["t"])("data-v-a2941a46");var tt={class:"reading-form"},et={class:"field"},nt=Object(a["h"])("label",{for:"book"},"Book: ",-1),at={class:"field"},rt=Object(a["h"])("label",{for:"date"},"Date: ",-1),ct={class:"field"},ot=Object(a["h"])("label",{for:"time"},"Time: ",-1),it={class:"field"},ut=Object(a["h"])("label",{for:"minutes"},"Minutes Read: ",-1),st={class:"field"},dt=Object(a["h"])("label",null,"Pages (from-to): ",-1),lt=Object(a["h"])("span",null,"-",-1),bt={key:1,class:"button-group"};Object(a["r"])();var ft=$((function(t,e,n,r,c,o){return Object(a["q"])(),Object(a["d"])("div",tt,[Object(a["h"])("div",et,[nt,Object(a["G"])(Object(a["h"])("input",{name:"book",type:"text","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.book=e}),placeholder:"Enter Book..."},null,512),[[a["D"],t.book]])]),Object(a["h"])("div",at,[rt,Object(a["G"])(Object(a["h"])("input",{name:"date",type:"date","onUpdate:modelValue":e[2]||(e[2]=function(e){return t.dateStr=e})},null,512),[[a["D"],t.dateStr]])]),Object(a["h"])("div",ct,[ot,Object(a["G"])(Object(a["h"])("input",{name:"time",type:"time","onUpdate:modelValue":e[3]||(e[3]=function(e){return t.time=e})},null,512),[[a["D"],t.time]])]),Object(a["h"])("div",it,[ut,Object(a["h"])("div",null,[Object(a["G"])(Object(a["h"])("input",{name:"minutes",type:"number","onUpdate:modelValue":e[4]||(e[4]=function(e){return t.minutes=e})},null,512),[[a["D"],t.minutes]]),Object(a["h"])("button",{onClick:e[5]||(e[5]=function(){return t.startTime&&t.startTime.apply(t,arguments)})},"Start Timer")])]),Object(a["h"])("div",st,[dt,Object(a["h"])("div",null,[Object(a["G"])(Object(a["h"])("input",{name:"pagesFrom",type:"number","onUpdate:modelValue":e[6]||(e[6]=function(e){return t.pageFrom=e})},null,512),[[a["D"],t.pageFrom]]),lt,Object(a["G"])(Object(a["h"])("input",{name:"pagesTo",type:"number","onUpdate:modelValue":e[7]||(e[7]=function(e){return t.pageTo=e})},null,512),[[a["D"],t.pageTo]])])]),void 0===t.editItem?(Object(a["q"])(),Object(a["d"])("button",{key:0,class:"add",onClick:e[8]||(e[8]=function(){return t.add&&t.add.apply(t,arguments)})},"Add")):(Object(a["q"])(),Object(a["d"])("div",bt,[Object(a["h"])("button",{class:"update",onClick:e[9]||(e[9]=function(){return t.update&&t.update.apply(t,arguments)})},"Update"),Object(a["h"])("button",{class:"add",onClick:e[10]||(e[10]=function(){return t.add&&t.add.apply(t,arguments)})},"Save New")]))])})),pt=(n("1276"),n("b680"),function(t){Object(m["a"])(n,t);var e=Object(O["a"])(n);function n(){var t;return Object(f["a"])(this,n),t=e.call(this),console.log("this",t.state.showModal),t}return Object(p["a"])(n,[{key:"data",value:function(){var t={showModal:!1,time:0,interval:10,timer:void 0,timeStr:{hour:0,minute:0,second:0,millisecond:0,toString:function(){return"".concat(this.hour.toString().padStart(2,"0"),":\n                        ").concat(this.minute.toString().padStart(2,"0"),":\n                        ").concat(this.second.toString().padStart(2,"0"),".\n                        ").concat(this.millisecond.toString().padStart(2,"0"))},getTotalMinutes:function(){var t=60*+this.hour+ +this.minute+ +this.second/60;return+t.toFixed(2)}},paused:!1};return t}},{key:"convertTime",value:function(){this.state.timeStr.millisecond=Math.floor(this.state.time/100%1*100),this.state.timeStr.second=Math.floor(this.state.time%6e3/100),this.state.timeStr.minute=Math.floor(this.state.time/6e3%60),this.state.timeStr.hour=Math.floor(this.state.time/36e4)}},{key:"startTimer",value:function(){this.state.showModal=!0,this.restartTimer()}},{key:"pauseTimer",value:function(){this.state.paused=!0,clearInterval(this.state.timer),this.state.timer=null}},{key:"restartTimer",value:function(){var t=this;this.state.paused=!1,this.state.timer=setInterval((function(){t.state.time+=1,t.convertTime()}),this.state.interval)}},{key:"endTime",value:function(){this.state.showModal=!1,this.pauseTimer(),this.state.time=0}},{key:"timeObj",get:function(){return this.state.timeStr}},{key:"showModal",get:function(){return this.state.showModal},set:function(t){this.state.showModal=t}}]),n}(j)),mt=new pt,Ot=Object(a["i"])({setup:function(){var t=Object(a["b"])((function(){return new Date})),e=Object(a["b"])((function(){return"".concat(t.value.getHours().toString().padStart(2,"0"),":").concat(t.value.getMinutes().toString().padStart(2,"0"))})),n=function(t){var e=t.getFullYear(),n=(t.getMonth()+1).toString().padStart(2,"0"),a=t.getDate().toString().padStart(2,"0");return"".concat(e,"-").concat(n,"-").concat(a)},r=function(t){var e=t.split("-");return new Date(+e[0],+e[1]-1,+e[2])},c=Object(a["u"])({uuid:null,book:"",date:t.value,notes:"",time:e.value,minutes:null,pageTo:null,pageFrom:null,dateStr:n(t.value)}),o=Object(a["b"])((function(){var t=g.editItem;return void 0!==t&&(c.uuid=t.uuid,c.book=t.book,c.date=t.date,c.time=t.time,c.notes=t.notes,c.minutes=t.minutes,c.pageFrom=t.pageFrom,c.pageTo=t.pageTo,c.dateStr=t.dateStr),t})),i=function(){var t={book:c.book,date:r(c.dateStr),notes:c.notes,time:c.time,minutes:c.minutes,pageTo:c.pageTo?+c.pageTo:null,pageFrom:c.pageFrom?+c.pageFrom:null,dateStr:c.dateStr};g.add(t),s()},u=function(){var t=Object(b["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={uuid:c.uuid,book:c.book,date:r(c.dateStr),notes:c.notes,time:c.time,minutes:c.minutes,pageTo:c.pageTo,pageFrom:c.pageFrom,dateStr:c.dateStr},t.next=3,g.updateItem(e);case 3:t.sent,s();case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){c.uuid=null,c.book="",c.date=t.value,c.notes="",c.time=e.value,c.minutes=null,c.pageTo=null,c.pageFrom=null,c.dateStr=n(t.value)},d=function(){mt.startTimer()},l=Object(a["b"])((function(){return mt.getState().time}));return Object(a["F"])((function(){return l.value}),(function(t,e){c.minutes=mt.timeObj.getTotalMinutes()})),Object(G["a"])(Object(G["a"])({},Object(a["B"])(c)),{},{add:i,editItem:o,update:u,startTime:d})}});n("dee7");Ot.render=ft,Ot.__scopeId="data-v-a2941a46";var jt=Ot,ht=Object(a["i"])({name:"Home",components:{ReadingList:P,Calendar:V,ProgressBar:Z,ReadingForm:jt}});ht.render=i;var vt=ht,gt=Object(a["I"])("data-v-4a0b9a34");Object(a["t"])("data-v-4a0b9a34");var yt={class:"modal"},kt={class:"modal-wrapper"},St={class:"modal-container"},xt=Object(a["h"])("div",{class:"modal-header"},"Timer",-1),It={class:"modal-body"},Mt={key:0,class:"modal-footer"},Tt={key:1,class:"modal-footer"};Object(a["r"])();var wt=gt((function(t,e,n,r,c,o){return Object(a["q"])(),Object(a["d"])("div",yt,[Object(a["h"])("div",kt,[Object(a["h"])("div",St,[xt,Object(a["h"])("div",It,Object(a["A"])(t.timeObj.toString()),1),t.paused?(Object(a["q"])(),Object(a["d"])("div",Tt,[Object(a["h"])("button",{onClick:e[2]||(e[2]=function(){return t.restartTimer&&t.restartTimer.apply(t,arguments)}),class:"green"},"Start"),Object(a["h"])("button",{onClick:e[3]||(e[3]=function(){return t.stopTime&&t.stopTime.apply(t,arguments)})},"Complete")])):(Object(a["q"])(),Object(a["d"])("div",Mt,[Object(a["h"])("button",{onClick:e[1]||(e[1]=function(){return t.pause&&t.pause.apply(t,arguments)}),class:"red"},"Stop")]))])])])})),Dt=Object(a["i"])({name:"TimerModal",setup:function(){var t="hi",e=function(){mt.endTime()},n=function(){mt.pauseTimer()},r=function(){mt.restartTimer()},c=Object(a["b"])((function(){return mt.timeObj})),o=Object(a["b"])((function(){return mt.getState().paused}));return{testmsg:t,stopTime:e,pause:n,paused:o,restartTimer:r,timeObj:c}}});n("851b");Dt.render=wt,Dt.__scopeId="data-v-4a0b9a34";var Lt=Dt,Ft=Object(a["i"])({name:"App",components:{Home:vt,TimerModal:Lt},setup:function(){var t=Object(a["b"])((function(){return mt.showModal}));return{showModal:t}}});n("83d4");Ft.render=r;var At=Ft,Pt=n("6c02"),Yt=[{path:"/",name:"Home",component:vt}],Ct={history:Object(Pt["b"])(),routes:Yt},_t=Object(Pt["a"])(Ct);_t.replace("/");var qt=_t;Object(a["c"])(At).use(qt).mount("#app")},d7c3:function(t,e,n){},d85c:function(t,e,n){},dee7:function(t,e,n){"use strict";n("d85c")}});
//# sourceMappingURL=app.6b32d244.js.map