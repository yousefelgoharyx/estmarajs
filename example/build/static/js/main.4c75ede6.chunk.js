(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[0],{10:function(e,a,t){},11:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(3),c=t.n(l),s=(t(10),t(4)),m=t(1),o=function(e){return r.a.createElement("div",{className:"form__group"},r.a.createElement(m.b,{model:e.model},r.a.createElement("input",{className:"form__input".concat(e.valid?" error":""),type:e.type,placeholder:e.label})),e.valid?e.valid.message:"")},i=function(e){return r.a.createElement("div",{className:"form__group"},r.a.createElement("button",Object.assign({className:"btn btn--green"},e),"Next step \u2192"))},p=function(e){var a=e.marginSize;return r.a.createElement("div",{className:"mb-".concat(a)},r.a.createElement("h2",{className:"heading-secondary"},"Start booking now"))},u=function(){var e=Object(m.d)({name:{type:"input",between:[3,16],message:"Name must be between 3 and 16 characters"},password:{type:"input",between:[8,16],message:"Name must be between 8 and 16 characters"},select:{type:"select",required:!0,message:"Select 1 thing at least"}}),a=Object(s.a)(e,2),t=a[0],n=a[1];return r.a.createElement("section",{className:"section-book"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"book"},r.a.createElement(m.a,{state:n},r.a.createElement("div",{className:"book__form"},r.a.createElement(p,{marginSize:"medium"}),r.a.createElement(o,{model:"name",type:"text",label:"Name",valid:t.errors.name}),r.a.createElement(o,{model:"password",type:"password",label:"Password",valid:t.errors.password}),r.a.createElement(m.b,{model:"select"},r.a.createElement("select",null,r.a.createElement("option",{value:""},"Select"),r.a.createElement("option",{value:"Apple"},"Apple"),r.a.createElement("option",{value:"Banana"},"Banana"))),t.errors.select?t.errors.select.message:"",r.a.createElement(i,{onClick:function(){Object(m.c)(n)}}))))))};var d=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u,null))};c.a.render(r.a.createElement(d,null),document.getElementById("root"))},5:function(e,a,t){e.exports=t(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.4c75ede6.chunk.js.map