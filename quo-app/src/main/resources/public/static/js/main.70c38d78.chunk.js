(this["webpackJsonpvdis-ui"]=this["webpackJsonpvdis-ui"]||[]).push([[0],{33:function(e,t,a){e.exports=a(71)},38:function(e,t,a){},39:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(31),l=a.n(r),s=(a(38),a(39),a(1));var i=Object(s.j)((function(e){return c.a.createElement("div",{className:"App"},c.a.createElement("main",{role:"main",className:"container jumbotron"},c.a.createElement("div",{className:"jumbotron"},c.a.createElement("h1",{className:"mb-3"},"Vaik\u0173 dar\u017eeli\u0173 informacin\u0117 sistema"))))})),o=a(13),m=(a(44),a(7)),u=a.n(m),p=a(14),d=a(9),h=a(10),v=a(12),f=a(11),b=(a(46),a(3)),E=a.n(b),g=function(e,t){var a=e.email,n=e.pass,r=e.onPassChange,l=e.onEmailChange,s=e.onSubmit,i=e.name,o=e.onLogOut,m=e.answer;return c.a.createElement("span",{className:"login-container"},c.a.createElement("form",{onSubmit:s},""===i&&c.a.createElement("div",{className:"form-row align-items-center"},""!==m&&c.a.createElement("div",{className:"col-auto"},c.a.createElement("div",{className:"alert alert-primary",role:"alert"},m)),c.a.createElement("div",{className:"col-auto"},c.a.createElement("input",{className:"form-control",placeholder:"El. pa\u0161tas",type:"text",value:a,onChange:l})),c.a.createElement("div",{className:"col-auto"},c.a.createElement("input",{className:"form-control",placeholder:"Slapta\u017eodis",type:"password",value:n,onChange:r})),c.a.createElement("div",{className:"formcol-auto"},c.a.createElement("button",{type:"submit",className:"btn btn-success"},"Prisijungti"))),""!==i&&c.a.createElement("div",{className:"form-row align-items-center"},c.a.createElement("div",{className:"col-auto"},c.a.createElement("span",{className:"answer"},i)),c.a.createElement("div",{className:"col-auto"},c.a.createElement("button",{type:"button",onClick:o,className:"btn btn-danger"},"Atsijungti")))))},y=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).onEmailChange=function(e){n.setState({email:e.target.value})},n.onPassChange=function(e){n.setState({pass:e.target.value})},n.onSubmit=function(e){n.doLogin(),e.preventDefault()},n.doLogin=Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new URLSearchParams).append("username",n.state.email),t.append("password",n.state.pass),e.prev=3,e.next=6,E.a.post("".concat("/vdis-app","/login"),t,{headers:{"Content-type":"application/x-www-form-urlencoded"}});case 6:n.handleLoggedUser(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),401===e.t0.response.status?n.setState({answer:"Neteisingai  \u012fved\u0117te el. pa\u0161t\u0105 arba slapta\u017eod\u012f"}):403===e.t0.response.status&&n.setState({answer:"J\u016bs neturite teis\u0117s prieiti prie \u0161i\u0173 duomen\u0173"});case 12:case"end":return e.stop()}}),e,null,[[3,9]])}))),n.onLogOut=function(e){n.doLogOut(),e.preventDefault()},n.doLogOut=Object(p.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("".concat("/vdis-app","/logout"));case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:n.setState({name:""}),n.props.history.push("/");case 9:case"end":return e.stop()}}),e,null,[[0,5]])}))),n.handleLoggedUser=Object(p.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("".concat("/vdis-app","/api/user/loggedUsername"));case 3:if("not logged"===(t=e.sent.data)){e.next=9;break}return e.next=7,E.a.get("".concat("/vdis-app","/api/user/").concat(t,"/"));case 7:a=e.sent.data.role,n.setState({name:t+" ("+a+")"});case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("Klaida: ",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])}))),n.state={email:"",pass:"",name:"",answer:""},n}return Object(h.a)(a,[{key:"render",value:function(){return c.a.createElement(g,{email:this.state.email,pass:this.state.pass,onEmailChange:this.onEmailChange,onPassChange:this.onPassChange,onSubmit:this.onSubmit,name:this.state.name,onLogOut:this.onLogOut,answer:this.state.answer})}},{key:"componentDidMount",value:function(){this.handleLoggedUser()}}]),a}(n.Component),N=Object(s.j)(y);function k(){return c.a.createElement("div",{className:"topnav"},c.a.createElement(o.b,{className:"a",to:"/"},"Pagrindinis"),c.a.createElement(o.b,{className:"a",to:"/specialisto_eiles"},"\u0160vietimo specialisto eil\u0117s"),c.a.createElement(o.b,{className:"a",to:"/eiles_form"},"Forma"),c.a.createElement("div",{className:"login-container"},c.a.createElement(N,null)))}a(64),a(65);Object(s.j)((function(e){return console.log(e.title),c.a.createElement("div",{className:"modal fade",id:"kazkas",tabindex:"-1","aria-labelledby":"kitas","aria-hidden":"true"},c.a.createElement("div",{className:"modal-dialog"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-header"},c.a.createElement("h5",{className:"modal-title",id:"kitas"},"D\u0117mesio!"),c.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},c.a.createElement("span",{"aria-hidden":"true"}))),c.a.createElement("div",{className:"modal-body"},e.children),c.a.createElement("div",{className:"modal-footer"},c.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"U\u017edaryti"),c.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:e.handleDelete},"I\u0161trinti")))))})),a(66);var j=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleTitle=function(e){return n.setState({title:e.target.value})},n.handleYear=function(e){e.target.value<2e3||n.setState({year:e.target.value})},n.handleActive=function(e){console.log("value: ",e.target.checked),n.setState({active:e.target.checked})},n.doSubmit=Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={title:n.state.title,year:n.state.year,active:n.state.active},e.prev=1,e.next=4,E.a.post("".concat("/vdis-app","/api/row/"),t);case 4:n.props.history.push("/specialisto_eiles"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.log("klaida: ",e.t0),400===e.t0.response.status&&(n.setState({error:"Kurti aktyvios eil\u0117s negalima, nes kita eil\u0117 jau yra aktyvuota."}),console.log("klaida: ",e.t0.response));case 11:case"end":return e.stop()}}),e,null,[[1,7]])}))),n.handleSubmit=function(e){n.doSubmit(),e.preventDefault()},n.componentDidMount=function(){E.a.get("".concat("/vdis-app","/api/row/").concat(n.state.title,"/").concat(n.state.year)).then((function(e){n.setState({title:e.data.title,year:n.state.year,active:n.state.active})})).catch((function(e){console.log("Klaida skaitant eiles: ",e)}))},console.log(e),n.state={currentTitle:n.props.title,currentYear:n.props.year},n}return Object(h.a)(a,[{key:"render",value:function(){return c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("div",{className:"form-row align-items-center"},c.a.createElement("div",{className:"col-sm-3 my-1"},c.a.createElement("label",{className:"sr-only",for:"inlineFormInputName"},"Pavadinimas (",this.state.title,"):"),c.a.createElement("input",{type:"text",className:"form-control",id:"inlineFormInputName",value:this.state.title,onChange:this.handleTitle,placeholder:this.state.title})),c.a.createElement("div",{className:"col-sm-3 my-1"},c.a.createElement("label",{className:"sr-only",for:"inlineFormInputName"},"  Metai (",this.state.year,"):"),c.a.createElement("input",{type:"number",min:2e3,max:3e3,onChange:this.handleYear,className:"form-control",id:"inlineFormInputName",placeholder:"Eil\u0117s metai"})),c.a.createElement("div",{className:"col-auto my-1"},c.a.createElement("div",{className:"form-check"},c.a.createElement("input",{className:"form-check-input",type:"checkbox",checked:this.state.active,onChange:this.handleActive,id:"autoSizingCheck2"}),c.a.createElement("label",{className:"form-check-label",for:"autoSizingCheck2"},this.state.active?"Aktyvi":"Neaktyvi"," eil\u0117"))),c.a.createElement("div",{className:"col-auto my-1"},c.a.createElement("button",{type:"submit",className:"btn btn-primary"},"I\u0161saugoti")),c.a.createElement("h3",null,this.props.pavadinimas)),"true"==this.state.active&&c.a.createElement("div",{className:"col-auto"},c.a.createElement("div",{className:"alert alert-primary",role:"alert"},this.state.error)))}}]),a}(n.Component),S=Object(s.j)(j),w=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,this.props.pavadinimas),c.a.createElement("td",{type:"number"},this.props.metai),c.a.createElement("td",null,this.props.aktyvus?"Aktyvi":"Neaktyvi")))}}]),a}(n.Component),O=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){E.a.get("".concat("/vdis-app","/api/row")).then((function(e){n.setState({eiles:e.data})})).catch((function(e){console.log("Klaida skaitant eiles: ",e)}))},n.handleDelete=function(e,t,a){console.log("it works with remove!"),E.a.delete("".concat("/vdis-app","/api/row/").concat(t,"/").concat(a)).then((function(e){E.a.get("".concat("/vdis-app","/api/row")).then((function(e){n.setState({eiles:e.data})})).catch((function(e){console.log("Klaida skaitant eiles: ",e)})),console.log(e.data)})).catch((function(e){console.log(e)})),e.preventDefault()},n.handleEdit=function(e,t,a){return n.props.history.push("/edit/".concat(t,"/").concat(a))},n.state={eiles:[]},n}return Object(h.a)(a,[{key:"render",value:function(){if(this.state.eiles===[])return c.a.createElement("div",null,"Duomenys dar kraunami... Pra\u0161ome palaukti...");var e=this.state.eiles.map((function(e,t){return c.a.createElement(w,{key:e.title+e.year,pavadinimas:e.title,metai:e.year,aktyvus:e.active})}));return c.a.createElement("table",{className:"table table-hover"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"Pavadinimas"),c.a.createElement("th",{scope:"col"},"Metai"),c.a.createElement("th",{scope:"col"},"Aktyvi/Neaktyvi eil\u0117"),c.a.createElement("th",{scope:"col"},"\xa0"))),e)}}]),a}(n.Component),C=Object(s.j)(O),x=(a(67),a(68),a(70),function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleTitle=function(e){return n.setState({title:e.target.value})},n.handleYear=function(e){e.target.value<2e3||n.setState({year:e.target.value})},n.handleActive=function(e){console.log("value: ",e.target.checked),n.setState({active:e.target.checked})},n.doSubmit=Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={title:n.state.title,year:n.state.year,active:n.state.active},e.prev=1,e.next=4,E.a.post("".concat("/vdis-app","/api/row/"),t);case 4:n.props.history.push("/specialisto_eiles"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.log("klaida: ",e.t0),400===e.t0.response.status&&(n.setState({error:"Kurti aktyvios eil\u0117s negalima, nes kita eil\u0117 jau yra aktyvuota."}),console.log("klaida: ",e.t0.response));case 11:case"end":return e.stop()}}),e,null,[[1,7]])}))),n.handleSubmit=function(e){n.doSubmit(),e.preventDefault()},n.state={title:"",year:2e3,active:!1,error:""},n}return Object(h.a)(a,[{key:"render",value:function(){return c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("div",{className:"form-row align-items-center"},c.a.createElement("div",{className:"col-sm-3 my-1"},c.a.createElement("label",{className:"sr-only",for:"inlineFormInputName"},"Pavadinimas (",this.state.title,"):"),c.a.createElement("input",{type:"text",className:"form-control",id:"inlineFormInputName",value:this.state.title,onChange:this.handleTitle,placeholder:"Eil\u0117s pavadinimas"})),c.a.createElement("div",{className:"col-sm-3 my-1"},c.a.createElement("label",{className:"sr-only",for:"inlineFormInputName"},"  Metai (",this.state.year,"):"),c.a.createElement("input",{type:"number",min:2e3,max:3e3,onChange:this.handleYear,className:"form-control",id:"inlineFormInputName",placeholder:"Eil\u0117s metai"})),c.a.createElement("div",{className:"col-auto my-1"},c.a.createElement("div",{className:"form-check"},c.a.createElement("input",{className:"form-check-input",type:"checkbox",checked:this.state.active,onChange:this.handleActive,id:"autoSizingCheck2"}),c.a.createElement("label",{className:"form-check-label",for:"autoSizingCheck2"},this.state.active?"Aktyvi":"Neaktyvi"," eil\u0117"))),c.a.createElement("div",{className:"col-auto my-1"},c.a.createElement("button",{type:"submit",className:"btn btn-primary"},"I\u0161saugoti"))),"true"==this.state.active&&c.a.createElement("div",{className:"col-auto"},c.a.createElement("div",{className:"alert alert-primary",role:"alert"},this.state.error)))}}]),a}(n.Component)),D=Object(s.j)(x);E.a.defaults.withCredentials=!0;var I=function(e){return c.a.createElement("div",null,c.a.createElement(k,null),c.a.createElement("footer",null,e.children))};l.a.render(c.a.createElement(o.a,{basename:"/vdis-app"},c.a.createElement(I,null,c.a.createElement(s.c,null,c.a.createElement(s.a,{exact:!0,path:"/",component:i}),c.a.createElement(s.a,{path:"/specialisto_eiles",component:C}),c.a.createElement(s.a,{path:"/eiles_form",component:D}),c.a.createElement(s.a,{path:"/edit/:title/:year",component:S}),c.a.createElement(s.a,{path:"/demonstracija",component:function(e){var t=e.match.params.id;return c.a.createElement("div",null,"At route: ",e.location.pathname," (ID: ",t,")",c.a.createElement("button",{onClick:function(){return e.history.push("/")}},"Go Home"),c.a.createElement("pre",null,JSON.stringify(e,null,2)))}}),c.a.createElement(s.a,{path:"*",component:function(e){return c.a.createElement("div",null,"Route did not match",c.a.createElement("button",{onClick:function(){return e.history.push("/")}},"Go Home"))}})))),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.70c38d78.chunk.js.map