(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{131:function(e,t,a){e.exports=a(239)},204:function(e,t,a){},207:function(e,t,a){},210:function(e,t,a){},215:function(e,t,a){},219:function(e,t,a){},235:function(e,t,a){},236:function(e,t,a){},237:function(e,t,a){},238:function(e,t,a){},239:function(e,t,a){"use strict";a.r(t);var n,r,s,o,i,c,l,u,p,b,m,d,h,f,v,g,O,j,y,E=a(0),k=a.n(E),x=a(19),w=a.n(x),I=a(45),C=(a(94),a(57)),N=a(20),T=a.n(N),S=a(30),L=a(46),A=a(21),D=a(11),z=a(12),P=a(17),$=(a(138),a(4)),B=a(119),R=a.n(B),F=a(127),Y=a(52),H=a.n(Y),U=function(){oe.popLoading()},V=localStorage.getItem("issue-todo-repo"),G=V&&"https://api.github.com/repos".concat(V),M=V&&"https://github.com".concat(V,"/issues"),_=function(e){return window.open("".concat(M,"/").concat(e))},W=function(){var e={Accept:"application/vnd.github.symmetra-preview+json"};return n||(n=localStorage.getItem("issue-todo-token")),n&&(e.Authorization="Bearer ".concat(n)),e},J=function(){var e=Object(S.a)(T.a.mark(function e(t,a){var n,r,s,o,i,c,l,u,p,b,m,d,h,f,v,g=arguments;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=g.length>2&&void 0!==g[2]?g[2]:{},r=n.getData,s=void 0===r?{}:r,o=n.hideLoading,i=void 0!==o&&o,c=n.loadingText,void 0===c?null:c,l=n.throwException,u=void 0!==l&&l,p=n.method,b=void 0===p?"GET":p,m=n.headerLink,d=void 0!==m&&m,e.prev=1,i||oe.pushLoading(),h=-1===t.indexOf(G)?G+t:t,Object.keys(s).forEach(function(e,t){var a=s[e];void 0!==a&&(h+=(0===t?"?":"&")+"".concat(e,"=").concat(a))}),v=W(),e.prev=6,"PUT"!==b){e.next=13;break}return e.next=10,H.a.put(h,a,{headers:v});case 10:f=e.sent,e.next=34;break;case 13:if("DELETE"!==b){e.next=19;break}return e.next=16,H.a.delete(h,{headers:v});case 16:f=e.sent,e.next=34;break;case 19:if("POST"!==b){e.next=25;break}return e.next=22,H.a.post(h,a,{headers:v});case 22:f=e.sent,e.next=34;break;case 25:if("PATCH"!==b){e.next=31;break}return e.next=28,H.a.patch(h,a,{headers:v});case 28:f=e.sent,e.next=34;break;case 31:return e.next=33,H.a.get(h,{headers:v});case 33:f=e.sent;case 34:i||U(),e.next=41;break;case 37:throw e.prev=37,e.t0=e.catch(6),i||U(),e.t0;case 41:if(!d){e.next=43;break}return e.abrupt("return",[f.data,f.headers.link]);case 43:return e.abrupt("return",f.data);case 46:if(e.prev=46,e.t1=e.catch(1),!0!==u){e.next=52;break}throw e.t1;case 52:"Request failed with status code 401"===e.t1.message||e.t1.message,C.a.error(e.t1.response&&e.t1.response.data&&e.t1.response.data.message||String(e.t1));case 53:case"end":return e.stop()}},e,null,[[1,46],[6,37]])}));return function(t,a){return e.apply(this,arguments)}}(),q=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return a.getData=t,J(e,null,a)},K=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return a.method="POST",J(e,t,a)},Q=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return a.method="PATCH",J(e,t,a)},X=function(){return n||(n=localStorage.getItem("issue-todo-token")),!!n},Z=function(){var e=Object(S.a)(T.a.mark(function e(){var t,a,n,r,s,o,i;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,t=[],a=1;case 3:return e.next=6,q("/issues",{direction:"asc",_:(new Date).getTime(),page:a},{throwException:!0,headerLink:!0});case 6:if(n=e.sent,r=Object(F.a)(n,2),s=r[0],o=r[1],t=[].concat(Object(I.a)(t),Object(I.a)(s)),!(i=/&page=(\d)>;\srel="next"/.exec(o))){e.next=16;break}a=i[1],e.next=17;break;case 16:return e.abrupt("break",19);case 17:e.next=3;break;case 19:return e.abrupt("return",t);case 22:if(e.prev=22,e.t0=e.catch(0),!e.t0.response||![401,404].includes(e.t0.response.status)){e.next=30;break}localStorage.removeItem("issue-todo-token"),localStorage.removeItem("issue-todo-repo"),window.location.reload(),e.next=31;break;case 30:throw e.t0;case 31:case"end":return e.stop()}},e,null,[[0,22]])}));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=Object(S.a)(T.a.mark(function e(t){return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Q("/issues/".concat(t),{state:"close"}));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),te=function(e){var t=e.title;return K("/issues",{title:t})},ae=function(e,t){return function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return a.method="DELETE",J(e,t,a)}("/issues/".concat(t,"/labels/").concat(e))},ne=function(e,t){return function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return a.method="PUT",J(e,t,a)}("/issues/".concat(e,"/labels"),{labels:t.map(function(e){return e.name})})},re=R.a.debounce(function(e,t){return Q("/issues/".concat(e),t)},1e3),se=function(e){return/\[list\]/.test(e.description)},oe=new(r=function(){function e(){Object(D.a)(this,e),Object(A.a)(this,"issues",s,this),Object(A.a)(this,"labels",o,this),Object(A.a)(this,"initState",i,this),Object(A.a)(this,"sidebarCollapsed",c,this),Object(A.a)(this,"rightBarCollapsed",l,this),Object(A.a)(this,"selectedIssueNumber",u,this),Object(A.a)(this,"loading",p,this),Object(A.a)(this,"init",b,this),Object(A.a)(this,"pushLoading",m,this),Object(A.a)(this,"popLoading",d,this),Object(A.a)(this,"setSidebarCollapse",h,this),Object(A.a)(this,"setRightBarCollapse",f,this),Object(A.a)(this,"closeIssue",v,this),Object(A.a)(this,"addIssue",g,this),Object(A.a)(this,"setIssueFlag",O,this),Object(A.a)(this,"setSelectedIssueNumber",j,this),Object(A.a)(this,"updateIssue",y,this)}return Object(z.a)(e,[{key:"displayLabels",get:function(){return this.labels.filter(function(e){return"important"!==e.name})}},{key:"computedIssues",get:function(){var e=this;return this.issues.map(function(t){return Object(L.a)({},t,{$displayLabels:t.labels.filter(function(e){return"important"!==e.name}),$isImportant:t.labels.some(function(e){return"important"===e.name}),$selected:t.number===e.selectedIssueNumber})})}},{key:"nextActionIssues",get:function(){return this.computedIssues.filter(function(e){return!!e.$displayLabels.length&&!e.$displayLabels.some(se)})}},{key:"inboxIssues",get:function(){return this.computedIssues.filter(function(e){return 0===e.$displayLabels.length})}},{key:"importantIssues",get:function(){return this.computedIssues.filter(function(e){return e.$isImportant})}},{key:"listIssues",get:function(){return this.computedIssues.filter(function(e){return e.labels.some(se)})}},{key:"selectedIssue",get:function(){var e=this;return this.computedIssues.find(function(t){return t.number===e.selectedIssueNumber})}}]),e}(),s=Object(P.a)(r.prototype,"issues",[$.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),o=Object(P.a)(r.prototype,"labels",[$.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),i=Object(P.a)(r.prototype,"initState",[$.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"pending"}}),c=Object(P.a)(r.prototype,"sidebarCollapsed",[$.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),l=Object(P.a)(r.prototype,"rightBarCollapsed",[$.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),u=Object(P.a)(r.prototype,"selectedIssueNumber",[$.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),p=Object(P.a)(r.prototype,"loading",[$.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Object(P.a)(r.prototype,"displayLabels",[$.e],Object.getOwnPropertyDescriptor(r.prototype,"displayLabels"),r.prototype),Object(P.a)(r.prototype,"computedIssues",[$.e],Object.getOwnPropertyDescriptor(r.prototype,"computedIssues"),r.prototype),Object(P.a)(r.prototype,"nextActionIssues",[$.e],Object.getOwnPropertyDescriptor(r.prototype,"nextActionIssues"),r.prototype),Object(P.a)(r.prototype,"inboxIssues",[$.e],Object.getOwnPropertyDescriptor(r.prototype,"inboxIssues"),r.prototype),Object(P.a)(r.prototype,"importantIssues",[$.e],Object.getOwnPropertyDescriptor(r.prototype,"importantIssues"),r.prototype),Object(P.a)(r.prototype,"listIssues",[$.e],Object.getOwnPropertyDescriptor(r.prototype,"listIssues"),r.prototype),Object(P.a)(r.prototype,"selectedIssue",[$.e],Object.getOwnPropertyDescriptor(r.prototype,"selectedIssue"),r.prototype),b=Object(P.a)(r.prototype,"init",[$.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return Object(S.a)(T.a.mark(function t(){var a,n;return T.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Z();case 2:return a=t.sent,e.issues=a,t.next=6,q("/labels",{_:(new Date).getTime()});case 6:n=t.sent,e.labels=n,e.initState="done";case 9:case"end":return t.stop()}},t)}))}}),m=Object(P.a)(r.prototype,"pushLoading",[$.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){return e.loading++}}}),d=Object(P.a)(r.prototype,"popLoading",[$.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){return e.loading--}}}),h=Object(P.a)(r.prototype,"setSidebarCollapse",[$.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.sidebarCollapsed=t}}}),f=Object(P.a)(r.prototype,"setRightBarCollapse",[$.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.rightBarCollapsed=t}}}),v=Object(P.a)(r.prototype,"closeIssue",[$.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){if(!e.issues.find(function(e){return e.number===t}))return C.a.error("Issue not found: #"+t);ee(t),e.issues=e.issues.map(function(e){return e.number!==t?e:Object(L.a)({},e,{$closed:!0})})}}}),g=Object(P.a)(r.prototype,"addIssue",[$.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=Object(S.a)(T.a.mark(function t(a){var n,r,s;return T.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.title,r=(new Date).getTime(),e.issues.push({number:r,title:n,labels:[],$displayLabels:[]}),t.next=5,te({title:n});case 5:s=t.sent,e.issues=e.issues.map(function(e){return e.number!==r?e:Object(L.a)({},e,s)});case 7:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}}),O=Object(P.a)(r.prototype,"setIssueFlag",[$.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=Object(S.a)(T.a.mark(function t(a){var n,r,s=arguments;return T.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=!(s.length>1&&void 0!==s[1])||s[1],r=e.labels.find(function(e){return"important"===e.name}),e.issues=e.computedIssues.map(function(e){return e.number!==a?e:n?e.$isImportant?e:(t=r.name,s=e.number,K("/issues/".concat(s,"/labels"),{labels:Array.isArray(t)?t:[t]}),Object(L.a)({},e,{labels:[].concat(Object(I.a)(e.labels),[r])})):e.$isImportant?(ae(r.name,e.number),Object(L.a)({},e,{labels:e.labels.filter(function(e){return"important"!==e.name})})):e;var t,s});case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}}),j=Object(P.a)(r.prototype,"setSelectedIssueNumber",[$.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){return e.selectedIssueNumber=t}}}),y=Object(P.a)(r.prototype,"updateIssue",[$.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t,a){e.issues=e.issues.map(function(e){return e.number===t?(a.labels?ne(t,a.labels):re(t,a),Object(L.a)({},e,a)):e})}}}),r),ie=a(15),ce=a(14),le=a(16),ue=a(1),pe=a.n(ue),be=function(e){function t(){return Object(D.a)(this,t),Object(ie.a)(this,Object(ce.a)(t).apply(this,arguments))}return Object(le.a)(t,e),Object(z.a)(t,[{key:"getChildContext",value:function(){return{store:this.props.store}}},{key:"render",value:function(){return this.props.children}}]),t}(E.Component);be.childContextTypes={store:pe.a.object};a(199);var me,de,he,fe=a(125),ve=a(56),ge=a(36),Oe=a(18),je=(a(55),a(5)),ye=[{path:"/",exact:!0,node:k.a.createElement("span",null,k.a.createElement(je.a,{type:"inbox"})," Inbox")},{path:"/next-action",node:k.a.createElement("span",null,k.a.createElement(je.a,{type:"carry-out"})," Next Action")},{path:"/important",node:k.a.createElement("span",null,k.a.createElement(je.a,{type:"flag"})," Important")},{path:"/list",node:k.a.createElement("span",null,k.a.createElement(je.a,{type:"unordered-list"})," List")}],Ee=(a(86),a(44)),ke=(a(87),a(32)),xe=(a(204),function(e){function t(){var e,a;Object(D.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(ie.a)(this,(e=Object(ce.a)(t)).call.apply(e,[this].concat(r)))).state={visible:!1,changing:!1},a}return Object(le.a)(t,e),Object(z.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this;!e.visible&&this.props.visible?setTimeout(function(){return t.setState({visible:!0,changing:!1})}):e.visible&&!this.props.visible&&setTimeout(function(){return t.setState({changing:!1})},280)}},{key:"render",value:function(){var e=this.props,t=e.okText,a=e.onOk,n=e.onCancel,r=e.okButtonProps,s=this.state,o=s.visible,i=s.changing;return this.props.visible||i?Object(x.createPortal)(k.a.createElement("aside",{className:"ui-modal-cover"},k.a.createElement("div",{className:"cover"}),k.a.createElement("div",{className:"window"},k.a.createElement("div",{className:"window-shadow","data-is-hide":!o},k.a.createElement("div",{className:"body"},this.props.children),k.a.createElement("div",{className:"footer"},k.a.createElement("div",{className:"blank"}),k.a.createElement(ke.a,{onClick:n},"Cancel"),k.a.createElement(ke.a,Object.assign({type:"primary",onClick:a},r),t))))),document.body):null}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.changing||t.visible||!e.visible?t.changing||!t.visible||e.visible?null:{changing:!0,visible:!1}:{changing:!0}}}]),t}(E.Component));xe.defaultProps={okText:"OK",visible:!1,onCancel:function(){},onOk:function(){},okButtonProps:{}};var we,Ie,Ce,Ne,Te,Se,Le,Ae,De,ze,Pe,$e,Be,Re,Fe,Ye,He,Ue,Ve,Ge,Me,_e,We,Je,qe,Ke,Qe,Xe,Ze,et,tt=Object(Oe.a)((he=de=function(e){function t(){var e,a;Object(D.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(ie.a)(this,(e=Object(ce.a)(t)).call.apply(e,[this].concat(r)))).state={modalVisible:!1},a.handleInputChange=function(e){console.log(e),a.setState({title:e})},a.submit=function(){(0,a.context.store.addIssue)({title:a.input.input.value}),a.setState({modalVisible:!1})},a}return Object(le.a)(t,e),Object(z.a)(t,[{key:"render",value:function(){var e=this,t=this.state.modalVisible;return k.a.createElement(k.a.Fragment,null,k.a.createElement("button",{onClick:function(){return e.setState({modalVisible:!0})}},k.a.createElement(je.a,{type:"inbox"})),k.a.createElement(xe,{okText:"Add",visible:t,onCancel:function(){return e.setState({modalVisible:!1})},onOk:this.submit},k.a.createElement(Ee.a,{placeholder:"Unnamed Task",autoFocus:!0,ref:function(t){return e.input=t}})))}}]),t}(E.Component),de.contextTypes={store:pe.a.object},me=he))||me,at=(a(207),Object(Oe.a)((Ce=Ie=function(e){function t(){var e,a;Object(D.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(ie.a)(this,(e=Object(ce.a)(t)).call.apply(e,[this].concat(r)))).toggleSidebar=function(){var e=a.context.store,t=e.sidebarCollapsed;(0,e.setSidebarCollapse)(!t)},a.toggleRightBar=function(){var e=a.context.store,t=e.rightBarCollapsed;(0,e.setRightBarCollapse)(!t)},a.goToGithub=function(){var e=a.context.store.selectedIssueNumber;e&&_(e)},a.reload=function(){var e=a.context.store,t=e.loading,n=e.init;t||n()},a}return Object(le.a)(t,e),Object(z.a)(t,[{key:"render",value:function(){var e=this.context.store,t=e.sidebarCollapsed,a=e.selectedIssueNumber,n=e.loading;return k.a.createElement("header",{className:"app-header"},k.a.createElement("div",{className:"left-buttons"},k.a.createElement("button",{onClick:this.toggleSidebar},k.a.createElement(je.a,{type:t?"menu-unfold":"menu-fold"})),k.a.createElement("button",{onClick:this.reload},k.a.createElement(je.a,{type:"reload","data-is-loading":n>0})),k.a.createElement(tt,null)),k.a.createElement("div",{className:"page-title"},k.a.createElement(ge.c,null,ye.map(function(e){return k.a.createElement(ge.a,{key:e.path,path:e.path,exact:e.exact},e.node)}))),k.a.createElement("div",{className:"right-buttons"},k.a.createElement("button",{disabled:!a,onClick:this.goToGithub},k.a.createElement(je.a,{type:"github"})),k.a.createElement("button",{onClick:this.toggleRightBar},k.a.createElement(je.a,{type:"info-circle"}))))}}]),t}(E.Component),Ie.contextTypes={store:pe.a.object},we=Ce))||we),nt=(a(210),Object(Oe.a)((Se=Te=function(e){function t(){return Object(D.a)(this,t),Object(ie.a)(this,Object(ce.a)(t).apply(this,arguments))}return Object(le.a)(t,e),Object(z.a)(t,[{key:"logout",value:function(){localStorage.removeItem("issue-todo-token"),localStorage.removeItem("issue-todo-repo"),window.location.href="/"}},{key:"render",value:function(){var e=this.context.store.sidebarCollapsed;return k.a.createElement("div",{className:"app-sidebar","data-is-collapsed":e},k.a.createElement("div",{className:"sidebar-menu-group-title"},"Perspective"),ye.map(function(e){return k.a.createElement("div",{className:"sidebar-menu",key:e.path},k.a.createElement(ve.b,{to:e.path,exact:e.exact},e.node))}),k.a.createElement("div",{className:"login-info"},k.a.createElement("p",{className:"logout",onClick:this.logout},"repo:",k.a.createElement(je.a,{type:"logout"})),k.a.createElement("p",{className:"repo-url"},V)))}}]),t}(E.Component),Te.contextTypes={store:pe.a.object},Ne=Se))||Ne),rt=(a(211),a(38)),st=(a(213),a(128)),ot=a(92),it=a.n(ot),ct=a(68),lt=(a(215),st.a.CheckableTag),ut=Ee.a.TextArea,pt=Object(Oe.a)((De=Ae=function(e){function t(){var e,a;Object(D.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(ie.a)(this,(e=Object(ce.a)(t)).call.apply(e,[this].concat(r)))).handleLabelChange=function(e,t){var n=a.context.store,r=n.updateIssue,s=n.selectedIssue,o=s.labels;o=t?[].concat(Object(I.a)(o),[e]):o.filter(function(t){return t.name!==e.name}),r(s.number,{labels:o})},a.handleTitleChange=function(){var e=a.titleRef.textAreaRef.value,t=a.context.store;(0,t.updateIssue)(t.selectedIssue.number,{title:e})},a}return Object(le.a)(t,e),Object(z.a)(t,[{key:"render",value:function(){var e=this,t=this.context.store,a=t.rightBarCollapsed,n=t.selectedIssue,r=t.displayLabels,s=n||{},o=s.labels,i=s.title,c=s.created_at,l=s.updated_at;return k.a.createElement("div",{className:"app-rightbar","data-is-collapsed":a},n?k.a.createElement("div",null,k.a.createElement("div",{className:"app-rightbar-form-item"},k.a.createElement("label",null,"Title"),k.a.createElement("div",{className:"app-rightbar-form-item-body"},k.a.createElement(ut,{defaultValue:i,rows:4,onChange:this.handleTitleChange,ref:function(t){return e.titleRef=t}}))),k.a.createElement("div",{className:"app-rightbar-form-item"},k.a.createElement("label",null,"Label"),k.a.createElement("div",{className:"app-rightbar-form-item-body"},r.map(function(t){return k.a.createElement(lt,{key:t.id,checked:o.some(function(e){return e.name===t.name}),style:{"--label-font-color":Object(ct.decideFontColor)(t.color),"--label-back-color":"#".concat(t.color)},onChange:function(a){return e.handleLabelChange(t,a)}},t.name)}))),k.a.createElement("div",{className:"app-rightbar-form-item"},k.a.createElement("label",null,"Date"),k.a.createElement("div",{className:"app-rightbar-form-item-body"},"Created At: ",it()(c).format("YYYY/MM/DD HH:mm")),k.a.createElement("div",{className:"app-rightbar-form-item-body"},"Updated At: ",it()(l).format("YYYY/MM/DD HH:mm")))):k.a.createElement(rt.a,{description:"NO SELECTION"}))}}]),t}(E.Component),Ae.contextTypes={store:pe.a.object},Le=De))||Le,bt=(a(240),a(126)),mt=(a(219),function(e){function t(){var e,a;Object(D.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(ie.a)(this,(e=Object(ce.a)(t)).call.apply(e,[this].concat(r)))).state={token:"",repo:""},a.onTokenChange=function(e){return a.setState({token:e.target.value})},a.onRepoChange=function(e){return a.setState({repo:e.target.value})},a.login=Object(S.a)(T.a.mark(function e(){var t,n,r;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=a.state,n=t.token,r=t.repo,localStorage.setItem("issue-todo-token",n),localStorage.setItem("issue-todo-repo",/^\//.test(r)?r:"/".concat(r)),window.location.href="/";case 4:case"end":return e.stop()}},e)})),a}return Object(le.a)(t,e),Object(z.a)(t,[{key:"render",value:function(){var e=this.state,t=e.token,a=e.repo;return k.a.createElement("div",{className:"page-login"},k.a.createElement("div",{className:"main"},k.a.createElement(bt.a,{title:"Login"},k.a.createElement("div",{className:"form"},k.a.createElement("div",{className:"form-row"},k.a.createElement(Ee.a,{onChange:this.onTokenChange,value:t,placeholder:"GitHub API token"})),k.a.createElement("div",{className:"form-row"},k.a.createElement(Ee.a,{onChange:this.onRepoChange,value:a,placeholder:"Repo address, e.g: wangsijie/todo"})),k.a.createElement("div",{className:"form-row"},k.a.createElement(ke.a,{disabled:!t,onClick:this.login,type:"primary"},"GO"))))))}}]),t}(E.Component)),dt=(a(235),Object(Oe.a)(($e=Pe=function(e){function t(){var e,a;Object(D.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(ie.a)(this,(e=Object(ce.a)(t)).call.apply(e,[this].concat(r)))).handleCheckBoxClick=function(){var e=a.props.issue;e.$closed||(0,a.context.store.closeIssue)(e.number)},a.toggleFlag=function(){var e=a.props.issue;(0,a.context.store.setIssueFlag)(e.number,!e.$isImportant)},a.select=function(){var e=a.props.issue;(0,a.context.store.setSelectedIssueNumber)(e.number)},a}return Object(le.a)(t,e),Object(z.a)(t,[{key:"render",value:function(){var e=this.props.issue;return k.a.createElement("div",{className:"ui-issue",onClick:this.select,"data-is-selected":e.$selected},k.a.createElement("div",{className:"check-box",onClick:this.handleCheckBoxClick,"data-is-important":e.$isImportant},e.$closed&&k.a.createElement("div",{className:"closed"})),k.a.createElement("div",{className:"main"},k.a.createElement("div",{className:"title","data-is-closed":e.$closed},e.title),k.a.createElement("div",{className:"labels"},e.$displayLabels.map(function(e){return k.a.createElement("div",{className:"label",key:e.id,style:{backgroundColor:"#".concat(e.color),color:Object(ct.decideFontColor)(e.color)}},e.name)})),k.a.createElement("div",{className:"flag",onClick:this.toggleFlag},k.a.createElement(je.a,{type:"flag",theme:e.$isImportant?"twoTone":null}))))}}]),t}(E.Component),Pe.contextTypes={store:pe.a.object},ze=$e))||ze),ht=(a(236),Object(Oe.a)((Fe=Re=function(e){function t(){var e,a;Object(D.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(ie.a)(this,(e=Object(ce.a)(t)).call.apply(e,[this].concat(r)))).clearSelection=function(){(0,a.context.store.setSelectedIssueNumber)(0)},a}return Object(le.a)(t,e),Object(z.a)(t,[{key:"componentWillUnmount",value:function(){this.clearSelection()}},{key:"render",value:function(){var e=this.props.issues;return k.a.createElement("div",{className:"ui-issue-list"},k.a.createElement("div",{className:"ui-issue-list-body"},e.map(function(e){return k.a.createElement(dt,{key:e.number,issue:e})})),k.a.createElement("div",{className:"ui-issue-list-blank",onClick:this.clearSelection}))}}]),t}(E.Component),Re.contextTypes={store:pe.a.object},Be=Fe))||Be),ft=Object(Oe.a)((Ue=He=function(e){function t(){return Object(D.a)(this,t),Object(ie.a)(this,Object(ce.a)(t).apply(this,arguments))}return Object(le.a)(t,e),Object(z.a)(t,[{key:"render",value:function(){var e=this.context.store.inboxIssues;return k.a.createElement("div",null,k.a.createElement(ht,{issues:e}))}}]),t}(E.Component),He.contextTypes={store:pe.a.object},Ye=Ue))||Ye,vt=Object(Oe.a)((Me=Ge=function(e){function t(){return Object(D.a)(this,t),Object(ie.a)(this,Object(ce.a)(t).apply(this,arguments))}return Object(le.a)(t,e),Object(z.a)(t,[{key:"render",value:function(){var e=this.context.store.nextActionIssues;return k.a.createElement("div",null,k.a.createElement(ht,{issues:e}))}}]),t}(E.Component),Ge.contextTypes={store:pe.a.object},Ve=Me))||Ve,gt=Object(Oe.a)((Je=We=function(e){function t(){return Object(D.a)(this,t),Object(ie.a)(this,Object(ce.a)(t).apply(this,arguments))}return Object(le.a)(t,e),Object(z.a)(t,[{key:"render",value:function(){var e=this.context.store.listIssues;return k.a.createElement("div",null,k.a.createElement(ht,{issues:e}))}}]),t}(E.Component),We.contextTypes={store:pe.a.object},_e=Je))||_e,Ot=Object(Oe.a)((Qe=Ke=function(e){function t(){return Object(D.a)(this,t),Object(ie.a)(this,Object(ce.a)(t).apply(this,arguments))}return Object(le.a)(t,e),Object(z.a)(t,[{key:"render",value:function(){var e=this.context.store.importantIssues;return k.a.createElement("div",null,k.a.createElement(ht,{issues:e}))}}]),t}(E.Component),Ke.contextTypes={store:pe.a.object},qe=Qe))||qe,jt=(a(237),Object(Oe.a)((et=Ze=function(e){function t(){return Object(D.a)(this,t),Object(ie.a)(this,Object(ce.a)(t).apply(this,arguments))}return Object(le.a)(t,e),Object(z.a)(t,[{key:"componentDidMount",value:function(){var e=this.context.store.init;X()&&e()}},{key:"render",value:function(){return X()?"pending"===this.context.store.initState?k.a.createElement("div",{className:"app pending"},k.a.createElement(fe.a,{size:"large"})," Initializing..."):k.a.createElement("div",{className:"app"},k.a.createElement(ve.a,null,k.a.createElement(at,null),k.a.createElement("div",{className:"app-body"},k.a.createElement(nt,null),k.a.createElement("div",{className:"app-main"},k.a.createElement(ge.a,{path:"/",exact:!0,component:ft}),k.a.createElement(ge.a,{path:"/next-action",component:vt}),k.a.createElement(ge.a,{path:"/important",component:Ot}),k.a.createElement(ge.a,{path:"/list",component:gt})),k.a.createElement(pt,null)))):k.a.createElement(mt,null)}}]),t}(k.a.Component),Ze.contextTypes={store:pe.a.object},Xe=et))||Xe);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(238);w.a.render(k.a.createElement(be,{store:oe},k.a.createElement(jt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},68:function(e,t){e.exports.decideFontColor=function(e){return.299*parseInt(e.substr(0,2),16)+.587*parseInt(e.substr(2,2),16)+.114*parseInt(e.substr(4,2),16)>186?"#000000":"#ffffff"}}},[[131,1,2]]]);
//# sourceMappingURL=main.382d02d2.chunk.js.map