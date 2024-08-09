import './polyfills.server.mjs';
import{A as T,C as R,D as F,G as L,K as U,N,O as A,P as I,a as c,b as h,c as C,d as M,e as E,f as w,g as u,h as k,i as P,j as e,k as t,l as a,m as x,n as m,o as O,p as f,q as g,r as y,s,t as d}from"./chunk-6CA5TZLW.mjs";var Q=(()=>{let n=class n{};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=c({type:n,selectors:[["app-myfooter"]],standalone:!0,features:[d],decls:29,vars:0,consts:[[1,"the-footer","d-flex","justify-content-evenly","py-5","text-center"],[1,"loaction"],[1,"web"],[1,"social-media"],[1,"d-flex","align-items-center","justify-content-center"],[1,"me-3","circle","text-center"],[1,"text-light","fa-brands","fa-facebook"],[1,"text-light","fa-brands","fa-twitter"],[1,"text-light","fa-brands","fa-linkedin-in"],[1,"text-light","fa-solid","fa-globe"],[1,"FREELANCER"],[1,"copy-wite","text-center","py-2"]],template:function(i,o){i&1&&(e(0,"div",0)(1,"div",1)(2,"h3"),s(3,"LOCATION"),t(),e(4,"p"),s(5,"2215 John Daniel Drive"),t(),e(6,"p"),s(7,"Clark, MO 65243"),t()(),e(8,"div",2)(9,"h3"),s(10,"AROUND THE WEB"),t(),e(11,"div",3)(12,"ul",4)(13,"li",5),a(14,"i",6),t(),e(15,"li",5),a(16,"i",7),t(),e(17,"li",5),a(18,"i",8),t(),e(19,"li",5),a(20,"i",9),t()()()(),e(21,"div",10)(22,"h3"),s(23,"ABOUT FREELANCER"),t(),e(24,"p"),s(25,"Freelance is a free to use, licensed Bootstrap theme created by Route"),t()()(),e(26,"div",11)(27,"p"),s(28,"Copyright \xA9 Your Website 2021"),t()())},styles:[".the-footer[_ngcontent-%COMP%]{background-color:#2c3e50}ul[_ngcontent-%COMP%]{list-style:none;text-decoration:none;padding:0;margin:0}.circle[_ngcontent-%COMP%]{width:30px;height:30px;border:1px white solid;border-radius:50%}.copy-wite[_ngcontent-%COMP%]{background-color:#1a252f}h3[_ngcontent-%COMP%]{font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;font-weight:500;color:#fff;font-size:28px}p[_ngcontent-%COMP%]{font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;font-weight:400;color:#fff;font-size:16px}"]});let l=n;return l})();var v=(()=>{let n=class n{};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=c({type:n,selectors:[["app-mynav"]],inputs:{dataparent:"dataparent"},standalone:!0,features:[d],decls:17,vars:3,consts:[[1,"container"],["routerLink","/",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","ms-auto","mb-2","mb-lg-0"],[1,"nav-item"],["routerLink","/about","routerLinkActive","bg-me text-center rounded-3",1,"nav-link"],["routerLink","/portfolio","routerLinkActive","bg-me text-center rounded-3",1,"nav-link"],["routerLink","/contact","routerLinkActive","bg-me text-center rounded-3",1,"nav-link"]],template:function(i,o){i&1&&(e(0,"nav")(1,"div",0)(2,"a",1),s(3,"START FRAMEWORK"),t(),e(4,"button",2),a(5,"span",3),t(),e(6,"div",4)(7,"ul",5)(8,"li",6)(9,"a",7),s(10,"ABOUT"),t()(),e(11,"li",6)(12,"a",8),s(13,"PORTFOLIO"),t()(),e(14,"li",6)(15,"a",9),s(16,"CONTACT"),t()()()()()()),i&2&&k("navbar my-nav navbar-expand-lg ",o.dataparent,"")},dependencies:[N,A],styles:[".my-nav[_ngcontent-%COMP%]{background-color:#2c3e50;position:sticky;top:0;left:0;z-index:999999;transition:all .5s}.bg-me[_ngcontent-%COMP%]{background-color:#1abc9c;transition:all 1s}.nav-link[_ngcontent-%COMP%]{color:#fff}.navbar-brand[_ngcontent-%COMP%]{font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;font-weight:700;color:#fff;font-size:32px}.nav-link[_ngcontent-%COMP%]{font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;font-weight:700;color:#fff;font-size:16px}"]});let l=n;return l})();var D=(()=>{let n=class n{constructor(){this.data="py-4"}navfunc(){document.addEventListener("scroll",()=>{document.body.scrollTop>50||document.documentElement.scrollTop>50?this.data="py-2":this.data="py-4"})}};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=c({type:n,selectors:[["app-home"]],standalone:!0,features:[d],decls:11,vars:1,consts:[[3,"dataparent"],[1,"the-home","d-flex","justify-content-center","align-items-center","py-5",3,"mouseenter"],[1,"thehome-content","text-center","py-3"],["src","https://routeegy.github.io/startFramework/assets/images/avataaars.svg","width","300","alt","smile face"],[1,"the-star","p-3","text-center"],[1,"my-star","position-relative"],[1,"text-light","fa-solid","fa-star"]],template:function(i,o){i&1&&(a(0,"app-mynav",0),e(1,"div",1),m("mouseenter",function(){return o.navfunc()}),e(2,"div",2),a(3,"img",3),e(4,"h2"),s(5,"start Framework"),t(),e(6,"div",4)(7,"span",5),a(8,"i",6),t()(),e(9,"p"),s(10,"Graphic Artist - Web Designer - Illustrator"),t()()()),i&2&&u("dataparent",o.data)},dependencies:[v],styles:['.the-home[_ngcontent-%COMP%]{background-color:#1abc9c}.my-star[_ngcontent-%COMP%]:before{content:"";padding:1px 70px;background-color:#fff;position:absolute;top:10px;right:25px}.my-star[_ngcontent-%COMP%]:after{content:"";padding:1px 70px;background-color:#fff;position:absolute;top:10px;left:25px}h2[_ngcontent-%COMP%]{font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;font-weight:700;color:#fff;font-size:40px}p[_ngcontent-%COMP%]{font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;font-weight:400;color:#fff;font-size:16px}']});let l=n;return l})();var H=(()=>{let n=class n{constructor(){this.data="py-4"}mm(){document.addEventListener("scroll",()=>{document.body.scrollTop>100||document.documentElement.scrollTop>100?this.data="py-2":this.data="py-4"})}};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=c({type:n,selectors:[["app-about"]],standalone:!0,features:[d],decls:14,vars:1,consts:[[3,"dataparent"],[1,"the-about","d-flex","align-items-center","justify-content-center","py-5",3,"mouseenter"],[1,"theabout-content","py-5","my-5"],[1,"inner","py-5","my-3"],[1,"text-center","mb-0"],[1,"the-star","p-3","text-center","mt-0"],[1,"my-star","position-relative"],[1,"text-light","fa-solid","fa-star"],[1,"about-prag","d-flex","align-items-center","justify-content-between","mx-auto"],[1,"width"]],template:function(i,o){i&1&&(a(0,"app-mynav",0),e(1,"div",1),m("mouseenter",function(){return o.mm()}),e(2,"div",2)(3,"div",3)(4,"h2",4),s(5,"ABOUT COMPONENT"),t(),e(6,"div",5)(7,"span",6),a(8,"i",7),t()(),e(9,"div",8)(10,"p",9),s(11," Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. "),t(),e(12,"p",9),s(13," Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. "),t()()()()()),i&2&&u("dataparent",o.data)},dependencies:[v],styles:['.the-about[_ngcontent-%COMP%]{background-color:#1abc9c}.theabout-content[_ngcontent-%COMP%]{width:75%}.width[_ngcontent-%COMP%]{width:49%}.my-star[_ngcontent-%COMP%]:before{content:"";padding:2px 45px;background-color:#fff;position:absolute;top:10px;right:25px}.my-star[_ngcontent-%COMP%]:after{content:"";padding:2px 45px;background-color:#fff;position:absolute;top:10px;left:25px}h2[_ngcontent-%COMP%]{font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;font-weight:700;color:#fff;font-size:40px}p[_ngcontent-%COMP%]{font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;font-weight:400;color:#fff;font-size:16px}']});let l=n;return l})();var Y=["light"];function G(l,n){if(l&1){let S=x();e(0,"div",18,0),m("click",function(i){h(S);let o=O();return C(o.ligthfunc(i))}),a(2,"img",19),t()}if(l&2){let S=O();E(2),u("src",S.theCurentImg,M)}}var z=(()=>{let n=class n{constructor(){this.ischeecked=!1,this.theCurentImg="",this.data="py-4"}open(p){this.ischeecked=!0,this.theCurentImg="./assets/images/"+p}close(){this.ischeecked=!1}ligthfunc(p){p.target==this.lightcomp.nativeElement&&this.close()}navfun(){document.addEventListener("scroll",()=>{document.body.scrollTop>100||document.documentElement.scrollTop>100?this.data="py-2":this.data="py-4"})}};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=c({type:n,selectors:[["app-portfolio"]],viewQuery:function(i,o){if(i&1&&f(Y,5),i&2){let r;g(r=y())&&(o.lightcomp=r.first)}},standalone:!0,features:[d],decls:47,vars:2,consts:[["light",""],[3,"dataparent"],[1,"theportfolio","py-5",3,"mouseenter"],[1,"title","text-center"],[1,"mb-0"],[1,"the-star","p-3","text-center","mt-0"],[1,"my-star","position-relative"],[1,"color","fa-solid","fa-star"],[1,"container","text-center","py-5"],[1,"row","g-4"],[1,"col-md-6","col-lg-4",3,"click"],[1,"inner","rounded","position-relative","bg-danger","overflow-hidden"],["src","./assets/images/poert1.png","alt","",1,"w-100"],[1,"layer"],[1,"fs-1","text-light","fa-solid","fa-plus"],["src","./assets/images/port3.png","alt","",1,"w-100"],["src","./assets/images/port2.png","alt","",1,"w-100"],[1,"light","d-flex","align-items-center","justify-content-center"],[1,"light","d-flex","align-items-center","justify-content-center",3,"click"],["width","600px","alt","the portfolio image",3,"src"]],template:function(i,o){i&1&&(a(0,"app-mynav",1),e(1,"div",2),m("mouseenter",function(){return o.navfun()}),e(2,"div",3)(3,"h2",4),s(4,"PORTFOLIO COMPONENT"),t(),e(5,"div",5)(6,"span",6),a(7,"i",7),t()()(),e(8,"div",8)(9,"div",9)(10,"div",10),m("click",function(){return o.open("poert1.png")}),e(11,"div",11)(12,"div"),a(13,"img",12),t(),e(14,"div",13),a(15,"i",14),t()()(),e(16,"div",10),m("click",function(){return o.open("port3.png")}),e(17,"div",11)(18,"div"),a(19,"img",15),t(),e(20,"div",13),a(21,"i",14),t()()(),e(22,"div",10),m("click",function(){return o.open("port2.png")}),e(23,"div",11)(24,"div"),a(25,"img",16),t(),e(26,"div",13),a(27,"i",14),t()()(),e(28,"div",10),m("click",function(){return o.open("poert1.png")}),e(29,"div",11)(30,"div"),a(31,"img",12),t(),e(32,"div",13),a(33,"i",14),t()()(),e(34,"div",10),m("click",function(){return o.open("port3.png")}),e(35,"div",11)(36,"div"),a(37,"img",15),t(),e(38,"div",13),a(39,"i",14),t()()(),e(40,"div",10),m("click",function(){return o.open("port2.png")}),e(41,"div",11)(42,"div"),a(43,"img",16),t(),e(44,"div",13),a(45,"i",14),t()()()()(),w(46,G,3,1,"div",17),t()),i&2&&(u("dataparent",o.data),E(46),P(46,o.ischeecked==!0?46:-1))},dependencies:[v],styles:['.color[_ngcontent-%COMP%]{color:#2c3e50}.my-star[_ngcontent-%COMP%]:before{content:"";padding:1px 40px;background-color:#2c3e50;position:absolute;top:10px;right:25px}.my-star[_ngcontent-%COMP%]:after{content:"";padding:1px 40px;background-color:#2c3e50;position:absolute;top:10px;left:25px}.layer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;background-color:#1aba9f;position:absolute;inset:0;opacity:0;transition:all 1s}.inner[_ngcontent-%COMP%]:hover   .layer[_ngcontent-%COMP%]{opacity:1}body[_ngcontent-%COMP%]{position:relative}.light[_ngcontent-%COMP%]{position:fixed;inset:0;background-color:#5656dd4d;z-index:999999}h2[_ngcontent-%COMP%]{font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;font-weight:700;color:#2c3e50;font-size:40px}']});let l=n;return l})();var K=["prag1"],X=["input1"],Z=["prag2"],$=["input2"],ee=["prag3"],te=["input3"],ne=["prag4"],ie=["input4"],B=(()=>{let n=class n{constructor(){this.data="py-4"}inputfun1(){let p=0,i=this.input1.nativeElement.value.length;p-i<0?(this.prag1.nativeElement.classList.add("opacity-100"),this.prag1.nativeElement.classList.add("translate-middle-y")):(this.prag1.nativeElement.classList.remove("opacity-100"),this.prag1.nativeElement.classList.remove("translate-middle-y"))}inputfun2(){let p=0,i=this.input2.nativeElement.value.length;p-i<0?(this.prag2.nativeElement.classList.add("opacity-100"),this.prag2.nativeElement.classList.add("translate-middle-y")):(this.prag2.nativeElement.classList.remove("opacity-100"),this.prag2.nativeElement.classList.remove("translate-middle-y"))}inputfun3(){let p=0,i=this.input3.nativeElement.value.length;p-i<0?(this.prag3.nativeElement.classList.add("opacity-100"),this.prag3.nativeElement.classList.add("translate-middle-y")):(this.prag3.nativeElement.classList.remove("opacity-100"),this.prag3.nativeElement.classList.remove("translate-middle-y"))}inputfun4(){let p=0,i=this.input4.nativeElement.value.length;p-i<0?(this.prag4.nativeElement.classList.add("opacity-100"),this.prag4.nativeElement.classList.add("translate-middle-y")):(this.prag4.nativeElement.classList.remove("opacity-100"),this.prag4.nativeElement.classList.remove("translate-middle-y"))}navfun(){document.addEventListener("scroll",()=>{document.body.scrollTop>100||document.documentElement.scrollTop>100?this.data="py-2":this.data="py-4"})}};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=c({type:n,selectors:[["app-contact"]],viewQuery:function(i,o){if(i&1&&(f(K,5),f(X,5),f(Z,5),f($,5),f(ee,5),f(te,5),f(ne,5),f(ie,5)),i&2){let r;g(r=y())&&(o.prag1=r.first),g(r=y())&&(o.input1=r.first),g(r=y())&&(o.prag2=r.first),g(r=y())&&(o.input2=r.first),g(r=y())&&(o.prag3=r.first),g(r=y())&&(o.input3=r.first),g(r=y())&&(o.prag4=r.first),g(r=y())&&(o.input4=r.first)}},standalone:!0,features:[d],decls:33,vars:1,consts:[["prag1",""],["input1",""],["prag2",""],["input2",""],["prag3",""],["input3",""],["prag4",""],["input4",""],[3,"dataparent"],[1,"the-contact","py-5",3,"mouseenter"],[1,"title","text-center"],[1,"mb-0"],[1,"the-star","p-3","text-center","mt-0"],[1,"my-star","position-relative"],[1,"color","fa-solid","fa-star"],[1,"thecontact-content"],[1,"container","w-50","my-5"],[1,"apper"],["type","text","placeholder","userName","name","name","autocomplete","off",1,"overflow-hidden","form-control","mb-3",3,"input"],["type","text","placeholder","userAge","name","age","autocomplete","off",1,"overflow-hidden","form-control","mb-3",3,"input"],["type","text","placeholder","userEmail","name","email","autocomplete","off",1,"overflow-hidden","form-control","mb-3",3,"input"],["type","text","placeholder","userPassword","name","password","autocomplete","off",1,"overflow-hidden","form-control","mb-3",3,"input"],["type","button",1,"my-btn","p-2","rounded"]],template:function(i,o){if(i&1){let r=x();a(0,"app-mynav",8),e(1,"div",9),m("mouseenter",function(){return h(r),C(o.navfun())}),e(2,"div",10)(3,"h2",11),s(4,"CONATCT SECTION"),t(),e(5,"div",12)(6,"span",13),a(7,"i",14),t()()(),e(8,"div",15)(9,"div",16)(10,"form")(11,"p",17,0),s(13,"userName:"),t(),e(14,"input",18,1),m("input",function(){return h(r),C(o.inputfun1())}),t(),e(16,"p",17,2),s(18,"userAge:"),t(),e(19,"input",19,3),m("input",function(){return h(r),C(o.inputfun2())}),t(),e(21,"p",17,4),s(23,"userEmail:"),t(),e(24,"input",20,5),m("input",function(){return h(r),C(o.inputfun3())}),t(),e(26,"p",17,6),s(28,"userPassword:"),t(),e(29,"input",21,7),m("input",function(){return h(r),C(o.inputfun4())}),t(),e(31,"button",22),s(32,"send Message"),t()()()()()}i&2&&u("dataparent",o.data)},dependencies:[v],styles:['.color[_ngcontent-%COMP%]{color:#2c3e50}.my-star[_ngcontent-%COMP%]:before{content:"";padding:2px 45px;background-color:#2c3e50;position:absolute;top:10px;right:25px}.my-star[_ngcontent-%COMP%]:after{content:"";padding:2px 45px;background-color:#2c3e50;position:absolute;top:10px;left:25px}.form-control[_ngcontent-%COMP%]{border:none;border-bottom:1px solid rgba(128,128,128,.7)}[_ngcontent-%COMP%]::placeholder{color:#808080cc}.my-btn[_ngcontent-%COMP%]{background-color:#1abc9c;border:#1abc9c solid}input[_ngcontent-%COMP%]:focus{border:none;border-bottom:1px solid rgba(128,128,128,.7);box-shadow:none}.apper[_ngcontent-%COMP%]{opacity:0;transform:translateY(100%);transition:all 1s}h2[_ngcontent-%COMP%]{font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;font-weight:700;color:#2c3e50;font-size:40px}.apper[_ngcontent-%COMP%]{font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;font-weight:400;color:#1abc9c;font-size:16px}.my-btn[_ngcontent-%COMP%]{font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;font-weight:400;color:#fff;font-size:16px}input[_ngcontent-%COMP%]{font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;font-weight:400;color:#212529;font-size:16px}']});let l=n;return l})();var V=(()=>{let n=class n{};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=c({type:n,selectors:[["app-root"]],standalone:!0,features:[d],decls:2,vars:0,template:function(i,o){i&1&&a(0,"router-outlet")(1,"app-myfooter")},dependencies:[U,Q]});let l=n;return l})();var q=(()=>{let n=class n{constructor(){this.data="py-4"}navfunc(){document.addEventListener("scroll",()=>{document.body.scrollTop>100||document.documentElement.scrollTop>100?this.data="py-2":this.data="py-4"})}};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=c({type:n,selectors:[["app-notfound"]],standalone:!0,features:[d],decls:4,vars:1,consts:[[3,"dataparent"],[1,"container-fluid",3,"mouseenter"]],template:function(i,o){i&1&&(a(0,"app-mynav",0),e(1,"div",1),m("mouseenter",function(){return o.navfunc()}),e(2,"p"),s(3,"notfound works!"),t()()),i&2&&u("dataparent",o.data)},dependencies:[v],styles:[".container-fluid[_ngcontent-%COMP%]{height:80vh}"]});let l=n;return l})();var j=[{path:"",component:D,title:"home"},{path:"about",component:H,title:"about"},{path:"portfolio",component:z,title:"portfolio"},{path:"contact",component:B,title:"contact"},{path:"**",component:q,title:"404"}];var W={providers:[I(j),F()]};var oe={providers:[L()]},J=T(W,oe);var ae=()=>R(V,J),Ge=ae;export{Ge as a};
