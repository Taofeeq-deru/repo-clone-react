(this["webpackJsonprepo-clone-react"]=this["webpackJsonprepo-clone-react"]||[]).push([[0],{42:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var s=t(0),c=t(2),n=t.n(c),i=t(17),l=t.n(i),r=t(3),o=t(4),j=t(6),d=t(5),h=function(e){Object(j.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(r.a)(this,t);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=a.call.apply(a,[this].concat(c))).state={profile:!1,repo:!1},e}return Object(o.a)(t,[{key:"toggleNav",value:function(){document.querySelector("#mobile-nav").classList.toggle("show")}},{key:"toggleDropdown",value:function(e){e.preventDefault();var a=e.target.getAttribute("data-dd"),t=this.state,s=t.repo,c=t.profile;s||c?this.setState({repo:!1,profile:!1}):"repo-dd"===a?this.setState({repo:!0,profile:!1}):this.setState({repo:!1,profile:!0})}},{key:"render",value:function(){var e=this,a=this.state,t=a.repo,c=a.profile,n=this.props,i=n.avi,l=n.username;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("nav",{className:"nav",children:[Object(s.jsxs)("div",{className:"mob-view",children:[Object(s.jsx)("ion-icon",{name:"menu-outline",size:"large",onClick:function(){return e.toggleNav()}}),Object(s.jsx)("p",{className:"link",children:Object(s.jsx)("i",{className:"fab fa-github"})}),Object(s.jsx)("p",{className:"link",children:Object(s.jsx)("i",{className:"far fa-bell"})})]}),Object(s.jsxs)("div",{className:"pc-view",children:[Object(s.jsx)("p",{className:"link",children:Object(s.jsx)("i",{className:"fab fa-github"})}),Object(s.jsxs)("div",{className:"search-group",children:[Object(s.jsx)("input",{type:"search",name:"search",id:"pc-search",className:"nav-search",placeholder:"Search or jump to..."}),Object(s.jsx)("div",{className:"slash",children:Object(s.jsx)("span",{children:"/"})})]}),Object(s.jsx)("p",{className:"link nav-link"}),Object(s.jsx)("p",{className:"link nav-link",children:"Issue"}),Object(s.jsx)("p",{className:"link nav-link",children:"Marketplace"}),Object(s.jsx)("p",{className:"link nav-link",children:"Explore"}),Object(s.jsxs)("div",{className:"end",children:[Object(s.jsx)("p",{className:"link nav-link-end",children:Object(s.jsx)("i",{className:"far fa-bell"})}),Object(s.jsxs)("div",{className:"nav-link-end dd-toggler","data-dd":"repo-dd",onClick:function(a){return e.toggleDropdown(a)},children:[Object(s.jsx)("ion-icon",{name:"add-outline","data-dd":"repo-dd"})," ",Object(s.jsx)("i",{className:"fas fa-caret-down","data-dd":"repo-dd"})]}),Object(s.jsxs)("div",{className:"nav-link-end dd-toggler","data-dd":"profile-dd",onClick:function(a){return e.toggleDropdown(a)},children:[Object(s.jsx)("img",{src:i,alt:l,className:"avi my-avi","data-dd":"profile-dd"}),Object(s.jsx)("i",{className:"fas fa-caret-down","data-dd":"profile-dd"})]})]})]})]}),Object(s.jsxs)("div",{id:"repo-dd",className:"dropdown ".concat(t?"show":""),children:[Object(s.jsx)("div",{className:"triangle"}),Object(s.jsxs)("div",{className:"dd-menu",children:[Object(s.jsx)("p",{className:"link",children:"New repository"}),Object(s.jsx)("p",{className:"link",children:"Import repository"}),Object(s.jsx)("p",{className:"link",children:"New gist"}),Object(s.jsx)("p",{className:"link",children:"New organization"}),Object(s.jsx)("p",{className:"link",children:"New project"})]})]}),Object(s.jsxs)("div",{id:"profile-dd",className:"dropdown ".concat(c?"show":""),children:[Object(s.jsx)("div",{className:"triangle"}),Object(s.jsxs)("div",{className:"dd-menu",children:[Object(s.jsxs)("p",{className:"link signed-in",children:["Signed in as ",Object(s.jsx)("br",{}),Object(s.jsx)("span",{children:l})]}),Object(s.jsx)("div",{className:"status-box",children:Object(s.jsxs)("div",{className:"set-status",children:[Object(s.jsx)("i",{className:"far fa-smile"}),Object(s.jsx)("p",{children:"Set status"})]})}),Object(s.jsxs)("div",{className:"profile-links",children:[Object(s.jsx)("p",{className:"link",children:"Your profile"}),Object(s.jsx)("p",{className:"link",children:"Your repositories"}),Object(s.jsx)("p",{className:"link",children:"Your organisations"}),Object(s.jsx)("p",{className:"link",children:"Your projects"}),Object(s.jsx)("p",{className:"link",children:"Your stars"}),Object(s.jsx)("p",{className:"link",children:"Your gists"})]}),Object(s.jsxs)("div",{className:"others",children:[Object(s.jsx)("p",{className:"link",children:"Upgrade"}),Object(s.jsx)("p",{className:"link",children:"Feature preview"}),Object(s.jsx)("p",{className:"link",children:"Help"}),Object(s.jsx)("p",{className:"link",children:"Settings"}),Object(s.jsx)("p",{className:"link",children:"Sign out"})]})]})]}),Object(s.jsxs)("div",{className:"mob-nav",id:"mobile-nav",children:[Object(s.jsx)("input",{type:"search",name:"search",id:"mob-search",className:"nav-search",placeholder:"Search"}),Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:"Dashboard"}),Object(s.jsx)("li",{children:"Pull requests"}),Object(s.jsx)("li",{children:"Issues"}),Object(s.jsx)("li",{children:"Marketplace"}),Object(s.jsx)("li",{children:"Explore"}),Object(s.jsx)("li",{children:"Settings"}),Object(s.jsxs)("li",{children:[Object(s.jsx)("img",{src:i,alt:l,className:"avi my-avi",loading:"lazy"}),"\xa0",Object(s.jsx)("span",{className:"my-username",children:l})]}),Object(s.jsxs)("li",{children:[Object(s.jsx)("i",{className:"fas fa-sign-out-alt"}),"\xa0 Sign out"]})]})]})]})}}]),t}(c.Component),b=function(e){Object(j.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(r.a)(this,t);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=a.call.apply(a,[this].concat(c))).state={},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this.props.data;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"pc-tabs",role:"navigation",children:[Object(s.jsxs)("div",{className:"name",id:"tab-name",children:[Object(s.jsx)("img",{src:e.avatarUrl,alt:e.login,className:"avi my-avi",loading:"lazy"}),Object(s.jsx)("p",{className:"my-username",children:e.login})]}),Object(s.jsxs)("p",{className:"tab-link",children:[Object(s.jsx)("svg",{height:"15px",width:"15px",viewBox:"0 0 16 16",children:Object(s.jsx)("path",{fillRule:"evenodd",d:"M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"})}),"Overview"]}),Object(s.jsxs)("p",{className:"tab-link active",children:[Object(s.jsx)("svg",{height:"15px",width:"15px",viewBox:"0 0 16 16",children:Object(s.jsx)("path",{fillRule:"evenodd",d:"M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"})}),"Repositores ",Object(s.jsx)("span",{className:"amount repo-count",children:"41"})]}),Object(s.jsxs)("p",{className:"tab-link",children:[Object(s.jsx)("svg",{height:"15px",width:"15px",viewBox:"0 0 16 16",children:Object(s.jsx)("path",{fillRule:"evenodd",d:"M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"})}),"Projects"]}),Object(s.jsxs)("p",{className:"tab-link",children:[Object(s.jsx)("svg",{height:"15px",width:"15px",viewBox:"0 0 16 16",children:Object(s.jsx)("path",{fillRule:"evenodd",d:"M8.878.392a1.75 1.75 0 00-1.756 0l-5.25 3.045A1.75 1.75 0 001 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 001.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392zM7.875 1.69a.25.25 0 01.25 0l4.63 2.685L8 7.133 3.245 4.375l4.63-2.685zM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432L2.5 5.677zm6.25 8.271l4.625-2.683a.25.25 0 00.125-.216V5.677L8.75 8.432v5.516z"})}),"Packages"]})]}),Object(s.jsxs)("div",{className:"flex-pc",children:[Object(s.jsx)(p,{data:e}),Object(s.jsxs)("div",{className:"mobile-tabs",role:"navigation",children:[Object(s.jsx)("p",{children:"Overview"}),Object(s.jsxs)("p",{className:"active",children:["Repositores"," ",Object(s.jsx)("span",{className:"amount repo-count",children:e.repoCount})]}),Object(s.jsx)("p",{children:"Projects"}),Object(s.jsx)("p",{children:"Packages"})]}),Object(s.jsx)("div",{className:"tab-content",children:Object(s.jsx)(m,{repos:e.repos,total:e.repoCount,username:e.login})})]})]})}}]),t}(c.Component),p=function(e){Object(j.a)(t,e);var a=Object(d.a)(t);function t(e){var s;return Object(r.a)(this,t),(s=a.call(this,e)).state={},s.handleScroll=function(){var e=s.topRef.current.offsetTop,a=document.querySelector("#bio-name"),t=document.querySelector("#tab-name");window.pageYOffset>=e?(t.style.visibility="visible",a.style.visibility="hidden"):(t.style.visibility="hidden",a.style.visibility="visible")},s.topRef=n.a.createRef(),s}return Object(o.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0),window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.props.data,a=e.avatarUrl,t=e.bio,c=e.email,n=e.name,i=e.login,l=e.followers,r=e.following,o=e.location,j=e.twitterUsername,d=e.websiteUrl,h=e.stars;return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"bio-container",children:Object(s.jsxs)("div",{className:"bio",children:[Object(s.jsxs)("div",{className:"avi-names",children:[Object(s.jsxs)("div",{className:"avi",children:[Object(s.jsx)("img",{src:a,alt:i,className:"avatar my-avi",loading:"lazy"}),Object(s.jsxs)("div",{className:"set-status-pc",children:[Object(s.jsx)("i",{className:"far fa-smile"}),Object(s.jsx)("p",{children:"Set status"})]})]}),Object(s.jsxs)("div",{className:"names",id:"bio-name",children:[Object(s.jsx)("h1",{className:"my-fullname",children:n}),Object(s.jsx)("h2",{className:"my-username",children:i})]})]}),Object(s.jsxs)("div",{className:"set-status",children:[Object(s.jsx)("i",{className:"far fa-smile"}),Object(s.jsx)("p",{children:"Set status"})]}),Object(s.jsx)("div",{className:"desc",children:Object(s.jsx)("p",{id:"bio-desc",ref:this.topRef,children:t})}),Object(s.jsx)("button",{className:"btn-edit",children:"Edit profile"}),Object(s.jsxs)("div",{className:"flex-reverse",children:[Object(s.jsxs)("div",{className:"follow-count",children:[Object(s.jsxs)("a",{href:"https://github.com/Taofeeq-deru?tab=followers",children:[Object(s.jsx)("ion-icon",{name:"people-outline"})," ",Object(s.jsx)("span",{children:l})," followers"]}),Object(s.jsx)("b",{children:"\xb7"}),Object(s.jsxs)("a",{href:"https://github.com/Taofeeq-deru?tab=following",children:[Object(s.jsx)("span",{children:r})," following"]}),Object(s.jsx)("b",{children:"\xb7"}),Object(s.jsxs)("a",{href:"https://github.com/Taofeeq-deru?tab=stars",children:[Object(s.jsx)("i",{className:"far fa-star"})," ",Object(s.jsx)("span",{children:h})]})]}),Object(s.jsxs)("div",{className:"contacts",children:[Object(s.jsxs)("span",{className:"pc-only",children:[Object(s.jsx)("ion-icon",{name:"location-outline"})," ",Object(s.jsx)("p",{children:o})]}),Object(s.jsxs)("span",{children:[Object(s.jsx)("i",{className:"far fa-envelope"})," ",Object(s.jsx)("a",{href:"mailto:".concat(c),children:c})]}),Object(s.jsxs)("span",{children:[Object(s.jsx)("i",{className:"fas fa-link"})," ",Object(s.jsx)("a",{href:d,children:d})]}),Object(s.jsxs)("span",{className:"pc-only",children:[Object(s.jsx)("ion-icon",{name:"logo-twitter"})," ",Object(s.jsxs)("a",{href:"https://twitter.com/".concat(j),children:["@",j]})]})]})]})]})})})}}]),t}(c.Component),u=t(1),m=function(e){Object(j.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(r.a)(this,t);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=a.call.apply(a,[this].concat(c))).state={type:!1,lang:!1,pages:"",current:"",search:"",perPage:{},repos:[],mssg:null,typeVal:"All",langVal:"All"},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.checkProps()}},{key:"checkProps",value:function(){var e=this;this.props.total>0?this.getPages():setTimeout((function(){e.checkProps()}),500)}},{key:"getPages",value:function(){var e=0,a=1,t=[],s=this.props,c=s.repos,n=s.total;n>30&&(a=Math.ceil(n/30));for(var i=1;i<=a;i++){var l=e+30,r=c.slice(e,l);e=l,t.push({id:i,pageData:r})}var o=t.find((function(e){return 1===e.id}));this.setState(Object(u.a)(Object(u.a)({},this.state),{},{pages:a,perPage:t,repos:o.pageData,current:1}))}},{key:"changePage",value:function(e){var a,t=e.target.getAttribute("data-page"),s=this.state,c=s.current,n=s.perPage;a="next"===t?c+1:c-1;var i=n.find((function(e){return e.id===a}));this.setState(Object(u.a)(Object(u.a)({},this.state),{},{current:a,repos:i.pageData})),window.scrollTo(0,0)}},{key:"changeType",value:function(e){var a=this,t=e.target.getAttribute("data-type");if("All"===t||"Sources"===t){var s=this.state,c=s.perPage,n=s.current,i=c.find((function(e){return e.id===n}));this.setState(Object(u.a)(Object(u.a)({},this.state),{},{repos:i.pageData,mssg:null,typeVal:t}))}else{var l,r,o=this.props.repos.filter((function(e){return!0===e[t]}));"isFork"===t?(l="forked",r="Forks"):"isArchived"===t?(l="archived",r="Archived"):(l="mirror",r="Mirrors");var j="".concat(o.length," result").concat(o.length>1?"s":""," for ").concat(l," repositories");this.setState(Object(u.a)(Object(u.a)({},this.state),{},{repos:o,mssg:j,typeVal:r}))}setTimeout((function(){a.closeDetails()}),500)}},{key:"changeLanguage",value:function(e){var a=this,t=e.target.getAttribute("data-lang");if("All"===t){var s=this.state,c=s.perPage,n=s.current,i=c.find((function(e){return e.id===n}));this.setState(Object(u.a)(Object(u.a)({},this.state),{},{repos:i.pageData,mssg:null,langVal:t}))}else{var l=this.props.repos.filter((function(e){return e.primaryLanguage&&e.primaryLanguage.name===t})),r="".concat(l.length," result").concat(l.length>1?"s":""," for repositories written in ").concat(t);this.setState(Object(u.a)(Object(u.a)({},this.state),{},{repos:l,mssg:r,langVal:t}))}setTimeout((function(){a.closeDetails()}),500)}},{key:"handleSearch",value:function(e){var a=e.target.value,t=this.props.repos.filter((function(e){return e.name.toLowerCase().search(a)>=0||e.description&&e.description.toLowerCase().search(a)>=0})),s="".concat(t.length," result").concat(t.length>1?"s":""," for repositories matching ").concat(a);this.setState(Object(u.a)(Object(u.a)({},this.state),{},{repos:t,mssg:s}))}},{key:"clearFilter",value:function(){var e=this.state,a=e.perPage,t=e.current,s=a.find((function(e){return e.id===t}));this.setState(Object(u.a)(Object(u.a)({},this.state),{},{repos:s.pageData,mssg:null,typeVal:"All",langVal:"All"})),window.scrollTo(0,0)}},{key:"toggleDetails",value:function(e){e.preventDefault();var a=e.target.getAttribute("data-dd"),t=this.state,s=t.type,c=t.lang;s||c?this.setState(Object(u.a)(Object(u.a)({},this.state),{},{type:!1,lang:!1})):"type"===a?this.setState(Object(u.a)(Object(u.a)({},this.state),{},{type:!0,lang:!1})):this.setState(Object(u.a)(Object(u.a)({},this.state),{},{lang:!0,type:!1}))}},{key:"closeDetails",value:function(){this.setState(Object(u.a)(Object(u.a)({},this.state),{},{type:!1,lang:!1}))}},{key:"render",value:function(){var e=this,a=this.state,t=a.type,c=a.lang,n=a.repos,i=a.pages,l=a.current,r=a.mssg,o=a.typeVal,j=a.langVal,d=this.props.username,h={0:"Jan",1:"Feb",2:"Mar",3:"Apr",4:"May",5:"Jun",6:"Jul",7:"Aug",8:"Sep",9:"Oct",10:"Nov",11:"Dec"},b={mins:(new Date).getMinutes(),hour:(new Date).getHours(),date:(new Date).getDate(),month:(new Date).getMonth(),year:(new Date).getFullYear()},p=1;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"search-repo",children:[Object(s.jsx)("input",{type:"search",name:"find-repo",id:"find-repo",onChange:function(a){return e.handleSearch(a)},className:"find-repo",placeholder:"Find a repository..."}),Object(s.jsxs)("div",{className:"details",children:[Object(s.jsxs)("details",{open:t,children:[Object(s.jsxs)("summary",{onClick:function(a){return e.toggleDetails(a)},"data-dd":"type",children:[Object(s.jsx)("span",{"data-dd":"type",children:"Type:"}),"\xa0",o,Object(s.jsx)("i",{className:"fas fa-caret-down","data-dd":"type"})]}),Object(s.jsx)("div",{className:"menu",children:Object(s.jsxs)("div",{className:"details-menu",children:[Object(s.jsxs)("p",{className:"title",children:["Select type",Object(s.jsx)("span",{className:"close-detail",role:"button",onClick:function(){return e.closeDetails()},children:"\xd7"})]}),Object(s.jsxs)("div",{className:"menu-list",children:[Object(s.jsxs)("p",{"data-type":"All",onClick:function(a){return e.changeType(a)},children:[Object(s.jsx)("i",{className:"fas fa-check ".concat("All"===o?"":"inactive"),"data-type":"All"})," ","All"]}),Object(s.jsxs)("p",{"data-type":"Sources",onClick:function(a){return e.changeType(a)},children:[Object(s.jsx)("i",{className:"fas fa-check ".concat("Sources"===o?"":"inactive"),"data-type":"Sources"})," ","Sources"]}),Object(s.jsxs)("p",{"data-type":"isFork",onClick:function(a){return e.changeType(a)},children:[Object(s.jsx)("i",{className:"fas fa-check ".concat("Forks"===o?"":"inactive"),"data-type":"isFork"})," ","Forks"]}),Object(s.jsxs)("p",{"data-type":"isArchived",onClick:function(a){return e.changeType(a)},children:[Object(s.jsx)("i",{className:"fas fa-check ".concat("Archived"===o?"":"inactive"),"data-type":"isArchived"})," ","Archived"]}),Object(s.jsxs)("p",{"data-type":"fas fa-check ".concat("Mirrors"===o?"":"inactive"),onClick:function(a){return e.changeType(a)},children:[Object(s.jsx)("i",{className:"fas fa-check inactive","data-type":"isMirror"})," ","Mirrors"]})]})]})})]}),Object(s.jsxs)("details",{className:"lang",open:c,children:[Object(s.jsxs)("summary",{onClick:function(a){return e.toggleDetails(a)},"data-dd":"lang",children:[Object(s.jsx)("span",{"data-dd":"lang",children:"Language:"}),"\xa0",j,Object(s.jsx)("i",{className:"fas fa-caret-down","data-dd":"lang"})]}),Object(s.jsx)("div",{className:"menu",children:Object(s.jsxs)("div",{className:"details-menu",children:[Object(s.jsxs)("p",{className:"title",children:["Select language",Object(s.jsx)("span",{className:"close-detail",role:"button",onClick:function(){return e.closeDetails()},children:"\xd7"})]}),Object(s.jsxs)("div",{className:"menu-list",children:[Object(s.jsxs)("p",{"data-lang":"All",onClick:function(a){return e.changeLanguage(a)},children:[Object(s.jsx)("i",{className:"fas fa-check ".concat("All"===j?"":"inactive"),"data-lang":"All"})," ","All"]}),Object(s.jsxs)("p",{"data-lang":"JavaScript",onClick:function(a){return e.changeLanguage(a)},children:[Object(s.jsx)("i",{className:"fas fa-check ".concat("JavaScript"===j?"":"inactive"),"data-lang":"JavaScript"})," ","JavaScript"]}),Object(s.jsxs)("p",{"data-lang":"SCSS",onClick:function(a){return e.changeLanguage(a)},children:[Object(s.jsx)("i",{className:"fas fa-check ".concat("SCSS"===j?"":"inactive"),"data-lang":"SCSS"})," ","SCSS"]}),Object(s.jsxs)("p",{"data-lang":"HTML",onClick:function(a){return e.changeLanguage(a)},children:[Object(s.jsx)("i",{className:"fas fa-check ".concat("HTML"===j?"":"inactive"),"data-lang":"HTML"})," ","HTML"]}),Object(s.jsxs)("p",{"data-lang":"PHP",onClick:function(a){return e.changeLanguage(a)},children:[Object(s.jsx)("i",{className:"fas fa-check ".concat("PHP"===j?"":"inactive"),"data-lang":"PHP"})," ","PHP"]}),Object(s.jsxs)("p",{"data-lang":"Python",onClick:function(a){return e.changeLanguage(a)},children:[Object(s.jsx)("i",{className:"fas fa-check ".concat("Python"===j?"":"inactive"),"data-lang":"Python"})," ","Python"]}),Object(s.jsxs)("p",{"data-lang":"TypeScript",onClick:function(a){return e.changeLanguage(a)},children:[Object(s.jsx)("i",{className:"fas fa-check inactive","data-lang":"TypeScript"})," ","TypeScript"]}),Object(s.jsxs)("p",{"data-lang":"CSS",onClick:function(a){return e.changeLanguage(a)},children:[Object(s.jsx)("i",{className:"fas fa-check inactive","data-lang":"CSS"})," ","CSS"]})]})]})})]}),Object(s.jsxs)("button",{className:"btn-new",children:[Object(s.jsx)("svg",{height:"13px",width:"13px",viewBox:"0 0 16 16",children:Object(s.jsx)("path",{fillRule:"evenodd",d:"M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"})}),"New"]})]})]}),Object(s.jsxs)("div",{className:"repo-list",id:"repoList",children:[r&&Object(s.jsxs)("div",{className:"mssg",children:[Object(s.jsx)("p",{className:"msg-text",children:r}),Object(s.jsxs)("div",{className:"cancel",onClick:function(){return e.clearFilter()},children:[Object(s.jsx)("button",{children:"\xd7"})," ",Object(s.jsx)("p",{className:"clear",children:"Clear Filter"})]})]}),0===n.length&&Object(s.jsxs)("p",{className:"no-result",children:[d," doesn't have any repositories that match"]}),n.map((function(e){return Object(s.jsx)(O,{repo:e,moment:b,months:h},p++)}))]}),Object(s.jsxs)("div",{className:"buttons",children:[Object(s.jsx)("button",{className:"btn-prev ".concat(1===l?"disabled":""),disabled:1===l,"data-page":"prev",onClick:function(a){return e.changePage(a)},children:"Previous"}),Object(s.jsx)("button",{className:"btn-next ".concat(1===i||l>1?"disabled":""),disabled:1===i||l>1,"data-page":"next",onClick:function(a){return e.changePage(a)},children:"Next"})]})]})}}]),t}(c.Component),O=function(e){Object(j.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(r.a)(this,t);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=a.call.apply(a,[this].concat(c))).state={},e}return Object(o.a)(t,[{key:"render",value:function(){var e,a=this.props,t=a.repo,c=a.moment,n=a.months,i=new Date(t.updatedAt).getMinutes(),l=new Date(t.updatedAt).getHours(),r=new Date(t.updatedAt).getDate(),o=new Date(t.updatedAt).getMonth(),j=new Date(t.updatedAt).getFullYear();if(j===c.year)if(o===c.month)if(r===c.date)if(l===c.hour)if(i===c.mins)e="a few seconds ago";else{var d=c.mins-i;e=1===d?"a minute ago":"".concat(d," minutes ago")}else{var h=c.hour-l;e="".concat(h,1===h?" hour ago":" hours ago")}else{var b=c.date-r;if(1===b){var p=c.hour+24-l;e=p<24?"".concat(p,1===p?" hour ago":" hours ago"):"yesterday"}else e=1<b<7?"".concat(b," days ago"):"on ".concat(n[o]," ").concat(r)}else e="on ".concat(n[o]," ").concat(r);else e="on ".concat(n[o]," ").concat(r,", ").concat(j);return Object(s.jsx)(s.Fragment,{children:t.name&&Object(s.jsxs)("div",{className:"repo",children:[Object(s.jsxs)("div",{className:"name-lang",children:[Object(s.jsx)("div",{className:"name",children:Object(s.jsx)("a",{href:t.url,children:t.name})}),t.parent&&Object(s.jsxs)("p",{className:"forked",children:["Forked from"," ",Object(s.jsx)("a",{href:t.parent.url,className:"link",children:t.parent.nameWithOwner})]}),t.description&&Object(s.jsx)("p",{className:"detail",children:t.description}),Object(s.jsxs)("div",{className:"lang-updated",children:[t.primaryLanguage&&Object(s.jsxs)("p",{className:"lang",children:[Object(s.jsx)("i",{className:"fas fa-circle",style:{color:"".concat(t.primaryLanguage.color)}}),t.primaryLanguage.name]}),t.stargazerCount>0&&Object(s.jsxs)("p",{className:"link",children:[Object(s.jsx)("i",{className:"far fa-star"}),t.stargazerCount]}),t.isFork?Object(s.jsxs)("p",{className:"link",children:[Object(s.jsx)("i",{className:"fas fa-code-branch"})," ",t.parent.forkCount]}):!t.isFork&&t.forkCount>0?Object(s.jsxs)("p",{className:"link",children:[Object(s.jsx)("i",{className:"fas fa-code-branch"})," ",t.forkCount]}):Object(s.jsx)(s.Fragment,{}),t.parent&&t.parent.licenseInfo&&Object(s.jsxs)("p",{children:[Object(s.jsx)("i",{className:"fas fa-balance-scale"})," ",t.parent.licenseInfo.name]}),Object(s.jsxs)("p",{className:"updated",children:["Updated ",e]})]})]}),Object(s.jsx)("div",{className:"star",children:Object(s.jsxs)("button",{className:"btn-star",children:[Object(s.jsx)("i",{className:"far fa-star"})," Star"]})})]})})}}]),t}(c.Component),x=function(e){Object(j.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(r.a)(this,t);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=a.call.apply(a,[this].concat(c))).state={},e}return Object(o.a)(t,[{key:"render",value:function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("footer",{children:Object(s.jsxs)("div",{className:"footer-links",children:[Object(s.jsx)("p",{children:"\xa9 2020 GitHub, Inc."}),Object(s.jsx)("p",{className:"link",children:"Terms"}),Object(s.jsx)("p",{className:"link",children:"Privacy"}),Object(s.jsx)("p",{className:"link",children:"Security"}),Object(s.jsx)("p",{className:"link",children:"Status"}),Object(s.jsx)("p",{className:"link",children:"Help"}),Object(s.jsx)("p",{className:"pc-only",children:Object(s.jsx)("i",{className:"fab fa-github"})}),Object(s.jsx)("p",{className:"link",children:"Contact GitHub"}),Object(s.jsx)("p",{className:"link",children:"Pricing"}),Object(s.jsx)("p",{className:"link",children:"API"}),Object(s.jsx)("p",{className:"link",children:"Training"}),Object(s.jsx)("p",{className:"link",children:"Blog"}),Object(s.jsx)("p",{className:"link",children:"About"})]})})})}}]),t}(c.Component),g={query:"{\n    viewer {\n      login\n      bio\n      avatarUrl\n      name\n      followers {\n        totalCount\n      }\n      following {\n        totalCount\n      }\n      repositories( last: 41, orderBy: {field: UPDATED_AT, direction: DESC}, privacy: PUBLIC) {\n        totalCount\n        nodes {\n          forkCount\n          isFork\n          isMirror\n          isArchived\n          name\n          stargazerCount\n          url\n          updatedAt\n          primaryLanguage {\n            color\n            name\n          }\n          description\n          parent {\n            forkCount\n            name\n            nameWithOwner\n            stargazerCount\n            updatedAt\n            url\n            licenseInfo {\n              name\n            }\n          }\n        }\n      }\n      location\n      email\n      twitterUsername\n      websiteUrl\n      starredRepositories {\n        totalCount\n      }\n    }\n  }"},v=[].concat(["e","7","0","3","7","6","4","e","d","d","9","0","6","c","a","0","6"],["c","2","6","a","b","0","a","0","9","f","b","c","9","e","1","4","8","a","3","3","4","7","e"]),f=t(18),N=t.n(f),k=function(e){Object(j.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(r.a)(this,t);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=a.call.apply(a,[this].concat(c))).state={avatarUrl:"",bio:"",email:"",location:"",login:"",name:"",twitterUsername:"",websiteUrl:"",followers:"",following:"",stars:"",repos:[],repoCount:""},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=v.reduce((function(e,a){return e+a})),t={url:"https://api.github.com/graphql",method:"post",data:JSON.stringify(g),headers:{"Content-type":"Application/json",Authorization:"Bearer ".concat(a)}};N()(t).then((function(a){var t=a.data.data.viewer,s=t.avatarUrl,c=t.bio,n=t.email,i=t.location,l=t.login,r=t.name,o=t.twitterUsername,j=t.websiteUrl,d=t.followers,h=t.following,b=t.repositories,p=t.starredRepositories,u=b.totalCount,m=b.nodes,O=p.totalCount;e.setState({avatarUrl:s,bio:c,email:n,location:i,login:l,name:r,twitterUsername:o,websiteUrl:j,followers:d.totalCount,following:h.totalCount,repoCount:u,repos:m,stars:O})})).catch((function(e){e.response?console.log(e.response):e.request?console.log(e.request):console.log(e)}))}},{key:"render",value:function(){var e=this.state,a=e.avatarUrl,t=e.login;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(h,{avi:a,username:t}),Object(s.jsx)("div",{id:"content",children:Object(s.jsx)(b,{data:this.state})}),Object(s.jsx)(x,{})]})}}]),t}(c.Component);t(42);var y=function(){return Object(s.jsx)(k,{})},w=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,44)).then((function(a){var t=a.getCLS,s=a.getFID,c=a.getFCP,n=a.getLCP,i=a.getTTFB;t(e),s(e),c(e),n(e),i(e)}))};l.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(y,{})}),document.getElementById("root")),w()}},[[43,1,2]]]);
//# sourceMappingURL=main.75f1f5e2.chunk.js.map