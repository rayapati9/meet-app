(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{200:function(e,t,n){},201:function(e,t,n){},202:function(e,t,n){},356:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(66),i=n.n(r),c=(n(200),n(23)),s=n(30),u=n(24),l=n(25),h=(n(201),n(202),n(357)),d=n(361),f=n(362),p=n(185),v=n(186),b=n(78),g=n(190),j=n(5),m=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(s.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"alert",children:Object(j.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),x=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(m),w=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(m),O=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).color="orange",a}return n}(m),y=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={showhideDetails:!1},e.handleShowHideButton=function(){!0===e.state.showhideDetails?e.setState({showhideDetails:!1}):e.setState({showhideDetails:!0})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event;return Object(j.jsxs)("div",{className:"event-container",children:[Object(j.jsx)("h1",{children:t.summary}),Object(j.jsx)("p",{children:t.start.dateTime}),Object(j.jsx)("p",{className:"locations",children:t.location}),this.state.showhideDetails&&Object(j.jsxs)("div",{className:"event-details",children:[Object(j.jsx)("h2",{children:"About Event: "}),Object(j.jsx)("a",{href:t.htmlLink,children:"See Deatils on Google Calendar"}),Object(j.jsx)("p",{children:t.description})]}),Object(j.jsx)("button",{className:"show-hide-btn",onClick:function(){return e.handleShowHideButton()},children:this.state.showhideDetails?"hide deatils":"show details"})]})}}]),n}(a.Component),k=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={infoText:""},e.closeAlert=function(){e.setState({infoText:""})},e.checkConnection=function(){navigator.onLine?e.setState({infoText:""}):e.setState({infoText:"No Internet Connection. Viewing events offline. Connect to internet for updated event list."})},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.checkConnection()}},{key:"render",value:function(){var e=this.props.events;return Object(j.jsxs)(j.Fragment,{children:[this.state.infoText?Object(j.jsx)(O,{text:this.state.infoText,close:this.closeAlert}):null,Object(j.jsx)("h1",{className:"event-list__title",children:"Events this week ( Next 7 Days )"}),e?Object(j.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)(y,{event:e})},e.id)}))}):Object(j.jsxs)("div",{className:"loading__container",children:[Object(j.jsx)("img",{src:"data:image/png;base64,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",className:"loading-icon",alt:"loading icon"}),Object(j.jsx)("h1",{children:"Loading Events"})]})]})}}]),n}(a.Component),C=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,suggestions:[],infoText:"We cannot find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateLocation(t)},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"CitySearch",children:[Object(j.jsx)(x,{text:this.state.infoText}),Object(j.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(j.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(j.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(j.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(j.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(a.Component),A=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={eventCount:5},e.handleEventInputChanged=function(t){var n=t.target.value;if(n<1)e.setState({eventCount:"",errorText:"select number between 1 and 5"});else{if(n>5)return e.setState({eventCount:"",errorText:"select number between 1 and 5"});e.setState({eventCount:n,errorText:""}),e.props.updateCount(n)}},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"event-number",children:[Object(j.jsx)(w,{text:this.state.errorText}),Object(j.jsx)("label",{htmlFor:"numberOfEvent"}),Object(j.jsx)("input",{type:"number",name:"numberOfEvent",className:"event-number-input",placeholder:"Enter Number of Events",value:this.state.eventCount,onChange:this.handleEventInputChanged})]})}}]),n}(a.Component),S=n(33),E=n.n(S),I=n(75),Q=n(189),U=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],T=n(117),q=n.n(T),N=n(62),R=n.n(N),Z=function(e){var t=e.map((function(e){return e.location}));return Object(Q.a)(new Set(t))},V=function(){var e=Object(I.a)(E.a.mark((function e(){var t,n,a,o,r,i;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,L(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(o=e.sent){e.next=20;break}return e.next=17,q.a.get("https://7czr641os0.execute-api.us-west-1.amazonaws.com/dev/api/get-auth-url");case 17:return r=e.sent,i=r.data.authUrl,e.abrupt("return",window.location.href=i);case 20:return e.abrupt("return",o&&F(o));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(I.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(I.a)(E.a.mark((function e(){var t,n,a,o,r,i,c,s;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(R.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return R.a.done(),e.abrupt("return",U);case 4:if(navigator.onLine){e.next=9;break}return t=localStorage.getItem("lastEvents"),n=JSON.parse(t).events,R.a.done(),e.abrupt("return",n);case 9:if(navigator.onLine){e.next=14;break}return a=localStorage.getItem("lastEvents"),o=Z(JSON.parse(a).events),R.a.done(),e.abrupt("return",o);case 14:return e.next=16,V();case 16:if(!(r=e.sent)){e.next=26;break}return M(),i="https://7czr641os0.execute-api.us-west-1.amazonaws.com/dev/api/get-events/"+r,e.next=22,q.a.get(i);case 22:return(c=e.sent).data&&(s=Z(c.data.events),localStorage.setItem("lastEvents",JSON.stringify(c.data)),localStorage.setItem("locations",JSON.stringify(s))),R.a.done(),e.abrupt("return",c.data.events);case 26:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},F=function(){var e=Object(I.a)(E.a.mark((function e(t){var n,a,o;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://7czr641os0.execute-api.us-west-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(o=a.access_token)&&localStorage.setItem("access_token",o),e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=n(18),B=n(364),W=n(180),X=n(93),z=n(74),D=function(e){var t=e.events,n=Object(a.useState)([]),o=Object(K.a)(n,2),r=o[0],i=o[1];Object(a.useEffect)((function(){i((function(){return c()}))}),[t]);var c=function(){return["React","JavaScript","Node","jQuery","Angular"].map((function(e){var n=t.filter((function(t){return t.summary.split(" ").includes(e)})).length;return{name:e,value:n}}))},s=["#ee5454","#5f74f0","#69eb13","#13ebeb","#eb13c7"];return Object(j.jsx)(h.a,{height:400,children:Object(j.jsxs)(B.a,{children:[Object(j.jsx)(W.a,{data:r,cx:"47%",cy:"50%",labelLine:!1,legendType:"square",outerRadius:80,fill:"#8884d8",datakey:"value",label:function(e){var t=e.percent;return"".concat((100*t).toFixed(0),"%")},children:r.map((function(e,t){return Object(j.jsx)(X.a,{fill:s[t%s.length],name:e.name},"cell-".concat(t))}))}),Object(j.jsx)(z.a,{layout:"horizontal",align:"center",verticalAlign:"top"})]})})},Y=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={events:[],locations:[]},e.eventCount=5,e.searchLocation="all",e.updateLocation=function(t){var n;e.searchLocation=t,J().then((function(t){n="all"===e.searchLocation?t.slice(0,e.eventCount):t.filter((function(t){return t.location===e.searchLocation})).slice(0,e.eventCount),e.setState({events:n})}))},e.updateCount=function(t){var n;e.eventCount=parseInt(t),J().then((function(t){n="all"===e.searchLocation?t.slice(0,e.eventCount):t.filter((function(t){return t.location===e.searchLocation})).slice(0,e.eventCount),e.setState({events:n})}))},e.updateEvents=function(t,n){var a;J().then((function(o){a="all"===t?o.slice(0,n):o.filter((function(e){return e.location===t})).slice(0,n),e.setState({events:a,eventCount:n})}))},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(" ").shift(),number:t}}))},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,J().then((function(t){e.mounted&&e.setState({events:t.slice(0,e.state.eventCount),locations:Z(t)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Meet App"}),Object(j.jsx)("h4",{children:"Choose your nearest city"}),Object(j.jsx)(C,{locations:this.state.locations,updateLocation:this.updateLocation}),Object(j.jsx)(A,{eventCount:this.eventCount,updateCount:this.updateCount}),Object(j.jsx)("h4",{children:" Events in each city "}),Object(j.jsxs)("div",{className:"data-vis-wrapper",children:[Object(j.jsx)(D,{events:this.state.events,locations:this.state.locations}),Object(j.jsx)(h.a,{height:400,children:Object(j.jsxs)(d.a,{margin:{top:20,right:20,bottom:20,left:20},children:[Object(j.jsx)(f.a,{}),Object(j.jsx)(p.a,{type:"category",dataKey:"city",name:"city"}),Object(j.jsx)(v.a,{type:"number",dataKey:"number",name:"number of events",allowDecimals:!1}),Object(j.jsx)(b.a,{cursor:{strokeDasharray:"3 3"}}),Object(j.jsx)(g.a,{data:this.getData(),fill:"#8884d8"})]})})]}),Object(j.jsx)(k,{events:this.state.events})]})}}]),n}(a.Component),H=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,365)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),o(e),r(e),i(e)}))};n(187).config("8f5e98ce5cd44c9e989340d2f9cd2ec4").install(),i.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(Y,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet-app","/service-worker.js");H?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):P(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):P(t,e)}))}}(),G()}},[[356,1,2]]]);
//# sourceMappingURL=main.4cd4df5f.chunk.js.map