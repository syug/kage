
          window.__NEXT_REGISTER_PAGE('/password-reset', function() {
            var comp = module.exports=webpackJsonp([7],{172:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=a(3),l=n(u),r=a(1),s=n(r),f=a(2),o=n(f),d=a(5),i=n(d),c=a(4),m=n(c),p=a(0),h=n(p),_=a(44),v=n(_),E=a(370),y=n(E),w=a(45),b=n(w),P=function(e){function t(){return(0,s.default)(this,t),(0,i.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){return h.default.createElement(v.default,null,h.default.createElement(y.default,null))}}]),t}(h.default.Component);t.default=(0,b.default)(P)},370:function(e,t,a){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(13),r=u(l),s=a(12),f=u(s),o=a(19),d=u(o),i=a(3),c=u(i),m=a(1),p=u(m),h=a(2),_=u(h),v=a(5),E=u(v),y=a(4),w=u(y),b=a(28),P=u(b),g=a(0),S=u(g),C=a(11),R=a(10),M=n(R),k=a(15),x=n(k),O=a(33),j=u(O),F=a(7),z=function(e){function t(){var e,a,n,u,l=this;(0,p.default)(this,t);for(var s=arguments.length,o=Array(s),i=0;i<s;i++)o[i]=arguments[i];return a=n=(0,E.default)(this,(e=t.__proto__||(0,c.default)(t)).call.apply(e,[this].concat(o))),n.state={email:""},n.handleChange=function(e){return n.setState((0,d.default)({},e.target.name,e.target.value))},n.handleSubmit=function(){var e=(0,f.default)(r.default.mark(function e(t){var a,u;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=n.props.sendPasswordResetEmail,u=n.state.email,e.next=5,a(u);case 5:P.default.push("/password-reset-sent");case 6:case"end":return e.stop()}},e,l)}));return function(t){return e.apply(this,arguments)}}(),u=a,(0,E.default)(n,u)}return(0,w.default)(t,e),(0,_.default)(t,[{key:"render",value:function(){var e=this.props.status,t=this.state.email;return S.default.createElement(F.Row,null,S.default.createElement(F.Col,{sm:{size:6,offset:3}},S.default.createElement("h4",null,"Reset password"),S.default.createElement(F.Form,{onSubmit:this.handleSubmit},S.default.createElement(F.FormGroup,null,S.default.createElement(F.Label,null,"Enter your email"),S.default.createElement(F.Input,{name:"email",type:"email",value:t,onChange:this.handleChange})),S.default.createElement(F.ButtonPrimary,null,"Submit"),S.default.createElement(j.default,{status:e}))))}}]),t}(S.default.Component);t.default=(0,C.connect)(function(e){return{status:x.getSendPasswordResetEmailStatus(e)}},{sendPasswordResetEmail:M.sendPasswordResetEmail})(z)},454:function(e,t,a){e.exports=a(172)}},[454]);
            return { page: comp.default }
          })
        