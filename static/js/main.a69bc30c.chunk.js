(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{20:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),r=a(12),n=a.n(r),i=(a(20),a(21),a(7));var o=a(0);var l=function(e){e.categories,e.setCurrentCategory;var t=e.contactSelected,a=e.currentCategory,s=e.setContactSelected;return Object(c.useEffect)((function(){var e;document.title=(e=a.name).charAt(0).toUpperCase()+e.slice(1)}),[a]),Object(o.jsxs)("header",{className:"flex-row px-1",children:[Object(o.jsx)("h2",{children:Object(o.jsx)("a",{"data-testid":"link",href:"/",children:"ReactPortfolio"})}),Object(o.jsx)("nav",{children:Object(o.jsxs)("ul",{className:"flex-row",children:[Object(o.jsx)("li",{className:"mx-2",children:Object(o.jsx)("a",{"data-testid":"about",href:"#about",onClick:function(){return s(!1)},children:"About me"})}),Object(o.jsx)("li",{className:"mx-2",children:Object(o.jsx)("a",{"data-testid":"projects",href:"#projects",onClick:function(){return s(!1)},children:"Projects"})}),Object(o.jsx)("li",{className:"mx-2 ".concat(t&&"navActive"),children:Object(o.jsx)("span",{onClick:function(){return s(!0)},children:"Contact"})})]})})]})},j=a.p+"static/media/cover-image.257be7bd.jpg";var d=function(){return Object(o.jsxs)("section",{className:"my-5",children:[Object(o.jsx)("h1",{id:"about",children:"Welcome!"}),Object(o.jsx)("div",{className:"my-2",children:Object(o.jsx)("p",{children:"Thanks for stopping by my portfolio site. It's a bit drafty at the moment, but wanted to start sharing some projects from my full stack class. Outside of class I'm a product manager in NYC."})}),Object(o.jsx)("img",{src:j,className:"my-2",style:{width:"100%"},alt:"cover"})]})},b=a(9),h=a(3);var m=function(){var e=Object(c.useState)({name:"",email:"",message:""}),t=Object(i.a)(e,2),a=t[0],s=t[1],r=Object(c.useState)(""),n=Object(i.a)(r,2),l=n[0],j=n[1],d=a.name,m=a.email,u=a.message,x=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);j(t?"":"Your email is invalid.")}else e.target.value.length?j(""):j("".concat(e.target.name," is required."));l||(s(Object(h.a)(Object(h.a)({},a),{},Object(b.a)({},e.target.name,e.target.value))),console.log("Handle Form",a))};return Object(o.jsxs)("section",{children:[Object(o.jsx)("h1",{"data-testid":"h1tag",children:"Contact me"}),Object(o.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),l||console.log("Submit Form",a)},children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"name",children:"Your name:"}),Object(o.jsx)("input",{type:"text",name:"name",defaultValue:d,onBlur:x})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"email",children:"Your email address:"}),Object(o.jsx)("input",{type:"email",name:"email",defaultValue:m,onBlur:x})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"message",children:"Friendly messages only:"}),Object(o.jsx)("textarea",{name:"message",rows:"5",defaultValue:u,onBlur:x})]}),l&&Object(o.jsx)("div",{children:Object(o.jsx)("p",{className:"error-text",children:l})}),Object(o.jsx)("button",{"data-testid":"button",type:"submit",children:"Submit"})]})]})},u=a(25),x=a(26),O=a(2),p=a.p+"static/media/nasa.274a0f60.jpg",f=a.p+"static/media/passwordgenerator.7e3ca2de.jpg",g=a.p+"static/media/weatherdashboard.2a592c80.jpg",y=a.p+"static/media/cms.ab801dec.jpg",v=a.p+"static/media/notetaker.b5d40afc.jpg",w=a.p+"static/media/techblog.3c0deaf5.jpg";var k=function(){return Object(o.jsxs)(u.a,{children:[Object(o.jsx)("h1",{id:"projects",children:"Projects"}),Object(o.jsx)("p",{children:"Check out some of the recent projects I worked on in class: "}),Object(o.jsxs)(x.a,{class:"card-columns",children:[Object(o.jsxs)(O.a,{style:{width:"18rem"},children:[Object(o.jsx)(O.a.Img,{variant:"top",src:p}),Object(o.jsxs)(O.a.Body,{children:[Object(o.jsx)(O.a.Title,{children:"Password Generator"}),Object(o.jsx)(O.a.Text,{children:"A new way to create secure, unique passwords."}),Object(o.jsx)("a",{href:"https://github.com/kwalexander/password-generator",class:"btn btn-primary btn-md active",children:"GitHub Repo"})]})]}),Object(o.jsxs)(O.a,{style:{width:"18rem"},children:[Object(o.jsx)(O.a.Img,{variant:"top",src:f}),Object(o.jsxs)(O.a.Body,{children:[Object(o.jsx)(O.a.Title,{children:"Daily NASA"}),Object(o.jsx)(O.a.Text,{children:"Your one-stop-shop for your favorite out-of-this-world NASA photos."}),Object(o.jsx)("a",{href:"https://github.com/kwalexander/daily-NASA",class:"btn btn-primary btn-md active",children:"GitHub Repo"})]})]}),Object(o.jsxs)(O.a,{style:{width:"18rem"},children:[Object(o.jsx)(O.a.Img,{variant:"top",src:g}),Object(o.jsxs)(O.a.Body,{children:[Object(o.jsx)(O.a.Title,{children:"Weather Dashboard"}),Object(o.jsx)(O.a.Text,{children:"An app for querying local weather data to help you find the trip destination."}),Object(o.jsx)("a",{href:"https://github.com/kwalexander/weather-dashboard",class:"btn btn-primary btn-md active",children:"GitHub Repo"})]})]}),Object(o.jsxs)(O.a,{style:{width:"18rem"},children:[Object(o.jsx)(O.a.Img,{variant:"top",src:v}),Object(o.jsxs)(O.a.Body,{children:[Object(o.jsx)(O.a.Title,{children:"Note Taker"}),Object(o.jsx)(O.a.Text,{children:"An Express and Heroku app to keep your personal notes organized."}),Object(o.jsx)("a",{href:"https://github.com/kwalexander/note-taker",class:"btn btn-primary btn-md active",children:"GitHub Repo"})]})]}),Object(o.jsxs)(O.a,{style:{width:"18rem"},children:[Object(o.jsx)(O.a.Img,{variant:"top",src:y}),Object(o.jsxs)(O.a.Body,{children:[Object(o.jsx)(O.a.Title,{children:"CMS Tracker"}),Object(o.jsx)(O.a.Text,{children:"CLI tool for keeping track of large teams."}),Object(o.jsx)("a",{href:"https://github.com/kwalexander/cms-tracker",class:"btn btn-primary btn-md active",children:"GitHub Repo"})]})]}),Object(o.jsxs)(O.a,{style:{width:"18rem"},children:[Object(o.jsx)(O.a.Img,{variant:"top",src:w}),Object(o.jsxs)(O.a.Body,{children:[Object(o.jsx)(O.a.Title,{children:"Tech Blog"}),Object(o.jsx)(O.a.Text,{children:"A low frills version of YCombinator's Hacker News."}),Object(o.jsx)("a",{href:"https://github.com/kwalexander/tech-blog",class:"btn btn-primary btn-md active",children:"GitHub Repo"})]})]})]})]})};var C=function(){var e=Object(c.useState)([{name:"nasa",description:"View and save your favorite out-of-this-world NASA photos"},{name:"portraits",description:"Portraits of people in my life"},{name:"food",description:"Delicious delicacies"},{name:"landscape",description:"Fields, farmhouses, waterfalls, and the beauty of nature"}]),t=Object(i.a)(e,1)[0],a=Object(c.useState)(t[0]),s=Object(i.a)(a,2),r=s[0],n=s[1],j=Object(c.useState)(!1),b=Object(i.a)(j,2),h=b[0],u=b[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(l,{categories:t,setCurrentCategory:n,currentCategory:r,contactSelected:h,setContactSelected:u}),Object(o.jsx)("main",{children:h?Object(o.jsx)(m,{}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(d,{}),Object(o.jsx)(k,{})]})})]})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,27)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,n=t.getTTFB;a(e),c(e),s(e),r(e),n(e)}))};n.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(C,{})}),document.getElementById("root")),S()}},[[23,1,2]]]);
//# sourceMappingURL=main.a69bc30c.chunk.js.map