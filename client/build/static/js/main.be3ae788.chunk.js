(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{243:function(e,t,a){e.exports=a.p+"static/media/blacklogo.3740a154.png"},274:function(e,t,a){e.exports=a(575)},279:function(e,t,a){},361:function(e,t,a){},489:function(e,t,a){},558:function(e,t,a){},560:function(e,t,a){},562:function(e,t,a){},564:function(e,t,a){},570:function(e,t,a){},573:function(e,t,a){},575:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(39),o=a.n(l),c=(a(279),a(15)),i=a(16),s=a(19),u=a(17),m=a(18),h=a(593),d=a(157),p=a.n(d),b=a(242),E=a.n(b),v=function(){function e(){Object(c.a)(this,e)}return Object(i.a)(e,null,[{key:"authenticateUser",value:function(e){localStorage.setItem("token",e)}},{key:"isUserAuthenticated",value:function(){return null!==localStorage.getItem("token")}},{key:"deauthenticateUser",value:function(){localStorage.removeItem("token")}},{key:"getToken",value:function(){return localStorage.getItem("token")}}]),e}(),f=a(154),g=a(591),O=a(592),j=function(e){var t=e.component,a=Object(f.a)(e,["component"]);return r.a.createElement(g.a,Object.assign({},a,{render:function(e){return v.isUserAuthenticated()?r.a.createElement(t,Object.assign({},e,a)):r.a.createElement(O.a,{to:{pathname:"/",state:{from:e.location}}})}}))},y=function(e){var t=e.component,a=Object(f.a)(e,["component"]);return r.a.createElement(g.a,Object.assign({},a,{render:function(e){return v.isUserAuthenticated()?r.a.createElement(O.a,{to:{pathname:"/",state:{from:e.location}}}):r.a.createElement(t,Object.assign({},e,a))}}))},N=function(e){var t=e.component,a=Object(f.a)(e,["component"]);return r.a.createElement(g.a,Object.assign({},a,{render:function(e){return r.a.createElement(t,Object.assign({},e,a))}}))},C=a(243),w=a.n(C),S=(a(361),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"logoheader"},r.a.createElement("img",{src:w.a,alt:"blacklogo",className:"logo"}),r.a.createElement("nav",null))}}]),t}(n.Component)),k=a(584),A=a(577),F=a(588),D=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={authenticated:!1},a.toggleAuthenticateStatus=function(){a.setState({authenticated:v.isUserAuthenticated()})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.toggleAuthenticateStatus()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(A.a,{inverted:!0},r.a.createElement(F.a,{text:"Dashboard",pointing:!0,className:"link item"},r.a.createElement(F.a.Menu,null,r.a.createElement(F.a.Header,null,"Dashboard Details"),r.a.createElement(F.a.Item,{as:k.a,to:"/myaccount"},"My Account"),r.a.createElement(F.a.Item,{as:k.a,to:"/volunteers"},"Volunteers"),r.a.createElement(F.a.Item,{as:k.a,to:"/events"},"Events"),r.a.createElement(F.a.Item,{as:k.a,to:"/search"},"Search"))),r.a.createElement(A.a.Item,{as:k.a,to:"/logout"},"Logout"),r.a.createElement(A.a.Item,{position:"right",as:k.a,to:"/login"},"Login"),r.a.createElement(A.a.Item,{as:k.a,to:"/signup"},"SignUp")))}}]),t}(r.a.Component),T=a(589),I=(a(489),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).toggleAuthenticateStatus=function(){a.setState({authenticated:v.isUserAuthenticated()})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.toggleAuthenticateStatus()}},{key:"render",value:function(){return r.a.createElement(T.a,{color:"blue",className:"ui centered card"},r.a.createElement(T.a.Content,null,r.a.createElement(T.a.Header,null,"Volunteer Mommy"),v.isUserAuthenticated()?r.a.createElement(T.a.Meta,{style:{fontSize:"16px",color:"green"}},"Welcome! You are logged in."):r.a.createElement(T.a.Meta,{style:{fontSize:"16px",color:"red"}},"You are not logged in.")))}}]),t}(r.a.Component)),x=a(3),L=a.n(x),M=a(41),U=a.n(M),P={login:function(e){return U.a.post("/auth/login",e)},signUp:function(e){return U.a.post("/auth/signup",e)},dashboard:function(e){return U.a.get("/api/dashboard",{headers:{Authorization:"bearer ".concat(e)}})},adult:function(e,t){return U.a.post("/api/adult",t,{headers:{Authorization:"bearer ".concat(e)}})},user:function(e,t){return U.a.get("/api/user",t,{headers:{Authorization:"bearer ".concat(e)}})}},V=a(146),q=a(151),z=a.n(q),G=a(144),R=a.n(G),W=(a(558),function(e){var t=e.onSubmit,a=e.onChange,n=e.errors,l=e.successMessage,o=e.user;e.toggleAuthenticateStatus;return r.a.createElement(V.Card,{className:"login-container"},r.a.createElement("form",{action:"/",onSubmit:t},r.a.createElement("h2",{className:"card-heading"},"Login"),l&&r.a.createElement("p",{className:"success-message"},l),n.summary&&r.a.createElement("p",{className:"error-message"},n.summary),r.a.createElement("div",{className:"field-line-email"},r.a.createElement(R.a,{floatingLabelText:"Enter Email",name:"email",errorText:n.email,onChange:a,value:o.email})),r.a.createElement("div",{className:"field-line-password"},r.a.createElement(R.a,{floatingLabelText:"Enter Password",type:"password",name:"password",onChange:a,errorText:n.password,value:o.password})),r.a.createElement("div",{className:"button-line"},r.a.createElement(z.a,{type:"submit",label:"Log in",primary:!0})),r.a.createElement(V.CardText,null,"Don't have an account? ",r.a.createElement(k.a,{to:"/signup"},"Create one"),".")))}),H=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={errors:{},successMessage:"",user:{email:"",password:""}},a.processForm=function(e){e.preventDefault();var t=a.state.user,n=t.email,r=t.password;P.login({email:n,password:r}).then(function(e){v.authenticateUser(e.data.token),console.log(e,"the is reponse object from api"),localStorage.setItem("userId",e.data.user.id),a.props.toggleAuthenticateStatus(),a.props.history.push("/dashboard")}).catch(function(e){var t=e.res,n=t.data.errors?t.data.errors:{};n.summary=t.data.message,a.setState({errors:n})})},a.changeUser=function(e){var t=e.target.name,n=a.state.user;n[t]=e.target.value,a.setState({user:n})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("successMessage"),t="";e&&(t=e,localStorage.removeItem("successMessage")),this.setState({successMessage:t})}},{key:"componentWillUnmount",value:function(){this.setState({errors:{}})}},{key:"render",value:function(){return r.a.createElement(W,{onSubmit:this.processForm,onChange:this.changeUser,errors:this.state.errors,successMessage:this.state.successMessage,user:this.state.user})}}]),t}(r.a.Component);H.contextTypes={router:L.a.object.isRequired};var Y=H,B=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){v.deauthenticateUser(),this.props.history.push("/")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Logging out..."))}}]),t}(r.a.Component);B.contextTypes={router:L.a.object.isRequired};var J=B,_=(a(560),function(e){var t=e.onSubmit,a=e.onChange,n=e.errors,l=e.user;return r.a.createElement(V.Card,{className:"signup-container"},r.a.createElement("form",{action:"/",onSubmit:t},r.a.createElement("h2",null,"Sign Up"),n.summary&&r.a.createElement("p",{className:"error-message"},n.summary),r.a.createElement("div",{className:"field-line"},r.a.createElement(R.a,{className:"text",floatingLabelText:"Name",name:"name",errorText:n.name,onChange:a,value:l.name})),r.a.createElement("div",{className:"field-line"},r.a.createElement(R.a,{floatingLabelText:"Email",name:"email",errorText:n.email,onChange:a,value:l.email})),r.a.createElement("div",{className:"field-line"},r.a.createElement(R.a,{floatingLabelText:"Password",type:"password",name:"password",onChange:a,errorText:n.password,value:l.password})),r.a.createElement("div",{className:"button-line"},r.a.createElement(z.a,{type:"submit",label:"Create New Account",primary:!0})),r.a.createElement(V.CardText,null,"Already have an account? ",r.a.createElement(k.a,{to:"/login"},"Log in"))))}),$=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={errors:{},user:{email:"",name:"",password:""}},a.processForm=function(e){e.preventDefault();var t=a.state.user,n=t.name,r=t.email,l=t.password;P.signUp({name:n,email:r,password:l}).then(function(e){localStorage.setItem("successMessage",e.data.message),a.props.history.push("/login"),a.setState({errors:{}})}).catch(function(e){var t=e.response,n=t.data.errors?t.data.errors:{};n.summary=t.data.message,a.setState({errors:n})})},a.changeUser=function(e){var t=e.target.name,n=a.state.user;n[t]=e.target.value,a.setState({user:n})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(_,{onSubmit:this.processForm,onChange:this.changeUser,errors:this.state.errors,user:this.state.user})}}]),t}(r.a.Component);$.contextTypes={router:L.a.object.isRequired};var K=$,Q=(a(562),function(e){var t=e.secretData,a=e.user;return r.a.createElement(T.a,{color:"blue",className:"ui centered card"},r.a.createElement(T.a.Content,null,r.a.createElement(T.a.Header,null,"Dashboard"),r.a.createElement(T.a.Description,null,"Page access granted ONLY after authentication."),t&&r.a.createElement(T.a.Meta,{style:{fontSize:"16px",color:"green"}},"Welcome ",r.a.createElement("strong",null,a.name),"!",r.a.createElement("br",null),t)))}),X=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={secretData:"",user:{}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;P.dashboard(v.getToken()).then(function(t){e.setState({secretData:t.data.message,user:t.data.user})})}},{key:"render",value:function(){return r.a.createElement(Q,{secretData:this.state.secretData,user:this.state.user})}}]),t}(r.a.Component),Z=a(152),ee=a(45),te=a(20),ae=a(586),ne=(a(564),function(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:e.newAdult,className:"form-label"},e.title),r.a.createElement("input",{id:e.id,name:e.name,input:e.input,value:e.value,onChange:e.handleChange,placeholder:e.placeholder}))}),re=function(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:e.name}," ",e.title," "),r.a.createElement("select",{className:"form-control",id:e.id,name:e.name,onChange:e.handleChange},r.a.createElement("option",{value:" ",disabled:!0}," ",e.placeholder," "),e.options.map(function(e){return r.a.createElement("option",{key:e,value:e,label:e},e)})))},le=function(e){return r.a.createElement("button",{style:e.style,className:"primary"===e.type?"btn btn-primary":"btn btn-secondary",onClick:function(t){return e.action(t)}},e.title)},oe=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={newAdult:{firstName:"",lastName:"",email:"",phoneNumber:"",relationship:[]},relationshipOptions:["Parent","Grandparent","Relative","Caregiver"]},a.handleFirstName=a.handleFirstName.bind(Object(te.a)(Object(te.a)(a))),a.handleLastName=a.handleLastName.bind(Object(te.a)(Object(te.a)(a))),a.handleEmail=a.handleEmail.bind(Object(te.a)(Object(te.a)(a))),a.handlePhoneNumber=a.handlePhoneNumber.bind(Object(te.a)(Object(te.a)(a))),a.handleFormSubmit=a.handleFormSubmit.bind(Object(te.a)(Object(te.a)(a))),a.handleClearForm=a.handleClearForm.bind(Object(te.a)(Object(te.a)(a))),a.handleInput=a.handleInput.bind(Object(te.a)(Object(te.a)(a))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleFirstName",value:function(e){var t=this;e.preventDefault();var a=e.target.value;this.setState(function(e){return{newAdult:Object(ee.a)({},e.newAdult,{firstName:a})}},function(){return console.log(t.state.newAdult)})}},{key:"handleLastName",value:function(e){e.preventDefault();var t=e.target.value;this.setState(function(e){return{newAdult:Object(ee.a)({},e.newAdult,{lastName:t})}})}},{key:"handleEmail",value:function(e){e.preventDefault();var t=e.target.value;this.setState(function(e){return{newAdult:Object(ee.a)({},e.newAdult,{email:t})}})}},{key:"handlePhoneNumber",value:function(e){e.preventDefault();var t=e.target.value;this.setState(function(e){return{newAdult:Object(ee.a)({},e.newAdult,{phoneNumber:t})}})}},{key:"handleInput",value:function(e){e.preventDefault();var t=e.target.value,a=e.target.child;this.setState(function(e){return{newAdult:Object(ee.a)({},e.newAdult,Object(Z.a)({},a,t))}})}},{key:"handleFormSubmit",value:function(e){e.preventDefault(),console.log(localStorage.getItem("userId"),"this should be user id");var t=v.getToken(),a=this.state.newAdult;a.user=localStorage.getItem("userId");var n=this;P.adult(t,a).then(function(e){n.props.toggleChild(e.data._id)})}},{key:"handleClearForm",value:function(e){e.preventDefault(),this.setState({newAdult:{firstName:"",lastName:"",email:"",phoneNumber:"",relationship:[]}})}},{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement(ae.a,{onSubmit:this.handleFormSubmit},r.a.createElement(ae.a.Group,{inline:!0},r.a.createElement(ne,{type:"text",firstname:"First Name",value:this.state.newAdult.firstName,placeholder:"Enter First Name",handleChange:this.handleFirstName}),"",r.a.createElement(ne,{type:"text",lastName:"Last Name",value:this.state.newAdult.lastName,placeholder:"Enter Last Name",handleChange:this.handleLastName}),"",r.a.createElement(ne,{type:"text",email:"Email",value:this.state.newAdult.email,placeholder:"Enter Valid Email",handleChange:this.handleEmail}),"",r.a.createElement(ne,{type:"text",phoneNumber:"Phone",value:this.state.newAdult.phoneNumber,placeholder:"Enter Phone Number",handleChange:this.handlePhoneNumber}),""),r.a.createElement(ae.a.Group,{inline:!0},r.a.createElement("div",{className:"selection"},r.a.createElement(re,{title:"Relationship",name:"Relationship to Enrolled Child(ren)",options:this.state.relationshipOptions,value:this.state.newAdult.children,placeholder:"Select Relationship",handleChange:this.handleInput}))),r.a.createElement(ae.a.Group,{className:"field-buttons"},r.a.createElement("div",{className:"submit"},r.a.createElement(le,{action:this.handleFormSubmit,type:"primary",title:"Submit",style:ce})),r.a.createElement("div",{className:"clear"},r.a.createElement(le,{action:this.handleClearForm,type:"secondary",title:"Clear",style:ce})))))}}]),t}(n.Component),ce={margin:"10px 10px 10px 10px"},ie=oe,se=(a(570),function(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:e.name}," ",e.title," "),r.a.createElement("select",{className:"form-control",id:e.id,name:e.name,onChange:e.handleChange,onClick:e.handleClick},r.a.createElement("option",{value:" ",disabled:!0}," ",e.placeholder," "),e.options.map(function(e){return r.a.createElement("option",{key:e.fullName,value:e._id,label:e.fullName},e.fullName)})))}),ue=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={newChild:{firstName:"",lastName:"",teacher:"",parent:a.props.adultId},parentOptions:[],newTeacher:{fullName:"",grade:""},teacherOptions:[]},a.handleFirstName=a.handleFirstName.bind(Object(te.a)(Object(te.a)(a))),a.handleLastName=a.handleLastName.bind(Object(te.a)(Object(te.a)(a))),a.handleFormSubmit=a.handleFormSubmit.bind(Object(te.a)(Object(te.a)(a))),a.handleClearForm=a.handleClearForm.bind(Object(te.a)(Object(te.a)(a))),a.handleTeacherInput=a.handleTeacherInput.bind(Object(te.a)(Object(te.a)(a))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleFirstName",value:function(e){var t=this;e.preventDefault();var a=e.target.value;this.setState(function(e){return{newChild:Object(ee.a)({},e.newChild,{firstName:a})}},function(){return console.log(t.state.newChild)})}},{key:"handleLastName",value:function(e){e.preventDefault();var t=e.target.value;this.setState(function(e){return{newChild:Object(ee.a)({},e.newChild,{lastName:t})}})}},{key:"handleTeacherInput",value:function(e){var t=e.target.value;console.log(t,"I think this should be the teacher"),this.setState(function(e){return{newChild:Object(ee.a)({},e.newChild,{teacher:t})}})}},{key:"handleFormSubmit",value:function(e){var t=this;e.preventDefault();var a=v.getToken(),n=this.state.newChild;console.log(n),M.post("/api/child",n,{headers:{Authorization:"bearer ".concat(a)}}).then(function(e){t.setState({childData:e.data}),console.log(e),console.log(e.data)})}},{key:"componentDidMount",value:function(){var e=this,t=v.getToken();M.get("/api/teacher",{headers:{Authorization:"bearer ".concat(t)}}).then(function(t){e.setState({teacherOptions:t.data})})}},{key:"handleClearForm",value:function(e){e.preventDefault(),this.setState({newChild:{firstName:"",lastName:"",teacher:"",parent:""},newTeacher:{fullName:"",grade:""}})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container-wrapper"},r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement(ne,{type:"text",firstname:"First Name",value:this.state.newChild.firstName,placeholder:"Enter First Name",handleChange:this.handleFirstName}),"",r.a.createElement(ne,{type:"text",lastName:"Last Name",value:this.state.newChild.lastName,placeholder:"Enter Last Name",handleChange:this.handleLastName}),"",r.a.createElement("div",{className:"selection"},r.a.createElement(se,{title:"Teacher",name:"Teacher",options:this.state.teacherOptions,value:this.state.newChild.teacher,placeholder:"Select Teacher",handleChange:this.handleTeacherInput}),""),r.a.createElement("div",{className:"submit"},r.a.createElement(le,{action:this.handleFormSubmit,type:"primary",title:"Submit",style:me}),""),r.a.createElement("div",{className:"clear"},r.a.createElement(le,{action:this.handleClearForm,type:"secondary",title:"Clear",style:me}),"")),this.state&&this.state.childData&&r.a.createElement("div",null,"Details entered successfully"))}}]),t}(n.Component),me={margin:"10px 10px 10px 10px"},he=ue,de=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={user:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"ComponentDidMount",value:function(){var e=this,t=v.getUser(),a=v.getToken();P.user(a,t).then(function(e){return e.json()}).then(function(t){e.setState({isLoggedIn:!0,user:t})})}},{key:"render",value:function(){var e=this.state,t=(e.isLoggedIn,e.user);return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("ul",null,t.map(function(e){return r.a.createElement("li",{key:e.id},"Name: ",e.name," | Email: ",e.email)}))),r.a.createElement("div",null),r.a.createElement("div",null,r.a.createElement("h1",null,"Volunteers"),r.a.createElement(ie,null),r.a.createElement("button",null,"Add New Volunteer"),r.a.createElement("button",null,"Delete Volunteer")),r.a.createElement("div",null,r.a.createElement("h1",null,"Child(ren)"),r.a.createElement(he,null),r.a.createElement("button",null,"Add New Volunteer"),r.a.createElement("button",null,"Delete Volunteer")))}}]),t}(r.a.Component),pe=a(585),be=function(e){return r.a.createElement("div",null,r.a.createElement("h3",null,"Upcoming Events"),r.a.createElement(ae.a,null,r.a.createElement(ae.a.Group,{widths:"equal"},r.a.createElement(ae.a.Field,{id:"form-input-control-event-name",control:pe.a,label:"Event Name",placeholder:"Event Name"}),r.a.createElement(ae.a.Field,{id:"form-input-control-event-date",control:pe.a,label:"Event Date",placeholder:"Event Date"}),r.a.createElement(ae.a.Field,{id:"form-input-control-event-time",control:pe.a,label:"Event Time",placeholder:"Event Time"}),r.a.createElement(ae.a.Field,{id:"form-input-control-child-name",control:pe.a,label:"Child Name",placeholder:"Child Name"})),r.a.createElement(ae.a.Group,{widths:"equal"},r.a.createElement(ae.a.Field,{id:"form-input-control-event-name",control:pe.a,label:"Event Name",placeholder:"Event Name"}),r.a.createElement(ae.a.Field,{id:"form-input-control-event-date",control:pe.a,label:"Event Date",placeholder:"Event Date"}),r.a.createElement(ae.a.Field,{id:"form-input-control-event-time",control:pe.a,label:"Event Time",placeholder:"Event Time"}),r.a.createElement(ae.a.Field,{id:"form-input-control-child-name",control:pe.a,label:"Child Name",placeholder:"Child Name"}))),r.a.createElement("h3",null,"Past Events"),r.a.createElement(ae.a,null,r.a.createElement(ae.a.Group,{widths:"equal"},r.a.createElement(ae.a.Field,{id:"form-input-control-event-name",control:pe.a,label:"Event Name",placeholder:"Event Name"}),r.a.createElement(ae.a.Field,{id:"form-input-control-event-date",control:pe.a,label:"Event Date",placeholder:"Event Date"}),r.a.createElement(ae.a.Field,{id:"form-input-control-event-time",control:pe.a,label:"Event Time",placeholder:"Event Time"}),r.a.createElement(ae.a.Field,{id:"form-input-control-child-name",control:pe.a,label:"Child Name",placeholder:"Child Name"})),r.a.createElement(ae.a.Group,{widths:"equal"},r.a.createElement(ae.a.Field,{id:"form-input-control-event-name",control:pe.a,label:"Event Name",placeholder:"Event Name"}),r.a.createElement(ae.a.Field,{id:"form-input-control-event-date",control:pe.a,label:"Event Date",placeholder:"Event Date"}),r.a.createElement(ae.a.Field,{id:"form-input-control-event-time",control:pe.a,label:"Event Time",placeholder:"Event Time"}),r.a.createElement(ae.a.Field,{id:"form-input-control-child-name",control:pe.a,label:"Child Name",placeholder:"Child Name"}))))},Ee=a(587),ve=function(e){return r.a.createElement(Ee.a,{panes:e.tabList.map(function(e){return{menuItem:e.tabName,render:function(){return r.a.createElement(Ee.a.Pane,null," ",r.a.createElement(e.Component,null))}}}),defaultActiveIndex:0})},fe=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={tabList:[{tabName:"My Details",Component:de},{tabName:"My Events",Component:be}]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ve,{tabList:this.state.tabList}))}}]),t}(n.Component),ge=function(e){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("input",{placeholder:"EVENT TITLE"})," ",r.a.createElement("br",null),r.a.createElement("input",{placeholder:"EVENT DESCRIPTION"})),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"EVENT DETAILS"})))},Oe=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={tabList:[{tabName:"Events Under Construction",Component:ge}]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ve,{tabList:this.state.tabList}))}}]),t}(n.Component),je=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showChild:!1},a.toggleChild=function(e){a.setState({showChild:!0,adultId:e})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Adult Volunteer"),r.a.createElement(ie,{toggleChild:this.toggleChild}),r.a.createElement("h1",null,"Child of Volunteer"),this.state.showChild&&r.a.createElement(he,{adultId:this.state.adultId}))}}]),t}(n.Component),ye=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={query:""},a.handleInputchange=function(){a.setState({query:a.search.value},function(){})},a.getInfo=function(){M.get("/api/teacher").then(function(e){var t=e.data;a.setState({results:t.data})})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("form",null,r.a.createElement("input",{placeholder:"Search for volunteers...",ref:function(t){return e.search=t},onChange:this.handleInputChange}),r.a.createElement("h1",null,"Search Page Under Construction"))}}]),t}(n.Component),Ne=(a(573),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={authenticated:!1},a.toggleAuthenticateStatus=function(){a.setState({authenticated:v.isUserAuthenticated()})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.toggleAuthenticateStatus()}},{key:"render",value:function(){return r.a.createElement(E.a,{muiTheme:p()()},r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement(D,null),r.a.createElement(N,{exact:!0,path:"/",component:I,toggleAuthenticateStatus:this.toggleAuthenticateStatus}),r.a.createElement(j,{path:"/dashboard",component:X}),r.a.createElement(y,{path:"/login",component:Y,toggleAuthenticateStatus:this.toggleAuthenticateStatus}),r.a.createElement(y,{path:"/signup",component:K}),r.a.createElement(j,{path:"/myaccount",component:fe}),r.a.createElement(j,{path:"/volunteers",component:je}),r.a.createElement(j,{path:"/events",component:Oe}),r.a.createElement(j,{path:"/search",component:ye}),r.a.createElement(j,{path:"/logout",component:J}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[274,2,1]]]);
//# sourceMappingURL=main.be3ae788.chunk.js.map