(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{32:function(t,n,e){},33:function(t,n,e){},39:function(t,n,e){"use strict";e.r(n);var c=e(0),r=e.n(c),a=e(8),o=e.n(a),i=(e(32),e(33),e(23)),s=e(17),u=e(7),j=e(24),l=e(58),b=e(55),d=e(57),f=e(2),O=Object(b.a)({form:{width:275,height:150,display:"flex",flexDirection:"column",justifyContent:"space-around"}}),h=function(t){var n=t.onInputChange,e=t.onButtonClick,c=O();return Object(f.jsxs)("form",{className:c.form,children:[Object(f.jsx)("label",{children:"Name"}),Object(f.jsx)("input",{type:"text",onChange:n,id:"name"}),Object(f.jsx)("label",{children:"Number"}),Object(f.jsx)("input",{type:"text",onChange:n,id:"number"}),Object(f.jsx)(d.a,{variant:"contained",color:"primary",size:"small",onClick:e,children:"Add contact"})]})},p=function(t){var n=t.onInputFind;return Object(f.jsxs)("div",{children:[Object(f.jsx)("p",{children:"Find contacts by name"}),Object(f.jsx)("input",{type:"text",onChange:n,id:"find"})]})},m=function(t){var n=t.filter,e=t.contacts,c=t.onFilterContacts,r=t.onDelete;return Object(f.jsx)("ul",{children:(n?c():e).map((function(t){var n=t.id,e=t.name,c=t.number;return Object(f.jsxs)("li",{children:[e,": ",c,Object(f.jsx)(d.a,{color:"secondary",type:"button",id:n,onClick:r,children:"Delete"})]},n)}))})},x=function(){var t=Object(c.useState)({contacts:[],filter:""}),n=Object(j.a)(t,2),e=n[0],r=n[1],a=function(){var t=e.contacts.map((function(t){return t.name})).includes(e.name);return t};return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(h,{onInputChange:function(t){var n=t.target.id;r((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(s.a)({},n,t.target.value))}))},onButtonClick:function(t){t.preventDefault(),a()?alert("".concat(e.name," is already in contacts.")):r((function(t){return Object(u.a)(Object(u.a)({},t),{},{contacts:[].concat(Object(i.a)(e.contacts),[{id:Object(l.a)(),name:e.name,number:e.number}])})}))}}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(p,{onInputFind:function(t){r((function(n){return Object(u.a)(Object(u.a)({},n),{},{filter:t.target.value})}))}}),Object(f.jsx)(m,{filter:e.filter,contacts:e.contacts,onFilterContacts:function(){return e.contacts.filter((function(t){return t.name.toLowerCase().includes(e.filter.toLowerCase())}))},onDelete:function(t){var n;e.contacts.splice((n=t.target.id,e.contacts.map((function(t){return t.id})).indexOf(n)),1),r((function(t){return Object(u.a)({},t)}))}})]})};var v=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(x,{})})};o.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(v,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.95c664a3.chunk.js.map