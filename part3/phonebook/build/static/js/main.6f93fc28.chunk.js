(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{23:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var c=t(2),r=t.n(c),u=t(17),a=t.n(u),o=(t(23),t(18)),i=t(8),s=t(3),l=t(5),d=t.n(l),f="/api/persons",j={getAll:function(){return d.a.get(f).then((function(e){return e.data}))},create:function(e){return d.a.post(f,e).then((function(e){return e.data}))},deleteUser:function(e,n){return d.a.delete("".concat(f,"/").concat(e),n).then((function(e){return e.data}))},updatePhone:function(e,n){return d.a.put("".concat(f,"/").concat(e),n).then((function(e){return e.data}))}},b=t(0),m=function(e){var n=e.message,t=e.messageClass;return null===n?null:Object(b.jsx)("div",{className:"".concat(t),children:n})},h=function(e){var n=e.value,t=e.f;return Object(b.jsxs)("div",{children:["filter: ",Object(b.jsx)("input",{value:n,onChange:t})]})},O=function(e){var n=e.formFunction,t=e.nameFunction,c=e.numberFunction,r=e.numberValue,u=e.nameValue;return Object(b.jsxs)("form",{onSubmit:n,children:[Object(b.jsxs)("div",{children:["name: ",Object(b.jsx)("input",{value:u,onChange:t})]}),Object(b.jsxs)("div",{children:["number: ",Object(b.jsx)("input",{value:r,onChange:c})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{type:"submit",children:"add"})})]})},p=function(e){var n=e.filteredPersons,t=e.deleteUser,c=n.map((function(e){return Object(b.jsxs)("li",{children:[" ",e.name," ",e.number," ",Object(b.jsx)("button",{onClick:function(){return t(e.id)},children:" Delete "}),"  "]},e.id)}));return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("ul",{children:c})})},v=function(){var e=Object(c.useState)([]),n=Object(s.a)(e,2),t=n[0],r=n[1],u=Object(c.useState)(""),a=Object(s.a)(u,2),l=a[0],d=a[1],f=Object(c.useState)(""),v=Object(s.a)(f,2),x=v[0],g=v[1],w=Object(c.useState)(""),C=Object(s.a)(w,2),S=C[0],k=C[1],F=Object(c.useState)(""),U=Object(s.a)(F,2),y=U[0],P=U[1],T=Object(c.useState)(""),V=Object(s.a)(T,2),A=V[0],D=V[1];Object(c.useEffect)((function(){j.getAll().then((function(e){return r(e)}))}),[]);var E=t.filter((function(e){return""===l?e:e.name.toUpperCase().includes(l.toUpperCase())}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Phonebook"}),Object(b.jsx)(m,{message:y,messageClass:A}),Object(b.jsx)(h,{value:l,f:function(e){d(e.target.value)}}),Object(b.jsx)("h3",{children:"Add a new"}),Object(b.jsx)(O,{formFunction:function(e){if(e.preventDefault(),-1===t.findIndex((function(e){return e.name===x}))){if(""!==x&&""!==S){var n={name:x,number:S};j.create(n).then((function(e){r([].concat(Object(o.a)(t),[n])),D("sucess"),P(" ".concat(x," added to the phonebook")),setTimeout((function(){P(null)}),5e3)})).catch((function(e){D("error"),P("".concat(e.response.data.error)),setTimeout((function(){P(null)}),5e3)}))}}else!function(){var e=t.find((function(e){return e.name===x})),n=e.id;if(""!==S&&window.confirm("".concat(e.name," already exists, do you want to update the number?"))){var c=Object(i.a)(Object(i.a)({},e),{},{number:S});j.updatePhone(n,c).then((function(e){r(t.map((function(t){return t.id!==n?t:e}))),D("sucess"),P("".concat(x," phone updated!")),setTimeout((function(){P(null)}),5e3)})).catch((function(e){D("error"),P("".concat(e.response.data.error)),setTimeout((function(){P(null)}),5e3)}))}}()},nameValue:x,nameFunction:function(e){g(e.target.value)},numberValue:S,numberFunction:function(e){k(e.target.value)}}),Object(b.jsx)("h2",{children:"Numbers"}),Object(b.jsx)(p,{filteredPersons:E,deleteUser:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name))&&j.deleteUser(e,n).then((function(){return r(t.filter((function(n){return n.id!==e})))})).catch((function(){P("".concat(n.name," was already removed from server")),D("error"),setTimeout((function(){P(null)}),5e3)}))}})]})};a.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.6f93fc28.chunk.js.map